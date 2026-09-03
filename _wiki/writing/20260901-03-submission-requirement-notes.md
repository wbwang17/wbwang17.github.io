---
layout: wiki-post
title: "论文写作：常见期刊会议投稿要求备忘"
date: 2026-09-01
published_at: "2026-09-01T00:00:00+08:00"
lang: zh
nav: wiki
alt_url: /wiki/
category: writing
permalink: /zh/wiki/writing/03-submission-requirement-notes/
tags:
  - 论文写作
  - 投稿要求
  - 页数限制
  - 字数限制
  - 双盲审稿
authors:
  - name: "Wenbin Wang"
    role: "Maintainer"
    affiliation: "China Three Gorges University"
summary: "整理 AI、计算机视觉、机器学习、多媒体和遥感方向常见期刊会议的投稿要求，包括页数、字数、匿名、补充材料、创新点和常见初筛风险。"
status: published
toc: true
---

# 论文写作：常见期刊会议投稿要求备忘

发布时间：2026-09-01  
最后核对：2026-09-01

这份笔记用于记录组内常见投稿期刊和会议的基础要求，尤其是页数限制、字数限制、匿名要求、补充材料要求、创新点/Highlights 要求和容易被初筛退回的问题。

需要先强调：**投稿要求每年都会变，会议尤其明显。** 下面内容只能作为开题、写作和改投时的快速备忘，真正提交前必须重新检查目标 venue 当年的 Author Guidelines / Submission Instructions / Guide for Authors。

## 1. 快速对照表

| Venue | 主要限制 | 匿名 / 补充材料 | 投稿前重点 |
|---|---|---|---|
| CVPR 2026 | 主文 8 页，包含图表；参考文献可额外页 | 双盲；补充材料可选，正文中应引用补充材料内容；禁止用外部链接扩展内容 | 不要改模板，不要超 8 页，不要暴露作者身份 |
| ICCV 2025 | 主文 8 页，包含图表；参考文献可额外页 | 双盲；补充材料单独提交，主 PDF 后不能追加 appendix | 检查 OpenReview 信息、匿名、补充材料和主文分离 |
| ECCV 2026 | 主文 14 页，LNCS 样式，包含图表；参考文献可额外页 | 双盲；主文不允许 appendix；补充材料可选且应在正文中引用 | 必须使用 ECCV 2026 新模板，不要沿用 CVPR 模板 |
| AAAI-26 | 技术内容 7 页；参考文献和 reproducibility checklist 可额外页 | 双盲；只需提交 PDF，录用后提交源文件 | 7 页内容很紧，实验和方法要压缩得非常清楚 |
| IJCAI-ECAI 2026 | 总计 9 页：7 页正文 + 2 页参考文献 | 补充材料最多 50MB，PDF 或 ZIP，必须匿名 | 作者信息截止后不能加删作者；补充材料也要匿名 |
| NeurIPS 2026 | 主文 9 页；参考文献、appendix、checklist 不计入 | 双盲；所有补充或链接材料也要匿名 | 必须使用当年 style；checklist 是强要求 |
| ICML 2026 | 主文 8 页；参考文献和 appendix 可额外页，单个 PDF | 双盲；code/data supplement 可选且同一截止时间提交 | 关键内容必须放主文，appendix 和 supplement 审稿人不一定看 |
| ICLR 2026 | 初投稿主文 9 页；rebuttal/camera-ready 阶段 10 页 | 双盲；appendix 页数不限；补充代码可上传 | ethics、reproducibility、LLM usage 按要求声明 |
| ACM MM 2026 | 投稿 6-8 页；最多 2 页参考文献 | 双盲；补充材料 50MB；主 PDF 后不能直接接 appendix | 低于/超过页数、模板错误、metadata 异常都可能 desk reject |
| ACL 2026 | Long paper 8 页，short paper 4 页；终稿各加 1 页 | Two-way anonymized review；按 ARR / ACL 要求 | 注意 limitations、ethics、responsible NLP checklist |
| ICIP 2026 | 技术内容最多 5 页，可选第 6 页只放参考文献 | Double-blind；需要匿名版和 publish-ready 版 | 第 6 页只能是参考文献，不能放正文、图表或 appendix |
| TGRS | 2026 年起超过 10 个最终印刷页收 overlength page charge | 单盲；IEEE 双栏格式 | 实验数据、方法和条件描述要完整 |
| JSTARS | 工作流与 TGRS 类似；应用导向，技术内容需新且显著 | 单盲；IEEE / GRSS 投稿系统 | 偏应用，但不能只有应用场景，技术贡献要说清楚 |
| GRSL | 最终双栏单倍行距超过 5 页可能被拒 | 单盲；短论文定位 | 篇幅是硬约束，适合一个明确点讲透 |
| JAG / International Journal of Applied Earth Observation and Geoinformation | 组内按全文总文字不超过 8000 词控制；Elsevier 系统常要求 Highlights | 通常按 Elsevier 投稿流程；以 Guide for Authors / Editorial Manager 为准 | Highlights 3-5 条，每条要短，突出创新点和主要发现 |
| IJDE / International Journal of Digital Earth | Research Article / Review / Research Letter 通常不超过 8000 词；Data Note 更短 | 双匿名；匿名稿需含 impact statement 和 Digital Earth scope relevance statement | 正文要提到所有补充材料内容，不要放非匿名链接 |

## 2. CVF 会议：CVPR / ICCV

CVPR 和 ICCV 是计算机视觉方向最常投的顶会之一。二者的投稿要求高度相似，但每年仍要看对应会议官网。

### CVPR 2026

官方入口：[CVPR 2026 Author Guidelines](https://cvpr.thecvf.com/Conferences/2026/AuthorGuidelines)

需要记住：

1. 主文限制为 8 页，包含 figures 和 tables。
2. 只包含 cited references 的额外页允许存在。
3. 论文必须双盲匿名，不能出现作者、单位、致谢、可识别项目主页等信息。
4. 补充材料可选，但正文中应适当引用补充材料内容。
5. 不能通过外部链接扩展论文内容，例如额外网页、视频、图像或会破坏匿名/长度限制的链接。
6. 违反模板、匿名或页数要求，可能不经审稿直接拒稿。

写作建议：CVPR 只有 8 页，不适合把所有实验和解释都放主文。主文要优先放能证明核心贡献的 evidence，次要消融、更多可视化和实现细节放补充材料。

### ICCV 2025

官方入口：[ICCV 2025 Author Guidelines](https://iccv.thecvf.com/Conferences/2025/AuthorGuidelines)，[ICCV 2025 Submission Checklist](https://iccv.thecvf.com/Conferences/2025/SubmissionCheckList)

需要记住：

1. 主文限制为 8 页，参考文献不计入 8 页。
2. 补充材料应单独提交，不能把 appendix 直接接在主 PDF 后面。
3. 论文、补充材料、视频和代码都要注意匿名。
4. 外部链接非常敏感，尤其是可能暴露作者身份、扩展内容或绕过截止时间的链接。

写作建议：如果从 CVPR 改投 ICCV，不要只改标题页。需要重新核对当年 template、supplementary deadline、OpenReview profile 和 checklist。

## 3. ECCV

官方入口：[ECCV 2026 Submission Policies](https://eccv.ecva.net/Conferences/2026/SubmissionPolicies)

ECCV 2026 与 CVPR/ICCV 最大的显性差异是页数和模板。

需要记住：

1. ECCV 2026 主文限制为 14 页，包含 figures 和 tables。
2. 参考文献可额外页。
3. 使用 Springer LNCS 样式，但必须使用 ECCV 2026 Author Kit。
4. 主提交文件中不允许 appendix。
5. 补充材料可选，但必须是投稿时已经准备好的材料，并且正文中要适当引用。
6. 双盲审稿，正文、补充材料和链接都不能暴露作者身份。
7. ECCV 2026 rebuttal 限制为 1 页 PDF，包含 references。
8. LLM 使用不免责；引用不存在文献、事实错误、prompt injection 都可能导致拒稿或更严重后果。

写作建议：ECCV 页数更长，但不意味着主文可以松散。14 页应该用来讲清楚更完整的动机、方法、消融和可视化，而不是堆更多无关实验。

## 4. AAAI / IJCAI

### AAAI-26

官方入口：[AAAI-26 Submission Instructions](https://aaai.org/conference/aaai/aaai-26/submission-instructions/)

需要记住：

1. AAAI-26 technical track 通常为 7 页 technical content。
2. 参考文献和 reproducibility checklist 可使用额外页。
3. 投稿必须匿名，采用 double-blind review。
4. 投稿时只需要 PDF，录用后再提交源文件。
5. 每位作者在 technical track 等相关 track 中有投稿数量限制。
6. 不能同时投其他 archival venue，arXiv 预印本通常不算正式发表。
7. 可包含 Code and Data Appendix / Technical Appendix，但要符合当年说明。

写作建议：AAAI 的 7 页非常紧。方法型论文要避免把 Related Work 写成大段综述，实验表格也要高度压缩。核心贡献最好在 introduction 末尾明确列出。

### IJCAI-ECAI 2026

官方入口：[IJCAI-ECAI 2026 Call for Papers](https://2026.ijcai.org/ijcai-ecai-2026-call-for-papers-main-track/)，[IJCAI Author's Kit](https://www.ijcai.org/authors_kit)

需要记住：

1. 总页数不超过 9 页：7 页正文 + 2 页参考文献。
2. 可选 ethics statement 可以放在正文或参考文献页中。
3. 补充材料最多 50MB，格式为 PDF 或 ZIP。
4. 补充材料也必须匿名。
5. 作者信息截止后不能加删作者，通常只允许后续调整作者顺序。
6. 如果是从其他会议重投，需要按要求提供 resubmission information。

写作建议：IJCAI 更偏广义 AI，投稿时要避免只呈现视觉工程细节。需要把问题抽象成更一般的 AI 问题，例如决策、推理、学习、泛化、表示或优化。

## 5. NeurIPS / ICML / ICLR

### NeurIPS 2026

官方入口：[NeurIPS 2026 Main Track Handbook](https://neurips.cc/Conferences/2026/MainTrackHandbook)

需要记住：

1. 主文限制为 9 content pages，包含 figures 和 tables。
2. references、technical appendices 和 mandatory paper checklist 不计入 9 页。
3. 投稿 PDF 最大 50MB。
4. 必须使用当年 NeurIPS LaTeX style file。
5. 双盲审稿，补充材料和外部链接也要保证匿名。
6. 接收后 camera-ready 通常允许增加 1 页主文内容。

写作建议：NeurIPS 很重视问题定义、理论/方法清晰性、实验可信度和 reproducibility。不要只把视觉任务结果堆成 benchmark 表，要解释为什么这个问题对更广义的学习或推理有意义。

### ICML 2026

官方入口：[ICML 2026 Author Instructions](https://icml.cc/Conferences/2026/AuthorInstructions)，[ICML 2026 Call for Papers](https://icml.cc/Conferences/2026/CallForPapers)

需要记住：

1. 主文最多 8 页。
2. references 和 appendices 可以额外页，并放在同一个 PDF 中。
3. 投稿 PDF 最大 50MB，camera-ready PDF 最大 20MB。
4. 双盲审稿。
5. 关键内容必须放在主文，因为 reviewers 不一定看 appendix 或 supplementary material。
6. code/data supplementary material 可选，不能使用非匿名 repository 暴露身份。
7. 最终录用版本通常允许主文增加 1 页。

写作建议：ICML 投稿要把方法和学习问题讲清楚。若只是应用到视觉/遥感数据集，需要说明它对机器学习方法本身有什么贡献。

### ICLR 2026

官方入口：[ICLR 2026 Author Guide](https://iclr.cc/Conferences/2026/AuthorGuide)

需要记住：

1. 初投稿主文最多 9 页。
2. discussion / rebuttal 和 camera-ready 阶段主文限制扩展到 10 页。
3. references 不计入页数，appendix 页数不限，但 reviewers 不被要求阅读 appendix。
4. 双盲审稿，主文和补充材料都不能暴露作者身份。
5. 推荐写 ethics statement 和 reproducibility statement；如果适用，相关内容不计入主文页数。
6. 如果 LLM 在研究构思或写作中起到显著贡献，需要单独说明 LLM usage。

写作建议：ICLR 非常看重 representation、learning dynamics、scaling、generalization、alignment、reasoning 等问题。投 ICLR 时，不能只说“我们把模型换大了”，而要说明学习机制或表征机制上的变化。

## 6. ACM MM / ACL / ICIP

### ACM MM 2026

官方入口：[ACM MM 2026 Call for Technical Papers](https://2026.acmmm.org/site/cfp-guidelines.html)

需要记住：

1. 投稿论文为 6-8 页。
2. 最多可增加 2 页 references，且 reference pages 只能放参考文献。
3. 补充材料可选，大小限制 50MB。
4. 主提交 PDF 后不能直接追加 appendix。
5. 双盲审稿，作者、单位、致谢、补充材料等都要匿名。
6. 题目、摘要、作者 metadata 不能包含异常字符；官方明确提到不能使用 emoji 或 LaTeX code。
7. 双投、模板错误、过短/过长、hidden prompt 等都可能 desk reject。

写作建议：ACM MM 适合多模态、多媒体理解、生成、检索、音视频、视觉语言等方向。论文要体现 multimedia 问题，而不只是单一视觉模型加一个普通实验。

### ACL 2026

官方入口：[ACL 2026 Main Conference Papers](https://2026.aclweb.org/calls/main_conference_papers/)

需要记住：

1. Long paper 为 8 页，short paper 为 4 页。
2. 终稿 long paper 可增加到 9 页，short paper 可增加到 5 页。
3. 按 ARR / ACL 要求进行 two-way anonymized review。
4. 注意 limitations、ethics、responsible NLP research checklist。

写作建议：做 LLM / VLM / MLLM 的同学，如果投 ACL/EMNLP/NAACL 系列会议，必须认真写清楚数据、评测、limitations 和潜在风险，不要只报告自动指标。

### ICIP 2026

官方入口：[ICIP 2026 Author Kit](https://2026.ieeeicip.org/author-kit/)

需要记住：

1. 技术内容最多 5 页。
2. 可选第 6 页只能放 references。
3. 如果第 6 页包含正文、图表或其他非参考文献内容，会被拒。
4. Regular / special-session / satellite-workshop papers 采用 double-blind review。
5. 需要准备匿名版和 publish-ready 版。

写作建议：ICIP 篇幅短，适合非常聚焦的图像处理或视觉信号处理工作。方法动机、核心公式和实验表格必须高度压缩。

## 7. IEEE 遥感和视觉相关期刊

### TGRS

官方入口：[TGRS Information for Authors](https://www.grss-ieee.org/publications/author-resources/tgrs-information-for-authors/)

需要记住：

1. TGRS 为 IEEE GRSS 旗下 hybrid journal。
2. 2026 年 1 月 1 日后提交的论文，最终印刷页超过 10 页会产生 mandatory overlength page charge。
3. TGRS 采用 single-blind peer review。
4. 实验数据必须完整，并充分描述实验装置、方法和实验条件。
5. 可选 graphical abstract，但如果作为技术内容的一部分，通常需要随稿审查。

写作建议：TGRS 很重视遥感问题本身。遥感图像、传感器、地理区域、实验设置和应用价值必须讲清楚，不能只把自然图像方法换一个数据集。

### JSTARS

官方入口：[JSTARS journal page](https://www.grss-ieee.org/publications/journal-of-selected-topics-in-applied-earth-observations-and-remote-sensing/)

需要记住：

1. JSTARS 为 IEEE GRSS 旗下 fully open access journal。
2. 投稿和审稿 workflow 与 TGRS 类似。
3. 论文应聚焦 applied remote and in situ sensing、Earth observations、information creation 等主题。
4. 技术内容必须 new and significant，不能只有工程应用描述。

写作建议：JSTARS 偏应用，但不是“应用案例堆砌”。最好明确说明技术方法怎样服务地球观测问题，为什么对实际遥感应用有意义。

### GRSL

官方入口：[GRSL Submission Hints](https://www.grss-ieee.org/publications/grsl-submission-hints/)

需要记住：

1. GRSL 是 letters 类型，强调短、快、清楚。
2. 长度是主要约束；官方提示 accepted manuscript 如果超过最终双栏单倍行距 5 页限制，可能被拒。
3. 适合一个明确技术点、一组清楚实验证据，而不是完整系统大论文。

写作建议：GRSL 不能按 TGRS 的写法压缩。应该只讲一个清楚 contribution，少铺垫、少大表格、少横向展开。

### IEEE Computer Society / TPAMI 类期刊

官方入口：[IEEE Computer Society Author Resources](https://www.computer.org/publications/author-resources)

需要记住：

1. IEEE Computer Society 期刊通常要求原创性，不能一稿多投。
2. 如果论文扩展自已发表会议论文，必须引用原会议版本，并明确说明新稿相比已有版本的实质性新增贡献。
3. 任何已发表、在投、计划会议版本等相关工作都应在 cover letter 或 supportive documentation 中说明。
4. 具体页数和 overlength charge 要看目标期刊的 Author Information 页面，TPAMI、TVCG、TKDE 等不同期刊可能不同。

写作建议：TPAMI 这类期刊不要只把会议论文加一点实验就投。需要有更完整的问题分析、更充分实验、更深入理论或机制解释，以及清楚说明相对会议版本的新增内容。

## 8. Elsevier 遥感期刊：JAG

这里的 JAG 指 International Journal of Applied Earth Observation and Geoinformation。官方期刊入口：[ScienceDirect journal page](https://www.sciencedirect.com/journal/international-journal-of-applied-earth-observation-and-geoinformation)，[Elsevier shop journal page](https://shop.elsevier.com/journals/international-journal-of-applied-earth-observation-and-geoinformation/1569-8432)

组内写作时建议按下面要求预先控制：

1. 全文总文字控制在 8000 词以内。这里建议按“所有正文相关文字”从严统计，避免投稿系统初筛退回。
2. Abstract 通常控制在约 250 词以内。
3. Elsevier 系统通常要求 Highlights，一般为 3-5 条，每条很短，用来突出创新点和主要发现。
4. 很多 Elsevier 期刊需要 graphical abstract、CRediT author statement、declaration of competing interest、data availability statement 等材料。
5. Cover letter 中要清楚说明论文创新点、适合该期刊的原因，以及与已有工作的区别。

写作建议：JAG 很看重 applied earth observation 和 geoinformation 的问题匹配度。投稿前要压缩文字，突出创新点，强调遥感数据、地理信息、实际应用场景和方法贡献之间的关系。

注意：JAG 的 Guide for Authors 在 ScienceDirect 页面中可能会随时调整，且网页有时访问受限。实际投稿前必须在 Editorial Manager 或 ScienceDirect Guide for Authors 中重新核对字数、Highlights、Graphical Abstract 和 Declarations。

## 9. Taylor & Francis 遥感 / 数字地球期刊：IJDE

这里的 IJDE 指 International Journal of Digital Earth。官方入口：[IJDE journal page](https://www.tandfonline.com/journals/tjde20)，[IJDE about this journal](https://www.tandfonline.com/journals/tjde20/about-this-journal)，[IJDE Instructions for Authors](https://www.tandfonline.com/action/authorSubmission?show=instructions&journalCode=tjde20)

需要记住：

1. IJDE 采用 double-anonymized peer review。
2. Research Article / Review Article / Research Letter 通常不超过 8000 词。
3. Target Article 通常可到 10000 词；Data Note 通常更短。
4. Abstract 通常不超过 200 词；Data Note 可能要求 structured abstract。
5. Keywords 通常为 3-5 个。
6. 匿名稿需要包含 impact statement，说明工作如何推进当前知识，包括 novelty 和 originality。
7. 匿名稿还需要包含与 Digital Earth concept 和 IJDE scope 的 relevance statement，说明为什么适合 IJDE 读者。
8. 所有补充材料中的关键内容都应在正文中提到，不能把核心证据只放在 supplement。
9. 不要放非匿名链接，尤其是 GitHub、项目主页、云盘、个人主页或可追踪下载链接。
10. 需要 data availability statement、author contributions、AI use disclosure 等声明时，应按 T&F 系统要求填写。

写作建议：IJDE 不是普通遥感算法期刊。论文要解释工作与 Digital Earth 的关系，例如大尺度地理空间数据、数字地球框架、多源时空数据、智能感知、地球系统应用或公共平台能力。

## 10. 投稿前通用检查清单

每次投稿前，建议逐项检查：

1. **页数 / 字数**：主文、参考文献、appendix、supplement、checklist 是否计入限制。
2. **模板年份**：使用的是不是目标 venue 当年官方模板。
3. **匿名**：作者、单位、项目、基金、致谢、截图、文件名、PDF metadata、补充材料、代码链接是否暴露身份。
4. **外部链接**：是否通过链接扩展内容，是否会追踪访问者，是否破坏双盲。
5. **补充材料**：正文是否引用了补充材料；主文能否独立支撑贡献。
6. **创新点 / Highlights**：是否用 3-5 条清楚说明 novelty、method、result 和 application value。
7. **声明文件**：data availability、competing interests、author contributions、AI use、ethics、funding 是否完整。
8. **相关工作披露**：是否有会议版本、arXiv 版本、在投版本、重投版本，需要如何说明。
9. **PDF 检查**：字体、图片分辨率、引用、页码、overfull、缺图、公式溢出是否处理。
10. **投稿系统字段**：题目、摘要、关键词、作者顺序、单位、ORCID、推荐审稿人/回避审稿人是否一致。

越是接近 deadline，越容易在模板、匿名和补充材料上犯低级错误。建议论文初稿阶段就按目标 venue 的模板写，并在投稿前至少留一天专门做格式和系统字段检查。
