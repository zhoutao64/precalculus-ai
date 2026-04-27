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
    title: { en: "Linear Equations in Two Variables", zh: "二元一次方程" },
    description: {
      en: "Use slope to graph linear equations, write equations of lines, and model real-world situations.",
      zh: "利用斜率绘制一次方程图像，写出直线方程，并建立实际情境的模型。",
    },
    learningGoals: [
      { en: "Calculate the slope of a line from two points", zh: "由两点计算直线的斜率" },
      { en: "Write equations of lines in slope-intercept, point-slope, and standard forms", zh: "用斜截式、点斜式与一般式写出直线方程" },
      { en: "Identify parallel and perpendicular lines from their slopes", zh: "由斜率判断两条直线是否平行或垂直" },
      { en: "Use linear equations to model and interpret real-world data", zh: "用线性方程对实际数据建模与解释" },
    ],
    keyConcepts: [
      {
        id: "kc-1-3-1",
        title: { en: "Slope of a Line", zh: "直线的斜率" },
        explanation: {
          en: "Slope $m$ measures the rate of change of $y$ with respect to $x$: $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Positive slope rises left to right; negative slope falls. Horizontal lines have $m = 0$; vertical lines have undefined slope.",
          zh: "斜率 $m$ 衡量 $y$ 随 $x$ 的变化率：$m = \\frac{y_2 - y_1}{x_2 - x_1}$。$m > 0$ 时直线从左下向右上；$m < 0$ 时反之。水平线 $m = 0$；铅直线斜率不存在。",
        },
        whenToUse: { en: "To compare steepness, identify direction, or build a linear equation", zh: "比较陡度、判断方向或构造线性方程时" },
        commonMistake: { en: "Subtracting in inconsistent order (e.g., $y_2 - y_1$ over $x_1 - x_2$); reporting \"undefined\" as $0$", zh: "做差顺序不一致（如 $y_2 - y_1$ 配 $x_1 - x_2$）；把\"不存在\"写成 $0$" },
        example: { en: "Through $(1, 2)$ and $(4, 11)$: $m = \\frac{11-2}{4-1} = 3$", zh: "过 $(1, 2)$ 与 $(4, 11)$：$m = \\frac{11-2}{4-1} = 3$" },
      },
      {
        id: "kc-1-3-2",
        title: { en: "Forms of a Linear Equation", zh: "直线方程的形式" },
        explanation: {
          en: "Slope-intercept form $y = mx + b$ shows slope and $y$-intercept directly. Point-slope form $y - y_1 = m(x - x_1)$ is best when you know a slope and one point. Standard form $Ax + By = C$ (with integer $A, B, C$) is convenient for finding intercepts.",
          zh: "斜截式 $y = mx + b$ 直接显示斜率与 $y$ 截距。点斜式 $y - y_1 = m(x - x_1)$ 适合已知斜率与一点的情形。一般式 $Ax + By = C$（整数系数）便于求截距。",
        },
        whenToUse: { en: "Choose the form that matches the given information", zh: "选用与已知条件匹配的形式" },
        commonMistake: { en: "Forgetting to distribute the slope through the parentheses in point-slope form", zh: "点斜式中忘记把斜率乘进括号" },
        example: { en: "Slope $2$ through $(1, 5)$: point-slope $y - 5 = 2(x - 1)$ ⇒ slope-intercept $y = 2x + 3$", zh: "斜率 $2$ 过 $(1, 5)$：点斜式 $y - 5 = 2(x - 1)$ ⇒ 斜截式 $y = 2x + 3$" },
      },
      {
        id: "kc-1-3-3",
        title: { en: "Parallel and Perpendicular Lines", zh: "平行线与垂直线" },
        explanation: {
          en: "Two non-vertical lines are parallel iff their slopes are equal: $m_1 = m_2$. They are perpendicular iff $m_1 \\cdot m_2 = -1$ (i.e., one slope is the negative reciprocal of the other). Vertical and horizontal lines are perpendicular by definition.",
          zh: "两条非铅直直线平行当且仅当斜率相等：$m_1 = m_2$。垂直当且仅当 $m_1 \\cdot m_2 = -1$（即互为负倒数）。铅直线与水平线按定义互相垂直。",
        },
        whenToUse: { en: "Whenever a problem mentions parallel/perpendicular conditions on lines", zh: "题目涉及直线平行或垂直时" },
        commonMistake: { en: "Using the reciprocal without flipping the sign for perpendicular slopes", zh: "求垂直斜率时取倒数却忘记变号" },
        example: { en: "Line with slope $\\tfrac{2}{3}$: parallel slope $\\tfrac{2}{3}$; perpendicular slope $-\\tfrac{3}{2}$", zh: "斜率 $\\tfrac{2}{3}$ 的直线：平行斜率 $\\tfrac{2}{3}$；垂直斜率 $-\\tfrac{3}{2}$" },
      },
    ],
    formulas: [
      {
        id: "f-1-3-1",
        name: { en: "Slope Formula", zh: "斜率公式" },
        formula: "m = \\frac{y_2 - y_1}{x_2 - x_1}",
        variables: [
          { en: "$(x_1, y_1)$, $(x_2, y_2)$ — two distinct points on the line", zh: "$(x_1, y_1)$、$(x_2, y_2)$ — 直线上两个不同的点" },
          { en: "$m$ — slope", zh: "$m$ — 斜率" },
        ],
        whenToUse: { en: "Whenever two points on a line are known", zh: "已知直线上两点时" },
        commonProblemTypes: [
          { en: "Find slope from two points", zh: "由两点求斜率" },
          { en: "Determine whether two lines are parallel or perpendicular", zh: "判断两直线是否平行或垂直" },
        ],
        example: { en: "Through $(0, 1)$ and $(2, 7)$: $m = \\frac{7-1}{2-0} = 3$", zh: "过 $(0, 1)$ 与 $(2, 7)$：$m = \\frac{7-1}{2-0} = 3$" },
      },
      {
        id: "f-1-3-2",
        name: { en: "Slope-Intercept Form", zh: "斜截式" },
        formula: "y = mx + b",
        variables: [
          { en: "$m$ — slope", zh: "$m$ — 斜率" },
          { en: "$b$ — $y$-intercept (value of $y$ when $x = 0$)", zh: "$b$ — $y$ 截距（$x = 0$ 时的 $y$ 值）" },
        ],
        whenToUse: { en: "When slope and $y$-intercept are known, or to graph quickly", zh: "已知斜率与 $y$ 截距，或需快速绘图时" },
        commonProblemTypes: [
          { en: "Graph a line", zh: "绘制直线" },
          { en: "Identify slope and $y$-intercept from an equation", zh: "由方程识别斜率与 $y$ 截距" },
        ],
        example: { en: "$y = -2x + 5$: slope $-2$, $y$-intercept $(0, 5)$", zh: "$y = -2x + 5$：斜率 $-2$，$y$ 截距 $(0, 5)$" },
      },
      {
        id: "f-1-3-3",
        name: { en: "Point-Slope Form", zh: "点斜式" },
        formula: "y - y_1 = m(x - x_1)",
        variables: [
          { en: "$(x_1, y_1)$ — known point on the line", zh: "$(x_1, y_1)$ — 直线上已知点" },
          { en: "$m$ — slope", zh: "$m$ — 斜率" },
        ],
        whenToUse: { en: "When you have a slope and ANY one point", zh: "已知斜率和任意一点时" },
        commonProblemTypes: [
          { en: "Write a line equation from a point and slope", zh: "由一点与斜率写直线方程" },
          { en: "Build a parallel or perpendicular line through a given point", zh: "过指定点作平行或垂直线" },
        ],
        example: { en: "Slope $4$ through $(2, -3)$: $y + 3 = 4(x - 2)$", zh: "斜率 $4$ 过 $(2, -3)$：$y + 3 = 4(x - 2)$" },
      },
      {
        id: "f-1-3-4",
        name: { en: "Standard (General) Form", zh: "一般式（标准式）" },
        formula: "Ax + By = C",
        variables: [
          { en: "$A, B, C$ — integers, with $A \\geq 0$ by convention", zh: "$A, B, C$ — 整数，按惯例 $A \\geq 0$" },
        ],
        whenToUse: { en: "When intercepts are needed quickly, or to clear fractions", zh: "快速求截距或消除分数时" },
        commonProblemTypes: [
          { en: "Find intercepts: set $x = 0$ then $y = 0$", zh: "求截距：令 $x = 0$ 再 $y = 0$" },
          { en: "Convert from slope-intercept to standard form", zh: "由斜截式化为一般式" },
        ],
        example: { en: "$2x + 3y = 12$: $x$-intercept $(6, 0)$, $y$-intercept $(0, 4)$", zh: "$2x + 3y = 12$：$x$ 截距 $(6, 0)$，$y$ 截距 $(0, 4)$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-1-3-1",
        title: { en: "Find Slope from Two Points", zh: "由两点求斜率" },
        description: { en: "Apply the slope formula to two given points.", zh: "对给定两点应用斜率公式。" },
        howToRecognize: { en: "Two points are given; problem asks for slope.", zh: "给定两点；要求斜率。" },
        steps: [
          { en: "Label points as $(x_1, y_1)$ and $(x_2, y_2)$", zh: "标记为 $(x_1, y_1)$ 与 $(x_2, y_2)$" },
          { en: "Apply $m = \\frac{y_2 - y_1}{x_2 - x_1}$", zh: "代入 $m = \\frac{y_2 - y_1}{x_2 - x_1}$" },
          { en: "Simplify to lowest terms", zh: "化简为最简" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the slope of the line through $(-2, 5)$ and $(3, -1)$.", zh: "求过 $(-2, 5)$ 与 $(3, -1)$ 的直线斜率。" },
        commonTraps: [
          { en: "Using the same order in numerator and denominator (always pair them)", zh: "分子分母减法顺序需一致（一一对应）" },
          { en: "Reporting an undefined slope as zero", zh: "把不存在的斜率写作 0" },
        ],
      },
      {
        id: "pt-1-3-2",
        title: { en: "Read Slope and Intercept from $y = mx + b$", zh: "由 $y = mx + b$ 读出斜率与截距" },
        description: { en: "Identify slope and $y$-intercept directly from slope-intercept form.", zh: "直接从斜截式读出斜率与 $y$ 截距。" },
        howToRecognize: { en: "Equation is already in $y = mx + b$ form (or can be solved for $y$).", zh: "方程已是 $y = mx + b$ 形式（或可解出 $y$）。" },
        steps: [
          { en: "Solve for $y$ if not already done", zh: "如未解出 $y$，先解出" },
          { en: "Coefficient of $x$ is the slope $m$", zh: "$x$ 的系数即为斜率 $m$" },
          { en: "Constant term is $b$ — the $y$-intercept is $(0, b)$", zh: "常数项即 $b$——$y$ 截距为 $(0, b)$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the slope and $y$-intercept of $3y = 6x - 9$.", zh: "求 $3y = 6x - 9$ 的斜率与 $y$ 截距。" },
        commonTraps: [
          { en: "Reading the slope before solving for $y$ (so the coefficient is wrong)", zh: "未解出 $y$ 就读斜率（系数有误）" },
        ],
      },
      {
        id: "pt-1-3-3",
        title: { en: "Graph a Line in Slope-Intercept Form", zh: "用斜截式画直线" },
        description: { en: "Plot the $y$-intercept, then use the slope's rise/run to find a second point.", zh: "先标 $y$ 截距，再按斜率的升/进求第二点。" },
        howToRecognize: { en: "Equation in $y = mx + b$ form; problem asks for the graph.", zh: "$y = mx + b$ 形式；要求画图。" },
        steps: [
          { en: "Plot $y$-intercept $(0, b)$", zh: "标 $y$ 截距 $(0, b)$" },
          { en: "From there, move 1 right and $m$ up (or write $m$ as $\\tfrac{\\text{rise}}{\\text{run}}$ for fractional slopes)", zh: "从该点向右 1 单位，向上 $m$ 单位（分数斜率写成 $\\tfrac{\\text{升}}{\\text{进}}$）" },
          { en: "Draw the line through the two points", zh: "通过两点画直线" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Graph $y = \\tfrac{2}{3}x - 1$.", zh: "画 $y = \\tfrac{2}{3}x - 1$。" },
        commonTraps: [
          { en: "Using \"rise over run\" with the wrong sign for negative slopes", zh: "负斜率时\"升/进\"的符号弄错" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-1-3-4",
        title: { en: "Write Equation Given Slope and a Point", zh: "已知斜率与一点写方程" },
        description: { en: "Use point-slope form, then optionally rewrite in slope-intercept form.", zh: "用点斜式，必要时再化为斜截式。" },
        howToRecognize: { en: "A slope and one point on the line are given.", zh: "给出斜率与直线上一点。" },
        steps: [
          { en: "Substitute into $y - y_1 = m(x - x_1)$", zh: "代入 $y - y_1 = m(x - x_1)$" },
          { en: "Distribute and simplify if asked for slope-intercept form", zh: "如需斜截式，展开并化简" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Write the equation of the line with slope $-3$ passing through $(4, 1)$ in slope-intercept form.", zh: "写出斜率 $-3$ 过 $(4, 1)$ 的直线的斜截式。" },
        commonTraps: [
          { en: "Sign errors when distributing the slope", zh: "把斜率分配进括号时的符号错误" },
        ],
      },
      {
        id: "pt-1-3-5",
        title: { en: "Write Equation Given Two Points", zh: "由两点写方程" },
        description: { en: "First compute slope, then use point-slope form with either point.", zh: "先求斜率，再用任一点代入点斜式。" },
        howToRecognize: { en: "Two points are given; problem asks for the equation.", zh: "给出两点；要求方程。" },
        steps: [
          { en: "Compute slope $m = \\frac{y_2 - y_1}{x_2 - x_1}$", zh: "求斜率 $m = \\frac{y_2 - y_1}{x_2 - x_1}$" },
          { en: "Apply point-slope form with either given point", zh: "用任一已知点代入点斜式" },
          { en: "Simplify to the requested form", zh: "化为所需形式" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the equation of the line through $(-1, 4)$ and $(3, -8)$.", zh: "求过 $(-1, 4)$ 与 $(3, -8)$ 的直线方程。" },
        commonTraps: [
          { en: "Plugging both points into point-slope form (only one is needed)", zh: "把两点都代入点斜式（只需一点）" },
        ],
      },
      {
        id: "pt-1-3-6",
        title: { en: "Convert Between Forms", zh: "在不同形式间转换" },
        description: { en: "Rewrite a line equation between slope-intercept, point-slope, and standard forms.", zh: "在斜截式、点斜式与一般式之间互换。" },
        howToRecognize: { en: "Equation is given in one form; problem asks for another.", zh: "给出某一形式；要求另一形式。" },
        steps: [
          { en: "Apply algebraic manipulation: distribute, combine like terms, isolate $y$", zh: "代数变形：展开、合并同类项、解出 $y$" },
          { en: "For standard form, clear fractions and arrange as $Ax + By = C$ with integer $A, B, C$", zh: "化为一般式时去分母，排为整数系数的 $Ax + By = C$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Convert $y - 2 = \\tfrac{1}{3}(x + 6)$ to standard form with integer coefficients.", zh: "把 $y - 2 = \\tfrac{1}{3}(x + 6)$ 化为整数系数的一般式。" },
        commonTraps: [
          { en: "Forgetting to multiply ALL terms when clearing fractions", zh: "去分母时漏乘某些项" },
        ],
      },
      {
        id: "pt-1-3-7",
        title: { en: "Determine Parallel or Perpendicular", zh: "判断平行或垂直" },
        description: { en: "Compare slopes of two lines to classify their relationship.", zh: "比较两条直线的斜率以判断关系。" },
        howToRecognize: { en: "Two equations or two pairs of points are given; problem asks for the relationship.", zh: "给出两个方程或两组点；要求判断关系。" },
        steps: [
          { en: "Find each line's slope", zh: "分别求两条直线的斜率" },
          { en: "Equal slopes ⇒ parallel; product of slopes equals $-1$ ⇒ perpendicular", zh: "斜率相等 ⇒ 平行；斜率乘积为 $-1$ ⇒ 垂直" },
          { en: "Otherwise the lines are neither parallel nor perpendicular", zh: "否则既不平行也不垂直" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Are the lines $y = 2x + 1$ and $4x - 2y = 7$ parallel, perpendicular, or neither?", zh: "判断 $y = 2x + 1$ 与 $4x - 2y = 7$ 是平行、垂直还是都不是？" },
        commonTraps: [
          { en: "Comparing equations directly without solving each for $y$", zh: "未先解出 $y$ 就直接比较方程" },
        ],
      },
      {
        id: "pt-1-3-8",
        title: { en: "Write Parallel or Perpendicular Line Through a Point", zh: "过一点作平行或垂直线" },
        description: { en: "Build the equation of a line that is parallel or perpendicular to a given line and passes through a specific point.", zh: "构造与已知直线平行或垂直、且过指定点的直线方程。" },
        howToRecognize: { en: "Problem provides a reference line, a relationship (parallel/perpendicular), and a point.", zh: "题目给出参考直线、关系（平行/垂直）和一点。" },
        steps: [
          { en: "Find the reference line's slope $m_0$", zh: "求参考直线的斜率 $m_0$" },
          { en: "Parallel ⇒ new slope is $m_0$; perpendicular ⇒ new slope is $-\\frac{1}{m_0}$", zh: "平行 ⇒ 新斜率为 $m_0$；垂直 ⇒ 新斜率为 $-\\frac{1}{m_0}$" },
          { en: "Apply point-slope form with the new slope and given point", zh: "用新斜率与给定点代入点斜式" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the equation of the line perpendicular to $y = \\tfrac{1}{2}x + 3$ passing through $(4, -1)$.", zh: "求过 $(4, -1)$ 且垂直于 $y = \\tfrac{1}{2}x + 3$ 的直线方程。" },
        commonTraps: [
          { en: "Forgetting the negative sign in negative reciprocal slopes", zh: "求负倒数斜率时漏掉负号" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-1-3-9",
        title: { en: "Linear Modeling — Cost, Depreciation, or Rate Problems", zh: "线性建模——成本、折旧或速率问题" },
        description: { en: "Build a linear equation from a verbal description and use it to predict or interpret values.", zh: "由文字描述建立线性方程，并用于预测或解释。" },
        howToRecognize: { en: "Word problem describes a constant rate of change (per unit, per year, etc.).", zh: "应用题描述恒定变化率（每单位、每年等）。" },
        steps: [
          { en: "Identify independent and dependent variables", zh: "确定自变量与因变量" },
          { en: "Identify slope (rate) and a known $(x, y)$ point", zh: "确定斜率（速率）与一个已知点 $(x, y)$" },
          { en: "Write the equation in slope-intercept or point-slope form", zh: "写出斜截式或点斜式" },
          { en: "Use it to answer the question (predict, interpret, find break-even, etc.)", zh: "用方程回答问题（预测、解释、求平衡点等）" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A printer costs \\$240 plus \\$0.05 per page printed. Write a linear equation for total cost $C$ as a function of pages $p$, and find the cost of $1{,}500$ pages.", zh: "打印机成本为 \\$240 加上每页 \\$0.05。写出总成本 $C$ 关于页数 $p$ 的线性方程，并求 $1{,}500$ 页的成本。" },
        commonTraps: [
          { en: "Confusing the fixed cost (intercept) with the rate (slope)", zh: "把固定成本（截距）与速率（斜率）弄反" },
          { en: "Mismatched units (per minute vs per hour, etc.)", zh: "单位不一致（每分钟 vs 每小时等）" },
        ],
      },
      {
        id: "pt-1-3-10",
        title: { en: "Find Intersection of Two Lines", zh: "求两直线交点" },
        description: { en: "Solve a system of two linear equations to find the point where two lines meet.", zh: "解二元一次方程组求两条直线的交点。" },
        howToRecognize: { en: "Two line equations are given; problem asks for the intersection.", zh: "给出两条直线方程；求交点。" },
        steps: [
          { en: "Solve one equation for $y$ (or use elimination)", zh: "解出某方程的 $y$（或用消元法）" },
          { en: "Substitute into the other equation; solve for $x$", zh: "代入另一方程求 $x$" },
          { en: "Back-substitute to find $y$", zh: "回代求 $y$" },
          { en: "Verify the point satisfies both equations", zh: "验证交点同时满足两方程" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find the intersection of $y = 2x - 3$ and $3x + y = 12$.", zh: "求 $y = 2x - 3$ 与 $3x + y = 12$ 的交点。" },
        commonTraps: [
          { en: "Reporting only the $x$-value (must give the full ordered pair)", zh: "只给出 $x$ 值（应给完整有序对）" },
          { en: "Parallel lines have no intersection — must recognize when slopes are equal", zh: "平行线无交点——斜率相等时需识别" },
        ],
      },
    ],
  },
  {
    id: "1-4",
    chapterId: "ch-1",
    number: "1.4",
    title: { en: "Functions", zh: "函数" },
    description: {
      en: "Determine whether a relation is a function, evaluate functions, and find domains.",
      zh: "判断关系是否为函数，求函数值，并确定函数的定义域。",
    },
    learningGoals: [
      { en: "Determine whether a relation defines $y$ as a function of $x$", zh: "判断关系是否将 $y$ 定义为 $x$ 的函数" },
      { en: "Use function notation $f(x)$ to evaluate functions", zh: "使用函数记号 $f(x)$ 求函数值" },
      { en: "Find the domain of a function from its formula", zh: "由公式求函数的定义域" },
      { en: "Build a function that models a real-world situation", zh: "建立反映实际情境的函数" },
    ],
    keyConcepts: [
      {
        id: "kc-1-4-1",
        title: { en: "Definition of a Function", zh: "函数的定义" },
        explanation: {
          en: "A function from $X$ to $Y$ assigns to each input $x \\in X$ exactly ONE output $y \\in Y$. The set of all valid inputs is the domain; the set of all outputs is the range. Vertical Line Test: a graph represents $y$ as a function of $x$ iff every vertical line crosses it at most once.",
          zh: "从 $X$ 到 $Y$ 的函数为每个输入 $x \\in X$ 指定唯一的输出 $y \\in Y$。所有有效输入构成定义域；所有输出构成值域。铅直线检验：图像将 $y$ 表示为 $x$ 的函数当且仅当任意铅直线与图像至多交于一点。",
        },
        whenToUse: { en: "Whenever you must decide if a relation is a function, or interpret graphs", zh: "判断关系是否为函数或解释图像时" },
        commonMistake: { en: "Allowing two outputs for the same input (e.g., $y^2 = x$ is NOT a function of $x$)", zh: "同一输入对应两个输出（如 $y^2 = x$ 不是 $x$ 的函数）" },
        example: { en: "$\\{(1,2), (2,3), (3,4)\\}$ is a function. $\\{(1,2), (1,3)\\}$ is NOT (input $1$ has two outputs).", zh: "$\\{(1,2), (2,3), (3,4)\\}$ 是函数。$\\{(1,2), (1,3)\\}$ 不是（输入 $1$ 对应两个输出）。" },
      },
      {
        id: "kc-1-4-2",
        title: { en: "Function Notation and Evaluation", zh: "函数记号与求值" },
        explanation: {
          en: "$f(x)$ reads \"$f$ of $x$\" — it is the output of $f$ when the input is $x$. To evaluate, substitute the input wherever $x$ appears in the formula and simplify. The notation $f(a + h)$ means substitute $(a + h)$ for $x$ — keep parentheses.",
          zh: "$f(x)$ 读作\"$f$ 在 $x$ 处的值\"——即输入为 $x$ 时 $f$ 的输出。求值时把输入代入公式中所有 $x$ 的位置并化简。$f(a + h)$ 表示用 $(a + h)$ 替换 $x$——务必保留括号。",
        },
        whenToUse: { en: "To compute output values, build difference quotients, or compose functions", zh: "计算输出值、构造差商或函数复合时" },
        commonMistake: { en: "Reading $f(x+h)$ as $f(x) + f(h)$ (functions are not generally additive)", zh: "把 $f(x+h)$ 当作 $f(x) + f(h)$（函数一般不具备可加性）" },
        example: { en: "If $f(x) = x^2 + 1$, then $f(3) = 10$ and $f(a+1) = (a+1)^2 + 1$", zh: "若 $f(x) = x^2 + 1$，则 $f(3) = 10$，$f(a+1) = (a+1)^2 + 1$" },
      },
      {
        id: "kc-1-4-3",
        title: { en: "Domain Restrictions", zh: "定义域的限制" },
        explanation: {
          en: "The domain is all real $x$ for which $f(x)$ is defined. Common restrictions: (1) denominators cannot equal zero; (2) expressions under even roots must be $\\geq 0$; (3) arguments of logs must be $> 0$. Combine restrictions as an intersection.",
          zh: "定义域是所有使 $f(x)$ 有意义的实数 $x$。常见限制：(1) 分母不为零；(2) 偶次根号下的式子必须 $\\geq 0$；(3) 对数的真数必须 $> 0$。多个限制取交集。",
        },
        whenToUse: { en: "For any function involving fractions, even roots, or logarithms", zh: "凡涉及分数、偶次根号或对数的函数" },
        commonMistake: { en: "Allowing zero in the denominator, or negative values under a square root", zh: "未排除使分母为零或使根号内为负的值" },
        example: { en: "$f(x) = \\frac{\\sqrt{x - 2}}{x - 5}$: domain is $[2, 5) \\cup (5, \\infty)$", zh: "$f(x) = \\frac{\\sqrt{x - 2}}{x - 5}$：定义域为 $[2, 5) \\cup (5, \\infty)$" },
      },
    ],
    formulas: [
      {
        id: "f-1-4-1",
        name: { en: "Function Notation", zh: "函数记号" },
        formula: "y = f(x)",
        variables: [
          { en: "$x$ — input (independent variable)", zh: "$x$ — 输入（自变量）" },
          { en: "$y = f(x)$ — output (dependent variable)", zh: "$y = f(x)$ — 输出（因变量）" },
        ],
        whenToUse: { en: "Standard way to express a functional relationship", zh: "表示函数关系的标准方式" },
        commonProblemTypes: [
          { en: "Evaluate $f$ at specific values", zh: "求 $f$ 在特定值处的值" },
          { en: "Compute $f(a + h)$ for use in difference quotients", zh: "为差商求 $f(a + h)$" },
        ],
        example: { en: "$f(x) = 2x - 1 \\Rightarrow f(5) = 9$, $f(t+1) = 2t + 1$", zh: "$f(x) = 2x - 1 \\Rightarrow f(5) = 9$，$f(t+1) = 2t + 1$" },
      },
      {
        id: "f-1-4-2",
        name: { en: "Difference Quotient", zh: "差商" },
        formula: "\\frac{f(x+h) - f(x)}{h}, \\quad h \\neq 0",
        variables: [
          { en: "$f$ — the function", zh: "$f$ — 函数" },
          { en: "$h$ — change in input (must be nonzero)", zh: "$h$ — 输入的变化量（不为零）" },
        ],
        whenToUse: { en: "Average rate of change of $f$ over the interval $[x, x+h]$; foundation for the derivative", zh: "$f$ 在 $[x, x+h]$ 上的平均变化率；导数的基础" },
        commonProblemTypes: [
          { en: "Simplify the difference quotient for a polynomial $f$", zh: "化简多项式 $f$ 的差商" },
          { en: "Setup for limit-based derivative computation", zh: "为基于极限的导数计算做准备" },
        ],
        example: { en: "$f(x) = x^2 \\Rightarrow \\frac{f(x+h) - f(x)}{h} = 2x + h$", zh: "$f(x) = x^2 \\Rightarrow \\frac{f(x+h) - f(x)}{h} = 2x + h$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-1-4-1",
        title: { en: "Decide Whether a Relation Is a Function", zh: "判断关系是否为函数" },
        description: { en: "Inspect a set of ordered pairs, a table, or a graph and decide if each input has exactly one output.", zh: "检查有序对集合、表格或图像，判断每个输入是否对应唯一输出。" },
        howToRecognize: { en: "A relation is given (set, table, equation, or graph); problem asks if it is a function.", zh: "给定关系（集合、表格、方程或图像）；问是否为函数。" },
        steps: [
          { en: "For a set or table: check no $x$-value repeats with different $y$-values", zh: "集合或表格：检查无 $x$ 值重复且对应不同 $y$ 值" },
          { en: "For a graph: apply the Vertical Line Test", zh: "图像：用铅直线检验" },
          { en: "For an equation: solve for $y$ — if there are $\\pm$ outputs, it is not a function", zh: "方程：解出 $y$——若有 $\\pm$ 两支则非函数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Is the relation $\\{(1, 2), (2, 4), (3, 2), (1, 5)\\}$ a function?", zh: "关系 $\\{(1, 2), (2, 4), (3, 2), (1, 5)\\}$ 是函数吗？" },
        commonTraps: [
          { en: "Allowing different inputs to share an output (this IS still a function)", zh: "误以为不同输入共用一个输出就不是函数（其实仍是函数）" },
        ],
      },
      {
        id: "pt-1-4-2",
        title: { en: "Evaluate a Function at a Specific Value", zh: "在指定值处求函数值" },
        description: { en: "Substitute a number for the variable and simplify.", zh: "用数代换变量并化简。" },
        howToRecognize: { en: "A function $f$ and a value $a$ are given; problem asks for $f(a)$.", zh: "给出函数 $f$ 与值 $a$；要求 $f(a)$。" },
        steps: [
          { en: "Replace every occurrence of $x$ with the input value (use parentheses)", zh: "把所有 $x$ 替换为输入值（加括号）" },
          { en: "Simplify using order of operations", zh: "按运算顺序化简" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "If $f(x) = 3x^2 - 5x + 2$, find $f(-2)$.", zh: "若 $f(x) = 3x^2 - 5x + 2$，求 $f(-2)$。" },
        commonTraps: [
          { en: "Squaring without parentheses: writing $-2^2 = -4$ instead of $(-2)^2 = 4$", zh: "未加括号就平方：把 $-2^2$ 当作 $-4$，应为 $(-2)^2 = 4$" },
        ],
      },
      {
        id: "pt-1-4-3",
        title: { en: "Find Domain of a Polynomial or Simple Rational Function", zh: "求多项式或简单有理函数的定义域" },
        description: { en: "State all real numbers (polynomials) or exclude denominator zeros (rationals).", zh: "多项式：所有实数；有理函数：排除使分母为零的值。" },
        howToRecognize: { en: "Function is polynomial or rational with linear/quadratic denominator.", zh: "函数为多项式，或分母为一次/二次的有理函数。" },
        steps: [
          { en: "Polynomial: domain is all real numbers, $(-\\infty, \\infty)$", zh: "多项式：定义域为全体实数 $(-\\infty, \\infty)$" },
          { en: "Rational: set denominator equal to zero, solve, exclude those values", zh: "有理函数：令分母为零求解，排除这些值" },
          { en: "Write the answer in interval notation", zh: "用区间记号给出答案" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the domain of $f(x) = \\frac{x + 2}{x^2 - 9}$.", zh: "求 $f(x) = \\frac{x + 2}{x^2 - 9}$ 的定义域。" },
        commonTraps: [
          { en: "Forgetting both roots when the denominator factors", zh: "分母可分解时漏掉某个零根" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-1-4-4",
        title: { en: "Find Domain Involving Square Roots", zh: "含平方根函数的定义域" },
        description: { en: "Require the radicand (expression under the root) to be $\\geq 0$.", zh: "要求被开方式 $\\geq 0$。" },
        howToRecognize: { en: "Function contains $\\sqrt{\\cdot}$ or any even-index root.", zh: "函数含 $\\sqrt{\\cdot}$ 或其它偶次根号。" },
        steps: [
          { en: "Set the radicand $\\geq 0$", zh: "令被开方式 $\\geq 0$" },
          { en: "Solve the inequality (use sign analysis if quadratic)", zh: "求解不等式（二次时用符号分析）" },
          { en: "Combine with any other restrictions (denominators, etc.)", zh: "与其他限制（分母等）取交集" },
          { en: "Express in interval notation", zh: "用区间记号表示" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the domain of $f(x) = \\sqrt{2x - 6}$.", zh: "求 $f(x) = \\sqrt{2x - 6}$ 的定义域。" },
        commonTraps: [
          { en: "Allowing radicand $> 0$ instead of $\\geq 0$ (zero is fine inside a square root)", zh: "把条件写成被开方式 $> 0$（应为 $\\geq 0$，等于零是允许的）" },
        ],
      },
      {
        id: "pt-1-4-5",
        title: { en: "Apply the Vertical Line Test", zh: "应用铅直线检验" },
        description: { en: "Decide from a graph whether $y$ is a function of $x$.", zh: "由图像判断 $y$ 是否为 $x$ 的函数。" },
        howToRecognize: { en: "A graph is shown; problem asks whether it represents a function of $x$.", zh: "给出图像；问是否表示 $x$ 的函数。" },
        steps: [
          { en: "Imagine sweeping a vertical line across the graph", zh: "想象铅直线在图像上左右扫动" },
          { en: "If any vertical position crosses the graph more than once, it is NOT a function", zh: "若某铅直位置与图像交于多于一点，则不是函数" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Does the graph of $x = y^2$ represent $y$ as a function of $x$?", zh: "$x = y^2$ 的图像是否将 $y$ 表为 $x$ 的函数？" },
        commonTraps: [
          { en: "Confusing horizontal line test (used for one-to-one) with vertical line test", zh: "把水平线检验（用于一对一）与铅直线检验混淆" },
        ],
      },
      {
        id: "pt-1-4-6",
        title: { en: "Evaluate a Piecewise Function", zh: "求分段函数的值" },
        description: { en: "Choose the correct branch based on the input, then evaluate.", zh: "根据输入选对正确的分支再求值。" },
        howToRecognize: { en: "Function defined by cases (different formulas on different intervals).", zh: "函数按区间分段定义。" },
        steps: [
          { en: "Read each branch's domain condition", zh: "读出各分支的定义条件" },
          { en: "Determine which branch applies to the given input", zh: "判断给定输入属于哪一分支" },
          { en: "Substitute into that branch and simplify", zh: "代入该分支并化简" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "If $f(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x + 1 & x \\geq 0 \\end{cases}$, find $f(-3)$ and $f(4)$.", zh: "若 $f(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x + 1 & x \\geq 0 \\end{cases}$，求 $f(-3)$ 与 $f(4)$。" },
        commonTraps: [
          { en: "Choosing the wrong branch when input is on the boundary", zh: "输入恰好在分界点时选错分支" },
        ],
      },
      {
        id: "pt-1-4-7",
        title: { en: "Compute and Simplify the Difference Quotient", zh: "计算并化简差商" },
        description: { en: "Substitute $f(x+h)$ and simplify $\\frac{f(x+h) - f(x)}{h}$ — the $h$ in the denominator should cancel.", zh: "代入 $f(x+h)$ 并化简 $\\frac{f(x+h) - f(x)}{h}$——分母的 $h$ 应可消去。" },
        howToRecognize: { en: "Problem asks for the difference quotient (or for an average rate of change).", zh: "题目要求差商（或平均变化率）。" },
        steps: [
          { en: "Compute $f(x+h)$ by substituting $(x+h)$ for $x$ everywhere", zh: "用 $(x+h)$ 替换所有 $x$ 求 $f(x+h)$" },
          { en: "Subtract $f(x)$ and combine terms", zh: "减去 $f(x)$ 并合并同类项" },
          { en: "Factor out $h$ from the numerator", zh: "从分子中提取 $h$" },
          { en: "Cancel $h$ with the denominator", zh: "与分母的 $h$ 消去" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find and simplify $\\frac{f(x+h) - f(x)}{h}$ for $f(x) = 3x^2 - 2x$.", zh: "对 $f(x) = 3x^2 - 2x$ 求并化简 $\\frac{f(x+h) - f(x)}{h}$。" },
        commonTraps: [
          { en: "Expanding $(x+h)^2$ as $x^2 + h^2$ (missing the $2xh$ term)", zh: "把 $(x+h)^2$ 展开为 $x^2 + h^2$（漏掉 $2xh$）" },
          { en: "Canceling $h$ before factoring it out", zh: "未提取 $h$ 就消去" },
        ],
      },
      {
        id: "pt-1-4-8",
        title: { en: "Set Up a Function from a Word Problem", zh: "由应用题建立函数" },
        description: { en: "Translate a verbal description into $f(x)$.", zh: "把文字描述翻译为 $f(x)$。" },
        howToRecognize: { en: "Word problem provides relationships (geometric, financial, physical) to express one quantity in terms of another.", zh: "应用题给出几何、财务或物理关系，要求一个量表为另一个量的函数。" },
        steps: [
          { en: "Identify the input variable and the quantity to be expressed", zh: "确定输入变量与要表示的量" },
          { en: "Use the given relationship (formula or constraint) to eliminate other variables", zh: "用给定关系（公式或约束）消去其它变量" },
          { en: "State the function and its domain in context", zh: "给出函数并结合情境写出定义域" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A rectangle has perimeter $40$ ft. Express the area $A$ as a function of the width $w$, and state its domain.", zh: "矩形周长为 $40$ ft。把面积 $A$ 表示为宽 $w$ 的函数，并给出定义域。" },
        commonTraps: [
          { en: "Forgetting to restrict the domain to physically meaningful values (e.g., $w > 0$)", zh: "忘记把定义域限制在有物理意义的范围（如 $w > 0$）" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-1-4-9",
        title: { en: "Domain of a Combined Function (Radicals + Rationals)", zh: "复合限制函数的定义域（含根号与分母）" },
        description: { en: "Find domain when MULTIPLE restrictions apply (e.g., a radical numerator over a rational denominator).", zh: "当存在多个限制（如分子含根号、分母不为零）时求定义域。" },
        howToRecognize: { en: "Function combines square roots, fractions, and/or logs in non-trivial ways.", zh: "函数同时含根号、分数或对数，且组合复杂。" },
        steps: [
          { en: "List every restriction separately", zh: "分别列出所有限制" },
          { en: "Solve each as an inequality or equation", zh: "把每个限制解为不等式或方程" },
          { en: "Take the INTERSECTION of all valid sets", zh: "对所有有效集合取交集" },
          { en: "Express the result in interval notation", zh: "用区间记号给出答案" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find the domain of $f(x) = \\frac{\\sqrt{x + 4}}{x^2 - 4}$.", zh: "求 $f(x) = \\frac{\\sqrt{x + 4}}{x^2 - 4}$ 的定义域。" },
        commonTraps: [
          { en: "Taking the union instead of the intersection — restrictions must ALL hold", zh: "误取并集而非交集——所有限制必须同时成立" },
          { en: "Forgetting to exclude denominator zeros even when they satisfy the radicand condition", zh: "忘记排除使分母为零的值（即使满足被开方式条件）" },
        ],
      },
      {
        id: "pt-1-4-10",
        title: { en: "Build and Use a Function — Modeling Application", zh: "构建并使用函数——建模应用" },
        description: { en: "Build a function from a real-world scenario and use it to optimize, compare, or interpret a quantity.", zh: "由实际情境构建函数，并用它进行优化、比较或解释某量。" },
        howToRecognize: { en: "Word problem requires both setting up a function AND using it (compute, compare to a value, etc.).", zh: "应用题既要建立函数，又要使用函数（计算、比较等）。" },
        steps: [
          { en: "Identify variables, constants, and the constraint linking them", zh: "确定变量、常量及连接它们的约束" },
          { en: "Express the target quantity as a function of one variable", zh: "把目标量表示为单变量函数" },
          { en: "State a sensible domain", zh: "给出合理的定义域" },
          { en: "Evaluate or interpret as the question asks", zh: "按题意求值或解释" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "An open-top box is made from a $20 \\times 30$ in sheet by cutting squares of side $x$ from each corner and folding up the sides. Express the volume $V$ as a function of $x$, and find $V(3)$.", zh: "用一张 $20 \\times 30$ in 的板材，从四角各剪去边长 $x$ 的小正方形再折起作开口盒。把体积 $V$ 表示为 $x$ 的函数，并求 $V(3)$。" },
        commonTraps: [
          { en: "Wrong domain — $x$ must be positive AND less than half the smaller side", zh: "定义域错误——$x$ 应为正且小于较短边的一半" },
          { en: "Mixing up dimensions when subtracting $2x$", zh: "减去 $2x$ 时尺寸搞错" },
        ],
      },
    ],
  },
  {
    id: "1-5",
    chapterId: "ch-1",
    number: "1.5",
    title: { en: "Analyzing Graphs of Functions", zh: "函数图像分析" },
    description: {
      en: "Use graphs to find domain, range, intervals of increase/decrease, and relative extrema.",
      zh: "通过图像求函数的定义域、值域、单调区间以及相对极值。",
    },
    learningGoals: [
      { en: "Read domain and range from a graph", zh: "由图像读出定义域与值域" },
      { en: "Identify intervals where a function is increasing, decreasing, or constant", zh: "识别函数递增、递减或常值的区间" },
      { en: "Locate relative maxima and minima", zh: "定位相对极大值与极小值" },
      { en: "Test for even and odd symmetry algebraically and graphically", zh: "用代数与图像方法检验偶函数与奇函数对称性" },
    ],
    keyConcepts: [
      {
        id: "kc-1-5-1",
        title: { en: "Domain and Range from a Graph", zh: "由图像求定义域与值域" },
        explanation: {
          en: "The domain of $f$ is the set of all $x$-values for which the graph exists; the range is the set of all $y$-values reached. Read horizontally for domain, vertically for range. Use brackets $[]$ for included endpoints, parentheses $()$ for excluded.",
          zh: "$f$ 的定义域是图像存在的所有 $x$ 值集合；值域是所有取到的 $y$ 值集合。横向看定义域，纵向看值域。用方括号 $[]$ 表示包含端点，圆括号 $()$ 表示不含。",
        },
        whenToUse: { en: "When a graph is given and the question asks for domain and/or range", zh: "给出图像并要求定义域或值域时" },
        commonMistake: { en: "Confusing domain (horizontal extent) with range (vertical extent)", zh: "把定义域（横向范围）与值域（纵向范围）弄反" },
        example: { en: "Graph from $x = -2$ to $x = 5$ reaching $y$ from $0$ to $9$: domain $[-2, 5]$, range $[0, 9]$", zh: "图像从 $x = -2$ 到 $x = 5$，$y$ 取值 $0$ 到 $9$：定义域 $[-2, 5]$，值域 $[0, 9]$" },
      },
      {
        id: "kc-1-5-2",
        title: { en: "Increasing, Decreasing, and Constant Intervals", zh: "递增、递减与常值区间" },
        explanation: {
          en: "$f$ is increasing on an interval if $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$ (graph rises). Decreasing if values fall; constant if values stay the same. Always describe using OPEN intervals on the $x$-axis.",
          zh: "若 $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$（图像上升），则 $f$ 在该区间递增。若下降则递减；若不变则为常值。始终用 $x$ 轴上的开区间描述。",
        },
        whenToUse: { en: "Describing the behavior of a function across its domain", zh: "描述函数在定义域上的行为" },
        commonMistake: { en: "Reporting intervals on the $y$-axis instead of the $x$-axis; using closed intervals at peaks/valleys", zh: "在 $y$ 轴而非 $x$ 轴上报区间；在峰谷处使用闭区间" },
        example: { en: "$f(x) = x^2$: decreasing on $(-\\infty, 0)$, increasing on $(0, \\infty)$", zh: "$f(x) = x^2$：在 $(-\\infty, 0)$ 上递减，在 $(0, \\infty)$ 上递增" },
      },
      {
        id: "kc-1-5-3",
        title: { en: "Even and Odd Functions", zh: "偶函数与奇函数" },
        explanation: {
          en: "$f$ is EVEN if $f(-x) = f(x)$ for all $x$ in domain — graph symmetric about $y$-axis. $f$ is ODD if $f(-x) = -f(x)$ — graph symmetric about origin. Most functions are neither.",
          zh: "若对定义域中所有 $x$ 都有 $f(-x) = f(x)$，则 $f$ 为偶函数——图像关于 $y$ 轴对称。若 $f(-x) = -f(x)$，则为奇函数——图像关于原点对称。大多数函数既非偶也非奇。",
        },
        whenToUse: { en: "To exploit symmetry when graphing, integrating, or simplifying", zh: "绘图、积分或化简中利用对称性" },
        commonMistake: { en: "Concluding \"odd\" when only some values satisfy $f(-x) = -f(x)$ — must hold for ALL $x$", zh: "仅部分 $x$ 满足 $f(-x) = -f(x)$ 就判定为奇——须对所有 $x$ 成立" },
        example: { en: "$f(x) = x^4$ is even; $f(x) = x^3$ is odd; $f(x) = x^2 + x$ is neither", zh: "$f(x) = x^4$ 为偶；$f(x) = x^3$ 为奇；$f(x) = x^2 + x$ 既非偶也非奇" },
      },
    ],
    formulas: [
      {
        id: "f-1-5-1",
        name: { en: "Average Rate of Change", zh: "平均变化率" },
        formula: "\\frac{f(b) - f(a)}{b - a}",
        variables: [
          { en: "$a$, $b$ — endpoints of the interval $(a < b)$", zh: "$a$、$b$ — 区间端点（$a < b$）" },
          { en: "$f$ — the function", zh: "$f$ — 函数" },
        ],
        whenToUse: { en: "Quantify how fast $f$ changes over $[a, b]$ — slope of the secant line", zh: "量化 $f$ 在 $[a, b]$ 上的变化速度——割线斜率" },
        commonProblemTypes: [
          { en: "Compute average velocity, growth rate, or change in cost", zh: "求平均速度、增长率或成本变化" },
        ],
        example: { en: "$f(x) = x^2$, $a = 1, b = 3$: $\\frac{9 - 1}{3 - 1} = 4$", zh: "$f(x) = x^2$，$a = 1, b = 3$：$\\frac{9 - 1}{3 - 1} = 4$" },
      },
      {
        id: "f-1-5-2",
        name: { en: "Even Function Test", zh: "偶函数检验" },
        formula: "f(-x) = f(x) \\quad \\text{for all } x \\in \\text{domain}",
        variables: [
          { en: "$f$ — function being tested", zh: "$f$ — 待检验的函数" },
        ],
        whenToUse: { en: "To verify $y$-axis symmetry algebraically", zh: "代数验证关于 $y$ 轴的对称性" },
        commonProblemTypes: [
          { en: "Classify a function as even, odd, or neither", zh: "判断函数是偶、奇还是都不是" },
        ],
        example: { en: "$f(x) = x^2 + 1$: $f(-x) = x^2 + 1 = f(x)$ ⇒ even", zh: "$f(x) = x^2 + 1$：$f(-x) = x^2 + 1 = f(x)$ ⇒ 偶" },
      },
      {
        id: "f-1-5-3",
        name: { en: "Odd Function Test", zh: "奇函数检验" },
        formula: "f(-x) = -f(x) \\quad \\text{for all } x \\in \\text{domain}",
        variables: [
          { en: "$f$ — function being tested", zh: "$f$ — 待检验的函数" },
        ],
        whenToUse: { en: "To verify origin symmetry algebraically", zh: "代数验证关于原点的对称性" },
        commonProblemTypes: [
          { en: "Classify a function as even, odd, or neither", zh: "判断函数是偶、奇还是都不是" },
        ],
        example: { en: "$f(x) = x^3 - x$: $f(-x) = -x^3 + x = -(x^3 - x) = -f(x)$ ⇒ odd", zh: "$f(x) = x^3 - x$：$f(-x) = -x^3 + x = -(x^3 - x) = -f(x)$ ⇒ 奇" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-1-5-1",
        title: { en: "Find Domain and Range from a Graph", zh: "由图像求定义域与值域" },
        description: { en: "Read off the leftmost/rightmost $x$ and lowest/highest $y$ from a given graph.", zh: "从图像读出最左/最右的 $x$ 与最低/最高的 $y$。" },
        howToRecognize: { en: "A graph is shown; problem asks for domain and/or range.", zh: "给出图像；要求定义域或值域。" },
        steps: [
          { en: "Project the graph onto the $x$-axis — the shadow is the domain", zh: "把图像投影到 $x$ 轴——投影即定义域" },
          { en: "Project onto the $y$-axis — the shadow is the range", zh: "投影到 $y$ 轴——即值域" },
          { en: "Note open/closed endpoints (open dot vs filled dot)", zh: "注意端点开闭（空心圆 vs 实心圆）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "A graph shows $f$ defined from $x = -3$ (closed) to $x = 4$ (open), with $y$ values from $-1$ to $7$ (both closed). State domain and range.", zh: "图像显示 $f$ 从 $x = -3$（闭）到 $x = 4$（开），$y$ 取值 $-1$ 到 $7$（均闭）。给出定义域与值域。" },
        commonTraps: [
          { en: "Reporting endpoints in the wrong axis (domain on $y$-axis)", zh: "在错误的轴上报端点（在 $y$ 轴上报定义域）" },
        ],
      },
      {
        id: "pt-1-5-2",
        title: { en: "Identify Increasing / Decreasing Intervals from a Graph", zh: "由图像识别递增/递减区间" },
        description: { en: "List the open $x$-intervals on which the graph rises, falls, or stays flat.", zh: "列出图像上升、下降或保持水平的开区间（关于 $x$）。" },
        howToRecognize: { en: "Graph is shown; problem asks for behavior intervals.", zh: "给出图像；要求行为区间。" },
        steps: [
          { en: "Find $x$-coordinates of all turning points and endpoints", zh: "找出所有转折点与端点的 $x$ 坐标" },
          { en: "Between consecutive critical $x$ values, classify as increasing, decreasing, or constant", zh: "在相邻关键 $x$ 值之间，分类为递增、递减或常值" },
          { en: "List using open intervals on the $x$-axis", zh: "用 $x$ 轴上的开区间表示" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "A graph rises from $x = -2$ to $x = 1$, falls from $x = 1$ to $x = 4$, then rises again to $x = 6$. State the intervals.", zh: "图像从 $x = -2$ 到 $x = 1$ 上升，$x = 1$ 到 $x = 4$ 下降，再到 $x = 6$ 上升。给出各区间。" },
        commonTraps: [
          { en: "Including the endpoints (turning points) in the intervals", zh: "把端点（转折点）包含进区间" },
        ],
      },
      {
        id: "pt-1-5-3",
        title: { en: "Locate Relative Maxima and Minima", zh: "定位相对极大与极小" },
        description: { en: "From a graph, identify the points where the function changes from increasing to decreasing (max) or vice versa (min).", zh: "从图像找出函数由增变减的点（极大）与由减变增的点（极小）。" },
        howToRecognize: { en: "Graph is shown; problem asks for relative or local extrema.", zh: "给出图像；要求相对（局部）极值。" },
        steps: [
          { en: "Find peaks (relative max) and valleys (relative min)", zh: "找出峰（相对极大）与谷（相对极小）" },
          { en: "Report each as an ordered pair $(x, y)$", zh: "每个写成有序对 $(x, y)$" },
          { en: "Distinguish from absolute extrema (global highest/lowest)", zh: "与绝对极值（整体最高/低点）区分" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "From a sketched parabola opening upward with vertex at $(2, -3)$: state any relative extrema.", zh: "从一开口向上、顶点 $(2, -3)$ 的抛物线草图：写出相对极值。" },
        commonTraps: [
          { en: "Reporting only the $x$-value (must give the full $(x, y)$)", zh: "只报 $x$ 值（应给完整 $(x, y)$）" },
          { en: "Confusing relative with absolute extrema", zh: "把相对极值与绝对极值混淆" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-1-5-4",
        title: { en: "Compute Average Rate of Change", zh: "求平均变化率" },
        description: { en: "Use $\\frac{f(b) - f(a)}{b - a}$ to find the slope of the secant line between two points on the graph.", zh: "用 $\\frac{f(b) - f(a)}{b - a}$ 求图像上两点间割线斜率。" },
        howToRecognize: { en: "Problem asks for average rate of change, average velocity, or secant slope on $[a, b]$.", zh: "题目要求 $[a, b]$ 上的平均变化率、平均速度或割线斜率。" },
        steps: [
          { en: "Evaluate $f(a)$ and $f(b)$", zh: "求 $f(a)$ 与 $f(b)$" },
          { en: "Apply $\\frac{f(b) - f(a)}{b - a}$", zh: "代入 $\\frac{f(b) - f(a)}{b - a}$" },
          { en: "Simplify and include units if applicable", zh: "化简并标注单位（如适用）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "For $f(x) = x^2 + 2x$, find the average rate of change on $[1, 4]$.", zh: "对 $f(x) = x^2 + 2x$，求 $[1, 4]$ 上的平均变化率。" },
        commonTraps: [
          { en: "Reversing $a$ and $b$ in the denominator", zh: "把分母中的 $a$ 与 $b$ 弄反" },
        ],
      },
      {
        id: "pt-1-5-5",
        title: { en: "Test Even / Odd Algebraically", zh: "代数检验偶函数/奇函数" },
        description: { en: "Substitute $-x$ and compare to $f(x)$ and $-f(x)$.", zh: "代入 $-x$ 并与 $f(x)$、$-f(x)$ 比较。" },
        howToRecognize: { en: "Equation is given; problem asks if $f$ is even, odd, or neither.", zh: "给出方程；问 $f$ 是偶、奇还是都不是。" },
        steps: [
          { en: "Compute $f(-x)$ by substituting $-x$ for $x$", zh: "用 $-x$ 替换 $x$ 求 $f(-x)$" },
          { en: "If $f(-x) = f(x)$ for ALL $x$ ⇒ even", zh: "若对所有 $x$，$f(-x) = f(x)$ ⇒ 偶" },
          { en: "If $f(-x) = -f(x)$ for ALL $x$ ⇒ odd", zh: "若对所有 $x$，$f(-x) = -f(x)$ ⇒ 奇" },
          { en: "Otherwise neither", zh: "否则都不是" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Determine whether $f(x) = x^4 - 3x^2 + 1$ is even, odd, or neither.", zh: "判断 $f(x) = x^4 - 3x^2 + 1$ 是偶、奇还是都不是。" },
        commonTraps: [
          { en: "Skipping simplification of $f(-x)$ before comparing", zh: "未化简 $f(-x)$ 就比较" },
          { en: "Calling something \"odd\" because it's not even (must verify the odd condition)", zh: "因为不是偶就认定为奇（须验证奇条件）" },
        ],
      },
      {
        id: "pt-1-5-6",
        title: { en: "Read Function Values from a Graph", zh: "由图像读函数值" },
        description: { en: "Given a graph, find $f(a)$ for specific inputs, or solve $f(x) = c$.", zh: "由图像求指定输入 $a$ 处的 $f(a)$，或解 $f(x) = c$。" },
        howToRecognize: { en: "A graph is shown; problem asks for $f$ at certain $x$, or all $x$ where $f$ equals a given value.", zh: "给出图像；要求某些 $x$ 处的 $f$，或 $f$ 取某值的所有 $x$。" },
        steps: [
          { en: "For $f(a)$: locate $x = a$, read the $y$-value", zh: "求 $f(a)$：定位 $x = a$，读出 $y$ 值" },
          { en: "For $f(x) = c$: find all $x$ where the horizontal line $y = c$ meets the graph", zh: "解 $f(x) = c$：找水平线 $y = c$ 与图像所有交点的 $x$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "From the given graph of $f$, find $f(0)$ and all $x$ such that $f(x) = 2$.", zh: "由 $f$ 的图像，求 $f(0)$ 与所有满足 $f(x) = 2$ 的 $x$。" },
        commonTraps: [
          { en: "Reporting only one solution when multiple $x$ satisfy $f(x) = c$", zh: "$f(x) = c$ 有多解时只报一个" },
        ],
      },
      {
        id: "pt-1-5-7",
        title: { en: "Find Relative Extrema Using Graphing Technology", zh: "用作图工具求相对极值" },
        description: { en: "Use a calculator or graphing tool to approximate locations of relative max/min.", zh: "用计算器或作图工具近似求相对极大/极小位置。" },
        howToRecognize: { en: "Function is too complex to find extrema by hand; problem asks for approximate $(x, y)$.", zh: "函数复杂难以手算；要求近似 $(x, y)$。" },
        steps: [
          { en: "Graph the function and identify peaks/valleys visually", zh: "作图并目测峰/谷" },
          { en: "Use \"maximum\" or \"minimum\" feature to refine the location", zh: "使用\"最大值\"或\"最小值\"功能精细定位" },
          { en: "Report each extremum as an $(x, y)$ pair, rounded as instructed", zh: "按指定精度把每个极值写成 $(x, y)$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Use a graphing utility to approximate the relative maximum of $f(x) = -x^3 + 3x^2 + 2$.", zh: "用作图工具近似求 $f(x) = -x^3 + 3x^2 + 2$ 的相对极大值。" },
        commonTraps: [
          { en: "Mistaking a steep but non-extremum point for an extremum", zh: "把陡峭但非极值的点误认为极值" },
        ],
      },
      {
        id: "pt-1-5-8",
        title: { en: "Distinguish Absolute vs Relative Extrema", zh: "区分绝对极值与相对极值" },
        description: { en: "Identify whether a peak/valley is the global maximum/minimum on the entire domain.", zh: "判断峰/谷是否为整个定义域上的最大/最小值。" },
        howToRecognize: { en: "Problem asks specifically for absolute extrema, or asks to classify each extremum.", zh: "题目专问绝对极值，或要求分类每个极值。" },
        steps: [
          { en: "List all relative extrema", zh: "列出所有相对极值" },
          { en: "Compare $y$-values of all peaks (and endpoints) to find absolute max", zh: "比较所有峰（与端点）的 $y$ 值找绝对极大" },
          { en: "Similarly compare all valleys (and endpoints) for absolute min", zh: "类似比较所有谷（与端点）找绝对极小" },
          { en: "If the domain is unbounded and the function grows without bound, no absolute max/min may exist", zh: "若定义域无界且函数无界，绝对极值可能不存在" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "On $[-2, 3]$, $f$ has a relative max at $(0, 5)$, a relative min at $(2, -1)$, and endpoint values $f(-2) = 7$, $f(3) = 4$. State the absolute extrema.", zh: "在 $[-2, 3]$ 上，$f$ 的相对极大为 $(0, 5)$，相对极小为 $(2, -1)$，端点值 $f(-2) = 7$、$f(3) = 4$。给出绝对极值。" },
        commonTraps: [
          { en: "Forgetting to compare endpoint values to relative extrema", zh: "忘记把端点值与相对极值比较" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-1-5-9",
        title: { en: "Sketch a Function from a List of Properties", zh: "由性质列表绘制函数图像" },
        description: { en: "Construct a graph that satisfies given conditions: domain, intercepts, intervals of increase, extrema, etc.", zh: "构造满足给定条件（定义域、截距、单调区间、极值等）的图像。" },
        howToRecognize: { en: "Problem lists properties (without an explicit equation) and asks for a possible graph.", zh: "题目列出性质（无显式方程）并要求一个可能的图像。" },
        steps: [
          { en: "Plot any required key points (intercepts, extrema)", zh: "标出所有要求的关键点（截距、极值）" },
          { en: "Sketch increasing/decreasing behavior between key points", zh: "在关键点之间画出递增/递减行为" },
          { en: "Verify domain and range match the requirements", zh: "验证定义域与值域满足要求" },
          { en: "Check symmetry conditions if given (even/odd)", zh: "检查对称性条件（偶/奇）" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Sketch a function with domain $[-4, 4]$, $f(0) = 2$, increasing on $(-4, -1)$, decreasing on $(-1, 2)$, increasing on $(2, 4)$, with $f(-4) = -3$ and $f(4) = 5$.", zh: "画一个函数：定义域 $[-4, 4]$，$f(0) = 2$，在 $(-4, -1)$ 递增、$(-1, 2)$ 递减、$(2, 4)$ 递增，$f(-4) = -3$，$f(4) = 5$。" },
        commonTraps: [
          { en: "Producing a graph that violates the Vertical Line Test", zh: "画出违反铅直线检验的图像" },
          { en: "Ignoring one of the listed conditions", zh: "忽略某项给定条件" },
        ],
      },
      {
        id: "pt-1-5-10",
        title: { en: "Application — Interpret Rate of Change in Context", zh: "应用——结合情境解释变化率" },
        description: { en: "Apply average rate of change to a real-world function (motion, population, cost) and interpret the result with units.", zh: "把平均变化率应用于实际函数（运动、人口、成本）并结合单位解释结果。" },
        howToRecognize: { en: "Word problem with a function modeling a real quantity over time or another variable.", zh: "应用题中函数刻画某随时间或其它变量变化的实际量。" },
        steps: [
          { en: "Identify the relevant interval and function", zh: "确定相关区间与函数" },
          { en: "Compute the average rate of change", zh: "计算平均变化率" },
          { en: "State the answer with units (e.g., m/s, dollars/year)", zh: "结合单位陈述答案（如 m/s、美元/年）" },
          { en: "Interpret in context: \"The function changed by ___ per ___\"", zh: "结合情境解释：\"该量每___变化___\"" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A particle's height (m) at time $t$ (s) is $h(t) = -5t^2 + 30t$. Find the average velocity from $t = 1$ to $t = 4$, and interpret.", zh: "粒子在时间 $t$（s）时的高度（m）为 $h(t) = -5t^2 + 30t$。求 $t = 1$ 到 $t = 4$ 的平均速度，并解释。" },
        commonTraps: [
          { en: "Reporting a unitless number when units matter for interpretation", zh: "解释需要单位时却给出无单位数值" },
          { en: "Confusing average rate of change with instantaneous rate of change (a calculus concept)", zh: "把平均变化率与瞬时变化率（微积分概念）混淆" },
        ],
      },
    ],
  },
  {
    id: "1-6",
    chapterId: "ch-1",
    number: "1.6",
    title: { en: "A Library of Parent Functions", zh: "基本函数库" },
    description: {
      en: "Identify and graph linear, squaring, cubic, square root, reciprocal, step, and absolute value functions.",
      zh: "识别并绘制线性、平方、立方、平方根、倒数、阶梯及绝对值等基本函数。",
    },
    learningGoals: [
      { en: "Recognize and graph the eight common parent functions", zh: "识别并绘制八种常见的基本函数" },
      { en: "State the domain, range, and key features of each parent function", zh: "给出每个基本函数的定义域、值域与关键特征" },
      { en: "Use the parent function library as a foundation for transformations", zh: "把基本函数库作为函数变换的基础" },
      { en: "Evaluate and graph step (greatest integer) functions", zh: "计算并绘制阶梯（取整）函数" },
    ],
    keyConcepts: [
      {
        id: "kc-1-6-1",
        title: { en: "The Parent Function Library", zh: "基本函数库" },
        explanation: {
          en: "A parent function is the simplest example of its function family. Common parents: constant $f(x) = c$, identity $f(x) = x$, squaring $f(x) = x^2$, cubing $f(x) = x^3$, square root $f(x) = \\sqrt{x}$, reciprocal $f(x) = 1/x$, absolute value $f(x) = |x|$, greatest integer $f(x) = \\lfloor x \\rfloor$.",
          zh: "基本函数是其函数族中最简单的代表。常见基本函数：常数 $f(x) = c$、恒等 $f(x) = x$、平方 $f(x) = x^2$、立方 $f(x) = x^3$、平方根 $f(x) = \\sqrt{x}$、倒数 $f(x) = 1/x$、绝对值 $f(x) = |x|$、取整 $f(x) = \\lfloor x \\rfloor$。",
        },
        whenToUse: { en: "As a quick reference for graphing transformed functions", zh: "作为绘制变换后函数图像的快速参考" },
        commonMistake: { en: "Confusing similar shapes (e.g., $x^2$ vs $|x|$ both V/U-like but only $x^2$ is smooth)", zh: "混淆形状相似的函数（如 $x^2$ 与 $|x|$ 都呈 U 或 V 形，但只有 $x^2$ 是光滑的）" },
        example: { en: "$f(x) = (x - 2)^3 + 1$ is a transformed cubic — recognize the cubing parent", zh: "$f(x) = (x - 2)^3 + 1$ 是经过变换的立方函数——识别其平方/立方基本函数族" },
      },
      {
        id: "kc-1-6-2",
        title: { en: "Domain, Range, and Key Features", zh: "定义域、值域与关键特征" },
        explanation: {
          en: "Each parent function has characteristic features: $\\sqrt{x}$ has domain $[0, \\infty)$ and starts at origin; $1/x$ excludes $x = 0$ and has both axes as asymptotes; $|x|$ has a sharp corner at the origin; $\\lfloor x \\rfloor$ has jump discontinuities at every integer.",
          zh: "每个基本函数都有标志性特征：$\\sqrt{x}$ 定义域 $[0, \\infty)$，从原点出发；$1/x$ 排除 $x = 0$，两轴均为渐近线；$|x|$ 在原点有尖角；$\\lfloor x \\rfloor$ 在每个整数处发生跳跃。",
        },
        whenToUse: { en: "When stating or sketching the basic shape of any parent function", zh: "陈述或绘制基本函数原始形状时" },
        commonMistake: { en: "Drawing $\\sqrt{x}$ extending into negative $x$, or $1/x$ touching the axes", zh: "把 $\\sqrt{x}$ 画到 $x < 0$ 区域，或让 $1/x$ 触碰坐标轴" },
        example: { en: "$f(x) = 1/x$: domain $(-\\infty, 0) \\cup (0, \\infty)$; range same; both axes are asymptotes", zh: "$f(x) = 1/x$：定义域 $(-\\infty, 0) \\cup (0, \\infty)$；值域相同；两轴均为渐近线" },
      },
      {
        id: "kc-1-6-3",
        title: { en: "Step / Greatest Integer Function", zh: "阶梯函数 / 取整函数" },
        explanation: {
          en: "$\\lfloor x \\rfloor$ rounds DOWN to the nearest integer (the floor). It is a step function: constant on each interval $[n, n+1)$, then jumps up by $1$ at every integer. Used in pricing, postage, and discrete data models.",
          zh: "$\\lfloor x \\rfloor$ 向下取整（地板函数）。它是阶梯函数：在每个区间 $[n, n+1)$ 上为常数，每到整数处跳升 $1$。常用于计价、邮资和离散数据建模。",
        },
        whenToUse: { en: "Modeling discrete steps in a continuous variable (e.g., taxi fare per mile)", zh: "对连续变量按离散阶梯建模（如出租车按英里计价）" },
        commonMistake: { en: "Treating $\\lfloor 2.7 \\rfloor$ as $3$ (rounding) instead of $2$ (flooring)", zh: "把 $\\lfloor 2.7 \\rfloor$ 当作 $3$（四舍五入）而非 $2$（向下取整）" },
        example: { en: "$\\lfloor 3.9 \\rfloor = 3$, $\\lfloor -1.2 \\rfloor = -2$, $\\lfloor 5 \\rfloor = 5$", zh: "$\\lfloor 3.9 \\rfloor = 3$，$\\lfloor -1.2 \\rfloor = -2$，$\\lfloor 5 \\rfloor = 5$" },
      },
    ],
    formulas: [
      {
        id: "f-1-6-1",
        name: { en: "Squaring & Cubic Functions", zh: "平方函数与立方函数" },
        formula: "f(x) = x^2, \\quad f(x) = x^3",
        variables: [
          { en: "$x$ — any real number", zh: "$x$ — 任意实数" },
        ],
        whenToUse: { en: "Recognizing parabolic ($x^2$) or cubic ($x^3$) shapes; symmetry: even / odd respectively", zh: "识别抛物线（$x^2$）或立方曲线（$x^3$）形状；对称性：分别为偶/奇" },
        commonProblemTypes: [
          { en: "Recognize the parent under transformation", zh: "识别经过变换的基本函数" },
          { en: "Compare growth: $x^3$ grows faster than $x^2$ for $x > 1$", zh: "比较增长：$x > 1$ 时 $x^3$ 增长快于 $x^2$" },
        ],
        example: { en: "$f(x) = x^2$: domain $\\mathbb{R}$, range $[0, \\infty)$; $f(x) = x^3$: domain and range both $\\mathbb{R}$", zh: "$f(x) = x^2$：定义域 $\\mathbb{R}$，值域 $[0, \\infty)$；$f(x) = x^3$：定义域与值域均为 $\\mathbb{R}$" },
      },
      {
        id: "f-1-6-2",
        name: { en: "Square Root Function", zh: "平方根函数" },
        formula: "f(x) = \\sqrt{x}",
        variables: [
          { en: "$x \\geq 0$", zh: "$x \\geq 0$" },
        ],
        whenToUse: { en: "Modeling decelerating growth; domain restriction to non-negative inputs", zh: "刻画减速增长；定义域限于非负输入" },
        commonProblemTypes: [
          { en: "Find domain restriction", zh: "求定义域限制" },
          { en: "Recognize transformations like $\\sqrt{x - 3} + 2$", zh: "识别 $\\sqrt{x - 3} + 2$ 一类的变换" },
        ],
        example: { en: "Domain $[0, \\infty)$, range $[0, \\infty)$; passes through $(0,0), (1,1), (4,2), (9,3)$", zh: "定义域 $[0, \\infty)$，值域 $[0, \\infty)$；过 $(0,0), (1,1), (4,2), (9,3)$" },
      },
      {
        id: "f-1-6-3",
        name: { en: "Reciprocal Function", zh: "倒数函数" },
        formula: "f(x) = \\frac{1}{x}",
        variables: [
          { en: "$x \\neq 0$", zh: "$x \\neq 0$" },
        ],
        whenToUse: { en: "Asymptotic behavior; inverse-proportion modeling", zh: "渐近行为；反比例建模" },
        commonProblemTypes: [
          { en: "Identify asymptotes (both axes)", zh: "识别渐近线（两条轴）" },
          { en: "State domain/range exclusions", zh: "陈述定义域/值域中的排除项" },
        ],
        example: { en: "Two branches in Quadrants I and III; both axes are asymptotes", zh: "两支分别位于第 Ⅰ 与第 Ⅲ 象限；两轴均为渐近线" },
      },
      {
        id: "f-1-6-4",
        name: { en: "Absolute Value Function", zh: "绝对值函数" },
        formula: "f(x) = |x|",
        variables: [
          { en: "$x$ — any real number", zh: "$x$ — 任意实数" },
        ],
        whenToUse: { en: "Distance from zero, or any V-shaped behavior", zh: "刻画到零的距离或 V 形行为" },
        commonProblemTypes: [
          { en: "Solve absolute-value equations and inequalities", zh: "解绝对值方程与不等式" },
          { en: "Identify a V-shaped graph", zh: "识别 V 形图像" },
        ],
        example: { en: "Domain $\\mathbb{R}$, range $[0, \\infty)$; vertex at origin", zh: "定义域 $\\mathbb{R}$，值域 $[0, \\infty)$；顶点在原点" },
      },
      {
        id: "f-1-6-5",
        name: { en: "Greatest Integer Function", zh: "取整函数" },
        formula: "f(x) = \\lfloor x \\rfloor",
        variables: [
          { en: "$x$ — any real number; output is the largest integer $\\leq x$", zh: "$x$ — 任意实数；输出为不超过 $x$ 的最大整数" },
        ],
        whenToUse: { en: "Modeling step-wise pricing, time intervals, or discrete data", zh: "建模阶梯式计价、时间区间或离散数据" },
        commonProblemTypes: [
          { en: "Evaluate at decimals and negatives", zh: "计算小数与负数处的值" },
          { en: "Sketch the staircase graph", zh: "绘制阶梯图像" },
        ],
        example: { en: "$\\lfloor 4.9 \\rfloor = 4$, $\\lfloor -2.1 \\rfloor = -3$", zh: "$\\lfloor 4.9 \\rfloor = 4$，$\\lfloor -2.1 \\rfloor = -3$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-1-6-1",
        title: { en: "Identify a Parent Function from Its Graph", zh: "由图像识别基本函数" },
        description: { en: "Match a given graph to one of the eight standard parent functions.", zh: "把给定图像与八种标准基本函数之一对应。" },
        howToRecognize: { en: "A graph is shown; problem asks which parent function it is.", zh: "给出图像；问它是哪个基本函数。" },
        steps: [
          { en: "Identify defining features (origin point, smoothness, asymptotes, corners)", zh: "识别定义性特征（过原点、光滑性、渐近线、尖角）" },
          { en: "Compare shape to each parent function in turn", zh: "逐一与基本函数比较形状" },
          { en: "Confirm by checking key points (e.g., $(1, 1)$, $(4, 2)$ for $\\sqrt{x}$)", zh: "通过关键点验证（如 $\\sqrt{x}$ 过 $(1, 1)$、$(4, 2)$）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "A graph passes through $(0, 0)$ and $(1, 1)$, with a sharp corner at the origin and reflects symmetrically into the second quadrant. Identify the parent function.", zh: "图像过 $(0, 0)$ 与 $(1, 1)$，原点处有尖角，对称延伸到第二象限。指出是哪个基本函数。" },
        commonTraps: [
          { en: "Confusing $|x|$ (V-shape, sharp corner) with $x^2$ (smooth U-shape)", zh: "把 $|x|$（V 形尖角）与 $x^2$（光滑 U 形）混淆" },
        ],
      },
      {
        id: "pt-1-6-2",
        title: { en: "State Domain and Range of a Parent Function", zh: "给出基本函数的定义域与值域" },
        description: { en: "Recall the standard domain and range of each parent function.", zh: "回忆每个基本函数的标准定义域与值域。" },
        howToRecognize: { en: "Problem names a parent function and asks for its domain and range.", zh: "题目指明某基本函数并要求定义域与值域。" },
        steps: [
          { en: "Recall the parent's natural restrictions ($\\sqrt{x}$ needs $x \\geq 0$, $1/x$ needs $x \\neq 0$, etc.)", zh: "回忆该函数的自然限制（$\\sqrt{x}$ 要 $x \\geq 0$；$1/x$ 要 $x \\neq 0$ 等）" },
          { en: "Visualize the graph to read off the range", zh: "想象图像以读出值域" },
          { en: "Write both in interval notation", zh: "用区间记号表示" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "State the domain and range of $f(x) = \\sqrt{x}$.", zh: "给出 $f(x) = \\sqrt{x}$ 的定义域与值域。" },
        commonTraps: [
          { en: "Forgetting that $\\sqrt{x}$ has range $[0, \\infty)$, not $\\mathbb{R}$", zh: "忘记 $\\sqrt{x}$ 的值域是 $[0, \\infty)$，而非 $\\mathbb{R}$" },
        ],
      },
      {
        id: "pt-1-6-3",
        title: { en: "Match Equation to Parent Function", zh: "把方程与基本函数对应" },
        description: { en: "Given an equation, name its parent function.", zh: "给出方程，说出其基本函数。" },
        howToRecognize: { en: "Problem provides an equation; asks for the parent function category.", zh: "题目给出方程；问其属于哪类基本函数。" },
        steps: [
          { en: "Strip away constants, reflections, or shifts", zh: "去掉常数、反射或平移" },
          { en: "Identify the resulting form ($x$, $x^2$, $\\sqrt{x}$, $|x|$, etc.)", zh: "识别剩余形式（$x$、$x^2$、$\\sqrt{x}$、$|x|$ 等）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Name the parent function of $g(x) = -2(x + 3)^2 + 5$.", zh: "$g(x) = -2(x + 3)^2 + 5$ 的基本函数是？" },
        commonTraps: [
          { en: "Calling $\\sqrt{x - 1}$ a different family because of the shift", zh: "因平移把 $\\sqrt{x - 1}$ 误归为另一族" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-1-6-4",
        title: { en: "Evaluate the Greatest Integer Function", zh: "求取整函数的值" },
        description: { en: "Compute $\\lfloor x \\rfloor$ for various inputs, including negatives.", zh: "对各种输入（含负数）求 $\\lfloor x \\rfloor$。" },
        howToRecognize: { en: "Problem asks for $\\lfloor a \\rfloor$ at one or more values.", zh: "题目要求一个或多个值处的 $\\lfloor a \\rfloor$。" },
        steps: [
          { en: "Find the largest integer $\\leq$ the input", zh: "找不超过输入的最大整数" },
          { en: "For negative non-integers, the floor is MORE negative", zh: "对非整数的负数，取整结果更小（更负）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find $\\lfloor 2.8 \\rfloor$, $\\lfloor -1.5 \\rfloor$, and $\\lfloor 7 \\rfloor$.", zh: "求 $\\lfloor 2.8 \\rfloor$、$\\lfloor -1.5 \\rfloor$ 与 $\\lfloor 7 \\rfloor$。" },
        commonTraps: [
          { en: "Treating $\\lfloor -1.5 \\rfloor$ as $-1$ (it's $-2$)", zh: "把 $\\lfloor -1.5 \\rfloor$ 当作 $-1$（应为 $-2$）" },
        ],
      },
      {
        id: "pt-1-6-5",
        title: { en: "Identify Parent Through a Transformation", zh: "在变换中识别基本函数" },
        description: { en: "Spot the parent function inside a transformed expression like $-3\\sqrt{x + 1} + 2$.", zh: "从 $-3\\sqrt{x + 1} + 2$ 这类变换式中识别基本函数。" },
        howToRecognize: { en: "Equation has shifts, stretches, or reflections applied to a parent.", zh: "方程是某基本函数经过平移、伸缩或反射后的形式。" },
        steps: [
          { en: "Locate the core function (radical, absolute value, square, etc.)", zh: "找出核心函数（根号、绝对值、平方等）" },
          { en: "Mentally remove shifts and coefficients", zh: "心里去掉平移与系数" },
          { en: "Name the parent", zh: "说出基本函数" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Identify the parent of $h(x) = \\frac{1}{x - 4} + 7$.", zh: "$h(x) = \\frac{1}{x - 4} + 7$ 的基本函数是？" },
        commonTraps: [
          { en: "Calling a transformed reciprocal a \"rational function\" without naming the parent", zh: "把变换的倒数函数称为\"有理函数\"而未指明基本函数" },
        ],
      },
      {
        id: "pt-1-6-6",
        title: { en: "Sketch a Parent Function with Key Points Labeled", zh: "绘制基本函数并标注关键点" },
        description: { en: "Draw a clean sketch with at least three reference points and any asymptotes labeled.", zh: "画出整洁草图，至少标注三个参考点和所有渐近线。" },
        howToRecognize: { en: "Problem requests a sketch of a parent function.", zh: "题目要求绘制基本函数。" },
        steps: [
          { en: "Choose 3-5 representative inputs from the natural domain", zh: "在自然定义域中选取 3-5 个代表性输入" },
          { en: "Compute outputs and plot the points", zh: "计算输出并描点" },
          { en: "Connect with a smooth curve (or steps for $\\lfloor x \\rfloor$)", zh: "用光滑曲线连接（取整函数则画阶梯）" },
          { en: "Add asymptotes (for $1/x$) or domain endpoints ($\\sqrt{x}$)", zh: "添加渐近线（$1/x$）或定义域端点（$\\sqrt{x}$）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Sketch $f(x) = \\frac{1}{x}$ with at least four points and both asymptotes shown.", zh: "画 $f(x) = \\frac{1}{x}$，至少标四个点和两条渐近线。" },
        commonTraps: [
          { en: "Drawing $1/x$ touching the axes", zh: "把 $1/x$ 画成与坐标轴相交" },
          { en: "Drawing $\\sqrt{x}$ extending to the left of $x = 0$", zh: "把 $\\sqrt{x}$ 画到 $x < 0$ 区域" },
        ],
      },
      {
        id: "pt-1-6-7",
        title: { en: "Determine Increasing / Decreasing Intervals of a Parent", zh: "确定基本函数的单调区间" },
        description: { en: "State where each parent function is increasing or decreasing.", zh: "说明每个基本函数的递增或递减区间。" },
        howToRecognize: { en: "Problem asks for monotonicity of a named parent function.", zh: "题目要求某个基本函数的单调性。" },
        steps: [
          { en: "Recall the parent's graph", zh: "回忆该基本函数的图像" },
          { en: "Identify rising and falling portions", zh: "识别上升与下降部分" },
          { en: "Use open intervals on the $x$-axis", zh: "用 $x$ 轴上的开区间表示" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "On what intervals is $f(x) = x^2$ increasing? Decreasing?", zh: "$f(x) = x^2$ 在哪些区间递增？递减？" },
        commonTraps: [
          { en: "Stating one interval when the function has different behavior on each side of a vertex", zh: "顶点两侧行为不同时只给一个区间" },
        ],
      },
      {
        id: "pt-1-6-8",
        title: { en: "Compare Behaviors of Two Parent Functions", zh: "比较两个基本函数的行为" },
        description: { en: "Contrast features such as domain, range, end behavior, or growth rate.", zh: "对比定义域、值域、终态行为或增长速率等特征。" },
        howToRecognize: { en: "Problem asks to compare two parent functions on specific features.", zh: "题目要求在某些特征上比较两个基本函数。" },
        steps: [
          { en: "List relevant features for each function", zh: "分别列出两个函数的相关特征" },
          { en: "Compare side by side using a table or bullet points", zh: "用表格或要点并列比较" },
          { en: "Highlight key differences (e.g., \"only $x^3$ has range $\\mathbb{R}$\")", zh: "标注关键差异（如\"只有 $x^3$ 的值域是 $\\mathbb{R}$\"）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Compare domain, range, and end behavior of $f(x) = x^2$ and $g(x) = x^3$.", zh: "比较 $f(x) = x^2$ 与 $g(x) = x^3$ 的定义域、值域与终态行为。" },
        commonTraps: [
          { en: "Listing irrelevant features without addressing the question", zh: "罗列无关特征而未回答提问" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-1-6-9",
        title: { en: "Build a Piecewise Function from Parent Pieces", zh: "用基本函数构造分段函数" },
        description: { en: "Combine two or more parent functions on different intervals into a piecewise definition.", zh: "在不同区间上把两个或更多基本函数组合为分段定义。" },
        howToRecognize: { en: "Problem describes different behaviors on different domain pieces and asks for a single function.", zh: "题目在不同定义域片段描述不同行为，要求合并为一个函数。" },
        steps: [
          { en: "Identify each region's parent function", zh: "确定每段的基本函数" },
          { en: "Apply any necessary shifts to match values at boundaries", zh: "做必要平移使分界处取值匹配" },
          { en: "Write the piecewise expression with clear domain conditions", zh: "用清晰的定义条件写出分段表达式" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Define $f$ so that $f(x) = -x$ on $(-\\infty, 0)$, $f(x) = \\sqrt{x}$ on $[0, 4]$, and $f(x) = 2$ on $(4, \\infty)$.", zh: "定义 $f$：在 $(-\\infty, 0)$ 上 $f(x) = -x$；在 $[0, 4]$ 上 $f(x) = \\sqrt{x}$；在 $(4, \\infty)$ 上 $f(x) = 2$。" },
        commonTraps: [
          { en: "Discontinuities at boundaries when continuity is required", zh: "应连续却在分界处出现间断" },
          { en: "Overlapping or missing domain conditions", zh: "定义条件重叠或遗漏" },
        ],
      },
      {
        id: "pt-1-6-10",
        title: { en: "Application — Choose the Right Parent Function for a Model", zh: "应用——为情境选择合适的基本函数" },
        description: { en: "Given a real-world description, choose the parent function whose shape matches and explain.", zh: "给出实际描述，选用形状匹配的基本函数并解释。" },
        howToRecognize: { en: "Word problem describes a relationship between two quantities; asks which parent function fits.", zh: "应用题描述两量间关系；问哪个基本函数最适合。" },
        steps: [
          { en: "Identify whether the relationship is linear, quadratic, root-like, reciprocal, etc.", zh: "判断关系为线性、二次、根号、倒数等" },
          { en: "Check key qualitative features: increasing/decreasing rate, asymptotes, corners", zh: "核对关键定性特征：增减速率、渐近线、尖角" },
          { en: "Justify choice with at least two distinguishing features", zh: "至少用两个区分特征说明选择" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A taxi charges \\$2 base plus \\$3 for each whole mile or part of a mile traveled. Which parent function models the fare? Justify.", zh: "出租车基础价 \\$2，每整英里（或不足部分）加 \\$3。哪个基本函数适合刻画费用？说明理由。" },
        commonTraps: [
          { en: "Picking a smooth function for a step-wise scenario (or vice versa)", zh: "为阶梯式情境选择光滑函数（反之亦然）" },
        ],
      },
    ],
  },
  {
    id: "1-7",
    chapterId: "ch-1",
    number: "1.7",
    title: { en: "Transformations of Functions", zh: "函数的变换" },
    description: {
      en: "Use vertical and horizontal shifts, reflections, and stretches to graph transformed functions.",
      zh: "利用平移、反射与伸缩变换绘制变换后的函数图像。",
    },
    learningGoals: [
      { en: "Apply vertical and horizontal shifts to a parent function", zh: "对基本函数进行垂直与水平平移" },
      { en: "Apply reflections across the $x$- and $y$-axes", zh: "对函数进行关于 $x$ 轴与 $y$ 轴的反射" },
      { en: "Apply vertical and horizontal stretches and shrinks", zh: "进行垂直与水平方向的伸缩变换" },
      { en: "Combine multiple transformations in the correct order", zh: "按正确顺序组合多种变换" },
    ],
    keyConcepts: [
      {
        id: "kc-1-7-1",
        title: { en: "Vertical and Horizontal Shifts", zh: "垂直与水平平移" },
        explanation: {
          en: "$g(x) = f(x) + c$ shifts the graph UP $c$ units (DOWN if $c < 0$). $g(x) = f(x - h)$ shifts the graph RIGHT $h$ units (LEFT if $h < 0$). Horizontal shifts feel counterintuitive: $f(x - 3)$ moves RIGHT.",
          zh: "$g(x) = f(x) + c$ 把图像向上平移 $c$ 个单位（$c < 0$ 则向下）。$g(x) = f(x - h)$ 把图像向右平移 $h$ 个单位（$h < 0$ 则向左）。水平平移反直觉：$f(x - 3)$ 向右移动。",
        },
        whenToUse: { en: "Whenever a constant is added inside or outside the function", zh: "凡是有常数加在函数内部或外部时" },
        commonMistake: { en: "Reading $f(x + 2)$ as a shift right (it's LEFT 2 units)", zh: "把 $f(x + 2)$ 读成向右平移（应为向左 2 个单位）" },
        example: { en: "$g(x) = (x - 4)^2 + 3$: shift $x^2$ right $4$ and up $3$, vertex at $(4, 3)$", zh: "$g(x) = (x - 4)^2 + 3$：将 $x^2$ 向右 $4$、向上 $3$，顶点位于 $(4, 3)$" },
      },
      {
        id: "kc-1-7-2",
        title: { en: "Reflections", zh: "反射" },
        explanation: {
          en: "$g(x) = -f(x)$ reflects across the $x$-axis (output sign flips). $g(x) = f(-x)$ reflects across the $y$-axis (input sign flips). The negative is INSIDE for $y$-axis reflection, OUTSIDE for $x$-axis reflection.",
          zh: "$g(x) = -f(x)$ 关于 $x$ 轴反射（输出变号）。$g(x) = f(-x)$ 关于 $y$ 轴反射（输入变号）。$y$ 轴反射的负号在内，$x$ 轴反射的负号在外。",
        },
        whenToUse: { en: "Whenever a negative sign is applied inside or outside the function", zh: "函数内部或外部出现负号时" },
        commonMistake: { en: "Mixing up which axis the function is reflected across", zh: "把反射轴弄反" },
        example: { en: "If $f(x) = \\sqrt{x}$: $-f(x) = -\\sqrt{x}$ flips below $x$-axis; $f(-x) = \\sqrt{-x}$ flips to the left of $y$-axis", zh: "若 $f(x) = \\sqrt{x}$：$-f(x) = -\\sqrt{x}$ 翻转到 $x$ 轴下方；$f(-x) = \\sqrt{-x}$ 翻转到 $y$ 轴左侧" },
      },
      {
        id: "kc-1-7-3",
        title: { en: "Stretches and Shrinks", zh: "伸缩变换" },
        explanation: {
          en: "$g(x) = a \\cdot f(x)$ is a vertical stretch if $|a| > 1$, vertical shrink if $0 < |a| < 1$. $g(x) = f(b x)$ is a horizontal SHRINK by factor $1/|b|$ if $|b| > 1$, horizontal STRETCH if $0 < |b| < 1$ (counterintuitive — horizontal acts inversely).",
          zh: "$g(x) = a \\cdot f(x)$ 在 $|a| > 1$ 时为垂直拉伸，$0 < |a| < 1$ 时为垂直压缩。$g(x) = f(b x)$ 在 $|b| > 1$ 时为水平压缩（系数 $1/|b|$），$0 < |b| < 1$ 时为水平拉伸（反直觉——水平方向作用相反）。",
        },
        whenToUse: { en: "When a coefficient multiplies the function or its input", zh: "系数乘在函数或其输入上时" },
        commonMistake: { en: "Treating horizontal coefficient like vertical (e.g., $f(2x)$ is a SHRINK, not a stretch)", zh: "把水平系数当垂直系数处理（如 $f(2x)$ 是压缩而非拉伸）" },
        example: { en: "$g(x) = 3x^2$: vertical stretch by $3$. $g(x) = (\\tfrac{1}{2}x)^2$: horizontal stretch by $2$.", zh: "$g(x) = 3x^2$：垂直拉伸 $3$ 倍。$g(x) = (\\tfrac{1}{2}x)^2$：水平拉伸 $2$ 倍。" },
      },
    ],
    formulas: [
      {
        id: "f-1-7-1",
        name: { en: "Vertical Shift", zh: "垂直平移" },
        formula: "g(x) = f(x) + c",
        variables: [
          { en: "$c > 0$ — shift up; $c < 0$ — shift down", zh: "$c > 0$ — 向上；$c < 0$ — 向下" },
        ],
        whenToUse: { en: "A constant is added or subtracted OUTSIDE the function", zh: "在函数外部加减常数时" },
        commonProblemTypes: [
          { en: "Sketch a vertically shifted graph", zh: "画垂直平移后的图像" },
        ],
        example: { en: "$g(x) = x^2 - 5$: shift $x^2$ down $5$", zh: "$g(x) = x^2 - 5$：把 $x^2$ 向下平移 $5$" },
      },
      {
        id: "f-1-7-2",
        name: { en: "Horizontal Shift", zh: "水平平移" },
        formula: "g(x) = f(x - h)",
        variables: [
          { en: "$h > 0$ — shift right; $h < 0$ — shift left (note the sign flip)", zh: "$h > 0$ — 向右；$h < 0$ — 向左（注意符号反向）" },
        ],
        whenToUse: { en: "A constant is added or subtracted INSIDE the function's input", zh: "在函数输入内部加减常数时" },
        commonProblemTypes: [
          { en: "Identify horizontal shifts in transformed parent functions", zh: "识别经过变换的基本函数中的水平平移" },
        ],
        example: { en: "$g(x) = \\sqrt{x + 4}$: shift $\\sqrt{x}$ left $4$", zh: "$g(x) = \\sqrt{x + 4}$：把 $\\sqrt{x}$ 向左平移 $4$" },
      },
      {
        id: "f-1-7-3",
        name: { en: "Reflection", zh: "反射" },
        formula: "g(x) = -f(x) \\quad \\text{or} \\quad g(x) = f(-x)",
        variables: [
          { en: "$-f(x)$ — reflect across $x$-axis", zh: "$-f(x)$ — 关于 $x$ 轴反射" },
          { en: "$f(-x)$ — reflect across $y$-axis", zh: "$f(-x)$ — 关于 $y$ 轴反射" },
        ],
        whenToUse: { en: "When a negative sign appears inside or outside the function", zh: "函数内部或外部出现负号时" },
        commonProblemTypes: [
          { en: "Identify the type of reflection from the equation", zh: "由方程识别反射类型" },
        ],
        example: { en: "If $f(x) = \\sqrt{x}$: $g(x) = -\\sqrt{x}$ reflects across $x$-axis, $h(x) = \\sqrt{-x}$ reflects across $y$-axis", zh: "若 $f(x) = \\sqrt{x}$：$g(x) = -\\sqrt{x}$ 关于 $x$ 轴反射；$h(x) = \\sqrt{-x}$ 关于 $y$ 轴反射" },
      },
      {
        id: "f-1-7-4",
        name: { en: "Stretch / Shrink", zh: "伸缩" },
        formula: "g(x) = a \\cdot f(b x)",
        variables: [
          { en: "$a$ — vertical factor: $|a|>1$ stretch, $0<|a|<1$ shrink", zh: "$a$ — 垂直系数：$|a|>1$ 拉伸，$0<|a|<1$ 压缩" },
          { en: "$b$ — horizontal factor (inverse): $|b|>1$ shrink, $0<|b|<1$ stretch", zh: "$b$ — 水平系数（反向）：$|b|>1$ 压缩，$0<|b|<1$ 拉伸" },
        ],
        whenToUse: { en: "When coefficients multiply the function output or input", zh: "系数乘在函数输出或输入上时" },
        commonProblemTypes: [
          { en: "Sketch a stretched/shrunk graph from the parent", zh: "由基本函数画伸缩后的图像" },
          { en: "Identify factor and direction from the equation", zh: "从方程识别系数与方向" },
        ],
        example: { en: "$g(x) = -2(x - 1)^2 + 3$: vertical stretch by $2$, reflect across $x$-axis, shift right $1$ and up $3$", zh: "$g(x) = -2(x - 1)^2 + 3$：垂直拉伸 $2$ 倍，关于 $x$ 轴反射，右移 $1$、上移 $3$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-1-7-1",
        title: { en: "Identify a Vertical Shift", zh: "识别垂直平移" },
        description: { en: "From an equation like $g(x) = f(x) + c$, state the direction and magnitude of the shift.", zh: "由 $g(x) = f(x) + c$ 写出平移方向与大小。" },
        howToRecognize: { en: "A constant is added OUTSIDE the function.", zh: "函数外部加常数。" },
        steps: [
          { en: "Locate the constant added outside $f(x)$", zh: "找到加在 $f(x)$ 外的常数" },
          { en: "Positive ⇒ shift up; negative ⇒ shift down", zh: "正 ⇒ 向上；负 ⇒ 向下" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Describe the transformation of $g(x) = |x| - 7$ relative to $f(x) = |x|$.", zh: "相对于 $f(x) = |x|$，$g(x) = |x| - 7$ 的变换是？" },
        commonTraps: [
          { en: "Confusing a vertical shift with a horizontal shift", zh: "把垂直平移与水平平移弄混" },
        ],
      },
      {
        id: "pt-1-7-2",
        title: { en: "Identify a Horizontal Shift", zh: "识别水平平移" },
        description: { en: "From $g(x) = f(x - h)$, state the direction and magnitude — sign flips.", zh: "由 $g(x) = f(x - h)$ 给出方向与大小——符号相反。" },
        howToRecognize: { en: "A constant is added or subtracted INSIDE $f$.", zh: "在 $f$ 内部加减常数。" },
        steps: [
          { en: "Locate the constant inside $f$", zh: "找到 $f$ 内部的常数" },
          { en: "Subtraction ⇒ shift right; addition ⇒ shift left (always opposite of the visible sign)", zh: "减 ⇒ 向右；加 ⇒ 向左（与可见符号相反）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Describe how $g(x) = \\sqrt{x + 6}$ is shifted from $f(x) = \\sqrt{x}$.", zh: "相对于 $f(x) = \\sqrt{x}$，$g(x) = \\sqrt{x + 6}$ 如何平移？" },
        commonTraps: [
          { en: "Treating $f(x + 2)$ as a shift to the right", zh: "把 $f(x + 2)$ 当作向右平移" },
        ],
      },
      {
        id: "pt-1-7-3",
        title: { en: "Identify a Reflection", zh: "识别反射" },
        description: { en: "Decide whether $g$ is a reflection across the $x$-axis, $y$-axis, or neither.", zh: "判断 $g$ 是关于 $x$ 轴、$y$ 轴的反射，还是都不是。" },
        howToRecognize: { en: "A negative sign is applied inside or outside the function.", zh: "函数内部或外部出现负号。" },
        steps: [
          { en: "Negative OUTSIDE ($-f(x)$) ⇒ reflect across $x$-axis", zh: "负号在外 ($-f(x)$) ⇒ 关于 $x$ 轴反射" },
          { en: "Negative INSIDE ($f(-x)$) ⇒ reflect across $y$-axis", zh: "负号在内 ($f(-x)$) ⇒ 关于 $y$ 轴反射" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "What reflection (if any) takes $f(x) = x^3$ to $g(x) = (-x)^3$?", zh: "把 $f(x) = x^3$ 变为 $g(x) = (-x)^3$ 的反射是？" },
        commonTraps: [
          { en: "Confusing the inside/outside placement of the negative", zh: "把负号的内外位置弄反" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-1-7-4",
        title: { en: "Apply Two Transformations to a Parent", zh: "对基本函数应用两个变换" },
        description: { en: "Sketch the result of two combined transformations (e.g., shift + reflection).", zh: "画出两个组合变换（如平移 + 反射）的结果。" },
        howToRecognize: { en: "Equation has both a shift and a reflection or stretch.", zh: "方程同时含平移与反射或伸缩。" },
        steps: [
          { en: "Identify each transformation in order", zh: "依次识别每个变换" },
          { en: "Apply reflection or stretch FIRST (operates on parent shape)", zh: "先应用反射或伸缩（作用于基本形状）" },
          { en: "Then apply shifts", zh: "再应用平移" },
          { en: "Sketch and label key points", zh: "画图并标注关键点" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Sketch $g(x) = -|x| + 4$ as a transformation of $f(x) = |x|$.", zh: "把 $g(x) = -|x| + 4$ 作为 $f(x) = |x|$ 的变换画出来。" },
        commonTraps: [
          { en: "Applying shifts before reflections (changes the result)", zh: "先平移后反射（结果不同）" },
        ],
      },
      {
        id: "pt-1-7-5",
        title: { en: "Sketch a Transformed Graph from the Parent", zh: "由基本函数画变换后的图像" },
        description: { en: "Draw the transformed graph by applying each transformation to known reference points of the parent.", zh: "对基本函数的参考点逐一应用变换，画出变换后图像。" },
        howToRecognize: { en: "Equation describes a transformation of a known parent.", zh: "方程描述对已知基本函数的变换。" },
        steps: [
          { en: "Pick 3-5 key points on the parent function", zh: "在基本函数上选取 3-5 个关键点" },
          { en: "Apply each transformation to the coordinates of those points", zh: "对这些点的坐标依次应用变换" },
          { en: "Plot the new points and draw the curve", zh: "标出新点并画曲线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Sketch $g(x) = 2(x - 1)^3 - 4$ by transforming key points of $f(x) = x^3$.", zh: "通过变换 $f(x) = x^3$ 的关键点画 $g(x) = 2(x - 1)^3 - 4$。" },
        commonTraps: [
          { en: "Forgetting that vertical stretches affect $y$-coordinates only", zh: "忘记垂直拉伸只影响 $y$ 坐标" },
        ],
      },
      {
        id: "pt-1-7-6",
        title: { en: "Identify All Transformations from a Complex Equation", zh: "从复杂方程识别所有变换" },
        description: { en: "Decode an equation with multiple transformations and list each in correct order.", zh: "解读含多重变换的方程，按顺序列出每个变换。" },
        howToRecognize: { en: "Equation in the form $g(x) = a f(b(x - h)) + k$ with several non-trivial constants.", zh: "方程形如 $g(x) = a f(b(x - h)) + k$，含多个非平凡常数。" },
        steps: [
          { en: "Inside the function: identify horizontal shrink/stretch ($b$) and shift ($h$)", zh: "函数内部：识别水平伸缩（$b$）与平移（$h$）" },
          { en: "Outside: identify vertical stretch/reflection ($a$) and shift ($k$)", zh: "函数外部：识别垂直伸缩/反射（$a$）与平移（$k$）" },
          { en: "List in order: horizontal first (inside-out), then vertical", zh: "按顺序列出：先内（水平），后外（垂直）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Describe all transformations applied to $f(x) = x^2$ to get $g(x) = -3(2x + 4)^2 + 1$.", zh: "把 $f(x) = x^2$ 变为 $g(x) = -3(2x + 4)^2 + 1$ 经过了哪些变换？" },
        commonTraps: [
          { en: "Reading $b > 1$ as a stretch instead of a shrink", zh: "把 $b > 1$ 当成拉伸（应为压缩）" },
          { en: "Failing to factor inside the function before reading the horizontal shift", zh: "读水平平移前未先把内部因式提取" },
        ],
      },
      {
        id: "pt-1-7-7",
        title: { en: "Write Equation Given a Parent and Described Transformations", zh: "由基本函数与描述写出变换方程" },
        description: { en: "Construct $g(x)$ given a parent and a list of transformations.", zh: "由基本函数与变换说明构造 $g(x)$。" },
        howToRecognize: { en: "Problem describes transformations verbally and asks for the equation.", zh: "题目用文字描述变换，要求方程。" },
        steps: [
          { en: "Start with the parent $f(x)$", zh: "从基本函数 $f(x)$ 开始" },
          { en: "Apply horizontal effects (shift, reflection, shrink/stretch) inside $f$", zh: "在 $f$ 内部应用水平变换（平移、反射、压伸）" },
          { en: "Apply vertical effects (shift, reflection, stretch/shrink) outside", zh: "在 $f$ 外部应用垂直变换" },
          { en: "Write the final equation $g(x) = a f(b(x - h)) + k$", zh: "写出最终方程 $g(x) = a f(b(x - h)) + k$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Write the equation: start with $f(x) = \\sqrt{x}$, reflect across $x$-axis, shift right $2$ and up $5$.", zh: "构造方程：以 $f(x) = \\sqrt{x}$ 起，关于 $x$ 轴反射，向右 $2$、向上 $5$。" },
        commonTraps: [
          { en: "Sign of $h$ — \"right $h$\" requires $(x - h)$, not $(x + h)$", zh: "$h$ 的符号——\"右移 $h$\"需 $(x - h)$，不是 $(x + h)$" },
        ],
      },
      {
        id: "pt-1-7-8",
        title: { en: "Distinguish Horizontal vs Vertical Transformations", zh: "区分水平变换与垂直变换" },
        description: { en: "Decide whether a given operation acts horizontally (inside $f$) or vertically (outside $f$).", zh: "判断给定操作是作用于水平方向（$f$ 内）还是垂直方向（$f$ 外）。" },
        howToRecognize: { en: "Several operations are listed; problem asks for direction of each.", zh: "列出若干操作，要求各自的作用方向。" },
        steps: [
          { en: "Operations on the OUTPUT $f(x)$ (multiply, add, negate from outside) are vertical", zh: "对输出 $f(x)$ 的操作（外乘、外加、外取负）作用于垂直方向" },
          { en: "Operations on the INPUT $x$ before applying $f$ are horizontal (and inverse direction)", zh: "在 $f$ 前对输入 $x$ 的操作作用于水平方向（且方向相反）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "For $g(x) = 2 \\sqrt{3x} - 1$, classify each transformation as horizontal or vertical.", zh: "对 $g(x) = 2 \\sqrt{3x} - 1$，把每个变换分为水平或垂直。" },
        commonTraps: [
          { en: "Treating constants inside $f$ as if they had vertical effects", zh: "把 $f$ 内的常数当作垂直效应" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-1-7-9",
        title: { en: "Apply Transformations in Correct Order", zh: "按正确顺序应用多个变换" },
        description: { en: "Carefully order multiple transformations: horizontal effects (factor first, then shift) before vertical, and stretches before shifts.", zh: "谨慎排序多个变换：水平方向（先压伸再平移）先于垂直方向；伸缩先于平移。" },
        howToRecognize: { en: "Equation has both inner factoring and shifts plus outer stretches and shifts.", zh: "方程内部含因式与平移，外部含伸缩与平移。" },
        steps: [
          { en: "Factor any inner coefficient: $b(x - h)$ form to read shift correctly", zh: "把内部系数因式化为 $b(x - h)$ 以正确读出平移" },
          { en: "Apply horizontal stretch/shrink first, then horizontal shift", zh: "先水平伸缩，再水平平移" },
          { en: "Apply vertical stretch/reflection, then vertical shift", zh: "再垂直伸缩/反射，最后垂直平移" },
          { en: "Verify by transforming a known reference point", zh: "用已知参考点验证" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Describe the transformations from $f(x) = x^2$ to $g(x) = -2(3x - 6)^2 + 5$ in correct order.", zh: "按正确顺序描述把 $f(x) = x^2$ 变为 $g(x) = -2(3x - 6)^2 + 5$ 的过程。" },
        commonTraps: [
          { en: "Reading the horizontal shift as $6$ instead of $2$ (must factor: $3(x - 2)$)", zh: "把水平平移读为 $6$ 而非 $2$（应因式化为 $3(x - 2)$）" },
        ],
      },
      {
        id: "pt-1-7-10",
        title: { en: "Application — Model with a Transformed Parent", zh: "应用——用变换的基本函数建模" },
        description: { en: "Build a transformed parent function to fit a real-world data shape (parabolic motion, decaying signal, etc.).", zh: "构造变换的基本函数以拟合实际数据形状（抛物运动、衰减信号等）。" },
        howToRecognize: { en: "Word problem describes a curve with a known shape but shifted/scaled from the standard parent.", zh: "应用题描述形状已知的曲线，但相对标准基本函数有平移/伸缩。" },
        steps: [
          { en: "Identify the parent shape that matches the situation", zh: "选定与情境匹配的基本函数形状" },
          { en: "Determine shifts (where is the vertex/key point?) and scaling (how steep?)", zh: "确定平移（顶点/关键点位置）与伸缩（陡缓程度）" },
          { en: "Write the transformed equation and validate against given data points", zh: "写出变换方程并用已知数据点验证" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A ball is thrown so that its height in feet at time $t$ seconds reaches a maximum of $20$ ft at $t = 2$ s, then returns to the ground at $t = 4$ s. Write a model $h(t)$ as a transformed quadratic.", zh: "一球被抛出，在 $t = 2$ 秒时达到最高 $20$ ft，于 $t = 4$ 秒落地。把高度 $h(t)$ 写为变换的二次函数。" },
        commonTraps: [
          { en: "Forgetting to determine the leading coefficient from a known data point", zh: "忘记由已知数据点确定首项系数" },
        ],
      },
    ],
  },
  {
    id: "1-8",
    chapterId: "ch-1",
    number: "1.8",
    title: { en: "Combinations of Functions: Composite Functions", zh: "函数的组合：复合函数" },
    description: {
      en: "Add, subtract, multiply, divide, and compose functions, and find their domains.",
      zh: "对函数进行加减乘除与复合运算，并求其定义域。",
    },
    learningGoals: [
      { en: "Compute sums, differences, products, and quotients of functions", zh: "计算函数的和、差、积与商" },
      { en: "Find the domain of arithmetic combinations of functions", zh: "求函数算术组合的定义域" },
      { en: "Form and evaluate composite functions", zh: "建立并求复合函数的值" },
      { en: "Decompose a function as a composition of simpler functions", zh: "把函数分解为更简单函数的复合" },
    ],
    keyConcepts: [
      {
        id: "kc-1-8-1",
        title: { en: "Arithmetic Combinations of Functions", zh: "函数的算术组合" },
        explanation: {
          en: "Given $f$ and $g$: $(f+g)(x) = f(x) + g(x)$; $(f-g)(x) = f(x) - g(x)$; $(fg)(x) = f(x)g(x)$; $(f/g)(x) = f(x)/g(x)$. The domain is the INTERSECTION of the domains of $f$ and $g$ (with $g(x) \\neq 0$ for the quotient).",
          zh: "已知 $f$、$g$：$(f+g)(x) = f(x) + g(x)$；$(f-g)(x) = f(x) - g(x)$；$(fg)(x) = f(x)g(x)$；$(f/g)(x) = f(x)/g(x)$。定义域为 $f$ 与 $g$ 定义域的交集（商需 $g(x) \\neq 0$）。",
        },
        whenToUse: { en: "When two functions are combined with arithmetic operations", zh: "用算术运算组合两个函数时" },
        commonMistake: { en: "Reporting the union of domains instead of the intersection", zh: "把定义域并集当作交集" },
        example: { en: "$f(x) = \\sqrt{x}$, $g(x) = x - 1$: $(f+g)(x) = \\sqrt{x} + x - 1$, domain $[0, \\infty)$", zh: "$f(x) = \\sqrt{x}$、$g(x) = x - 1$：$(f+g)(x) = \\sqrt{x} + x - 1$，定义域 $[0, \\infty)$" },
      },
      {
        id: "kc-1-8-2",
        title: { en: "Composition of Functions", zh: "函数的复合" },
        explanation: {
          en: "$(f \\circ g)(x) = f(g(x))$ — apply $g$ first, then $f$. In general $(f \\circ g)(x) \\neq (g \\circ f)(x)$. Composition models nested processes (e.g., temperature depends on altitude, which depends on time).",
          zh: "$(f \\circ g)(x) = f(g(x))$ — 先施 $g$，再施 $f$。一般地 $(f \\circ g)(x) \\neq (g \\circ f)(x)$。复合用于刻画嵌套过程（如温度随高度变化，高度随时间变化）。",
        },
        whenToUse: { en: "When the output of one function is fed as the input of another", zh: "一个函数的输出作为另一个函数的输入时" },
        commonMistake: { en: "Multiplying $f \\cdot g$ when composition is intended", zh: "把复合误作 $f$ 与 $g$ 相乘" },
        example: { en: "$f(x) = x^2$, $g(x) = x + 3$: $(f \\circ g)(x) = (x + 3)^2$; $(g \\circ f)(x) = x^2 + 3$", zh: "$f(x) = x^2$、$g(x) = x + 3$：$(f \\circ g)(x) = (x + 3)^2$；$(g \\circ f)(x) = x^2 + 3$" },
      },
      {
        id: "kc-1-8-3",
        title: { en: "Domain of a Composite Function", zh: "复合函数的定义域" },
        explanation: {
          en: "The domain of $f \\circ g$ is the set of $x$ in the domain of $g$ such that $g(x)$ is in the domain of $f$. You must check BOTH conditions.",
          zh: "$f \\circ g$ 的定义域是 $g$ 定义域中使 $g(x)$ 仍在 $f$ 定义域内的 $x$ 的集合。两个条件都要检查。",
        },
        whenToUse: { en: "Whenever determining where $f \\circ g$ is defined", zh: "确定 $f \\circ g$ 在哪有定义时" },
        commonMistake: { en: "Only checking the domain of $g$ and ignoring whether $g(x)$ lies in $f$'s domain", zh: "只检查 $g$ 的定义域，忽略 $g(x)$ 是否在 $f$ 的定义域内" },
        example: { en: "$f(x) = \\sqrt{x}$, $g(x) = x - 5$: $(f \\circ g)(x) = \\sqrt{x - 5}$, domain $[5, \\infty)$", zh: "$f(x) = \\sqrt{x}$、$g(x) = x - 5$：$(f \\circ g)(x) = \\sqrt{x - 5}$，定义域 $[5, \\infty)$" },
      },
    ],
    formulas: [
      {
        id: "f-1-8-1",
        name: { en: "Sum and Difference", zh: "和与差" },
        formula: "(f \\pm g)(x) = f(x) \\pm g(x)",
        variables: [
          { en: "$f$, $g$ — two functions", zh: "$f$、$g$ — 两个函数" },
        ],
        whenToUse: { en: "Combine two functions with addition or subtraction", zh: "用加法或减法组合两个函数" },
        commonProblemTypes: [
          { en: "Compute $(f \\pm g)(a)$ for a specific value", zh: "求指定值处的 $(f \\pm g)(a)$" },
          { en: "Find the formula for $f \\pm g$", zh: "写出 $f \\pm g$ 的公式" },
        ],
        example: { en: "$f(x) = x^2$, $g(x) = 2x$: $(f + g)(x) = x^2 + 2x$", zh: "$f(x) = x^2$、$g(x) = 2x$：$(f + g)(x) = x^2 + 2x$" },
      },
      {
        id: "f-1-8-2",
        name: { en: "Product and Quotient", zh: "积与商" },
        formula: "(fg)(x) = f(x) \\cdot g(x), \\quad \\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}, \\; g(x) \\neq 0",
        variables: [
          { en: "$f$, $g$ — two functions; for the quotient $g(x) \\neq 0$", zh: "$f$、$g$ — 两个函数；商时 $g(x) \\neq 0$" },
        ],
        whenToUse: { en: "Multiply or divide function outputs", zh: "对函数输出做乘除" },
        commonProblemTypes: [
          { en: "Compute $(fg)(a)$ or $(f/g)(a)$", zh: "求 $(fg)(a)$ 或 $(f/g)(a)$" },
          { en: "Determine the domain of $f/g$ (exclude zeros of $g$)", zh: "求 $f/g$ 的定义域（排除 $g$ 的零点）" },
        ],
        example: { en: "$f(x) = x + 1$, $g(x) = x - 2$: $(f/g)(x) = \\frac{x+1}{x-2}$, domain $x \\neq 2$", zh: "$f(x) = x + 1$、$g(x) = x - 2$：$(f/g)(x) = \\frac{x+1}{x-2}$，定义域 $x \\neq 2$" },
      },
      {
        id: "f-1-8-3",
        name: { en: "Composition", zh: "复合" },
        formula: "(f \\circ g)(x) = f(g(x))",
        variables: [
          { en: "Apply $g$ first, output becomes input of $f$", zh: "先施 $g$，其输出作为 $f$ 的输入" },
        ],
        whenToUse: { en: "Modeling nested processes; substituting one function into another", zh: "刻画嵌套过程；把一个函数代入另一个" },
        commonProblemTypes: [
          { en: "Form $f \\circ g$ from given $f$ and $g$", zh: "由给定 $f$、$g$ 求 $f \\circ g$" },
          { en: "Decompose a function into a composition", zh: "把函数分解为复合形式" },
        ],
        example: { en: "$f(x) = \\sqrt{x}$, $g(x) = x + 4$: $(f \\circ g)(x) = \\sqrt{x + 4}$", zh: "$f(x) = \\sqrt{x}$、$g(x) = x + 4$：$(f \\circ g)(x) = \\sqrt{x + 4}$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-1-8-1",
        title: { en: "Compute $(f \\pm g)(a)$ at a Specific Value", zh: "求 $(f \\pm g)(a)$ 在指定值处的值" },
        description: { en: "Evaluate each function at $a$, then add or subtract.", zh: "分别求 $a$ 处的两函数值再加减。" },
        howToRecognize: { en: "Two functions and a specific input are given.", zh: "给出两个函数与指定输入。" },
        steps: [
          { en: "Compute $f(a)$", zh: "求 $f(a)$" },
          { en: "Compute $g(a)$", zh: "求 $g(a)$" },
          { en: "Add or subtract as required", zh: "按要求相加或相减" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "$f(x) = 3x - 2$, $g(x) = x^2 + 1$. Find $(f + g)(4)$ and $(f - g)(4)$.", zh: "$f(x) = 3x - 2$、$g(x) = x^2 + 1$。求 $(f + g)(4)$ 与 $(f - g)(4)$。" },
        commonTraps: [
          { en: "Sign error when distributing the negative in $f - g$", zh: "$f - g$ 中分配负号时出错" },
        ],
      },
      {
        id: "pt-1-8-2",
        title: { en: "Compute $(fg)(a)$ and $(f/g)(a)$", zh: "求 $(fg)(a)$ 与 $(f/g)(a)$" },
        description: { en: "Evaluate each function and then multiply or divide.", zh: "分别求函数值后做乘除。" },
        howToRecognize: { en: "Problem asks for product or quotient of $f$ and $g$ at a value.", zh: "题目要求 $f$ 与 $g$ 在某值处的积或商。" },
        steps: [
          { en: "Compute $f(a)$ and $g(a)$", zh: "求 $f(a)$ 与 $g(a)$" },
          { en: "Multiply for $(fg)(a)$, divide for $(f/g)(a)$", zh: "求积时相乘，求商时相除" },
          { en: "For quotient, check $g(a) \\neq 0$", zh: "求商时检查 $g(a) \\neq 0$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "$f(x) = x + 5$, $g(x) = x - 1$. Find $(fg)(3)$ and $(f/g)(3)$.", zh: "$f(x) = x + 5$、$g(x) = x - 1$。求 $(fg)(3)$ 与 $(f/g)(3)$。" },
        commonTraps: [
          { en: "Forgetting to check whether $g(a) = 0$ in the quotient", zh: "求商时忘记检查 $g(a) = 0$" },
        ],
      },
      {
        id: "pt-1-8-3",
        title: { en: "Find $(f \\circ g)(a)$", zh: "求 $(f \\circ g)(a)$" },
        description: { en: "Apply $g$ to $a$, then $f$ to the result.", zh: "先把 $a$ 代入 $g$，再把结果代入 $f$。" },
        howToRecognize: { en: "Problem asks for composite value at a specific input.", zh: "题目要求指定输入处的复合函数值。" },
        steps: [
          { en: "Compute $g(a)$", zh: "求 $g(a)$" },
          { en: "Plug $g(a)$ into $f$ to get $f(g(a))$", zh: "把 $g(a)$ 代入 $f$ 得 $f(g(a))$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "$f(x) = x^2 - 1$, $g(x) = x + 2$. Find $(f \\circ g)(3)$.", zh: "$f(x) = x^2 - 1$、$g(x) = x + 2$。求 $(f \\circ g)(3)$。" },
        commonTraps: [
          { en: "Reversing the order: computing $g(f(a))$ when asked for $f(g(a))$", zh: "顺序弄反：要求 $f(g(a))$ 却算了 $g(f(a))$" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-1-8-4",
        title: { en: "Find Formulas for $f + g$, $f - g$, $fg$, $f/g$", zh: "求 $f + g$、$f - g$、$fg$、$f/g$ 的一般公式" },
        description: { en: "Build the resulting function as an algebraic expression in $x$.", zh: "把结果作为关于 $x$ 的代数式给出。" },
        howToRecognize: { en: "Problem asks for the formula (not just a value) of a combination.", zh: "题目要求组合的公式（而非某点的值）。" },
        steps: [
          { en: "Substitute $f(x)$ and $g(x)$ into the appropriate operation", zh: "代入 $f(x)$ 与 $g(x)$ 到相应运算" },
          { en: "Simplify (combine like terms; factor if helpful)", zh: "化简（合并同类项；必要时因式分解）" },
          { en: "State any domain restrictions, especially for $f/g$", zh: "陈述定义域限制，尤其是 $f/g$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "$f(x) = x^2 + 1$, $g(x) = x - 3$. Find $(f \\cdot g)(x)$ and state its domain.", zh: "$f(x) = x^2 + 1$、$g(x) = x - 3$。求 $(f \\cdot g)(x)$ 并给出定义域。" },
        commonTraps: [
          { en: "Missing parentheses when subtracting (sign errors throughout)", zh: "做减法时漏括号（导致全篇符号错误）" },
        ],
      },
      {
        id: "pt-1-8-5",
        title: { en: "Find $(f \\circ g)(x)$ as a Formula", zh: "把 $(f \\circ g)(x)$ 写成公式" },
        description: { en: "Substitute $g(x)$ wherever $x$ appears in $f$.", zh: "把 $f$ 中所有 $x$ 替换为 $g(x)$。" },
        howToRecognize: { en: "Problem asks for the composite function expression.", zh: "题目要求复合函数的表达式。" },
        steps: [
          { en: "Write the formula for $f$", zh: "写出 $f$ 的公式" },
          { en: "Replace every $x$ in $f$ with the entire expression $g(x)$ (use parentheses)", zh: "把 $f$ 中所有 $x$ 替换为 $g(x)$ 的整体（加括号）" },
          { en: "Simplify the resulting expression", zh: "化简结果" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "$f(x) = 2x + 5$, $g(x) = x^2$. Find $(f \\circ g)(x)$ and $(g \\circ f)(x)$.", zh: "$f(x) = 2x + 5$、$g(x) = x^2$。求 $(f \\circ g)(x)$ 与 $(g \\circ f)(x)$。" },
        commonTraps: [
          { en: "Missing parentheses around $g(x)$ when substituting (especially with squaring)", zh: "代入 $g(x)$ 时漏括号（尤其平方时）" },
        ],
      },
      {
        id: "pt-1-8-6",
        title: { en: "Find Domain of $f / g$", zh: "求 $f / g$ 的定义域" },
        description: { en: "Take the intersection of the domains and exclude zeros of $g$.", zh: "取两定义域交集并排除 $g$ 的零点。" },
        howToRecognize: { en: "Problem involves a quotient of functions.", zh: "题目涉及函数商。" },
        steps: [
          { en: "Find domain of $f$ and domain of $g$", zh: "分别求 $f$、$g$ 的定义域" },
          { en: "Take their intersection", zh: "求交集" },
          { en: "Solve $g(x) = 0$ and exclude those $x$-values", zh: "解 $g(x) = 0$ 并排除这些值" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "$f(x) = \\sqrt{x + 2}$, $g(x) = x^2 - 4$. Find the domain of $f/g$.", zh: "$f(x) = \\sqrt{x + 2}$、$g(x) = x^2 - 4$。求 $f/g$ 的定义域。" },
        commonTraps: [
          { en: "Forgetting to exclude all zeros of $g$ (might be more than one)", zh: "忘记排除 $g$ 的所有零点（可能不止一个）" },
        ],
      },
      {
        id: "pt-1-8-7",
        title: { en: "Find Domain of $f \\circ g$", zh: "求 $f \\circ g$ 的定义域" },
        description: { en: "Identify $x$ in the domain of $g$ such that $g(x)$ also lies in the domain of $f$.", zh: "在 $g$ 的定义域中找出使 $g(x)$ 也在 $f$ 定义域内的 $x$。" },
        howToRecognize: { en: "Problem asks for the domain of a composite function.", zh: "题目要求复合函数的定义域。" },
        steps: [
          { en: "Find the domain of $g$", zh: "求 $g$ 的定义域" },
          { en: "Find the domain of $f$", zh: "求 $f$ 的定义域" },
          { en: "Solve $g(x) \\in \\text{domain of } f$ for $x$", zh: "解 $g(x) \\in f$ 的定义域对 $x$ 的限制" },
          { en: "Intersect the result with the domain of $g$", zh: "与 $g$ 的定义域取交集" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "$f(x) = \\sqrt{x}$, $g(x) = 4 - x^2$. Find the domain of $f \\circ g$.", zh: "$f(x) = \\sqrt{x}$、$g(x) = 4 - x^2$。求 $f \\circ g$ 的定义域。" },
        commonTraps: [
          { en: "Returning the domain of $g$ alone, without checking $g(x) \\in \\text{domain}(f)$", zh: "只给 $g$ 的定义域，未检查 $g(x) \\in f$ 的定义域" },
        ],
      },
      {
        id: "pt-1-8-8",
        title: { en: "Decompose a Function as $f \\circ g$", zh: "把函数分解为 $f \\circ g$" },
        description: { en: "Identify an inner function $g$ and outer function $f$ so that $h(x) = f(g(x))$.", zh: "找出内函数 $g$ 与外函数 $f$ 使 $h(x) = f(g(x))$。" },
        howToRecognize: { en: "Problem asks to write $h$ as a composition (not unique — multiple valid choices).", zh: "题目要求把 $h$ 写为复合形式（答案不唯一）。" },
        steps: [
          { en: "Identify the \"inner\" expression — what does the outer operation act on?", zh: "找出\"内层\"——外层运算作用在什么上？" },
          { en: "Let $g(x)$ be that inner expression", zh: "把内层式记为 $g(x)$" },
          { en: "Let $f$ be the outer operation acting on a generic input", zh: "把外层运算作为对一般输入的操作记为 $f$" },
          { en: "Verify $f(g(x)) = h(x)$", zh: "验证 $f(g(x)) = h(x)$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Express $h(x) = (3x + 1)^4$ as $f \\circ g$.", zh: "把 $h(x) = (3x + 1)^4$ 写成 $f \\circ g$。" },
        commonTraps: [
          { en: "Choosing $g$ that is too simple, leaving most of the work to $f$ (not wrong but less useful)", zh: "$g$ 选得过简，把大部分工作留给 $f$（不错但意义有限）" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-1-8-9",
        title: { en: "Compose Three or More Functions", zh: "复合三个或更多函数" },
        description: { en: "Find $f \\circ g \\circ h$ by composing one pair at a time.", zh: "通过每次复合一对求 $f \\circ g \\circ h$。" },
        howToRecognize: { en: "Three or more functions are given for composition.", zh: "给出三个或更多函数进行复合。" },
        steps: [
          { en: "Compute $g \\circ h$ first (innermost pair)", zh: "先求 $g \\circ h$（最内一对）" },
          { en: "Then compose $f$ with the result: $f(g(h(x)))$", zh: "再把 $f$ 与结果复合：$f(g(h(x)))$" },
          { en: "Simplify carefully, keeping parentheses", zh: "谨慎化简，保留括号" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "$f(x) = x^2$, $g(x) = x + 1$, $h(x) = \\sqrt{x}$. Find $(f \\circ g \\circ h)(x)$.", zh: "$f(x) = x^2$、$g(x) = x + 1$、$h(x) = \\sqrt{x}$。求 $(f \\circ g \\circ h)(x)$。" },
        commonTraps: [
          { en: "Composing in the wrong order (composition is right-to-left)", zh: "复合顺序错误（应从右到左）" },
        ],
      },
      {
        id: "pt-1-8-10",
        title: { en: "Application — Build a Composite Model", zh: "应用——构造复合模型" },
        description: { en: "Combine two related real-world functions into a single composite (e.g., revenue as a function of price, where price depends on time).", zh: "把两个相关的实际函数合为一个复合函数（如收入是价格的函数，价格随时间变化）。" },
        howToRecognize: { en: "Word problem describes one quantity depending on another that itself depends on a third variable.", zh: "应用题描述一个量依赖于另一个量，而后者又依赖于第三个变量。" },
        steps: [
          { en: "Identify the inner and outer relationships", zh: "确定内、外两层关系" },
          { en: "Express each as a function", zh: "把每层写成函数" },
          { en: "Compose them so the final function takes the original input variable", zh: "复合使最终函数以原始输入变量为自变量" },
          { en: "Use the composite to answer the question and interpret with units", zh: "用复合函数回答并按单位解释" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A circular oil spill spreads such that its radius (in meters) grows by $r(t) = 2t$ where $t$ is hours. Express the spill area as a function of time.", zh: "圆形油污以 $r(t) = 2t$（米）扩散，$t$ 为小时。把油污面积表为时间的函数。" },
        commonTraps: [
          { en: "Composing in the wrong direction (e.g., $r(A(t))$ instead of $A(r(t))$)", zh: "复合方向错误（如把 $A(r(t))$ 写成 $r(A(t))$）" },
        ],
      },
    ],
  },
];

const chapter2Units: Unit[] = [
  {
    id: "2-1",
    chapterId: "ch-2",
    number: "2.1",
    title: { en: "Quadratic Functions and Models", zh: "二次函数与模型" },
    description: {
      en: "Analyze quadratic functions in standard and vertex form and apply them to model real situations.",
      zh: "分析标准形式与顶点形式的二次函数，并将其应用于实际情境的建模。",
    },
    learningGoals: [
      { en: "Convert between standard form and vertex form of a quadratic", zh: "在二次函数的标准式与顶点式之间互换" },
      { en: "Find vertex, axis of symmetry, and intercepts", zh: "求顶点、对称轴与截距" },
      { en: "Sketch the graph of a parabola", zh: "绘制抛物线" },
      { en: "Apply quadratic functions to model real-world maximization or minimization problems", zh: "应用二次函数对最大/最小值问题建模" },
    ],
    keyConcepts: [
      {
        id: "kc-2-1-1",
        title: { en: "Standard vs Vertex Form", zh: "标准式与顶点式" },
        explanation: {
          en: "Standard form: $f(x) = ax^2 + bx + c$. Vertex form: $f(x) = a(x - h)^2 + k$ where $(h, k)$ is the vertex. Vertex form makes the vertex obvious; standard form makes the $y$-intercept ($c$) obvious.",
          zh: "标准式：$f(x) = ax^2 + bx + c$。顶点式：$f(x) = a(x - h)^2 + k$，其中 $(h, k)$ 是顶点。顶点式直接显示顶点；标准式直接显示 $y$ 截距 $c$。",
        },
        whenToUse: { en: "Choose the form that matches what you need to read off", zh: "根据所需信息选用合适的形式" },
        commonMistake: { en: "Sign error reading the vertex: $(x + 3)^2$ has $h = -3$, NOT $h = 3$", zh: "顶点读错符号：$(x + 3)^2$ 中 $h = -3$，而非 $3$" },
        example: { en: "$f(x) = (x - 4)^2 - 1$: vertex $(4, -1)$, $a = 1$ opens up", zh: "$f(x) = (x - 4)^2 - 1$：顶点 $(4, -1)$，$a = 1$ 开口向上" },
      },
      {
        id: "kc-2-1-2",
        title: { en: "Vertex and Axis of Symmetry", zh: "顶点与对称轴" },
        explanation: {
          en: "From standard form, the vertex is at $h = -\\frac{b}{2a}$, $k = f(h)$. The axis of symmetry is the vertical line $x = h$. Every parabola is symmetric about this line.",
          zh: "由标准式，顶点为 $h = -\\frac{b}{2a}$，$k = f(h)$。对称轴是铅直线 $x = h$。每条抛物线都关于此线对称。",
        },
        whenToUse: { en: "Locate the vertex from standard form, or use symmetry to plot points", zh: "由标准式定位顶点，或利用对称性描点" },
        commonMistake: { en: "Forgetting the negative sign in $-\\frac{b}{2a}$", zh: "忘记 $-\\frac{b}{2a}$ 中的负号" },
        example: { en: "$f(x) = 2x^2 - 8x + 1$: $h = -\\frac{-8}{4} = 2$, $k = f(2) = -7$, vertex $(2, -7)$", zh: "$f(x) = 2x^2 - 8x + 1$：$h = -\\frac{-8}{4} = 2$，$k = f(2) = -7$，顶点 $(2, -7)$" },
      },
      {
        id: "kc-2-1-3",
        title: { en: "Maximum or Minimum Value", zh: "最大值或最小值" },
        explanation: {
          en: "If $a > 0$, the parabola opens up — the vertex is a MINIMUM with value $k$. If $a < 0$, it opens down — the vertex is a MAXIMUM with value $k$. The min/max value is $k$ (the $y$-coordinate); it occurs AT $x = h$.",
          zh: "若 $a > 0$，抛物线开口向上——顶点为最小值 $k$。若 $a < 0$，开口向下——顶点为最大值 $k$。极值为 $k$（$y$ 坐标），在 $x = h$ 处取到。",
        },
        whenToUse: { en: "Quickly answer optimization questions about a quadratic model", zh: "快速回答二次模型的优化问题" },
        commonMistake: { en: "Reporting $h$ (the input) as the max/min value instead of $k$ (the output)", zh: "把输入 $h$ 当极值，应为输出 $k$" },
        example: { en: "$f(x) = -x^2 + 6x - 5$: vertex $(3, 4)$, MAX value $4$ at $x = 3$", zh: "$f(x) = -x^2 + 6x - 5$：顶点 $(3, 4)$，$x = 3$ 处取最大值 $4$" },
      },
    ],
    formulas: [
      {
        id: "f-2-1-1",
        name: { en: "Standard Form of a Quadratic", zh: "二次函数的标准式" },
        formula: "f(x) = ax^2 + bx + c, \\; a \\neq 0",
        variables: [
          { en: "$a, b, c$ — real coefficients", zh: "$a, b, c$ — 实系数" },
          { en: "$a \\neq 0$ ensures it is quadratic", zh: "$a \\neq 0$ 保证为二次" },
        ],
        whenToUse: { en: "When given an expanded quadratic; reading the $y$-intercept", zh: "已展开为标准式；读取 $y$ 截距" },
        commonProblemTypes: [
          { en: "Find vertex via $-\\frac{b}{2a}$", zh: "用 $-\\frac{b}{2a}$ 求顶点" },
          { en: "Apply the quadratic formula for zeros", zh: "用求根公式求零点" },
        ],
        example: { en: "$f(x) = 3x^2 - 12x + 7$: $a=3, b=-12, c=7$", zh: "$f(x) = 3x^2 - 12x + 7$：$a=3, b=-12, c=7$" },
      },
      {
        id: "f-2-1-2",
        name: { en: "Vertex Form", zh: "顶点式" },
        formula: "f(x) = a(x - h)^2 + k",
        variables: [
          { en: "$(h, k)$ — vertex of the parabola", zh: "$(h, k)$ — 抛物线顶点" },
          { en: "$a$ — controls direction and stretch (same as in standard form)", zh: "$a$ — 控制开口方向与伸缩（与标准式相同）" },
        ],
        whenToUse: { en: "When you need to read the vertex directly, or sketch quickly", zh: "需直接读出顶点或快速绘图时" },
        commonProblemTypes: [
          { en: "Identify vertex and direction at a glance", zh: "一眼读出顶点与方向" },
          { en: "Convert standard to vertex form via completing the square", zh: "通过配方把标准式化为顶点式" },
        ],
        example: { en: "$f(x) = -2(x + 3)^2 + 5$: vertex $(-3, 5)$, opens down", zh: "$f(x) = -2(x + 3)^2 + 5$：顶点 $(-3, 5)$，开口向下" },
      },
      {
        id: "f-2-1-3",
        name: { en: "Vertex Coordinates from Standard Form", zh: "由标准式求顶点坐标" },
        formula: "h = -\\frac{b}{2a}, \\quad k = f(h)",
        variables: [
          { en: "$a, b$ — coefficients from standard form", zh: "$a, b$ — 标准式中的系数" },
          { en: "$(h, k)$ — vertex", zh: "$(h, k)$ — 顶点" },
        ],
        whenToUse: { en: "Locate vertex without converting to vertex form", zh: "无需化为顶点式即可定位顶点" },
        commonProblemTypes: [
          { en: "Optimize a quadratic given in standard form", zh: "对标准式给出的二次进行最优化" },
        ],
        example: { en: "$f(x) = x^2 - 6x + 11$: $h = 3$, $k = f(3) = 2$, vertex $(3, 2)$", zh: "$f(x) = x^2 - 6x + 11$：$h = 3$，$k = f(3) = 2$，顶点 $(3, 2)$" },
      },
      {
        id: "f-2-1-4",
        name: { en: "Quadratic Formula", zh: "求根公式" },
        formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
        variables: [
          { en: "$a, b, c$ — coefficients of standard form", zh: "$a, b, c$ — 标准式系数" },
          { en: "Discriminant $b^2 - 4ac$ determines real vs complex zeros", zh: "判别式 $b^2 - 4ac$ 决定零点为实根还是复根" },
        ],
        whenToUse: { en: "Find $x$-intercepts when factoring is hard", zh: "难以因式分解时求 $x$ 截距" },
        commonProblemTypes: [
          { en: "Solve any quadratic equation", zh: "解任意二次方程" },
        ],
        example: { en: "$x^2 - 4x + 1 = 0$: $x = 2 \\pm \\sqrt{3}$", zh: "$x^2 - 4x + 1 = 0$：$x = 2 \\pm \\sqrt{3}$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-2-1-1",
        title: { en: "Read Vertex from Vertex Form", zh: "由顶点式读出顶点" },
        description: { en: "Identify $(h, k)$ directly from $f(x) = a(x - h)^2 + k$.", zh: "直接由 $f(x) = a(x - h)^2 + k$ 读出 $(h, k)$。" },
        howToRecognize: { en: "Equation is given in vertex form.", zh: "方程为顶点式。" },
        steps: [
          { en: "Match the equation to $a(x - h)^2 + k$", zh: "把方程与 $a(x - h)^2 + k$ 对照" },
          { en: "$h$ is the OPPOSITE of the number inside parentheses", zh: "$h$ 是括号内数的相反数" },
          { en: "$k$ is the constant added or subtracted at the end", zh: "$k$ 是末尾加减的常数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the vertex of $f(x) = 3(x + 4)^2 - 7$.", zh: "求 $f(x) = 3(x + 4)^2 - 7$ 的顶点。" },
        commonTraps: [
          { en: "Reading $h$ with the same sign as inside the parentheses", zh: "把 $h$ 的符号与括号内取相同符号" },
        ],
      },
      {
        id: "pt-2-1-2",
        title: { en: "Determine Direction from Leading Coefficient", zh: "由首项系数判断开口方向" },
        description: { en: "Use the sign of $a$ to determine whether the parabola opens up or down.", zh: "用 $a$ 的符号判断抛物线开口向上还是向下。" },
        howToRecognize: { en: "Quadratic given in any form; problem asks about direction.", zh: "二次函数（任意形式）；问开口方向。" },
        steps: [
          { en: "Identify the coefficient of $x^2$", zh: "找出 $x^2$ 的系数" },
          { en: "Positive $a$ ⇒ opens up; negative $a$ ⇒ opens down", zh: "正 ⇒ 向上；负 ⇒ 向下" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Does $f(x) = -\\tfrac{1}{2}(x - 1)^2 + 3$ open up or down?", zh: "$f(x) = -\\tfrac{1}{2}(x - 1)^2 + 3$ 开口向上还是向下？" },
        commonTraps: [
          { en: "Confusing $a$ with the coefficient of $x$ instead of $x^2$", zh: "把 $a$ 与 $x$ 的系数（非 $x^2$）弄混" },
        ],
      },
      {
        id: "pt-2-1-3",
        title: { en: "Evaluate a Quadratic at a Specific Value", zh: "求二次函数在指定值的值" },
        description: { en: "Substitute the input and simplify carefully.", zh: "代入输入并仔细化简。" },
        howToRecognize: { en: "A quadratic and a specific input are given.", zh: "给出二次函数与指定输入。" },
        steps: [
          { en: "Substitute the value for $x$ everywhere", zh: "把所有 $x$ 替换为该值" },
          { en: "Square first (use parentheses for negatives), then multiply, then add", zh: "先平方（负数加括号），再乘，最后加" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "If $f(x) = 2x^2 - 5x + 1$, find $f(-3)$.", zh: "若 $f(x) = 2x^2 - 5x + 1$，求 $f(-3)$。" },
        commonTraps: [
          { en: "Computing $-3^2$ as $-9$ instead of $(-3)^2 = 9$", zh: "把 $-3^2$ 当作 $-9$（应为 $(-3)^2 = 9$）" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-2-1-4",
        title: { en: "Convert Standard Form to Vertex Form", zh: "由标准式化为顶点式" },
        description: { en: "Complete the square on the $x$-terms to rewrite the quadratic.", zh: "对 $x$ 项配方以重写二次式。" },
        howToRecognize: { en: "Quadratic in $ax^2 + bx + c$ form; problem asks for vertex form.", zh: "二次为 $ax^2 + bx + c$；要求顶点式。" },
        steps: [
          { en: "Factor $a$ from the $x^2$ and $x$ terms", zh: "从 $x^2$ 与 $x$ 项中提取 $a$" },
          { en: "Add and subtract $\\left(\\tfrac{b/a}{2}\\right)^2$ inside the parentheses", zh: "在括号内加减 $\\left(\\tfrac{b/a}{2}\\right)^2$" },
          { en: "Rewrite the perfect square; combine remaining constants", zh: "写成完全平方；合并剩余常数" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Convert $f(x) = 2x^2 - 8x + 3$ to vertex form.", zh: "把 $f(x) = 2x^2 - 8x + 3$ 化为顶点式。" },
        commonTraps: [
          { en: "Forgetting that the constant added inside is multiplied by $a$ when removed outside", zh: "忘记在括号内补的常数被 $a$ 倍后才能移出" },
        ],
      },
      {
        id: "pt-2-1-5",
        title: { en: "Find Vertex from Standard Form Using $-\\tfrac{b}{2a}$", zh: "用 $-\\tfrac{b}{2a}$ 由标准式求顶点" },
        description: { en: "Compute $h = -\\tfrac{b}{2a}$, then evaluate $f(h)$ to get $k$.", zh: "计算 $h = -\\tfrac{b}{2a}$，再求 $f(h) = k$。" },
        howToRecognize: { en: "Standard-form quadratic; problem asks for vertex without completing the square.", zh: "标准式二次；不通过配方求顶点。" },
        steps: [
          { en: "Identify $a$ and $b$", zh: "找出 $a$ 与 $b$" },
          { en: "Compute $h = -\\frac{b}{2a}$", zh: "计算 $h = -\\frac{b}{2a}$" },
          { en: "Substitute $h$ into $f$ to get $k$", zh: "把 $h$ 代入 $f$ 得 $k$" },
          { en: "Vertex is $(h, k)$", zh: "顶点为 $(h, k)$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the vertex of $f(x) = -x^2 + 6x + 1$.", zh: "求 $f(x) = -x^2 + 6x + 1$ 的顶点。" },
        commonTraps: [
          { en: "Sign error: forgetting the negative in $-\\tfrac{b}{2a}$", zh: "忘记 $-\\tfrac{b}{2a}$ 的负号" },
        ],
      },
      {
        id: "pt-2-1-6",
        title: { en: "Sketch a Parabola from Vertex Form", zh: "由顶点式画抛物线" },
        description: { en: "Use the vertex, direction, and a few symmetric points to draw the parabola.", zh: "利用顶点、开口方向和若干对称点画抛物线。" },
        howToRecognize: { en: "Equation in vertex form; problem asks for the graph.", zh: "顶点式方程；要求作图。" },
        steps: [
          { en: "Plot the vertex $(h, k)$", zh: "标出顶点 $(h, k)$" },
          { en: "Determine direction from $a$", zh: "由 $a$ 决定方向" },
          { en: "Plot $f(h \\pm 1)$ and $f(h \\pm 2)$ — by symmetry only one side is needed", zh: "标出 $f(h \\pm 1)$ 与 $f(h \\pm 2)$——由对称性只需算一侧" },
          { en: "Draw a smooth parabola", zh: "画光滑抛物线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Sketch $f(x) = -(x - 2)^2 + 4$.", zh: "画 $f(x) = -(x - 2)^2 + 4$。" },
        commonTraps: [
          { en: "Drawing a V-shape or U-shape that is too narrow or too wide", zh: "画的形状过窄或过宽" },
        ],
      },
      {
        id: "pt-2-1-7",
        title: { en: "Find $x$-Intercepts Using the Quadratic Formula", zh: "用求根公式求 $x$ 截距" },
        description: { en: "Solve $ax^2 + bx + c = 0$ when factoring is impractical.", zh: "因式分解不便时，解 $ax^2 + bx + c = 0$。" },
        howToRecognize: { en: "Quadratic does not factor cleanly; problem asks for $x$-intercepts.", zh: "二次不易因式分解；要求 $x$ 截距。" },
        steps: [
          { en: "Identify $a, b, c$", zh: "确定 $a, b, c$" },
          { en: "Compute discriminant $b^2 - 4ac$", zh: "计算判别式 $b^2 - 4ac$" },
          { en: "Apply $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$", zh: "代入 $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
          { en: "Simplify; if discriminant is negative, no real $x$-intercepts", zh: "化简；判别式为负则无实数 $x$ 截距" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the $x$-intercepts of $f(x) = 2x^2 + 5x - 3$.", zh: "求 $f(x) = 2x^2 + 5x - 3$ 的 $x$ 截距。" },
        commonTraps: [
          { en: "Sign errors in computing $-b$ or under the radical", zh: "$-b$ 或根号下计算的符号错误" },
        ],
      },
      {
        id: "pt-2-1-8",
        title: { en: "Find Maximum or Minimum Value", zh: "求最大值或最小值" },
        description: { en: "Locate the vertex; the $y$-coordinate is the extremum.", zh: "定位顶点；$y$ 坐标即极值。" },
        howToRecognize: { en: "Problem asks for max/min of a quadratic.", zh: "问二次函数的最大值或最小值。" },
        steps: [
          { en: "Find the vertex (any method)", zh: "用任意方法求顶点" },
          { en: "If $a > 0$, $k$ is the minimum; if $a < 0$, $k$ is the maximum", zh: "$a > 0$ 时 $k$ 为最小值；$a < 0$ 时 $k$ 为最大值" },
          { en: "State the value AND where it occurs", zh: "同时给出取值与取到位置" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the minimum value of $f(x) = x^2 + 4x + 1$ and where it occurs.", zh: "求 $f(x) = x^2 + 4x + 1$ 的最小值及取到的位置。" },
        commonTraps: [
          { en: "Reporting the location $h$ instead of the value $k$", zh: "把位置 $h$ 当作极值（应为 $k$）" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-2-1-9",
        title: { en: "Optimization Application — Maximize Area, Profit, or Height", zh: "优化应用——求面积、利润或高度的极值" },
        description: { en: "Set up a quadratic model from a word problem and find its max/min.", zh: "由应用题建立二次模型并求其极值。" },
        howToRecognize: { en: "Word problem mentions maximizing or minimizing a quantity that depends on a single variable.", zh: "应用题中要求最大化或最小化某依赖单变量的量。" },
        steps: [
          { en: "Define the variable and target quantity", zh: "定义变量与目标量" },
          { en: "Express the quantity as a quadratic in that variable", zh: "把量表示为该变量的二次函数" },
          { en: "Find vertex; report extremum value AND where it occurs", zh: "求顶点；给出极值及位置" },
          { en: "Verify with units and context", zh: "结合单位与情境验证" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A farmer has $200$ ft of fence to enclose a rectangular pen against a barn (so only three sides need fencing). Find the dimensions that maximize the enclosed area.", zh: "农夫用 $200$ ft 围栏沿谷仓一侧围成长方形畜栏（仅需围三边）。求使面积最大的尺寸。" },
        commonTraps: [
          { en: "Forgetting that one side is along the barn (no fence needed)", zh: "忘记有一边贴谷仓不需围栏" },
          { en: "Reporting just the maximum value without the dimensions", zh: "只给最大值未给尺寸" },
        ],
      },
      {
        id: "pt-2-1-10",
        title: { en: "Find Quadratic Given Vertex and a Point", zh: "由顶点和一点求二次函数" },
        description: { en: "Use vertex form with the given vertex, then solve for $a$ using the additional point.", zh: "用顶点式代入已知顶点，再用另一点求 $a$。" },
        howToRecognize: { en: "Vertex and one other point on the parabola are given.", zh: "已知顶点与抛物线上另一点。" },
        steps: [
          { en: "Write $f(x) = a(x - h)^2 + k$ with the given vertex $(h, k)$", zh: "用已知顶点 $(h, k)$ 写出 $f(x) = a(x - h)^2 + k$" },
          { en: "Substitute the second point and solve for $a$", zh: "代入第二个点解出 $a$" },
          { en: "Write the final equation; expand if requested", zh: "写出最终方程；如需要可展开" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find the quadratic with vertex $(3, -4)$ that passes through $(5, 0)$.", zh: "求顶点为 $(3, -4)$ 且过 $(5, 0)$ 的二次函数。" },
        commonTraps: [
          { en: "Forgetting that the vertex's $x$- and $y$-values are NOT a point you substitute — they fill in $h$ and $k$", zh: "把顶点坐标当作要代入的点（应填入 $h$、$k$）" },
        ],
      },
    ],
  },
  {
    id: "2-2",
    chapterId: "ch-2",
    number: "2.2",
    title: { en: "Polynomial Functions of Higher Degree", zh: "高次多项式函数" },
    description: {
      en: "Use the Leading Coefficient Test, find zeros and multiplicities, and sketch graphs of polynomials.",
      zh: "运用首项系数判别法，求零点及其重数，并绘制多项式函数的图像。",
    },
    learningGoals: [
      { en: "Apply the Leading Coefficient Test to determine end behavior", zh: "应用首项系数判别法确定终态行为" },
      { en: "Find real zeros of a polynomial and their multiplicities", zh: "求多项式的实零点及其重数" },
      { en: "Use the Intermediate Value Theorem to locate zeros", zh: "用介值定理定位零点" },
      { en: "Sketch the graph of a polynomial function", zh: "绘制多项式函数的图像" },
    ],
    keyConcepts: [
      {
        id: "kc-2-2-1",
        title: { en: "Leading Coefficient Test (End Behavior)", zh: "首项系数判别法（终态行为）" },
        explanation: {
          en: "End behavior of a polynomial $f(x)$ depends on its degree $n$ and leading coefficient $a_n$. Even $n$, $a_n > 0$: both ends UP. Even $n$, $a_n < 0$: both ends DOWN. Odd $n$, $a_n > 0$: left DOWN, right UP. Odd $n$, $a_n < 0$: left UP, right DOWN.",
          zh: "多项式 $f(x)$ 的终态行为由次数 $n$ 与首项系数 $a_n$ 决定。偶次 $n$、$a_n > 0$：两端向上。偶次 $n$、$a_n < 0$：两端向下。奇次 $n$、$a_n > 0$：左下右上。奇次 $n$、$a_n < 0$：左上右下。",
        },
        whenToUse: { en: "First step in sketching any polynomial graph", zh: "绘制多项式图像的第一步" },
        commonMistake: { en: "Looking only at leading coefficient sign without considering whether degree is even or odd", zh: "只看首项系数符号，未考虑次数为偶或奇" },
        example: { en: "$f(x) = -2x^4 + \\ldots$: even degree, negative leading ⇒ both ends down", zh: "$f(x) = -2x^4 + \\ldots$：偶次，首项系数为负 ⇒ 两端向下" },
      },
      {
        id: "kc-2-2-2",
        title: { en: "Zeros and Multiplicity", zh: "零点与重数" },
        explanation: {
          en: "If $(x - c)^m$ is a factor of $f(x)$, then $c$ is a zero with multiplicity $m$. Even multiplicity: graph TOUCHES the $x$-axis at $c$ but does not cross. Odd multiplicity: graph CROSSES the $x$-axis at $c$. Higher multiplicity flattens the graph near the zero.",
          zh: "若 $(x - c)^m$ 是 $f(x)$ 的因式，则 $c$ 为重数为 $m$ 的零点。偶重数：图像在 $c$ 处接触 $x$ 轴但不穿过。奇重数：图像在 $c$ 处穿过 $x$ 轴。重数越高，图像在零点附近越平。",
        },
        whenToUse: { en: "Sketching graphs and predicting behavior at each zero", zh: "绘制图像并预测每个零点附近的行为" },
        commonMistake: { en: "Treating every zero as a simple crossing — multiplicity matters", zh: "把每个零点都当作简单穿过——重数有影响" },
        example: { en: "$f(x) = (x - 1)^2 (x + 2)$: $x = 1$ touches (mult $2$), $x = -2$ crosses (mult $1$)", zh: "$f(x) = (x - 1)^2 (x + 2)$：$x = 1$ 接触（重数 $2$）；$x = -2$ 穿过（重数 $1$）" },
      },
      {
        id: "kc-2-2-3",
        title: { en: "Intermediate Value Theorem", zh: "介值定理" },
        explanation: {
          en: "If $f$ is continuous on $[a, b]$ and $f(a)$ and $f(b)$ have opposite signs, then there is at least one zero of $f$ between $a$ and $b$. Polynomials are always continuous.",
          zh: "若 $f$ 在 $[a, b]$ 连续且 $f(a)$ 与 $f(b)$ 符号相反，则 $f$ 在 $a$ 与 $b$ 之间至少有一个零点。多项式始终连续。",
        },
        whenToUse: { en: "Confirm a zero exists in an interval, or narrow down its location", zh: "确认某区间内存在零点或缩小其位置" },
        commonMistake: { en: "Assuming the theorem gives the EXACT zero (it only guarantees existence)", zh: "误以为定理给出精确零点（只保证存在）" },
        example: { en: "$f(x) = x^3 - x - 1$: $f(1) = -1$, $f(2) = 5$ ⇒ zero in $(1, 2)$", zh: "$f(x) = x^3 - x - 1$：$f(1) = -1$，$f(2) = 5$ ⇒ 在 $(1, 2)$ 中有零点" },
      },
    ],
    formulas: [
      {
        id: "f-2-2-1",
        name: { en: "Polynomial Function (Standard Form)", zh: "多项式函数（标准式）" },
        formula: "f(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0",
        variables: [
          { en: "$n$ — degree (non-negative integer)", zh: "$n$ — 次数（非负整数）" },
          { en: "$a_n \\neq 0$ — leading coefficient", zh: "$a_n \\neq 0$ — 首项系数" },
        ],
        whenToUse: { en: "General reference; coefficients drive end behavior and zeros", zh: "通用参考；系数决定终态行为与零点" },
        commonProblemTypes: [
          { en: "Identify degree and leading coefficient", zh: "识别次数与首项系数" },
          { en: "Apply Leading Coefficient Test", zh: "应用首项系数判别法" },
        ],
        example: { en: "$f(x) = -2x^4 + 3x^2 - 5$: degree $4$, leading coefficient $-2$", zh: "$f(x) = -2x^4 + 3x^2 - 5$：次数 $4$，首项系数 $-2$" },
      },
      {
        id: "f-2-2-2",
        name: { en: "Factored Form", zh: "因式分解形式" },
        formula: "f(x) = a (x - c_1)^{m_1} (x - c_2)^{m_2} \\cdots (x - c_k)^{m_k}",
        variables: [
          { en: "$c_i$ — zeros (real)", zh: "$c_i$ — 实零点" },
          { en: "$m_i$ — multiplicity of zero $c_i$", zh: "$m_i$ — 零点 $c_i$ 的重数" },
          { en: "$\\sum m_i \\leq n$ — sum of multiplicities $\\leq$ degree", zh: "$\\sum m_i \\leq n$ — 重数之和 $\\leq$ 次数" },
        ],
        whenToUse: { en: "Reading zeros and multiplicities at a glance", zh: "一眼读出零点与重数" },
        commonProblemTypes: [
          { en: "Identify zero behavior (touch vs cross)", zh: "判断零点处行为（接触或穿过）" },
          { en: "Build a polynomial with given zeros", zh: "由给定零点构造多项式" },
        ],
        example: { en: "$f(x) = 2(x - 3)^2 (x + 1)$: zeros $x = 3$ (mult $2$), $x = -1$ (mult $1$)", zh: "$f(x) = 2(x - 3)^2 (x + 1)$：零点 $x = 3$（重数 $2$）、$x = -1$（重数 $1$）" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-2-2-1",
        title: { en: "Determine End Behavior", zh: "判断终态行为" },
        description: { en: "Apply the Leading Coefficient Test using degree and leading coefficient.", zh: "用次数与首项系数应用首项系数判别法。" },
        howToRecognize: { en: "Polynomial given; problem asks about behavior as $x \\to \\pm\\infty$.", zh: "给定多项式；问 $x \\to \\pm\\infty$ 时的行为。" },
        steps: [
          { en: "Identify the degree and leading coefficient", zh: "识别次数与首项系数" },
          { en: "Apply the four cases of the Leading Coefficient Test", zh: "应用首项系数判别法的四种情形" },
          { en: "State both ends with arrows or words", zh: "用箭头或文字给出两端行为" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Describe the end behavior of $f(x) = 3x^5 - 2x^3 + 7$.", zh: "描述 $f(x) = 3x^5 - 2x^3 + 7$ 的终态行为。" },
        commonTraps: [
          { en: "Looking at any term besides the leading term", zh: "看了非首项的其他项" },
        ],
      },
      {
        id: "pt-2-2-2",
        title: { en: "Find Zeros from a Factored Polynomial", zh: "由因式分解的多项式求零点" },
        description: { en: "Set each factor equal to zero.", zh: "把每个因式置为零。" },
        howToRecognize: { en: "Polynomial is given in factored form.", zh: "给定多项式为因式分解形式。" },
        steps: [
          { en: "Set each factor to $0$", zh: "把每个因式置为 $0$" },
          { en: "Solve each for $x$", zh: "分别解 $x$" },
          { en: "Note multiplicity from each factor's exponent", zh: "由各因式的指数读出重数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find all zeros and multiplicities of $f(x) = -3(x - 2)(x + 5)^3$.", zh: "求 $f(x) = -3(x - 2)(x + 5)^3$ 的所有零点与重数。" },
        commonTraps: [
          { en: "Confusing the constant factor with a zero (the $-3$ does NOT give a zero)", zh: "把常数因式当零点（$-3$ 不产生零点）" },
        ],
      },
      {
        id: "pt-2-2-3",
        title: { en: "Identify Degree and Leading Coefficient", zh: "识别次数与首项系数" },
        description: { en: "Read $n$ and $a_n$ from a polynomial in standard form.", zh: "从标准式多项式中读出 $n$ 与 $a_n$。" },
        howToRecognize: { en: "Polynomial is given (factored or expanded); problem asks for degree and/or leading coefficient.", zh: "给定多项式；问次数或首项系数。" },
        steps: [
          { en: "If factored, expand or use the highest powers from each factor", zh: "若已因式分解，可展开或合计各因式中的最高次" },
          { en: "Degree is the highest power of $x$", zh: "次数为 $x$ 的最高次" },
          { en: "Leading coefficient is the coefficient of that highest power", zh: "首项系数为该最高次的系数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the degree and leading coefficient of $f(x) = -2(x - 1)^3(x + 4)$.", zh: "求 $f(x) = -2(x - 1)^3(x + 4)$ 的次数与首项系数。" },
        commonTraps: [
          { en: "Forgetting to account for ALL factor exponents when getting the degree", zh: "求次数时漏掉某些因式的指数" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-2-2-4",
        title: { en: "Find Real Zeros by Factoring", zh: "通过因式分解求实零点" },
        description: { en: "Factor a polynomial completely (GCF, grouping, special products) then set factors to zero.", zh: "完全因式分解多项式（提取公因子、分组、特殊乘法），再令因式为零。" },
        howToRecognize: { en: "Polynomial given in expanded form; problem asks for real zeros.", zh: "给定展开式；要求实零点。" },
        steps: [
          { en: "Factor out the greatest common factor", zh: "提取最大公因子" },
          { en: "Try grouping or special-product patterns (difference of squares, etc.)", zh: "尝试分组或特殊乘法（平方差等）" },
          { en: "Set each factor equal to $0$ and solve", zh: "每个因式置为 $0$ 求解" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find all real zeros of $f(x) = x^4 - 5x^2 + 4$.", zh: "求 $f(x) = x^4 - 5x^2 + 4$ 的所有实零点。" },
        commonTraps: [
          { en: "Stopping after partial factoring", zh: "只做部分因式分解就停止" },
        ],
      },
      {
        id: "pt-2-2-5",
        title: { en: "Determine Multiplicity of Each Zero", zh: "判断每个零点的重数" },
        description: { en: "Read the exponent of each $(x - c)$ factor.", zh: "读出每个 $(x - c)$ 因式的指数。" },
        howToRecognize: { en: "Factored polynomial; problem asks for multiplicity behaviour.", zh: "因式分解形式；问重数及其行为。" },
        steps: [
          { en: "List each unique zero $c$", zh: "列出每个不同的零点 $c$" },
          { en: "State its exponent as the multiplicity", zh: "把其指数作为重数" },
          { en: "Note: even mult ⇒ touches; odd mult ⇒ crosses", zh: "注：偶重数 ⇒ 接触；奇重数 ⇒ 穿过" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "For $f(x) = (x + 1)^2(x - 3)^4(x - 5)$, give zeros, multiplicities, and behaviour at each.", zh: "对 $f(x) = (x + 1)^2(x - 3)^4(x - 5)$，给出零点、重数及各处行为。" },
        commonTraps: [
          { en: "Mixing up touching and crossing for even/odd multiplicities", zh: "把偶/奇重数对应的接触与穿过弄反" },
        ],
      },
      {
        id: "pt-2-2-6",
        title: { en: "Sketch a Polynomial Graph", zh: "绘制多项式图像" },
        description: { en: "Combine end behavior, zeros, multiplicities, and the $y$-intercept to sketch the graph.", zh: "综合终态行为、零点、重数与 $y$ 截距画图。" },
        howToRecognize: { en: "Problem asks for a sketch, especially with hand-drawn detail.", zh: "题目要求作图，尤其要求手工细节。" },
        steps: [
          { en: "Determine end behavior", zh: "确定终态行为" },
          { en: "Plot all real zeros and note touch/cross behavior", zh: "标出所有实零点并注明接触/穿过" },
          { en: "Plot the $y$-intercept $f(0)$", zh: "标出 $y$ 截距 $f(0)$" },
          { en: "Draw a smooth curve consistent with all features", zh: "画出与所有特征一致的光滑曲线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Sketch $f(x) = -(x - 1)^2(x + 2)$.", zh: "画 $f(x) = -(x - 1)^2(x + 2)$。" },
        commonTraps: [
          { en: "Drawing the wrong direction at a touch zero (graph stays on the same side)", zh: "在接触零点处画成穿过" },
        ],
      },
      {
        id: "pt-2-2-7",
        title: { en: "Apply the Intermediate Value Theorem", zh: "应用介值定理" },
        description: { en: "Confirm a zero exists in $(a, b)$ by showing $f(a)$ and $f(b)$ have opposite signs.", zh: "通过证明 $f(a)$ 与 $f(b)$ 异号确认 $(a, b)$ 内有零点。" },
        howToRecognize: { en: "Problem asks to confirm a zero exists or to narrow its location.", zh: "题目要求确认零点存在或缩小位置。" },
        steps: [
          { en: "Evaluate $f(a)$ and $f(b)$", zh: "求 $f(a)$ 与 $f(b)$" },
          { en: "Confirm signs are opposite", zh: "确认符号相反" },
          { en: "Cite IVT to conclude existence of a zero in $(a, b)$", zh: "引用介值定理得出 $(a, b)$ 内有零点" },
          { en: "If asked, bisect the interval to refine the location", zh: "如要求，用二分法细化位置" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Use IVT to show that $f(x) = x^3 - 4x + 2$ has a zero between $x = 0$ and $x = 1$.", zh: "用介值定理证明 $f(x) = x^3 - 4x + 2$ 在 $0$ 与 $1$ 之间有零点。" },
        commonTraps: [
          { en: "Forgetting to check that $f$ is continuous (it always is for polynomials, but state it)", zh: "忘记说明 $f$ 连续（多项式总连续，但应陈述）" },
        ],
      },
      {
        id: "pt-2-2-8",
        title: { en: "Build a Polynomial with Given Zeros and Multiplicities", zh: "由给定零点与重数构造多项式" },
        description: { en: "Construct $f(x)$ in factored form to match specified zeros, multiplicities, and possibly degree.", zh: "构造因式分解形式的 $f(x)$，匹配给定零点、重数（与可能给定的次数）。" },
        howToRecognize: { en: "Problem lists zeros and multiplicities (and sometimes a leading coefficient or specific point).", zh: "题目列出零点与重数（有时还给首项系数或一点）。" },
        steps: [
          { en: "Write $f(x) = a (x - c_1)^{m_1} (x - c_2)^{m_2} \\cdots$", zh: "写出 $f(x) = a (x - c_1)^{m_1} (x - c_2)^{m_2} \\cdots$" },
          { en: "Use any extra constraint (a known point, leading coefficient) to find $a$", zh: "用额外条件（一已知点、首项系数）求 $a$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Build a polynomial of degree $4$ with zero $x = -1$ (mult $2$), $x = 3$ (mult $1$), $x = 5$ (mult $1$), passing through $(0, 30)$.", zh: "构造一个 $4$ 次多项式，零点 $x = -1$（重数 $2$）、$x = 3$（重数 $1$）、$x = 5$（重数 $1$），且过 $(0, 30)$。" },
        commonTraps: [
          { en: "Mismatched degree from sum of multiplicities", zh: "重数之和与次数不匹配" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-2-2-9",
        title: { en: "Sketch a Polynomial from a List of Conditions", zh: "由条件列表绘制多项式" },
        description: { en: "Build and sketch a polynomial that satisfies given degree, end behavior, zeros, and other features.", zh: "构造并画出满足给定次数、终态行为、零点等条件的多项式。" },
        howToRecognize: { en: "Problem provides constraints without a formula.", zh: "题目给出条件而非公式。" },
        steps: [
          { en: "Pick a degree consistent with end behavior and zero count", zh: "选与终态行为及零点数相符的次数" },
          { en: "Place zeros and choose multiplicities consistent with crossing/touching descriptions", zh: "放置零点，选定与穿过/接触描述一致的重数" },
          { en: "Choose leading coefficient sign for end behavior", zh: "选首项系数符号以匹配终态行为" },
          { en: "Sketch the resulting polynomial", zh: "画出对应多项式" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Sketch a polynomial of degree $5$ with zeros at $x = -2$ (touching), $x = 0$ (crossing), $x = 3$ (touching), and right end going down.", zh: "画一个 $5$ 次多项式：零点 $x = -2$（接触）、$x = 0$（穿过）、$x = 3$（接触），右端向下。" },
        commonTraps: [
          { en: "Sum of multiplicities exceeding degree, or insufficient to meet degree", zh: "重数之和超过次数或不足以达到次数" },
        ],
      },
      {
        id: "pt-2-2-10",
        title: { en: "Application — Polynomial Modeling", zh: "应用——多项式建模" },
        description: { en: "Use a polynomial (often cubic or quartic) to model a real-world quantity such as volume, displacement, or revenue.", zh: "用多项式（常为三次或四次）刻画现实量，如体积、位移或收入。" },
        howToRecognize: { en: "Word problem describes geometry or process leading to a polynomial.", zh: "应用题描述导致多项式的几何或过程。" },
        steps: [
          { en: "Translate the problem into an expression in one variable", zh: "把问题翻译为单变量表达式" },
          { en: "Determine sensible domain restrictions", zh: "确定合理的定义域限制" },
          { en: "Use the model to answer questions (find max, evaluate at a point, find zero)", zh: "用模型回答问题（求极值、求点值、求零点）" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "An open box is made from a $12 \\times 18$ in sheet by cutting equal squares of side $x$ from each corner and folding the sides up. Express volume $V(x)$ as a polynomial and find the value of $x$ that maximizes $V$ (use a graphing tool).", zh: "用 $12 \\times 18$ in 的板，从四角各剪去边长 $x$ 的正方形再折起作开口盒。把体积 $V(x)$ 表为多项式，并用作图工具求使 $V$ 最大的 $x$。" },
        commonTraps: [
          { en: "Wrong domain — $0 < x < 6$ here (must be smaller than half the shorter side)", zh: "定义域错——这里 $0 < x < 6$（应小于较短边的一半）" },
        ],
      },
    ],
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
