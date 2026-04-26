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
        formula: "a / sin(A) = b / sin(B) = c / sin(C)",
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
        formula: "Area = (1/2) · a · b · sin(C)",
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
      {
        id: "pt-6-1-1",
        title: { en: "Solve Triangle (AAS/ASA)", zh: "解三角形（AAS/ASA）" },
        description: { en: "Find all unknown sides and angles given two angles and one side.", zh: "已知两角一边，求所有未知边和角。" },
        howToRecognize: { en: "You are given two angles and one side.", zh: "题目给出两个角和一条边。" },
        steps: [
          { en: "Find the third angle: C = 180° - A - B", zh: "求第三个角：C = 180° - A - B" },
          { en: "Use Law of Sines to find the second side", zh: "用正弦定理求第二条边" },
          { en: "Use Law of Sines again for the third side", zh: "再次用正弦定理求第三条边" },
          { en: "Verify: angles sum to 180°", zh: "验证：角之和为 180°" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "In △ABC, A=35°, B=65°, a=12. Find b, c, and C.", zh: "在 △ABC 中，A=35°、B=65°、a=12，求 b、c 和 C。" },
        commonTraps: [
          { en: "Calculator in wrong mode (radians vs degrees)", zh: "计算器模式错误（弧度 vs 角度）" },
          { en: "Rounding too early", zh: "过早四舍五入" },
        ],
      },
      {
        id: "pt-6-1-2",
        title: { en: "Ambiguous Case (SSA)", zh: "模糊情形（SSA）" },
        description: { en: "Determine number of possible triangles and solve each.", zh: "判断可能的三角形个数并分别求解。" },
        howToRecognize: { en: "Two sides and an angle opposite one of them.", zh: "两条边和其中一边的对角。" },
        steps: [
          { en: "Use Law of Sines to find sin(B)", zh: "用正弦定理求 sin(B)" },
          { en: "If sin(B) > 1 → no solution", zh: "若 sin(B) > 1 → 无解" },
          { en: "If sin(B) ≤ 1, find B = arcsin(value)", zh: "若 sin(B) ≤ 1，求 B = arcsin(值)" },
          { en: "Check supplement: B' = 180° - B", zh: "检查补角：B' = 180° - B" },
          { en: "Solve each valid triangle", zh: "完整求解每个有效三角形" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "In △ABC, a=8, b=12, A=30°. How many triangles? Solve each.", zh: "在 △ABC 中，a=8、b=12、A=30°。几个三角形？分别求解。" },
        commonTraps: [
          { en: "Forgetting to check for second triangle", zh: "忘记检查第二个三角形" },
          { en: "Not checking if A + B' > 180°", zh: "未检查 A + B' > 180°" },
        ],
      },
      {
        id: "pt-6-1-3",
        title: { en: "Find Triangle Area", zh: "求三角形面积" },
        description: { en: "Calculate area using two sides and included angle.", zh: "利用两边及夹角计算面积。" },
        howToRecognize: { en: "Problem asks for area with two sides and included angle known.", zh: "题目求面积，且已知两边及夹角。" },
        steps: [
          { en: "Identify two sides and the included angle", zh: "确定两条边和夹角" },
          { en: "Apply Area = (1/2)·a·b·sin(C)", zh: "应用面积 = (1/2)·a·b·sin(C)" },
          { en: "Compute and include units", zh: "计算并标注单位" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find area of △ABC where a=9, b=14, C=50°.", zh: "求 △ABC 面积，a=9、b=14、C=50°。" },
        commonTraps: [
          { en: "Using wrong angle — must be BETWEEN the two sides", zh: "用错角——必须是两边的夹角" },
          { en: "Forgetting the 1/2 factor", zh: "忘记 1/2 系数" },
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
