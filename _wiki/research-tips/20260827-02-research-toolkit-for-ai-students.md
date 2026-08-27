---
layout: wiki-post
title: "科研入门：AI 方向常用科研工具推荐"
date: 2026-08-27
published_at: "2026-08-27T00:00:00+08:00"
lang: zh
nav: wiki
alt_url: /wiki/
category: research-tips
permalink: /zh/wiki/research-tips/02-research-toolkit-for-ai-students/
tags:
  - 科研经验
  - 科研工具
  - 文献管理
  - 代码工具
  - AI工具
authors:
  - name: "Wenbin Wang"
    role: "Maintainer"
    affiliation: "China Three Gorges University"
summary: "整理 AI、计算机视觉和遥感智能方向常用的论文阅读、文献管理、代码开发、论文写作、PDF 标注和 AI 辅助工具。"
status: published
toc: true
---

# 科研入门：AI 方向常用科研工具推荐

发布时间：2026-08-27

这份笔记不是为了让同学们安装尽可能多的软件，而是帮助大家尽快建立一套稳定的科研工作流。好的工具链应该服务于四件事：读得进论文，管得住文献，跑得通代码，写得出文章。

工具只是基础设施。真正重要的是：每一篇论文能留下结构化笔记，每一次实验能复现，每一段代码知道为什么改，每一次写作都有清晰版本。

## 1. 论文阅读与分类整理

读论文最怕两件事：第一，下载了很多 PDF，但过几天不知道为什么要读；第二，读的时候觉得懂了，写论文时却找不到关键证据。因此文献工具必须承担“搜索、分类、阅读、标注、回看”这几件事。

| 工具 | 推荐用途 | 使用建议 | 链接 |
|---|---|---|---|
| ReadPaper | 论文搜索、在线阅读、分类整理、标签管理、AI 辅助阅读 | 适合做日常论文池，把论文按任务、数据集、方法类别、待读/已读/精读状态分类 | [ReadPaper](https://readpaper.com/new), [功能介绍](https://readpaper.com/features) |
| Zotero | 文献管理、BibTeX 导出、引用格式管理、跨设备同步 | 适合管理正式引用库，写论文前把确定会引用的文献统一放进 Zotero | [Zotero](https://www.zotero.org/) |
| Adobe Acrobat Reader | PDF 浏览、批注、高亮、评论、签名 | 适合精读 PDF，尤其是需要稳定显示论文版式、图表和公式时 | [Adobe Acrobat Reader](https://www.adobe.com/acrobat/pdf-reader.html) |
| OneNote | 长期科研笔记、组会记录、项目备忘、想法草稿 | 适合记录非正式思考、会议纪要、实验现象和阶段性总结 | [OneNote](https://www.onenote.com/download/) |

建议大家把论文分成三层管理：

1. **论文池**：用 ReadPaper 或 Zotero 收集相关论文，按任务和年份分类。
2. **精读笔记**：每篇精读论文只回答几个问题：解决什么问题，核心假设是什么，方法如何支持假设，实验是否充分，可能有什么缺陷。
3. **写作引用库**：真正写论文时，把会进入 Related Work 或 Method 对比的文献整理到 Zotero，并维护 BibTeX。

不要只用浏览器收藏夹管理论文。收藏夹适合临时保存链接，不适合长期科研积累。

## 2. 代码开发工具

AI、视觉和遥感智能方向的实验通常依赖 Python、PyTorch、CUDA、数据集路径、配置文件和大量训练日志。一个好的代码工具应该帮助你快速定位代码、调试张量形状、管理环境、追踪修改。

| 工具 | 推荐用途 | 使用建议 | 链接 |
|---|---|---|---|
| PyCharm | Python 项目开发、断点调试、重构、远程解释器 | 适合刚开始做深度学习实验的同学，调试体验稳定，项目结构清楚 | [PyCharm](https://www.jetbrains.com/pycharm/) |
| Visual Studio Code | 轻量编辑、远程服务器开发、插件生态、快速阅读代码 | 适合连接 Linux 服务器、改配置、看多语言项目、配合终端工作 | [VS Code](https://code.visualstudio.com/docs/getstarted/overview) |
| Anaconda / Miniconda | Python 环境隔离、包管理、实验环境复现 | 每个项目单独建环境，不要把所有包都装在 base 环境 | [Anaconda](https://www.anaconda.com/download) |
| PyTorch 官方文档 | 深度学习框架学习、API 查询、安装验证 | 遇到 tensor、autograd、DataLoader、GPU 问题时优先查官方文档 | [PyTorch Get Started](https://pytorch.org/get-started/locally/), [PyTorch Tutorials](https://docs.pytorch.org/tutorials/) |

写代码时要养成三个习惯：

1. **能断点就不要只靠 print**：尤其是调试数据增强、模型 forward、loss 计算和 evaluation 时。
2. **每个实验保留配置文件**：包括数据路径、模型权重、随机种子、学习率、batch size、epoch、指标和日志位置。
3. **不要直接改原始开源代码而不记录**：至少用 Git commit 或实验日志写清楚改了什么、为什么改。
4. pytorch学习，主要靠项目实践，不要对着文档看。看到不懂的函数，立刻查文档。

## 3. 论文写作与文献引用

写论文不要到最后一天才整理参考文献。引用管理应当从读论文时就开始，否则 Related Work 很容易变成临时堆文献。

| 工具 | 推荐用途 | 使用建议 | 链接 |
|---|---|---|---|
| Overleaf | LaTeX 论文写作、多人协作、模板管理、版本历史 | 适合会议和期刊论文写作，尤其是多人同时修改时 | [Overleaf](https://www.overleaf.com/), [Overleaf Docs](https://docs.overleaf.com/) |
| Zotero | 管理引用条目、导出 BibTeX、生成参考文献 | 推荐作为正式引用库，定期检查 title、author、venue、year 是否正确 | [Zotero](https://www.zotero.org/) |
| OneNote | 写作提纲、段落草稿、审稿意见整理 | 适合保存不稳定草稿，不建议替代正式 LaTeX 源文件 | [OneNote](https://www.onenote.com/download/) |

建议采用“两层写作”：

1. **想法层**：在 OneNote 或 Markdown 中整理 idea、论文结构、图表计划、实验列表。
2. **正式层**：在 Overleaf 中维护 LaTeX 正文、图表、表格和 BibTeX。

不要把论文写作理解成“把实验结果翻译成英文”。真正的写作是建立论证链：问题为什么重要，已有方法为什么不够，本文方法改变了什么，实验为什么能证明这些改变有效。

## 4. PDF 精读与标注习惯

PDF 阅读工具不只是用来打开论文。精读时至少要完成四类标注：

1. **问题标注**：这篇论文要解决的核心问题是什么？
2. **方法标注**：关键模块、公式、训练目标、推理流程在哪里？
3. **实验标注**：主要对比、消融、数据集和指标是否充分？
4. **质疑标注**：哪些地方没有说清楚，哪些假设可能不成立，哪些实验可以补？

Adobe Acrobat Reader 适合做稳定的高亮、评论和页面批注。ReadPaper 更适合边读边翻译、整理标签、快速回看图表和引用。两个工具可以配合使用：ReadPaper 管论文池，Acrobat 做重要论文精读。

## 5. AI 辅助工具

AI 工具可以显著提高阅读、编码和写作效率，但不能替代你自己的判断。科研中使用 AI 工具时，要始终坚持三条底线：不上传不该上传的未公开数据，不让模型编造引用，不把未经验证的代码和结论直接放进论文。

还需要提醒一点：很多国际学术资源、代码平台、课程视频和 AI 工具，对网络访问环境有一定要求。包括 ChatGPT / Codex、Claude Code、谷歌学术、YouTube 课程、GitHub 资源下载等，都可能需要同学具备基本的国际网络访问能力。这里不展开具体方式，刚入门的同学如果完全不知道如何配置，可以主动向师兄师姐请教，至少要保证自己能够稳定访问常用论文、代码、课程和 AI 服务资源。

| 工具 | 推荐用途 | 使用建议 | 链接 |
|---|---|---|---|
| ChatGPT / Codex | 代码理解、代码修改、论文段落润色、实验脚本解释、报错排查 | 适合让模型解释陌生代码、梳理实验流程、生成初版脚本；关键结论必须人工核查 | [OpenAI Developers](https://developers.openai.com/), [Codex Use Cases](https://developers.openai.com/codex/use-cases) |
| Claude Code | 在终端或 IDE 中理解代码库、修改多文件项目、生成测试和说明 | 适合较大的工程改动，但要检查 diff，避免把实验逻辑改偏 | [Claude Code Docs](https://docs.claude.com/en/docs/claude-code/getting-started) |
| DeepSeek | 中文理解、代码解释、API 调用、低成本实验性问答 | 适合辅助学习、快速问答和 API 原型，重要内容仍需查原始资料 | [DeepSeek](https://deepseek.com/), [DeepSeek API Docs](https://api-docs.deepseek.com/) |
| Qwen / 通义千问 | 中文场景、多模态、代码和 API 调用 | 适合中文科研问答、模型接口练习和国产大模型生态学习 | [QwenCloud Docs](https://docs.qwencloud.com/api-reference/chat/dashscope), [Qwen GitHub](https://github.com/QwenLM/Qwen3) |

AI 工具更适合做这些事：

1. 解释一段代码的输入输出、张量 shape 和调用链。
2. 根据报错定位可能的问题，再由自己验证。
3. 帮助把中文草稿改成更清楚的英文表达。
4. 根据论文段落提炼结构，但不能替代自己读原文。
5. 生成实验脚本初稿，但必须检查数据路径、指标计算、随机种子和保存逻辑。

AI 工具不适合直接做这些事：

1. 让模型凭空总结“某领域已有方法有哪些缺陷”而不看具体论文。
2. 让模型生成参考文献而不核对 DOI、标题、作者和 venue。
3. 把未公开论文、审稿意见、学生隐私数据、未发布代码直接上传到不受控平台。
4. 不看 diff 就接受模型修改过的代码。

**！！！！！！！！！不要让AI控制你的逻辑！！！！！！！！！**

## 6. 建议的最低工具组合

刚入门时不需要把所有工具都用起来。建议先稳定使用下面这套组合：

1. **论文阅读**：ReadPaper + Adobe Acrobat Reader。
2. **文献引用**：Zotero。
3. **代码开发**：PyCharm 或 VS Code 二选一，远程服务器开发建议优先学 VS Code。
4. **环境管理**：Miniconda / Anaconda。
5. **论文写作**：Overleaf。
6. **AI 辅助**：ChatGPT / Codex 或 Claude Code，再根据需要尝试 DeepSeek、Qwen。

工具链稳定以后，科研效率的差异主要来自习惯：论文是否分类，代码是否可复现，实验是否有日志，写作是否有版本，AI 输出是否经过核查。
