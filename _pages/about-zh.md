---
permalink: /zh/
title: ""
excerpt: ""
author_profile: true
lang: zh
alt_url: /
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

王文彬博士毕业于中国科学院计算技术研究所（ICT）智能信息处理重点实验室（IIP），导师为<a href='https://vipl.ict.ac.cn/people/xlchen/'>陈熙霖教授</a>和<a href='https://vipl.ict.ac.cn/people/rpwang/'>王瑞平教授</a>。此前，他于南开大学（NKU）计算机科学与技术专业获得工学学士学位（2013-2017）。他的研究兴趣包括但不限于空间智能、场景理解、目标检测、场景图生成和 AIGC。<a href='https://scholar.google.com/citations?user=V4wFbcQAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>

<span class='anchor' id='news'></span>

# 🔥 新闻
- *2026.05*: &nbsp;🎉🎉 两篇论文被 IEEE TGRS 接收。
- *2025.12*: &nbsp;🎉🎉 一篇论文被 IEEE TCSVT 接收。
- *2024.12*: &nbsp;🎉🎉 一篇论文被 The Visual Computer（CCF-C）接收。
- *2024.11*: &nbsp;🎉🎉 王文彬获得[中国图象图形学学会（CSIG）博士学位论文激励计划提名奖](https://www.csig.org.cn/23/202411/52239.html)。
- *2024.06*: &nbsp;🎉🎉 与武汉大学 [Y. Li 教授](http://jszy.whu.edu.cn/liyansheng/zh_CN/index.htm)合作的细粒度场景图生成论文被 ECCV 2024 接收，祝贺！
- *2023.05*: &nbsp;🎉🎉 一篇关于层次化场景图生成（SGoI）的论文被 International Journal of Computer Vision（IJCV）2023 接收。
- *2022.07*: &nbsp;🎉🎉 一篇论文被《中国科学：信息科学》接收。
- *2021.07*: &nbsp;🎉🎉 一篇关于场景图生成和图像描述的论文被 ICCV 2021 接收。
- *2020.07*: &nbsp;🎉🎉 一篇关于层次化场景图生成的论文被 ECCV 2020 接收。
- *2019.03*: &nbsp;🎉🎉 一篇关于视觉关系检测的论文被 CVPR 2019 接收。

<span class='anchor' id='publications'></span>

# 📝 论文发表

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCV 2023</div><img src='/images/TGIR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Importance First: Generating Scene Graph of Human Interest](https://link.springer.com/article/10.1007/s11263-023-01817-7#citeas)

**Wenbin Wang**, Ruiping Wang, Shiguang Shan, Xilin Chen

<strong><span class='show_paper_citations' data='V4wFbcQAAAAJ:eQOLeE2rZwMC'></span></strong>

- 人类在分析自然场景时，对场景内容的感知存在层次化偏好。
- 本文提出 SGoI（Scene Graph of Human Interest）生成框架，根据内容重要性组织并呈现场景图。
- **代码发布**: [TGIR ![](https://img.shields.io/github/stars/Kenneth-Wong/TGIR?style=social)](https://github.com/Kenneth-Wong/TGIR)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2021</div><img src='/images/tsg.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Topic Scene Graph Generation by Attention Distillation from Caption](https://openaccess.thecvf.com/content/ICCV2021/html/Wang_Topic_Scene_Graph_Generation_by_Attention_Distillation_From_Caption_ICCV_2021_paper.html)

**Wenbin Wang**, Ruiping Wang, Xilin Chen

<strong><span class='show_paper_citations' data='V4wFbcQAAAAJ:UeHWp8X0CEIC'></span></strong>

- 场景图生成和图像描述可以被看作场景理解的两种形式。
- 本文提出了一个共享框架，同时生成场景图和图像描述。
- **代码发布**: [MMSceneGraph ![](https://img.shields.io/github/stars/Kenneth-Wong/MMSceneGraph?style=social)](https://github.com/Kenneth-Wong/MMSceneGraph)：一个基于 MMDetection 的场景图生成工具箱，包含多数 SOTA 场景图生成方法。
</div>
</div>
- ``TGRS 2026`` Dong Ren, Yang Zhang, **Wenbin Wang** *, Gui-Song Xia, and Xiang Bai. [CaUCD: Causal Unsupervised Change Detection](https://ieeexplore.ieee.org/document/11556470). IEEE TGRS, vol. 64, Art. No. 4410718, 2026.
- ``TGRS 2026`` Hang Sun, Runzhou Li, Chenyang Wang, Lefei Zhang, Dong Ren, and **Wenbin Wang** *. [Frequency-Domain Heterogeneous Rank-Entropy Bipolarization Network for Remote Sensing Change Detection](https://ieeexplore.ieee.org/document/11500502). IEEE TGRS, vol. 64, Art. No. 5621517, 2026.
- ``JSTAR 2025`` Lu Wang, Chenyang Wang, Runzhou Li, Junbo Yu, Hang Sun, **Wenbin Wang** *, and Dong Ren. [MDFANet: Multidimensional Feature Alignment Network for Self-Supervised Pretraining in Remote Sensing Change Detection](https://ieeexplore.ieee.org/document/11300930). IEEE JSTAR, vol. 19, pp. 2355-2372, 2025.
- ``TCSVT 2025`` Hang Sun, Qingfei Zhong, Bo Du, Zhigang Tu, Jun Wan, **Wenbin Wang** *, Dong Ren. [Bidirectional-Modulation Frequency-Heterogeneous Network for Remote Sensing Image Dehazing](https://ieeexplore.ieee.org/abstract/document/11006655). IEEE TCSVT, vol. 35, no. 11, pp. 10649-10664, 2025.
- ``TVC 2025`` Tang Xu, **Wenbin Wang** *, ALin Zhong. [HOIEdit: Human-Object Interaction Editing with Text-to-Image Diffusion Model](https://doi.org/10.1007/s00371-024-03781-w). The Visual Computer, vol. 41, pp. 6187-6199, 2025.
- ``ECCV 2024`` Yansheng Li, Tingzhu Wang, Kang Wu, Linlin Wang, Xin Guo, **Wenbin Wang**. [Fine-Grained Scene Graph Generation via Sample-Level Bias Prediction](https://www.ecva.net/papers.php). In ECCV, vol. 15084, pp. 18-35, 2024. [![](https://img.shields.io/github/stars/Kenneth-Wong/TGIR?style=social&label=SBG)](https://github.com/Zhuzi24/SBG)
[[pdf]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03698.pdf)
[[DOI]](https://link.springer.com/chapter/10.1007/978-3-031-73347-5_2)
[[arXiv]](https://arxiv.org/pdf/2407.19259)
[[supp]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03698-supp.pdf)
- ``TPAMI 2024`` Yansheng Li, Linlin Wang, Tingzhu Wang, Xue Yang, Junwei Luo, Qi Wang, Youming Deng, **Wenbin Wang** et al. [STAR: A First-Ever Dataset and A Large-Scale Benchmark for Scene Graph Generation in Large-Size Satellite Imagery](https://ieeexplore.ieee.org/document/10770756/authors#authors). TPAMI, vol. 47, no. 3, pp. 1832-1849, 2024. [![](https://img.shields.io/github/stars/Zhuzi24/SGG-ToolKit?style=social&label=SGG-Toolkit)](https://github.com/Zhuzi24/SGG-ToolKit) [[project]](https://linlin-dev.github.io/project/STAR.html)
- ``IJCV 2023`` **Wenbin Wang**, Ruiping Wang, Shiguang Shan, Xilin Chen. [Importance First: Generating Scene Graph of Human Interest](https://link.springer.com/article/10.1007/s11263-023-01817-7#citeas). IJCV, vol. 131, no. 10, pp. 2489–2515, 2023. [![](https://img.shields.io/github/stars/Kenneth-Wong/TGIR?style=social&label=TGIR)](https://github.com/Kenneth-Wong/TGIR)
- ``SCIENTIA SINICA Informationis 2022`` **Wenbin Wang**, Ruiping Wang, Xilin Chen. [Balanced Scene Graph Generation Assisted by Additional Biased Predictor](https://www.sciengine.com/SSI/doi/10.1360/SSI-2022-0105). Scientia Sinica Informationis, vol. 52, no. 11, pp. 2075-2092, 2022. [![](https://img.shields.io/github/stars/Kenneth-Wong/ABP?style=social&label=ABP)](https://github.com/Kenneth-Wong/ABP) [[pdf]](https://dds.sciengine.com/cfs/files/pdfs/view/1674-7267/040658AB77E741249ED256711F1CA00D-mark.pdf)
- ``ICCV 2021`` **Wenbin Wang**, Ruiping Wang, Xilin Chen. [Topic Scene Graph Generation by Attention Distillation from Caption](https://openaccess.thecvf.com/content/ICCV2021/html/Wang_Topic_Scene_Graph_Generation_by_Attention_Distillation_From_Caption_ICCV_2021_paper.html). In ICCV, pp. 15900-15910, 2021. [![](https://img.shields.io/github/stars/Kenneth-Wong/MMSceneGraph?style=social&label=MMSceneGraph)](https://github.com/Kenneth-Wong/MMSceneGraph) [[DOI]](https://ieeexplore.ieee.org/document/9710233) [[pdf]](https://openaccess.thecvf.com/content/ICCV2021/papers/Wang_Topic_Scene_Graph_Generation_by_Attention_Distillation_From_Caption_ICCV_2021_paper.pdf)
- ``ECCV 2020`` **Wenbin Wang**, Ruiping Wang, Shiguang Shan, Xilin Chen. [Sketching Image Gist: Human-Mimetic Hierarchical Scene Graph Generation](https://link.springer.com/chapter/10.1007/978-3-030-58601-0_14). In ECCV, vol. 12358, pp. 222–239, 2020. [![](https://img.shields.io/github/stars/Kenneth-Wong/het-eccv20?style=social&label=HET)](https://github.com/Kenneth-Wong/het=eccv20) [[pdf]](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123580222.pdf) [[data]](https://github.com/Kenneth-Wong/het-eccv20) [[slides]](https://drive.google.com/file/d/1_47wtPPesR5C2Oz9uD2Poi-ANXzv07Yh/view?usp=sharing) [[video]](https://drive.google.com/file/d/1bbICb2oh4A4nLtSkf45mSBrxpksf7FNn/view?usp=sharing) [[arXiv]](https://arxiv.org/pdf/2007.08760.pdf) [[proc.]](https://link.springer.com/content/pdf/10.1007%2F978-3-030-58601-0.pdf) [[supp]](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123580222-supp.pdf)
- ``CVPR 2019`` **Wenbin Wang**, Ruiping Wang, Shiguang Shan, Xilin Chen. [Exploring Context and Visual Pattern of Relationship for Scene Graph Generation](http://openaccess.thecvf.com/content_CVPR_2019/html/Wang_Exploring_Context_and_Visual_Pattern_of_Relationship_for_Scene_Graph_CVPR_2019_paper.html). In CVPR, pp. 8188–8197, Long Beach, CA, US, 2019. [![](https://img.shields.io/github/stars/Kenneth-Wong/sceneGraph_Mem?style=social&label=CISC)](https://github.com/Kenneth-Wong/sceneGraph_Mem) [[DOI]](https://doi.org/10.1109/CVPR.2019.00838) [[pdf]](http://openaccess.thecvf.com/content_CVPR_2019/papers/Wang_Exploring_Context_and_Visual_Pattern_of_Relationship_for_Scene_Graph_CVPR_2019_paper.pdf) [[proc.]](https://ieeexplore.ieee.org/xpl/conhome/8938205/proceeding)

<span class='anchor' id='honors-and-awards'></span>

# 🎖 荣誉奖励
- *中国图象图形学学会博士学位论文激励计划提名奖*，2024。
- 湖北省楚天学者人才计划。

<span class='anchor' id='educations'></span>

# 📖 教育经历
- *2017.09 - 2022.09*，博士，中国科学院计算技术研究所，中国北京。
- *2013.09 - 2017.06*，本科，南开大学，中国天津。

<span class='anchor' id='team-members'></span>

# 🎓 团队成员
<!--* 硕士生:
  - [Zhiwei Cai](https://daffodil305.github.io/) (2024-)
  - [Yiheng Chen](https://qikert-zhushu.github.io/) (2024-)
  - [Qiwen Gong](https://gongqiwen03.github.io/) (2024-)
  - [Haocheng Fu](https://fuhaocheng.github.io/) (2024-)
  - [Shunfa He](https://confusq.github.io/confusq/) (2024-)
* 本科生: [Shiwen Tu](https://nanmengyu.github.io/), Xiaojun Xiang
-->

<span class='anchor' id='academic-services'></span>

# 📚 学术服务
- 受邀担任期刊审稿人：
IEEE TPAMI / IEEE TMM / PR / ESWA
- 受邀担任会议审稿人：
CVPR / ICCV / ECCV / NeurIPS
- CAAI（智能服务专业委员会）、CCF、CSIG 会员

<span class='anchor' id='fundings'></span>

# 📁 科研项目
- 多尺度空间与多粒度语义特征融合的场景图生成研究。湖北省自然科学基金（项目编号：2024AFB283），2024.03~2026.03
<!-- - 遥感场景语义分析中的场景图生成研究。三峡大学科学基金（项目编号：2023RCKJ0022），2023.10~2026.10 -->

<span class='anchor' id='teaching'></span>

# 📚 教学
* 研究生课程
  - 学术规范与论文写作，2024 年秋季

* 本科生课程


<!-- # 💬 邀请报告
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 实习经历
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.-->
