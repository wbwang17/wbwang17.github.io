---
layout: home-wide
permalink: /wiki/
title: "Lab Wiki"
excerpt: ""
author_profile: false
lang: en
nav: wiki
alt_url: /zh/wiki/
---

<section class="home-section wiki-hero" id="wiki-top" markdown="1">
  <p class="wiki-kicker">Lab Wiki</p>
  <p>This page collects project examples, writing guidelines, research tips (including starter resources and tool recommendations), teaching resources, and project notes for students and collaborators.</p>
</section>

<section class="home-section wiki-section" id="project-examples" markdown="1">

# Project Examples

Paper-code examples, reproducible student projects, and practice tasks will be collected here to help new students quickly learn the group's research workflow.

<div class="wiki-entry-list">
  <p class="wiki-empty">TBD.</p>
</div>

</section>

<section class="home-section wiki-section" id="writing-guidelines" markdown="1">

# Writing Guidelines

Guidelines and examples for paper writing, revision, rebuttal preparation, figure/table polishing, and academic presentation.

<div class="wiki-entry-list">
  <p class="wiki-empty">TBD.</p>
</div>

</section>

<section class="home-section wiki-section" id="research-tips" markdown="1">

# Research Tips

Starter readings, learning paths, research setup, coding conventions, recommended software and tools, and experience notes on reading papers, designing experiments, organizing research logs, and discussing ideas.

<div class="wiki-entry-list">
  {% assign research_notes = site.wiki | where: "lang", "en" | where: "category", "research-tips" | where: "status", "published" | sort: "date" | reverse %}
  {% if research_notes.size > 0 %}
    {% for note in research_notes %}
      <article class="wiki-entry-card">
        <a class="wiki-entry-card__title" href="{{ note.url | relative_url }}" target="_self">{{ note.title }}</a>
      </article>
    {% endfor %}
  {% else %}
    <p class="wiki-empty">TBD.</p>
  {% endif %}
</div>

</section>

<section class="home-section wiki-section" id="teaching-resources" markdown="1">

# Teaching Resources

Course materials, lecture notes, assignment instructions, teaching examples, and reusable resources for group-related teaching activities will be collected here.

<div class="wiki-entry-list">
  <p class="wiki-empty">TBD.</p>
</div>

</section>

<section class="home-section wiki-section" id="project-notes" markdown="1">

# Project Notes

Project memos, milestone notes, task checklists, and reusable technical notes for ongoing or completed group projects.

<div class="wiki-entry-list">
  <p class="wiki-empty">TBD.</p>
</div>

</section>
