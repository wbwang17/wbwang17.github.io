const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(
  path.join(__dirname, "../../assets/js/wiki-new-badges.js"),
  "utf8"
);
const publishedAt = Date.parse("2026-08-27T09:00:00+08:00");
const lifetime = 72 * 60 * 60 * 1000;

function runBadges(timestamps, now) {
  const badges = timestamps.map((timestamp) => ({
    hidden: true,
    getAttribute: () => timestamp
  }));
  const timers = new Map();
  const documentEvents = {};
  const windowEvents = {};
  let timerId = 0;
  let clock = now;

  const document = {
    hidden: false,
    querySelectorAll: () => badges,
    addEventListener: (name, callback) => { documentEvents[name] = callback; }
  };
  const window = {
    clearTimeout: (id) => timers.delete(id),
    setTimeout: (callback, delay) => {
      timers.set(++timerId, { callback, delay });
      return timerId;
    },
    addEventListener: (name, callback) => { windowEvents[name] = callback; }
  };
  class Clock extends Date {
    static now() { return clock; }
  }
  vm.runInNewContext(source, { document, window, Date: Clock });

  return {
    badges, timers, document, documentEvents, windowEvents,
    setTime: (time) => { clock = time; },
    fireTimer: () => {
      const [id, timer] = timers.entries().next().value;
      timers.delete(id);
      timer.callback();
    }
  };
}

test("shows a post at publication and until just before 72 hours", () => {
  for (const age of [0, 1, lifetime - 1]) {
    const result = runBadges(["2026-08-27T09:00:00+08:00"], publishedAt + age);
    assert.equal(result.badges[0].hidden, false);
    assert.equal(result.timers.size, 1);
  }
});

test("hides a post at exactly 72 hours and after expiry", () => {
  for (const age of [lifetime, lifetime + 1, 7 * lifetime]) {
    const result = runBadges(["2026-08-27T09:00:00+08:00"], publishedAt + age);
    assert.equal(result.badges[0].hidden, true);
    assert.equal(result.timers.size, 0);
  }
});

test("hides future timestamps until publication", () => {
  const result = runBadges(["2026-08-27T09:00:00+08:00"], publishedAt - 1);
  assert.equal(result.badges[0].hidden, true);
  assert.equal([...result.timers.values()][0].delay, 1);
  result.setTime(publishedAt);
  result.fireTimer();
  assert.equal(result.badges[0].hidden, false);
});

test("treats explicit time zones as equivalent instants", () => {
  const result = runBadges([
    "2026-08-27T09:00:00+08:00",
    "2026-08-27T01:00:00Z",
    "2026-08-26T18:00:00-07:00"
  ], publishedAt);
  assert.ok(result.badges.every((badge) => !badge.hidden));
});

test("keeps missing, invalid, and timezone-free timestamps hidden", () => {
  const result = runBadges([
    null, "", "invalid", "2026-08-27", "2026-08-27T09:00:00",
    "2026-99-27T09:00:00+08:00"
  ], publishedAt);
  assert.ok(result.badges.every((badge) => badge.hidden));
  assert.equal(result.timers.size, 0);
});

test("expires badges on an open page without a reload", () => {
  const result = runBadges(["2026-08-27T09:00:00+08:00"], publishedAt + lifetime - 1);
  assert.equal([...result.timers.values()][0].delay, 1);
  result.setTime(publishedAt + lifetime);
  result.fireTimer();
  assert.equal(result.badges[0].hidden, true);
  assert.equal(result.timers.size, 0);
});

test("pauses timers while hidden and refreshes when returning to the page", () => {
  const result = runBadges(["2026-08-27T09:00:00+08:00"], publishedAt);
  result.document.hidden = true;
  result.documentEvents.visibilitychange();
  assert.equal(result.timers.size, 0);
  result.setTime(publishedAt + lifetime);
  result.document.hidden = false;
  result.documentEvents.visibilitychange();
  assert.equal(result.badges[0].hidden, true);
});

test("refreshes restored pages without accumulating timers", () => {
  const result = runBadges(["2026-08-27T09:00:00+08:00"], publishedAt);
  result.windowEvents.pageshow();
  assert.equal(result.timers.size, 1);
  result.setTime(publishedAt + lifetime);
  result.windowEvents.pageshow();
  assert.equal(result.badges[0].hidden, true);
  assert.equal(result.timers.size, 0);
});

test("uses a single bounded timer for mixed recent, old, and future posts", () => {
  const result = runBadges([
    "2026-08-27T09:00:00+08:00",
    "2026-08-23T09:00:00+08:00",
    "2026-08-28T09:00:00+08:00"
  ], publishedAt);
  assert.deepEqual(result.badges.map((badge) => badge.hidden), [false, true, true]);
  assert.equal(result.timers.size, 1);
  assert.equal([...result.timers.values()][0].delay, 60000);
});

test("does not register timers or listeners when a page has no badges", () => {
  const result = runBadges([], publishedAt);
  assert.equal(result.timers.size, 0);
  assert.deepEqual(result.documentEvents, {});
  assert.deepEqual(result.windowEvents, {});
});
