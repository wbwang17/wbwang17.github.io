---
layout: wiki-post
title: "科研入门：AI 方向必须掌握的基础内容"
date: 2026-08-27
published_at: "2026-08-27T00:00:00+08:00"
lang: zh
nav: wiki
alt_url: /wiki/
category: research-tips
permalink: /zh/wiki/research-tips/03-ai-research-onboarding-checklist/
tags:
  - 科研经验
  - 入门路线
  - Linux
  - Python
  - PyTorch
  - 大模型
authors:
  - name: "Wenbin Wang"
    role: "Maintainer"
    affiliation: "China Three Gorges University"
summary: "给出 AI、计算机视觉和大模型方向新同学的最低入门清单，覆盖 Linux、Python/Conda/PyTorch、CNN/Detection、Transformer、大模型 API、SFT、RAG 和 GRPO。"
status: published
toc: true
---

# 科研入门：AI 方向必须掌握的基础内容

发布时间：2026-08-27

入门标准：能在 Linux 服务器上配置环境，能读懂并运行 PyTorch 代码，能用现成框架完成一个检测或分类实验，能解释 CNN 和 Transformer 的基本机制，能调用大模型 API，并理解 SFT、后训练、RAG、GRPO 等基本概念。

这份清单给新同学一个最低要求。完成这些内容后，再去读 CVPR、ICCV、NeurIPS、TGRS 等论文，效率会高很多。

## 1. Linux 与服务器使用

深度学习实验大多运行在 Linux 服务器上。不会 Linux，就很难独立完成训练、调试、日志查看和远程部署。

至少需要掌握：

1. 基本命令：`cd`, `ls`, `pwd`, `mkdir`, `cp`, `mv`, `rm`, `cat`, `less`, `head`, `tail`, `grep`, `find`。
2. 文件权限：理解 `chmod`, `chown`, 可执行权限和目录权限。
3. 远程连接：会使用 `ssh`, `scp`, `rsync`，能从本地上传下载代码和数据。
4. 进程管理：会用 `ps`, `top`, `htop`, `nvidia-smi`, `kill` 查看和管理任务。
5. 长任务运行：会使用 `tmux` 或 `screen`，避免断开 SSH 后训练中断。
6. 日志查看：会用 `tail -f train.log` 观察训练过程。

推荐资料：[Ubuntu Linux command line for beginners](https://ubuntu.com/tutorials/command-line-for-beginners)。

最低任务：在服务器上创建一个自己的项目目录，上传一份代码，创建环境，运行一个 Python 脚本，并用 `tmux` 持续查看日志。

## 2. Python、Conda 与环境配置

科研代码最常见的问题不是模型太难，而是环境混乱。不同项目依赖的 Python、CUDA、PyTorch、numpy、opencv、mmcv、transformers 版本可能互相冲突。因此必须学会环境隔离。

至少需要掌握：

1. Python 基础语法：变量、函数、类、列表、字典、文件读写、异常处理。
2. 常用库：`numpy`, `pandas`, `matplotlib`, `opencv-python`, `scikit-learn`。
3. Conda 环境：创建、激活、导出、删除环境。
4. pip 与 conda 的区别：知道什么时候用 `pip install`，什么时候用 `conda install`。
5. 环境复现：会维护 `requirements.txt` 或 `environment.yml`。
6. CUDA 相关检查：知道如何检查 `torch.cuda.is_available()`，能看懂 CUDA 版本不匹配的常见报错。

推荐资料：[Anaconda Distribution](https://www.anaconda.com/download)，[PyTorch installation](https://pytorch.org/get-started/locally/)。

最低任务：独立创建一个 Conda 环境，安装 PyTorch，运行 GPU tensor 运算，并把环境导出为可复现文件。

## 3. PyTorch 基础

PyTorch 是当前视觉、大模型和遥感智能实验中最常用的深度学习框架之一。入门阶段不要求立刻会写复杂框架，但必须理解训练代码的基本结构。

至少需要掌握：

1. Tensor 基础：shape、dtype、device、广播、索引、拼接、矩阵乘法。
2. 自动求导：理解 `requires_grad`, `loss.backward()`, `optimizer.step()`。
3. 模型定义：会写简单的 `nn.Module`，理解 `forward()`。
4. 数据读取：理解 `Dataset`, `DataLoader`, batch, shuffle, transform。
5. 训练循环：forward、loss、backward、optimizer、scheduler、validation。
6. 模型保存与加载：`state_dict`, checkpoint, resume training。
7. GPU 使用：知道模型和数据都要放到同一个 device。

推荐资料：[PyTorch Tutorials](https://docs.pytorch.org/tutorials/)。

最低任务：不用现成训练框架，自己写一个 MNIST / CIFAR-10 分类训练脚本，包含训练、验证、保存权重和加载测试。

## 4. CNN 与检测框架

计算机视觉入门必须理解 CNN。即使现在 Transformer 和大模型很流行，CNN 仍然是理解视觉特征、检测、分割、遥感图像解译的重要基础。

至少需要掌握：

1. 卷积、padding、stride、pooling、感受野。
2. BatchNorm、ReLU、残差连接、backbone、neck、head。
3. 分类、检测、分割三类任务的输入输出差异。
4. 检测中的 bounding box、IoU、NMS、anchor、FPN、mAP。
5. YOLO 系列的基本思想：单阶段检测、网格/特征图预测、速度与精度权衡。
6. Faster R-CNN 的基本思想：两阶段检测、RPN、proposal、ROI Pooling / ROI Align、分类与框回归。
7. 单阶段检测和两阶段检测的差异：速度、精度、候选框生成方式、训练目标和适用场景。
8. 能使用现成框架训练、验证、推理和导出模型。

推荐资料：[Ultralytics YOLO Docs](https://docs.ultralytics.com/)，[YOLO Object Detection](https://docs.ultralytics.com/tasks/detect/)，[TorchVision Object Detection Finetuning Tutorial](https://docs.pytorch.org/tutorials/intermediate/torchvision_tutorial.html)。

最低任务：用 YOLO 在一个小数据集上完成检测实验，再至少读懂一个 Faster R-CNN 的训练或微调示例。需要能够解释数据格式、训练命令、验证指标、预测结果、失败案例，以及单阶段检测和两阶段检测在流程上的差异。

这里的重点不是“把 YOLO 命令跑通”本身，而是通过成熟框架快速理解目标检测的完整流程：数据标注、格式转换、候选框生成、训练、验证、推理、可视化和错误分析。YOLO 能帮助大家快速建立检测任务的工程直觉，Faster R-CNN 能帮助大家理解经典两阶段检测框架，对后续阅读检测、实例分割和遥感目标检测论文都很重要。

## 5. Transformer 基础

Transformer 是理解大模型、多模态模型、视觉 Transformer、遥感基础模型的核心。入门阶段不能只停留在“Transformer 很强”这种概念层面，而要能解释它为什么工作。

至少需要掌握：

1. token、embedding、position encoding。
2. self-attention、query/key/value、attention score、softmax。
3. multi-head attention、feed-forward network、residual connection、LayerNorm。
4. encoder、decoder、encoder-decoder 的差异。
5. causal mask 与自回归生成。
6. pretraining、fine-tuning、instruction tuning 的基本关系。
7. ViT 如何把图像切成 patch，VLM / MLLM 如何连接视觉编码器和语言模型。

推荐资料：[Stanford CS224N](https://web.stanford.edu/class/cs224n/)，[Hugging Face NLP Course](https://huggingface.co/learn/nlp-course/chapter1/1)。

最低任务：手写一个简化版 self-attention，输入一组 token embedding，输出 attention 后的表示；同时能画出 Transformer block 的数据流。

## 6. 大模型 API 调用

做大模型应用、智能体、多模态系统或科研工具时，必须会调用模型 API。API 调用不是只会复制一段样例代码，而是要理解模型输入输出、token、上下文、系统提示词、流式输出、函数调用和错误处理。

至少需要掌握：

1. API key 与环境变量管理，不把 key 写进公开代码仓库。
2. messages 格式：system、user、assistant 等角色。
3. temperature、max tokens、stream 等常见参数。
4. 多轮对话上下文如何传递。
5. JSON / structured output 的基本用法。
6. 超时、限流、重试和日志记录。
7. 不同厂商 API 的 base URL、模型名和参数差异。

推荐资料：[OpenAI API Quickstart](https://platform.openai.com/docs/quickstart/make-your-first-api-request)，[DeepSeek API Docs](https://api-docs.deepseek.com/)，[QwenCloud DashScope Chat](https://docs.qwencloud.com/api-reference/chat/dashscope)。

最低任务：写一个 Python 脚本，读取本地一段文本，调用大模型 API 总结内容，并把输入、输出、模型名、时间和错误信息保存到日志文件。

## 7. SFT、后训练、RAG 与 GRPO

大模型方向的同学至少要理解从“会调用模型”到“会改造模型行为”的基本路线。这里不要求一开始就训练大模型，但要知道每种方法解决什么问题。

| 内容 | 要理解的问题 | 入门要求 | 推荐资料 |
|---|---|---|---|
| SFT, Supervised Fine-Tuning | 如何用指令-回答数据让模型学会特定任务格式和领域表达 | 会构造 prompt-response 数据，理解训练目标和过拟合风险 | [Hugging Face TRL SFT](https://huggingface.co/docs/trl/v0.21.0/en/sft_trainer) |
| 后训练, Post-training | 预训练后如何通过 SFT、偏好优化、RL、蒸馏等方式调整模型行为 | 理解 SFT、DPO、RLHF、GRPO 等方法的关系，不混用概念 | [Hugging Face TRL](https://huggingface.co/docs/trl/main/index) |
| RAG, Retrieval-Augmented Generation | 如何让模型在回答时检索外部知识，降低静态知识和幻觉问题 | 会做文档切分、embedding、向量检索、上下文拼接和引用返回 | [LangChain Retrieval](https://docs.langchain.com/oss/python/langchain/retrieval), [Hugging Face RAG](https://huggingface.co/docs/transformers/en/model_doc/rag) |
| GRPO, Group Relative Policy Optimization | 如何通过组内相对奖励进行强化学习式后训练，常见于推理模型训练讨论 | 先理解 reward、policy、采样、优势估计，再看具体实现 | [Hugging Face TRL GRPO](https://huggingface.co/docs/trl/grpo_trainer) |

最低任务：

1. 构造 100 条小规模指令数据，了解 SFT 数据长什么样。
2. 用现成 embedding 模型和向量库搭建一个最小 RAG demo。
3. 阅读 TRL 中 SFTTrainer 和 GRPOTrainer 的文档，知道输入数据、训练对象和输出模型分别是什么。
4. 写清楚 SFT、RAG、GRPO 的差别：SFT 改模型参数，RAG 改推理时上下文，GRPO 属于强化学习式后训练。

## 8. 推荐课程与学习资料

下面几门公开课程适合作为视觉、深度学习、NLP 和大模型方向的基础入口。建议先把课程作业和代码跑通，再开始追最新论文，否则容易只会复述论文名词，不能真正判断方法是否可靠。

| 课程 | 适合对象 | 重点内容 | 链接 |
|---|---|---|---|
| Stanford CS231n: Deep Learning for Computer Vision | 视觉方向入门必修 | 图像分类、CNN、检测、分割、生成模型、视觉表征学习；作业很适合作为深度学习代码训练 | [CS231n 2025](https://cs231n.stanford.edu/2025/), [Assignments](https://cs231n.stanford.edu/2025/assignments.html), [YouTube playlist](https://www.youtube.com/watch?v=2fq9wYslV0A&list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) |
| Stanford CS224N: Natural Language Processing with Deep Learning | 想理解 Transformer、LLM 和多模态大模型的同学 | 词向量、RNN、attention、Transformer、语言模型、LLM 评测；对理解 VLM/MLLM 很有帮助 | [CS224N](https://web.stanford.edu/class/cs224n/) |
| Stanford CS229: Machine Learning | 需要补机器学习基础的同学 | 监督学习、泛化、概率模型、优化、核方法、聚类等 | [CS229](https://cs229.stanford.edu/) |
| MIT 6.S191: Introduction to Deep Learning | 想快速建立深度学习全貌的同学 | 深度学习基础、序列模型、生成模型、强化学习等 | [MIT 6.S191](https://introtodeeplearning.com/) |
| Hugging Face NLP / Transformers Course | 已经会 Python 和 PyTorch，希望上手 Transformer 工具链的同学 | tokenizer、transformers、datasets、微调、评测和模型发布 | [Hugging Face Course](https://huggingface.co/learn/nlp-course/chapter1/1) |

课程学习不要停在“看完视频”。CS231n 至少要完成前两个 assignment，CS224N 至少要学完 attention / Transformer 相关内容，并能解释 self-attention、position encoding、pretraining 和 fine-tuning 的基本逻辑。

## 9. 建议的 8 周入门路线

如果每周能稳定投入时间，可以按下面节奏推进：

| 周次 | 重点 | 应完成的输出 |
|---|---|---|
| 第 1 周 | Linux、SSH、tmux、文件和进程管理 | 能在服务器上独立运行长任务 |
| 第 2 周 | Python、Conda、环境复现 | 能创建并导出项目环境 |
| 第 3 周 | PyTorch tensor、Dataset、训练循环；CS231n assignment | 完成一个分类训练脚本 |
| 第 4 周 | CNN、检测基础、YOLO 与 Faster R-CNN；CS231n assignment | 完成一个小型检测实验，并能解释单阶段和两阶段检测差异 |
| 第 5 周 | Transformer、attention、ViT / LLM 基础；CS224N Transformer 内容 | 手写 self-attention 并解释 Transformer block |
| 第 6 周 | 大模型 API 调用 | 完成一个带日志的大模型调用脚本 |
| 第 7 周 | RAG 基础 | 完成一个本地文档问答 demo |
| 第 8 周 | SFT / 后训练 / GRPO 概念；研究方向论文初筛 | 整理一页方法对比笔记，并形成 20 篇论文阅读表初稿 |

如果已有较好的编程基础，可以把这条路线压缩到 4-6 周；如果 Linux、Python 和 PyTorch 都不熟，不建议压缩。

## 10. 入门最低闭环与验收标准

刚进组的同学，至少要完成下面的闭环：

1. 完成 CS231n 至少前两个 assignment，能够自己训练、调试和解释一个小型视觉模型。
2. 学完 CS224N 中 attention / Transformer 相关章节，能够解释 self-attention、position encoding、pretraining 和 fine-tuning 的基本逻辑。
3. 根据商量确定的研究方向，从 TPAMI / CVPR / ICCV / ECCV / TGRS / JSTARS 等 venue 整理 20 篇论文的阅读表。
4. 复现 1 篇有开源代码的代表性论文，根据代码指引配置好环境并跑起实验，记录指标结果、环境问题、代码改动和可视化结果中暴露的问题。
5. 形成调研 PPT，讲清楚这个任务当前最主要的困难是什么，已有方法的共同偏向是什么，我们可能从哪里切入。

完成入门后，至少应该能独立回答下面的问题：

1. 服务器上某个训练任务为什么挂了？是环境、数据、显存、路径还是代码问题？
2. 一个 PyTorch 模型从输入图像到 loss 的完整数据流是什么？
3. 检测任务中的 mAP、IoU、NMS 分别是什么意思？
4. CNN 和 Transformer 在建模视觉信息时有什么差异？
5. 大模型 API 的输入输出如何组织？如何保存日志和处理错误？
6. SFT、RAG、GRPO 分别解决什么问题，哪些会改模型参数，哪些只改变推理过程？
