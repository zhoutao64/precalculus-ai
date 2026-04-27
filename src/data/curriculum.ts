import type { Chapter, Unit } from "@/types/curriculum";

const chapter1Units: Unit[] = [
  {
    id: "1-1",
    chapterId: "ch-1",
    number: "1.1",
    title: {
      en: "Rectangular Coordinates",
      zh: "直角坐标系",
    },
    description: {
      en: "Plot points in the Cartesian plane and use the Distance and Midpoint Formulas.",
      zh: "在笛卡尔平面上标记点，并运用两点间距离公式与中点公式。",
    },
  },
  {
    id: "1-2",
    chapterId: "ch-1",
    number: "1.2",
    title: {
      en: "Graphs of Equations",
      zh: "方程的图像",
    },
    description: {
      en: "Sketch graphs of equations, find intercepts, and identify symmetry.",
      zh: "绘制方程的图像，求截距，并识别图像的对称性。",
    },
  },
  {
    id: "1-3",
    chapterId: "ch-1",
    number: "1.3",
    title: {
      en: "Linear Equations in Two Variables",
      zh: "二元一次方程",
    },
    description: {
      en: "Use slope to graph linear equations, write equations of lines, and model real-world situations.",
      zh: "利用斜率绘制一次方程图像，写出直线方程，并建立实际情境的模型。",
    },
  },
  {
    id: "1-4",
    chapterId: "ch-1",
    number: "1.4",
    title: {
      en: "Functions",
      zh: "函数",
    },
    description: {
      en: "Determine whether a relation is a function, evaluate functions, and find domains.",
      zh: "判断关系是否为函数，求函数值，并确定函数的定义域。",
    },
  },
  {
    id: "1-5",
    chapterId: "ch-1",
    number: "1.5",
    title: {
      en: "Analyzing Graphs of Functions",
      zh: "函数图像分析",
    },
    description: {
      en: "Use graphs to find domain, range, intervals of increase/decrease, and relative extrema.",
      zh: "通过图像求函数的定义域、值域、单调区间以及相对极值。",
    },
  },
  {
    id: "1-6",
    chapterId: "ch-1",
    number: "1.6",
    title: {
      en: "A Library of Parent Functions",
      zh: "基本函数库",
    },
    description: {
      en: "Identify and graph linear, squaring, cubic, square root, reciprocal, step, and absolute value functions.",
      zh: "识别并绘制线性、平方、立方、平方根、倒数、阶梯及绝对值等基本函数。",
    },
  },
  {
    id: "1-7",
    chapterId: "ch-1",
    number: "1.7",
    title: {
      en: "Transformations of Functions",
      zh: "函数的变换",
    },
    description: {
      en: "Use vertical and horizontal shifts, reflections, and stretches to graph transformed functions.",
      zh: "利用平移、反射与伸缩变换绘制变换后的函数图像。",
    },
  },
  {
    id: "1-8",
    chapterId: "ch-1",
    number: "1.8",
    title: {
      en: "Combinations of Functions: Composite Functions",
      zh: "函数的组合：复合函数",
    },
    description: {
      en: "Add, subtract, multiply, divide, and compose functions, and find their domains.",
      zh: "对函数进行加减乘除与复合运算，并求其定义域。",
    },
  },
];

const chapter2Units: Unit[] = [
  {
    id: "2-1",
    chapterId: "ch-2",
    number: "2.1",
    title: {
      en: "Quadratic Functions and Models",
      zh: "二次函数与模型",
    },
    description: {
      en: "Analyze quadratic functions in standard and vertex form and apply them to model real situations.",
      zh: "分析标准形式与顶点形式的二次函数，并将其应用于实际情境的建模。",
    },
  },
  {
    id: "2-2",
    chapterId: "ch-2",
    number: "2.2",
    title: {
      en: "Polynomial Functions of Higher Degree",
      zh: "高次多项式函数",
    },
    description: {
      en: "Use the Leading Coefficient Test, find zeros and multiplicities, and sketch graphs of polynomials.",
      zh: "运用首项系数判别法，求零点及其重数，并绘制多项式函数的图像。",
    },
  },
  {
    id: "2-3",
    chapterId: "ch-2",
    number: "2.3",
    title: {
      en: "Polynomial and Synthetic Division",
      zh: "多项式除法与综合除法",
    },
    description: {
      en: "Divide polynomials using long division and synthetic division, and apply the Remainder and Factor Theorems.",
      zh: "用长除法与综合除法对多项式做除法，并应用余数定理与因式定理。",
    },
  },
  {
    id: "2-4",
    chapterId: "ch-2",
    number: "2.4",
    title: {
      en: "Complex Numbers",
      zh: "复数",
    },
    description: {
      en: "Perform operations with complex numbers and represent them in the complex plane.",
      zh: "对复数进行运算，并在复平面上表示复数。",
    },
  },
  {
    id: "2-5",
    chapterId: "ch-2",
    number: "2.5",
    title: {
      en: "Zeros of Polynomial Functions",
      zh: "多项式函数的零点",
    },
    description: {
      en: "Use the Fundamental Theorem of Algebra, the Rational Zero Test, and Descartes's Rule of Signs to find zeros.",
      zh: "运用代数基本定理、有理零点检验法及笛卡尔符号法则求多项式的零点。",
    },
  },
  {
    id: "2-6",
    chapterId: "ch-2",
    number: "2.6",
    title: {
      en: "Rational Functions",
      zh: "有理函数",
    },
    description: {
      en: "Find domains, asymptotes, and intercepts of rational functions, and sketch their graphs.",
      zh: "求有理函数的定义域、渐近线与截距，并绘制其图像。",
    },
  },
  {
    id: "2-7",
    chapterId: "ch-2",
    number: "2.7",
    title: {
      en: "Nonlinear Inequalities",
      zh: "非线性不等式",
    },
    description: {
      en: "Solve polynomial and rational inequalities and represent solution sets on a number line.",
      zh: "求解多项式与有理不等式，并在数轴上表示解集。",
    },
  },
];

const chapter3Units: Unit[] = [
  {
    id: "3-1",
    chapterId: "ch-3",
    number: "3.1",
    title: {
      en: "Exponential Functions and Their Graphs",
      zh: "指数函数及其图像",
    },
    description: {
      en: "Recognize, evaluate, and graph exponential functions, including the natural exponential function.",
      zh: "识别、求值并绘制指数函数（含自然指数函数）的图像。",
    },
  },
  {
    id: "3-2",
    chapterId: "ch-3",
    number: "3.2",
    title: {
      en: "Logarithmic Functions and Their Graphs",
      zh: "对数函数及其图像",
    },
    description: {
      en: "Convert between exponential and logarithmic form, and graph logarithmic functions.",
      zh: "在指数式与对数式之间互化，并绘制对数函数的图像。",
    },
  },
  {
    id: "3-3",
    chapterId: "ch-3",
    number: "3.3",
    title: {
      en: "Properties of Logarithms",
      zh: "对数的性质",
    },
    description: {
      en: "Use the change-of-base formula and properties of logarithms to expand and condense expressions.",
      zh: "运用换底公式与对数运算性质，对对数表达式进行展开与合并。",
    },
  },
  {
    id: "3-4",
    chapterId: "ch-3",
    number: "3.4",
    title: {
      en: "Exponential and Logarithmic Equations",
      zh: "指数与对数方程",
    },
    description: {
      en: "Solve equations involving exponential and logarithmic expressions algebraically.",
      zh: "用代数方法求解包含指数和对数表达式的方程。",
    },
  },
  {
    id: "3-5",
    chapterId: "ch-3",
    number: "3.5",
    title: {
      en: "Exponential and Logarithmic Models",
      zh: "指数与对数模型",
    },
    description: {
      en: "Apply exponential growth and decay, Gaussian, logistic growth, and logarithmic models to real data.",
      zh: "运用指数增长与衰减、高斯、逻辑斯蒂增长及对数模型分析实际数据。",
    },
  },
];

const chapter4Units: Unit[] = [
  {
    id: "4-1",
    chapterId: "ch-4",
    number: "4.1",
    title: {
      en: "Radian and Degree Measure",
      zh: "弧度与角度",
    },
    description: {
      en: "Convert between radian and degree measure, and find arc length, sector area, and angular speed.",
      zh: "在弧度与角度之间互化，并求弧长、扇形面积与角速度。",
    },
  },
  {
    id: "4-2",
    chapterId: "ch-4",
    number: "4.2",
    title: {
      en: "Trigonometric Functions: The Unit Circle",
      zh: "三角函数：单位圆",
    },
    description: {
      en: "Define the six trigonometric functions using the unit circle and use periodicity to evaluate them.",
      zh: "用单位圆定义六个三角函数，并利用周期性求值。",
    },
  },
  {
    id: "4-3",
    chapterId: "ch-4",
    number: "4.3",
    title: {
      en: "Right Triangle Trigonometry",
      zh: "直角三角形三角学",
    },
    description: {
      en: "Evaluate trigonometric functions of acute angles and use them to solve right triangles.",
      zh: "求锐角的三角函数值，并用其求解直角三角形。",
    },
  },
  {
    id: "4-4",
    chapterId: "ch-4",
    number: "4.4",
    title: {
      en: "Trigonometric Functions of Any Angle",
      zh: "任意角的三角函数",
    },
    description: {
      en: "Evaluate trigonometric functions of any angle using reference angles and signs in each quadrant.",
      zh: "利用参考角及各象限的符号求任意角的三角函数值。",
    },
  },
  {
    id: "4-5",
    chapterId: "ch-4",
    number: "4.5",
    title: {
      en: "Graphs of Sine and Cosine Functions",
      zh: "正弦和余弦函数图像",
    },
    description: {
      en: "Sketch sine and cosine graphs, identifying amplitude, period, and phase shift.",
      zh: "绘制正弦与余弦函数图像，识别振幅、周期与相位移。",
    },
  },
  {
    id: "4-6",
    chapterId: "ch-4",
    number: "4.6",
    title: {
      en: "Graphs of Other Trigonometric Functions",
      zh: "其他三角函数的图像",
    },
    description: {
      en: "Sketch graphs of tangent, cotangent, secant, and cosecant functions and identify their asymptotes.",
      zh: "绘制正切、余切、正割与余割函数的图像，并识别其渐近线。",
    },
  },
  {
    id: "4-7",
    chapterId: "ch-4",
    number: "4.7",
    title: {
      en: "Inverse Trigonometric Functions",
      zh: "反三角函数",
    },
    description: {
      en: "Evaluate and graph inverse trigonometric functions, and use them in compositions with trig functions.",
      zh: "求反三角函数的值并绘制其图像，并将其与三角函数复合运算。",
    },
  },
  {
    id: "4-8",
    chapterId: "ch-4",
    number: "4.8",
    title: {
      en: "Applications and Models",
      zh: "应用与模型",
    },
    description: {
      en: "Solve real-world problems involving right triangles, bearings, and simple harmonic motion.",
      zh: "解决涉及直角三角形、方位角及简谐运动的实际问题。",
    },
  },
];

const chapter5Units: Unit[] = [
  {
    id: "5-1",
    chapterId: "ch-5",
    number: "5.1",
    title: {
      en: "Using Fundamental Identities",
      zh: "基本恒等式的运用",
    },
    description: {
      en: "Use reciprocal, quotient, Pythagorean, and cofunction identities to simplify trigonometric expressions.",
      zh: "运用倒数、商、毕达哥拉斯及余函数恒等式简化三角表达式。",
    },
  },
  {
    id: "5-2",
    chapterId: "ch-5",
    number: "5.2",
    title: {
      en: "Verifying Trigonometric Identities",
      zh: "三角恒等式的证明",
    },
    description: {
      en: "Verify trigonometric identities by transforming one side of the equation into the other.",
      zh: "通过将等式一边变形为另一边来证明三角恒等式。",
    },
  },
  {
    id: "5-3",
    chapterId: "ch-5",
    number: "5.3",
    title: {
      en: "Solving Trigonometric Equations",
      zh: "求解三角方程",
    },
    description: {
      en: "Solve trigonometric equations by factoring, using identities, and applying inverse functions.",
      zh: "通过因式分解、使用恒等式以及反函数法求解三角方程。",
    },
  },
  {
    id: "5-4",
    chapterId: "ch-5",
    number: "5.4",
    title: {
      en: "Sum and Difference Formulas",
      zh: "和差公式",
    },
    description: {
      en: "Use sum and difference formulas to evaluate, simplify, and rewrite trigonometric expressions.",
      zh: "运用和差公式对三角表达式进行求值、化简与变形。",
    },
  },
  {
    id: "5-5",
    chapterId: "ch-5",
    number: "5.5",
    title: {
      en: "Multiple-Angle and Product-to-Sum Formulas",
      zh: "倍角与积化和差公式",
    },
    description: {
      en: "Apply double-angle, half-angle, power-reducing, and product-to-sum formulas.",
      zh: "应用倍角、半角、降幂以及积化和差公式。",
    },
  },
];

const chapter6Units: Unit[] = [
  {
    id: "6-1",
    chapterId: "ch-6",
    number: "6.1",
    title: { en: "Law of Sines", zh: "正弦定理" },
    description: {
      en: "Use the Law of Sines to solve oblique triangles (AAS, ASA, SSA) and find their areas.",
      zh: "运用正弦定理求解斜三角形（AAS、ASA、SSA），并计算其面积。",
    },
    learningGoals: [
      { en: "Understand and apply the Law of Sines to solve oblique triangles", zh: "理解并应用正弦定理求解斜三角形" },
      { en: "Identify and solve the ambiguous case (SSA)", zh: "识别并求解模糊情形（SSA）" },
      { en: "Calculate the area of a triangle using two sides and the included angle", zh: "利用两边及其夹角计算三角形面积" },
      { en: "Determine when a triangle has zero, one, or two solutions", zh: "判断三角形有零个、一个还是两个解" },
    ],
    keyConcepts: [
      {
        id: "kc-6-1-1",
        title: { en: "Law of Sines", zh: "正弦定理" },
        explanation: {
          en: "For any triangle with sides a, b, c opposite to angles A, B, C: a/sin(A) = b/sin(B) = c/sin(C). This ratio is constant for a given triangle.",
          zh: "对于任意三角形，边 a、b、c 分别对应角 A、B、C：a/sin(A) = b/sin(B) = c/sin(C)。该比值在给定三角形中为常数。",
        },
        whenToUse: { en: "When you know AAS or ASA configurations", zh: "当已知 AAS 或 ASA 构型时" },
        commonMistake: { en: "Using degrees in calculator set to radians mode, or forgetting angles sum to 180°", zh: "计算器设为弧度模式却输入角度值，或忘记三角形内角和为 180°" },
        example: { en: "Given A=40°, B=60°, a=10: C=80°, b=10·sin(60°)/sin(40°)≈13.47", zh: "已知 A=40°、B=60°、a=10：C=80°，b=10·sin(60°)/sin(40°)≈13.47" },
      },
      {
        id: "kc-6-1-2",
        title: { en: "The Ambiguous Case (SSA)", zh: "模糊情形（SSA）" },
        explanation: {
          en: "When given two sides and an angle opposite one of them (SSA), the triangle may have 0, 1, or 2 solutions. Compare the given side with h = b·sin(A).",
          zh: "当已知两边及其中一边的对角（SSA）时，三角形可能有 0、1 或 2 个解。将已知角的对边与高 h = b·sin(A) 比较。",
        },
        whenToUse: { en: "Whenever you have SSA — always check for ambiguity first", zh: "遇到 SSA 构型时——求解前必须先检查模糊情形" },
        commonMistake: { en: "Assuming SSA always gives one answer; forgetting to check supplement angle", zh: "认为 SSA 总是只有一个解；忘记检查补角" },
        example: { en: "a=10, b=15, A=30°: sin(B)=0.75, B≈48.6° or B≈131.4°. Two valid triangles.", zh: "a=10、b=15、A=30°：sin(B)=0.75，B≈48.6° 或 B≈131.4°，两个有效三角形。" },
      },
      {
        id: "kc-6-1-3",
        title: { en: "AAS vs ASA", zh: "AAS 与 ASA 的区别" },
        explanation: {
          en: "AAS: two angles and a non-included side. ASA: two angles and the included side. Both always produce exactly one triangle.",
          zh: "AAS：两角及其非夹边。ASA：两角及其夹边。两者都恰好确定一个三角形。",
        },
        whenToUse: { en: "When you know two angles — find the third, then apply Law of Sines", zh: "当已知两个角时——先求第三个角，再应用正弦定理" },
        commonMistake: { en: "Confusing included vs non-included side, though solving process is the same", zh: "混淆夹边与非夹边，虽然求解过程相同" },
        example: { en: "ASA: A=50°, c=12, B=70°. C=60°. a=12·sin(50°)/sin(60°)≈10.61", zh: "ASA：A=50°、c=12、B=70°。C=60°，a=12·sin(50°)/sin(60°)≈10.61" },
      },
    ],
    formulas: [
      {
        id: "f-6-1-1",
        name: { en: "Law of Sines", zh: "正弦定理" },
        formula: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}",
        variables: [
          { en: "a, b, c = sides of the triangle", zh: "a、b、c = 三角形的三条边" },
          { en: "A, B, C = angles opposite to sides a, b, c", zh: "A、B、C = 分别与边 a、b、c 相对的角" },
        ],
        whenToUse: { en: "AAS, ASA, or SSA configurations", zh: "AAS、ASA 或 SSA 构型" },
        commonProblemTypes: [
          { en: "Find unknown side given two angles and one side", zh: "已知两角一边求未知边" },
          { en: "Find unknown angle given two sides and an angle", zh: "已知两边一角求未知角" },
        ],
        example: { en: "A=45°, B=75°, a=8: b=8·sin(75°)/sin(45°)≈10.93", zh: "A=45°、B=75°、a=8：b=8·sin(75°)/sin(45°)≈10.93" },
      },
      {
        id: "f-6-1-2",
        name: { en: "Triangle Area (Sine Formula)", zh: "三角形面积（正弦公式）" },
        formula: "\\text{Area} = \\frac{1}{2} ab \\sin C",
        variables: [
          { en: "a, b = two sides of the triangle", zh: "a、b = 三角形的两条边" },
          { en: "C = included angle between a and b", zh: "C = 边 a 与边 b 的夹角" },
        ],
        whenToUse: { en: "When you know two sides and the included angle", zh: "当已知两边及其夹角时" },
        commonProblemTypes: [
          { en: "Calculate triangle area from SAS", zh: "根据 SAS 计算三角形面积" },
        ],
        example: { en: "a=7, b=10, C=60°: Area=(1/2)(7)(10)sin(60°)≈30.31", zh: "a=7、b=10、C=60°：面积=(1/2)(7)(10)sin(60°)≈30.31" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-6-1-1",
        title: { en: "Solve Triangle — AAS", zh: "解三角形 — AAS" },
        description: { en: "Given two angles and a non-included side, find all remaining parts.", zh: "已知两角及非夹边，求所有未知量。" },
        howToRecognize: { en: "Two angles and a side not between them are given.", zh: "给出两个角和一条非夹边。" },
        steps: [
          { en: "Find the third angle: $C = 180° - A - B$", zh: "求第三个角：$C = 180° - A - B$" },
          { en: "Use $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ to find the second side", zh: "用 $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ 求第二条边" },
          { en: "Use Law of Sines again for the third side", zh: "再次用正弦定理求第三条边" },
          { en: "Verify: all angles sum to $180°$", zh: "验证：三角之和为 $180°$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "In $\\triangle ABC$, $A=35°$, $B=65°$, $a=12$. Find $b$, $c$, and $C$.", zh: "在 $\\triangle ABC$ 中，$A=35°$、$B=65°$、$a=12$，求 $b$、$c$ 和 $C$。" },
        commonTraps: [
          { en: "Calculator in wrong mode (radians vs degrees)", zh: "计算器模式错误（弧度 vs 角度）" },
          { en: "Rounding intermediate values too early", zh: "过早对中间值四舍五入" },
        ],
      },
      {
        id: "pt-6-1-2",
        title: { en: "Solve Triangle — ASA", zh: "解三角形 — ASA" },
        description: { en: "Given two angles and the included side, find all remaining parts.", zh: "已知两角及夹边，求所有未知量。" },
        howToRecognize: { en: "Two angles and the side between them are given.", zh: "给出两个角和它们之间的边。" },
        steps: [
          { en: "Find the third angle: $C = 180° - A - B$", zh: "求第三个角：$C = 180° - A - B$" },
          { en: "Use Law of Sines to find the second side", zh: "用正弦定理求第二条边" },
          { en: "Use Law of Sines again for the third side", zh: "再次用正弦定理求第三条边" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "In $\\triangle ABC$, $A=50°$, $B=70°$, $c=12$. Find $a$, $b$, and $C$.", zh: "在 $\\triangle ABC$ 中，$A=50°$、$B=70°$、$c=12$，求 $a$、$b$ 和 $C$。" },
        commonTraps: [
          { en: "Misidentifying which side is included between the two angles", zh: "误判哪条边是两角的夹边" },
        ],
      },
      {
        id: "pt-6-1-3",
        title: { en: "Find a Missing Side", zh: "求未知边" },
        description: { en: "Use Law of Sines to find one unknown side directly.", zh: "直接用正弦定理求一条未知边。" },
        howToRecognize: { en: "Two angles and one side are known; problem asks for a specific missing side only.", zh: "已知两角一边，只需求某一条未知边。" },
        steps: [
          { en: "If needed, find the missing angle first", zh: "如需要，先求缺失的角" },
          { en: "Set up: $\\frac{a}{\\sin A} = \\frac{x}{\\sin X}$", zh: "建立等式：$\\frac{a}{\\sin A} = \\frac{x}{\\sin X}$" },
          { en: "Solve for $x$", zh: "求解 $x$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "In $\\triangle ABC$, $A=40°$, $B=60°$, $a=10$. Find $b$.", zh: "在 $\\triangle ABC$ 中，$A=40°$、$B=60°$、$a=10$，求 $b$。" },
        commonTraps: [
          { en: "Pairing a side with the wrong opposite angle", zh: "将边与错误的对角配对" },
        ],
      },
      {
        id: "pt-6-1-4",
        title: { en: "Find Triangle Area (SAS)", zh: "求三角形面积（SAS）" },
        description: { en: "Calculate area using two sides and the included angle.", zh: "利用两边及夹角计算面积。" },
        howToRecognize: { en: "Problem asks for area; two sides and the included angle are known.", zh: "题目求面积，且已知两边及夹角。" },
        steps: [
          { en: "Identify two sides $a$, $b$ and the included angle $C$", zh: "确定两条边 $a$、$b$ 和夹角 $C$" },
          { en: "Apply $\\text{Area} = \\frac{1}{2}ab\\sin C$", zh: "应用 $\\text{Area} = \\frac{1}{2}ab\\sin C$" },
          { en: "Compute and include units", zh: "计算并标注单位" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the area of $\\triangle ABC$ where $a=9$, $b=14$, $C=50°$.", zh: "求 $\\triangle ABC$ 面积，$a=9$、$b=14$、$C=50°$。" },
        commonTraps: [
          { en: "Using the wrong angle — must be BETWEEN the two given sides", zh: "用错角——必须是两边的夹角" },
          { en: "Forgetting the $\\frac{1}{2}$ factor", zh: "忘记 $\\frac{1}{2}$ 系数" },
        ],
      },
      // ── Medium (11) ───────────────────────────────────────
      {
        id: "pt-6-1-5",
        title: { en: "Find a Missing Angle", zh: "求未知角" },
        description: { en: "Use Law of Sines to find an unknown angle given two sides and one angle.", zh: "已知两边一角，用正弦定理求未知角。" },
        howToRecognize: { en: "Two sides and one opposite angle are given; problem asks for an angle (non-ambiguous context).", zh: "已知两边及一个对角，求另一个角（非模糊情形）。" },
        steps: [
          { en: "Set up $\\frac{\\sin B}{b} = \\frac{\\sin A}{a}$", zh: "建立等式 $\\frac{\\sin B}{b} = \\frac{\\sin A}{a}$" },
          { en: "Solve for $\\sin B$", zh: "求解 $\\sin B$" },
          { en: "Use $B = \\arcsin(\\text{value})$", zh: "用 $B = \\arcsin(\\text{值})$" },
          { en: "Verify the result makes geometric sense", zh: "验证结果的几何合理性" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "In $\\triangle ABC$, $a=15$, $b=10$, $A=60°$. Find angle $B$.", zh: "在 $\\triangle ABC$ 中，$a=15$、$b=10$、$A=60°$，求角 $B$。" },
        commonTraps: [
          { en: "Forgetting that $\\arcsin$ only returns acute angles", zh: "忘记 $\\arcsin$ 只返回锐角" },
        ],
      },
      {
        id: "pt-6-1-6",
        title: { en: "SSA — One Solution Case", zh: "SSA — 一解情形" },
        description: { en: "SSA configuration that yields exactly one valid triangle.", zh: "SSA 构型恰好产生一个有效三角形。" },
        howToRecognize: { en: "Two sides and a non-included angle; the given side opposite the angle is longer than or equal to the other side.", zh: "两边及非夹角；角的对边大于或等于另一条边。" },
        steps: [
          { en: "Use Law of Sines to find $\\sin B$", zh: "用正弦定理求 $\\sin B$" },
          { en: "Compute $B = \\arcsin(\\text{value})$", zh: "计算 $B = \\arcsin(\\text{值})$" },
          { en: "Check supplement $B' = 180° - B$; verify $A + B' < 180°$ or not", zh: "检查补角 $B' = 180° - B$；验证 $A + B'$ 是否小于 $180°$" },
          { en: "Only one valid $B$ remains — solve the triangle", zh: "只有一个有效的 $B$——完整求解三角形" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "In $\\triangle ABC$, $a=20$, $b=15$, $A=40°$. Solve the triangle.", zh: "在 $\\triangle ABC$ 中，$a=20$、$b=15$、$A=40°$，解此三角形。" },
        commonTraps: [
          { en: "Not checking the supplement — you must always verify both candidates", zh: "未检查补角——必须始终验证两个候选值" },
        ],
      },
      {
        id: "pt-6-1-7",
        title: { en: "SSA — Two Solutions Case", zh: "SSA — 两解情形" },
        description: { en: "SSA configuration that yields two distinct valid triangles.", zh: "SSA 构型产生两个不同的有效三角形。" },
        howToRecognize: { en: "Two sides and a non-included acute angle; the side opposite the angle is shorter than the other side but longer than the height.", zh: "两边及非夹锐角；角的对边比另一边短，但比高长。" },
        steps: [
          { en: "Compute height $h = b \\sin A$; confirm $h < a < b$", zh: "计算高 $h = b \\sin A$；确认 $h < a < b$" },
          { en: "Find $\\sin B$ via Law of Sines", zh: "用正弦定理求 $\\sin B$" },
          { en: "Get $B_1 = \\arcsin(\\text{value})$ and $B_2 = 180° - B_1$", zh: "得 $B_1 = \\arcsin(\\text{值})$ 和 $B_2 = 180° - B_1$" },
          { en: "Verify both $A + B_1 < 180°$ and $A + B_2 < 180°$", zh: "验证 $A + B_1 < 180°$ 和 $A + B_2 < 180°$" },
          { en: "Solve both triangles completely", zh: "完整求解两个三角形" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "In $\\triangle ABC$, $a=10$, $b=15$, $A=30°$. Find both possible triangles.", zh: "在 $\\triangle ABC$ 中，$a=10$、$b=15$、$A=30°$，求两个可能的三角形。" },
        commonTraps: [
          { en: "Stopping after finding one solution", zh: "找到一个解后就停止" },
          { en: "Mixing up which values belong to which triangle", zh: "混淆两个三角形各自的数值" },
        ],
      },
      {
        id: "pt-6-1-8",
        title: { en: "SSA — No Solution Case", zh: "SSA — 无解情形" },
        description: { en: "SSA configuration where no valid triangle exists.", zh: "SSA 构型下不存在有效三角形。" },
        howToRecognize: { en: "Two sides and a non-included angle; $\\sin B > 1$ or the side opposite the angle is shorter than the height.", zh: "两边及非夹角；$\\sin B > 1$ 或角的对边比高短。" },
        steps: [
          { en: "Compute $h = b \\sin A$", zh: "计算 $h = b \\sin A$" },
          { en: "Compare: if $a < h$, no triangle exists", zh: "比较：若 $a < h$，则无三角形" },
          { en: "Alternatively, find $\\sin B > 1$ → no solution", zh: "或直接求得 $\\sin B > 1$ → 无解" },
          { en: "State the conclusion clearly", zh: "清楚地陈述结论" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "In $\\triangle ABC$, $a=3$, $b=10$, $A=50°$. Show that no triangle exists.", zh: "在 $\\triangle ABC$ 中，$a=3$、$b=10$、$A=50°$，证明不存在三角形。" },
        commonTraps: [
          { en: "Forcing an answer when none exists — always check $\\sin B \\leq 1$", zh: "不存在解时强行求解——务必检查 $\\sin B \\leq 1$" },
        ],
      },
      {
        id: "pt-6-1-9",
        title: { en: "Height & Distance Application", zh: "高度与距离应用" },
        description: { en: "Use Law of Sines to find heights, distances, or lengths in real-world scenarios with oblique triangles.", zh: "利用正弦定理在实际场景的斜三角形中求高度、距离或长度。" },
        howToRecognize: { en: "Word problem involving elevation, towers, buildings, or cliffs where a non-right triangle is formed.", zh: "涉及仰角、塔、建筑或悬崖的应用题，构成非直角三角形。" },
        steps: [
          { en: "Draw and label the triangle from the problem description", zh: "根据题意画出并标注三角形" },
          { en: "Identify known angles and sides", zh: "确定已知角和边" },
          { en: "Apply Law of Sines to find the required measurement", zh: "用正弦定理求所需量" },
          { en: "Answer in context with appropriate units", zh: "在上下文中回答并标注单位" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "From two points 200 m apart on a flat plain, the angles of elevation to the top of a hill are $22°$ and $31°$. Find the height of the hill.", zh: "在平地上相距 200 m 的两点观测山顶的仰角分别为 $22°$ 和 $31°$，求山的高度。" },
        commonTraps: [
          { en: "Misidentifying which angle is opposite which side in the word problem", zh: "在应用题中将角与对边配对错误" },
          { en: "Forgetting to extract the final height from the side length using trigonometry", zh: "忘记用三角函数从边长提取最终高度" },
        ],
      },
      {
        id: "pt-6-1-10",
        title: { en: "Bearing & Navigation", zh: "方位角与导航" },
        description: { en: "Solve navigation or bearing problems using Law of Sines.", zh: "用正弦定理求解导航或方位角问题。" },
        howToRecognize: { en: "Problem uses compass bearings (e.g., N30°E) or headings, and asks for distances or angles.", zh: "题目使用罗盘方位角（如 N30°E）或航向，求距离或角度。" },
        steps: [
          { en: "Convert bearings to interior triangle angles", zh: "将方位角转换为三角形内角" },
          { en: "Draw the triangle and label all known parts", zh: "画出三角形并标注所有已知量" },
          { en: "Apply Law of Sines to find the required distance or angle", zh: "用正弦定理求所需距离或角度" },
          { en: "Convert back to bearing format if required", zh: "如需要，转换回方位角格式" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A ship sails on bearing N40°E for 120 km, then turns to S30°E for 80 km. Find the distance from the starting point.", zh: "一艘船以 N40°E 方位航行 120 km，然后转向 S30°E 航行 80 km，求离出发点的距离。" },
        commonTraps: [
          { en: "Incorrectly converting bearings to triangle angles", zh: "方位角转三角形内角时出错" },
          { en: "Confusing N30°E (30° east of north) with a standard angle", zh: "将 N30°E（北偏东 30°）与标准角度混淆" },
        ],
      },
      {
        id: "pt-6-1-11",
        title: { en: "Surveying & Indirect Measurement", zh: "测量与间接测量" },
        description: { en: "Use Law of Sines to find inaccessible distances in surveying problems.", zh: "用正弦定理在测量问题中求不可直接测量的距离。" },
        howToRecognize: { en: "A baseline distance is measured, angles to an inaccessible point are observed from both ends.", zh: "测量了一条基线距离，从基线两端观测不可达点的角度。" },
        steps: [
          { en: "Identify the baseline and measured angles", zh: "确定基线和观测角" },
          { en: "Find the third angle of the triangle", zh: "求三角形的第三个角" },
          { en: "Apply Law of Sines to find the desired distance", zh: "用正弦定理求所需距离" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Points A and B are 500 m apart on one side of a river. From A, the angle to point C across the river is $62°$; from B, the angle to C is $78°$. Find the distance AC.", zh: "河岸同侧 A、B 两点相距 500 m，从 A 观测河对岸 C 点的角为 $62°$，从 B 观测 C 的角为 $78°$，求 AC 的距离。" },
        commonTraps: [
          { en: "Using exterior angles instead of interior angles", zh: "使用外角而非内角" },
        ],
      },
      {
        id: "pt-6-1-12",
        title: { en: "Area When Angle Must Be Found First", zh: "需先求角再求面积" },
        description: { en: "Find triangle area when the included angle is not directly given and must be derived first.", zh: "当夹角未直接给出、需先求出时，再计算三角形面积。" },
        howToRecognize: { en: "Problem asks for area but gives AAS or ASA — you need to find sides or the included angle first.", zh: "题目求面积，但给出的是 AAS 或 ASA——需先求边或夹角。" },
        steps: [
          { en: "Find the missing angle: $C = 180° - A - B$", zh: "求缺失的角：$C = 180° - A - B$" },
          { en: "Use Law of Sines to find a needed side", zh: "用正弦定理求所需的边" },
          { en: "Apply $\\text{Area} = \\frac{1}{2}ab\\sin C$ with any two sides and their included angle", zh: "用任意两边及其夹角代入 $\\text{Area} = \\frac{1}{2}ab\\sin C$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "In $\\triangle ABC$, $A=40°$, $B=75°$, $a=8$. Find the area.", zh: "在 $\\triangle ABC$ 中，$A=40°$、$B=75°$、$a=8$，求面积。" },
        commonTraps: [
          { en: "Using two sides that are not adjacent to the chosen angle", zh: "用的两条边不与所选角相邻" },
        ],
      },
      {
        id: "pt-6-1-13",
        title: { en: "Circumscribed Circle (Circumradius)", zh: "外接圆（外接圆半径）" },
        description: { en: "Find the radius of the circumscribed circle using the extended Law of Sines.", zh: "利用正弦定理的扩展形式求外接圆半径。" },
        howToRecognize: { en: "Problem asks for circumradius $R$, or a circle passing through all three vertices.", zh: "题目求外接圆半径 $R$，或过三角形三个顶点的圆。" },
        steps: [
          { en: "Recall the extended form: $\\frac{a}{\\sin A} = 2R$", zh: "回顾扩展形式：$\\frac{a}{\\sin A} = 2R$" },
          { en: "Solve for $R = \\frac{a}{2\\sin A}$", zh: "求解 $R = \\frac{a}{2\\sin A}$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "In $\\triangle ABC$, $a=14$, $A=45°$. Find the circumradius $R$.", zh: "在 $\\triangle ABC$ 中，$a=14$、$A=45°$，求外接圆半径 $R$。" },
        commonTraps: [
          { en: "Forgetting the factor of 2 in the denominator", zh: "忘记分母中的 2" },
        ],
      },
      {
        id: "pt-6-1-14",
        title: { en: "Solve Triangle Then Compute a Derived Quantity", zh: "解三角形后求导出量" },
        description: { en: "First solve the triangle with Law of Sines, then compute a derived quantity such as perimeter, area, or altitude.", zh: "先用正弦定理解三角形，再求周长、面积或高等导出量。" },
        howToRecognize: { en: "Problem gives partial triangle info AND asks for a quantity beyond just sides/angles (e.g., perimeter, altitude).", zh: "题目给出部分三角形信息，并要求求超出边角范围的量（如周长、高）。" },
        steps: [
          { en: "Solve the triangle completely using Law of Sines", zh: "用正弦定理完整解三角形" },
          { en: "Use solved values to compute the requested quantity", zh: "用求解出的值计算所求量" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "In $\\triangle ABC$, $A=55°$, $B=70°$, $a=20$. Find the perimeter.", zh: "在 $\\triangle ABC$ 中，$A=55°$、$B=70°$、$a=20$，求周长。" },
        commonTraps: [
          { en: "Rounding sides too early, causing accumulated error in the final answer", zh: "过早对边取近似值，导致最终结果累积误差" },
        ],
      },
      {
        id: "pt-6-1-15",
        title: { en: "Flight Path / Triangulation", zh: "飞行路径 / 三角测量" },
        description: { en: "Use multiple angle observations and Law of Sines to locate an object via triangulation.", zh: "利用多个角度观测和正弦定理通过三角测量定位物体。" },
        howToRecognize: { en: "Two observation stations with known separation measure angles to a target (plane, fire, landmark).", zh: "两个已知间距的观测站测量对目标（飞机、火灾、地标）的角度。" },
        steps: [
          { en: "Draw the triangle: observation stations and the target", zh: "画出三角形：观测站和目标" },
          { en: "Determine all interior angles from given observations", zh: "根据观测值确定所有内角" },
          { en: "Apply Law of Sines to find the target distance", zh: "用正弦定理求目标距离" },
          { en: "If needed, compute altitude or closest approach distance", zh: "如需要，计算高度或最近距离" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Two radar stations 100 km apart detect a plane. Station A measures an angle of $35°$, station B measures $48°$ to the plane. Find the distance from station A to the plane.", zh: "两个相距 100 km 的雷达站探测到一架飞机，A 站测得角度 $35°$，B 站测得 $48°$，求 A 站到飞机的距离。" },
        commonTraps: [
          { en: "Confusing the angles at the stations with the angle at the target", zh: "混淆观测站的角和目标处的角" },
        ],
      },
      // ── Hard (5) ──────────────────────────────────────────
      {
        id: "pt-6-1-16",
        title: { en: "Full Ambiguous-Case Analysis", zh: "完整的模糊情形分析" },
        description: { en: "Given SSA data, systematically determine whether 0, 1, or 2 triangles exist and solve each.", zh: "给定 SSA 数据，系统判断存在 0、1 还是 2 个三角形，并分别求解。" },
        howToRecognize: { en: "Two sides and a non-included angle — the problem explicitly asks how many triangles are possible.", zh: "两边及非夹角——题目明确问有几个可能的三角形。" },
        steps: [
          { en: "Compute height $h = b \\sin A$", zh: "计算高 $h = b \\sin A$" },
          { en: "Compare $a$ with $h$ and $b$: $a < h$ → 0; $a = h$ → 1 (right △); $h < a < b$ → 2; $a \\geq b$ → 1", zh: "比较 $a$ 与 $h$ 和 $b$：$a < h$ → 0；$a = h$ → 1（直角△）；$h < a < b$ → 2；$a \\geq b$ → 1" },
          { en: "For each valid triangle, solve completely using Law of Sines", zh: "对每个有效三角形，用正弦定理完整求解" },
          { en: "Present all solutions clearly", zh: "清楚呈现所有解" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "In $\\triangle ABC$, $a=8$, $b=12$, $A=30°$. How many triangles exist? Solve each completely.", zh: "在 $\\triangle ABC$ 中，$a=8$、$b=12$、$A=30°$，有几个三角形？完整求解。" },
        commonTraps: [
          { en: "Forgetting to check the supplement angle", zh: "忘记检查补角" },
          { en: "Not verifying $A + B' < 180°$ for the second candidate", zh: "未验证第二个候选值满足 $A + B' < 180°$" },
        ],
      },
      {
        id: "pt-6-1-17",
        title: { en: "Multi-Triangle Compound Problem", zh: "多三角形复合问题" },
        description: { en: "Solve a problem involving two or more connected triangles using Law of Sines in sequence.", zh: "用正弦定理依次求解涉及两个或多个相连三角形的问题。" },
        howToRecognize: { en: "The figure contains multiple triangles sharing sides or vertices; solving one triangle provides data for the next.", zh: "图形包含多个共享边或顶点的三角形；解第一个三角形为下一个提供数据。" },
        steps: [
          { en: "Identify the first solvable triangle", zh: "确定第一个可解的三角形" },
          { en: "Solve it using Law of Sines", zh: "用正弦定理解此三角形" },
          { en: "Transfer the shared side/angle to the next triangle", zh: "将共享边/角传递给下一个三角形" },
          { en: "Solve the second triangle", zh: "解第二个三角形" },
          { en: "Combine results for the final answer", zh: "综合结果得最终答案" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "From point D, the angles to points A and B (which are 50 m apart) are $\\angle ADB = 25°$. From A, $\\angle DAB = 110°$. From B, $\\angle DBC = 40°$ to a fourth point C where $\\angle BDC = 35°$. Find DC.", zh: "从 D 点观测相距 50 m 的 A、B 两点，$\\angle ADB = 25°$。从 A 点，$\\angle DAB = 110°$。从 B 点，$\\angle DBC = 40°$ 指向第四点 C，$\\angle BDC = 35°$，求 DC。" },
        commonTraps: [
          { en: "Losing precision when transferring computed sides between triangles", zh: "在三角形间传递计算所得的边时损失精度" },
          { en: "Misidentifying shared elements between the two triangles", zh: "误判两个三角形间的共享元素" },
        ],
      },
      {
        id: "pt-6-1-18",
        title: { en: "3D Application with Oblique Triangles", zh: "含斜三角形的三维应用" },
        description: { en: "Apply Law of Sines within a 3D scenario, such as an inclined plane, by extracting oblique triangles.", zh: "在三维场景（如斜面）中提取斜三角形，应用正弦定理求解。" },
        howToRecognize: { en: "Problem involves a slope, ramp, or inclined surface where a non-right triangle must be solved.", zh: "题目涉及斜坡、坡道或倾斜面，需解一个非直角三角形。" },
        steps: [
          { en: "Visualize the 3D setup and identify the oblique triangle", zh: "想象三维场景并识别斜三角形" },
          { en: "Extract the triangle into a 2D diagram with all known measurements", zh: "将三角形提取为标注已知量的平面图" },
          { en: "Apply Law of Sines within the extracted triangle", zh: "在提取的三角形中应用正弦定理" },
          { en: "Map the result back to the 3D context", zh: "将结果映射回三维情境" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A hill slopes at $15°$. A 40 m tower stands at the top. From a point down the slope, the angle of elevation to the top of the tower is $28°$. Find the distance along the slope from the point to the base of the tower.", zh: "山坡坡度为 $15°$，山顶有一座 40 m 高的塔。从坡面上一点观测塔顶的仰角为 $28°$，求该点沿坡面到塔底的距离。" },
        commonTraps: [
          { en: "Confusing the angle of elevation with an interior triangle angle", zh: "将仰角与三角形内角混淆" },
          { en: "Failing to account for the slope angle when setting up the triangle", zh: "建立三角形时未考虑坡度角" },
        ],
      },
      {
        id: "pt-6-1-19",
        title: { en: "SSA with Obtuse Given Angle", zh: "SSA 且已知角为钝角" },
        description: { en: "Analyze the ambiguous case when the given angle is obtuse — special rules apply.", zh: "分析已知角为钝角时的模糊情形——有特殊规则。" },
        howToRecognize: { en: "SSA setup where the known angle $A > 90°$.", zh: "SSA 构型中已知角 $A > 90°$。" },
        steps: [
          { en: "Note: if $A > 90°$, the side $a$ must be the longest side; otherwise no triangle", zh: "注意：若 $A > 90°$，边 $a$ 必须是最长边，否则无解" },
          { en: "Check if $a > b$; if not → no solution", zh: "检查 $a > b$；若不满足 → 无解" },
          { en: "If $a > b$: find $\\sin B$, compute $B$ (must be acute), solve", zh: "若 $a > b$：求 $\\sin B$，计算 $B$（必为锐角），求解" },
          { en: "No two-solution case is possible when $A$ is obtuse", zh: "当 $A$ 为钝角时不可能出现两解" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "In $\\triangle ABC$, $a=18$, $b=12$, $A=115°$. Solve the triangle.", zh: "在 $\\triangle ABC$ 中，$a=18$、$b=12$、$A=115°$，解此三角形。" },
        commonTraps: [
          { en: "Attempting to check for two solutions — impossible when $A$ is obtuse", zh: "试图检查两解——当 $A$ 为钝角时不可能" },
          { en: "Forgetting that $a$ must be greater than $b$ for a solution to exist", zh: "忘记 $a$ 必须大于 $b$ 才有解" },
        ],
      },
      {
        id: "pt-6-1-20",
        title: { en: "Proof & Derivation", zh: "证明与推导" },
        description: { en: "Prove the Law of Sines or derive related results from first principles.", zh: "证明正弦定理或从基本原理推导相关结论。" },
        howToRecognize: { en: "Problem asks you to prove, derive, or show why the Law of Sines holds.", zh: "题目要求证明、推导或说明正弦定理为何成立。" },
        steps: [
          { en: "Draw $\\triangle ABC$ with altitude $h$ from vertex $C$ to side $AB$", zh: "画 $\\triangle ABC$，从顶点 $C$ 向边 $AB$ 作高 $h$" },
          { en: "Express $h$ using angle $A$: $h = b \\sin A$", zh: "用角 $A$ 表示 $h$：$h = b \\sin A$" },
          { en: "Express $h$ using angle $B$: $h = a \\sin B$", zh: "用角 $B$ 表示 $h$：$h = a \\sin B$" },
          { en: "Set equal: $b \\sin A = a \\sin B$ → $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$", zh: "令其相等：$b \\sin A = a \\sin B$ → $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$" },
          { en: "Repeat with another altitude to include side $c$", zh: "用另一条高重复以引入边 $c$" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Prove the Law of Sines: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$.", zh: "证明正弦定理：$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$。" },
        commonTraps: [
          { en: "Only proving for acute triangles — need to handle the obtuse case via supplementary angles", zh: "只证明了锐角三角形——需要用补角处理钝角情形" },
        ],
      },
    ],
  },
  {
    id: "6-2",
    chapterId: "ch-6",
    number: "6.2",
    title: {
      en: "Law of Cosines",
      zh: "余弦定理",
    },
    description: {
      en: "Use the Law of Cosines to solve oblique triangles (SSS, SAS) and apply Heron's Area Formula.",
      zh: "运用余弦定理求解斜三角形（SSS、SAS），并应用海伦面积公式。",
    },
  },
  {
    id: "6-3",
    chapterId: "ch-6",
    number: "6.3",
    title: {
      en: "Vectors in the Plane",
      zh: "平面向量",
    },
    description: {
      en: "Represent vectors, perform vector operations, and write vectors in component and unit-vector form.",
      zh: "表示向量、进行向量运算，并以分量形式与单位向量形式书写向量。",
    },
  },
  {
    id: "6-4",
    chapterId: "ch-6",
    number: "6.4",
    title: {
      en: "Vectors and Dot Products",
      zh: "向量与点积",
    },
    description: {
      en: "Compute dot products, find the angle between vectors, and decompose vectors into projections.",
      zh: "计算点积、求向量之间的夹角，并将向量分解为投影分量。",
    },
  },
  {
    id: "6-5",
    chapterId: "ch-6",
    number: "6.5",
    title: {
      en: "Trigonometric Form of a Complex Number",
      zh: "复数的三角形式",
    },
    description: {
      en: "Write complex numbers in trigonometric form and use DeMoivre's Theorem to find powers and roots.",
      zh: "将复数写成三角形式，并运用棣莫弗定理求复数的幂与方根。",
    },
  },
];

export const chapters: Chapter[] = [
  {
    id: "ch-1",
    number: "1",
    title: {
      en: "Functions and Their Graphs",
      zh: "函数及其图像",
    },
    units: chapter1Units,
  },
  {
    id: "ch-2",
    number: "2",
    title: {
      en: "Polynomial and Rational Functions",
      zh: "多项式与有理函数",
    },
    units: chapter2Units,
  },
  {
    id: "ch-3",
    number: "3",
    title: {
      en: "Exponential and Logarithmic Functions",
      zh: "指数函数与对数函数",
    },
    units: chapter3Units,
  },
  {
    id: "ch-4",
    number: "4",
    title: {
      en: "Trigonometric Functions",
      zh: "三角函数",
    },
    units: chapter4Units,
  },
  {
    id: "ch-5",
    number: "5",
    title: {
      en: "Analytic Trigonometry",
      zh: "解析三角学",
    },
    units: chapter5Units,
  },
  {
    id: "ch-6",
    number: "6",
    title: {
      en: "Additional Topics in Trigonometry",
      zh: "三角学补充专题",
    },
    units: chapter6Units,
  },
];
