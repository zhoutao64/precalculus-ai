import type { Chapter, Unit } from "@/types/curriculum";

const chapter1Units: Unit[] = [
  {
    id: "1-1",
    chapterId: "ch-1",
    number: "1.1",
    title: { en: "Rectangular Coordinates", zh: "直角坐标系" },
    description: {
      en: "Plot points in the Cartesian plane and use the Distance and Midpoint Formulas.",
      zh: "在笛卡尔平面上标记点，并运用两点间距离公式与中点公式。",
    },
    learningGoals: [
      { en: "Plot ordered pairs and identify quadrants in the Cartesian plane", zh: "在笛卡尔平面上标记有序对并识别象限" },
      { en: "Apply the Distance Formula to find the distance between two points", zh: "运用距离公式求两点间的距离" },
      { en: "Apply the Midpoint Formula to find the midpoint of a segment", zh: "运用中点公式求线段的中点" },
      { en: "Use the coordinate plane to model real-world data", zh: "运用坐标平面对实际数据建模" },
    ],
    keyConcepts: [
      {
        id: "kc-1-1-1",
        title: { en: "The Cartesian Plane and Quadrants", zh: "笛卡尔平面与象限" },
        explanation: {
          en: "The Cartesian plane is formed by two perpendicular real number lines — the x-axis (horizontal) and y-axis (vertical) — meeting at the origin. They divide the plane into four quadrants: I (+,+), II (-,+), III (-,-), IV (+,-). Every point is named by an ordered pair (x, y).",
          zh: "笛卡尔平面由两条互相垂直的实数轴构成——横轴（x 轴）与纵轴（y 轴）——相交于原点。两轴将平面分为四个象限：Ⅰ (+,+)、Ⅱ (-,+)、Ⅲ (-,-)、Ⅳ (+,-)。每个点用有序对 (x, y) 表示。",
        },
        whenToUse: { en: "Whenever you plot, describe, or analyze the position of a point", zh: "凡是要标记、描述或分析点的位置时" },
        commonMistake: { en: "Reversing the (x, y) order or placing a point in the wrong quadrant", zh: "颠倒 (x, y) 的顺序，或把点放错象限" },
        example: { en: "$(3, -2)$ lies in Quadrant IV; $(-1, 4)$ lies in Quadrant II", zh: "$(3, -2)$ 位于第 Ⅳ 象限；$(-1, 4)$ 位于第 Ⅱ 象限" },
      },
      {
        id: "kc-1-1-2",
        title: { en: "Distance Formula", zh: "距离公式" },
        explanation: {
          en: "The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$. It is a direct application of the Pythagorean Theorem to the right triangle formed by the horizontal and vertical changes.",
          zh: "两点 $(x_1, y_1)$ 与 $(x_2, y_2)$ 之间的距离为 $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$。它是勾股定理在由横向与纵向变化构成的直角三角形上的直接应用。",
        },
        whenToUse: { en: "Whenever you need the length of a segment or distance between two points", zh: "需要求线段长度或两点间距离时" },
        commonMistake: { en: "Forgetting to square the differences, or taking the square root of the difference (not the sum)", zh: "忘记对差值平方，或对差而非平方和开根号" },
        example: { en: "Distance from $(1, 2)$ to $(4, 6)$: $d = \\sqrt{3^2 + 4^2} = 5$", zh: "从 $(1, 2)$ 到 $(4, 6)$ 的距离：$d = \\sqrt{3^2 + 4^2} = 5$" },
      },
      {
        id: "kc-1-1-3",
        title: { en: "Midpoint Formula", zh: "中点公式" },
        explanation: {
          en: "The midpoint of the segment from $(x_1, y_1)$ to $(x_2, y_2)$ is the average of the coordinates: $M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$.",
          zh: "从 $(x_1, y_1)$ 到 $(x_2, y_2)$ 线段的中点是两端点坐标的平均值：$M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$。",
        },
        whenToUse: { en: "To find the center of a segment, or to average two positions", zh: "求线段中点或两个位置的平均值" },
        commonMistake: { en: "Subtracting instead of adding, or forgetting to divide by 2 on each coordinate", zh: "做减法而非加法，或忘记对每个坐标除以 2" },
        example: { en: "Midpoint of $(-2, 3)$ and $(4, 7)$ is $(1, 5)$", zh: "$(-2, 3)$ 与 $(4, 7)$ 的中点是 $(1, 5)$" },
      },
    ],
    formulas: [
      {
        id: "f-1-1-1",
        name: { en: "Distance Formula", zh: "距离公式" },
        formula: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
        variables: [
          { en: "$(x_1, y_1)$, $(x_2, y_2)$ — coordinates of the two points", zh: "$(x_1, y_1)$、$(x_2, y_2)$ — 两点坐标" },
          { en: "$d$ — distance between the two points", zh: "$d$ — 两点间的距离" },
        ],
        whenToUse: { en: "Find the distance between any two points in the coordinate plane", zh: "在坐标平面上求任意两点间的距离" },
        commonProblemTypes: [
          { en: "Find the length of a segment", zh: "求线段长度" },
          { en: "Verify whether a triangle is right, isosceles, or equilateral", zh: "判断三角形是否为直角、等腰或等边" },
        ],
        example: { en: "From $(0,0)$ to $(3,4)$: $d = \\sqrt{9 + 16} = 5$", zh: "从 $(0,0)$ 到 $(3,4)$：$d = \\sqrt{9 + 16} = 5$" },
      },
      {
        id: "f-1-1-2",
        name: { en: "Midpoint Formula", zh: "中点公式" },
        formula: "M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)",
        variables: [
          { en: "$(x_1, y_1)$, $(x_2, y_2)$ — endpoints of the segment", zh: "$(x_1, y_1)$、$(x_2, y_2)$ — 线段两端点" },
          { en: "$M$ — midpoint", zh: "$M$ — 中点" },
        ],
        whenToUse: { en: "Find the midpoint of a segment, or recover an endpoint when the midpoint and the other endpoint are known", zh: "求线段中点；已知中点与一端点时反求另一端点" },
        commonProblemTypes: [
          { en: "Find the midpoint of two points", zh: "求两点的中点" },
          { en: "Find an unknown endpoint", zh: "求未知端点" },
        ],
        example: { en: "Midpoint of $(1,2)$ and $(5,6)$ is $(3,4)$", zh: "$(1,2)$ 与 $(5,6)$ 的中点是 $(3,4)$" },
      },
      {
        id: "f-1-1-3",
        name: { en: "Pythagorean Theorem", zh: "勾股定理" },
        formula: "a^2 + b^2 = c^2",
        variables: [
          { en: "$a$, $b$ — legs of the right triangle", zh: "$a$、$b$ — 直角三角形的两直角边" },
          { en: "$c$ — hypotenuse", zh: "$c$ — 斜边" },
        ],
        whenToUse: { en: "Foundation of the Distance Formula; also used to verify right triangles", zh: "距离公式的基础；亦用于验证直角三角形" },
        commonProblemTypes: [
          { en: "Verify a right triangle", zh: "验证直角三角形" },
          { en: "Derive distance from horizontal/vertical legs", zh: "从横向/纵向直角边推导距离" },
        ],
        example: { en: "Legs $3, 4$: hypotenuse $= \\sqrt{9+16} = 5$", zh: "直角边 $3, 4$：斜边 $= \\sqrt{9+16} = 5$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-1-1-1",
        title: { en: "Plot a Point and Identify Its Quadrant", zh: "标记点并判断象限" },
        description: { en: "Given an ordered pair, plot the point and state which quadrant (or axis) it lies in.", zh: "给定有序对，标出点的位置并指出它在哪个象限（或坐标轴上）。" },
        howToRecognize: { en: "An ordered pair is given and you are asked to plot or to name the quadrant.", zh: "题目给出有序对，要求标记或指出象限。" },
        steps: [
          { en: "Read the $x$-coordinate (move left/right from origin)", zh: "读出 $x$ 坐标（从原点向左或右移动）" },
          { en: "Read the $y$-coordinate (move up/down)", zh: "读出 $y$ 坐标（向上或向下移动）" },
          { en: "Determine the quadrant from the signs of $(x, y)$", zh: "根据 $(x, y)$ 的符号判断象限" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Plot $(-3, 5)$ and state its quadrant.", zh: "标出 $(-3, 5)$ 并指出它所在的象限。" },
        commonTraps: [
          { en: "Switching the $x$- and $y$-coordinates", zh: "把 $x$ 与 $y$ 坐标搞反" },
          { en: "A point on an axis is not in any quadrant", zh: "落在坐标轴上的点不属于任何象限" },
        ],
      },
      {
        id: "pt-1-1-2",
        title: { en: "Distance Between Two Points", zh: "求两点间距离" },
        description: { en: "Use the Distance Formula to compute the distance between two given points.", zh: "用距离公式计算给定两点间的距离。" },
        howToRecognize: { en: "Two points are given; the question asks for distance, length, or how far apart.", zh: "给定两点；题目问距离、长度或相距多远。" },
        steps: [
          { en: "Label $(x_1, y_1)$ and $(x_2, y_2)$", zh: "标记 $(x_1, y_1)$ 和 $(x_2, y_2)$" },
          { en: "Compute differences $x_2 - x_1$ and $y_2 - y_1$", zh: "计算差 $x_2 - x_1$ 与 $y_2 - y_1$" },
          { en: "Square each difference and add them", zh: "对每个差平方并相加" },
          { en: "Take the square root", zh: "开平方根" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the distance between $(2, -1)$ and $(7, 11)$.", zh: "求 $(2, -1)$ 与 $(7, 11)$ 之间的距离。" },
        commonTraps: [
          { en: "Forgetting the square root at the end", zh: "最后忘记开平方" },
          { en: "Sign errors when subtracting before squaring", zh: "做差时符号错误后再平方" },
        ],
      },
      {
        id: "pt-1-1-3",
        title: { en: "Midpoint of a Segment", zh: "求线段中点" },
        description: { en: "Use the Midpoint Formula to find the center of a segment given its endpoints.", zh: "用中点公式根据端点求线段中心。" },
        howToRecognize: { en: "Two endpoints are given; the question asks for the midpoint or center.", zh: "给定两端点；题目问中点或中心。" },
        steps: [
          { en: "Add the $x$-coordinates and divide by 2", zh: "$x$ 坐标相加除以 2" },
          { en: "Add the $y$-coordinates and divide by 2", zh: "$y$ 坐标相加除以 2" },
          { en: "Write the result as an ordered pair", zh: "结果写成有序对" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the midpoint of the segment from $(-4, 2)$ to $(6, 8)$.", zh: "求从 $(-4, 2)$ 到 $(6, 8)$ 的线段中点。" },
        commonTraps: [
          { en: "Subtracting instead of adding", zh: "误用减法而非加法" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-1-1-4",
        title: { en: "Verify a Right Triangle Using the Distance Formula", zh: "用距离公式验证直角三角形" },
        description: { en: "Given three vertices, compute side lengths and check whether the Pythagorean relation holds.", zh: "给定三个顶点，计算三边长度并验证勾股关系。" },
        howToRecognize: { en: "Three points are given; the question asks whether the triangle is right (or isosceles).", zh: "给定三点；题目问是否为直角（或等腰）三角形。" },
        steps: [
          { en: "Compute the three side lengths using the Distance Formula", zh: "用距离公式计算三边长度" },
          { en: "Identify the longest side as the candidate hypotenuse", zh: "将最长边作为候选斜边" },
          { en: "Check whether $a^2 + b^2 = c^2$ for the other two sides and the longest", zh: "验证其余两边与最长边是否满足 $a^2 + b^2 = c^2$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Show that $A(1,2)$, $B(4,6)$, $C(-3,5)$ form a right triangle.", zh: "证明 $A(1,2)$、$B(4,6)$、$C(-3,5)$ 构成直角三角形。" },
        commonTraps: [
          { en: "Comparing $a + b$ to $c$ instead of squared values", zh: "比较 $a + b$ 与 $c$ 而非平方值" },
          { en: "Skipping the longest-side identification before squaring", zh: "未先确定最长边就开始计算" },
        ],
      },
      {
        id: "pt-1-1-5",
        title: { en: "Find a Missing Coordinate Given a Distance", zh: "已知距离求未知坐标" },
        description: { en: "Given one point and the distance to another point with one unknown coordinate, solve for the unknown.", zh: "给定一点及到另一点的距离，其中一个坐标未知，求未知量。" },
        howToRecognize: { en: "One coordinate is unknown (e.g., $(x, 5)$); a target distance from a known point is given.", zh: "有一个坐标未知（如 $(x, 5)$）；给定到已知点的目标距离。" },
        steps: [
          { en: "Set up the Distance Formula with the unknown variable", zh: "用未知量建立距离公式" },
          { en: "Square both sides to remove the radical", zh: "两边平方去掉根号" },
          { en: "Solve the resulting equation (often quadratic)", zh: "求解所得方程（通常为二次方程）" },
          { en: "Check both roots — discard any that do not fit context", zh: "检查两个根——舍去不符合题意的解" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find $x$ so that the distance from $(x, 3)$ to $(2, 7)$ is $5$.", zh: "求 $x$ 使 $(x, 3)$ 到 $(2, 7)$ 的距离为 $5$。" },
        commonTraps: [
          { en: "Forgetting the $\\pm$ when taking square roots — there are usually two valid points", zh: "开平方根时忘记 $\\pm$——通常有两个有效解" },
        ],
      },
      {
        id: "pt-1-1-6",
        title: { en: "Find an Endpoint Given Midpoint and Other Endpoint", zh: "已知中点及一端点求另一端点" },
        description: { en: "Use the Midpoint Formula in reverse to find the unknown endpoint.", zh: "反向使用中点公式求未知端点。" },
        howToRecognize: { en: "The midpoint $M$ and one endpoint are given; the other endpoint is unknown.", zh: "给定中点 $M$ 与一个端点，求另一端点。" },
        steps: [
          { en: "Write the Midpoint Formula with the unknown endpoint $(x, y)$", zh: "用未知端点 $(x, y)$ 写出中点公式" },
          { en: "Solve $\\frac{x_1 + x}{2} = M_x$ for $x$ (and similarly for $y$)", zh: "解 $\\frac{x_1 + x}{2} = M_x$ 求 $x$（$y$ 同理）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "The midpoint of $\\overline{AB}$ is $(3, -1)$ and $A = (-2, 4)$. Find $B$.", zh: "$\\overline{AB}$ 的中点为 $(3, -1)$，$A = (-2, 4)$，求 $B$。" },
        commonTraps: [
          { en: "Subtracting from the midpoint instead of solving the equation $\\frac{x_1 + x}{2} = M_x$ correctly", zh: "误从中点直接减去，而未正确解方程 $\\frac{x_1 + x}{2} = M_x$" },
        ],
      },
      {
        id: "pt-1-1-7",
        title: { en: "Translate a Point or Figure", zh: "平移点或图形" },
        description: { en: "Shift a point or set of points by adding constants to the $x$- and $y$-coordinates.", zh: "对 $x$ 和 $y$ 坐标加上常数以平移点或一组点。" },
        howToRecognize: { en: "The problem gives a translation rule, e.g., \"shift right 3 and up 2\", and asks for new coordinates.", zh: "题目给出平移规则，如\"右移 3 个单位，上移 2 个单位\"，要求新坐标。" },
        steps: [
          { en: "Add the horizontal shift $h$ to each $x$-coordinate", zh: "对每个 $x$ 坐标加上水平平移量 $h$" },
          { en: "Add the vertical shift $k$ to each $y$-coordinate", zh: "对每个 $y$ 坐标加上垂直平移量 $k$" },
          { en: "Express the new coordinates", zh: "写出新坐标" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Translate the triangle with vertices $A(1,2)$, $B(4,2)$, $C(2,5)$ by $3$ units right and $1$ unit down.", zh: "将顶点为 $A(1,2)$、$B(4,2)$、$C(2,5)$ 的三角形向右平移 $3$ 个单位、向下平移 $1$ 个单位。" },
        commonTraps: [
          { en: "Subtracting when the problem says \"right\" or \"up\" — these are positive shifts", zh: "题目说\"向右\"或\"向上\"时却用减法——这些是正向平移" },
        ],
      },
      {
        id: "pt-1-1-8",
        title: { en: "Verify Properties of a Quadrilateral", zh: "验证四边形性质" },
        description: { en: "Use distances and midpoints to verify whether four points form a parallelogram, rhombus, square, etc.", zh: "用距离和中点验证四点是否构成平行四边形、菱形、正方形等。" },
        howToRecognize: { en: "Four vertices are given; the problem asks to classify or verify a quadrilateral type.", zh: "给定四个顶点；要求分类或验证四边形类型。" },
        steps: [
          { en: "Compute lengths of sides (and diagonals if needed)", zh: "计算边长（如需要也算对角线）" },
          { en: "Compute midpoints of diagonals — equal midpoints ⇒ parallelogram", zh: "计算对角线中点——若相等则为平行四边形" },
          { en: "Compare side and diagonal lengths to classify further (rhombus, rectangle, square)", zh: "比较边长与对角线长度以进一步分类（菱形、矩形、正方形）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Show that $A(0,0)$, $B(4,0)$, $C(5,3)$, $D(1,3)$ form a parallelogram.", zh: "证明 $A(0,0)$、$B(4,0)$、$C(5,3)$、$D(1,3)$ 构成平行四边形。" },
        commonTraps: [
          { en: "Confusing necessary conditions (e.g., one pair parallel) with sufficient ones", zh: "把必要条件（如一对边平行）与充分条件混淆" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-1-1-9",
        title: { en: "Point That Divides a Segment in a Given Ratio", zh: "按给定比例分线段的点" },
        description: { en: "Find the point that divides a segment internally in a ratio $m:n$.", zh: "求按比例 $m:n$ 内分线段的点。" },
        howToRecognize: { en: "The problem asks for a point that splits a segment in a non-1:1 ratio.", zh: "题目要求按非 1:1 比例分线段的点。" },
        steps: [
          { en: "Let endpoints be $(x_1, y_1)$, $(x_2, y_2)$ and ratio $m:n$", zh: "设端点为 $(x_1, y_1)$、$(x_2, y_2)$，比例为 $m:n$" },
          { en: "Apply $P = \\left(\\frac{m x_2 + n x_1}{m+n}, \\frac{m y_2 + n y_1}{m+n}\\right)$", zh: "应用 $P = \\left(\\frac{m x_2 + n x_1}{m+n}, \\frac{m y_2 + n y_1}{m+n}\\right)$" },
          { en: "Simplify each coordinate", zh: "化简各坐标" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find the point that divides the segment from $(-2, 3)$ to $(4, 9)$ in the ratio $2:1$.", zh: "求从 $(-2, 3)$ 到 $(4, 9)$ 按 $2:1$ 内分线段的点。" },
        commonTraps: [
          { en: "Reversing $m$ and $n$ — the larger weight goes with the farther endpoint", zh: "把 $m$ 与 $n$ 弄反——较大的权重对应较远的端点" },
        ],
      },
      {
        id: "pt-1-1-10",
        title: { en: "Real-World Application — Modeling Position or Distance", zh: "实际应用——建模位置或距离" },
        description: { en: "Translate a real-world description (map, route, layout) into coordinates and apply the formulas.", zh: "将实际描述（地图、路径、布局）转化为坐标，并应用公式。" },
        howToRecognize: { en: "Word problem describes locations on a grid or map; asks for distance traveled or center of two locations.", zh: "应用题描述网格或地图上的位置；问行驶距离或两位置的中心。" },
        steps: [
          { en: "Choose an origin and assign coordinates to each location", zh: "选定原点并为每个位置赋予坐标" },
          { en: "Apply Distance or Midpoint Formula as needed", zh: "按需应用距离或中点公式" },
          { en: "Interpret the result with proper units in context", zh: "结合情境用恰当单位解释结果" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "On a city grid (each unit = 1 block), a coffee shop is at $(2, 5)$ and a library is at $(8, -3)$. A meeting point should be exactly halfway. Where is it, and how far does each person walk?", zh: "在城市网格中（每单位 = 1 个街区），咖啡店位于 $(2, 5)$，图书馆位于 $(8, -3)$。两人想在正中间会面，地点在哪？每人走多远？" },
        commonTraps: [
          { en: "Choosing the origin inconsistently or mixing units", zh: "原点选取不一致或单位混用" },
          { en: "Reporting unit-less distances when the problem expects blocks/miles/etc.", zh: "题目要求街区/英里等单位时却给出无单位距离" },
        ],
      },
    ],
  },
  {
    id: "1-2",
    chapterId: "ch-1",
    number: "1.2",
    title: { en: "Graphs of Equations", zh: "方程的图像" },
    description: {
      en: "Sketch graphs of equations, find intercepts, identify symmetry, and write the equation of a circle.",
      zh: "绘制方程的图像、求截距、识别对称性，并写出圆的方程。",
    },
    learningGoals: [
      { en: "Sketch the graph of an equation using the point-plotting method", zh: "用描点法绘制方程的图像" },
      { en: "Find $x$-intercepts and $y$-intercepts of a graph", zh: "求图像的 $x$ 截距与 $y$ 截距" },
      { en: "Test an equation algebraically for symmetry about the axes or origin", zh: "通过代数方法检验方程关于坐标轴或原点的对称性" },
      { en: "Write and graph the standard equation of a circle", zh: "写出并绘制圆的标准方程" },
    ],
    keyConcepts: [
      {
        id: "kc-1-2-1",
        title: { en: "Intercepts", zh: "截距" },
        explanation: {
          en: "An $x$-intercept is a point where a graph crosses the $x$-axis (set $y = 0$ and solve). A $y$-intercept is where it crosses the $y$-axis (set $x = 0$ and solve). A graph may have any number of $x$-intercepts but at most one $y$-intercept when it represents a function.",
          zh: "$x$ 截距是图像与 $x$ 轴的交点（令 $y = 0$ 求解）。$y$ 截距是图像与 $y$ 轴的交点（令 $x = 0$ 求解）。图像可有任意多个 $x$ 截距，但若为函数则最多有一个 $y$ 截距。",
        },
        whenToUse: { en: "Sketching graphs, finding zeros, or interpreting initial values", zh: "绘制图像、求零点或解释初始值时" },
        commonMistake: { en: "Swapping the substitutions: setting $x = 0$ to find $x$-intercepts", zh: "代入弄反：令 $x = 0$ 来求 $x$ 截距" },
        example: { en: "$y = x^2 - 4$: $x$-intercepts at $(\\pm 2, 0)$; $y$-intercept at $(0, -4)$", zh: "$y = x^2 - 4$：$x$ 截距 $(\\pm 2, 0)$；$y$ 截距 $(0, -4)$" },
      },
      {
        id: "kc-1-2-2",
        title: { en: "Tests for Symmetry", zh: "对称性检验" },
        explanation: {
          en: "A graph is symmetric about the $y$-axis if replacing $x$ with $-x$ produces an equivalent equation. Symmetric about the $x$-axis if replacing $y$ with $-y$ does. Symmetric about the origin if replacing both $x$ and $y$ with their negatives does.",
          zh: "图像关于 $y$ 轴对称，当且仅当用 $-x$ 代换 $x$ 后方程等价；关于 $x$ 轴对称，当且仅当用 $-y$ 代换 $y$ 后方程等价；关于原点对称，当且仅当同时用 $-x$、$-y$ 代换后方程等价。",
        },
        whenToUse: { en: "When sketching graphs — symmetry halves the work", zh: "绘制图像时——对称性可减半工作量" },
        commonMistake: { en: "Confusing the three substitutions or stopping before checking algebraic equivalence", zh: "混淆三种代换，或未化简就判断是否等价" },
        example: { en: "$y = x^2$: replacing $x \\to -x$ gives $y = x^2$ (same) ⇒ $y$-axis symmetry. $y = x^3$: replacing $x \\to -x$ and $y \\to -y$ gives $-y = -x^3$, equivalent to original ⇒ origin symmetry.", zh: "$y = x^2$：用 $-x$ 代 $x$ 得 $y = x^2$（不变）⇒ 关于 $y$ 轴对称。$y = x^3$：同时用 $-x$、$-y$ 代换得 $-y = -x^3$，与原式等价 ⇒ 关于原点对称。" },
      },
      {
        id: "kc-1-2-3",
        title: { en: "Standard Equation of a Circle", zh: "圆的标准方程" },
        explanation: {
          en: "The set of all points at distance $r$ from a fixed center $(h, k)$ is a circle. Applying the Distance Formula gives the standard equation $(x-h)^2 + (y-k)^2 = r^2$. The center has the OPPOSITE signs of those that appear in the equation.",
          zh: "到定点 $(h, k)$ 距离为 $r$ 的所有点的集合是一个圆。由距离公式可得标准方程 $(x-h)^2 + (y-k)^2 = r^2$。圆心的坐标与方程中出现的符号相反。",
        },
        whenToUse: { en: "Identifying or constructing a circle's equation given its center and radius", zh: "由圆心和半径写出或识别圆的方程" },
        commonMistake: { en: "Reading $(x+2)^2$ as center $x = +2$ instead of $x = -2$, or forgetting to take $\\sqrt{\\;}$ to recover $r$ from $r^2$", zh: "把 $(x+2)^2$ 误读为圆心 $x = +2$，应为 $-2$；或忘记从 $r^2$ 开方得到 $r$" },
        example: { en: "$(x-2)^2 + (y+3)^2 = 25$ has center $(2, -3)$ and radius $5$", zh: "$(x-2)^2 + (y+3)^2 = 25$ 的圆心为 $(2, -3)$，半径为 $5$" },
      },
    ],
    formulas: [
      {
        id: "f-1-2-1",
        name: { en: "Standard Equation of a Circle", zh: "圆的标准方程" },
        formula: "(x-h)^2 + (y-k)^2 = r^2",
        variables: [
          { en: "$(h, k)$ — center of the circle", zh: "$(h, k)$ — 圆心" },
          { en: "$r$ — radius", zh: "$r$ — 半径" },
        ],
        whenToUse: { en: "Any problem identifying or constructing a circle", zh: "凡是涉及识别或构造圆的问题" },
        commonProblemTypes: [
          { en: "Find center and radius from an equation", zh: "由方程求圆心与半径" },
          { en: "Write the equation given center and radius (or two points, etc.)", zh: "由圆心与半径（或其它条件）写出方程" },
        ],
        example: { en: "Center $(1, -2)$, radius $3$: $(x-1)^2 + (y+2)^2 = 9$", zh: "圆心 $(1, -2)$、半径 $3$：$(x-1)^2 + (y+2)^2 = 9$" },
      },
      {
        id: "f-1-2-2",
        name: { en: "General Form of a Circle", zh: "圆的一般方程" },
        formula: "x^2 + y^2 + Dx + Ey + F = 0",
        variables: [
          { en: "$D, E, F$ — real constants", zh: "$D, E, F$ — 实常数" },
        ],
        whenToUse: { en: "Recognizing a circle from an expanded equation; convert to standard form by completing the square", zh: "从展开式识别圆；通过配方化为标准方程" },
        commonProblemTypes: [
          { en: "Convert general form to standard form", zh: "由一般方程化为标准方程" },
        ],
        example: { en: "$x^2 + y^2 - 4x + 6y - 12 = 0 \\Rightarrow (x-2)^2 + (y+3)^2 = 25$", zh: "$x^2 + y^2 - 4x + 6y - 12 = 0 \\Rightarrow (x-2)^2 + (y+3)^2 = 25$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-1-2-1",
        title: { en: "Sketch a Graph by Plotting Points", zh: "用描点法绘制图像" },
        description: { en: "Generate a table of values, plot the points, and connect them to sketch the graph.", zh: "列出取值表、描点、连线得到图像。" },
        howToRecognize: { en: "An equation is given; the problem asks for the graph or sketch.", zh: "给定方程；要求绘制图像或简图。" },
        steps: [
          { en: "Choose representative $x$ values (negative, zero, positive)", zh: "选取代表性 $x$ 值（负、零、正）" },
          { en: "Compute corresponding $y$ values from the equation", zh: "由方程计算对应的 $y$ 值" },
          { en: "Plot the points and connect with a smooth curve", zh: "描点并以光滑曲线连接" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Sketch the graph of $y = x^2 - 2$ using a table of values.", zh: "通过取值表绘制 $y = x^2 - 2$ 的图像。" },
        commonTraps: [
          { en: "Choosing too few points to reveal the curve's shape", zh: "选点太少，无法体现曲线形状" },
          { en: "Connecting points with straight segments when the curve is non-linear", zh: "曲线非线性时却用直线段连接" },
        ],
      },
      {
        id: "pt-1-2-2",
        title: { en: "Find $x$- and $y$-Intercepts Algebraically", zh: "代数求 $x$、$y$ 截距" },
        description: { en: "Solve for the points where the graph crosses each axis.", zh: "求图像与各坐标轴的交点。" },
        howToRecognize: { en: "An equation is given; the problem asks for intercepts or zeros.", zh: "给定方程；要求截距或零点。" },
        steps: [
          { en: "Set $y = 0$ and solve for $x$ — these are the $x$-intercepts", zh: "令 $y = 0$ 解出 $x$——即 $x$ 截距" },
          { en: "Set $x = 0$ and solve for $y$ — this is the $y$-intercept", zh: "令 $x = 0$ 解出 $y$——即 $y$ 截距" },
          { en: "Express each as an ordered pair", zh: "每个写成有序对" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find all intercepts of $y = x^2 - 5x + 6$.", zh: "求 $y = x^2 - 5x + 6$ 的所有截距。" },
        commonTraps: [
          { en: "Reporting an $x$-intercept as a number rather than a point $(x, 0)$", zh: "把 $x$ 截距写成一个数而非点 $(x, 0)$" },
        ],
      },
      {
        id: "pt-1-2-3",
        title: { en: "Test for Symmetry Algebraically", zh: "代数检验对称性" },
        description: { en: "Determine if a graph is symmetric about the $x$-axis, $y$-axis, or origin by substitution.", zh: "通过代换确定图像是否关于 $x$ 轴、$y$ 轴或原点对称。" },
        howToRecognize: { en: "The problem asks which (if any) symmetries the graph has.", zh: "题目询问图像具有哪些对称性。" },
        steps: [
          { en: "$y$-axis: replace $x \\to -x$; if equation unchanged ⇒ symmetric", zh: "$y$ 轴：用 $-x$ 代 $x$；若方程不变 ⇒ 对称" },
          { en: "$x$-axis: replace $y \\to -y$; if equation unchanged ⇒ symmetric", zh: "$x$ 轴：用 $-y$ 代 $y$；若方程不变 ⇒ 对称" },
          { en: "Origin: replace $x \\to -x$ AND $y \\to -y$; if equation unchanged ⇒ symmetric", zh: "原点：同时用 $-x$、$-y$ 代换；若方程不变 ⇒ 对称" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Test $y = x^4 - 3x^2$ for all three symmetries.", zh: "检验 $y = x^4 - 3x^2$ 的三种对称性。" },
        commonTraps: [
          { en: "Forgetting to fully simplify after substitution", zh: "代换后未充分化简" },
          { en: "Mixing up which substitution corresponds to which symmetry", zh: "弄错代换与对称性的对应关系" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-1-2-4",
        title: { en: "Identify Symmetry from a Graph", zh: "从图像识别对称性" },
        description: { en: "Visually inspect a graph and determine its symmetries.", zh: "从图像直观判断对称性。" },
        howToRecognize: { en: "A graph is shown; the problem asks for symmetry types.", zh: "给出图像；问其对称类型。" },
        steps: [
          { en: "$y$-axis symmetry: graph is a mirror image across the $y$-axis", zh: "$y$ 轴对称：图像关于 $y$ 轴互为镜像" },
          { en: "$x$-axis symmetry: graph is a mirror image across the $x$-axis", zh: "$x$ 轴对称：图像关于 $x$ 轴互为镜像" },
          { en: "Origin symmetry: graph looks the same after a $180°$ rotation", zh: "原点对称：图像旋转 $180°$ 后不变" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A graph that looks like $y = x^3$ is shown. State all symmetries.", zh: "图像形似 $y = x^3$。指出所有对称性。" },
        commonTraps: [
          { en: "Confusing $y$-axis and $x$-axis symmetry", zh: "混淆 $y$ 轴对称与 $x$ 轴对称" },
        ],
      },
      {
        id: "pt-1-2-5",
        title: { en: "Write Standard Equation of a Circle Given Center and Radius", zh: "已知圆心与半径写圆的标准方程" },
        description: { en: "Substitute center and radius into the standard form.", zh: "把圆心和半径代入标准方程。" },
        howToRecognize: { en: "Center $(h, k)$ and radius $r$ are given.", zh: "已知圆心 $(h, k)$ 与半径 $r$。" },
        steps: [
          { en: "Identify $h$, $k$, $r$", zh: "确定 $h$、$k$、$r$" },
          { en: "Substitute into $(x-h)^2 + (y-k)^2 = r^2$", zh: "代入 $(x-h)^2 + (y-k)^2 = r^2$" },
          { en: "Watch the signs: a center with $h < 0$ gives $(x - (-3))^2 = (x + 3)^2$", zh: "注意符号：圆心 $h < 0$ 时 $(x - (-3))^2 = (x + 3)^2$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Write the equation of the circle with center $(-3, 4)$ and radius $6$.", zh: "写出圆心为 $(-3, 4)$、半径为 $6$ 的圆的方程。" },
        commonTraps: [
          { en: "Writing $r$ instead of $r^2$ on the right side", zh: "右边写成 $r$ 而非 $r^2$" },
          { en: "Sign errors with negative center coordinates", zh: "负坐标的圆心带来的符号错误" },
        ],
      },
      {
        id: "pt-1-2-6",
        title: { en: "Find Center and Radius from Standard Equation", zh: "由标准方程求圆心与半径" },
        description: { en: "Read off $(h, k)$ and $r$ from the standard form.", zh: "从标准方程读出 $(h, k)$ 与 $r$。" },
        howToRecognize: { en: "Equation is in the form $(x - h)^2 + (y - k)^2 = r^2$.", zh: "方程已是 $(x - h)^2 + (y - k)^2 = r^2$ 的形式。" },
        steps: [
          { en: "Match the equation to the standard form", zh: "与标准方程对照" },
          { en: "Read $h$ and $k$ — flip the sign of what appears", zh: "读出 $h$ 与 $k$——取所见数的相反数" },
          { en: "Take the square root of the right side to get $r$", zh: "对右边开平方得 $r$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the center and radius of $(x+5)^2 + (y-1)^2 = 49$.", zh: "求 $(x+5)^2 + (y-1)^2 = 49$ 的圆心与半径。" },
        commonTraps: [
          { en: "Reporting radius as the right-hand value rather than its square root", zh: "把右边值当作半径，未开方" },
        ],
      },
      {
        id: "pt-1-2-7",
        title: { en: "Convert General Form to Standard Form (Complete the Square)", zh: "由一般方程化为标准方程（配方）" },
        description: { en: "Complete the square on $x$ and $y$ to rewrite a general circle equation in standard form.", zh: "对 $x$ 与 $y$ 分别配方，把一般方程化为标准方程。" },
        howToRecognize: { en: "Equation is given in the expanded form $x^2 + y^2 + Dx + Ey + F = 0$.", zh: "方程为展开式 $x^2 + y^2 + Dx + Ey + F = 0$。" },
        steps: [
          { en: "Group $x$-terms and $y$-terms; move constant to the right", zh: "把 $x$ 项与 $y$ 项分组；常数项移到右边" },
          { en: "Complete the square on $x$: add $(D/2)^2$ to both sides", zh: "对 $x$ 配方：两边加 $(D/2)^2$" },
          { en: "Complete the square on $y$: add $(E/2)^2$ to both sides", zh: "对 $y$ 配方：两边加 $(E/2)^2$" },
          { en: "Write each completed square as a perfect square; identify $(h, k)$ and $r^2$", zh: "把完成配方的多项式写为完全平方；得出 $(h, k)$ 与 $r^2$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Convert $x^2 + y^2 - 6x + 8y + 9 = 0$ to standard form, then state center and radius.", zh: "将 $x^2 + y^2 - 6x + 8y + 9 = 0$ 化为标准方程，并指出圆心与半径。" },
        commonTraps: [
          { en: "Forgetting to add $(D/2)^2$ to BOTH sides of the equation", zh: "忘记将 $(D/2)^2$ 同时加到等式两边" },
          { en: "Sign errors when reading $h$, $k$ off the completed squares", zh: "从完全平方读出 $h$、$k$ 时的符号错误" },
        ],
      },
      {
        id: "pt-1-2-8",
        title: { en: "Sketch a Circle from Its Equation", zh: "由方程画圆" },
        description: { en: "Use center and radius to draw the circle on the coordinate plane.", zh: "利用圆心与半径在坐标平面上画圆。" },
        howToRecognize: { en: "Equation is given; problem asks for the graph of the circle.", zh: "给定方程；要求画出圆。" },
        steps: [
          { en: "Convert to standard form if needed", zh: "如需要先化为标准方程" },
          { en: "Plot center $(h, k)$", zh: "标出圆心 $(h, k)$" },
          { en: "Mark four reference points $r$ units up/down/left/right from center", zh: "在圆心上下左右各 $r$ 单位处标记四个参考点" },
          { en: "Draw a smooth circle through them", zh: "用光滑圆弧通过四点连成圆" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Sketch the circle $(x-1)^2 + (y+2)^2 = 16$.", zh: "画出圆 $(x-1)^2 + (y+2)^2 = 16$。" },
        commonTraps: [
          { en: "Drawing an oval rather than a circle", zh: "画成椭圆而非圆" },
          { en: "Using $r^2$ instead of $r$ as the radius distance", zh: "把 $r^2$ 当半径，而非 $r$" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-1-2-9",
        title: { en: "Find Circle Equation from Geometric Conditions", zh: "由几何条件求圆的方程" },
        description: { en: "Construct the equation of a circle given conditions such as endpoints of a diameter, three points on the circle, or tangency.", zh: "根据直径端点、圆上三点或相切等条件构造圆的方程。" },
        howToRecognize: { en: "Center and radius are not given directly — instead, you have geometric facts to deduce them from.", zh: "未直接给出圆心与半径——给出几何条件，由此推出。" },
        steps: [
          { en: "Endpoints of a diameter ⇒ center is the midpoint, radius is half the distance", zh: "直径两端点 ⇒ 圆心是中点，半径是距离的一半" },
          { en: "Three points on the circle ⇒ substitute into general form, solve the resulting linear system in $D, E, F$", zh: "圆上三点 ⇒ 代入一般方程，解出 $D$、$E$、$F$ 的线性方程组" },
          { en: "Tangent to a line ⇒ distance from center to the line equals $r$", zh: "与直线相切 ⇒ 圆心到直线的距离等于 $r$" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find the equation of the circle with diameter endpoints $A(2, -1)$ and $B(8, 7)$.", zh: "求以 $A(2, -1)$、$B(8, 7)$ 为直径两端点的圆的方程。" },
        commonTraps: [
          { en: "Using the diameter length as the radius (forgot to halve)", zh: "把直径长当半径（忘记取一半）" },
          { en: "When using three points, dropping a sign while solving the linear system", zh: "用三点法时解线性方程组中漏掉符号" },
        ],
      },
      {
        id: "pt-1-2-10",
        title: { en: "Application — Model with an Equation", zh: "应用——用方程建模" },
        description: { en: "Translate a real-world scenario (signal range, GPS, satellite footprint) into an equation, often a circle, and answer questions about it.", zh: "将实际场景（信号覆盖、GPS、卫星覆盖区）转化为方程（多为圆），并回答相关问题。" },
        howToRecognize: { en: "Word problem describes a region of constant distance from a point, or a graph that fits a known shape.", zh: "应用题描述到某点距离恒定的区域，或符合已知图形的轨迹。" },
        steps: [
          { en: "Identify the geometric structure (center, radius, axis behavior)", zh: "识别几何结构（圆心、半径、轴上行为）" },
          { en: "Set up coordinates so key elements are at convenient positions", zh: "选定坐标使关键元素位置便于处理" },
          { en: "Write the equation and use it to answer the question", zh: "写出方程并据此回答问题" },
          { en: "Interpret the answer with units", zh: "结合单位解释答案" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A radio tower at $(3, 2)$ broadcasts within a $25$-mile radius. Write the boundary equation and determine whether a city at $(15, 9)$ receives the signal.", zh: "位于 $(3, 2)$ 的电台覆盖半径 $25$ 英里。写出边界方程，并判断 $(15, 9)$ 处的城市能否接收到信号。" },
        commonTraps: [
          { en: "Computing distance and forgetting to compare it to the radius", zh: "算出距离后忘记与半径比较" },
          { en: "Mixing units (e.g., miles vs blocks)", zh: "单位混用（如英里与街区）" },
        ],
      },
    ],
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
