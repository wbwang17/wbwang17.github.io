---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Wenbin Wang is currently an Assistant Professor in College of Computer and Information Technology, China Three Gorges University. Previously, he obtained his Ph.D. degree in the Key Lab. of Intelligent Information Processing (IIP) at Institute of Computing Technology (ICT), Chinese Academy of Sciences (CAS), advised by <a href='https://vipl.ict.ac.cn/people/xlchen/'>Prof. Xilin Chen</a> and <a href='https://vipl.ict.ac.cn/people/rpwang/'>Prof. Ruiping Wang</a>. Before this, he received his B.Eng. degree in Computer Science and Technology from Nankai University (NKU, 2013-2017). His research interests include but not limited to scene understanding, object detection, scene graph generation, and AIGC. <a href='https://scholar.google.com/citations?user=V4wFbcQAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>


# 🔥 News
- *2024.06*: &nbsp;🎉🎉 One paper on fine-grained SGG co-authored with Prof. [Y. Li](http://jszy.whu.edu.cn/liyansheng/zh_CN/index.htm), Wuhan University, is accepted by ECCV 2024. Congrats!
- *2023.05*: &nbsp;🎉🎉 One paper on hierarchical SGG (SGoI) is accepted by International Journal of Computer Vision (IJCV) 2023.
- *2022.07*: &nbsp;🎉🎉 One paper is accepted by SCIENTIA SINICA Informationis.
- *2021.07*: &nbsp;🎉🎉 One paper on SGG and image captioning is accepted by ICCV 2021.
- *2020.07*: &nbsp;🎉🎉 One paper on hierarchical scene graph generation is accepted by ECCV 2020.
- *2019.03*: &nbsp;🎉🎉 One paper on visual relationship detection is accepted by CVPR 2019.


# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCV 2023</div><img src='images/TGIR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Importance First: Generating Scene Graph of Human Interest](https://link.springer.com/article/10.1007/s11263-023-01817-7#citeas)

**Wenbin Wang**, Ruiping Wang, Shiguang Shan, Xilin Chen

<strong><span class='show_paper_citations' data='V4wFbcQAAAAJ:eQOLeE2rZwMC'></span></strong>

- There exists a hierarchical preference about human perception when they analyze a natural scene. 
- SGoI (Scene Graph of Human Interest) generation framework is proposed to present the scene graph according to the content importance.
- **CODE release**: [TGIR ![](https://img.shields.io/github/stars/Kenneth-Wong/TGIR?style=social)](https://github.com/Kenneth-Wong/TGIR)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2021</div><img src='images/tsg.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Topic Scene Graph Generation by Attention Distillation from Caption](https://openaccess.thecvf.com/content/ICCV2021/html/Wang_Topic_Scene_Graph_Generation_by_Attention_Distillation_From_Caption_ICCV_2021_paper.html)

**Wenbin Wang**, Ruiping Wang, Xilin Chen

<strong><span class='show_paper_citations' data='V4wFbcQAAAAJ:UeHWp8X0CEIC'></span></strong>

- Scene graph generation and image captioning can be viewed as two forms of scene understanding. 
- A shared framework that jointly generates scene graph and image caption is proposed in this work.
- **CODE release**: [MMSceneGraph ![](https://img.shields.io/github/stars/Kenneth-Wong/MMSceneGraph?style=social)](https://github.com/Kenneth-Wong/MMSceneGraph): an SGG toolkit based on MMdetection, including most SOTA SGG methods.
</div>
</div>

- ``ECCV 2024`` Fine-Grained Scene Graph Generation via Sample-Level Bias Prediction, Yansheng Li, Tingzhu Wang, Kang Wu, Linlin Wang, Xin Guo, **Wenbin Wang**, LNCS **, pp. **, 2024. [![](https://img.shields.io/github/stars/Kenneth-Wong/TGIR?style=social&label=SBG)](https://github.com/Zhuzi24/SBG) 
[[pdf]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03698.pdf)
[[arXiv]](https://arxiv.org/pdf/2407.19259)
[[supp]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03698-supp.pdf)
- ``arXiv`` [STAR: A First-Ever Dataset and A Large-Scale Benchmark for Scene Graph Generation in Large-Size Satellite Imagery](https://arxiv.org/abs/2406.09410), Yansheng Li, Linlin Wang, Tingzhu Wang, Xue Yang, Junwei Luo, Qi Wang, Youming Deng, **Wenbin Wang** et al., 2024. [![](https://img.shields.io/github/stars/Zhuzi24/SGG-ToolKit?style=social&label=SGG-Toolkit)](https://github.com/Zhuzi24/SGG-ToolKit) [[project]](https://linlin-dev.github.io/project/STAR.html) 
- ``IJCV 2023`` [Importance First: Generating Scene Graph of Human Interest](https://link.springer.com/article/10.1007/s11263-023-01817-7#citeas), **Wenbin Wang**, Ruiping Wang, Shiguang Shan, Xilin Chen, 131: 2489–2515, 2023. [![](https://img.shields.io/github/stars/Kenneth-Wong/TGIR?style=social&label=TGIR)](https://github.com/Kenneth-Wong/TGIR)
- ``SCIENTIA SINICA Informationis 2022`` [Balanced Scene Graph Generation Assisted by Additional Biased Predictor](https://www.sciengine.com/SSI/doi/10.1360/SSI-2022-0105), **Wenbin Wang**, Ruiping Wang, Xilin Chen, 52(11): 2075-2092, 2022. [![](https://img.shields.io/github/stars/Kenneth-Wong/ABP?style=social&label=ABP)](https://github.com/Kenneth-Wong/ABP) [[pdf]](https://dds.sciengine.com/cfs/files/pdfs/view/1674-7267/040658AB77E741249ED256711F1CA00D-mark.pdf)
- ``ICCV 2021`` [Topic Scene Graph Generation by Attention Distillation from Caption](https://openaccess.thecvf.com/content/ICCV2021/html/Wang_Topic_Scene_Graph_Generation_by_Attention_Distillation_From_Caption_ICCV_2021_paper.html), **Wenbin Wang**, Ruiping Wang, Xilin Chen, pp. 15900-15910, 2021. [![](https://img.shields.io/github/stars/Kenneth-Wong/MMSceneGraph?style=social&label=MMSceneGraph)](https://github.com/Kenneth-Wong/MMSceneGraph) [[DOI]](https://ieeexplore.ieee.org/document/9710233) [[pdf]](https://openaccess.thecvf.com/content/ICCV2021/papers/Wang_Topic_Scene_Graph_Generation_by_Attention_Distillation_From_Caption_ICCV_2021_paper.pdf)
- ``ECCV 2020`` [Sketching Image Gist: Human-Mimetic Hierarchical Scene Graph Generation](https://link.springer.com/chapter/10.1007/978-3-030-58601-0_14), **Wenbin Wang**, Ruiping Wang, Shiguang Shan, Xilin Chen, LNCS 12358, pp. 222–239, 2020. [![](https://img.shields.io/github/stars/Kenneth-Wong/het-eccv20?style=social&label=HET)](https://github.com/Kenneth-Wong/het=eccv20) [[pdf]](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123580222.pdf) [[data]](https://github.com/Kenneth-Wong/het-eccv20) [[slides]](https://drive.google.com/file/d/1_47wtPPesR5C2Oz9uD2Poi-ANXzv07Yh/view?usp=sharing) [[video]](https://drive.google.com/file/d/1bbICb2oh4A4nLtSkf45mSBrxpksf7FNn/view?usp=sharing) [[arXiv]](https://arxiv.org/pdf/2007.08760.pdf) [[proc.]](https://link.springer.com/content/pdf/10.1007%2F978-3-030-58601-0.pdf) [[supp]](https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123580222-supp.pdf)
- ``CVPR 2019`` [Exploring Context and Visual Pattern of Relationship for Scene Graph Generation](http://openaccess.thecvf.com/content_CVPR_2019/html/Wang_Exploring_Context_and_Visual_Pattern_of_Relationship_for_Scene_Graph_CVPR_2019_paper.html), **Wenbin Wang**, Ruiping Wang, Shiguang Shan, Xilin Chen, pp. 8188–8197, Long Beach, CA, US, 2019. [![](https://img.shields.io/github/stars/Kenneth-Wong/sceneGraph_Mem?style=social&label=CISC)](https://github.com/Kenneth-Wong/sceneGraph_Mem) [[DOI]](https://doi.org/10.1109/CVPR.2019.00838) [[pdf]](http://openaccess.thecvf.com/content_CVPR_2019/papers/Wang_Exploring_Context_and_Visual_Pattern_of_Relationship_for_Scene_Graph_CVPR_2019_paper.pdf) [[proc.]](https://ieeexplore.ieee.org/xpl/conhome/8938205/proceeding)


# 🎖 Honors and Awards
- Nomination Award of the Doctoral Dissertation Incentive Program, China Society of Image and Graphics, 2024. 
- Chutian Scholar Talent Program of Hubei Province (湖北省“楚天学子”人才计划), 2024.


# 📖 Educations
- *2017.09 - 2022.09*, Ph.D., Institute of Computing Technology, Chinese Academy of Sciences, Beijing, China.
- *2013.09 - 2017.06*, Undergraduate, Nankai University, Tianjin, China.

# 🎓 Team Members
* Master students: 
  - [Zhiwei Cai](https://daffodil305.github.io/) (2024-) 
  - [Yiheng Chen](https://qikert-zhushu.github.io/) (2024-)
  - [Qiwen Gong](https://gongqiwen03.github.io/) (2024-)
  - [Haocheng Fu](https://fuhaocheng.github.io/) (2024-)
  - [Shunfa He](https://confusq.github.io/confusq/) (2024-)
* Undergraduates: [Shiwen Tu](https://nanmengyu.github.io/), Xiaojun Xiang 

# 📚 Academic Services
- Invited journal reviewer for
IEEE TPAMI / IEEE TMM / PR / ESWA
- Invited conference reviewer for
CVPR / ICCV / ECCV / NeurIPS
- Member of the Intelligent Service Professional Committee, Chinese Association for Artificial Intelligence (CAAI)（人工智能学会智能服务专业委员会委员）

# 📁 Fundings
- Research on scene graph generation with multi-scale spatial and multi-granularity semantic features. Natural Science Foundation of HuBei Province (Grant No. 2024AFB283), 2024.03~2026.03
- Research on semantic analysis of remote sensing scenes based on scene graph. Science Foundation of China Three Gorges University (Grant No. 2023RCKJ0022), 2023.10~2026.10

# 📚 Teaching
* Graduate courses
  - Academic norms and writings, Fall, 2024

* Undergraduate courses


<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.-->
