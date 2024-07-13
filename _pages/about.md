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
- *2024.06*: &nbsp;🎉🎉 One paper co-authored with Prof. [Y. Li](http://jszy.whu.edu.cn/liyansheng/zh_CN/index.htm) is accepted by **ECCV** 2024. Congrats!
- *2023.05*: &nbsp;🎉🎉 One paper on scene graph generation is accepted by International Journal of Computer Vision (IJCV) 2023.

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCV 2023</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Importance First: Generating Scene Graph of Human Interest](https://link.springer.com/article/10.1007/s11263-023-01817-7#citeas)

**Wenbin Wang**, Ruiping Wang, Shiguang Shan, Xilin Chen

<strong><span class='show_paper_citations' data='V4wFbcQAAAAJ:eQOLeE2rZwMC'></span></strong>

- There exists a hierarchical preference about human perception when they analyze a natural scene. 
- SGoI (Scene Graph of Human Interest) generation framework is proposed to present the scene graph according to the content importance.
- **CODE release**: [TGIR ![](https://img.shields.io/github/stars/Kenneth-Wong/TGIR?style=social)](https://github.com/Kenneth-Wong/TGIR)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2021</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Topic Scene Graph Generation by Attention Distillation from Caption](https://openaccess.thecvf.com/content/ICCV2021/html/Wang_Topic_Scene_Graph_Generation_by_Attention_Distillation_From_Caption_ICCV_2021_paper.html)

**Wenbin Wang**, Ruiping Wang, Xilin Chen

<strong><span class='show_paper_citations' data='V4wFbcQAAAAJ:UeHWp8X0CEIC'></span></strong>

- Scene graph generation and image captioning can be viewed as two forms of scene understanding. 
- A shared framework that jointly generates scene graph and image caption is proposed in this work.
- **CODE release**: [MMSceneGraph ![](https://img.shields.io/github/stars/Kenneth-Wong/MMSceneGraph?style=social)](https://github.com/Kenneth-Wong/MMSceneGraph): an SGG toolkit based on MMdetection, including most SOTA SGG methods.
</div>
</div>

- ``CVPR 2019`` Exploring Context and Visual Pattern of Relationship for Scene Graph Generation, 

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
-->
- 
# 📖 Educations
- *2017.09 - 2022.09*, Ph.D., Institute of Computing Technology, Chinese Academy of Sciences, Beijing, China.
- *2013.09 - 2017.06*, Undergraduate, Nankai University, Tianjin, China.

# 📚 Academic Services
- Invited journal reviewer for
IEEE TPAMI / IEEE TMM  ...
- Invited conference reviewer for
CVPR / ICCV / ECCV / NeurIPS ...

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.-->
