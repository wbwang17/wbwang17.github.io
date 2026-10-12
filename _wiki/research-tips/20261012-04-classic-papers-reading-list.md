---
layout: wiki-post
title: "入门必读的经典文章（动态更新）"
date: 2026-10-12
published_at: "2026-10-12T00:00:00+08:00"
lang: zh
nav: wiki
alt_url: /wiki/
category: research-tips
permalink: /zh/wiki/research-tips/04-classic-papers-reading-list/
tags:
  - 科研经验
  - 论文阅读
  - 场景图生成
  - 目标检测
  - 图像分割
  - 遥感
authors:
  - name: "Wenbin Wang"
    role: "Maintainer"
    affiliation: "China Three Gorges University"
summary: "视觉与遥感方向的经典论文清单，涵盖场景图生成、目标检测、图像分割与旋转检测，附核心阅读点、基线代码和评测概念速查。"
status: published
toc: true
---


# 入门必读的经典文章（动态更新）

发布时间：2026-10-12 · 最近更新：2026-10-12

面向视觉与遥感方向新同学，优先收录高影响力的顶会顶刊论文。每篇保留**论文链接、发表出处和核心阅读点**；技术报告与前沿工作单独标注。

建议先掌握 **Faster R-CNN、FPN 和 DETR**，再按研究方向阅读。不要只会调用 YOLO，区域特征与集合预测同样是后续研究的重要基础。

## 场景图生成

SGG 预测对象及其关系，典型输出为 `(subject, predicate, object)` 三元组。推荐精读顺序：**IMP → Motifs → VCTree → TDE**。

| 论文（第一作者） | 出处 | 核心阅读点 |
| --- | --- | --- |
| **VRD**：[Visual Relationship Detection with Language Priors](https://cs.stanford.edu/people/ranjaykrishna/vrd/)，Cewu Lu 等 | ECCV 2016 | 视觉关系检测、语言先验与未见关系组合。 |
| **Visual Genome**：[Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations](https://link.springer.com/article/10.1007/s11263-016-0981-7)，Ranjay Krishna 等 | IJCV 2017 | 对象、属性、关系标注；区分原始数据与 VG150 等处理版本。 |
| **IMP**：[Scene Graph Generation by Iterative Message Passing](https://openaccess.thecvf.com/content_cvpr_2017/html/Xu_Scene_Graph_Generation_CVPR_2017_paper.html)，Danfei Xu 等 | CVPR 2017 | 对象节点与关系边之间的迭代消息传递。 |
| **Neural Motifs**：[Neural Motifs: Scene Graph Parsing with Global Context](https://rowanzellers.com/neuralmotifs/)，Rowan Zellers 等 | CVPR 2018 | LSTM 全局上下文、对象共现与关系频率先验。 |
| **Graph R-CNN**：[Graph R-CNN for Scene Graph Generation](https://openaccess.thecvf.com/content_ECCV_2018/html/Jianwei_Yang_Graph_R-CNN_for_ECCV_2018_paper.html)，Jianwei Yang 等 | ECCV 2018 | 关系候选筛选与图卷积推理。 |
| **VCTree**：[Learning to Compose Dynamic Tree Structures for Visual Contexts](https://openaccess.thecvf.com/content_CVPR_2019/html/Tang_Learning_to_Compose_Dynamic_Tree_Structures_for_Visual_Contexts_CVPR_2019_paper.html)，Kaihua Tang 等 | CVPR 2019 | 动态树结构与双向 TreeLSTM 上下文建模。 |
| **TDE**：[Unbiased Scene Graph Generation From Biased Training](https://openaccess.thecvf.com/content_CVPR_2020/html/Tang_Unbiased_Scene_Graph_Generation_From_Biased_Training_CVPR_2020_paper.html)，Kaihua Tang 等 | CVPR 2020 | 因果分析、反事实推断与关系预测偏置。 |

### 基线代码

| 仓库 | 用途 |
| --- | --- |
| [KaihuaTang / Scene-Graph-Benchmark.pytorch](https://github.com/KaihuaTang/Scene-Graph-Benchmark.pytorch) | 通用 SGG 基线，统一阅读 IMP、Motifs、VCTree 和因果分析等实现；指标参见 [METRICS.md](https://github.com/KaihuaTang/Scene-Graph-Benchmark.pytorch/blob/master/METRICS.md)。 |
| [STAR：Zhuzi24 / SGG-ToolKit](https://github.com/Zhuzi24/SGG-ToolKit) | 遥感 SGG 数据准备、训练与评测；数据入口见 [STAR 项目页](https://linlin-dev.github.io/project/STAR.html)。 |
| [Bamboo0216 / SARNet](https://github.com/Bamboo0216/SARNet) | 组内 [TGRS 2026 工作](https://ieeexplore.ieee.org/document/11677219/)，基于 SGG-ToolKit，关注空间影响建模与相对几何配置。 |

遥感方向建议先跑通 **STAR 基线，再阅读 SARNet**。复现时固定数据划分、检测器和评测配置，再比较模型改动。

## 目标检测

### R-CNN 系列与多尺度特征

| 论文（第一作者） | 出处 | 核心阅读点 |
| --- | --- | --- |
| **R-CNN**：[Rich Feature Hierarchies for Accurate Object Detection and Semantic Segmentation](https://openaccess.thecvf.com/content_cvpr_2014/html/Girshick_Rich_Feature_Hierarchies_2014_CVPR_paper.html)，Ross Girshick 等 | CVPR 2014 | 候选区域、CNN 特征与检测微调。 |
| **Fast R-CNN**：[Fast R-CNN](https://openaccess.thecvf.com/content_iccv_2015/html/Girshick_Fast_R-CNN_ICCV_2015_paper.html)，Ross Girshick | ICCV 2015 | 共享卷积特征、RoI Pooling 与多任务损失。 |
| **Faster R-CNN**：[Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks](https://proceedings.neurips.cc/paper/2015/hash/14bfa6bb14875e45bba028a21ed38046-Abstract.html)，Shaoqing Ren 等 | NIPS 2015（现 NeurIPS） | RPN、anchor、候选框与两阶段分类回归。 |
| **FPN**：[Feature Pyramid Networks for Object Detection](https://openaccess.thecvf.com/content_cvpr_2017/html/Lin_Feature_Pyramid_Networks_CVPR_2017_paper.html)，Tsung-Yi Lin 等 | CVPR 2017 | 自顶向下路径、横向连接与多尺度特征。 |

### 单阶段检测与 YOLO 系列

| 论文（第一作者） | 出处 | 核心阅读点 |
| --- | --- | --- |
| **YOLOv1**：[You Only Look Once: Unified, Real-Time Object Detection](https://www.cv-foundation.org/openaccess/content_cvpr_2016/html/Redmon_You_Only_Look_CVPR_2016_paper.html)，Joseph Redmon 等 | CVPR 2016 | 网格预测与实时单阶段检测。 |
| **SSD**：[SSD: Single Shot MultiBox Detector](https://research.google/pubs/ssd-single-shot-multibox-detector/)，Wei Liu 等 | ECCV 2016 | 多尺度特征图与 default boxes。 |
| **YOLOv2 / YOLO9000**：[YOLO9000: Better, Faster, Stronger](https://openaccess.thecvf.com/content_cvpr_2017/html/Redmon_YOLO9000_Better_Faster_CVPR_2017_paper.html)，Joseph Redmon 等 | CVPR 2017 | anchor 聚类、多尺度训练与分类检测联合训练。 |
| **RetinaNet**：[Focal Loss for Dense Object Detection](https://openaccess.thecvf.com/content_iccv_2017/html/Lin_Focal_Loss_for_ICCV_2017_paper.html)，Tsung-Yi Lin 等 | ICCV 2017 | Focal Loss 与前景/背景样本不平衡。 |
| **FCOS**：[FCOS: Fully Convolutional One-Stage Object Detection](https://openaccess.thecvf.com/content_ICCV_2019/html/Tian_FCOS_Fully_Convolutional_One-Stage_Object_Detection_ICCV_2019_paper.html)，Zhi Tian 等 | ICCV 2019 | anchor-free 预测、边界距离与 centerness。 |
| **YOLOv7**：[YOLOv7: Trainable Bag-of-Freebies Sets New State-of-the-Art for Real-Time Object Detectors](https://openaccess.thecvf.com/content/CVPR2023/html/Wang_YOLOv7_Trainable_Bag-of-Freebies_Sets_New_State-of-the-Art_for_Real-Time_Object_Detectors_CVPR_2023_paper.html)，Chien-Yao Wang 等 | CVPR 2023 | 实时检测架构、重参数化与训练策略。 |

**技术报告补充：** [YOLOv3: An Incremental Improvement](https://arxiv.org/abs/1804.02767)（2018），关注 Darknet-53 与多尺度预测；[YOLOv4: Optimal Speed and Accuracy of Object Detection](https://arxiv.org/abs/2004.10934)（2020），关注网络组件与训练技巧。两者不列作正式顶会论文。

### DETR 与开放词汇检测

| 论文（第一作者） | 出处 | 核心阅读点 |
| --- | --- | --- |
| **DETR**：[End-to-End Object Detection with Transformers](https://www.ecva.net/papers/eccv_2020/papers_ECCV/html/832_ECCV_2020_paper.php)，Nicolas Carion 等 | ECCV 2020 | object queries、Hungarian matching 与集合预测。 |
| **Deformable DETR**：[Deformable DETR: Deformable Transformers for End-to-End Object Detection](https://openreview.net/forum?id=gZ9hCDWe6ke)，Xizhou Zhu 等 | ICLR 2021 | 参考点、稀疏采样注意力与多尺度处理；[代码](https://github.com/fundamentalvision/Deformable-DETR)。 |
| **DINO（检测）**：[DINO: DETR with Improved DeNoising Anchor Boxes for End-to-End Object Detection](https://openreview.net/forum?id=3mRwyG5one)，Hao Zhang 等 | ICLR 2023 | 去噪训练与查询初始化；[代码](https://github.com/IDEA-Research/DINO)。 |
| **Grounding DINO**：[Grounding DINO: Marrying DINO with Grounded Pre-Training for Open-Set Object Detection](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/6319_ECCV_2024_paper.php)，Shilong Liu 等 | ECCV 2024 | 图文交互、语言引导查询与文本条件检测。 |

按表格顺序阅读即可。这里的 DINO 是检测方法，不是自监督表征中的 DINO / DINOv2。

## 图像分割

| 论文（第一作者） | 出处 | 核心阅读点 |
| --- | --- | --- |
| **FCN**：[Fully Convolutional Networks for Semantic Segmentation](https://openaccess.thecvf.com/content_cvpr_2015/html/Long_Fully_Convolutional_Networks_2015_CVPR_paper.html)，Jonathan Long 等 | CVPR 2015 | 全卷积像素预测、上采样与跨层融合。 |
| **U-Net**：[U-Net: Convolutional Networks for Biomedical Image Segmentation](https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/)，Olaf Ronneberger 等 | MICCAI 2015 | 编码器、解码器与跳跃连接。 |
| **DeepLab（期刊版）**：[DeepLab: Semantic Image Segmentation with Deep Convolutional Nets, Atrous Convolution, and Fully Connected CRFs](https://arxiv.org/abs/1606.00915)，Liang-Chieh Chen 等 | TPAMI 2018 | 空洞卷积、ASPP 与 CRF。 |
| **DeepLabv3+**：[Encoder-Decoder with Atrous Separable Convolution for Semantic Image Segmentation](https://www.ecva.net/papers/eccv_2018/papers_ECCV/html/Liang-Chieh_Chen_Encoder-Decoder_with_Atrous_ECCV_2018_paper.php)，Liang-Chieh Chen 等 | ECCV 2018 | 多尺度上下文、解码器与边界恢复。 |
| **Mask R-CNN**：[Mask R-CNN](https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html)，Kaiming He 等 | ICCV 2017 | RoIAlign、mask 分支与实例分割。 |
| **Mask2Former**：[Masked-Attention Mask Transformer for Universal Image Segmentation](https://openaccess.thecvf.com/content/CVPR2022/html/Cheng_Masked-Attention_Mask_Transformer_for_Universal_Image_Segmentation_CVPR_2022_paper.html)，Bowen Cheng 等 | CVPR 2022 | masked attention 与统一分割架构。 |
| **SAM**：[Segment Anything](https://openaccess.thecvf.com/content/ICCV2023/html/Kirillov_Segment_Anything_ICCV_2023_paper.html)，Alexander Kirillov 等 | ICCV 2023 | 可提示分割、三部分模型架构与数据引擎。 |

先区分**语义分割、实例分割、全景分割和可提示分割**。SAM 的掩码输出本身不等于类别标签或场景图关系。

## 遥感旋转目标检测

| 论文（第一作者） | 出处 | 核心阅读点 |
| --- | --- | --- |
| **DOTA**：[DOTA: A Large-Scale Dataset for Object Detection in Aerial Images](https://openaccess.thecvf.com/content_cvpr_2018/html/Xia_DOTA_A_Large-Scale_CVPR_2018_paper.html)，Gui-Song Xia 等 | CVPR 2018 | 大幅面遥感影像、四边形标注与检测评测。 |
| **RoI Transformer**：[Learning RoI Transformer for Oriented Object Detection in Aerial Images](https://openaccess.thecvf.com/content_CVPR_2019/html/Ding_Learning_RoI_Transformer_for_Oriented_Object_Detection_in_Aerial_Images_CVPR_2019_paper.html)，Jian Ding 等 | CVPR 2019 | 水平 RoI 到旋转 RoI 的变换与特征对齐。 |
| **Oriented R-CNN**：[Oriented R-CNN for Object Detection](https://openaccess.thecvf.com/content/ICCV2021/html/Xie_Oriented_R-CNN_for_Object_Detection_ICCV_2021_paper.html)，Xingxing Xie 等 | ICCV 2021 | oriented RPN 与两阶段旋转框精修；[代码](https://github.com/jbwang1997/OBBDetection)。 |

建议顺序：**Faster R-CNN → FPN → DOTA → RoI Transformer → Oriented R-CNN**。RoI Transformer 中的 Transformer 指区域变换，不是自注意力网络。

## 进阶与前沿补充

以下工作用于衔接后续研究，不与长期高引用经典混排。

| 论文（第一作者） | 出处 | 核心阅读点 |
| --- | --- | --- |
| **PSG**：[Panoptic Scene Graph Generation](https://www.ecva.net/papers/eccv_2022/papers_ECCV/html/222_ECCV_2022_paper.php)，Jingkang Yang 等 | ECCV 2022 | 从框级场景图扩展到全景分割区域与关系。 |
| **SAM 2**：[SAM 2: Segment Anything in Images and Videos](https://proceedings.iclr.cc/paper_files/paper/2025/hash/45c1f6a8cbf2da59ebf2c802b4f742cd-Abstract-Conference.html)，Nikhila Ravi 等 | ICLR 2025 | 流式记忆与视频对象传播；[项目](https://ai.meta.com/research/sam2/)。 |
| **SAM 3**：[SAM 3: Segment Anything with Concepts](https://proceedings.iclr.cc/paper_files/paper/2026/hash/e0982cbc81401df3430ee1ff780dc7a2-Abstract-Conference.html)，Nicolas Carion 等 | ICLR 2026 | 概念提示下的检测、分割与跟踪；[项目](https://ai.meta.com/research/sam3/)。 |

## 评测概念速查

阅读相关论文时，应能解释以下概念；具体匹配、插值和忽略规则以官方评测器为准。

| 方向 | 概念 | 需要掌握 |
| --- | --- | --- |
| 场景图 | PredCls / SGCls / SGDet | 分别在给定真实框与类别、仅给定真实框、从图像检测目标的条件下预测关系。 |
| 场景图 | R@K / mR@K | 前 K 个关系三元组的召回；mR@K 先按关系类别计算再平均。 |
| 检测 | IoU；TP / FP / FN | IoU 为交集面积除以并集面积；按类别与 IoU 规则匹配后统计正确检测、误检与漏检。 |
| 检测 | Precision / Recall / F1 | `P = TP/(TP+FP)`，`R = TP/(TP+FN)`，`F1 = 2PR/(P+R)`。 |
| 检测 | AP / mAP | AP 汇总置信度排序产生的 P-R 曲线；mAP 在指定协议下对类别 AP 求平均。 |
| 检测 | AP50 / AP75 | IoU 匹配阈值为 0.50 / 0.75 时的 AP；不是置信度阈值。 |
| 检测 | COCO AP | 跨类别及 0.50 至 0.95、间隔 0.05 的 IoU 阈值汇总；不等于 AP50。 |
| 检测 | AP_S / AP_M / AP_L；AR | 分别关注不同大小目标的 AP，以及给定检测数上限等条件下的平均召回。 |
| 分割 | mIoU | 按类别计算像素交并比后平均，不是检测 mAP。 |
| 检测与分割 | bbox AP / mask AP | 分别使用框 IoU、掩码 IoU 匹配实例并计算 AP。 |

比较结果前，统一**数据划分、任务设置和评测协议**；区分置信度阈值、NMS 阈值与评测 IoU 阈值。

详细说明：[SGG 指标](https://github.com/KaihuaTang/Scene-Graph-Benchmark.pytorch/blob/master/METRICS.md) · [VOC 评测](https://www.robots.ox.ac.uk/~vgg/projects/pascal/VOC/voc2012/htmldoc/index.html) · [COCO 评测代码](https://github.com/cocodataset/cocoapi/blob/master/PythonAPI/pycocotools/cocoeval.py) · [MMSegmentation 指标](https://mmsegmentation.readthedocs.io/en/latest/api.html#mmseg.evaluation.metrics.IoUMetric)

## 更新记录

- **2026-10-12**：建立论文清单，补充通用与遥感 SGG 基线代码、评测概念；统一为便于增补的简表。

