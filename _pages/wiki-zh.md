---
layout: home-wide
permalink: /zh/wiki/
title: "组内 Wiki"
excerpt: ""
author_profile: false
lang: zh
nav: wiki
alt_url: /wiki/
---

<section class="home-section wiki-hero" id="wiki-top" markdown="1">
  <p class="wiki-kicker">组内 Wiki</p>
  <p>这里用于整理面向组内学生、潜在学生和合作者的公共资源，包括项目实例、入门资源、论文写作、科研经验、推荐工具和项目备忘。</p>
</section>

<section class="home-section wiki-section" id="project-examples" markdown="1">

# 项目实例

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>

<section class="home-section wiki-section" id="onboarding" markdown="1">

# 入门资源

<div class="wiki-entry-list">
  {% assign onboarding_notes = site.wiki | where: "lang", "zh" | where: "category", "onboarding" | where: "status", "published" | sort: "date" | reverse %}
  {% if onboarding_notes.size > 0 %}
    {% for note in onboarding_notes %}
      <article class="wiki-entry-card">
        <a class="wiki-entry-card__title" href="{{ note.url | relative_url }}" target="_self">{{ note.title }}</a>
      </article>
    {% endfor %}
  {% else %}
    <p class="wiki-empty">待更新。</p>
  {% endif %}
</div>

</section>

<section class="home-section wiki-section" id="writing-guidelines" markdown="1">

# 论文写作

<div class="wiki-entry-list">
  {% assign writing_notes = site.wiki | where: "lang", "zh" | where: "category", "writing" | where: "status", "published" | sort: "date" | reverse %}
  {% if writing_notes.size > 0 %}
    {% for note in writing_notes %}
      <article class="wiki-entry-card">
        <a class="wiki-entry-card__title" href="{{ note.url | relative_url }}" target="_self">{{ note.title }}</a>
      </article>
    {% endfor %}
  {% else %}
    <p class="wiki-empty">待更新。</p>
  {% endif %}
</div>

</section>

<section class="home-section wiki-section" id="research-tips" markdown="1">

# 科研经验

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>

<section class="home-section wiki-section" id="tools" markdown="1">

# 推荐工具

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>

<section class="home-section wiki-section" id="teaching-resources" markdown="1">

# 教学资源

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>

<section class="home-section wiki-section" id="project-notes" markdown="1">

# 项目备忘

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>
