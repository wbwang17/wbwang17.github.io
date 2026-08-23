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

这里会整理学生论文代码、可复现实验项目和练手任务，帮助后续学生快速熟悉组内研究流程和代码组织方式。

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>

<section class="home-section wiki-section" id="onboarding" markdown="1">

# 入门资源

这里会整理新同学入门材料，包括研究环境配置、基础阅读材料、代码规范和推荐学习路径。

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>

<section class="home-section wiki-section" id="writing-guidelines" markdown="1">

# 论文写作

这里会整理论文写作规范、修改经验、 rebuttal 准备、图表打磨和学术表达示例。

<div class="wiki-entry-list">
  {% assign writing_notes = site.wiki | where: "lang", "zh" | where: "category", "writing" | where: "status", "published" | sort: "date" | reverse %}
  {% if writing_notes.size > 0 %}
    {% for note in writing_notes %}
      <article class="wiki-entry-card">
        <a class="wiki-entry-card__title" href="{{ note.url | relative_url }}" target="_self">{{ note.title }}</a>
        {% if note.summary %}
          <p>{{ note.summary }}</p>
        {% endif %}
        <div class="wiki-entry-card__meta">
          {% if note.authors %}
            <span>
              {% for author in note.authors %}
                {{ author.name }}{% unless forloop.last %}, {% endunless %}
              {% endfor %}
            </span>
          {% endif %}
          {% if note.date %}
            <span>{{ note.date | date: "%Y-%m-%d" }}</span>
          {% endif %}
          {% if note.tags %}
            <span>{{ note.tags | join: " / " }}</span>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  {% else %}
    <p class="wiki-empty">待更新。</p>
  {% endif %}
</div>

</section>

<section class="home-section wiki-section" id="research-tips" markdown="1">

# 科研经验

这里会整理如何读论文、设计实验、记录研究过程、讨论 idea 和推进科研工作的经验总结。

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>

<section class="home-section wiki-section" id="tools" markdown="1">

# 推荐工具

这里会整理组内推荐的软件、代码工具、写作工具、可视化工具和效率工作流。

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>

<section class="home-section wiki-section" id="teaching-resources" markdown="1">

# 教学资源

这里会整理课程资料、授课讲义、作业说明、教学示例，以及与组内教学活动相关的可复用资源。

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>

<section class="home-section wiki-section" id="project-notes" markdown="1">

# 项目备忘

这里会整理在研或已完成项目的阶段记录、任务清单和可复用技术备忘。

<div class="wiki-entry-list">
  <p class="wiki-empty">待更新。</p>
</div>

</section>
