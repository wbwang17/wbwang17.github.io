---
layout: wiki-post
title: "摘要写作笔记：从“介绍方法”到“建立论文逻辑”"
date: 2026-08-23
lang: zh
nav: wiki
alt_url: /wiki/
category: writing
permalink: /zh/wiki/writing/notes-on-abstract-writing/
tags:
  - 论文写作
  - 摘要
  - 科研方法
authors:
  - name: "Wenbin Wang"
    role: "Maintainer"
    affiliation: "China Three Gorges University"
summary: "总结科研论文摘要写作中的论证链组织、句子功能、常见问题和快速自检方法。"
status: published
toc: true
---

# 摘要写作笔记：从“介绍方法”到“建立论文逻辑”

## 1. 摘要真正要完成什么

高水平论文的摘要不是把 Introduction、Method 和 Experiments 各压缩一句，更不是把模块名称依次罗列出来。它最重要的任务，是在极短篇幅内建立一条**完整、闭环、可验证的论证链**：

> **重要问题 → 现有方法的共同设计偏向 → 由此产生的核心后果 → 新的观察视角/范式 → 核心方法 → 方法带来的中间理论效果 → 更高层意义 → 实验证据。**

换句话说，摘要既要回答“做了什么”，更要回答三个更重要的问题：

1. **为什么这个问题值得重新思考？**
2. **你的方法究竟改变了什么，而不只是增加了什么模块？**
3. **为什么这些改变能够解释最终的性能提升？**

一个好的摘要应该让读者在读完之后自然形成如下因果关系：

> **因为现有方法存在某种结构性偏向，所以产生某种具体失败；本文重新定义问题，并通过若干核心机制改变一个更高层的中间能力；这个中间能力进一步解释了最终的 task success / accuracy / efficiency 提升。**

因此，摘要最忌讳的不是“信息少”，而是**句子很多，却没有因果推进**。

---

## 2. 推荐的整体结构：8 句主干

对于 TPAMI、TIP、TGRS、IJCV 等偏方法型论文，一个比较稳定、可复用的摘要结构可以压缩成 **8 句主干**。若确有必要，可以增加第 9 句作为更高层 takeaway，但不应为了“升华”而重复标题或第一句。

| 句子 | 功能 | 核心问题 |
|---|---|---|
| S1 | 领域目标 / 核心 tension | 这个方向长期在追求什么？ |
| S2 | 现有范式及其共同偏向 | 现有方法通常怎么做？这种设计偏向什么？ |
| S3 | 具体后果 | 这种偏向实际导致什么失败？ |
| S4 | 新 standpoint + framework | 本文如何重新理解问题？提出什么框架？ |
| S5 | 第一条主线 | 它提升了什么理论能力，从而改善什么结果？ |
| S6 | 第二条主线 | 它提升了什么理论能力，从而改善什么结果？ |
| S7 | 范式意义 / tension reconciliation | 两条主线合起来解决了什么更一般的矛盾？ |
| S8 | 实验结果 | 在哪些任务上，以什么指标证明有效？ |

这 8 句不是机械模板，而是一个**论证骨架**。具体论文可以合并 S2–S3，也可以拆分 S5–S6，但整体逻辑最好不要缺失。

---

# 3. 每一句应该怎么写

## S1：先定义“长期目标”或“核心矛盾”

### 写作目的

第一句不要急着介绍方法，也不要一上来解释任务定义。它应当说明这个研究方向真正关心的**核心目标组合**，尤其是两个通常存在 tension 的目标。

典型结构：

> **Achieving [Goal A] while preserving/maintaining [Goal B] remains a central pursuit in [research setting].**

或：

> **Balancing [Goal A] and [Goal B] remains a fundamental challenge in [research setting].**

### 推荐动词 / 结构

- `achieving ... while preserving ...`
- `balancing ... and ...`
- `reconciling ... with ...`
- `maintaining ... without sacrificing ...`
- `remains a central pursuit`
- `remains a fundamental challenge`
- `is essential to ...`

### 经验

第一句中的两个目标最好能和最后实验指标形成闭环。例如：

- `task success` ↔ SR / accuracy / LLM-Match
- `path efficiency` ↔ SPL / path length
- `detection accuracy` ↔ AP
- `computational efficiency` ↔ FLOPs / FPS / latency

这样第一句不是“口号”，而是后面实验可以验证的目标。

### 避免

- 不要用过大的词，如 `reliable`, `robust`, `trustworthy`，除非实验真正验证了鲁棒性、可靠性或分布外稳定性。
- 不要一开始就把方法名称塞进去。
- 不要写成任务定义教科书句式。

---

## S2：概括现有方法的“共同设计偏向”

### 写作目的

这一句不是文献综述，而是要提炼出不同现有方法背后的一个**共同机制或设计假设**。

高质量写法通常不是：

> Existing methods fail to consider X.

而是：

> Existing methods typically do A, yet such designs inherently favor B.

这种写法更稳健，因为它不是武断地说“别人没有做”，而是指出一种**设计偏向及其自然后果**。

### 推荐句式

> **Existing [methods/frameworks] typically [shared design behavior], yet such designs inherently favor [undesired bias].**

> **Existing [methods] commonly rely on [shared mechanism], which tends to emphasize [local/short-term property] over [desired property].**

> **Current [frameworks] largely formulate [problem] through [common formulation], making their decisions primarily driven by [bias].**

### 推荐动词

描述现有方法：

- `rely on`
- `guide`
- `assess`
- `formulate`
- `optimize`
- `treat`
- `determine`
- `operate through`
- `base ... on`

描述设计偏向：

- `favor`
- `emphasize`
- `prioritize`
- `bias ... toward`
- `remain dominated by`
- `tend to privilege`

### 经验

最好写成：

> **共同机制 → inherent bias**

而不是：

> **别人没做 X → 我来做 X**

前者更像研究问题，后者更像补丁式创新。

### 避免

- `ignore`, `neglect`, `fail to consider`：除非经过充分文献验证，否则容易绝对化。
- 人为造概念，如 `state-centric`, `time-local`, `step-local` 等，如果读者需要先猜词是什么意思，就失去摘要效率。
- 同一句中连续堆三个抽象名词解释同一件事。

---

## S3：给出具体、可理解的失败后果

### 写作目的

S2 讲的是设计层偏向，S3 必须回答：**所以呢？**

这一句最好落到 2 个非常具体、可观察的 failure mode，再连接到第一句的最终目标。

### 推荐句式

> **This bias often incurs [Failure A] and [Failure B], ultimately reducing [Metric-level Outcome A] and [Outcome B].**

> **Consequently, [Failure A] and [Failure B] become frequent, compromising [desired outcomes].**

> **As a result, [mechanistic failure] leads to [behavioral failure], degrading [final objective].**

### 推荐动词

- `incurs`
- `causes`
- `induces`
- `leads to`
- `results in`
- `compromises`
- `reduces`
- `degrades`
- `limits`

### 经验

S2 和 S3 的关系应该是：

> **偏向是原因，failure mode 是表现，metric 是后果。**

不要把这三层混在一个超长句子里。

---

## S4：用“rethinking + framework”完成方法总起

### 写作目的

这一句通常是全文摘要最关键的转折句。它不是简单的：

> We propose XXX.

更好的结构是：

> **重新理解问题 → 提出框架 → 框架由两条高层过程构成 → 两条过程分别服务于两个行为目标。**

### 推荐句式

> **This work rethinks [problem] from a [new standpoint] and introduces [Framework], which couples [Process A] with [Process B] to coordinate [Behavior A] with [Behavior B].**

或：

> **This work reframes [problem] through [new perspective] and introduces [Framework], integrating [Process A] and [Process B] to jointly support [Outcome A] and [Outcome B].**

### 推荐动词

表示“提升立意”：

- `rethinks`
- `reframes`
- `recasts`
- `revisits`
- `reformulates`

表示提出框架：

- `introduces`
- `presents`
- `develops`
- `establishes`

表示高层组成关系：

- `couples`
- `integrates`
- `unifies`
- `coordinates`
- `combines`

### 经验

这里的 Process A / Process B 不应只是模块名称。它们最好是比具体模块高一层的**过程性概念**，例如：

> `perceptual cue maturation`

而不是直接写：

> `localization module + verification module`

这样 S4 负责“范式”，S5/S6 再负责“机制”。

### 避免

- framework 名称之后连续列出 3–5 个模块，摘要会瞬间降到工程描述层。
- `a novel framework that effectively...` 这类没有信息量的形容词。
- 高层名字与下面模块重复同一个词根，例如高层叫 `Spatial XXX`，子模块又叫 `Prospective Spatial Expansion`。

---

# 4. S5 / S6：最关键的“理论中间层”

这是这轮摘要修改中最重要的经验。

一个方法句不应只是：

> **Process A does Module 1 and Module 2.**

也不应只是：

> **Process A governs/prioritizes/selects XXX.**

因为这些只是描述它“做什么”，没有解释**为什么这些机制最终会提高性能**。

更强的结构应该是：

> **High-level Process → improves a theoretically meaningful intermediate capability → through concrete mechanisms → produces a direct behavioral consequence.**

也就是：

> **过程 → 中间理论效果 → 技术机制 → 行为结果。**

这个“中间理论效果”是摘要最值得花时间提炼的部分。

例如：

> `cue maturation` 不是简单地 “performs localization and verification”，而是：
>
> `strengthens evidential discrimination`
>
> 从而能够区分 tentative hypotheses 与足以支持 commitment 的信息。

同理，第二条路线也不能只写：

> `governs search-effort allocation`

因为 `governs` 是中性动作词，只解释职责，不表达改善。

应该问：

> **这个过程直接增强了系统什么性质，而这个性质为什么会进一步提升 efficiency / accuracy / robustness？**

---

## S5：第一条主线——“理论能力 + 技术机制 + 直接结果”

### 推荐固定句式

> **[Process A] strengthens/enhances/improves [Intermediate Capability A] through [Mechanism A1] and [Mechanism A2], [direct consequence].**

例如：

> **Perceptual cue maturation strengthens evidential discrimination through granular localization and task-conditioned verification, distinguishing tentative hypotheses from support sufficient for commitment.**

### 推荐“效果型”动词

这类动词优先于 `uses`, `performs`, `governs`：

- `strengthens`
- `enhances`
- `improves`
- `sharpens`
- `promotes`
- `reinforces`
- `advances`
- `increases`
- `elevates`（慎用，语气较强）

### 直接结果的连接方式

- `distinguishing A from B`
- `separating A from B`
- `enabling A while avoiding B`
- `preserving A while suppressing B`
- `favoring A over B`
- `converting A into B`

注意同一摘要中不要反复使用同一个 participle，例如两句连续都用 `distinguishing`。

---

## S6：第二条主线——不要机械复制 S5 的词汇

### 推荐固定句式

结构可以平行，但词汇不应机械镜像：

> **[Process B] promotes/advances/improves [Intermediate Capability B] through [Mechanism B1] and [Mechanism B2], [behavioral consequence].**

或者：

> **Through [Mechanism B1] and [Mechanism B2], [Process B] improves [Intermediate Capability B], [behavioral consequence].**

### 关键原则

S5 和 S6 应当**逻辑对称，语言不对称**。

即：

> S5：`strengthens X through A and B, distinguishing ...`
>
> S6：不要再写 `strengthens Y through C and D, distinguishing ...`

可以换成：

- `promotes ... through ..., favoring ... while curbing ...`
- `enhances ... via ..., preserving ... while suppressing ...`
- `improves ... by ..., reducing ... without sacrificing ...`

这样既保持结构统一，又避免“机器生成式镜像句”。

---

# 5. 怎样找到“中间理论效果”

这是摘要最难、也最值得总结成固定方法的一步。

不要直接从模块名找同义词，而要顺着以下问题推导：

### Step 1：先问模块最直接改变了什么行为

例如：

- localization + verification → 不再看到 cue 就立即 commit
- unseen-space assessment + negative feedback → 不再只追当前显眼方向，也不反复走无效区域

### Step 2：再问这些行为背后共同增强了什么能力

例如：

- tentative cue 与 sufficient support 的区分能力 → `evidential discrimination`
- 对尚值得探索区域的有效利用、减少重复覆盖 → coverage-related capability

### Step 3：最后问这个能力为什么能解释最终指标

例如：

> evidential discrimination → better commitment → higher task success

> better use of unexplored/underexplored regions → less redundant motion → higher path efficiency

只有当这三层都成立时，这个中间概念才值得进入摘要。

### 判断一个概念是否合格

一个好的中间理论概念应该满足四点：

1. **不是模块操作本身**：如 `frontier selection`, `route prioritization`, `budget allocation` 往往太工程化。
2. **不是最终指标本身**：如果最终要说 efficiency，中间层最好不要仍然直接叫 efficiency，除非它是更明确的子维度。
3. **一眼能理解**：如果必须正文专门定义才能理解，摘要中风险较高。
4. **能由实际机制支持**：不要因为听起来高级，就引入方法并没有显式建模的概念，如 expected information gain、calibration、uncertainty estimation 等。

---

# 6. S7：把方法从“两个模块”提升成“一个范式”

### 写作目的

在分别解释两条主线之后，需要一句把它们重新合起来，说明这个 framework 解决的是一个**更高层的 tension**。

参考结构不是：

> The framework improves A, B, and C.

而是：

> **The framework reconciles the tension between A and B.**

这比单纯罗列三个优点更有理论含义。

### 推荐句式

> **The framework reconciles the tension between [Objective/Requirement A] and [Objective/Requirement B] under [constraint].**

> **Together, these designs reconcile [A] with [B], enabling [broader capability].**

> **This paradigm bridges the competing demands of [A] and [B].**

> **The resulting framework balances [A] against [B] under [realistic constraint].**

### 推荐动词

- `reconciles`
- `balances`
- `bridges`
- `aligns`
- `coordinates`
- `harmonizes`（一般不优先，略修辞化）

### 经验

这一句应该是**方法意义的升华**，不是重复 S4。

S4 回答：

> framework 由什么高层过程组成？

S7 回答：

> 这两条过程合起来解决了什么长期矛盾？

### 避免

- `The framework achieves reliable, effective, and efficient XXX.`：像宣传语，不像理论总结。
- 再次重复 S4 的 `commitment + information seeking` 原词组合。
- 为了“升华”加入实验无法支持的 `trustworthy`, `robust`, `generalizable`。

---

# 7. S8：实验句应该承担“证据”，而不是再讲故事

### 写作目的

前面已经完成了所有逻辑论证，实验句只需要回答：

1. 在哪些任务 / benchmark 上？
2. 是否达到 SOTA / competitive performance？
3. 最重要的数字是多少？

### 推荐句式

> **Extensive experiments on [Task A] and [Task B] show/demonstrate that [Framework] achieves [overall result], with [Gain A] and [Gain B] over [baseline category].**

> **Experiments across [benchmarks/tasks] demonstrate [result], including [quantified gains].**

### 推荐动词

- `show`
- `demonstrate`
- `validate`
- `establish`
- `confirm`

其中：

- `show` 最自然、最克制；
- `demonstrate` 稍正式；
- `validate` 更适合“验证设计有效性”，不一定适合直接接 performance；
- `establish` 语气偏强；
- `confirm` 更适合 ablation / hypothesis。

### 数字表达

如果指标从 46.1% 提升到 54.4%，这是：

> `an 8.3-point gain`

而不是：

> `an 8.3% gain`

除非明确计算的是相对提升比例。

### 收尾经验

如果最后已经有强数字，通常**直接停在数字上最好**。

不要习惯性添加：

> `laying a solid foundation for ...`

> `demonstrating great potential for ...`

> `providing a promising solution to ...`

这些句子通常没有新增信息，反而削弱实验数字的收尾力度。

只有当最后一句能给出一个真正新的、可支持的 scientific takeaway 时，才值得增加第 9 句。

---

# 8. 可选 S9：只有真正有新 takeaway 时才写

可以使用：

> **More broadly, these results suggest that [generalizable scientific insight].**

> **The results further indicate that [broader principle].**

这一句不是总结性能，而是给出**可推广的研究认识**。

例如：

> evidence should be actively verified before commitment

这种原则性认识可以保留；而：

> ACE provides an effective and efficient solution

则没有必要。

---

# 9. 动词库：以后优先“填名词”，少在动词上反复纠结

## 9.1 问题与现有方法

| 功能 | 推荐动词/短语 |
|---|---|
| 描述长期目标 | `achieve`, `preserve`, `maintain`, `balance`, `reconcile` |
| 描述现有做法 | `rely on`, `guide`, `assess`, `formulate`, `treat`, `determine` |
| 描述设计偏向 | `favor`, `emphasize`, `prioritize`, `bias toward`, `privilege` |
| 描述负面后果 | `incur`, `induce`, `cause`, `lead to`, `result in`, `compromise`, `degrade` |

## 9.2 提出新方法

| 功能 | 推荐动词/短语 |
|---|---|
| 提升问题立意 | `rethink`, `reframe`, `recast`, `reformulate`, `revisit` |
| 提出方法 | `introduce`, `present`, `develop`, `establish` |
| 连接高层过程 | `couple`, `integrate`, `unify`, `coordinate`, `combine` |

## 9.3 描述“理论效果”

| 强调 | 推荐动词 |
|---|---|
| 能力增强 | `strengthen`, `enhance`, `improve`, `sharpen`, `reinforce` |
| 行为倾向改善 | `promote`, `favor`, `preserve`, `encourage`, `sustain` |
| 减少负面行为 | `suppress`, `curb`, `reduce`, `attenuate`, `discourage`, `avoid` |
| 从一种状态转到另一种 | `convert`, `transform`, `mature`, `refine` |

## 9.4 升华与总结

| 功能 | 推荐动词 |
|---|---|
| 协调 tension | `reconcile`, `balance`, `bridge`, `align`, `coordinate` |
| 实验证明 | `show`, `demonstrate`, `validate`, `confirm`, `establish` |

---

# 10. 摘要中最需要避免的问题

## 10.1 用重复词自解释

典型问题：

> selective pursuit ... selective information seeking

> prospective spatial expansion ... spatial prospects

> exploration-budget allocation ... finite exploration budgets

> effective ... efficiency ... efficient exploration

判断方法很简单：如果一个核心词在相邻 1–2 句中反复出现，而后一次没有提供新含义，就应当改写。

**原则：概念可以重复，措辞不要机械重复。**

论文核心术语如 framework 名称、task name 可以必要重复；普通修饰词则应主动控制。

---

## 10.2 同一层级反复使用同一词根

尤其应避免：

> High-level Process: Spatial XXX  
> Submodule: Prospective Spatial Expansion

或者：

> High-level Process: Exploration XXX  
> Submodule: Exploration Feedback Regulation

高层概念和低层模块应该体现**语义分工和层级差异**，而不是同一个词加不同后缀。

---

## 10.3 为了“理论感”生造术语

危险信号包括：

- 两三个普通词拼接后，读者无法立即判断含义；
- 概念在正文没有严格定义或量化；
- 这个词听起来像控制理论、概率建模或信息论术语，但实际方法并没有对应建模。

例如，若没有显式信息增益建模，不要轻易写：

> `anticipated information yield`

若没有 calibration 指标，不要轻易写：

> `calibrated commitment`

若没有 robustness 实验，不要轻易写：

> `robust exploration`

摘要里的“高级感”应来自**因果抽象**，而不是生僻词汇。

---

## 10.4 把技术动作误当成理论贡献

以下表达通常偏操作层：

- `frontier selection`
- `route prioritization`
- `budget allocation`
- `candidate scoring`
- `feature fusion`

它们可以出现在方法细节中，但摘要中的高层句更应该回答：

> 这些动作最终增强了什么系统性质？

例如：

> localization + verification  
> → `evidential discrimination`

而不只是：

> → better candidate selection

---

## 10.5 两条方法句完全镜像

例如：

> A strengthens X through B and C, distinguishing D from E.  
> F strengthens Y through G and H, distinguishing I from J.

虽然工整，但非常像模板生成。

正确做法是：

> **逻辑结构对称，表面句法适度变化。**

例如：

> A **strengthens** X through B and C, **distinguishing** D from E.  
> F **promotes** Y through G and H, **favoring** I while **curbing** J.

---

## 10.6 一句话塞入过多层级

一条方法句最好最多承担三层：

> 高层过程 → 中间能力 → 具体机制 / 直接效果

如果同时塞入：

> standpoint + framework + 3 modules + 2 outcomes + biological motivation

读者会失去主线。

---

## 10.7 结果句之后再写空泛宣传语

不推荐：

> laying a solid foundation for ...

> offering a promising solution ...

> demonstrating broad application potential ...

除非真的提供了新的 scientific conclusion，否则强数字本身就是最好的句号。

---

# 11. 一个可直接复用的英文摘要模板

下面这套模板可以作为以后方法型论文摘要的默认起点。真正需要重新思考的主要是方括号中的**名词和概念**，句法本身尽量少折腾。

```text
[S1] Achieving [PRIMARY OBJECTIVE] while preserving [SECONDARY OBJECTIVE] remains a central pursuit in [RESEARCH SETTING].

[S2] Existing [METHODS / FRAMEWORKS] typically [COMMON DESIGN / ASSESSMENT STRATEGY], yet such designs inherently favor [UNDESIRED BIAS].

[S3] This bias often incurs [FAILURE MODE A] and [FAILURE MODE B], ultimately reducing [FINAL OUTCOME A] and [FINAL OUTCOME B].

[S4] This work rethinks [PROBLEM] from a [NEW STANDPOINT] and introduces [FRAMEWORK NAME], which couples [HIGH-LEVEL PROCESS A] with [HIGH-LEVEL PROCESS B] to coordinate [DESIRED BEHAVIOR A] with [DESIRED BEHAVIOR B].

[S5] [PROCESS A] strengthens/enhances [INTERMEDIATE THEORETICAL CAPABILITY A] through [MECHANISM A1] and [MECHANISM A2], [DIRECT CONSEQUENCE A].

[S6] [PROCESS B] promotes/improves [INTERMEDIATE THEORETICAL CAPABILITY B] through [MECHANISM B1] and [MECHANISM B2], [DIRECT CONSEQUENCE B].

[S7] The framework reconciles the tension between [HIGH-LEVEL REQUIREMENT A] and [HIGH-LEVEL REQUIREMENT B] under [REALISTIC CONSTRAINT].

[S8] Extensive experiments on [TASK / BENCHMARK GROUP A] and [TASK / BENCHMARK GROUP B] show that [FRAMEWORK] achieves [OVERALL PERFORMANCE CLAIM], with [QUANTIFIED GAIN A] and [QUANTIFIED GAIN B] over [BASELINE CATEGORY].
```

---

# 12. 更适合“高水平方法论文”的增强版模板

如果论文需要比普通 CVPR 风格更强调理论抽象，例如 TPAMI / IJCV，可以使用下面的版本：

```text
Achieving [A] while preserving [B] remains a central pursuit in [field/task].
Existing frameworks typically [shared formulation], yet such designs inherently favor [shortcoming/bias].
This bias often incurs [failure A] and [failure B], ultimately compromising [final objectives].

This work rethinks [task] from a [conceptual standpoint] and introduces [Method], which couples [high-level process A] with [high-level process B] to coordinate [behavior A] with [behavior B].
[Process A] strengthens [theoretical capability A] through [mechanism A1] and [mechanism A2], [direct behavioral consequence].
[Process B] promotes [theoretical capability B] through [mechanism B1] and [mechanism B2], [direct behavioral consequence].
Together, these designs reconcile the tension between [requirement A] and [requirement B] under [constraint].

Extensive experiments across [tasks/benchmarks] demonstrate [performance claim], including [key numerical gains].
```

这类摘要的关键区别在于：**方法部分不是“模块列表”，而是“两条高层过程 + 两个中间理论能力”。**

---

<!-- # 13. ACE 当前版本可以抽象出的写法范例

当前 ACE 摘要体现的主干逻辑可以概括为：

```text
Goal:
    high task success + path efficiency

Existing design bias:
    temporally independent cue assessment
        ↓
    instantaneous / short-horizon judgment

Failure modes:
    premature commitment + redundant exploration

New standpoint:
    temporally evolving exploration

Framework:
    ACE
        ├── Perceptual Cue Maturation
        │       ↓
        │   Evidential Discrimination
        │       ↓
        │   better commitment
        │
        └── [Second high-level process]
                ↓
            [coverage-/space-use-related theoretical capability]
                ↓
            reduced redundant motion / better path efficiency

Higher-level significance:
    reconcile justified commitment with continued acquisition/search under finite budget

Evidence:
    EQA + single-/multi-goal navigation + quantified gains
```

这里最值得复用的不是 ACE 的具体术语，而是以下关系：

> **每条方法主线都必须找到一个“机制”和最终指标之间的中间理论层。**

这也是摘要从“工程描述”提升到“论文论证”的关键。

--- -->

# 13. 写完摘要后的快速自检清单

可以在最终定稿前逐项检查：

- [ ] S1 是否明确了论文最终追求的两个核心目标？
- [ ] S2 是否指出了现有方法的共同设计偏向，而不是简单说别人“忽略”了某件事？
- [ ] S3 是否给出了具体 failure mode，而不是泛泛说 performance degrades？
- [ ] S4 是否先提出新的 standpoint，再自然引出 framework？
- [ ] S4 的高层过程是否高于具体 module 一个层级？
- [ ] 每条方法主线是否都有一个清晰的“中间理论效果”？
- [ ] 这个理论效果是否真的能解释最终 metric 改善？
- [ ] S5/S6 是否逻辑对称但没有机械使用同一动词、同一句式？
- [ ] 是否存在相邻句重复 `selective / spatial / evidence / exploration / efficiency / potential` 等核心词根？
- [ ] 是否存在高层概念和子模块使用同一核心词的问题？
- [ ] 是否引入了方法没有真正建模的 `calibration / information gain / robustness / uncertainty`？
- [ ] S7 是否真正总结了一个 tension，而不是简单罗列优点？
- [ ] 实验句是否给出了最有代表性的任务和数字？
- [ ] 百分比提升是否正确区分 `%` 与 `percentage points`？
- [ ] 强实验数字之后是否还有一句没有新增信息的宣传性结尾？如有，优先删除。

---

# 14. 最后总结：以后写摘要时真正需要“想”的只有四类名词

如果前面的句式已经固定，以后写新论文摘要时，其实最需要重新推敲的只有四类内容：

1. **现有方法的共同设计偏向是什么？**
2. **本文提出的两条高层过程分别叫什么？**
3. **每条高层过程真正增强的“中间理论能力”是什么？**
4. **这两个中间能力共同解决了什么更高层 tension？**

其他部分——动词、句式、实验收尾——都可以高度复用。

可以把整个摘要写作过程压缩成一句公式：

> **Do not summarize modules; reconstruct the causal argument of the paper.**

即：

> **摘要不是“方法压缩”，而是“论文因果链的最短完整表达”。**
