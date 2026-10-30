window.RESUME_DATA = {
  profile: {
    name: "姜皓扬",
    age: 24,
    englishName: "Haoyang Jiang",
    role: "AI 算法实习生",
    location: "浙江 · 嘉兴",
    email: "jhy8636257@163.com",
    phone: "13941936257",
    school: "大连交通大学",
    major: "计算机科学与技术",
    degree: "硕士",
    enrollment: "2025.08 入学",
    expectedGraduation: "2028.05",
    undergraduate: {
      school: "渤海大学",
      major: "软件工程",
      period: "2020—2024 年"
    },
    summary: "围绕视频生成模型、世界模型、数字人以及目标检测开展学习与项目实践，也参与过游戏运维运营和软件开发，希望把模型能力带入真实业务场景。"
  },
  skills: [
    {
      icon: "layers",
      title: "世界模型",
      description: "围绕相机—手势联合控制，开展条件建模、因果适配与少步蒸馏，支持连续交互生成。",
      tags: ["LTX", "LoRA", "PRoPE", "Self-Forcing", "DMD"]
    },
    {
      icon: "sparkles",
      title: "生成式 AI",
      description: "参与视频与语音驱动数字人生成，实践 VAE 与 DiT 建模、参数体系适配和推理优化。",
      tags: ["VAE", "DiT", "FLAME", "LivePortrait", "TensorRT"]
    },
    {
      icon: "scan",
      title: "计算机视觉",
      description: "围绕目标检测、视频跟踪与场景几何标注开展实践，处理遮挡、目标关联与数据筛选。",
      tags: ["DiffuDETR", "RT-DETR", "YOLO", "ByteTrack", "VGGT"]
    },
    {
      icon: "bot",
      title: "多模态应用与 Agent",
      description: "使用 CLIP 开展图文对齐与零样本识别，实践 Skill 调用与智能体搭建。",
      tags: ["CLIP", "图文对齐", "零样本识别", "工具调用", "智能体搭建"]
    }
  ],
  certificates: [
    "英语六级",
    "全国计算机等级二级",
    "软考中级软件设计师",
    "普通话一级乙等"
  ],
  experiences: [
    {
      company: "巨人网络",
      shortName: "巨人网络",
      role: "AI 多模态算法实习生",
      period: "2026.07 — 2026.11",
      label: "WORLD MODEL / MULTIMODAL AI",
      summary: "交互式世界模型算法研究，围绕数据采集与标注、相机—手势联合控制、因果生成与蒸馏开展工作。",
      bullets: [
        "数据采集与验收：对接外包团队，制定交互式世界模型所需的数据采集要求，跟进交付并完成验收。",
        "数据标注与筛选：使用 ViPE、VGGT 完成相机标注，利用 MoGe2 估计深度，并通过重投影一致性筛选样本；使用 WiLoR、HandFlow 提取手部关键点并进行筛选。",
        "相机—手势联合控制：基于 LTX、MiniMax H3 等生成模型，引入相机 LoRA，通过 PRoPE 将相机内参和相对外参融入 DiT 自注意力，实现连续相机轨迹驱动的视角控制；新增手势 LoRA 与条件适配模块，融合骨架视频 VAE 特征和数值动作时序特征，实现与相机协同的连续手部动作控制。",
        "因果适配与蒸馏：冻结预训练主干与相机 LoRA，训练手势分支构建联合控制教师；通过教师强制因果适配与 Self-Forcing DMD 蒸馏，得到每块四步去噪的因果学生模型。"
      ],
      tags: ["交互式世界模型", "LoRA", "PRoPE", "Self-Forcing", "DMD"]
    },
    {
      company: "上海邻境网络有限公司",
      shortName: "邻境网络",
      role: "AI 算法实习生",
      period: "2026.01 — 2026.04",
      label: "AI / DIGITAL HUMAN",
      summary: "参与数字人虚拟直播底层算法升级，围绕视频驱动、语音驱动和业务场景优化模型。",
      bullets: [
        "参与 3DMM 至 FLAME 的框架与参数体系升级，优化已有功能并修复代码逻辑。",
        "结合虚拟直播业务需求，实践基于 wrap 的视频驱动换脸与基于 VAE + DiT 的语音驱动人物生成。",
        "根据业务场景开展模型优化、蒸馏和效果调优，使用 Codex、Claude Code 及 Skill 辅助开发。"
      ],
      tags: ["FLAME", "VAE + DiT", "数字人", "模型优化"]
    },
    {
      company: "网易（杭州）",
      badge: "本科",
      shortName: "网易",
      role: "游戏运维运营工程师",
      period: "2024.12 — 2025.09",
      label: "GAME / OPERATIONS",
      summary: "参与《我的世界》《蛋仔派对》游戏运维业务，结合运行监控、数据分析与用户流程处理问题。",
      bullets: [
        "跟进游戏日常运行问题，开展 Bug 监控、排查及数据流分析，参与制定与发布用户侧 SOP。",
        "通过游戏活动调整、回流体系完善和服务端调整，游戏 DAU 与付费提升超 5%，私域付费转化率提升 20%。",
        "与团队提前两个月完成组内年度目标。"
      ],
      tags: ["运行监控", "数据分析", "SOP", "游戏运营"]
    }
  ],
  projects: [
    {
      id: "toucheworld",
      number: "01",
      title: "TouchéWorld｜相机—手势联合控制的第一视角交互式世界模型",
      category: "交互式世界模型",
      summary: "基于 LTX-2.5／SolarWM 构建连续相机与手部动作联合控制的视频世界模型，支持从单张场景图出发，随用户控制更新进行分块在线生成，探索第一视角导航与手—物体交互。",
      stack: ["LTX-2.5", "SolarWM", "DiT", "PRoPE", "双分支 LoRA", "Self-Forcing", "DMD"],
      metric: {
        value: "+2.82 dB",
        label: "教师 PSNR · EgoStandard-200"
      },
      pipeline: ["场景图 / 文本初始化", "相机轨迹 / 手部动作", "双分支条件与 DiT", "块因果适配 / 四步蒸馏", "更新控制 / 连续生成"],
      detailsHeading: "主要工作",
      bullets: [
        "联合条件建模：复用 SolarWM 相机 LoRA 与 PRoPE 相机控制路径，将相机内参与相对外参融入视频自注意力；构建骨架视频 VAE 空间特征与数值手部动作时序特征双分支，在 DiT 输入融合，通过零初始化输出投影与手势 LoRA 实现参数高效后训练。",
        "数据流水线：构建包含 40,958 段第一视角视频的相机—手部联合监督数据，完成缺失标注补全、重投影一致性与多模型估计一致性筛选，统一视频、相机轨迹和手部动作的时间对齐及裁剪缩放坐标。",
        "因果化与蒸馏：完成“双向联合控制教师 → 块因果适配 → 四步因果学生”的训练流程，结合块内双向、块间因果注意力、手部条件时间可见范围约束与 Self-Forcing DMD，得到每视频块四步去噪、可持续接收更新控制的学生模型。",
        "评测与消融：构建 TouchéBench，从手部运动跟随、相机—手势协同、在线干预响应与物体响应四个维度开展评测，比较教师、块因果模型与四步学生，并分析手部区域加权监督对动作跟随和交互表现的影响。"
      ],
      resultHighlights: [
        { label: "双向教师 · EgoStandard-200", value: "19.18 dB PSNR", detail: "较相机单条件 SolarWM 提升 2.82 dB。" },
        { label: "双向教师 · EgoStandard-200", value: "0.345 LPIPS", detail: "相机单条件 SolarWM 为 0.494。" },
        { label: "双向教师 · HOI4D-200", value: "65.8% PCK@0.2", detail: "手部区域加权监督：58.7% → 65.8%，增加 7.1 个百分点。" }
      ],
      futureIntro: "围绕三维手部表示与手—物体交互，拟进一步验证以下方向。",
      futureDirections: [
        {
          title: "三维关节的局部条件注入",
          text: "分别编码各关节的三维位置、深度与关节身份，结合相机投影及裁剪缩放变换，对齐并注入对应的视频 latent 邻域。拟结合可见性与遮挡约束，验证对手指三维结构和局部运动跟随的作用。"
        },
        {
          title: "补充手臂运动条件",
          text: "在现有手部关键点与轨迹条件上，引入肘部、前臂方向和手腕运动，提供更完整的上肢运动上下文，探索手臂—手部姿态协同与运动连续性。"
        },
        {
          title: "引入交互物体轨迹",
          text: "当前主要直接注入手部关键点及轨迹，物体响应缺少显式控制。后续尝试加入交互物体的运动轨迹，研究手部动作与物体响应的一致性，以及接触与遮挡变化下的交互稳定性。"
        }
      ],
      futureEvaluation: "后续通过逐项消融，分别比较关节局部注入、手臂条件与物体轨迹条件，观察手部跟随、相机—手势协同、物体响应及新增训练与推理开销。"
    },
    {
      id: "digital-human",
      number: "02",
      title: "视频驱动与音频驱动的数字人生成系统",
      category: "生成式 AI",
      summary: "面向虚拟直播与人像动画，参与视频驱动和音频驱动数字人生成链路的适配与优化。基于 LivePortrait 进行人物运动迁移与画面重建，基于 SoulX-FlashHead 进行音频条件视频生成，并结合轻量化与推理部署优化降低运行开销。",
      stack: ["PyTorch", "LivePortrait", "Warping / SPADE", "SoulX-FlashHead", "VAE / DiT", "wav2vec2", "TensorRT", "量化 / 蒸馏 / 剪枝"],
      metric: {
        value: "约 4×",
        label: "整体推理提速"
      },
      pipelineGroups: [
        {
          title: "视频驱动 · LivePortrait",
          steps: ["源人像 / 驱动视频", "外观体特征 / 隐式关键点", "相对运动 / Dense Motion", "特征 Warping / SPADE", "裁剪贴回与视频输出"]
        },
        {
          title: "音频驱动 · SoulX-FlashHead",
          steps: ["参考图像 / 驱动语音", "VAE latent / wav2vec2", "音频对齐 / Cross Attention", "DiT flow 预测 / 分块采样", "VAE 解码 / 历史帧复用"]
        }
      ],
      bullets: [
        "视频驱动与运动迁移：基于 LivePortrait 提取源人像的外观体特征和隐式三维关键点，利用驱动视频的相对姿态、表情、尺度与位移变化构造目标运动，经 Dense Motion、特征 Warping 和 SPADE 解码重建人像帧。",
        "细节控制与画面合成：结合 Stitching、眼部与唇部 Retargeting 调整关键点偏移，衔接人脸裁剪、驱动跟踪和逆仿射贴回，在保留源人像外观的同时控制眼嘴动作与原画面衔接。",
        "音频条件生成：基于 SoulX-FlashHead，将参考图像编码为视频 VAE latent，利用 wav2vec2 提取并对齐音频特征，通过音频 Cross Attention 为 DiT 提供条件，预测视频 latent 的 flow，再经采样更新与 VAE 解码生成说话人像。",
        "跨块连续生成：复用参考图 latent、滑动音频上下文和上一块尾帧的历史 latent，在各采样步固定历史前缀，并通过重叠帧处理衔接新生成片段，支持分块连续输出。",
        "轻量化与推理部署：结合量化、模型蒸馏、剪枝和 TensorRT 推理加速降低运行开销，支持 RTX 3060 环境运行，整体推理速度提升约 4 倍。"
      ]
    },
    {
      id: "diffusion-detection",
      number: "03",
      title: "基于流匹配与频域细节增强的遥感目标检测",
      category: "目标检测",
      summary: "面向 DIOR-HBB 20 类遥感目标，在 DiffuDETR 流匹配框架中组合频域细节增强、渐进式分布细化与边界证据校准，输出目标类别和水平边界框。",
      stack: ["DiffuDETR", "Flow Matching", "Frequency Enhancement", "PDR", "Boundary Evidence", "DIOR-HBB"],
      metric: {
        value: "+0.72 AP",
        label: "三模块全开较基线（各组 AP 最佳轮）"
      },
      pipeline: ["DIOR-HBB 图像", "频域细节与前景引导", "PDR 流式框细化", "边界证据校准", "类别与水平框输出"],
      bullets: [
        "频域细节增强：对浅层特征进行多尺度平滑与细节分离，并结合前景监督自适应融合细节信息，再调制检测查询，帮助保留小目标纹理线索。",
        "渐进式分布细化（PDR）：在三步 Flow 更新中以递进权重融合粗细框端点，并利用边框分布细化四条边的位置，逐步更新候选框。",
        "边界证据校准：沿候选框边缘读取对应图像位置的视觉特征，结合内外区域对比预测边界修正量，并校准细化后候选框的质量分数。",
        "DIOR-HBB 验证结果：基线在 80k 的 AP 最佳轮为 AP 56.7543、APs 19.5236；三模块全开在 75k 的 AP 最佳轮为 AP 57.4733、APs 20.9296，分别提升 0.7190 和 1.4060 个百分点。"
      ]
    },
    {
      id: "fish-recognition",
      number: "04",
      title: "基于 YOLO + CLIP 的稀有鱼类视频识别",
      category: "多模态识别",
      summary: "面向水下视频中鱼类遮挡、复杂背景和稀有物种样本不足，构建 YOLO 检测、ByteTrack 跟踪与 CLIP 图文匹配的识别链路。结合目标级缓存、批量分类和跨帧投票，对同一鱼体轨迹复用类别结果，兼顾识别稳定性与计算开销。",
      stack: ["YOLO", "ByteTrack", "CLIP", "图文对齐", "目标级缓存", "批量推理", "多帧投票"],
      metric: {
        value: "5 张",
        label: "单轨迹缓存 / 聚合投票"
      },
      pipeline: ["YOLO 目标定位", "ByteTrack 轨迹关联", "5 张跨帧 ROI 缓存", "CLIP 批量图文匹配", "聚合投票 / 标签复用"],
      detailsHeading: "主要工作",
      bullets: [
        "检测与识别解耦：通过 YOLO 定位鱼类候选目标并裁剪局部 ROI，将鱼体定位与物种判别拆成独立环节，减少整帧复杂背景对后续语义匹配的干扰。",
        "图文语义对齐：利用 CLIP 编码局部鱼体图像与候选鱼种文本，计算余弦相似度，在预设物种集合中进行零样本匹配；通过维护候选文本库支持稀有类别的识别扩展。",
        "轨迹关联与时序缓存：通过 ByteTrack 维护目标轨迹 ID，将同一轨迹中的鱼体切片关联到目标级缓存，收集 5 张跨帧局部图像，以多帧信息缓解姿态变化、局部遮挡和水下噪声带来的单帧波动。",
        "批量分类与标签复用：缓存达到阈值后，批量送入 CLIP 进行匹配与多帧聚合投票，将类别结果绑定到对应轨迹；跟踪持续期间复用识别标签，减少对同一目标重复运行 CLIP 的开销。"
      ],
      futureIntro: "围绕类别缓存的误差传播、水下细粒度区分与候选库之外的识别边界，拟进一步验证以下方向。",
      futureDirections: [
        {
          title: "缓存更新与按需重识别",
          text: "拟结合轨迹中断、检测置信度变化与低频 CLIP 抽检，发现并更新不可靠的类别缓存，比较错误标签持续时间、识别稳定性与额外调用开销。"
        },
        {
          title: "候选库之外的拒识",
          text: "在候选物种文本匹配之外，尝试结合相似度阈值、候选分数间隔和跨帧一致性，输出“未知 / 待确认”状态，评估候选库外物种被强制归入已知类别的问题。"
        },
        {
          title: "水下域与小样本适配",
          text: "先比较鱼种名称与可见外观描述等文本提示，再评估冻结 CLIP 特征加轻量分类器、CLIP-Adapter 等小样本适配路线，分析细粒度区分、标注需求与部署成本。"
        }
      ],
      futureEvaluation: "后续通过消融比较单帧识别、多帧聚合、轨迹标签复用与按需重识别，统计轨迹级分类正确率、类别抖动、未知类误接受率、CLIP 调用次数及端到端时延。"
    }
  ],
  publications: [
    {
      id: "toucheworld",
      title: "TouchéWorld",
      subtitle: "相机—手势联合控制的第一视角交互式世界模型",
      venue: "CVPR 2027",
      status: "在投",
      authors: [],
      links: [{ label: "项目主页", url: "https://haoyangjang.github.io/toucheworld/" }],
      summary: "基于 LTX-2.5／SolarWM 视频生成模型，在同一 DiT 主干上构建相机 LoRA 与手势 LoRA 双分支适配框架。以初始场景图和文本初始化环境，通过连续相机轨迹与手部动作共同控制后续视频，形成“探索—交互—反馈”的在线生成流程。",
      tags: ["世界模型", "第一视角交互", "DiT", "双分支 LoRA", "Self-Forcing", "DMD 蒸馏"],
      highlights: [
        { value: "40,958", label: "联合训练视频", detail: "段第一视角视频" },
        { value: "19.18 dB", label: "双向教师 PSNR", detail: "EgoStandard-200" },
        { value: "4 步", label: "因果学生去噪", detail: "每视频块" }
      ],
      contributions: [
        {
          title: "相机控制分支",
          text: "复用 SolarWM 预训练相机 LoRA，通过 PRoPE 将相机内参和相对外参对应的几何关系融入视频自注意力，保留连续视角控制能力。在新增手势条件时冻结相机适配器，复用已有导航能力，降低联合控制训练的适配成本。"
        },
        {
          title: "手势控制分支",
          text: "新增手势 LoRA 及双路条件适配模块，将骨架视频经冻结 VAE 编码后的空间特征，与数值手部动作经线性层、残差时间卷积提取的运动特征共同融合至 DiT 输入。采用零初始化输出投影，使新增条件残差从零开始学习；结合归一化手部区域加权损失，增强局部手势监督，同时保留全画面生成目标。"
        },
        {
          title: "相机—手部联合监督数据",
          text: "构建包含 40,958 段第一视角视频的联合训练数据，完成缺失相机与手部标注补全，通过重投影一致性、轨迹质量及多模型估计一致性筛选样本。统一视频、相机轨迹和手部动作的时间对齐及裁剪缩放坐标，覆盖交互、手部入镜和静态场景。"
        },
        {
          title: "因果适配与少步蒸馏",
          text: "完成“双向联合控制教师 → 块因果模型 → 四步因果学生”的训练路线。通过块内双向、块间因果注意力，以及手部条件的时间可见范围约束，适配在线生成。结合 Self-Forcing 自生成历史训练与非对称 DMD 蒸馏，获得每视频块四步去噪、可持续接收更新控制的学生模型。"
        },
        {
          title: "TouchéBench 交互评测基准",
          text: "围绕手部运动跟随、相机—手势协同、在线干预响应、物体响应四个维度设计评测。结合轨迹对齐、共享上下文下的动作干预、物体区域与位移分析，区分“手部姿态跟随正确”和“物体实际产生预期响应”，补充单纯视频画质指标。"
        }
      ],
      trainingRoute: ["双向联合控制教师", "块因果模型", "四步因果学生"],
      results: [
        { model: "双向联合控制教师", dataset: "EgoStandard-200", metric: "PSNR", value: "19.18 dB", comparison: "较相机单条件 SolarWM +2.82 dB" },
        { model: "双向联合控制教师", dataset: "EgoStandard-200", metric: "LPIPS", value: "0.345", comparison: "相机单条件 SolarWM：0.494" },
        { model: "双向联合控制教师", dataset: "HOI4D-200", metric: "PCK@0.2", value: "65.8%", comparison: "手部区域加权监督：58.7% → 65.8%，增加 7.1 个百分点" },
        { model: "四步因果学生", dataset: "EgoStandard-200", metric: "PSNR", value: "18.38 dB", comparison: "每视频块四步去噪" }
      ]
    },
    {
      id: "freqflow-detr",
      title: "FreqFlow-DETR",
      subtitle: "融合频域细节增强与边界证据的渐进式流匹配遥感目标检测",
      venue: "CCF C",
      status: "在投",
      authors: [],
      links: [],
      summary: "以 DiffuDETR 为基础，引入流匹配定位过程，面向遥感图像中小目标细节弱、背景纹理复杂和边界难辨的问题，构建频域细节增强、渐进式分布细化（PDR）与边界证据对齐三个模块。模型结合图像特征，通过三步 Flow 更新逐步细化候选框，输出目标类别、水平边界框与置信分数，在 DIOR-HBB 20 类目标检测任务上完成实验验证。",
      tags: ["遥感目标检测", "Flow Matching", "频域细节增强", "PDR", "边界证据对齐", "DIOR-HBB"],
      highlights: [
        { value: "57.47 AP", label: "三模块全开", detail: "DIOR-HBB 验证集" },
        { value: "20.93 APs", label: "小目标检测表现", detail: "与 AP 最佳轮对应" },
        { value: "3 步", label: "Flow 定位更新", detail: "渐进式候选框细化" }
      ],
      contributions: [
        {
          title: "频域细节增强与前景引导",
          text: "对浅层图像特征进行多尺度平滑与细节分离，通过自适应权重选择平滑分量，并结合前景监督突出目标区域。将细节特征融入检测特征与查询调制过程，为小目标识别和定位提供更充分的局部纹理信息。"
        },
        {
          title: "渐进式分布细化（PDR）",
          text: "在三步流匹配定位过程中，将候选框四条边的位置表示为离散概率分布，通过分布细化得到更精细的边界预测。随 Flow 步骤推进，逐步提高细化端点的融合权重，使修正后的框继续参与后续状态更新，连接每一步的粗定位与精细定位。"
        },
        {
          title: "边界证据对齐与质量校准",
          text: "围绕四条边的候选位置采样对应图像特征，将视觉证据与边界分布的候选位置对齐。结合查询语义、框内外区域对比和几何信息，预测边界分布的修正量，并校准细化框的置信分数，使候选框排序同时参考分类与定位质量。"
        },
        {
          title: "数据与实验设置",
          text: "使用 DIOR-HBB 的 20 类水平框标注，包含 11,725 张训练图像和 11,738 张验证图像。基线与全开模型采用共同初始化及多尺度训练增强，以固定 1200 尺寸设置进行 EMA 验证；每 5,000 步记录 AP 并保存 checkpoint，保留各轮指标与实验配置。"
        }
      ],
      trainingRoute: ["共同初始化", "DIOR-HBB 整模训练", "每 5,000 步 EMA 验证", "按 AP 选择最佳权重"],
      detailsLabel: "研究方法与实验结果",
      resultsCaption: "FreqFlow-DETR：DIOR-HBB 基线与三模块全开对比",
      resultsNote: "表中取各组 AP 最佳 checkpoint：基线为 80k，全开为 75k；APs 取自同一 checkpoint。两组均使用多尺度训练增强，验证时不使用多尺度 TTA。当前为单次 seed 实验，结果不代表同轮次或多 seed 统计比较。",
      results: [
        { model: "Baseline（80k）", dataset: "DIOR-HBB", metric: "AP", value: "56.7543", comparison: "原始三步 DDIM 基线" },
        { model: "Baseline（80k）", dataset: "DIOR-HBB", metric: "APs", value: "19.5236", comparison: "基线 AP 最佳轮的小目标结果" },
        { model: "三模块全开（75k）", dataset: "DIOR-HBB", metric: "AP", value: "57.4733", comparison: "较基线 +0.7190 AP 点" },
        { model: "三模块全开（75k）", dataset: "DIOR-HBB", metric: "APs", value: "20.9296", comparison: "较基线 +1.4060 APs 点" }
      ]
    }
  ]
};
