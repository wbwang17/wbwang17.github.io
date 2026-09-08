---
layout: wiki-post
title: "组内事项：每周工作汇报要求与 LaTeX 周报模板"
date: 2026-09-07
published_at: "2026-09-07T00:00:00+08:00"
lang: zh
nav: wiki
alt_url: /wiki/
category: lab-matters
permalink: /zh/wiki/lab-matters/01-weekly-report-guidelines-and-template/
tags:
  - 组内事项
  - 工作汇报
  - 周报
  - LaTeX
  - Overleaf
authors:
  - name: "Wenbin Wang"
    role: "Maintainer"
    affiliation: "China Three Gorges University"
summary: "说明组内周报的适用对象、邮件提交要求和三项必填内容，并提供可直接导入 Overleaf 的中英文 LaTeX 周报模板。"
status: published
toc: true
---

# 组内事项：每周工作汇报要求与 LaTeX 周报模板

发布时间：2026-09-07

为了及时了解每位同学的科研进展、发现实验和学习中遇到的问题，并保证阶段目标能够持续推进，组内实行每周工作汇报制度。

## 1. 需要提交周报的同学

以下同学需要每周撰写周报，并通过邮件发送：

1. 研一同学；
2. 研二同学；
3. 尚未达到毕业条件的其他同学。

其他同学如当前仍承担论文修改、项目研究、实验复现或其他组内任务，请至少每三到四周发送一次周报。

周报不是流水账，也不是把聊天记录、代码提交记录或实验日志简单拼接起来。周报的核心作用是检查“计划是否明确、执行是否到位、问题是否及时暴露、下一步是否可落实”。**禁止直接粘贴代码、日志等未经任何处理的无效信息**。

## 2. 周报必须包含的三项内容

每份周报必须包含以下三个独立部分，标题和顺序不要随意修改。

### 2.1 上周计划

列出上一份周报中确定的计划。每项计划应尽量具体、可检查，避免只写“看论文”“做实验”“学习代码”等无法验收的表述。

推荐写法：

- 阅读并整理 5 篇与遥感目标检测相关的论文，形成对比表（必须列出具体文章并包括完整信息）；
- 完成 Faster R-CNN 基线在指定数据集上的训练和测试，记录配置与指标；
- 完成论文 Method 部分初稿，并绘制方法框架图第一版。

### 2.2 上周计划完成情况

必须与“上周计划”逐项对应，明确说明：

1. 是否完成；
2. 完成到什么程度；
3. 有什么可核查的结果，例如指标、图表、代码提交、文档或论文段落；
4. 未完成的原因是什么；
5. 遇到了什么问题，已经尝试了哪些解决办法，需要什么帮助。

不要只写“基本完成”“正在进行”“效果不好”。如果实验没有达到预期，也要给出已经得到的结果和当前判断。负面结果可以接受，没有分析过程的模糊描述不能代替工作汇报。

### 2.3 本周计划

本周计划应根据上周完成情况制定，并写清任务、预期产出和优先级。建议每周设置 2 至 5 项能够真正完成的核心任务，不要罗列大量没有优先级的愿望清单。

推荐写法：

- P0：完成数据预处理问题排查，并重新训练基线模型；验收标准为训练流程稳定运行且得到完整测试指标；
- P1：完成 3 组关键消融实验，并整理为一张表格；
- P1：修改 Introduction，明确研究问题、现有方法不足和本文贡献。

## 3. 邮件发送规范

周报通过邮件发送，具体发送时间以组内通知为准。统一使用以下命名方式，便于检索和归档：

- 邮件主题：`[姓名-年级-周报-20260907]`；
- PDF 文件名：`姓名-年级-周报-20260907.pdf`；
- 邮件正文：简要说明，是否需要讨论，**提前预约时间**；
- 邮件附件：由模板编译得到的 PDF 周报。

发送前请检查日期、姓名、报告周期和附件是否正确。不要只发送 Overleaf 链接，也不要用截图代替正式 PDF。不符合要求的退回重发，严谨是科研的重要习惯。

## 4. LaTeX 周报模板

模板基于 Elsevier `elsarticle` 的单栏 `preprint` 样式改造，保留了清晰的论文式排版，同时加入中文支持、周报信息表、页眉页脚、分节文件、图片目录和 BibTeX 文献库。Elsevier 官方说明中，`elsarticle` 是其通用文章类，并随常见 TeX 发行版提供：[Elsevier LaTeX Instructions](https://www.elsevier.com/en-gb/researcher/author/policies-and-guidelines/latex-instructions)。

[下载可直接导入 Overleaf 的周报模板 ZIP]({{ '/files/wiki/templates/weekly-report-overleaf.zip' | relative_url }})

模板使用 XeLaTeX 编译，以兼容中英文混排。上传方法可参考 [Overleaf：Uploading a project](https://www.overleaf.com/learn/Uploading_a_project)。

模板目录如下：

```text
weekly-report-overleaf/
├── main.tex
├── main_template.tex
├── report-settings.tex
├── main.bib
├── latexmkrc
├── secs/
│   └── template/
│       ├── 01-last-week-plan.tex
│       ├── 02-last-week-progress.tex
│       └── 03-this-week-plan.tex
└── figures/
    └── template/
        ├── weekly-report-preview.png
        └── README.txt
```

其中：

- `main.tex` 是 Overleaf 的稳定编译入口，只负责引用当前使用的主文件；
- `main_template.tex` 是只读式模板底稿，首次使用时将其复制为日期主文件，例如 `main_20260914.tex`；
- `report-settings.tex` 统一维护版式、中文字体、页眉页脚和常用命令，一般不需要每周修改；
- `secs/template/` 保存三项必填内容的 section 模板，写周报时复制为日期目录；
- `figures/template/` 保存插图示例和编译效果截图，写周报时复制为日期目录并替换示例图片；
- `main.bib` 统一保存长期积累的 BibTeX 文献条目，不需要每周复制。

三个固定 section 标题在模板中使用红色显示，标题后的蓝色文字是编辑提示。填写完成后删除蓝色提示，但不要修改红色标题。`figures/template/weekly-report-preview.png` 是一张实际编译结果截图，“上周计划完成情况”文件中已经给出完整的 `figure` 插图示例；正式写周报时应替换图片和图注，不需要插图时则删除整个 `figure` 环境。

### 4.1 认真维护 `main.bib`

`main.bib` 不应当只是为了让当前周报通过编译而临时建立的文件，而应作为个人长期维护的参考文献库。平时阅读论文时就把确认有用的文献条目积累下来；后续撰写会议论文、期刊论文、开题报告或学位论文时，可以直接复用其中已经核对过的 BibTeX 条目。

文献条目可以从 [Google Scholar](https://scholar.google.com/) 获取：搜索论文题目，点击“引用 / Cite”，再选择“BibTeX”。复制到 `main.bib` 后仍须人工检查以下内容：

1. 论文题目、作者姓名和作者顺序是否正确；
2. 期刊或会议名称、年份、卷号、期号和页码是否完整；
3. DOI、出版社等字段是否准确；
4. citation key 是否清楚且不重复，建议采用 `第一作者姓氏 + 年份 + 标题关键词`，例如 `ren2015faster`；
5. 是否存在从不同网站重复导入的同一篇论文，同一篇论文可能有不同版本和发表地方，优先级：期刊版本 > 会议版本 > arXiv。

Google Scholar 提供的条目只能作为初稿，不能不检查就直接使用。正式写作前还应根据论文首页、出版社页面或 DOI 信息再次核对。

模板在 `main.bib` 开头集中定义了视觉、人工智能和遥感方向常用期刊会议的名称字符串，并严格按照“全部全称在前、全部简称在后”的顺序组织。例如：

```bibtex
@String{PAMI_FULL  = {IEEE Transactions on Pattern Analysis and Machine Intelligence}}
@String{CVPR_FULL  = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition}}

@String{PAMI_SHORT = {IEEE TPAMI}}
@String{CVPR_SHORT = {CVPR}}
```

在具体文献条目中，可以根据投稿模板要求选择全称或简称：

```bibtex
journal   = PAMI_FULL,
booktitle = CVPR_FULL,
```

如果目标期刊要求使用缩写，则改为 `PAMI_SHORT` 或 `CVPR_SHORT`。不能先后两次定义同一个 `@String{PAMI = ...}`，因为 BibTeX 的字符串名称必须唯一；因此模板使用 `_FULL` 和 `_SHORT` 后缀，让全称和简称能够在同一个文件中长期共存。

特别地，对于TGRS等某些期刊，20xx年之后刊出的文章只有卷号（Volume number），Article Number，不再设置期号（Issue number）和页码等。每一年的所有文章volume都相同，例如2026年文章volume为64。此类问题需要以IEEE上正式刊出文章（非Early Access）信息为准。

## 5. 每周如何维护

采用“一个 Overleaf 项目长期维护一个人的全部周报”的方式。每周只需完成以下操作：

1. 首次使用时，把 `main_template.tex` 复制为日期主文件，例如 `main_20260914.tex`；后续也可以直接复制上一周的日期主文件；
2. 把 `secs/template/` 复制为 `secs/20260914/`；后续也可以复制上一周的 section 目录；
3. 把 `figures/template/` 复制为 `figures/20260914/`（如有插图），并替换或删除其中的示例截图；
4. 在新主文件中修改 `ReportKey`、报告周期、提交日期等少量信息；
5. 修改新日期目录下的三个 section 文件；\placeholder命令中的说明引导性文字可删除。
6. 把 `main.tex` 中引用的文件改为 `main_20260914.tex`，然后编译并下载 PDF。

`template` 文件和目录作为不随周次变化的底稿，每周的日期文件彼此独立，不会覆盖历史周报；公共版式和参考文献库只维护一份；`main.tex` 始终作为 Overleaf 的 Main document，每周只需修改其中一行即可切换周次。需要回看某一周时，把这一行改回对应日期的主文件即可。

三个 section 文件每周仍然需要新建或复制，因为每周内容本来就不同。为了减少操作，不建议从空白文件开始写，而是直接复制上一周的日期目录，再逐项更新。特别要注意，“上周计划”应来自上一周周报中的“本周计划”，不要重新编造或事后修改。

## 6. 提交前检查

- 是否包含“上周计划、上周计划完成情况、本周计划”三个独立部分；
- 完成情况是否与上周计划逐项对应；
- 是否给出了可核查的结果，而不是只有笼统描述；
- 未完成任务是否说明原因、已尝试的方法和下一步处理方案；
- 本周计划是否具体、可执行、有优先级；
- 姓名、学号、年级、报告周期和提交日期是否正确；
- PDF 是否能够正常打开，图表和参考文献是否完整；
- 邮件主题和附件命名是否符合要求。

