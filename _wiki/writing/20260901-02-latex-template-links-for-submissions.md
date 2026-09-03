---
layout: wiki-post
title: "论文写作：常见期刊会议 LaTeX 模板入口整理"
date: 2026-09-01
published_at: "2026-09-01T00:00:00+08:00"
lang: zh
nav: wiki
alt_url: /wiki/
category: writing
permalink: /zh/wiki/writing/02-latex-template-links-for-submissions/
tags:
  - 论文写作
  - LaTeX
  - 投稿模板
  - 期刊投稿
  - 会议投稿
authors:
  - name: "Wenbin Wang"
    role: "Maintainer"
    affiliation: "China Three Gorges University"
summary: "整理 AI、计算机视觉、多媒体和遥感方向常见期刊会议的 LaTeX 模板入口，包括 IEEE、Elsevier、Springer Nature、CVF、AAAI、ICML、ICLR、NeurIPS、ACM 和 ACL 等。"
status: published
toc: true
---

# 论文写作：常见期刊会议 LaTeX 模板入口整理

发布时间：2026-09-01

这份笔记用于记录组内常见投稿期刊和会议的 LaTeX 模板入口。投稿前一定要重新检查目标 venue 当年的 Author Guidelines / Submission Guidelines，不要直接沿用旧项目里的模板。模板版本、页数限制、匿名要求、参考文献格式、补充材料格式都有可能每年变化。

一个基本原则是：**期刊优先查出版社或期刊主页，会议优先查当年会议官网。** Overleaf 模板可以提高协作效率，但最终仍要以官方 author kit 或 publisher 模板为准。

## 1. IEEE 期刊模板

IEEE 旗下期刊通常使用统一的 IEEE 模板体系。对于 TPAMI、TIP、TMM、TCSVT、TNNLS、TGRS、JSTARS、GRSL、IEEE Access 等期刊，优先从 IEEE Author Center 的模板选择器进入。

| 适用 venue | 推荐入口 | 备注 |
|---|---|---|
| IEEE journals / transactions / letters | [IEEE Article Templates](https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/authoring-tools-and-templates/tools-for-ieee-authors/ieee-article-templates/) | IEEE 官方说明页，入口会引导到 IEEE Template Selector。 |
| IEEE 具体期刊模板选择 | [IEEE Template Selector](https://template-selector.ieee.org/) | 按 publication title 搜索目标期刊，例如 TPAMI、TGRS、JSTARS。 |
| IEEE 投稿辅助工具 | [Tools for IEEE Authors](https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/authoring-tools-and-templates/tools-for-ieee-authors/) | 包括 IEEE LaTeX Analyzer、PDF Checker、Reference Preparation Assistant 等。 |
| TGRS | [TGRS Information for Authors](https://www.grss-ieee.org/publications/author-resources/tgrs-information-for-authors/) | 遥感方向常投期刊，仍按 IEEE 双栏格式准备。 |
| JSTARS | [JSTARS Information for Authors](https://www.grss-ieee.org/publications/jstars-information-for-authors/) | 开放获取期刊，通常也按 IEEE 双栏、单倍行距准备。 |

常见注意事项：

1. 不要手动改 IEEEtran 的页边距、字号、行距和栏宽。
2. 初稿、返修稿和最终稿的补充文件要求可能不同，提交前要看 ScholarOne / Manuscript Central 系统提示。
3. IEEE 期刊通常会要求 ORCID，作者信息、biography、photo、copyright 等事项要提前准备。
4. 遥感方向的 TGRS / JSTARS / GRSL 虽然属于 GRSS，但模板仍然按 IEEE Author Center 的入口处理。

## 2. Elsevier 期刊模板

Elsevier 旗下期刊一般使用 `elsarticle` 模板。组内常见相关期刊包括 Pattern Recognition、Computer Vision and Image Understanding、Remote Sensing of Environment、ISPRS Journal of Photogrammetry and Remote Sensing 等。

| 适用 venue | 推荐入口 | 备注 |
|---|---|---|
| Elsevier journals | [Elsevier LaTeX instructions](https://www.elsevier.com/en-gb/researcher/author/policies-and-guidelines/latex-instructions) | 官方 LaTeX 说明页，可下载 journal article template package。 |
| Pattern Recognition / CVIU / RSE / ISPRS JPRS 等 | 对应期刊 Guide for Authors + Elsevier LaTeX instructions | 多数情况下先用 `elsarticle` 通用模板，具体参考文献样式看期刊 Guide for Authors。 |

Elsevier 投稿时要特别注意源文件打包。Editorial Manager 对 LaTeX 文件结构比较敏感，官方说明中强调源文件、图片、`.bib`、`.bst`、`.cls` 等最好放在同一层目录；如果图片放在子文件夹里，系统编译时可能找不到文件。

初投稿时很多 Elsevier 期刊接受 PDF，但返修或接收后通常要上传源文件。建议从一开始就保持 LaTeX 项目结构干净，不要把临时图片、旧版本表格、无用 `.sty` 文件一起打包。

## 3. Springer Nature 期刊模板

Springer Nature 期刊通常使用 Springer Nature LaTeX authoring template。IJCV 属于 Springer Nature 旗下期刊，投稿时应从期刊主页的 Submission Guidelines 和 Springer Nature 模板入口同时确认。

| 适用 venue | 推荐入口 | 备注 |
|---|---|---|
| Springer Nature journals | [Springer Nature LaTeX author support](https://www.springernature.com/la/authors/campaigns/latex-author-support) | 官方模板入口，可下载 journal article template package，也可从 Overleaf 打开。 |
| IJCV | [IJCV journal page](https://link.springer.com/journal/11263) + Springer Nature 模板 | IJCV 具体要求以期刊 Submission Guidelines 为准。 |
| Springer proceedings / LNCS | [Springer Nature LaTeX author support](https://www.springernature.com/la/authors/campaigns/latex-author-support) | ECCV 等会议若采用 LNCS 或会议专用模板，应优先使用当年会议 author kit。 |

不要把 Springer Nature journal template 和 Springer LNCS proceedings template 混用。期刊投稿和会议论文集是两套逻辑，尤其是 ECCV 这类会议会给出当年专门的 author kit。

## 4. CVF / 视觉会议模板

CVPR、ICCV、部分 3DV 模板现在由 `cvpr-org/author-kit` 统一维护。视觉会议对模板非常严格，页数、匿名、补充材料、外部链接、rebuttal 模板都要按当年官网执行。

| 会议 | 推荐入口 | 备注 |
|---|---|---|
| CVPR 2026 | [CVPR 2026 Author Guidelines](https://cvpr.thecvf.com/Conferences/2026/AuthorGuidelines), [cvpr-org/author-kit](https://github.com/cvpr-org/author-kit), [CVPR 2026 release](https://github.com/cvpr-org/author-kit/releases) | 官方 GitHub release 中已有 CVPR2026 LaTeX 模板。 |
| ICCV | [ICCV 2025 Author Guidelines](https://iccv.thecvf.com/Conferences/2025/AuthorGuidelines), [cvpr-org/author-kit](https://github.com/cvpr-org/author-kit) | ICCV 与 CVPR 风格接近，但投稿时要用对应年份、对应会议的模板。 |
| 3DV | [cvpr-org/author-kit](https://github.com/cvpr-org/author-kit) | 该仓库说明覆盖 CVPR / ICCV / 3DV 的官方 LaTeX 模板。 |
| WACV | [WACV 2026 Call for Papers](https://wacv.thecvf.com/Conferences/2026/CallForPapers) | 以 WACV 当年 Author Guidelines 和 Author Kit 为准。 |

CVPR / ICCV 这类会议常见错误包括：用旧模板、改 margins、改字体、把 supplementary 忘记从主文档中删除、匿名版本暴露作者身份、rebuttal 超页、外部链接破坏双盲。提交前要完整读当年 Author Guidelines。

## 5. ECCV 模板

ECCV 2026 使用 Springer LNCS 风格，但不是直接随便套旧版 LNCS。ECCV 2026 官网明确说明模板相对 ECCV 2024 有变化，必须使用 ECCV 2026 Author Kit。

| 会议 | 推荐入口 | 备注 |
|---|---|---|
| ECCV 2026 | [ECCV 2026 Submission Policies](https://eccv.ecva.net/Conferences/2026/SubmissionPolicies) | 页面提供 Overleaf、GitHub、ZIP、TAR ball 等 author kit 获取方式。 |

如果从 CVPR 论文改投 ECCV，不要只改页数和会议名。ECCV 2026 模板字体和 CVPR 2026 不同，直接沿用 CVPR 模板可能导致 desk rejection。

## 6. AAAI / IJCAI 模板

AAAI 和 IJCAI 都有自己的 author kit。不要用 IEEE、ACM 或 CVF 模板代替。

| 会议 | 推荐入口 | 备注 |
|---|---|---|
| AAAI-26 | [AAAI-26 Submission Instructions](https://aaai.org/conference/aaai/aaai-26/submission-instructions/), [AAAI-26 main page](https://aaai.org/conference/aaai/aaai-26/) | 官网页面顶部有 AAAI-26 Author Kit 入口；LaTeX 通常使用 `aaai2026.sty` 和 `aaai2026.bst`。 |
| AAAI-26 Author Kit | [AAAI Author Kit 26](https://aaai.org/authorkit26/) | 若直接链接不可访问，从 AAAI-26 官网页面的 Author Kit 入口进入。 |
| IJCAI-ECAI 2026 | [IJCAI Author's Kit](https://www.ijcai.org/authors_kit) | IJCAI 官网提供当年 formatting guidelines 下载入口。 |

AAAI 模板中很多命令不能改，例如纸张大小、基础字体包、`natbib` 设置、caption 设置等。AAAI 对匿名、页数、引用和 source archive 也有明确要求，写作前要先读 author kit 中的说明文件。

## 7. 机器学习和大模型会议模板

NeurIPS、ICML、ICLR 都是大模型、深度学习和机器学习方向的重要会议。它们每年都会更新 author instructions，尤其是 checklist、appendix、匿名、代码和数据、LLM 使用声明等要求。

| 会议 | 推荐入口 | 备注 |
|---|---|---|
| NeurIPS 2026 | [NeurIPS 2026 Main Track Handbook](https://neurips.cc/Conferences/2026/MainTrackHandbook), [NeurIPS 2026 formatting zip](https://media.neurips.cc/Conferences/NeurIPS2026/Formatting_Instructions_For_NeurIPS_2026.zip) | 必须使用当年 LaTeX style file，Word 模板已不支持。 |
| ICML 2026 | [ICML 2026 Author Instructions](https://icml.cc/Conferences/2026/AuthorInstructions), [icml2026.zip](https://media.icml.cc/Conferences/ICML2026/Styles/icml2026.zip), [example paper](https://media.icml.cc/Conferences/ICML2026/Styles/example_paper.pdf) | 官方说明明确要求使用 LaTeX style files，不支持其他排版软件。 |
| ICLR 2026 | [ICLR 2026 Author Guide](https://iclr.cc/Conferences/2026/AuthorGuide), [iclr2026.zip](https://github.com/ICLR/Master-Template/raw/master/iclr2026.zip), [ICLR Master Template](https://github.com/ICLR/Master-Template) | 官网给出 ICLR 2026 LaTeX style files 下载地址。 |

这几个会议不要直接沿用上一年模板。即使版式看起来相似，checklist、匿名开关、track 选项、camera-ready 参数都可能变。

## 8. ACM / 多媒体会议模板

ACM MM 等 ACM 会议通常使用 ACM Article Template / `acmart`。多媒体方向投稿 ACM MM 时，应先看当年 ACM MM Author Instructions，再进入 ACM 模板。

| 会议 / 期刊 | 推荐入口 | 备注 |
|---|---|---|
| ACM MM 2026 | [ACM MM 2026 Author Instructions](https://2026.acmmm.org/site/author-instructions.html) | 官网要求使用 ACM Article Template，并说明 LaTeX submission 可用 `sample-sigconf-authordraft`。 |
| ACM proceedings | [ACM Proceedings Template](https://www.acm.org/publications/proceedings-template) | ACM 官方 proceedings 模板入口。 |
| ACM Overleaf templates | [ACM official templates on Overleaf](https://www.overleaf.com/gallery/tagged/acm-official) | 适合多人协作，但最终以 ACM 和会议官网要求为准。 |

ACM 模板常见参数包括 `sigconf`、`screen`、`review`、`anonymous`、`manuscript` 等。不同会议、不同 track 要求不完全一样，不要只复制别人项目里的 `\documentclass`。

## 9. ACL / NLP 会议模板

做 LLM、VLM、NLP、多模态语言理解方向时，ACL、EMNLP、NAACL 等会议经常使用 ACL 统一风格文件。

| 适用 venue | 推荐入口 | 备注 |
|---|---|---|
| ACL / EMNLP / NAACL 等 | [ACL style files](https://github.com/acl-org/acl-style-files) | 官方 style files 仓库，包含 LaTeX 模板、Overleaf 和 ZIP 入口。 |
| ACL Rolling Review | [ARR Author Guidelines](https://aclrollingreview.org/authors) | ARR 提交需要遵守 ACL Author Guidelines 和官方模板。 |

ACL 系会议通常会要求 limitations section、responsible NLP checklist、匿名处理等。投稿前要确认目标会议是 direct submission 还是 ARR commitment 路线。

## 10. MDPI / Remote Sensing 模板

如果投 Remote Sensing 等 MDPI 期刊，可以使用 MDPI 官方 LaTeX 模板。注意 MDPI 与 IEEE / Elsevier / Springer 的风格完全不同，不要混用。

| 适用 venue | 推荐入口 | 备注 |
|---|---|---|
| MDPI journals | [MDPI LaTeX templates](https://www.mdpi.com/authors/latex) | 官方 LaTeX 模板页，提供不同引用风格的 zip 模板。 |
| Remote Sensing | [Remote Sensing Instructions for Authors](https://www.mdpi.com/journal/remotesensing/instructions) | 期刊说明中提供 Word / LaTeX 模板和投稿要求。 |

## 11. 投稿前检查清单

每次开新论文项目时，建议按下面顺序检查：

1. **确认 venue 和年份**：例如 CVPR 2026、ICCV 2025、ECCV 2026，不要只看会议缩写。
2. **从官网下载模板**：优先用当年 Author Guidelines 中的 author kit。
3. **确认文档模式**：submission / review / anonymous / final / camera-ready 不要混用。
4. **确认页数限制**：主文、参考文献、appendix、checklist、supplementary 是否计入页数要逐项核对。
5. **不要改模板格式**：不要压缩间距、改边距、改字号、改栏宽。
6. **检查匿名要求**：作者、单位、致谢、项目主页、代码链接、PDF metadata、supplementary 都要检查。
7. **本地完整编译**：至少清理辅助文件后重新编译一遍，确认没有 `?` 引用、缺图、缺字体、overfull 过多等问题。
8. **导出源文件前清理项目**：不要提交旧图、旧表、无用 `.sty`、中间文件、临时 PDF。

模板不是最后一天才处理的事情。建议论文一开始就用目标 venue 的模板写，这样图表宽度、页数预算、公式长度、表格密度都会更接近最终投稿状态。
