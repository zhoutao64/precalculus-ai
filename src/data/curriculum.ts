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
    title: { en: "Polynomial and Synthetic Division", zh: "多项式除法与综合除法" },
    description: {
      en: "Divide polynomials using long division and synthetic division, and apply the Remainder and Factor Theorems.",
      zh: "用长除法与综合除法对多项式做除法，并应用余数定理与因式定理。",
    },
    learningGoals: [
      { en: "Divide polynomials using long division", zh: "用长除法对多项式做除法" },
      { en: "Use synthetic division when dividing by $(x - c)$", zh: "当除式为 $(x - c)$ 时使用综合除法" },
      { en: "Apply the Remainder Theorem to evaluate polynomials", zh: "用余数定理求多项式的函数值" },
      { en: "Apply the Factor Theorem to identify and remove zeros", zh: "用因式定理识别并去除零点" },
    ],
    keyConcepts: [
      {
        id: "kc-2-3-1",
        title: { en: "Polynomial Long Division", zh: "多项式长除法" },
        explanation: {
          en: "Divide $f(x)$ by $d(x)$ to get quotient $q(x)$ and remainder $r(x)$ such that $f(x) = d(x) q(x) + r(x)$ with $\\deg r < \\deg d$. Process is similar to numeric long division.",
          zh: "用 $d(x)$ 去除 $f(x)$ 得商 $q(x)$ 与余式 $r(x)$，使 $f(x) = d(x) q(x) + r(x)$ 且 $\\deg r < \\deg d$。过程与数值长除法相似。",
        },
        whenToUse: { en: "When the divisor is not a simple $(x - c)$ (e.g., $x^2 + 1$)", zh: "当除式不是简单的 $(x - c)$（如 $x^2 + 1$）时" },
        commonMistake: { en: "Forgetting to insert placeholder $0$ for missing-degree terms in the dividend", zh: "被除式中漏写缺失次数项的 $0$ 占位" },
        example: { en: "$\\frac{x^3 - 4x + 1}{x - 2}$ ⇒ $q(x) = x^2 + 2x$, $r = 1$", zh: "$\\frac{x^3 - 4x + 1}{x - 2}$ ⇒ $q(x) = x^2 + 2x$，$r = 1$" },
      },
      {
        id: "kc-2-3-2",
        title: { en: "Synthetic Division", zh: "综合除法" },
        explanation: {
          en: "Synthetic division is a shortcut for dividing by $(x - c)$ that uses only the coefficients. Bring down the leading coefficient, multiply by $c$, add to next column, and repeat. The last number is the remainder.",
          zh: "综合除法是除以 $(x - c)$ 的简便算法，只用系数。带下首项系数，乘以 $c$ 加到下一列，重复进行。最后一个数即余数。",
        },
        whenToUse: { en: "Whenever divisor is exactly $(x - c)$ — much faster than long division", zh: "凡除式正好是 $(x - c)$ 时——比长除法快得多" },
        commonMistake: { en: "Using $-c$ instead of $c$ as the synthetic divisor (or vice versa)", zh: "把综合除法的因子写成 $-c$ 而非 $c$（或反之）" },
        example: { en: "Divide $2x^3 - x^2 + 0x - 5$ by $(x - 3)$: synthetic with $c = 3$ gives $q = 2x^2 + 5x + 15, r = 40$", zh: "用 $(x - 3)$ 除 $2x^3 - x^2 + 0x - 5$：综合除法 $c = 3$，得 $q = 2x^2 + 5x + 15$，$r = 40$" },
      },
      {
        id: "kc-2-3-3",
        title: { en: "Remainder and Factor Theorems", zh: "余数定理与因式定理" },
        explanation: {
          en: "Remainder Theorem: When $f(x)$ is divided by $(x - c)$, the remainder equals $f(c)$. Factor Theorem: $(x - c)$ is a factor of $f$ if and only if $f(c) = 0$. Together they make zero-finding fast.",
          zh: "余数定理：用 $(x - c)$ 除 $f(x)$，余数等于 $f(c)$。因式定理：$(x - c)$ 是 $f$ 的因式当且仅当 $f(c) = 0$。两者结合使求零点变得高效。",
        },
        whenToUse: { en: "Quickly evaluate $f(c)$ via synthetic division, or test whether $c$ is a zero", zh: "用综合除法快速求 $f(c)$，或检验 $c$ 是否为零点" },
        commonMistake: { en: "Confusing the two — Remainder gives a value; Factor gives a yes/no for divisibility", zh: "把两者混淆——余数定理给值；因式定理判断能否整除" },
        example: { en: "$f(x) = x^3 - 4x + 1$, $c = 2$: synthetic remainder is $1$, so $f(2) = 1$ (NOT a zero)", zh: "$f(x) = x^3 - 4x + 1$，$c = 2$：综合余数为 $1$，故 $f(2) = 1$（不是零点）" },
      },
    ],
    formulas: [
      {
        id: "f-2-3-1",
        name: { en: "Division Algorithm", zh: "除法算法" },
        formula: "f(x) = d(x) \\cdot q(x) + r(x), \\quad \\deg r < \\deg d",
        variables: [
          { en: "$f(x)$ — dividend", zh: "$f(x)$ — 被除式" },
          { en: "$d(x)$ — divisor", zh: "$d(x)$ — 除式" },
          { en: "$q(x)$ — quotient", zh: "$q(x)$ — 商" },
          { en: "$r(x)$ — remainder", zh: "$r(x)$ — 余式" },
        ],
        whenToUse: { en: "Foundation for both long and synthetic division", zh: "长除法与综合除法的共同基础" },
        commonProblemTypes: [
          { en: "Express dividend as $d \\cdot q + r$", zh: "把被除式写成 $d \\cdot q + r$" },
        ],
        example: { en: "$x^3 - 4x + 1 = (x - 2)(x^2 + 2x) + 1$", zh: "$x^3 - 4x + 1 = (x - 2)(x^2 + 2x) + 1$" },
      },
      {
        id: "f-2-3-2",
        name: { en: "Remainder Theorem", zh: "余数定理" },
        formula: "f(x) = (x - c) q(x) + f(c)",
        variables: [
          { en: "$c$ — the constant in the divisor $(x - c)$", zh: "$c$ — 除式 $(x - c)$ 中的常数" },
          { en: "$f(c)$ — value of $f$ at $c$, equal to the remainder", zh: "$f(c)$ — $f$ 在 $c$ 处的值，等于余数" },
        ],
        whenToUse: { en: "Evaluate a polynomial at a value via synthetic division (faster than substitution for high degree)", zh: "通过综合除法求多项式值（高次比直接代入更快）" },
        commonProblemTypes: [
          { en: "Find $f(c)$ using synthetic division", zh: "用综合除法求 $f(c)$" },
        ],
        example: { en: "If $f(x) = x^3 - 2x + 1$ and synthetic division by $(x - 2)$ gives remainder $5$, then $f(2) = 5$", zh: "若 $f(x) = x^3 - 2x + 1$ 由 $(x - 2)$ 综合除法余数为 $5$，则 $f(2) = 5$" },
      },
      {
        id: "f-2-3-3",
        name: { en: "Factor Theorem", zh: "因式定理" },
        formula: "(x - c) \\text{ is a factor of } f(x) \\iff f(c) = 0",
        variables: [
          { en: "$c$ — candidate zero", zh: "$c$ — 候选零点" },
        ],
        whenToUse: { en: "Test a candidate zero, or remove a known zero to factor further", zh: "检验候选零点，或除去已知零点继续分解" },
        commonProblemTypes: [
          { en: "Verify a given $c$ is a zero", zh: "验证给定 $c$ 为零点" },
          { en: "Use a found zero to reduce a polynomial's degree", zh: "用找到的零点降次" },
        ],
        example: { en: "$f(x) = x^3 - 7x + 6$: $f(1) = 0$ so $(x - 1)$ is a factor", zh: "$f(x) = x^3 - 7x + 6$：$f(1) = 0$，故 $(x - 1)$ 为因式" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-2-3-1",
        title: { en: "Long Divide by a Linear Divisor", zh: "用一次式做长除法" },
        description: { en: "Perform polynomial long division when the divisor is $(x - c)$.", zh: "当除式为 $(x - c)$ 时做多项式长除法。" },
        howToRecognize: { en: "Problem asks to divide $f(x) \\div (x - c)$ by long division.", zh: "题目要求用长除法计算 $f(x) \\div (x - c)$。" },
        steps: [
          { en: "Write the dividend with placeholder $0$ for missing terms", zh: "把被除式按降幂写出，缺失项用 $0$ 占位" },
          { en: "Divide leading term by $x$ to get the next term of the quotient", zh: "用首项除以 $x$ 得商的下一项" },
          { en: "Multiply, subtract, bring down — repeat until degree of remainder $< $ divisor", zh: "乘、减、下移——重复直到余式次数 $<$ 除式次数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Divide $x^2 + 5x + 6$ by $(x + 2)$ using long division.", zh: "用长除法计算 $(x^2 + 5x + 6) \\div (x + 2)$。" },
        commonTraps: [
          { en: "Sign errors when subtracting the multiplied terms", zh: "减去相乘项时的符号错误" },
        ],
      },
      {
        id: "pt-2-3-2",
        title: { en: "Synthetic Division by $(x - c)$", zh: "用 $(x - c)$ 做综合除法" },
        description: { en: "Use the synthetic procedure to divide quickly.", zh: "用综合除法快速完成除法。" },
        howToRecognize: { en: "Divisor is exactly $(x - c)$.", zh: "除式恰好为 $(x - c)$。" },
        steps: [
          { en: "Write coefficients of $f(x)$ in a row (use $0$ for missing degrees)", zh: "把 $f(x)$ 的系数排成一行（缺失次数补 $0$）" },
          { en: "Place $c$ to the left", zh: "把 $c$ 写在左侧" },
          { en: "Bring down the leading coefficient", zh: "把首项系数带下来" },
          { en: "Multiply by $c$, add to next column; repeat", zh: "乘以 $c$ 加到下一列；重复" },
          { en: "Last number is the remainder; others are quotient coefficients", zh: "最后一个数为余数；其余为商的系数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Use synthetic division to divide $2x^3 - 5x^2 + 3x + 4$ by $(x - 2)$.", zh: "用综合除法计算 $(2x^3 - 5x^2 + 3x + 4) \\div (x - 2)$。" },
        commonTraps: [
          { en: "Using $-c$ instead of $c$ in the synthetic box", zh: "在综合除法框中用 $-c$ 而非 $c$" },
        ],
      },
      {
        id: "pt-2-3-3",
        title: { en: "Find $f(c)$ Using the Remainder Theorem", zh: "用余数定理求 $f(c)$" },
        description: { en: "Use synthetic division to evaluate $f$ at $c$.", zh: "用综合除法求 $f$ 在 $c$ 处的值。" },
        howToRecognize: { en: "Problem asks for $f(c)$ for a higher-degree polynomial.", zh: "题目要求高次多项式的 $f(c)$。" },
        steps: [
          { en: "Set up synthetic division with divisor $(x - c)$", zh: "设置综合除法，除式 $(x - c)$" },
          { en: "Read the remainder — that's $f(c)$", zh: "读出余数——即 $f(c)$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Use the Remainder Theorem to find $f(3)$ for $f(x) = x^4 - 2x^2 + 5$.", zh: "用余数定理求 $f(x) = x^4 - 2x^2 + 5$ 的 $f(3)$。" },
        commonTraps: [
          { en: "Mixing up $f(c)$ (remainder) with $q(c)$ (the quotient)", zh: "把余数 $f(c)$ 与商 $q(c)$ 弄混" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-2-3-4",
        title: { en: "Long Division by a Higher-Degree Divisor", zh: "用高次式做长除法" },
        description: { en: "Divide when divisor is quadratic or higher (synthetic division does not apply).", zh: "除式为二次或更高时做除法（不能用综合除法）。" },
        howToRecognize: { en: "Divisor has degree $\\geq 2$.", zh: "除式次数 $\\geq 2$。" },
        steps: [
          { en: "Set up long division", zh: "建立长除法" },
          { en: "Match leading terms to determine each quotient term", zh: "用首项匹配确定商的每一项" },
          { en: "Subtract and continue until remainder has lower degree than divisor", zh: "减并继续，直到余式次数低于除式" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Divide $x^4 + 3x^3 - 2x + 1$ by $(x^2 - 1)$.", zh: "计算 $(x^4 + 3x^3 - 2x + 1) \\div (x^2 - 1)$。" },
        commonTraps: [
          { en: "Forgetting to align terms by degree", zh: "忘记按次数对齐" },
        ],
      },
      {
        id: "pt-2-3-5",
        title: { en: "Verify a Zero with Factor Theorem", zh: "用因式定理验证零点" },
        description: { en: "Confirm $c$ is a zero of $f$ by showing $f(c) = 0$.", zh: "通过证明 $f(c) = 0$ 确认 $c$ 为 $f$ 的零点。" },
        howToRecognize: { en: "Problem asks if a specific $c$ is a zero, or to verify $(x - c)$ is a factor.", zh: "题目问指定 $c$ 是否为零点，或验证 $(x - c)$ 是否为因式。" },
        steps: [
          { en: "Compute $f(c)$ (substitution or synthetic division)", zh: "求 $f(c)$（代入或综合除法）" },
          { en: "If $f(c) = 0$, conclude $(x - c)$ is a factor", zh: "若 $f(c) = 0$，可知 $(x - c)$ 是因式" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Verify that $x = -3$ is a zero of $f(x) = x^3 + 2x^2 - 5x - 6$.", zh: "验证 $x = -3$ 是 $f(x) = x^3 + 2x^2 - 5x - 6$ 的零点。" },
        commonTraps: [
          { en: "Skipping the check and assuming a candidate works", zh: "未验证就假设候选可用" },
        ],
      },
      {
        id: "pt-2-3-6",
        title: { en: "Find Remainder Without Full Division", zh: "不做完整除法求余数" },
        description: { en: "Use the Remainder Theorem to skip the full division process.", zh: "用余数定理跳过完整除法。" },
        howToRecognize: { en: "Problem asks ONLY for the remainder when dividing by $(x - c)$.", zh: "题目只问 $(x - c)$ 除时的余数。" },
        steps: [
          { en: "Compute $f(c)$ directly via substitution", zh: "直接代入求 $f(c)$" },
          { en: "Report this value as the remainder", zh: "把该值作为余数" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the remainder when $f(x) = 3x^4 - x^3 + 2x - 5$ is divided by $(x + 1)$.", zh: "求 $(x + 1)$ 除 $f(x) = 3x^4 - x^3 + 2x - 5$ 时的余数。" },
        commonTraps: [
          { en: "Performing full division when shortcut suffices", zh: "已可用捷径却做完整除法" },
        ],
      },
      {
        id: "pt-2-3-7",
        title: { en: "Factor Polynomial Using a Known Zero", zh: "已知一个零点对多项式分解" },
        description: { en: "Use synthetic division by $(x - c)$ to drop the degree, then factor the quotient.", zh: "用 $(x - c)$ 综合除法降次后再分解商。" },
        howToRecognize: { en: "A zero $c$ is given (or easily found); problem asks for full factorization.", zh: "给出零点 $c$（或易得）；要求完全分解。" },
        steps: [
          { en: "Synthetic divide by $(x - c)$ to find the quotient", zh: "用 $(x - c)$ 综合除法求商" },
          { en: "Factor the quotient (often a quadratic by now)", zh: "分解商（此时常为二次）" },
          { en: "Combine all factors", zh: "合并所有因式" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Given that $x = 2$ is a zero of $f(x) = x^3 - 4x^2 + x + 6$, factor $f$ completely.", zh: "已知 $x = 2$ 是 $f(x) = x^3 - 4x^2 + x + 6$ 的零点，完全分解 $f$。" },
        commonTraps: [
          { en: "Stopping after synthetic division without factoring the quotient", zh: "综合除法后未继续分解商" },
        ],
      },
      {
        id: "pt-2-3-8",
        title: { en: "Determine If $(x - c)$ Is a Factor", zh: "判断 $(x - c)$ 是否为因式" },
        description: { en: "Apply the Factor Theorem: check whether $f(c) = 0$.", zh: "应用因式定理：检查 $f(c)$ 是否等于 $0$。" },
        howToRecognize: { en: "Problem asks yes/no whether $(x - c)$ divides $f$ evenly.", zh: "题目问 $(x - c)$ 能否整除 $f$。" },
        steps: [
          { en: "Compute $f(c)$", zh: "求 $f(c)$" },
          { en: "If $0$, yes; otherwise no", zh: "若为 $0$，是；否则不是" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Is $(x + 4)$ a factor of $f(x) = x^3 + 5x^2 + 2x - 8$?", zh: "$(x + 4)$ 是否为 $f(x) = x^3 + 5x^2 + 2x - 8$ 的因式？" },
        commonTraps: [
          { en: "Confusing $(x + 4)$ with $c = +4$ (it is $c = -4$)", zh: "把 $(x + 4)$ 当 $c = +4$（应为 $c = -4$）" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-2-3-9",
        title: { en: "Find All Real Zeros via Repeated Synthetic Division", zh: "用反复综合除法求所有实零点" },
        description: { en: "Use the Rational Zero candidates and repeated synthetic division to factor a higher-degree polynomial.", zh: "用有理零点候选与反复综合除法分解高次多项式。" },
        howToRecognize: { en: "Polynomial of degree $\\geq 3$; problem asks for all real zeros.", zh: "多项式次数 $\\geq 3$；要求所有实零点。" },
        steps: [
          { en: "Use the Rational Zero Theorem to list candidates ($\\pm \\frac{p}{q}$)", zh: "用有理零点定理列出候选（$\\pm \\frac{p}{q}$）" },
          { en: "Test candidates by synthetic division until one yields remainder $0$", zh: "用综合除法逐个检验，直到余数为 $0$" },
          { en: "Reduce degree using the quotient and repeat", zh: "用商降次后继续" },
          { en: "Solve final quadratic (or lower) by factoring or quadratic formula", zh: "最后用因式分解或求根公式解二次（或更低）" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find all real zeros of $f(x) = 2x^3 - 3x^2 - 8x - 3$.", zh: "求 $f(x) = 2x^3 - 3x^2 - 8x - 3$ 的所有实零点。" },
        commonTraps: [
          { en: "Forgetting to test both positive and negative candidates", zh: "忘记同时检验正、负候选" },
        ],
      },
      {
        id: "pt-2-3-10",
        title: { en: "Express Result as $f = d \\cdot q + r$", zh: "把结果写成 $f = d \\cdot q + r$" },
        description: { en: "After dividing, write the result in the form prescribed by the Division Algorithm.", zh: "除法完成后按除法算法写出形式。" },
        howToRecognize: { en: "Problem asks to express the dividend in the form $f(x) = d(x) q(x) + r(x)$.", zh: "题目要求把被除式写成 $f(x) = d(x) q(x) + r(x)$。" },
        steps: [
          { en: "Perform the division to get $q(x)$ and $r(x)$", zh: "做除法得到 $q(x)$ 与 $r(x)$" },
          { en: "Write the equation explicitly", zh: "显式写出等式" },
          { en: "Verify by expanding the right side", zh: "把右侧展开核验" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Express $\\frac{x^4 - 3x^2 + 2}{x^2 + x - 1}$ in the form $f = d \\cdot q + r$.", zh: "把 $\\frac{x^4 - 3x^2 + 2}{x^2 + x - 1}$ 写成 $f = d \\cdot q + r$。" },
        commonTraps: [
          { en: "Reporting the remainder with the same degree as the divisor", zh: "余式次数与除式相同（应严格更低）" },
        ],
      },
    ],
  },
  {
    id: "2-4",
    chapterId: "ch-2",
    number: "2.4",
    title: { en: "Complex Numbers", zh: "复数" },
    description: {
      en: "Perform operations with complex numbers and represent them in the complex plane.",
      zh: "对复数进行运算，并在复平面上表示复数。",
    },
    learningGoals: [
      { en: "Add, subtract, multiply, and divide complex numbers", zh: "对复数进行加、减、乘、除运算" },
      { en: "Find the conjugate of a complex number", zh: "求复数的共轭" },
      { en: "Simplify powers of $i$", zh: "化简 $i$ 的幂" },
      { en: "Solve quadratic equations whose roots are complex", zh: "求解根为复数的二次方程" },
    ],
    keyConcepts: [
      {
        id: "kc-2-4-1",
        title: { en: "Imaginary Unit and Standard Form", zh: "虚数单位与标准形式" },
        explanation: {
          en: "The imaginary unit $i$ satisfies $i^2 = -1$. A complex number has the form $a + bi$ where $a, b \\in \\mathbb{R}$. $a$ is the real part, $b$ the imaginary part. Real numbers ($b = 0$) are a subset of complex numbers.",
          zh: "虚数单位 $i$ 满足 $i^2 = -1$。复数形如 $a + bi$，其中 $a, b \\in \\mathbb{R}$。$a$ 为实部，$b$ 为虚部。实数（$b = 0$）是复数的子集。",
        },
        whenToUse: { en: "Whenever working with quantities involving $\\sqrt{-1}$ or quadratic equations with negative discriminants", zh: "处理含 $\\sqrt{-1}$ 的量或判别式为负的二次方程时" },
        commonMistake: { en: "Treating $i$ as a regular variable; squaring it instead of using $i^2 = -1$", zh: "把 $i$ 当作普通变量；只平方而不用 $i^2 = -1$" },
        example: { en: "$\\sqrt{-9} = 3i$, not $3$", zh: "$\\sqrt{-9} = 3i$，不是 $3$" },
      },
      {
        id: "kc-2-4-2",
        title: { en: "Complex Conjugates", zh: "共轭复数" },
        explanation: {
          en: "The conjugate of $a + bi$ is $a - bi$ (sign of imaginary part is flipped). Their product is real: $(a + bi)(a - bi) = a^2 + b^2$. Conjugates are essential for dividing complex numbers.",
          zh: "$a + bi$ 的共轭为 $a - bi$（虚部变号）。两者乘积为实数：$(a + bi)(a - bi) = a^2 + b^2$。共轭在复数除法中至关重要。",
        },
        whenToUse: { en: "Dividing complex numbers, or rationalizing complex denominators", zh: "复数除法或复数分母的有理化" },
        commonMistake: { en: "Changing the sign of the real part instead of the imaginary part", zh: "把实部变号而非虚部变号" },
        example: { en: "Conjugate of $3 - 5i$ is $3 + 5i$; their product is $9 + 25 = 34$", zh: "$3 - 5i$ 的共轭为 $3 + 5i$；乘积为 $9 + 25 = 34$" },
      },
      {
        id: "kc-2-4-3",
        title: { en: "Division by Multiplying by the Conjugate", zh: "用共轭复数做除法" },
        explanation: {
          en: "To divide $\\frac{a + bi}{c + di}$, multiply numerator and denominator by the conjugate $c - di$ to make the denominator real, then write in standard form.",
          zh: "要计算 $\\frac{a + bi}{c + di}$，把分子分母同乘共轭 $c - di$，使分母变为实数，再化为标准形式。",
        },
        whenToUse: { en: "Any complex division problem", zh: "凡是复数除法问题" },
        commonMistake: { en: "Forgetting to multiply BOTH numerator and denominator by the conjugate", zh: "忘记把分子与分母都乘共轭" },
        example: { en: "$\\frac{1}{2 + i} = \\frac{2 - i}{(2)(2) + 1} = \\frac{2 - i}{5} = \\tfrac{2}{5} - \\tfrac{1}{5}i$", zh: "$\\frac{1}{2 + i} = \\frac{2 - i}{(2)(2) + 1} = \\frac{2 - i}{5} = \\tfrac{2}{5} - \\tfrac{1}{5}i$" },
      },
    ],
    formulas: [
      {
        id: "f-2-4-1",
        name: { en: "Powers of $i$", zh: "$i$ 的幂" },
        formula: "i^1 = i, \\; i^2 = -1, \\; i^3 = -i, \\; i^4 = 1, \\; i^{n+4} = i^n",
        variables: [
          { en: "$n$ — non-negative integer", zh: "$n$ — 非负整数" },
        ],
        whenToUse: { en: "Simplify $i^n$ by reducing $n \\bmod 4$", zh: "用 $n \\bmod 4$ 化简 $i^n$" },
        commonProblemTypes: [
          { en: "Simplify $i^{15}$, $i^{42}$, etc.", zh: "化简 $i^{15}$、$i^{42}$ 等" },
        ],
        example: { en: "$i^{15} = i^{12} \\cdot i^3 = 1 \\cdot (-i) = -i$", zh: "$i^{15} = i^{12} \\cdot i^3 = 1 \\cdot (-i) = -i$" },
      },
      {
        id: "f-2-4-2",
        name: { en: "Multiplication of Complex Numbers", zh: "复数乘法" },
        formula: "(a + bi)(c + di) = (ac - bd) + (ad + bc)i",
        variables: [
          { en: "$a, b, c, d \\in \\mathbb{R}$", zh: "$a, b, c, d \\in \\mathbb{R}$" },
        ],
        whenToUse: { en: "Multiply two complex numbers and write in standard form", zh: "复数相乘并化为标准形式" },
        commonProblemTypes: [
          { en: "Expand a product of two complex numbers", zh: "展开两复数之积" },
          { en: "Square a complex number", zh: "对复数平方" },
        ],
        example: { en: "$(2 + 3i)(1 - 4i) = (2 + 12) + (-8 + 3)i = 14 - 5i$", zh: "$(2 + 3i)(1 - 4i) = (2 + 12) + (-8 + 3)i = 14 - 5i$" },
      },
      {
        id: "f-2-4-3",
        name: { en: "Conjugate and Product", zh: "共轭与积" },
        formula: "\\overline{a + bi} = a - bi, \\quad (a + bi)(a - bi) = a^2 + b^2",
        variables: [
          { en: "$a, b \\in \\mathbb{R}$", zh: "$a, b \\in \\mathbb{R}$" },
        ],
        whenToUse: { en: "Divide complex numbers; simplify expressions", zh: "复数除法；化简表达式" },
        commonProblemTypes: [
          { en: "Compute $\\frac{1}{a + bi}$", zh: "求 $\\frac{1}{a + bi}$" },
          { en: "Find modulus squared via $a^2 + b^2$", zh: "用 $a^2 + b^2$ 求模的平方" },
        ],
        example: { en: "$(4 + 3i)(4 - 3i) = 16 + 9 = 25$", zh: "$(4 + 3i)(4 - 3i) = 16 + 9 = 25$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-2-4-1",
        title: { en: "Add or Subtract Complex Numbers", zh: "复数加减" },
        description: { en: "Combine real parts and imaginary parts separately.", zh: "实部与虚部分别合并。" },
        howToRecognize: { en: "Two complex numbers given; problem asks for sum or difference.", zh: "给出两个复数；要求和或差。" },
        steps: [
          { en: "Add (or subtract) the real parts", zh: "实部相加（减）" },
          { en: "Add (or subtract) the imaginary parts", zh: "虚部相加（减）" },
          { en: "Write in standard form $a + bi$", zh: "写成 $a + bi$ 标准形式" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Compute $(3 - 2i) + (4 + 7i)$ and $(3 - 2i) - (4 + 7i)$.", zh: "计算 $(3 - 2i) + (4 + 7i)$ 与 $(3 - 2i) - (4 + 7i)$。" },
        commonTraps: [
          { en: "Sign error when distributing the negative in subtraction", zh: "减法分配负号时的符号错误" },
        ],
      },
      {
        id: "pt-2-4-2",
        title: { en: "Multiply Two Complex Numbers", zh: "两个复数相乘" },
        description: { en: "Use FOIL and apply $i^2 = -1$.", zh: "用乘法分配律展开并用 $i^2 = -1$。" },
        howToRecognize: { en: "Problem asks for the product of two complex numbers.", zh: "题目要求两复数之积。" },
        steps: [
          { en: "Distribute (FOIL)", zh: "分配律展开（FOIL）" },
          { en: "Replace $i^2$ with $-1$", zh: "把 $i^2$ 替换为 $-1$" },
          { en: "Combine like terms; write in $a + bi$ form", zh: "合并同类项；写成 $a + bi$ 形式" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Compute $(2 + 5i)(3 - i)$.", zh: "计算 $(2 + 5i)(3 - i)$。" },
        commonTraps: [
          { en: "Forgetting to apply $i^2 = -1$ at the end", zh: "末尾忘记用 $i^2 = -1$" },
        ],
      },
      {
        id: "pt-2-4-3",
        title: { en: "Find the Conjugate", zh: "求共轭" },
        description: { en: "Flip the sign of the imaginary part.", zh: "把虚部变号。" },
        howToRecognize: { en: "Problem asks for the conjugate of a complex number.", zh: "题目要求复数的共轭。" },
        steps: [
          { en: "Identify real and imaginary parts", zh: "确定实部与虚部" },
          { en: "Keep real part; flip the sign on the imaginary part", zh: "实部不变；虚部变号" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the conjugate of $-4 + 7i$ and verify their product is real.", zh: "求 $-4 + 7i$ 的共轭，并验证两者积为实数。" },
        commonTraps: [
          { en: "Negating both parts (becomes the additive inverse, not the conjugate)", zh: "把两部分都取负（变成相反数而非共轭）" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-2-4-4",
        title: { en: "Divide Complex Numbers", zh: "复数除法" },
        description: { en: "Multiply numerator and denominator by the conjugate of the denominator; simplify.", zh: "把分子分母同乘分母的共轭；化简。" },
        howToRecognize: { en: "Quotient of two complex numbers is requested in standard form.", zh: "要求两复数商的标准形式。" },
        steps: [
          { en: "Identify denominator's conjugate", zh: "找出分母的共轭" },
          { en: "Multiply both numerator and denominator by it", zh: "把分子分母都乘以该共轭" },
          { en: "Simplify; combine real and imaginary parts; divide by real denominator", zh: "化简；合并实部虚部；除以实分母" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Compute $\\frac{3 + 2i}{1 - 4i}$ in standard form.", zh: "把 $\\frac{3 + 2i}{1 - 4i}$ 写成标准形式。" },
        commonTraps: [
          { en: "Multiplying only the denominator by the conjugate", zh: "只把分母乘共轭" },
        ],
      },
      {
        id: "pt-2-4-5",
        title: { en: "Simplify Powers of $i$", zh: "化简 $i$ 的幂" },
        description: { en: "Use $i^4 = 1$ to reduce the exponent.", zh: "用 $i^4 = 1$ 化简指数。" },
        howToRecognize: { en: "Problem asks to simplify $i^n$ for some integer $n$.", zh: "题目要求化简 $i^n$（整数 $n$）。" },
        steps: [
          { en: "Compute $n \\bmod 4$", zh: "计算 $n \\bmod 4$" },
          { en: "Match remainder $0, 1, 2, 3$ to $1, i, -1, -i$ respectively", zh: "余数 $0, 1, 2, 3$ 分别对应 $1, i, -1, -i$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Simplify $i^{37}$.", zh: "化简 $i^{37}$。" },
        commonTraps: [
          { en: "Mismatching the remainder with the wrong power", zh: "余数与对应幂值匹配错误" },
        ],
      },
      {
        id: "pt-2-4-6",
        title: { en: "Square a Complex Number", zh: "复数的平方" },
        description: { en: "Apply $(a + bi)^2 = a^2 - b^2 + 2abi$ or expand directly.", zh: "用 $(a + bi)^2 = a^2 - b^2 + 2abi$ 或直接展开。" },
        howToRecognize: { en: "Problem asks to square a complex number.", zh: "题目要求复数平方。" },
        steps: [
          { en: "Apply $(a + bi)^2 = (a + bi)(a + bi)$", zh: "展开 $(a + bi)^2 = (a + bi)(a + bi)$" },
          { en: "Use FOIL and $i^2 = -1$", zh: "用 FOIL 与 $i^2 = -1$" },
          { en: "Combine to get $a^2 - b^2 + 2abi$", zh: "合并为 $a^2 - b^2 + 2abi$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Compute $(4 - 3i)^2$.", zh: "计算 $(4 - 3i)^2$。" },
        commonTraps: [
          { en: "Forgetting the $2ab$ cross term", zh: "漏掉 $2ab$ 交叉项" },
        ],
      },
      {
        id: "pt-2-4-7",
        title: { en: "Solve a Quadratic with Complex Roots", zh: "解根为复数的二次方程" },
        description: { en: "Apply the quadratic formula when the discriminant is negative; simplify the imaginary roots.", zh: "判别式为负时用求根公式，化简复数根。" },
        howToRecognize: { en: "Quadratic equation with $b^2 - 4ac < 0$.", zh: "二次方程 $b^2 - 4ac < 0$。" },
        steps: [
          { en: "Compute discriminant; if negative, factor out $-1$ as $i$", zh: "求判别式；若为负，把 $-1$ 提出为 $i$" },
          { en: "Apply quadratic formula", zh: "应用求根公式" },
          { en: "Simplify both roots in $a + bi$ form", zh: "把两根化为 $a + bi$ 形式" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $x^2 + 2x + 5 = 0$.", zh: "解 $x^2 + 2x + 5 = 0$。" },
        commonTraps: [
          { en: "Forgetting to take $\\sqrt{-1} = i$ correctly out of the radical", zh: "未正确从根号中提出 $\\sqrt{-1} = i$" },
        ],
      },
      {
        id: "pt-2-4-8",
        title: { en: "Plot a Complex Number in the Complex Plane", zh: "在复平面上标记复数" },
        description: { en: "Treat real part as horizontal coordinate, imaginary part as vertical.", zh: "把实部作横坐标，虚部作纵坐标。" },
        howToRecognize: { en: "Problem asks for graphical representation.", zh: "题目要求图形表示。" },
        steps: [
          { en: "Identify $a$ (horizontal) and $b$ (vertical) of $a + bi$", zh: "识别 $a + bi$ 的 $a$（横）与 $b$（纵）" },
          { en: "Plot the point $(a, b)$ on the complex plane", zh: "在复平面上标出 $(a, b)$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Plot $-3 + 4i$ and $2 - i$ in the complex plane.", zh: "在复平面上标出 $-3 + 4i$ 与 $2 - i$。" },
        commonTraps: [
          { en: "Switching horizontal and vertical axes", zh: "弄反横纵轴" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-2-4-9",
        title: { en: "Simplify Multi-Step Complex Expressions", zh: "化简多步骤复数表达式" },
        description: { en: "Combine arithmetic operations (mult, div, powers of $i$) into a single simplified standard form.", zh: "把多步运算（乘、除、$i$ 的幂）合并为单一标准形式。" },
        howToRecognize: { en: "Expression mixes multiple complex operations.", zh: "表达式含多种复数运算。" },
        steps: [
          { en: "Simplify any powers of $i$ first", zh: "先化简 $i$ 的幂" },
          { en: "Distribute, multiply, and reduce $i^2$", zh: "分配、相乘、化简 $i^2$" },
          { en: "If a quotient remains, multiply by conjugate of denominator", zh: "若有商，乘分母共轭" },
          { en: "Write final answer in $a + bi$ form", zh: "最终写成 $a + bi$ 形式" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Simplify $\\frac{(2 + i)^2}{1 - i} + i^{27}$.", zh: "化简 $\\frac{(2 + i)^2}{1 - i} + i^{27}$。" },
        commonTraps: [
          { en: "Skipping intermediate simplification of $(2 + i)^2$ before dividing", zh: "除法前未先化简 $(2 + i)^2$" },
        ],
      },
      {
        id: "pt-2-4-10",
        title: { en: "Verify a Complex Number Is a Zero of a Polynomial", zh: "验证某复数为多项式的零点" },
        description: { en: "Substitute and simplify; if the result is $0$, it's a zero.", zh: "代入化简；若结果为 $0$，则为零点。" },
        howToRecognize: { en: "Problem asks to confirm $a + bi$ is a zero of a given polynomial.", zh: "题目要求确认 $a + bi$ 是给定多项式的零点。" },
        steps: [
          { en: "Substitute $a + bi$ for $x$", zh: "把 $a + bi$ 代入 $x$" },
          { en: "Compute each power, applying $i^2 = -1$ each time", zh: "逐项求幂，使用 $i^2 = -1$" },
          { en: "Combine; result should be $0 + 0i$", zh: "合并；结果应为 $0 + 0i$" },
          { en: "Note: complex zeros come in conjugate pairs for real-coefficient polynomials", zh: "注：实系数多项式的复零点成共轭对" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Verify that $1 + 2i$ is a zero of $f(x) = x^2 - 2x + 5$.", zh: "验证 $1 + 2i$ 是 $f(x) = x^2 - 2x + 5$ 的零点。" },
        commonTraps: [
          { en: "Computing $(a + bi)^2$ as $a^2 + b^2 i^2$ instead of $a^2 - b^2 + 2abi$", zh: "把 $(a + bi)^2$ 当作 $a^2 + b^2 i^2$，应为 $a^2 - b^2 + 2abi$" },
        ],
      },
    ],
  },
  {
    id: "2-5",
    chapterId: "ch-2",
    number: "2.5",
    title: { en: "Zeros of Polynomial Functions", zh: "多项式函数的零点" },
    description: {
      en: "Use the Fundamental Theorem of Algebra, the Rational Zero Test, and Descartes's Rule of Signs to find zeros.",
      zh: "运用代数基本定理、有理零点检验法及笛卡尔符号法则求多项式的零点。",
    },
    learningGoals: [
      { en: "Apply the Fundamental Theorem of Algebra to count zeros", zh: "用代数基本定理统计零点个数" },
      { en: "Use the Rational Zero Theorem to list candidate rational zeros", zh: "用有理零点定理列出候选有理零点" },
      { en: "Apply Descartes's Rule of Signs to bound positive and negative zeros", zh: "用笛卡尔符号法则估计正、负零点的个数" },
      { en: "Find ALL zeros (real and complex) of a polynomial", zh: "求多项式的所有零点（实根与复根）" },
    ],
    keyConcepts: [
      {
        id: "kc-2-5-1",
        title: { en: "Fundamental Theorem of Algebra", zh: "代数基本定理" },
        explanation: {
          en: "Every polynomial of degree $n \\geq 1$ has exactly $n$ complex zeros, counted with multiplicity. Combined with the Linear Factorization Theorem, this means $f(x) = a_n (x - c_1)(x - c_2) \\cdots (x - c_n)$ over the complex numbers.",
          zh: "次数 $n \\geq 1$ 的多项式恰好有 $n$ 个复零点（计入重数）。结合线性因式分解定理，意味着在复数域上 $f(x) = a_n (x - c_1)(x - c_2) \\cdots (x - c_n)$。",
        },
        whenToUse: { en: "To predict the total number of zeros of a polynomial", zh: "预测多项式零点总数" },
        commonMistake: { en: "Counting only real zeros (some may be complex)", zh: "只数实零点（可能还有复零点）" },
        example: { en: "$f(x) = x^4 + 1$: degree $4$ ⇒ 4 complex zeros (no real zeros)", zh: "$f(x) = x^4 + 1$：次数 $4$ ⇒ 4 个复零点（无实根）" },
      },
      {
        id: "kc-2-5-2",
        title: { en: "Rational Zero Theorem", zh: "有理零点定理" },
        explanation: {
          en: "If $f(x)$ has integer coefficients and $\\frac{p}{q}$ (in lowest terms) is a rational zero, then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$. List ALL $\\pm \\frac{p}{q}$ candidates, then test each.",
          zh: "若 $f(x)$ 系数为整数且 $\\frac{p}{q}$（最简）为有理零点，则 $p \\mid a_0$（整除常数项）且 $q \\mid a_n$（整除首项系数）。列出所有 $\\pm \\frac{p}{q}$ 候选并逐一检验。",
        },
        whenToUse: { en: "Generate the (finite) list of possible rational zeros to test", zh: "生成（有限的）可能有理零点列表" },
        commonMistake: { en: "Forgetting to include negative candidates, or simplifying $p/q$ before listing", zh: "忘记包含负候选，或在列表前就化简 $p/q$" },
        example: { en: "$f(x) = 2x^3 - x^2 - 7x + 6$: candidates $\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\tfrac{1}{2}, \\pm \\tfrac{3}{2}$", zh: "$f(x) = 2x^3 - x^2 - 7x + 6$：候选 $\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\tfrac{1}{2}, \\pm \\tfrac{3}{2}$" },
      },
      {
        id: "kc-2-5-3",
        title: { en: "Descartes's Rule of Signs and Conjugate Pairs", zh: "笛卡尔符号法则与共轭对" },
        explanation: {
          en: "Descartes's Rule: number of POSITIVE real zeros equals the number of sign changes in $f(x)$ or less by an even integer; number of NEGATIVE real zeros equals sign changes in $f(-x)$ or less by an even integer. Conjugate Pairs: complex zeros of real-coefficient polynomials come in conjugate pairs.",
          zh: "笛卡尔法则：正实根数等于 $f(x)$ 系数符号变化数，或减去若干个偶数；负实根数等于 $f(-x)$ 的符号变化数，或减去若干个偶数。共轭对定理：实系数多项式的复零点成共轭对出现。",
        },
        whenToUse: { en: "Estimate how many real zeros to look for; identify complex zero pairs", zh: "估计实零点的可能个数；识别复零点的成对出现" },
        commonMistake: { en: "Forgetting that the actual count may be LESS than the maximum by 2, 4, ...", zh: "忘记实际个数可能比最大值少 2、4 ……" },
        example: { en: "$f(x) = x^3 - 3x + 1$: $f(x)$ has 2 sign changes, $f(-x) = -x^3 + 3x + 1$ has 1 sign change ⇒ 2 or 0 positive, exactly 1 negative", zh: "$f(x) = x^3 - 3x + 1$：$f(x)$ 有 2 次符号变化，$f(-x) = -x^3 + 3x + 1$ 有 1 次 ⇒ 正实根 2 或 0 个，负实根恰 1 个" },
      },
    ],
    formulas: [
      {
        id: "f-2-5-1",
        name: { en: "Linear Factorization Theorem", zh: "线性因式分解定理" },
        formula: "f(x) = a_n (x - c_1)(x - c_2) \\cdots (x - c_n)",
        variables: [
          { en: "$c_1, \\ldots, c_n$ — complex zeros (real or non-real)", zh: "$c_1, \\ldots, c_n$ — 复零点（实数或非实数）" },
          { en: "$a_n$ — leading coefficient", zh: "$a_n$ — 首项系数" },
        ],
        whenToUse: { en: "Express any polynomial as a product of linear factors over $\\mathbb{C}$", zh: "把多项式在 $\\mathbb{C}$ 上写为一次因式之积" },
        commonProblemTypes: [
          { en: "Build $f$ from a list of all zeros", zh: "由所有零点构造 $f$" },
        ],
        example: { en: "Zeros $1, -2, 3$, leading $a_3 = 2$: $f(x) = 2(x - 1)(x + 2)(x - 3)$", zh: "零点 $1, -2, 3$，首项 $a_3 = 2$：$f(x) = 2(x - 1)(x + 2)(x - 3)$" },
      },
      {
        id: "f-2-5-2",
        name: { en: "Rational Zero Theorem", zh: "有理零点定理" },
        formula: "\\text{Possible rational zeros} = \\pm \\frac{p}{q}, \\quad p \\mid a_0, \\; q \\mid a_n",
        variables: [
          { en: "$a_0$ — constant term", zh: "$a_0$ — 常数项" },
          { en: "$a_n$ — leading coefficient", zh: "$a_n$ — 首项系数" },
        ],
        whenToUse: { en: "Generate candidate rational zeros for testing", zh: "生成待检验的候选有理零点" },
        commonProblemTypes: [
          { en: "List candidates and test via synthetic division", zh: "列出候选并用综合除法检验" },
        ],
        example: { en: "$f(x) = 3x^3 - 2x^2 + 4x - 1$: candidates $\\pm 1, \\pm \\tfrac{1}{3}$", zh: "$f(x) = 3x^3 - 2x^2 + 4x - 1$：候选 $\\pm 1, \\pm \\tfrac{1}{3}$" },
      },
      {
        id: "f-2-5-3",
        name: { en: "Conjugate Pairs Theorem", zh: "共轭对定理" },
        formula: "a + bi \\text{ is a zero} \\Rightarrow a - bi \\text{ is also a zero (for real-coef polynomials)}",
        variables: [
          { en: "$a, b \\in \\mathbb{R}$, $b \\neq 0$", zh: "$a, b \\in \\mathbb{R}$，$b \\neq 0$" },
        ],
        whenToUse: { en: "Find the conjugate zero \"for free\" once one complex zero is known", zh: "已知一个复零点，立即得到其共轭也是零点" },
        commonProblemTypes: [
          { en: "Build a polynomial given complex zeros and required real coefficients", zh: "由复零点（要求实系数）构造多项式" },
        ],
        example: { en: "If $2 + 3i$ is a zero, so is $2 - 3i$; their factor product is $(x^2 - 4x + 13)$", zh: "若 $2 + 3i$ 为零点，则 $2 - 3i$ 也是；两因式之积为 $(x^2 - 4x + 13)$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-2-5-1",
        title: { en: "Count Total Zeros via Fundamental Theorem", zh: "用基本定理统计零点总数" },
        description: { en: "State the number of complex zeros (counted with multiplicity) for a given polynomial.", zh: "给出给定多项式的复零点个数（计入重数）。" },
        howToRecognize: { en: "Problem asks how many zeros a polynomial has.", zh: "题目问多项式有多少零点。" },
        steps: [
          { en: "Identify the degree $n$", zh: "识别次数 $n$" },
          { en: "Conclude exactly $n$ complex zeros (with multiplicity)", zh: "得出恰好 $n$ 个复零点（计入重数）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "How many zeros (counted with multiplicity) does $f(x) = 2x^5 - x^3 + 7$ have?", zh: "$f(x) = 2x^5 - x^3 + 7$ 有多少个零点（计入重数）？" },
        commonTraps: [
          { en: "Counting only the visible terms instead of using the degree", zh: "只数明显的项而未用次数" },
        ],
      },
      {
        id: "pt-2-5-2",
        title: { en: "List Rational Zero Candidates", zh: "列出有理零点候选" },
        description: { en: "Apply the Rational Zero Theorem to generate $\\pm \\frac{p}{q}$.", zh: "用有理零点定理生成 $\\pm \\frac{p}{q}$。" },
        howToRecognize: { en: "Polynomial has integer coefficients; problem asks for possible rational zeros.", zh: "多项式系数为整数；要求可能的有理零点。" },
        steps: [
          { en: "List positive divisors of constant term ($p$)", zh: "列出常数项的正因子 $p$" },
          { en: "List positive divisors of leading coefficient ($q$)", zh: "列出首项系数的正因子 $q$" },
          { en: "Form all $\\pm \\frac{p}{q}$ in lowest terms", zh: "组合所有 $\\pm \\frac{p}{q}$（最简）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "List all possible rational zeros of $f(x) = 2x^3 - 5x^2 + x + 2$.", zh: "列出 $f(x) = 2x^3 - 5x^2 + x + 2$ 的所有可能有理零点。" },
        commonTraps: [
          { en: "Forgetting the negative versions", zh: "忘记负的候选" },
        ],
      },
      {
        id: "pt-2-5-3",
        title: { en: "Count Sign Changes for Descartes's Rule", zh: "数符号变化数（笛卡尔法则）" },
        description: { en: "State the maximum number of positive (and negative) real zeros.", zh: "给出正（与负）实零点的最大个数。" },
        howToRecognize: { en: "Problem mentions Descartes's Rule or asks for possible numbers of real zeros.", zh: "题目提到笛卡尔法则或问可能的实零点数。" },
        steps: [
          { en: "Count sign changes in $f(x)$ — gives max positive real zeros", zh: "数 $f(x)$ 的符号变化——正实根数的最大值" },
          { en: "Compute $f(-x)$, count sign changes — gives max negative real zeros", zh: "求 $f(-x)$ 后数符号变化——负实根数的最大值" },
          { en: "Actual count differs from max by an even integer (0, 2, 4, ...)", zh: "实际个数与最大值差为偶数（0、2、4 ……）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Use Descartes's Rule to describe possible numbers of positive and negative real zeros of $f(x) = x^4 - 3x^3 + 2x - 5$.", zh: "用笛卡尔法则描述 $f(x) = x^4 - 3x^3 + 2x - 5$ 可能的正、负实根数。" },
        commonTraps: [
          { en: "Forgetting to also state the \"less by even number\" possibilities", zh: "忘记同时给出\"减去偶数\"的可能性" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-2-5-4",
        title: { en: "Test Rational Candidates with Synthetic Division", zh: "用综合除法检验有理候选" },
        description: { en: "Run candidates through synthetic division until a remainder of $0$ identifies a zero.", zh: "用综合除法逐个检验候选，余数为 $0$ 即找到一个零点。" },
        howToRecognize: { en: "Candidates are listed; problem asks which (if any) are zeros.", zh: "已列出候选；问哪些是零点。" },
        steps: [
          { en: "Pick a candidate", zh: "选一个候选" },
          { en: "Synthetic divide; remainder $0$ ⇒ it's a zero", zh: "做综合除法；余数 $0$ ⇒ 该值为零点" },
          { en: "Use the quotient to continue testing remaining candidates", zh: "用商继续检验剩余候选" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Test the candidates from $f(x) = 2x^3 - 5x^2 + x + 2$ to find all rational zeros.", zh: "对 $f(x) = 2x^3 - 5x^2 + x + 2$ 的候选进行检验，找出所有有理零点。" },
        commonTraps: [
          { en: "Stopping after finding one zero before testing the reduced polynomial", zh: "找到一个零点就停止，未对降次后的多项式继续检验" },
        ],
      },
      {
        id: "pt-2-5-5",
        title: { en: "Find All Real Zeros of a Polynomial", zh: "求多项式的所有实零点" },
        description: { en: "Combine Rational Zero Theorem, synthetic division, and quadratic factoring.", zh: "结合有理零点定理、综合除法与二次分解。" },
        howToRecognize: { en: "Higher-degree polynomial; problem asks for all real zeros.", zh: "高次多项式；要求所有实零点。" },
        steps: [
          { en: "List rational candidates", zh: "列出有理候选" },
          { en: "Find one rational zero by synthetic division", zh: "用综合除法找到一个有理零点" },
          { en: "Reduce degree using the quotient", zh: "用商降次" },
          { en: "Repeat or solve the resulting quadratic", zh: "重复或解最终二次" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find all real zeros of $f(x) = x^4 - x^3 - 7x^2 + 13x - 6$.", zh: "求 $f(x) = x^4 - x^3 - 7x^2 + 13x - 6$ 的所有实零点。" },
        commonTraps: [
          { en: "Skipping the final quadratic factoring step", zh: "漏掉最后一步对二次的分解" },
        ],
      },
      {
        id: "pt-2-5-6",
        title: { en: "Use a Complex Zero and Conjugate Pairs", zh: "利用复零点及共轭对" },
        description: { en: "Given one complex zero, use the conjugate pair to factor and find remaining zeros.", zh: "由一个复零点用共轭对因式分解并找出其余零点。" },
        howToRecognize: { en: "A complex zero is given; problem asks for the rest.", zh: "已给出一个复零点；要求其余零点。" },
        steps: [
          { en: "State the conjugate as another zero", zh: "由共轭定理得另一个零点" },
          { en: "Form the quadratic factor from the conjugate pair", zh: "用共轭对生成对应二次因式" },
          { en: "Divide to find the remaining factor", zh: "用除法求剩余因式" },
          { en: "Solve to find any remaining zeros", zh: "求解剩余零点" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Given that $2 + i$ is a zero of $f(x) = x^3 - 3x^2 - x + 5$, find all zeros.", zh: "已知 $2 + i$ 是 $f(x) = x^3 - 3x^2 - x + 5$ 的零点，求所有零点。" },
        commonTraps: [
          { en: "Forgetting the conjugate is also a zero", zh: "忘记共轭也是零点" },
        ],
      },
      {
        id: "pt-2-5-7",
        title: { en: "Build a Polynomial Given Zeros", zh: "由零点构造多项式" },
        description: { en: "Construct a polynomial with required real coefficients from a list of zeros (some possibly complex).", zh: "由零点列表（可能含复数）构造满足实系数要求的多项式。" },
        howToRecognize: { en: "Problem provides zeros and asks for the polynomial.", zh: "题目给出零点要求构造多项式。" },
        steps: [
          { en: "Add conjugates as needed for real coefficients", zh: "为保证实系数，添加必要的共轭" },
          { en: "Form linear factors $(x - c)$ for each zero", zh: "对每个零点写出一次因式 $(x - c)$" },
          { en: "Multiply factors and apply leading coefficient", zh: "把所有因式相乘并加上首项系数" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find a polynomial with integer coefficients and zeros $1, -3, 2 + i$.", zh: "求一个整系数且零点为 $1, -3, 2 + i$ 的多项式。" },
        commonTraps: [
          { en: "Skipping the conjugate, leaving non-real coefficients", zh: "未添加共轭，结果系数非实" },
        ],
      },
      {
        id: "pt-2-5-8",
        title: { en: "Apply Descartes's Rule to Narrow Possibilities", zh: "用笛卡尔法则缩小可能性" },
        description: { en: "Use sign-change counts to constrain how many real zeros are positive vs negative.", zh: "用符号变化数限制正负实根数。" },
        howToRecognize: { en: "Problem asks for possible numbers of positive/negative real zeros.", zh: "题目问可能的正负实根数。" },
        steps: [
          { en: "Count sign changes in $f(x)$ → max positive real zeros", zh: "数 $f(x)$ 的符号变化 → 正实根数最大值" },
          { en: "Count sign changes in $f(-x)$ → max negative real zeros", zh: "数 $f(-x)$ 的符号变化 → 负实根数最大值" },
          { en: "List all possibilities (max, max-2, max-4, ...) for each", zh: "对每个分别列出所有可能（最大值、减 2、减 4 ……）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Determine the possible numbers of positive and negative real zeros of $f(x) = 2x^4 - 3x^3 + x^2 - 5x + 1$.", zh: "求 $f(x) = 2x^4 - 3x^3 + x^2 - 5x + 1$ 可能的正负实根数。" },
        commonTraps: [
          { en: "Reporting only the maximum without the lesser possibilities", zh: "只报最大值，未列其他可能" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-2-5-9",
        title: { en: "Find ALL Zeros (Real and Complex)", zh: "求所有零点（实根与复根）" },
        description: { en: "Combine all techniques to identify every zero including complex pairs.", zh: "综合所有方法找出每个零点，包括复共轭对。" },
        howToRecognize: { en: "Problem demands a complete zero list, not just real zeros.", zh: "题目要求所有零点，而非仅实根。" },
        steps: [
          { en: "Use Rational Zero Theorem and synthetic division for rational zeros", zh: "用有理零点定理和综合除法找有理零点" },
          { en: "Reduce until a quadratic remains", zh: "降次至剩余为二次" },
          { en: "Solve the quadratic (real or complex roots)", zh: "求解二次（实根或复根）" },
          { en: "List ALL zeros", zh: "列出所有零点" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find all zeros of $f(x) = x^4 - 2x^3 + 6x^2 - 8x + 8$.", zh: "求 $f(x) = x^4 - 2x^3 + 6x^2 - 8x + 8$ 的所有零点。" },
        commonTraps: [
          { en: "Stopping at real zeros and missing complex ones", zh: "只到实根就停，漏掉复根" },
        ],
      },
      {
        id: "pt-2-5-10",
        title: { en: "Combine All Tools — Strategy Problem", zh: "综合所有工具——策略问题" },
        description: { en: "Coordinate Descartes's Rule, the Rational Zero Theorem, and synthetic division with minimal trial and error.", zh: "把笛卡尔法则、有理零点定理与综合除法结合，尽量减少试错。" },
        howToRecognize: { en: "Polynomial degree $\\geq 4$; problem rewards strategy.", zh: "多项式次数 $\\geq 4$；要求合理策略。" },
        steps: [
          { en: "Apply Descartes's Rule to predict positive/negative real zero counts", zh: "用笛卡尔法则预测正负实根数" },
          { en: "Use Rational Zero Theorem to list candidates", zh: "用有理零点定理列出候选" },
          { en: "Test candidates that match Descartes's signs first", zh: "优先检验符号与笛卡尔法则相符的候选" },
          { en: "Reduce and repeat until factored completely", zh: "降次重复直到完全分解" },
          { en: "Solve any remaining quadratic for complex zeros", zh: "对剩余二次求解（含复根）" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Use Descartes's Rule, the Rational Zero Theorem, and synthetic division to find all zeros of $f(x) = 3x^4 - 11x^3 + 13x^2 - 11x + 6$.", zh: "结合笛卡尔法则、有理零点定理与综合除法，求 $f(x) = 3x^4 - 11x^3 + 13x^2 - 11x + 6$ 的所有零点。" },
        commonTraps: [
          { en: "Doing the candidates exhaustively without using Descartes's Rule for guidance", zh: "穷举所有候选而未用笛卡尔法则指引" },
        ],
      },
    ],
  },
  {
    id: "2-6",
    chapterId: "ch-2",
    number: "2.6",
    title: { en: "Rational Functions", zh: "有理函数" },
    description: {
      en: "Find domains, asymptotes, and intercepts of rational functions, and sketch their graphs.",
      zh: "求有理函数的定义域、渐近线与截距，并绘制其图像。",
    },
    learningGoals: [
      { en: "Find the domain of a rational function", zh: "求有理函数的定义域" },
      { en: "Identify vertical, horizontal, and slant asymptotes", zh: "识别垂直、水平与斜渐近线" },
      { en: "Locate holes from common factors", zh: "由公因式识别缺口" },
      { en: "Sketch graphs of rational functions", zh: "绘制有理函数的图像" },
    ],
    keyConcepts: [
      {
        id: "kc-2-6-1",
        title: { en: "Vertical Asymptotes and Holes", zh: "垂直渐近线与缺口" },
        explanation: {
          en: "After fully simplifying $f(x) = \\frac{N(x)}{D(x)}$, vertical asymptotes occur where the simplified $D(x) = 0$. If a factor cancels between $N$ and $D$, that $x$-value is a HOLE (removable discontinuity), not a vertical asymptote.",
          zh: "把 $f(x) = \\frac{N(x)}{D(x)}$ 充分化简后，简化分母 $D(x) = 0$ 处为垂直渐近线。若 $N$ 与 $D$ 间有公因式约去，对应 $x$ 值为缺口（可去间断点），而非垂直渐近线。",
        },
        whenToUse: { en: "Always simplify first; then identify VAs and holes", zh: "始终先化简；再判定垂直渐近线与缺口" },
        commonMistake: { en: "Treating canceled factors as vertical asymptotes", zh: "把已约去的因式当作垂直渐近线" },
        example: { en: "$f(x) = \\frac{x^2 - 4}{x - 2} = x + 2$ (with hole at $x = 2$); no vertical asymptote", zh: "$f(x) = \\frac{x^2 - 4}{x - 2} = x + 2$（$x = 2$ 处有缺口）；无垂直渐近线" },
      },
      {
        id: "kc-2-6-2",
        title: { en: "Horizontal and Slant Asymptotes", zh: "水平渐近线与斜渐近线" },
        explanation: {
          en: "Compare degrees of numerator $n$ and denominator $d$. Case 1: $n < d$ ⇒ horizontal asymptote $y = 0$. Case 2: $n = d$ ⇒ horizontal asymptote $y = \\frac{a_n}{b_d}$ (ratio of leading coefficients). Case 3: $n = d + 1$ ⇒ slant (oblique) asymptote, found by long division. Case 4: $n > d + 1$ ⇒ no horizontal/slant asymptote.",
          zh: "比较分子分母次数 $n$、$d$。情形 1：$n < d$ ⇒ 水平渐近线 $y = 0$。情形 2：$n = d$ ⇒ 水平渐近线 $y = \\frac{a_n}{b_d}$（首项系数之比）。情形 3：$n = d + 1$ ⇒ 斜渐近线，由长除法求得。情形 4：$n > d + 1$ ⇒ 无水平或斜渐近线。",
        },
        whenToUse: { en: "Determine end behavior of a rational function", zh: "判断有理函数的终态行为" },
        commonMistake: { en: "Reporting $y = 0$ as horizontal asymptote when degrees are equal", zh: "次数相等却报 $y = 0$ 为水平渐近线" },
        example: { en: "$f(x) = \\frac{2x^2 + 1}{x^2 - 4}$: $y = 2$ horizontal asymptote", zh: "$f(x) = \\frac{2x^2 + 1}{x^2 - 4}$：水平渐近线 $y = 2$" },
      },
      {
        id: "kc-2-6-3",
        title: { en: "Sketching Rational Functions", zh: "绘制有理函数" },
        explanation: {
          en: "Standard checklist: (1) simplify; (2) find domain restrictions; (3) find vertical asymptotes and holes; (4) find horizontal or slant asymptote; (5) find $x$- and $y$-intercepts; (6) plot a few points; (7) use sign analysis to determine behavior near asymptotes.",
          zh: "标准步骤：(1) 化简；(2) 求定义域限制；(3) 求垂直渐近线与缺口；(4) 求水平或斜渐近线；(5) 求 $x$、$y$ 截距；(6) 描几个点；(7) 用符号分析判定渐近线附近的行为。",
        },
        whenToUse: { en: "When a complete graph of a rational function is required", zh: "需要画出有理函数完整图像时" },
        commonMistake: { en: "Drawing the graph crossing a vertical asymptote (it never can)", zh: "画的图像穿过垂直渐近线（不可能）" },
        example: { en: "$f(x) = \\frac{1}{x - 3}$: VA at $x = 3$, HA at $y = 0$, no $x$-intercept", zh: "$f(x) = \\frac{1}{x - 3}$：垂直渐近线 $x = 3$，水平渐近线 $y = 0$，无 $x$ 截距" },
      },
    ],
    formulas: [
      {
        id: "f-2-6-1",
        name: { en: "Vertical Asymptote Rule", zh: "垂直渐近线规则" },
        formula: "x = c \\text{ is VA} \\iff D(c) = 0 \\text{ AND } N(c) \\neq 0 \\text{ (after simplification)}",
        variables: [
          { en: "$N(x), D(x)$ — numerator and denominator (simplified)", zh: "$N(x), D(x)$ — 化简后的分子与分母" },
        ],
        whenToUse: { en: "Identify vertical asymptotes after simplification", zh: "化简后识别垂直渐近线" },
        commonProblemTypes: [
          { en: "Distinguish asymptotes from holes", zh: "区分渐近线与缺口" },
        ],
        example: { en: "$f(x) = \\frac{x + 1}{x^2 - 9}$: VAs at $x = 3$ and $x = -3$", zh: "$f(x) = \\frac{x + 1}{x^2 - 9}$：垂直渐近线 $x = 3$ 与 $x = -3$" },
      },
      {
        id: "f-2-6-2",
        name: { en: "Horizontal Asymptote Rule", zh: "水平渐近线规则" },
        formula: "y = \\begin{cases} 0 & n < d \\\\ \\dfrac{a_n}{b_d} & n = d \\\\ \\text{none (slant)} & n = d + 1 \\\\ \\text{none} & n > d + 1 \\end{cases}",
        variables: [
          { en: "$n, d$ — degrees of numerator and denominator", zh: "$n, d$ — 分子分母的次数" },
          { en: "$a_n, b_d$ — leading coefficients", zh: "$a_n, b_d$ — 首项系数" },
        ],
        whenToUse: { en: "Quickly determine horizontal end behavior", zh: "快速判断水平方向的终态" },
        commonProblemTypes: [
          { en: "State end behavior of any rational function", zh: "给出任意有理函数的终态行为" },
        ],
        example: { en: "$f(x) = \\frac{3x^2 + 1}{x^2 + 5}$: HA at $y = 3$", zh: "$f(x) = \\frac{3x^2 + 1}{x^2 + 5}$：水平渐近线 $y = 3$" },
      },
      {
        id: "f-2-6-3",
        name: { en: "Slant Asymptote (Oblique)", zh: "斜渐近线" },
        formula: "f(x) = (mx + b) + \\frac{r(x)}{D(x)}, \\text{ slant: } y = mx + b",
        variables: [
          { en: "$mx + b$ — quotient from long division when $n = d + 1$", zh: "$mx + b$ — $n = d + 1$ 时长除法的商" },
        ],
        whenToUse: { en: "Numerator degree is one more than denominator degree", zh: "分子次数比分母多 1" },
        commonProblemTypes: [
          { en: "Find slant asymptote via long division", zh: "用长除法求斜渐近线" },
        ],
        example: { en: "$f(x) = \\frac{x^2 + 1}{x - 1} = (x + 1) + \\frac{2}{x - 1}$ ⇒ slant $y = x + 1$", zh: "$f(x) = \\frac{x^2 + 1}{x - 1} = (x + 1) + \\frac{2}{x - 1}$ ⇒ 斜渐近线 $y = x + 1$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-2-6-1",
        title: { en: "Find Domain of a Rational Function", zh: "求有理函数的定义域" },
        description: { en: "Exclude all $x$-values that make the denominator zero.", zh: "排除使分母为零的所有 $x$ 值。" },
        howToRecognize: { en: "Function has a polynomial in the denominator.", zh: "函数分母为多项式。" },
        steps: [
          { en: "Set the original denominator equal to zero", zh: "把原分母置为零" },
          { en: "Solve for $x$", zh: "解 $x$" },
          { en: "Domain is all reals except those values", zh: "定义域为除上述值外的全体实数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the domain of $f(x) = \\frac{x + 5}{x^2 - 4}$.", zh: "求 $f(x) = \\frac{x + 5}{x^2 - 4}$ 的定义域。" },
        commonTraps: [
          { en: "Cancelling factors before excluding their zeros", zh: "在排除其零点前就约去因式" },
        ],
      },
      {
        id: "pt-2-6-2",
        title: { en: "Find Vertical Asymptotes", zh: "求垂直渐近线" },
        description: { en: "After simplifying, locate $x$-values where the (simplified) denominator is zero.", zh: "化简后，找出（化简后）分母为零的 $x$ 值。" },
        howToRecognize: { en: "Problem asks for vertical asymptotes.", zh: "题目要求垂直渐近线。" },
        steps: [
          { en: "Factor numerator and denominator; cancel common factors", zh: "分解分子分母；约去公因式" },
          { en: "Set the simplified denominator to zero", zh: "把简化后的分母置为零" },
          { en: "Each solution is a vertical asymptote (canceled values are holes)", zh: "每个解为垂直渐近线（被约去的值为缺口）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find vertical asymptotes of $f(x) = \\frac{x - 1}{x^2 - 1}$.", zh: "求 $f(x) = \\frac{x - 1}{x^2 - 1}$ 的垂直渐近线。" },
        commonTraps: [
          { en: "Skipping simplification — treating a hole as an asymptote", zh: "未化简——把缺口当渐近线" },
        ],
      },
      {
        id: "pt-2-6-3",
        title: { en: "Find Horizontal Asymptote", zh: "求水平渐近线" },
        description: { en: "Compare degrees and apply the three-case rule.", zh: "比较次数并应用三情形规则。" },
        howToRecognize: { en: "Problem asks for end behavior or horizontal asymptote.", zh: "题目要求终态行为或水平渐近线。" },
        steps: [
          { en: "Find degrees $n$ and $d$", zh: "求次数 $n$ 与 $d$" },
          { en: "If $n < d$: HA is $y = 0$", zh: "若 $n < d$：水平渐近线为 $y = 0$" },
          { en: "If $n = d$: HA is the ratio of leading coefficients", zh: "若 $n = d$：水平渐近线为首项系数之比" },
          { en: "If $n > d$: no HA (might have slant)", zh: "若 $n > d$：无水平渐近线（可能有斜渐近线）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the horizontal asymptote of $f(x) = \\frac{4x^2 - 1}{2x^2 + 5}$.", zh: "求 $f(x) = \\frac{4x^2 - 1}{2x^2 + 5}$ 的水平渐近线。" },
        commonTraps: [
          { en: "Reporting $y = 0$ when degrees are equal", zh: "次数相等时却报 $y = 0$" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-2-6-4",
        title: { en: "Find Slant Asymptote", zh: "求斜渐近线" },
        description: { en: "Long divide numerator by denominator when degree of $N$ exceeds degree of $D$ by exactly $1$.", zh: "当 $N$ 的次数比 $D$ 多 $1$ 时，用长除法。" },
        howToRecognize: { en: "Degrees: $\\deg N = \\deg D + 1$.", zh: "次数：$\\deg N = \\deg D + 1$。" },
        steps: [
          { en: "Long divide $N(x)$ by $D(x)$", zh: "用 $D(x)$ 长除 $N(x)$" },
          { en: "Quotient $mx + b$ is the slant asymptote", zh: "商 $mx + b$ 即斜渐近线" },
          { en: "Discard remainder for the asymptote", zh: "舍去余数得渐近线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the slant asymptote of $f(x) = \\frac{x^2 + 3x + 1}{x - 2}$.", zh: "求 $f(x) = \\frac{x^2 + 3x + 1}{x - 2}$ 的斜渐近线。" },
        commonTraps: [
          { en: "Including the remainder term in the asymptote", zh: "把余数项当作渐近线" },
        ],
      },
      {
        id: "pt-2-6-5",
        title: { en: "Find Holes (Removable Discontinuities)", zh: "求缺口（可去间断点）" },
        description: { en: "Identify $x$-values that cancel between numerator and denominator.", zh: "找出分子分母间约去的 $x$ 值。" },
        howToRecognize: { en: "Problem asks for holes or removable discontinuities.", zh: "题目要求缺口或可去间断点。" },
        steps: [
          { en: "Factor numerator and denominator", zh: "分解分子分母" },
          { en: "Identify common factors that cancel", zh: "找出可约去的公因式" },
          { en: "Each canceled factor's zero is a hole at $(c, f_{\\text{simplified}}(c))$", zh: "每个约去因式的零点是缺口 $(c, f_{\\text{化简后}}(c))$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find any holes of $f(x) = \\frac{x^2 - 4}{x^2 - x - 2}$.", zh: "求 $f(x) = \\frac{x^2 - 4}{x^2 - x - 2}$ 的缺口。" },
        commonTraps: [
          { en: "Reporting only the $x$-coordinate (must give the $y$-coordinate too)", zh: "只给 $x$ 坐标（应同时给 $y$ 坐标）" },
        ],
      },
      {
        id: "pt-2-6-6",
        title: { en: "Find Intercepts of a Rational Function", zh: "求有理函数的截距" },
        description: { en: "$x$-intercepts: zeros of (simplified) numerator. $y$-intercept: $f(0)$ if defined.", zh: "$x$ 截距：化简后分子的零点。$y$ 截距：若 $f(0)$ 有定义。" },
        howToRecognize: { en: "Problem asks for intercepts.", zh: "题目要求截距。" },
        steps: [
          { en: "Simplify $f$", zh: "化简 $f$" },
          { en: "$x$-intercepts: solve $N_{\\text{simplified}}(x) = 0$ excluding any holes", zh: "$x$ 截距：解化简后 $N(x) = 0$，排除缺口" },
          { en: "$y$-intercept: compute $f(0)$ if $0$ is in the domain", zh: "$y$ 截距：若 $0$ 在定义域内，求 $f(0)$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find all intercepts of $f(x) = \\frac{x^2 - 9}{x + 4}$.", zh: "求 $f(x) = \\frac{x^2 - 9}{x + 4}$ 的所有截距。" },
        commonTraps: [
          { en: "Forgetting to exclude $x$-values that are holes", zh: "忘记排除缺口对应的 $x$ 值" },
        ],
      },
      {
        id: "pt-2-6-7",
        title: { en: "Sketch a Rational Function", zh: "绘制有理函数图像" },
        description: { en: "Combine asymptotes, holes, intercepts, and a few sample points.", zh: "综合渐近线、缺口、截距与若干取样点。" },
        howToRecognize: { en: "Problem asks for the graph of a rational function.", zh: "题目要求有理函数图像。" },
        steps: [
          { en: "Determine domain, asymptotes, holes, and intercepts", zh: "确定定义域、渐近线、缺口与截距" },
          { en: "Plot a few points to determine behavior near asymptotes", zh: "描几个点以判定渐近线附近行为" },
          { en: "Sketch each branch separately, respecting asymptotes", zh: "分支分别画，遵守渐近线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Sketch $f(x) = \\frac{2x}{x - 1}$.", zh: "画 $f(x) = \\frac{2x}{x - 1}$。" },
        commonTraps: [
          { en: "Drawing the graph crossing a vertical asymptote", zh: "图像穿过垂直渐近线" },
        ],
      },
      {
        id: "pt-2-6-8",
        title: { en: "Determine Behavior Near a Vertical Asymptote", zh: "判断垂直渐近线附近的行为" },
        description: { en: "Determine whether $f \\to +\\infty$ or $-\\infty$ as $x$ approaches the asymptote from each side.", zh: "判断 $x$ 从两侧趋近渐近线时，$f$ 趋向 $+\\infty$ 还是 $-\\infty$。" },
        howToRecognize: { en: "Problem asks for one-sided limits at a vertical asymptote.", zh: "题目要求垂直渐近线处的单侧极限。" },
        steps: [
          { en: "Pick a value slightly greater than the VA", zh: "取略大于 VA 的值" },
          { en: "Plug in to find sign and magnitude", zh: "代入判断符号与大小" },
          { en: "Repeat for value slightly less than the VA", zh: "对略小于 VA 的值重复" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Describe behavior of $f(x) = \\frac{1}{(x - 2)^2}$ as $x \\to 2^-$ and $x \\to 2^+$.", zh: "描述 $f(x) = \\frac{1}{(x - 2)^2}$ 在 $x \\to 2^-$ 与 $x \\to 2^+$ 时的行为。" },
        commonTraps: [
          { en: "Forgetting to test BOTH sides separately", zh: "忘记两侧分别检验" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-2-6-9",
        title: { en: "Sketch with Slant Asymptote and Holes", zh: "含斜渐近线与缺口的绘图" },
        description: { en: "Full sketch including a slant asymptote, holes, and complete sign analysis.", zh: "含斜渐近线、缺口与完整符号分析的全图绘制。" },
        howToRecognize: { en: "Rational function with $\\deg N = \\deg D + 1$, possibly with cancelable factors.", zh: "$\\deg N = \\deg D + 1$ 的有理函数，可能含可约因式。" },
        steps: [
          { en: "Simplify and identify holes", zh: "化简并找出缺口" },
          { en: "Find slant and vertical asymptotes", zh: "求斜渐近线与垂直渐近线" },
          { en: "Find intercepts", zh: "求截距" },
          { en: "Use a sign chart to map behavior on each interval", zh: "用符号表确定各区间的行为" },
          { en: "Sketch each branch, attending to asymptote-side behavior", zh: "分支绘制，关注渐近线两侧" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Sketch $f(x) = \\frac{x^2 - x - 6}{x - 3}$ (note simplification possible).", zh: "画 $f(x) = \\frac{x^2 - x - 6}{x - 3}$（注意可化简）。" },
        commonTraps: [
          { en: "Drawing the graph through a hole as if it were continuous", zh: "把图像画过缺口仿佛连续" },
        ],
      },
      {
        id: "pt-2-6-10",
        title: { en: "Application — Rational Modeling", zh: "应用——有理函数建模" },
        description: { en: "Use a rational function to model real-world quantities like average cost, concentration over time, or inverse-proportion phenomena.", zh: "用有理函数刻画实际量，如平均成本、随时间的浓度或反比例现象。" },
        howToRecognize: { en: "Word problem describes a quantity divided by a function of $x$ (often \"per unit\" rates).", zh: "应用题描述某量除以 $x$ 的函数（常为\"单位平均\"率）。" },
        steps: [
          { en: "Identify total cost / quantity and the dividing variable", zh: "识别总量与作分母的变量" },
          { en: "Write the rational function", zh: "写出有理函数" },
          { en: "Apply asymptote analysis (long-run behavior, dominant trend)", zh: "用渐近线分析（长期行为、主导趋势）" },
          { en: "Use the model to answer questions and interpret with units", zh: "用模型回答问题并按单位解释" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A company's average cost per unit is $\\bar{C}(x) = \\frac{200 + 0.5x}{x}$. Find the horizontal asymptote and interpret it. What is $\\bar{C}(100)$?", zh: "公司平均单位成本为 $\\bar{C}(x) = \\frac{200 + 0.5x}{x}$。求水平渐近线并解释；求 $\\bar{C}(100)$。" },
        commonTraps: [
          { en: "Failing to interpret horizontal asymptote in real-world units (e.g., \"\\$0.50 per unit\")", zh: "未把水平渐近线按实际单位解释（如\"每件 \\$0.50\"）" },
        ],
      },
    ],
  },
  {
    id: "2-7",
    chapterId: "ch-2",
    number: "2.7",
    title: { en: "Nonlinear Inequalities", zh: "非线性不等式" },
    description: {
      en: "Solve polynomial and rational inequalities and represent solution sets on a number line.",
      zh: "求解多项式与有理不等式，并在数轴上表示解集。",
    },
    learningGoals: [
      { en: "Solve polynomial inequalities using sign analysis", zh: "用符号分析解多项式不等式" },
      { en: "Solve rational inequalities using critical numbers from numerator and denominator", zh: "用分子分母的关键数解有理不等式" },
      { en: "Express solution sets in interval notation and on number lines", zh: "用区间记号和数轴表示解集" },
      { en: "Apply nonlinear inequalities to model real-world constraints", zh: "用非线性不等式建模实际约束" },
    ],
    keyConcepts: [
      {
        id: "kc-2-7-1",
        title: { en: "Sign Analysis (Test Intervals)", zh: "符号分析（试探区间法）" },
        explanation: {
          en: "To solve a polynomial inequality $f(x) \\lessgtr 0$, factor $f(x)$, find its real zeros (critical numbers), and split the real line into intervals at those points. Test ONE value in each interval to determine the sign of $f(x)$ there.",
          zh: "解多项式不等式 $f(x) \\lessgtr 0$，先把 $f(x)$ 分解、求实零点（关键数），并以这些点将数轴分段。在每个区间内取一个值检验 $f(x)$ 的符号。",
        },
        whenToUse: { en: "Any time a nonlinear inequality must be solved by determining where the expression is positive or negative", zh: "凡是需要判断表达式正负来解非线性不等式时" },
        commonMistake: { en: "Including zeros of denominators in the solution set; using a single test value instead of one per interval", zh: "把分母零点纳入解集；只用一个测试值而非每个区间一个" },
        example: { en: "$x^2 - x - 6 < 0$ ⇒ critical numbers $-2, 3$. Sign analysis: $(-2, 3)$ negative ⇒ solution $(-2, 3)$", zh: "$x^2 - x - 6 < 0$ ⇒ 关键数 $-2, 3$。符号分析：$(-2, 3)$ 为负 ⇒ 解 $(-2, 3)$" },
      },
      {
        id: "kc-2-7-2",
        title: { en: "Polynomial vs Rational Inequalities", zh: "多项式与有理不等式" },
        explanation: {
          en: "For polynomial inequalities, all critical numbers come from zeros of $f$. For rational inequalities, critical numbers also include zeros of the denominator (these are ALWAYS excluded from the solution, even with $\\geq$ or $\\leq$).",
          zh: "多项式不等式的关键数全部来自 $f$ 的零点。有理不等式的关键数还包括分母的零点（即使是 $\\geq$ 或 $\\leq$，这些点都必须从解集中排除）。",
        },
        whenToUse: { en: "Whenever a fraction is part of the inequality", zh: "凡是不等式中含分数时" },
        commonMistake: { en: "Multiplying both sides by a denominator that may be negative — flips inequality unpredictably", zh: "用可能为负的分母两边相乘——不等号方向可能错乱" },
        example: { en: "$\\frac{x - 1}{x + 2} \\geq 0$: critical numbers $1, -2$ (but $x = -2$ excluded). Solution $(-\\infty, -2) \\cup [1, \\infty)$", zh: "$\\frac{x - 1}{x + 2} \\geq 0$：关键数 $1, -2$（但排除 $x = -2$）。解 $(-\\infty, -2) \\cup [1, \\infty)$" },
      },
      {
        id: "kc-2-7-3",
        title: { en: "Boundary Points: Included or Excluded", zh: "边界点：包含还是排除" },
        explanation: {
          en: "For strict inequalities ($<$ or $>$), boundary points are EXCLUDED (use parentheses). For non-strict ($\\leq$ or $\\geq$), boundary points are INCLUDED (use brackets) — UNLESS they are denominator zeros, which are always excluded.",
          zh: "严格不等式（$<$ 或 $>$）：边界点排除（用圆括号）。非严格（$\\leq$ 或 $\\geq$）：边界点包含（用方括号）——但分母零点永远排除。",
        },
        whenToUse: { en: "When writing the final solution in interval notation", zh: "用区间记号写最终解时" },
        commonMistake: { en: "Including a denominator zero just because the inequality is $\\geq$", zh: "因为不等号是 $\\geq$ 就把分母零点纳入" },
        example: { en: "$\\frac{1}{x - 2} \\geq 0$: $x - 2 > 0$ needed (since $1 > 0$); $x = 2$ EXCLUDED ⇒ $(2, \\infty)$", zh: "$\\frac{1}{x - 2} \\geq 0$：需 $x - 2 > 0$（因 $1 > 0$）；$x = 2$ 排除 ⇒ $(2, \\infty)$" },
      },
    ],
    formulas: [
      {
        id: "f-2-7-1",
        name: { en: "Polynomial Inequality Solution Method", zh: "多项式不等式解法" },
        formula: "f(x) \\lessgtr 0 \\xrightarrow{\\text{factor}} \\text{critical numbers} \\xrightarrow{\\text{sign chart}} \\text{intervals}",
        variables: [
          { en: "Critical numbers — real zeros of $f(x)$", zh: "关键数——$f(x)$ 的实零点" },
        ],
        whenToUse: { en: "Polynomial inequality of any degree", zh: "任意次数的多项式不等式" },
        commonProblemTypes: [
          { en: "Solve quadratic, cubic, or higher polynomial inequalities", zh: "解二次、三次或更高次多项式不等式" },
        ],
        example: { en: "$x^3 - x \\geq 0$: critical numbers $-1, 0, 1$. Solution $[-1, 0] \\cup [1, \\infty)$", zh: "$x^3 - x \\geq 0$：关键数 $-1, 0, 1$。解 $[-1, 0] \\cup [1, \\infty)$" },
      },
      {
        id: "f-2-7-2",
        name: { en: "Rational Inequality Solution Method", zh: "有理不等式解法" },
        formula: "\\frac{N(x)}{D(x)} \\lessgtr 0 \\xrightarrow{\\text{zeros of } N \\text{ and } D} \\text{critical numbers} \\xrightarrow{\\text{sign chart}} \\text{solution (excluding } D \\text{ zeros)}",
        variables: [
          { en: "Critical numbers from zeros of both $N$ and $D$", zh: "关键数包含 $N$ 与 $D$ 的零点" },
          { en: "Zeros of $D$ always excluded", zh: "$D$ 的零点始终排除" },
        ],
        whenToUse: { en: "Rational inequality $\\frac{N(x)}{D(x)} \\lessgtr 0$", zh: "有理不等式 $\\frac{N(x)}{D(x)} \\lessgtr 0$" },
        commonProblemTypes: [
          { en: "Solve $\\frac{\\text{poly}}{\\text{poly}} \\lessgtr 0$", zh: "解 $\\frac{\\text{多项式}}{\\text{多项式}} \\lessgtr 0$" },
          { en: "Get the inequality to one side first (compared to $0$)", zh: "先把不等式化为一边为 $0$ 的形式" },
        ],
        example: { en: "$\\frac{x + 1}{x - 3} > 0$: critical $-1, 3$. Solution $(-\\infty, -1) \\cup (3, \\infty)$", zh: "$\\frac{x + 1}{x - 3} > 0$：关键数 $-1, 3$。解 $(-\\infty, -1) \\cup (3, \\infty)$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-2-7-1",
        title: { en: "Solve a Quadratic Inequality (Strict)", zh: "解严格二次不等式" },
        description: { en: "Factor and use sign analysis for $ax^2 + bx + c < 0$ or $> 0$.", zh: "对 $ax^2 + bx + c < 0$ 或 $> 0$ 进行因式分解并做符号分析。" },
        howToRecognize: { en: "Quadratic inequality with strict inequality.", zh: "严格不等号的二次不等式。" },
        steps: [
          { en: "Move all terms to one side; one side must be $0$", zh: "把所有项移到一边；另一边为 $0$" },
          { en: "Factor the quadratic", zh: "对二次式因式分解" },
          { en: "Identify critical numbers (roots)", zh: "确定关键数（根）" },
          { en: "Use sign chart on intervals; pick those matching the inequality", zh: "对各区间画符号表；选符合不等号的" },
          { en: "Use parentheses (strict inequality excludes endpoints)", zh: "用圆括号（严格不等号排除端点）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Solve $x^2 + x - 12 < 0$.", zh: "解 $x^2 + x - 12 < 0$。" },
        commonTraps: [
          { en: "Including endpoints when the inequality is strict", zh: "严格不等号时包含了端点" },
        ],
      },
      {
        id: "pt-2-7-2",
        title: { en: "Solve a Quadratic Inequality (Non-Strict)", zh: "解非严格二次不等式" },
        description: { en: "Same procedure but boundaries are INCLUDED.", zh: "步骤相同但端点包含。" },
        howToRecognize: { en: "Quadratic inequality with $\\leq$ or $\\geq$.", zh: "$\\leq$ 或 $\\geq$ 的二次不等式。" },
        steps: [
          { en: "Move to one side; factor", zh: "移项；因式分解" },
          { en: "Find critical numbers", zh: "求关键数" },
          { en: "Sign analysis", zh: "符号分析" },
          { en: "Use brackets (include endpoints)", zh: "用方括号（包含端点）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Solve $x^2 - 2x - 8 \\geq 0$.", zh: "解 $x^2 - 2x - 8 \\geq 0$。" },
        commonTraps: [
          { en: "Excluding endpoints out of habit", zh: "习惯性排除端点" },
        ],
      },
      {
        id: "pt-2-7-3",
        title: { en: "Identify Critical Numbers", zh: "识别关键数" },
        description: { en: "List all values where the expression equals zero or is undefined.", zh: "列出使表达式为零或无定义的所有值。" },
        howToRecognize: { en: "Problem asks for critical numbers (no need to solve full inequality).", zh: "题目只要求关键数（不需解完整不等式）。" },
        steps: [
          { en: "For polynomials: solve $f(x) = 0$", zh: "多项式：解 $f(x) = 0$" },
          { en: "For rational expressions: also include zeros of denominator", zh: "有理表达式：还要包含分母的零点" },
          { en: "Order them on the number line", zh: "在数轴上排序" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the critical numbers of $\\frac{x^2 - 4}{x + 1}$.", zh: "求 $\\frac{x^2 - 4}{x + 1}$ 的关键数。" },
        commonTraps: [
          { en: "Forgetting denominator zeros for rational expressions", zh: "有理表达式忘记分母零点" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-2-7-4",
        title: { en: "Solve a Cubic or Higher Polynomial Inequality", zh: "解三次或更高次多项式不等式" },
        description: { en: "Factor completely, find all real zeros, sign analysis on multiple intervals.", zh: "完全因式分解，求所有实零点，对多个区间做符号分析。" },
        howToRecognize: { en: "Polynomial inequality of degree $\\geq 3$.", zh: "次数 $\\geq 3$ 的多项式不等式。" },
        steps: [
          { en: "Move all to one side and factor completely", zh: "移项后完全分解" },
          { en: "Find all real critical numbers", zh: "求所有实关键数" },
          { en: "Sign analysis on each interval", zh: "对每个区间符号分析" },
          { en: "Combine intervals matching the inequality", zh: "合并符合不等号的区间" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $x^3 - 4x^2 + x + 6 \\leq 0$.", zh: "解 $x^3 - 4x^2 + x + 6 \\leq 0$。" },
        commonTraps: [
          { en: "Stopping at partial factoring; missing some critical numbers", zh: "因式分解未完成；漏掉某些关键数" },
        ],
      },
      {
        id: "pt-2-7-5",
        title: { en: "Solve a Simple Rational Inequality", zh: "解简单有理不等式" },
        description: { en: "Get to one side, find critical numbers from numerator and denominator, sign analysis.", zh: "化为一边，由分子分母求关键数，做符号分析。" },
        howToRecognize: { en: "Rational expression compared to $0$ (or moved to one side).", zh: "有理表达式与 $0$ 比较（或移到一边）。" },
        steps: [
          { en: "Move all to one side; combine into a single fraction", zh: "移项；合并为单一分数" },
          { en: "Find zeros of numerator and denominator", zh: "求分子分母的零点" },
          { en: "Sign analysis on intervals", zh: "对各区间符号分析" },
          { en: "Solution: union of intervals matching inequality, EXCLUDING denominator zeros", zh: "解：合并符合不等号的区间，排除分母零点" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $\\frac{x - 2}{x + 1} \\geq 0$.", zh: "解 $\\frac{x - 2}{x + 1} \\geq 0$。" },
        commonTraps: [
          { en: "Multiplying by the denominator without considering its sign", zh: "未考虑分母符号就两边乘分母" },
        ],
      },
      {
        id: "pt-2-7-6",
        title: { en: "Inequalities with Already-Factored Polynomials", zh: "已因式分解的多项式不等式" },
        description: { en: "Skip factoring step; identify critical numbers directly.", zh: "省去因式分解步骤；直接读关键数。" },
        howToRecognize: { en: "Polynomial is already given in factored form.", zh: "已给出因式分解形式。" },
        steps: [
          { en: "Read critical numbers from the factors", zh: "由因式读出关键数" },
          { en: "Sign analysis (use a chart)", zh: "符号分析（用表格）" },
          { en: "Choose intervals matching the inequality", zh: "选符合不等号的区间" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $(x - 2)^2 (x + 1) > 0$.", zh: "解 $(x - 2)^2 (x + 1) > 0$。" },
        commonTraps: [
          { en: "Forgetting that even-multiplicity factors don't change sign", zh: "忘记偶重因式不变号" },
        ],
      },
      {
        id: "pt-2-7-7",
        title: { en: "Solve Compound Nonlinear Inequalities", zh: "解复合非线性不等式" },
        description: { en: "Solve two inequalities and intersect (\"and\") or union (\"or\") their solutions.", zh: "分别解两个不等式，再取交集（\"且\"）或并集（\"或\"）。" },
        howToRecognize: { en: "Compound statement like \"$f(x) > 0$ and $g(x) < 0$\" or a chained form.", zh: "复合形式如\"$f(x) > 0$ 且 $g(x) < 0$\"或链式不等式。" },
        steps: [
          { en: "Solve each inequality separately", zh: "分别解每个不等式" },
          { en: "Intersect for \"and\"; union for \"or\"", zh: "\"且\"取交集；\"或\"取并集" },
          { en: "Write the combined solution in interval notation", zh: "用区间记号给出合并解" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $x^2 - 4 \\geq 0$ and $x - 5 < 0$ simultaneously.", zh: "联立解 $x^2 - 4 \\geq 0$ 与 $x - 5 < 0$。" },
        commonTraps: [
          { en: "Mixing up \"and\" and \"or\" — they give very different solutions", zh: "把\"且\"与\"或\"弄反——结果差别很大" },
        ],
      },
      {
        id: "pt-2-7-8",
        title: { en: "Move Constants and Rational Terms to Compare with Zero", zh: "把常数和有理项移到一边与零比较" },
        description: { en: "Rewrite an inequality so one side is $0$, then apply sign analysis.", zh: "把不等式化为一边为 $0$，再做符号分析。" },
        howToRecognize: { en: "Inequality has terms on both sides (not yet compared to $0$).", zh: "不等式两边都有项（尚未与 $0$ 比较）。" },
        steps: [
          { en: "Subtract one side from the other to get one side $= 0$", zh: "把一边减掉另一边，使一边等于 $0$" },
          { en: "Combine into one expression (single fraction if rational)", zh: "合并为单一表达式（有理时合并为单一分数）" },
          { en: "Apply sign analysis", zh: "做符号分析" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $\\frac{x}{x - 1} > 2$.", zh: "解 $\\frac{x}{x - 1} > 2$。" },
        commonTraps: [
          { en: "Multiplying both sides by $(x - 1)$ without case-splitting on its sign", zh: "未对 $(x - 1)$ 的符号分情况讨论就两边相乘" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-2-7-9",
        title: { en: "Application — Profit, Height, or Speed Constraints", zh: "应用——利润、高度或速度约束" },
        description: { en: "Set up and solve a nonlinear inequality from a real-world scenario.", zh: "由实际场景建立并求解非线性不等式。" },
        howToRecognize: { en: "Word problem asks \"when is\" some quadratic / rational quantity above or below a value.", zh: "应用题问某二次/有理量何时高于或低于某值。" },
        steps: [
          { en: "Translate the scenario to a function $f(t)$ or $f(x)$", zh: "把场景翻译为函数 $f(t)$ 或 $f(x)$" },
          { en: "Set up the inequality (e.g., $f(t) > C$)", zh: "建立不等式（如 $f(t) > C$）" },
          { en: "Solve via sign analysis", zh: "用符号分析求解" },
          { en: "Interpret in context (e.g., \"between $1$ and $4$ seconds\")", zh: "结合情境解释（如\"在 $1$ 到 $4$ 秒之间\"）" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A projectile's height (in feet) at time $t$ (s) is $h(t) = -16t^2 + 80t$. For what time intervals is the projectile above $64$ ft?", zh: "抛射体在 $t$（秒）时高度为 $h(t) = -16t^2 + 80t$（英尺）。何时高度在 $64$ ft 以上？" },
        commonTraps: [
          { en: "Forgetting to restrict to physically meaningful $t$ (e.g., $t \\geq 0$)", zh: "忘记把 $t$ 限制在物理上合理的范围（如 $t \\geq 0$）" },
        ],
      },
      {
        id: "pt-2-7-10",
        title: { en: "Inequalities with Multiple Critical Points", zh: "含多个关键点的不等式" },
        description: { en: "Solve inequalities involving rational expressions with multiple zeros and asymptotes; require careful sign chart.", zh: "解含多个零点与渐近线的有理表达式不等式；需细致的符号表。" },
        howToRecognize: { en: "Rational expression with multiple distinct zeros in numerator AND denominator.", zh: "有理表达式分子分母均含多个不同零点。" },
        steps: [
          { en: "Combine to a single fraction, fully factored", zh: "合并为完全分解的单一分数" },
          { en: "List ALL critical numbers (numerator and denominator)", zh: "列出所有关键数（分子与分母）" },
          { en: "Set up a complete sign chart", zh: "建立完整的符号表" },
          { en: "Identify intervals matching the inequality, excluding denominator zeros", zh: "选符合不等号的区间，排除分母零点" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Solve $\\frac{x^2 - 4}{x^2 - 9} \\leq 0$.", zh: "解 $\\frac{x^2 - 4}{x^2 - 9} \\leq 0$。" },
        commonTraps: [
          { en: "Including denominator zeros in a $\\leq$ solution", zh: "在 $\\leq$ 解中包含了分母零点" },
        ],
      },
    ],
  },
];

const chapter3Units: Unit[] = [
  {
    id: "3-1",
    chapterId: "ch-3",
    number: "3.1",
    title: { en: "Exponential Functions and Their Graphs", zh: "指数函数及其图像" },
    description: {
      en: "Recognize, evaluate, and graph exponential functions, including the natural exponential function.",
      zh: "识别、求值并绘制指数函数（含自然指数函数）的图像。",
    },
    learningGoals: [
      { en: "Recognize and evaluate exponential functions", zh: "识别并求指数函数的值" },
      { en: "Graph exponential functions and their transformations", zh: "绘制指数函数及其变换的图像" },
      { en: "Use the natural base $e$ and the natural exponential function $f(x) = e^x$", zh: "使用自然底数 $e$ 与自然指数函数 $f(x) = e^x$" },
      { en: "Apply exponential functions to compound interest and growth/decay problems", zh: "应用指数函数解决复利及增长/衰减问题" },
    ],
    keyConcepts: [
      {
        id: "kc-3-1-1",
        title: { en: "Exponential Function Definition", zh: "指数函数定义" },
        explanation: {
          en: "An exponential function has the form $f(x) = a^x$ where $a > 0$ and $a \\neq 1$. The variable $x$ is in the EXPONENT (not the base). Domain: all real numbers. Range: $(0, \\infty)$.",
          zh: "指数函数形如 $f(x) = a^x$，其中 $a > 0$ 且 $a \\neq 1$。变量 $x$ 在指数位置（不是底数）。定义域：全体实数。值域：$(0, \\infty)$。",
        },
        whenToUse: { en: "Recognizing growth/decay processes; interest and population modeling", zh: "识别增长/衰减过程；利息与人口建模" },
        commonMistake: { en: "Confusing $x^a$ (power) with $a^x$ (exponential) — the variable position is critical", zh: "混淆 $x^a$（幂函数）与 $a^x$（指数函数）——变量位置至关重要" },
        example: { en: "$f(x) = 2^x$: $f(0) = 1$, $f(3) = 8$, $f(-2) = \\tfrac{1}{4}$", zh: "$f(x) = 2^x$：$f(0) = 1$，$f(3) = 8$，$f(-2) = \\tfrac{1}{4}$" },
      },
      {
        id: "kc-3-1-2",
        title: { en: "Growth vs Decay; Graph Behavior", zh: "增长与衰减；图像行为" },
        explanation: {
          en: "If $a > 1$, $f(x) = a^x$ is increasing (exponential GROWTH). If $0 < a < 1$, it is decreasing (exponential DECAY). Both pass through $(0, 1)$ and have horizontal asymptote $y = 0$.",
          zh: "若 $a > 1$，$f(x) = a^x$ 单调递增（指数增长）。若 $0 < a < 1$，单调递减（指数衰减）。两种情形都过 $(0, 1)$，水平渐近线为 $y = 0$。",
        },
        whenToUse: { en: "Sketching exponential graphs; modeling natural phenomena", zh: "绘制指数函数图像；建模自然现象" },
        commonMistake: { en: "Drawing the curve crossing the $x$-axis (it never does for pure $a^x$)", zh: "把 $a^x$ 的曲线画成穿过 $x$ 轴（不会）" },
        example: { en: "$y = 3^x$: growth, through $(0, 1)$, $(1, 3)$. $y = (\\tfrac{1}{2})^x$: decay, through $(0, 1)$, $(1, \\tfrac{1}{2})$", zh: "$y = 3^x$：增长，过 $(0, 1)$、$(1, 3)$。$y = (\\tfrac{1}{2})^x$：衰减，过 $(0, 1)$、$(1, \\tfrac{1}{2})$" },
      },
      {
        id: "kc-3-1-3",
        title: { en: "Natural Base $e$", zh: "自然底数 $e$" },
        explanation: {
          en: "$e \\approx 2.71828$ is an irrational number defined as $\\lim_{n \\to \\infty} (1 + \\tfrac{1}{n})^n$. The natural exponential function $f(x) = e^x$ is the most important exponential function in calculus and applications, especially continuous growth and continuous compounding.",
          zh: "$e \\approx 2.71828$ 是无理数，定义为 $\\lim_{n \\to \\infty} (1 + \\tfrac{1}{n})^n$。自然指数函数 $f(x) = e^x$ 在微积分与应用（尤其是连续增长与连续复利）中最为重要。",
        },
        whenToUse: { en: "Continuous growth/decay problems; calculus contexts", zh: "连续增长/衰减问题；微积分情境" },
        commonMistake: { en: "Treating $e$ as exactly $2.7$ — it's irrational, with infinitely many decimals", zh: "把 $e$ 当作恰为 $2.7$——它是无理数，有无限位小数" },
        example: { en: "$e^0 = 1$, $e^1 \\approx 2.718$, $e^{-1} \\approx 0.368$", zh: "$e^0 = 1$，$e^1 \\approx 2.718$，$e^{-1} \\approx 0.368$" },
      },
    ],
    formulas: [
      {
        id: "f-3-1-1",
        name: { en: "Exponential Function (General)", zh: "指数函数（一般式）" },
        formula: "f(x) = a^x, \\; a > 0, \\; a \\neq 1",
        variables: [
          { en: "$a$ — base (positive, not 1)", zh: "$a$ — 底数（正且不为 1）" },
          { en: "$x$ — exponent (any real)", zh: "$x$ — 指数（任意实数）" },
        ],
        whenToUse: { en: "Any exponential model with constant base", zh: "底数为常数的指数模型" },
        commonProblemTypes: [
          { en: "Evaluate, graph, or transform an exponential function", zh: "求值、绘图或变换指数函数" },
        ],
        example: { en: "$f(x) = 2^x$: $f(5) = 32$", zh: "$f(x) = 2^x$：$f(5) = 32$" },
      },
      {
        id: "f-3-1-2",
        name: { en: "Natural Exponential Function", zh: "自然指数函数" },
        formula: "f(x) = e^x",
        variables: [
          { en: "$e \\approx 2.71828$", zh: "$e \\approx 2.71828$" },
        ],
        whenToUse: { en: "Continuous growth/decay; default base in calculus", zh: "连续增长/衰减；微积分默认底数" },
        commonProblemTypes: [
          { en: "Evaluate $e^x$ for various $x$ using a calculator", zh: "用计算器求各种 $x$ 处的 $e^x$" },
        ],
        example: { en: "$e^2 \\approx 7.389$, $e^{-0.5} \\approx 0.607$", zh: "$e^2 \\approx 7.389$，$e^{-0.5} \\approx 0.607$" },
      },
      {
        id: "f-3-1-3",
        name: { en: "Compound Interest (Discrete)", zh: "复利（离散）" },
        formula: "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}",
        variables: [
          { en: "$P$ — principal", zh: "$P$ — 本金" },
          { en: "$r$ — annual interest rate (decimal)", zh: "$r$ — 年利率（小数）" },
          { en: "$n$ — compounding periods per year", zh: "$n$ — 每年复利次数" },
          { en: "$t$ — time in years", zh: "$t$ — 年数" },
          { en: "$A$ — final amount", zh: "$A$ — 终值" },
        ],
        whenToUse: { en: "Interest compounded $n$ times per year", zh: "每年复利 $n$ 次" },
        commonProblemTypes: [
          { en: "Compute final balance after a fixed time", zh: "求固定时间后的终值" },
          { en: "Compare different compounding frequencies", zh: "比较不同复利频率" },
        ],
        example: { en: "\\$1000 at 5\\% compounded quarterly for 10 years: $A = 1000 (1.0125)^{40} \\approx \\$1643.62$", zh: "\\$1000 年利率 5\\%、季度复利 10 年：$A = 1000 (1.0125)^{40} \\approx \\$1643.62$" },
      },
      {
        id: "f-3-1-4",
        name: { en: "Continuous Compound Interest", zh: "连续复利" },
        formula: "A = P e^{rt}",
        variables: [
          { en: "$P$ — principal", zh: "$P$ — 本金" },
          { en: "$r$ — annual rate (decimal)", zh: "$r$ — 年利率（小数）" },
          { en: "$t$ — time in years", zh: "$t$ — 年数" },
        ],
        whenToUse: { en: "Interest compounded continuously (limit as $n \\to \\infty$)", zh: "连续复利（$n \\to \\infty$ 极限）" },
        commonProblemTypes: [
          { en: "Continuous-growth problems", zh: "连续增长问题" },
        ],
        example: { en: "\\$2000 at 4\\% continuously for 5 years: $A = 2000 e^{0.2} \\approx \\$2442.81$", zh: "\\$2000 以 4\\% 连续复利 5 年：$A = 2000 e^{0.2} \\approx \\$2442.81$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-3-1-1",
        title: { en: "Evaluate $a^x$ at a Specific Value", zh: "求 $a^x$ 在指定值的值" },
        description: { en: "Compute exponential value, including negative or fractional exponents.", zh: "计算指数值，包括负指数或分数指数。" },
        howToRecognize: { en: "Function $f(x) = a^x$ given; specific input requested.", zh: "给出 $f(x) = a^x$；要求指定输入处的值。" },
        steps: [
          { en: "Substitute the input for $x$", zh: "把输入代入 $x$" },
          { en: "For negative exponents, use $a^{-n} = \\frac{1}{a^n}$", zh: "负指数：$a^{-n} = \\frac{1}{a^n}$" },
          { en: "For fractional exponents, use $a^{m/n} = \\sqrt[n]{a^m}$", zh: "分数指数：$a^{m/n} = \\sqrt[n]{a^m}$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "If $f(x) = 4^x$, find $f(3)$, $f(0)$, $f(-1)$, and $f(\\tfrac{1}{2})$.", zh: "若 $f(x) = 4^x$，求 $f(3)$、$f(0)$、$f(-1)$ 与 $f(\\tfrac{1}{2})$。" },
        commonTraps: [
          { en: "Computing $4^{-1}$ as $-4$ instead of $\\tfrac{1}{4}$", zh: "把 $4^{-1}$ 当作 $-4$（应为 $\\tfrac{1}{4}$）" },
        ],
      },
      {
        id: "pt-3-1-2",
        title: { en: "Identify Growth or Decay", zh: "判断增长或衰减" },
        description: { en: "Decide based on the base $a$ whether the function increases or decreases.", zh: "根据底数 $a$ 判断函数是增是减。" },
        howToRecognize: { en: "Exponential function given; problem asks about behavior.", zh: "给出指数函数；问行为。" },
        steps: [
          { en: "Identify the base $a$", zh: "找出底数 $a$" },
          { en: "If $a > 1$: growth (increasing)", zh: "$a > 1$：增长（递增）" },
          { en: "If $0 < a < 1$: decay (decreasing)", zh: "$0 < a < 1$：衰减（递减）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Is $f(x) = (0.6)^x$ growth or decay?", zh: "$f(x) = (0.6)^x$ 是增长还是衰减？" },
        commonTraps: [
          { en: "Misreading bases like $\\tfrac{3}{2}$ (it's $> 1$ ⇒ growth)", zh: "误读 $\\tfrac{3}{2}$ 这类底数（实为 $> 1$ ⇒ 增长）" },
        ],
      },
      {
        id: "pt-3-1-3",
        title: { en: "Find Domain and Range of an Exponential", zh: "求指数函数的定义域与值域" },
        description: { en: "Use the standard rules: domain is all reals; range depends on transformations.", zh: "用标准规则：定义域为全体实数；值域取决于变换。" },
        howToRecognize: { en: "Problem asks for domain or range.", zh: "题目要求定义域或值域。" },
        steps: [
          { en: "Domain: all real numbers (always for $a^x$)", zh: "定义域：全体实数（$a^x$ 始终如此）" },
          { en: "Range: $(0, \\infty)$ for pure $a^x$", zh: "值域：纯 $a^x$ 时为 $(0, \\infty)$" },
          { en: "Adjust range for vertical shifts (e.g., $a^x + c$ has range $(c, \\infty)$)", zh: "对垂直平移调整值域（如 $a^x + c$ 的值域为 $(c, \\infty)$）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "State the domain and range of $f(x) = 2^x - 3$.", zh: "给出 $f(x) = 2^x - 3$ 的定义域与值域。" },
        commonTraps: [
          { en: "Reporting range as all reals (output of $a^x$ is always positive before shift)", zh: "把值域报为全体实数（$a^x$ 在平移前始终为正）" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-3-1-4",
        title: { en: "Graph a Transformed Exponential Function", zh: "绘制变换的指数函数" },
        description: { en: "Apply shifts, reflections, and stretches to the parent $a^x$.", zh: "对基本函数 $a^x$ 应用平移、反射与伸缩。" },
        howToRecognize: { en: "Equation has the form $a^{x - h} + k$ or $-a^x$ etc.", zh: "方程形如 $a^{x - h} + k$ 或 $-a^x$ 等。" },
        steps: [
          { en: "Identify base, horizontal shift, vertical shift, and reflections", zh: "确定底数、水平平移、垂直平移与反射" },
          { en: "Plot key points on the parent (e.g., $(0, 1)$, $(1, a)$)", zh: "在基本函数上选关键点（如 $(0, 1)$、$(1, a)$）" },
          { en: "Apply transformations to those points", zh: "对关键点应用变换" },
          { en: "Draw the new curve and asymptote", zh: "画新曲线与渐近线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Sketch $f(x) = 2^{x - 1} + 3$.", zh: "画 $f(x) = 2^{x - 1} + 3$。" },
        commonTraps: [
          { en: "Forgetting to shift the asymptote ($y = 0$ becomes $y = k$ after vertical shift)", zh: "忘记平移渐近线（垂直平移后 $y = 0$ 变 $y = k$）" },
        ],
      },
      {
        id: "pt-3-1-5",
        title: { en: "Use Compound Interest Formula", zh: "应用复利公式" },
        description: { en: "Compute final amount given principal, rate, time, and compounding frequency.", zh: "已知本金、利率、时间与复利次数，求终值。" },
        howToRecognize: { en: "Word problem about discrete compounding (monthly, quarterly, daily, etc.).", zh: "应用题涉及离散复利（月、季、日等）。" },
        steps: [
          { en: "Identify $P$, $r$, $n$, and $t$", zh: "识别 $P$、$r$、$n$、$t$" },
          { en: "Apply $A = P(1 + \\tfrac{r}{n})^{nt}$", zh: "代入 $A = P(1 + \\tfrac{r}{n})^{nt}$" },
          { en: "Compute and round appropriately", zh: "计算并合理四舍五入" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "If \\$5000 is invested at 6\\% compounded monthly for 8 years, what is the final amount?", zh: "投资 \\$5000，年利率 6\\%、月复利 8 年，求终值。" },
        commonTraps: [
          { en: "Using $r$ as a percent instead of decimal (use $0.06$ not $6$)", zh: "把 $r$ 用百分数而非小数（应为 $0.06$ 而非 $6$）" },
        ],
      },
      {
        id: "pt-3-1-6",
        title: { en: "Apply Continuous Compound Interest", zh: "应用连续复利公式" },
        description: { en: "Use $A = P e^{rt}$ to compute final amount with continuous compounding.", zh: "用 $A = P e^{rt}$ 求连续复利的终值。" },
        howToRecognize: { en: "Problem mentions \"continuously compounded.\"", zh: "题目提到\"连续复利\"。" },
        steps: [
          { en: "Identify $P$, $r$, $t$", zh: "识别 $P$、$r$、$t$" },
          { en: "Apply $A = P e^{rt}$", zh: "代入 $A = P e^{rt}$" },
          { en: "Compute using calculator's $e^x$ key", zh: "用计算器的 $e^x$ 键计算" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the value of \\$3000 invested at 4\\% compounded continuously for 10 years.", zh: "求 \\$3000 以 4\\% 连续复利 10 年的终值。" },
        commonTraps: [
          { en: "Using compound interest formula instead of continuous version", zh: "误用离散复利公式而非连续复利" },
        ],
      },
      {
        id: "pt-3-1-7",
        title: { en: "Identify Asymptote of Transformed Exponential", zh: "求变换指数函数的渐近线" },
        description: { en: "Find horizontal asymptote after a vertical shift.", zh: "在垂直平移后求水平渐近线。" },
        howToRecognize: { en: "Function in form $f(x) = a^x + c$ or similar.", zh: "函数形如 $f(x) = a^x + c$ 等。" },
        steps: [
          { en: "Locate the vertical shift constant $c$", zh: "找出垂直平移常数 $c$" },
          { en: "Horizontal asymptote is $y = c$", zh: "水平渐近线为 $y = c$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the horizontal asymptote of $f(x) = e^x - 4$.", zh: "求 $f(x) = e^x - 4$ 的水平渐近线。" },
        commonTraps: [
          { en: "Forgetting that pure $a^x$ has asymptote $y = 0$", zh: "忘记纯 $a^x$ 的渐近线为 $y = 0$" },
        ],
      },
      {
        id: "pt-3-1-8",
        title: { en: "Solve Simple Exponential Equation by Inspection", zh: "目测解简单指数方程" },
        description: { en: "When both sides can be written with the same base, equate the exponents.", zh: "若两边能化为同底，则令指数相等。" },
        howToRecognize: { en: "Equation has the form $a^x = a^c$ (or rewritable that way).", zh: "方程形如 $a^x = a^c$（或可化为此）。" },
        steps: [
          { en: "Rewrite both sides with the same base if possible", zh: "若可能，把两边化为同底" },
          { en: "Set exponents equal: $x = c$", zh: "令指数相等：$x = c$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $4^x = 32$.", zh: "解 $4^x = 32$。" },
        commonTraps: [
          { en: "Failing to recognize $4 = 2^2$ and $32 = 2^5$", zh: "未识别 $4 = 2^2$ 与 $32 = 2^5$" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-3-1-9",
        title: { en: "Compare Different Compounding Frequencies", zh: "比较不同复利频率" },
        description: { en: "Determine which compounding frequency yields the largest amount over time.", zh: "判断哪种复利频率在给定时间内产生最大终值。" },
        howToRecognize: { en: "Problem provides multiple options for $n$ or asks about effective yield.", zh: "题目给出多个 $n$ 值或问有效收益率。" },
        steps: [
          { en: "Compute $A$ for each frequency", zh: "对每种频率计算 $A$" },
          { en: "Compare results", zh: "比较结果" },
          { en: "Note that more frequent compounding ⇒ more interest, but limit is continuous compounding", zh: "复利越频繁 ⇒ 利息越多，极限为连续复利" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Compare \\$1000 invested at 5\\% for 20 years compounded annually, monthly, and continuously.", zh: "比较 \\$1000 以 5\\% 投资 20 年时年复利、月复利与连续复利的差异。" },
        commonTraps: [
          { en: "Stopping after a small number of frequencies, missing the trend", zh: "只算少数几种频率，未看出趋势" },
        ],
      },
      {
        id: "pt-3-1-10",
        title: { en: "Application — Population or Decay Model", zh: "应用——人口或衰减模型" },
        description: { en: "Set up an exponential model from a real-world description.", zh: "由实际描述建立指数模型。" },
        howToRecognize: { en: "Word problem describes growth/decay with a constant ratio per time period.", zh: "应用题描述每单位时间按固定比例增长/衰减。" },
        steps: [
          { en: "Identify initial value, ratio, and time variable", zh: "确定初始值、比率与时间变量" },
          { en: "Build $f(t) = a \\cdot r^t$ (or $a e^{kt}$)", zh: "建立 $f(t) = a \\cdot r^t$（或 $a e^{kt}$）" },
          { en: "Use to predict or interpret values", zh: "用模型预测或解释" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A bacteria population doubles every 3 hours, starting at 500. Write a model and find population at 12 hours.", zh: "细菌种群每 3 小时翻倍，初值 500。写出模型并求 12 小时时种群数量。" },
        commonTraps: [
          { en: "Confusing ratio per time unit with rate as a percentage", zh: "把每单位时间的比率与百分比利率混淆" },
        ],
      },
    ],
  },
  {
    id: "3-2",
    chapterId: "ch-3",
    number: "3.2",
    title: { en: "Logarithmic Functions and Their Graphs", zh: "对数函数及其图像" },
    description: {
      en: "Convert between exponential and logarithmic form, and graph logarithmic functions.",
      zh: "在指数式与对数式之间互化，并绘制对数函数的图像。",
    },
    learningGoals: [
      { en: "Convert between exponential and logarithmic forms", zh: "在指数式与对数式之间互化" },
      { en: "Evaluate logarithms using the definition and inverse properties", zh: "用定义与反函数性质计算对数值" },
      { en: "Graph logarithmic functions and identify domain, range, and asymptote", zh: "绘制对数函数并识别定义域、值域与渐近线" },
      { en: "Use the natural logarithm $\\ln x$", zh: "使用自然对数 $\\ln x$" },
    ],
    keyConcepts: [
      {
        id: "kc-3-2-1",
        title: { en: "Definition of a Logarithm", zh: "对数的定义" },
        explanation: {
          en: "$\\log_a x = y$ means $a^y = x$, where $a > 0, a \\neq 1$, and $x > 0$. The logarithm asks: \"To what power must $a$ be raised to get $x$?\" Logarithms and exponentials are INVERSE functions.",
          zh: "$\\log_a x = y$ 意为 $a^y = x$，其中 $a > 0, a \\neq 1$，$x > 0$。对数在问：\"$a$ 的多少次方等于 $x$？\"对数与指数互为反函数。",
        },
        whenToUse: { en: "Whenever you need to undo an exponential or convert between forms", zh: "需要反演指数或在两种形式间互化时" },
        commonMistake: { en: "Allowing $\\log_a 0$ or $\\log_a (\\text{negative})$ — domain is $x > 0$", zh: "误用 $\\log_a 0$ 或 $\\log_a (\\text{负数})$——定义域为 $x > 0$" },
        example: { en: "$\\log_2 8 = 3$ because $2^3 = 8$. $\\log_5 1 = 0$ because $5^0 = 1$.", zh: "$\\log_2 8 = 3$，因为 $2^3 = 8$。$\\log_5 1 = 0$，因为 $5^0 = 1$。" },
      },
      {
        id: "kc-3-2-2",
        title: { en: "Common Log and Natural Log", zh: "常用对数与自然对数" },
        explanation: {
          en: "Common logarithm: $\\log x$ means $\\log_{10} x$ (base 10). Natural logarithm: $\\ln x$ means $\\log_e x$ (base $e$). These are the two most-used logarithms; calculators have dedicated keys for both.",
          zh: "常用对数：$\\log x$ 表示 $\\log_{10} x$（底为 10）。自然对数：$\\ln x$ 表示 $\\log_e x$（底为 $e$）。两者最常用；计算器有专门的按键。",
        },
        whenToUse: { en: "When the base is 10 or $e$ — write more concisely", zh: "底为 10 或 $e$ 时——书写更简洁" },
        commonMistake: { en: "Confusing $\\log$ (base 10) with $\\ln$ (base $e$)", zh: "把 $\\log$（10 底）与 $\\ln$（$e$ 底）弄混" },
        example: { en: "$\\log 100 = 2$, $\\ln e = 1$, $\\ln 1 = 0$", zh: "$\\log 100 = 2$，$\\ln e = 1$，$\\ln 1 = 0$" },
      },
      {
        id: "kc-3-2-3",
        title: { en: "Inverse Properties and Graph", zh: "反函数性质与图像" },
        explanation: {
          en: "Logarithm and exponential cancel: $\\log_a (a^x) = x$ and $a^{\\log_a x} = x$. The graph of $y = \\log_a x$ is the reflection of $y = a^x$ across the line $y = x$. Domain: $(0, \\infty)$. Range: all reals. Vertical asymptote: $x = 0$.",
          zh: "对数与指数互相抵消：$\\log_a (a^x) = x$，$a^{\\log_a x} = x$。$y = \\log_a x$ 的图像是 $y = a^x$ 关于直线 $y = x$ 的反射。定义域：$(0, \\infty)$。值域：全体实数。垂直渐近线：$x = 0$。",
        },
        whenToUse: { en: "Simplifying nested exponential/log expressions; sketching graphs", zh: "化简嵌套的指数/对数表达式；绘图" },
        commonMistake: { en: "Forgetting that the domain is $x > 0$", zh: "忘记定义域为 $x > 0$" },
        example: { en: "$\\log_3 (3^7) = 7$. Graph of $\\ln x$ passes through $(1, 0)$ and $(e, 1)$.", zh: "$\\log_3 (3^7) = 7$。$\\ln x$ 的图像过 $(1, 0)$ 与 $(e, 1)$。" },
      },
    ],
    formulas: [
      {
        id: "f-3-2-1",
        name: { en: "Logarithm Definition", zh: "对数定义" },
        formula: "\\log_a x = y \\iff a^y = x, \\quad a > 0, \\, a \\neq 1, \\, x > 0",
        variables: [
          { en: "$a$ — base", zh: "$a$ — 底数" },
          { en: "$x$ — argument (positive)", zh: "$x$ — 真数（正数）" },
          { en: "$y$ — value of the logarithm (any real)", zh: "$y$ — 对数值（任意实数）" },
        ],
        whenToUse: { en: "Convert between exponential and logarithmic forms", zh: "在指数式与对数式之间互化" },
        commonProblemTypes: [
          { en: "Evaluate $\\log_a x$ by recognizing $x = a^y$", zh: "通过识别 $x = a^y$ 求 $\\log_a x$" },
        ],
        example: { en: "$\\log_3 81 = 4$ because $3^4 = 81$", zh: "$\\log_3 81 = 4$，因 $3^4 = 81$" },
      },
      {
        id: "f-3-2-2",
        name: { en: "Logarithm Identities", zh: "对数恒等式" },
        formula: "\\log_a 1 = 0, \\quad \\log_a a = 1, \\quad \\log_a (a^x) = x, \\quad a^{\\log_a x} = x",
        variables: [
          { en: "$a > 0, a \\neq 1$", zh: "$a > 0, a \\neq 1$" },
        ],
        whenToUse: { en: "Quickly simplify routine expressions", zh: "快速化简常见表达式" },
        commonProblemTypes: [
          { en: "Simplify nested $\\log_a (a^k)$ or $a^{\\log_a x}$", zh: "化简嵌套的 $\\log_a (a^k)$ 或 $a^{\\log_a x}$" },
        ],
        example: { en: "$\\ln (e^5) = 5$, $10^{\\log 7} = 7$", zh: "$\\ln (e^5) = 5$，$10^{\\log 7} = 7$" },
      },
      {
        id: "f-3-2-3",
        name: { en: "Common and Natural Logs", zh: "常用对数与自然对数" },
        formula: "\\log x = \\log_{10} x, \\quad \\ln x = \\log_e x",
        variables: [
          { en: "$\\log$ — common log (base 10)", zh: "$\\log$ — 常用对数（底 10）" },
          { en: "$\\ln$ — natural log (base $e$)", zh: "$\\ln$ — 自然对数（底 $e$）" },
        ],
        whenToUse: { en: "Whenever the base is 10 or $e$", zh: "底为 10 或 $e$ 时" },
        commonProblemTypes: [
          { en: "Most calculator-based logarithm problems", zh: "大多数用计算器求对数的题目" },
        ],
        example: { en: "$\\log 1000 = 3$, $\\ln e^2 = 2$", zh: "$\\log 1000 = 3$，$\\ln e^2 = 2$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-3-2-1",
        title: { en: "Convert Exponential to Logarithmic Form", zh: "指数式化为对数式" },
        description: { en: "Rewrite $a^y = x$ as $\\log_a x = y$.", zh: "把 $a^y = x$ 改写为 $\\log_a x = y$。" },
        howToRecognize: { en: "Equation in exponential form; problem asks for log form.", zh: "指数式方程；要求改写为对数式。" },
        steps: [
          { en: "Identify base $a$, exponent $y$, and result $x$", zh: "识别底 $a$、指数 $y$ 与结果 $x$" },
          { en: "Write $\\log_a x = y$", zh: "写出 $\\log_a x = y$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Rewrite $5^3 = 125$ in logarithmic form.", zh: "把 $5^3 = 125$ 改写为对数式。" },
        commonTraps: [
          { en: "Putting the exponent in the wrong place", zh: "把指数放错位置" },
        ],
      },
      {
        id: "pt-3-2-2",
        title: { en: "Convert Logarithmic to Exponential Form", zh: "对数式化为指数式" },
        description: { en: "Rewrite $\\log_a x = y$ as $a^y = x$.", zh: "把 $\\log_a x = y$ 改写为 $a^y = x$。" },
        howToRecognize: { en: "Equation in log form; problem asks for exponential form.", zh: "对数式方程；要求改写为指数式。" },
        steps: [
          { en: "Identify base $a$, value $y$, and argument $x$", zh: "识别底 $a$、值 $y$ 与真数 $x$" },
          { en: "Write $a^y = x$", zh: "写出 $a^y = x$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Rewrite $\\log_2 32 = 5$ in exponential form.", zh: "把 $\\log_2 32 = 5$ 改写为指数式。" },
        commonTraps: [
          { en: "Confusing which number is the base", zh: "弄错底数是哪个数" },
        ],
      },
      {
        id: "pt-3-2-3",
        title: { en: "Evaluate a Basic Logarithm", zh: "求基本对数的值" },
        description: { en: "Use the definition: $\\log_a x = y$ where $a^y = x$.", zh: "用定义：$\\log_a x = y$，且 $a^y = x$。" },
        howToRecognize: { en: "Logarithm with simple base and argument; no calculator needed.", zh: "底数与真数简单；无需计算器。" },
        steps: [
          { en: "Ask \"$a$ to what power gives $x$?\"", zh: "自问\"$a$ 的几次方等于 $x$？\"" },
          { en: "Find that exponent — it's the answer", zh: "找出指数——即答案" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Evaluate $\\log_4 64$, $\\log_5 1$, and $\\ln e^3$.", zh: "求 $\\log_4 64$、$\\log_5 1$ 与 $\\ln e^3$。" },
        commonTraps: [
          { en: "Forgetting that $\\log_a 1 = 0$ regardless of $a$", zh: "忘记无论 $a$ 多少 $\\log_a 1 = 0$" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-3-2-4",
        title: { en: "Find Domain of a Log Function", zh: "求对数函数的定义域" },
        description: { en: "Set the argument $> 0$ and solve.", zh: "令真数 $> 0$ 求解。" },
        howToRecognize: { en: "Logarithmic function given; problem asks for domain.", zh: "给出对数函数；要求定义域。" },
        steps: [
          { en: "Identify the argument of the log", zh: "识别对数的真数" },
          { en: "Set argument $> 0$", zh: "令真数 $> 0$" },
          { en: "Solve and write in interval notation", zh: "求解并用区间记号给出" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the domain of $f(x) = \\log_2 (x - 5)$.", zh: "求 $f(x) = \\log_2 (x - 5)$ 的定义域。" },
        commonTraps: [
          { en: "Allowing the argument to equal zero", zh: "把真数允许为零" },
        ],
      },
      {
        id: "pt-3-2-5",
        title: { en: "Graph a Logarithmic Function", zh: "绘制对数函数" },
        description: { en: "Use key points and asymptote to sketch.", zh: "用关键点与渐近线作图。" },
        howToRecognize: { en: "Problem asks for the graph of $y = \\log_a x$ or its transformation.", zh: "题目要求 $y = \\log_a x$ 或其变换的图像。" },
        steps: [
          { en: "Mark vertical asymptote (default $x = 0$, shifts move it)", zh: "标垂直渐近线（默认 $x = 0$，平移后改变）" },
          { en: "Plot points like $(1, 0)$, $(a, 1)$, $(\\tfrac{1}{a}, -1)$", zh: "标关键点，如 $(1, 0)$、$(a, 1)$、$(\\tfrac{1}{a}, -1)$" },
          { en: "Draw a smooth curve approaching the asymptote", zh: "画光滑曲线趋近渐近线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Sketch $f(x) = \\ln(x + 2)$.", zh: "画 $f(x) = \\ln(x + 2)$。" },
        commonTraps: [
          { en: "Drawing the curve to the left of the asymptote", zh: "把曲线画到渐近线的左侧" },
        ],
      },
      {
        id: "pt-3-2-6",
        title: { en: "Use Inverse Properties to Simplify", zh: "用反函数性质化简" },
        description: { en: "Apply $\\log_a (a^x) = x$ and $a^{\\log_a x} = x$.", zh: "应用 $\\log_a (a^x) = x$ 与 $a^{\\log_a x} = x$。" },
        howToRecognize: { en: "Expression with nested log and exponential of the same base.", zh: "嵌套同底对数与指数的表达式。" },
        steps: [
          { en: "Identify the matching base on the inside and outside", zh: "确定内外的底数匹配" },
          { en: "Apply the appropriate inverse property", zh: "应用相应的反函数性质" },
          { en: "Write the simplified result", zh: "写出化简结果" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Simplify $\\log_5 (5^{2x + 1})$ and $e^{\\ln (3y)}$.", zh: "化简 $\\log_5 (5^{2x + 1})$ 与 $e^{\\ln (3y)}$。" },
        commonTraps: [
          { en: "Trying to apply when the bases don't match", zh: "底不同时仍尝试应用" },
        ],
      },
      {
        id: "pt-3-2-7",
        title: { en: "Identify Vertical Asymptote of Transformed Log", zh: "求变换对数的垂直渐近线" },
        description: { en: "Find $x$-value that makes the argument zero.", zh: "求使真数为零的 $x$ 值。" },
        howToRecognize: { en: "Function in form $\\log_a (x - h)$ or similar.", zh: "函数形如 $\\log_a (x - h)$ 等。" },
        steps: [
          { en: "Set the argument equal to $0$", zh: "令真数等于 $0$" },
          { en: "Solve for $x$ — that's the asymptote", zh: "解 $x$——即渐近线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the vertical asymptote of $f(x) = \\log(x + 6)$.", zh: "求 $f(x) = \\log(x + 6)$ 的垂直渐近线。" },
        commonTraps: [
          { en: "Reporting $x = h$ with the wrong sign", zh: "把 $x = h$ 的符号弄反" },
        ],
      },
      {
        id: "pt-3-2-8",
        title: { en: "Solve a Simple Log Equation", zh: "解简单对数方程" },
        description: { en: "Convert to exponential form and solve.", zh: "化为指数式求解。" },
        howToRecognize: { en: "Equation $\\log_a (\\cdot) = c$.", zh: "方程 $\\log_a (\\cdot) = c$。" },
        steps: [
          { en: "Rewrite $\\log_a (\\cdot) = c$ as $\\cdot = a^c$", zh: "把 $\\log_a (\\cdot) = c$ 写成 $\\cdot = a^c$" },
          { en: "Solve the resulting equation", zh: "求解所得方程" },
          { en: "Verify $x$ is in the domain", zh: "验证 $x$ 在定义域内" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $\\log_4 (x + 2) = 3$.", zh: "解 $\\log_4 (x + 2) = 3$。" },
        commonTraps: [
          { en: "Skipping the domain check", zh: "跳过定义域检查" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-3-2-9",
        title: { en: "Solve a Log Equation Using Inverses", zh: "用反函数解对数方程" },
        description: { en: "Use $a^{\\log_a x} = x$ to undo a log; or take the log of both sides to undo an exponential.", zh: "用 $a^{\\log_a x} = x$ 抵消对数；或两边取对数抵消指数。" },
        howToRecognize: { en: "Equation involves both a log and an exponential of the same base.", zh: "方程同时含对数与同底指数。" },
        steps: [
          { en: "Identify how the inverse property can isolate the variable", zh: "确定如何用反函数性质把变量分离" },
          { en: "Apply it carefully", zh: "仔细应用" },
          { en: "Solve for the variable", zh: "解出变量" },
          { en: "Check domain", zh: "检查定义域" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Solve $5^{\\log_5 (x^2 - 4)} = 21$.", zh: "解 $5^{\\log_5 (x^2 - 4)} = 21$。" },
        commonTraps: [
          { en: "Forgetting that $\\log_5 (x^2 - 4)$ requires $x^2 - 4 > 0$", zh: "忘记 $\\log_5 (x^2 - 4)$ 要求 $x^2 - 4 > 0$" },
        ],
      },
      {
        id: "pt-3-2-10",
        title: { en: "Application — pH, Sound Intensity, or Earthquake Magnitude", zh: "应用——pH、声强或地震震级" },
        description: { en: "Apply a logarithmic scale formula to compute or interpret a real-world quantity.", zh: "运用对数尺度公式计算或解释实际量。" },
        howToRecognize: { en: "Problem mentions pH, decibels, or Richter scale.", zh: "题目提到 pH、分贝或里氏震级。" },
        steps: [
          { en: "Apply the relevant formula (e.g., $\\text{pH} = -\\log[H^+]$)", zh: "应用相关公式（如 $\\text{pH} = -\\log[H^+]$）" },
          { en: "Compute using calculator's $\\log$ or $\\ln$ keys", zh: "用计算器的 $\\log$ 或 $\\ln$ 键计算" },
          { en: "Interpret the result with proper units and context", zh: "结合单位与情境解释结果" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "If a solution has $[H^+] = 3.2 \\times 10^{-5}$ mol/L, find its pH.", zh: "若溶液 $[H^+] = 3.2 \\times 10^{-5}$ mol/L，求 pH。" },
        commonTraps: [
          { en: "Forgetting the negative sign in the pH definition", zh: "忘记 pH 定义中的负号" },
        ],
      },
    ],
  },
  {
    id: "3-3",
    chapterId: "ch-3",
    number: "3.3",
    title: { en: "Properties of Logarithms", zh: "对数的性质" },
    description: {
      en: "Use the change-of-base formula and properties of logarithms to expand and condense expressions.",
      zh: "运用换底公式与对数运算性质，对对数表达式进行展开与合并。",
    },
    learningGoals: [
      { en: "Apply the product, quotient, and power rules of logarithms", zh: "应用对数的积、商、幂运算法则" },
      { en: "Use the change-of-base formula to evaluate logarithms", zh: "用换底公式求对数值" },
      { en: "Expand a single logarithm into a sum/difference of logarithms", zh: "把单一对数展开为对数的和/差" },
      { en: "Condense a sum/difference of logarithms into a single logarithm", zh: "把对数的和/差合并为单一对数" },
    ],
    keyConcepts: [
      {
        id: "kc-3-3-1",
        title: { en: "Product, Quotient, and Power Rules", zh: "积、商、幂法则" },
        explanation: {
          en: "These three rules let you split or combine logs: $\\log_a (MN) = \\log_a M + \\log_a N$, $\\log_a (M/N) = \\log_a M - \\log_a N$, and $\\log_a (M^p) = p \\log_a M$. They mirror the laws of exponents.",
          zh: "三条法则使你可以分拆或合并对数：$\\log_a (MN) = \\log_a M + \\log_a N$、$\\log_a (M/N) = \\log_a M - \\log_a N$、$\\log_a (M^p) = p \\log_a M$。它们与指数法则对应。",
        },
        whenToUse: { en: "Whenever simplifying log expressions or solving log equations", zh: "化简对数表达式或解对数方程时" },
        commonMistake: { en: "Treating $\\log(M + N)$ as $\\log M + \\log N$ (this is FALSE)", zh: "把 $\\log(M + N)$ 当作 $\\log M + \\log N$（错误）" },
        example: { en: "$\\log_2 (32) = \\log_2 (4 \\cdot 8) = \\log_2 4 + \\log_2 8 = 2 + 3 = 5$", zh: "$\\log_2 (32) = \\log_2 (4 \\cdot 8) = \\log_2 4 + \\log_2 8 = 2 + 3 = 5$" },
      },
      {
        id: "kc-3-3-2",
        title: { en: "Change of Base Formula", zh: "换底公式" },
        explanation: {
          en: "$\\log_a x = \\frac{\\log_b x}{\\log_b a}$ for any positive base $b \\neq 1$. Most often used with $b = 10$ ($\\log$) or $b = e$ ($\\ln$) so calculators can evaluate it.",
          zh: "$\\log_a x = \\frac{\\log_b x}{\\log_b a}$，其中 $b > 0, b \\neq 1$。常用 $b = 10$（$\\log$）或 $b = e$（$\\ln$）以便计算器求值。",
        },
        whenToUse: { en: "Evaluating $\\log_a$ for bases other than 10 or $e$", zh: "底数非 10 或 $e$ 时求对数值" },
        commonMistake: { en: "Switching numerator and denominator: writing $\\log_b a / \\log_b x$", zh: "颠倒分子分母：写成 $\\log_b a / \\log_b x$" },
        example: { en: "$\\log_5 13 = \\frac{\\ln 13}{\\ln 5} \\approx 1.594$", zh: "$\\log_5 13 = \\frac{\\ln 13}{\\ln 5} \\approx 1.594$" },
      },
      {
        id: "kc-3-3-3",
        title: { en: "Expansion vs Condensation", zh: "展开与合并" },
        explanation: {
          en: "Expansion: write a complicated log as a sum/difference of simpler logs (use product, quotient, power rules in the FORWARD direction). Condensation: combine sum/difference of logs into a single log (use rules in REVERSE).",
          zh: "展开：把复杂对数写为更简对数的和/差（正向使用积、商、幂法则）。合并：把对数的和/差写为单一对数（反向使用法则）。",
        },
        whenToUse: { en: "Common pre-step in solving log equations or simplifying", zh: "解对数方程或化简的常见前置步骤" },
        commonMistake: { en: "Mixing up the direction (e.g., trying to expand when you should condense)", zh: "方向弄反（如本应合并却展开）" },
        example: { en: "Expand: $\\log_2 (8x^3 / y) = 3 + 3 \\log_2 x - \\log_2 y$. Condense: $\\log 5 + 2 \\log x = \\log (5 x^2)$", zh: "展开：$\\log_2 (8x^3 / y) = 3 + 3 \\log_2 x - \\log_2 y$。合并：$\\log 5 + 2 \\log x = \\log (5 x^2)$" },
      },
    ],
    formulas: [
      {
        id: "f-3-3-1",
        name: { en: "Product Rule", zh: "积的法则" },
        formula: "\\log_a (MN) = \\log_a M + \\log_a N",
        variables: [
          { en: "$M, N > 0$", zh: "$M, N > 0$" },
        ],
        whenToUse: { en: "Splitting or combining logs of products", zh: "拆分或合并积的对数" },
        commonProblemTypes: [
          { en: "Expand $\\log(xy)$ as $\\log x + \\log y$", zh: "把 $\\log(xy)$ 展开为 $\\log x + \\log y$" },
        ],
        example: { en: "$\\ln(3 \\cdot 5) = \\ln 3 + \\ln 5$", zh: "$\\ln(3 \\cdot 5) = \\ln 3 + \\ln 5$" },
      },
      {
        id: "f-3-3-2",
        name: { en: "Quotient Rule", zh: "商的法则" },
        formula: "\\log_a \\left(\\frac{M}{N}\\right) = \\log_a M - \\log_a N",
        variables: [
          { en: "$M, N > 0$", zh: "$M, N > 0$" },
        ],
        whenToUse: { en: "Splitting or combining logs of quotients", zh: "拆分或合并商的对数" },
        commonProblemTypes: [
          { en: "Expand $\\log(x/y)$ as $\\log x - \\log y$", zh: "把 $\\log(x/y)$ 展开为 $\\log x - \\log y$" },
        ],
        example: { en: "$\\log(100 / 25) = \\log 100 - \\log 25 = 2 - \\log 25$", zh: "$\\log(100 / 25) = \\log 100 - \\log 25 = 2 - \\log 25$" },
      },
      {
        id: "f-3-3-3",
        name: { en: "Power Rule", zh: "幂的法则" },
        formula: "\\log_a (M^p) = p \\log_a M",
        variables: [
          { en: "$M > 0$, $p$ — any real", zh: "$M > 0$，$p$ — 任意实数" },
        ],
        whenToUse: { en: "Bringing exponents in/out of logarithms", zh: "把指数移入或移出对数" },
        commonProblemTypes: [
          { en: "Solve equations like $5^x = 100$ by taking logs", zh: "用取对数解 $5^x = 100$ 等方程" },
        ],
        example: { en: "$\\log(x^5) = 5 \\log x$", zh: "$\\log(x^5) = 5 \\log x$" },
      },
      {
        id: "f-3-3-4",
        name: { en: "Change of Base Formula", zh: "换底公式" },
        formula: "\\log_a x = \\frac{\\log_b x}{\\log_b a}",
        variables: [
          { en: "$a, b > 0$, $a \\neq 1$, $b \\neq 1$, $x > 0$", zh: "$a, b > 0$，$a \\neq 1$，$b \\neq 1$，$x > 0$" },
        ],
        whenToUse: { en: "Calculator evaluation of $\\log_a$ for unusual bases", zh: "用计算器求底为非常用值的对数" },
        commonProblemTypes: [
          { en: "Compute $\\log_3 50$ as $\\frac{\\ln 50}{\\ln 3}$", zh: "把 $\\log_3 50$ 化为 $\\frac{\\ln 50}{\\ln 3}$" },
        ],
        example: { en: "$\\log_7 200 = \\frac{\\log 200}{\\log 7} \\approx 2.722$", zh: "$\\log_7 200 = \\frac{\\log 200}{\\log 7} \\approx 2.722$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-3-3-1",
        title: { en: "Apply the Product Rule", zh: "应用积的法则" },
        description: { en: "Combine $\\log M + \\log N$ as $\\log(MN)$, or split as appropriate.", zh: "把 $\\log M + \\log N$ 合并为 $\\log(MN)$ 或反向。" },
        howToRecognize: { en: "Two log terms summed (or one log of a product).", zh: "两个对数项相加（或一个积的对数）。" },
        steps: [
          { en: "Identify the form (sum vs. log of product)", zh: "识别形式（和 vs 积的对数）" },
          { en: "Apply $\\log_a M + \\log_a N = \\log_a (MN)$ accordingly", zh: "相应地应用 $\\log_a M + \\log_a N = \\log_a (MN)$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Combine $\\log 4 + \\log 25$ into a single log and evaluate.", zh: "把 $\\log 4 + \\log 25$ 合并为单一对数并求值。" },
        commonTraps: [
          { en: "Trying to add inside the log: $\\log(M + N)$ is NOT $\\log M + \\log N$", zh: "误用内部加法：$\\log(M + N)$ 不等于 $\\log M + \\log N$" },
        ],
      },
      {
        id: "pt-3-3-2",
        title: { en: "Apply the Quotient Rule", zh: "应用商的法则" },
        description: { en: "Use $\\log(M/N) = \\log M - \\log N$.", zh: "用 $\\log(M/N) = \\log M - \\log N$。" },
        howToRecognize: { en: "Log of a quotient or difference of two logs.", zh: "商的对数或两个对数的差。" },
        steps: [
          { en: "Identify which is numerator and which is denominator", zh: "确定分子分母" },
          { en: "Apply $\\log_a M - \\log_a N = \\log_a (M/N)$ or reverse", zh: "应用 $\\log_a M - \\log_a N = \\log_a (M/N)$ 或反向" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Express $\\ln 12 - \\ln 4$ as a single log and evaluate.", zh: "把 $\\ln 12 - \\ln 4$ 写为单一对数并求值。" },
        commonTraps: [
          { en: "Reversing numerator and denominator", zh: "颠倒分子分母" },
        ],
      },
      {
        id: "pt-3-3-3",
        title: { en: "Apply the Power Rule", zh: "应用幂的法则" },
        description: { en: "Bring an exponent in/out of a log.", zh: "把指数移入或移出对数。" },
        howToRecognize: { en: "$\\log_a (M^p)$ or $p \\log_a M$.", zh: "$\\log_a (M^p)$ 或 $p \\log_a M$。" },
        steps: [
          { en: "If exponent is inside: bring out as a coefficient", zh: "若指数在内：移出作系数" },
          { en: "If coefficient is outside: move inside as exponent", zh: "若系数在外：移入作指数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Rewrite $\\log_5 (x^4)$ without an exponent inside.", zh: "把 $\\log_5 (x^4)$ 改写为不含内部指数。" },
        commonTraps: [
          { en: "Applying power rule to log of a sum (e.g., $\\log(M + N)^p$ — wrong)", zh: "对和的对数应用幂法则（如 $\\log(M + N)^p$——错）" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-3-3-4",
        title: { en: "Expand a Complex Log Expression", zh: "展开复杂对数表达式" },
        description: { en: "Apply all three rules to break down a single log into a sum/difference.", zh: "用三条法则把单一对数拆为和/差。" },
        howToRecognize: { en: "Single log of a product, quotient, or power; problem says \"expand.\"", zh: "积、商或幂的单一对数；题目要求\"展开\"。" },
        steps: [
          { en: "Apply quotient rule to split numerator and denominator", zh: "用商法则拆分分子分母" },
          { en: "Apply product rule to split each factor", zh: "用积法则拆分各因子" },
          { en: "Apply power rule to bring exponents out", zh: "用幂法则把指数移出" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Expand $\\ln \\left(\\frac{x^2 \\sqrt{y}}{z^3}\\right)$.", zh: "展开 $\\ln \\left(\\frac{x^2 \\sqrt{y}}{z^3}\\right)$。" },
        commonTraps: [
          { en: "Skipping the radical conversion: $\\sqrt{y} = y^{1/2}$", zh: "未把根号转为指数：$\\sqrt{y} = y^{1/2}$" },
        ],
      },
      {
        id: "pt-3-3-5",
        title: { en: "Condense to a Single Log", zh: "合并为单一对数" },
        description: { en: "Combine multiple logs (with coefficients) into one log expression.", zh: "把多个对数（含系数）合并为一个对数表达式。" },
        howToRecognize: { en: "Sum/difference of logs; problem says \"condense\" or \"as a single log.\"", zh: "对数的和/差；题目要求\"合并\"或\"写为单一对数\"。" },
        steps: [
          { en: "Apply power rule first to absorb coefficients into exponents", zh: "先用幂法则把系数变为指数" },
          { en: "Combine using product rule for sums and quotient rule for differences", zh: "用积法则合并和、商法则合并差" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Condense $3 \\log x + 2 \\log y - \\log z$.", zh: "合并 $3 \\log x + 2 \\log y - \\log z$。" },
        commonTraps: [
          { en: "Forgetting to deal with coefficients before combining", zh: "未先处理系数就合并" },
        ],
      },
      {
        id: "pt-3-3-6",
        title: { en: "Use Change of Base to Evaluate", zh: "用换底公式求值" },
        description: { en: "Convert $\\log_a x$ to a calculator-friendly base.", zh: "把 $\\log_a x$ 换为计算器易处理的底。" },
        howToRecognize: { en: "$\\log_a$ with $a$ not equal to 10 or $e$.", zh: "$\\log_a$ 且 $a$ 不为 10 或 $e$。" },
        steps: [
          { en: "Apply $\\log_a x = \\frac{\\log x}{\\log a}$ or $\\frac{\\ln x}{\\ln a}$", zh: "应用 $\\log_a x = \\frac{\\log x}{\\log a}$ 或 $\\frac{\\ln x}{\\ln a}$" },
          { en: "Compute on a calculator", zh: "用计算器求值" },
          { en: "Round to required precision", zh: "按要求精度取整" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Evaluate $\\log_4 50$ to four decimal places.", zh: "把 $\\log_4 50$ 求至四位小数。" },
        commonTraps: [
          { en: "Putting the base on top instead of in the denominator", zh: "把底数放到分子上而非分母" },
        ],
      },
      {
        id: "pt-3-3-7",
        title: { en: "Determine Which Property to Use", zh: "判断该用哪条法则" },
        description: { en: "Look at the structure (product, quotient, power) and apply the matching rule.", zh: "观察结构（积、商、幂），应用对应法则。" },
        howToRecognize: { en: "Mixed expressions; problem asks which property simplifies them.", zh: "混合表达式；题目问哪条法则可简化。" },
        steps: [
          { en: "Spot multiplication ⇒ product rule", zh: "看到乘法 ⇒ 积法则" },
          { en: "Spot division ⇒ quotient rule", zh: "看到除法 ⇒ 商法则" },
          { en: "Spot exponent ⇒ power rule", zh: "看到指数 ⇒ 幂法则" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Which property is needed to simplify $\\log_3 (x^2 / y)$? Use it.", zh: "化简 $\\log_3 (x^2 / y)$ 需要哪条法则？应用它。" },
        commonTraps: [
          { en: "Trying multiple wrong properties before noticing the right one", zh: "尝试多条不当法则才发现正确的" },
        ],
      },
      {
        id: "pt-3-3-8",
        title: { en: "Simplify Logs with Numerical Bases and Args", zh: "化简底与真数都是数的对数" },
        description: { en: "Compute exact values when arguments factor into base powers.", zh: "当真数为底数的幂时求精确值。" },
        howToRecognize: { en: "Argument is recognizable as a power of base.", zh: "真数可识别为底数的幂。" },
        steps: [
          { en: "Express the argument as a power of the base if possible", zh: "若可能，把真数写为底数的幂" },
          { en: "Use power rule to extract the exponent", zh: "用幂法则提取指数" },
          { en: "Simplify", zh: "化简" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Compute $\\log_2 (8 \\cdot 16)$ exactly.", zh: "精确计算 $\\log_2 (8 \\cdot 16)$。" },
        commonTraps: [
          { en: "Failing to recognize $8 = 2^3$ and $16 = 2^4$", zh: "未识别 $8 = 2^3$ 与 $16 = 2^4$" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-3-3-9",
        title: { en: "Combine Multiple Properties to Simplify", zh: "综合应用多条法则化简" },
        description: { en: "Strategically apply product, quotient, power, and change of base.", zh: "策略性地综合积、商、幂与换底法则。" },
        howToRecognize: { en: "Complex expression with logs of products, quotients, powers, and unusual bases.", zh: "复杂表达式含积、商、幂的对数及非常用底。" },
        steps: [
          { en: "Plan the simplification order", zh: "规划化简顺序" },
          { en: "Apply each property carefully, one at a time", zh: "逐条仔细应用" },
          { en: "Combine and simplify", zh: "合并化简" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Simplify $\\log_3 \\left(\\frac{27 x^4}{\\sqrt[3]{y}}\\right)$ using log properties.", zh: "用对数性质化简 $\\log_3 \\left(\\frac{27 x^4}{\\sqrt[3]{y}}\\right)$。" },
        commonTraps: [
          { en: "Skipping the simplification of $\\log_3 27 = 3$", zh: "未化简 $\\log_3 27 = 3$" },
        ],
      },
      {
        id: "pt-3-3-10",
        title: { en: "Application — Verify a Logarithmic Identity", zh: "应用——验证对数恒等式" },
        description: { en: "Use log properties to prove an identity holds for all valid inputs.", zh: "用对数性质证明等式对所有合法输入都成立。" },
        howToRecognize: { en: "Problem asks to verify or prove a logarithmic identity.", zh: "题目要求验证或证明对数恒等式。" },
        steps: [
          { en: "Start from one side; apply properties step by step", zh: "从一侧开始，逐步应用法则" },
          { en: "Transform until it matches the other side", zh: "化简至与另一侧相同" },
          { en: "State each property used", zh: "注明每步使用的法则" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Prove that $\\log_a (xy^2) - \\log_a (x^2 y) = \\log_a (y/x)$.", zh: "证明 $\\log_a (xy^2) - \\log_a (x^2 y) = \\log_a (y/x)$。" },
        commonTraps: [
          { en: "Manipulating both sides simultaneously instead of transforming one", zh: "两侧同时变形而非只变形一侧" },
        ],
      },
    ],
  },
  {
    id: "3-4",
    chapterId: "ch-3",
    number: "3.4",
    title: { en: "Exponential and Logarithmic Equations", zh: "指数与对数方程" },
    description: {
      en: "Solve equations involving exponential and logarithmic expressions algebraically.",
      zh: "用代数方法求解包含指数和对数表达式的方程。",
    },
    learningGoals: [
      { en: "Solve exponential equations using logarithms", zh: "用对数解指数方程" },
      { en: "Solve logarithmic equations using exponentials", zh: "用指数解对数方程" },
      { en: "Apply the one-to-one property of exponentials and logarithms", zh: "应用指数和对数的一对一性" },
      { en: "Identify and reject extraneous solutions", zh: "识别并舍去外解" },
    ],
    keyConcepts: [
      {
        id: "kc-3-4-1",
        title: { en: "One-to-One Property", zh: "一对一性质" },
        explanation: {
          en: "If $a^x = a^y$, then $x = y$ (exponential is one-to-one). If $\\log_a M = \\log_a N$, then $M = N$ (logarithm is one-to-one). These let you cancel matching exponentials or logs from both sides.",
          zh: "若 $a^x = a^y$，则 $x = y$（指数为一对一）。若 $\\log_a M = \\log_a N$，则 $M = N$（对数为一对一）。利用此可消去两边相同的指数或对数。",
        },
        whenToUse: { en: "When both sides can be expressed with the same base or log", zh: "两边可用同底指数或对数表达时" },
        commonMistake: { en: "Applying when bases differ — must rewrite to the same base first", zh: "底不同时直接应用——应先化为同底" },
        example: { en: "$2^{x + 3} = 2^{2x - 1}$ ⇒ $x + 3 = 2x - 1$ ⇒ $x = 4$", zh: "$2^{x + 3} = 2^{2x - 1}$ ⇒ $x + 3 = 2x - 1$ ⇒ $x = 4$" },
      },
      {
        id: "kc-3-4-2",
        title: { en: "Solving Exponential Equations", zh: "解指数方程" },
        explanation: {
          en: "If bases match, equate exponents (one-to-one). Otherwise, take the logarithm of both sides and apply the power rule to bring the variable down. Convert to standard form $\\log a^x = x \\log a$.",
          zh: "底相同时，令指数相等（一对一）。否则两边取对数，用幂法则把变量提下来。化为 $\\log a^x = x \\log a$ 的标准形式。",
        },
        whenToUse: { en: "Variable in an exponent; bases may or may not match", zh: "变量在指数；底可能相同或不同" },
        commonMistake: { en: "Applying log to only one side, or ignoring the power rule", zh: "只对一边取对数，或未用幂法则" },
        example: { en: "$5^x = 17$: $\\ln(5^x) = \\ln 17$ ⇒ $x \\ln 5 = \\ln 17$ ⇒ $x = \\frac{\\ln 17}{\\ln 5} \\approx 1.760$", zh: "$5^x = 17$：$\\ln(5^x) = \\ln 17$ ⇒ $x \\ln 5 = \\ln 17$ ⇒ $x = \\frac{\\ln 17}{\\ln 5} \\approx 1.760$" },
      },
      {
        id: "kc-3-4-3",
        title: { en: "Solving Log Equations and Extraneous Solutions", zh: "解对数方程与外解" },
        explanation: {
          en: "Convert $\\log_a u = c$ to $u = a^c$ to solve. After solving, ALWAYS check candidates against the original equation's domain — log arguments must be positive. Extraneous solutions arise when algebra introduces invalid candidates.",
          zh: "把 $\\log_a u = c$ 化为 $u = a^c$ 求解。求解后必须把候选代入原方程检查定义域——对数真数须为正。代数变形可能引入外解。",
        },
        whenToUse: { en: "Any time you solve a logarithmic equation", zh: "凡是解对数方程时" },
        commonMistake: { en: "Skipping the domain check, accepting a solution that makes a log argument negative", zh: "跳过定义域检查，接受了使真数为负的解" },
        example: { en: "$\\log(x) + \\log(x - 3) = 1$: $\\log(x(x-3)) = 1$ ⇒ $x^2 - 3x - 10 = 0$ ⇒ $x = 5$ or $x = -2$. Reject $-2$ ⇒ $x = 5$", zh: "$\\log(x) + \\log(x - 3) = 1$：$\\log(x(x-3)) = 1$ ⇒ $x^2 - 3x - 10 = 0$ ⇒ $x = 5$ 或 $-2$。舍 $-2$ ⇒ $x = 5$" },
      },
    ],
    formulas: [
      {
        id: "f-3-4-1",
        name: { en: "One-to-One Properties", zh: "一对一性质" },
        formula: "a^x = a^y \\iff x = y, \\quad \\log_a M = \\log_a N \\iff M = N",
        variables: [
          { en: "$a > 0, a \\neq 1$, $M, N > 0$", zh: "$a > 0, a \\neq 1$，$M, N > 0$" },
        ],
        whenToUse: { en: "Cancel matching exponentials or logs to isolate the variable", zh: "消去相同的指数或对数以分离变量" },
        commonProblemTypes: [
          { en: "Solve $a^{f(x)} = a^{g(x)}$ by setting $f(x) = g(x)$", zh: "由 $a^{f(x)} = a^{g(x)}$ 得 $f(x) = g(x)$" },
        ],
        example: { en: "$3^{2x+1} = 27$ ⇒ $3^{2x+1} = 3^3$ ⇒ $2x + 1 = 3$ ⇒ $x = 1$", zh: "$3^{2x+1} = 27$ ⇒ $3^{2x+1} = 3^3$ ⇒ $2x + 1 = 3$ ⇒ $x = 1$" },
      },
      {
        id: "f-3-4-2",
        name: { en: "Take Log of Both Sides", zh: "两边取对数" },
        formula: "a^u = b \\Rightarrow u = \\frac{\\ln b}{\\ln a} \\quad (\\text{or } \\log_a b)",
        variables: [
          { en: "$u$ — expression containing the variable", zh: "$u$ — 含变量的表达式" },
          { en: "$a, b > 0$, $a \\neq 1$", zh: "$a, b > 0$，$a \\neq 1$" },
        ],
        whenToUse: { en: "Bases differ and you need a calculator-friendly answer", zh: "底不同且需用计算器求值" },
        commonProblemTypes: [
          { en: "Solve $a^x = b$ where $b$ is not a power of $a$", zh: "解 $a^x = b$，其中 $b$ 不是 $a$ 的幂" },
        ],
        example: { en: "$7^x = 25$: $x = \\frac{\\ln 25}{\\ln 7} \\approx 1.654$", zh: "$7^x = 25$：$x = \\frac{\\ln 25}{\\ln 7} \\approx 1.654$" },
      },
      {
        id: "f-3-4-3",
        name: { en: "Exponentiate Both Sides", zh: "两边取指数" },
        formula: "\\log_a u = c \\Rightarrow u = a^c",
        variables: [
          { en: "$u$ — argument of log", zh: "$u$ — 对数的真数" },
          { en: "$c$ — given constant", zh: "$c$ — 给定常数" },
        ],
        whenToUse: { en: "Isolate the argument from a single log equation", zh: "从单一对数方程中分离真数" },
        commonProblemTypes: [
          { en: "Solve $\\log_a (\\text{expr}) = c$", zh: "解 $\\log_a (\\text{表达式}) = c$" },
        ],
        example: { en: "$\\ln(x + 1) = 2$ ⇒ $x + 1 = e^2$ ⇒ $x = e^2 - 1$", zh: "$\\ln(x + 1) = 2$ ⇒ $x + 1 = e^2$ ⇒ $x = e^2 - 1$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-3-4-1",
        title: { en: "Solve $a^x = a^y$ by Matching Exponents", zh: "通过指数相等解 $a^x = a^y$" },
        description: { en: "Apply the one-to-one property when both sides share the same base.", zh: "两边同底时应用一对一性质。" },
        howToRecognize: { en: "Both sides have the same base (or can be rewritten that way).", zh: "两边同底（或可化为同底）。" },
        steps: [
          { en: "Rewrite both sides with the same base", zh: "两边化为同底" },
          { en: "Set exponents equal", zh: "令指数相等" },
          { en: "Solve the resulting equation", zh: "求解方程" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Solve $4^{x + 1} = 64$.", zh: "解 $4^{x + 1} = 64$。" },
        commonTraps: [
          { en: "Failing to recognize $64 = 4^3$ before applying one-to-one", zh: "未识别 $64 = 4^3$ 就用一对一" },
        ],
      },
      {
        id: "pt-3-4-2",
        title: { en: "Solve $\\log_a M = \\log_a N$", zh: "解 $\\log_a M = \\log_a N$" },
        description: { en: "Apply the one-to-one property of logs.", zh: "应用对数的一对一性质。" },
        howToRecognize: { en: "Logs of the same base on both sides.", zh: "两边为同底的对数。" },
        steps: [
          { en: "Set arguments equal: $M = N$", zh: "令真数相等：$M = N$" },
          { en: "Solve and check the domain", zh: "求解并检查定义域" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Solve $\\ln(2x + 5) = \\ln(7x - 1)$.", zh: "解 $\\ln(2x + 5) = \\ln(7x - 1)$。" },
        commonTraps: [
          { en: "Skipping the domain check (could give an extraneous solution)", zh: "跳过定义域检查（可能引入外解）" },
        ],
      },
      {
        id: "pt-3-4-3",
        title: { en: "Solve $a^x = b$ by Taking $\\ln$", zh: "对 $a^x = b$ 两边取 $\\ln$" },
        description: { en: "Use logs and the power rule when bases don't match.", zh: "底不同时用对数与幂法则。" },
        howToRecognize: { en: "Variable in an exponent; bases differ; calculator answer expected.", zh: "变量在指数；底不同；要求用计算器求解。" },
        steps: [
          { en: "Take $\\ln$ (or $\\log$) of both sides", zh: "两边取 $\\ln$（或 $\\log$）" },
          { en: "Use power rule: $x \\ln a = \\ln b$", zh: "用幂法则：$x \\ln a = \\ln b$" },
          { en: "Solve $x = \\frac{\\ln b}{\\ln a}$", zh: "解 $x = \\frac{\\ln b}{\\ln a}$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Solve $3^x = 50$.", zh: "解 $3^x = 50$。" },
        commonTraps: [
          { en: "Missing the power rule, leaving $\\ln 3^x$ unreduced", zh: "未用幂法则，把 $\\ln 3^x$ 留着不化简" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-3-4-4",
        title: { en: "Solve Exponential with Coefficient", zh: "解带系数的指数方程" },
        description: { en: "Isolate the exponential term first, then take logs.", zh: "先把指数项分离，再取对数。" },
        howToRecognize: { en: "Equation like $A \\cdot a^x + B = C$.", zh: "方程形如 $A \\cdot a^x + B = C$。" },
        steps: [
          { en: "Isolate $a^x$ on one side", zh: "把 $a^x$ 分离到一边" },
          { en: "Take $\\ln$ of both sides", zh: "两边取 $\\ln$" },
          { en: "Apply power rule and solve for $x$", zh: "应用幂法则求 $x$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $4 e^{2x} - 5 = 27$.", zh: "解 $4 e^{2x} - 5 = 27$。" },
        commonTraps: [
          { en: "Taking $\\ln$ before isolating the exponential term", zh: "未先分离指数项就取 $\\ln$" },
        ],
      },
      {
        id: "pt-3-4-5",
        title: { en: "Solve a Quadratic-Form Exponential Equation", zh: "解二次形式的指数方程" },
        description: { en: "Substitute $u = a^x$ to convert to a quadratic.", zh: "令 $u = a^x$ 化为二次方程。" },
        howToRecognize: { en: "Equation has $a^{2x}$ or $(a^x)^2$ alongside $a^x$.", zh: "方程含 $a^{2x}$ 或 $(a^x)^2$ 与 $a^x$。" },
        steps: [
          { en: "Let $u = a^x$, so $a^{2x} = u^2$", zh: "令 $u = a^x$，则 $a^{2x} = u^2$" },
          { en: "Solve the quadratic in $u$", zh: "解关于 $u$ 的二次方程" },
          { en: "Convert back: $a^x = u$ ⇒ $x = \\log_a u$ (only positive $u$)", zh: "回代：$a^x = u$ ⇒ $x = \\log_a u$（$u$ 须为正）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $e^{2x} - 4 e^x + 3 = 0$.", zh: "解 $e^{2x} - 4 e^x + 3 = 0$。" },
        commonTraps: [
          { en: "Accepting a negative $u$ value (not in range of $a^x$)", zh: "接受了负的 $u$ 值（不在 $a^x$ 的值域内）" },
        ],
      },
      {
        id: "pt-3-4-6",
        title: { en: "Solve Log Equation by Condensation", zh: "通过合并解对数方程" },
        description: { en: "Combine multiple log terms into a single log first.", zh: "先把多个对数项合并为单一对数。" },
        howToRecognize: { en: "Equation contains a sum or difference of logs of the same base.", zh: "方程含同底对数的和或差。" },
        steps: [
          { en: "Use product/quotient rules to combine into one log", zh: "用积/商法则合并" },
          { en: "Convert to exponential form to solve", zh: "化为指数式求解" },
          { en: "Check candidates against the original equation's domain", zh: "把候选代入原方程检查定义域" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $\\log_2(x) + \\log_2(x - 2) = 3$.", zh: "解 $\\log_2(x) + \\log_2(x - 2) = 3$。" },
        commonTraps: [
          { en: "Forgetting to check that both $x$ and $x - 2$ are positive", zh: "忘记检查 $x$ 与 $x - 2$ 都为正" },
        ],
      },
      {
        id: "pt-3-4-7",
        title: { en: "Solve Log Equation by Expansion", zh: "通过展开解对数方程" },
        description: { en: "Apply log properties to spread out terms before isolating the variable.", zh: "在分离变量前用对数性质展开。" },
        howToRecognize: { en: "Equation has a complex log with products/quotients/exponents.", zh: "方程中对数内含积、商或幂。" },
        steps: [
          { en: "Apply power, product, quotient rules to simplify", zh: "用幂、积、商法则化简" },
          { en: "Solve algebraically", zh: "代数求解" },
          { en: "Verify against original domain", zh: "对原定义域核验" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $\\log(x^2 - 1) = \\log(x + 1) + \\log 4$.", zh: "解 $\\log(x^2 - 1) = \\log(x + 1) + \\log 4$。" },
        commonTraps: [
          { en: "Missing extraneous solutions from cross-multiplication", zh: "因交叉相乘未发现外解" },
        ],
      },
      {
        id: "pt-3-4-8",
        title: { en: "Pre-Manipulation Before Solving", zh: "求解前的预处理" },
        description: { en: "Multiply through, factor, or otherwise simplify before applying logs.", zh: "在应用对数前先去分母、因式分解或其它化简。" },
        howToRecognize: { en: "Equation has fractions or factored exponentials that obscure the structure.", zh: "方程含分式或被因式包裹的指数，结构不明显。" },
        steps: [
          { en: "Clear fractions or expand factors", zh: "去分母或展开因式" },
          { en: "Identify the simplified equation type", zh: "识别化简后的方程类型" },
          { en: "Apply the appropriate solving technique", zh: "用对应技巧求解" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $\\frac{e^x + 1}{e^x - 1} = 3$.", zh: "解 $\\frac{e^x + 1}{e^x - 1} = 3$。" },
        commonTraps: [
          { en: "Cross-multiplying without restricting $e^x \\neq 1$", zh: "交叉相乘但未限制 $e^x \\neq 1$" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-3-4-9",
        title: { en: "Identify and Reject Extraneous Solutions", zh: "识别并舍去外解" },
        description: { en: "Always check candidates against the original log equation's domain.", zh: "把候选代入原对数方程检查定义域。" },
        howToRecognize: { en: "Log equation; algebraic manipulation may introduce invalid candidates.", zh: "对数方程；代数变形可能引入无效候选。" },
        steps: [
          { en: "Solve the resulting algebraic equation (often polynomial)", zh: "解化得的代数方程（常为多项式）" },
          { en: "Substitute each candidate into ORIGINAL log equation", zh: "把每个候选代入原对数方程" },
          { en: "Reject any that make a log argument $\\leq 0$", zh: "舍去使任一对数真数 $\\leq 0$ 的候选" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Solve $\\log(x - 1) + \\log(x + 2) = 1$ and identify any extraneous solutions.", zh: "解 $\\log(x - 1) + \\log(x + 2) = 1$，并指出外解。" },
        commonTraps: [
          { en: "Skipping the substitution check", zh: "省略代入检查" },
        ],
      },
      {
        id: "pt-3-4-10",
        title: { en: "Application — Solve for Time in Compound Interest or Decay", zh: "应用——在复利或衰减中解时间" },
        description: { en: "Use logarithms to solve for the time variable in growth/decay equations.", zh: "用对数在增长/衰减方程中解时间变量。" },
        howToRecognize: { en: "Word problem asks \"how long until...\" with exponential growth or decay.", zh: "应用题问\"何时\"达到某值，含指数增长或衰减。" },
        steps: [
          { en: "Set up the growth/decay equation", zh: "建立增长/衰减方程" },
          { en: "Substitute the target value", zh: "代入目标值" },
          { en: "Take logs to solve for $t$", zh: "取对数解 $t$" },
          { en: "Round and interpret", zh: "取整并解释" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "How long will it take for \\$2000 to grow to \\$5000 at 6\\% compounded continuously?", zh: "\\$2000 以 6\\% 连续复利增长到 \\$5000 需要多久？" },
        commonTraps: [
          { en: "Mixing up base $e$ formula with discrete compounding formula", zh: "把连续复利公式与离散复利公式混用" },
        ],
      },
    ],
  },
  {
    id: "3-5",
    chapterId: "ch-3",
    number: "3.5",
    title: { en: "Exponential and Logarithmic Models", zh: "指数与对数模型" },
    description: {
      en: "Apply exponential growth and decay, Gaussian, logistic growth, and logarithmic models to real data.",
      zh: "运用指数增长与衰减、高斯、逻辑斯蒂增长及对数模型分析实际数据。",
    },
    learningGoals: [
      { en: "Use exponential growth and decay models to interpret data", zh: "用指数增长与衰减模型解读数据" },
      { en: "Apply Gaussian models to bell-shaped data", zh: "用高斯模型拟合钟形数据" },
      { en: "Apply logistic growth models to bounded growth scenarios", zh: "用逻辑斯蒂增长模型刻画有界增长情形" },
      { en: "Use logarithmic models to fit data with diminishing growth", zh: "用对数模型拟合增长率递减的数据" },
    ],
    keyConcepts: [
      {
        id: "kc-3-5-1",
        title: { en: "Exponential Growth and Decay Models", zh: "指数增长与衰减模型" },
        explanation: {
          en: "Growth: $y = a e^{bt}$ with $b > 0$. Decay: $y = a e^{-bt}$ with $b > 0$. Here $a$ is the initial amount (at $t = 0$). Half-life problems use $\\frac{a}{2} = a e^{-bt}$, solving $t = \\frac{\\ln 2}{b}$.",
          zh: "增长：$y = a e^{bt}$，$b > 0$。衰减：$y = a e^{-bt}$，$b > 0$。其中 $a$ 为初值（$t = 0$ 时）。半衰期问题：$\\frac{a}{2} = a e^{-bt}$，得 $t = \\frac{\\ln 2}{b}$。",
        },
        whenToUse: { en: "Population growth, radioactive decay, drug clearance, simple cooling, etc.", zh: "人口增长、放射性衰变、药物清除、简单冷却等" },
        commonMistake: { en: "Using positive $b$ for decay, or treating the rate as a percentage instead of a decimal", zh: "衰减时用正 $b$，或把率当百分数而非小数" },
        example: { en: "$y = 100 e^{0.05 t}$: starts at 100, grows at $5\\%$ per unit time (continuous)", zh: "$y = 100 e^{0.05 t}$：起始 100，每单位时间连续增长 $5\\%$" },
      },
      {
        id: "kc-3-5-2",
        title: { en: "Gaussian and Logistic Models", zh: "高斯与逻辑斯蒂模型" },
        explanation: {
          en: "Gaussian (bell curve): $y = a e^{-(x - b)^2 / c}$. Symmetric about $x = b$ where peak value $a$ is reached. Logistic: $y = \\frac{a}{1 + b e^{-rt}}$ — S-shaped, with $\\lim_{t \\to \\infty} y = a$ (carrying capacity).",
          zh: "高斯（钟形）：$y = a e^{-(x - b)^2 / c}$，关于 $x = b$ 对称，于该处取峰值 $a$。逻辑斯蒂：$y = \\frac{a}{1 + b e^{-rt}}$——S 形曲线，$\\lim_{t \\to \\infty} y = a$（承载量）。",
        },
        whenToUse: { en: "Gaussian: probability/test scores. Logistic: population with capacity, disease spread, market saturation.", zh: "高斯：概率/考试成绩。逻辑斯蒂：有承载量的人口、疾病传播、市场饱和。" },
        commonMistake: { en: "Forgetting that logistic has a horizontal asymptote at $y = a$ (NOT at $y = 0$)", zh: "忘记逻辑斯蒂的水平渐近线为 $y = a$（不是 $y = 0$）" },
        example: { en: "Logistic $y = \\frac{1000}{1 + 99 e^{-0.5 t}}$: starts $\\approx 10$, approaches 1000", zh: "逻辑斯蒂 $y = \\frac{1000}{1 + 99 e^{-0.5 t}}$：起始约 10，趋近 1000" },
      },
      {
        id: "kc-3-5-3",
        title: { en: "Logarithmic Models", zh: "对数模型" },
        explanation: {
          en: "Logarithmic models: $y = a + b \\ln x$ or $y = a + b \\log x$. They describe quantities that grow rapidly at first then slow down — opposite of exponential growth. Used for sound (decibels), Richter scale, pH, learning curves.",
          zh: "对数模型：$y = a + b \\ln x$ 或 $y = a + b \\log x$。刻画初期快速增长后逐渐放缓——与指数增长相反。用于声学（分贝）、里氏震级、pH、学习曲线。",
        },
        whenToUse: { en: "When growth flattens; perception scales (sound, brightness)", zh: "当增长趋缓时；感知尺度（声、光）" },
        commonMistake: { en: "Confusing logarithmic growth with logistic (both flatten, but for different reasons)", zh: "把对数增长与逻辑斯蒂混淆（都会趋缓，但原因不同）" },
        example: { en: "$y = 12 + 2 \\ln x$: at $x = 1$, $y = 12$; at $x = e^5 \\approx 148$, $y = 22$", zh: "$y = 12 + 2 \\ln x$：$x = 1$ 时 $y = 12$；$x = e^5 \\approx 148$ 时 $y = 22$" },
      },
    ],
    formulas: [
      {
        id: "f-3-5-1",
        name: { en: "Exponential Growth/Decay", zh: "指数增长/衰减" },
        formula: "y = a e^{\\pm bt}, \\; a, b > 0",
        variables: [
          { en: "$+bt$ — growth; $-bt$ — decay", zh: "$+bt$ — 增长；$-bt$ — 衰减" },
          { en: "$a$ — initial amount", zh: "$a$ — 初值" },
          { en: "$b$ — continuous rate", zh: "$b$ — 连续速率" },
        ],
        whenToUse: { en: "Continuous growth or decay processes", zh: "连续增长或衰减过程" },
        commonProblemTypes: [
          { en: "Solve for time, rate, or amount", zh: "求时间、速率或量" },
          { en: "Convert between continuous rate and discrete percent", zh: "在连续速率与离散百分数间转换" },
        ],
        example: { en: "Bacteria: $y = 500 e^{0.4 t}$ — at $t = 5$, $y \\approx 3695$", zh: "细菌：$y = 500 e^{0.4 t}$——$t = 5$ 时 $y \\approx 3695$" },
      },
      {
        id: "f-3-5-2",
        name: { en: "Half-Life Equation", zh: "半衰期方程" },
        formula: "t_{1/2} = \\frac{\\ln 2}{b} \\; (\\text{for } y = a e^{-bt})",
        variables: [
          { en: "$t_{1/2}$ — time for $y$ to halve", zh: "$t_{1/2}$ — $y$ 减半所需时间" },
          { en: "$b$ — decay constant", zh: "$b$ — 衰减常数" },
        ],
        whenToUse: { en: "Radioactive decay, drug elimination, any half-life problem", zh: "放射性衰变、药物代谢、半衰期问题" },
        commonProblemTypes: [
          { en: "Find $t_{1/2}$ given $b$, or vice versa", zh: "已知 $b$ 求 $t_{1/2}$ 或反之" },
        ],
        example: { en: "If $b = 0.0001$ per year, $t_{1/2} = \\frac{\\ln 2}{0.0001} \\approx 6931$ years", zh: "若 $b = 0.0001$/年，$t_{1/2} = \\frac{\\ln 2}{0.0001} \\approx 6931$ 年" },
      },
      {
        id: "f-3-5-3",
        name: { en: "Logistic Growth Model", zh: "逻辑斯蒂增长模型" },
        formula: "y = \\frac{a}{1 + b e^{-rt}}",
        variables: [
          { en: "$a$ — carrying capacity (limit)", zh: "$a$ — 承载量（极限）" },
          { en: "$b$ — initial conditions parameter", zh: "$b$ — 初始条件参数" },
          { en: "$r$ — intrinsic growth rate", zh: "$r$ — 内禀增长率" },
        ],
        whenToUse: { en: "Bounded growth (epidemic, population, market saturation)", zh: "有界增长（疫情、人口、市场饱和）" },
        commonProblemTypes: [
          { en: "Find time to reach a target value", zh: "求达到目标值的时间" },
          { en: "Identify carrying capacity from data", zh: "由数据识别承载量" },
        ],
        example: { en: "$y = \\frac{1000}{1 + 9 e^{-0.5 t}}$: $a = 1000$ is the limit", zh: "$y = \\frac{1000}{1 + 9 e^{-0.5 t}}$：$a = 1000$ 为极限" },
      },
      {
        id: "f-3-5-4",
        name: { en: "Logarithmic Model", zh: "对数模型" },
        formula: "y = a + b \\ln x \\quad \\text{or} \\quad y = a + b \\log x",
        variables: [
          { en: "$a, b$ — model parameters", zh: "$a, b$ — 模型参数" },
        ],
        whenToUse: { en: "Diminishing-returns scenarios", zh: "收益递减情形" },
        commonProblemTypes: [
          { en: "Fit data with slowing growth", zh: "拟合增速减缓的数据" },
        ],
        example: { en: "Sound: dB = $10 \\log(I / I_0)$", zh: "声学：dB = $10 \\log(I / I_0)$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-3-5-1",
        title: { en: "Identify Which Model Fits a Scenario", zh: "判断情景适用的模型" },
        description: { en: "Match a verbal description to one of the four model types.", zh: "把文字描述对应到四种模型之一。" },
        howToRecognize: { en: "Problem describes growth/decay behavior; asks for model type.", zh: "题目描述增长/衰减行为；问适用模型。" },
        steps: [
          { en: "Constant ratio per period ⇒ exponential growth/decay", zh: "每期固定比率 ⇒ 指数增长/衰减" },
          { en: "Bell-shaped, symmetric ⇒ Gaussian", zh: "钟形对称 ⇒ 高斯" },
          { en: "S-shape with capacity ⇒ logistic", zh: "有承载量的 S 形 ⇒ 逻辑斯蒂" },
          { en: "Diminishing growth, no upper bound ⇒ logarithmic", zh: "增长递减，无上界 ⇒ 对数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Which model best fits a population that grows quickly at first, then levels off near a carrying capacity?", zh: "哪种模型最适合最初快速增长、后趋近承载量的人口？" },
        commonTraps: [
          { en: "Choosing exponential when there's a clear capacity (should be logistic)", zh: "存在明显承载量却选指数（应为逻辑斯蒂）" },
        ],
      },
      {
        id: "pt-3-5-2",
        title: { en: "Find Initial Value $a$", zh: "求初值 $a$" },
        description: { en: "Evaluate the model at $t = 0$ to find the starting amount.", zh: "在 $t = 0$ 处求初值。" },
        howToRecognize: { en: "Problem asks for the value when $t = 0$.", zh: "题目要求 $t = 0$ 时的值。" },
        steps: [
          { en: "Substitute $t = 0$ into the model", zh: "把 $t = 0$ 代入模型" },
          { en: "Simplify (e.g., $e^0 = 1$)", zh: "化简（如 $e^0 = 1$）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "For $y = 250 e^{0.03 t}$, what is the initial population?", zh: "对 $y = 250 e^{0.03 t}$，初始人口是多少？" },
        commonTraps: [
          { en: "Forgetting that $e^0 = 1$ — initial value is just $a$", zh: "忘记 $e^0 = 1$——初值即为 $a$" },
        ],
      },
      {
        id: "pt-3-5-3",
        title: { en: "Identify Carrying Capacity in Logistic Model", zh: "识别逻辑斯蒂模型的承载量" },
        description: { en: "Read $a$ from $y = \\frac{a}{1 + b e^{-rt}}$.", zh: "从 $y = \\frac{a}{1 + b e^{-rt}}$ 中读出 $a$。" },
        howToRecognize: { en: "Problem asks for limiting value of a logistic model.", zh: "题目问逻辑斯蒂模型的极限值。" },
        steps: [
          { en: "Identify the constant in the numerator", zh: "找出分子的常数" },
          { en: "That constant is the carrying capacity", zh: "该常数即承载量" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "For $y = \\frac{2400}{1 + 19 e^{-0.4 t}}$, find the carrying capacity.", zh: "对 $y = \\frac{2400}{1 + 19 e^{-0.4 t}}$，求承载量。" },
        commonTraps: [
          { en: "Confusing $b$ (initial parameter) with carrying capacity", zh: "把 $b$（初始参数）当承载量" },
        ],
      },
      // ── Medium (5) ────────────────────────────────────────
      {
        id: "pt-3-5-4",
        title: { en: "Find Decay Rate from Half-Life", zh: "由半衰期求衰减率" },
        description: { en: "Compute $b$ given $t_{1/2}$ using $t_{1/2} = \\ln 2 / b$.", zh: "已知 $t_{1/2}$，用 $t_{1/2} = \\ln 2 / b$ 求 $b$。" },
        howToRecognize: { en: "Half-life given; problem asks for the decay constant or model.", zh: "给出半衰期；要求衰减常数或模型。" },
        steps: [
          { en: "Solve $b = \\frac{\\ln 2}{t_{1/2}}$", zh: "解 $b = \\frac{\\ln 2}{t_{1/2}}$" },
          { en: "Write the model $y = a e^{-bt}$", zh: "写出模型 $y = a e^{-bt}$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Carbon-14 has half-life 5730 years. Find its decay constant $b$.", zh: "碳-14 半衰期为 5730 年。求衰减常数 $b$。" },
        commonTraps: [
          { en: "Sign error: $b$ should be positive in $-bt$", zh: "符号错误：$-bt$ 中 $b$ 应为正" },
        ],
      },
      {
        id: "pt-3-5-5",
        title: { en: "Find Growth Rate from Two Data Points", zh: "由两数据点求增长率" },
        description: { en: "Use two $(t, y)$ pairs to solve for $a$ and $b$ in the growth model.", zh: "用两组 $(t, y)$ 解增长模型中的 $a$ 与 $b$。" },
        howToRecognize: { en: "Two data points are given; problem asks to fit a model.", zh: "给出两数据点；要求拟合模型。" },
        steps: [
          { en: "Plug both points into $y = a e^{bt}$", zh: "把两点代入 $y = a e^{bt}$" },
          { en: "Divide one equation by the other to eliminate $a$", zh: "两方程相除消去 $a$" },
          { en: "Solve for $b$ via $\\ln$", zh: "用 $\\ln$ 解 $b$" },
          { en: "Back-substitute to find $a$", zh: "回代求 $a$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A population is 200 at $t = 0$ and 700 at $t = 5$. Find $a$ and $b$ in $y = a e^{bt}$.", zh: "人口在 $t = 0$ 时为 200，$t = 5$ 时为 700。求 $y = a e^{bt}$ 中的 $a$ 与 $b$。" },
        commonTraps: [
          { en: "Forgetting that $a = y_0$ when $t = 0$", zh: "忘记 $t = 0$ 时 $a = y_0$" },
        ],
      },
      {
        id: "pt-3-5-6",
        title: { en: "Solve for Time Given Target Value", zh: "已知目标值求时间" },
        description: { en: "Use logs to invert the model and find $t$.", zh: "用对数反演模型求 $t$。" },
        howToRecognize: { en: "Problem asks \"when will $y$ reach...?\"", zh: "题目问\"何时 $y$ 达到……？\"" },
        steps: [
          { en: "Set $y$ equal to target value", zh: "把 $y$ 置为目标值" },
          { en: "Isolate the exponential term", zh: "分离指数项" },
          { en: "Take $\\ln$ to solve for $t$", zh: "取 $\\ln$ 解 $t$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A culture follows $y = 800 e^{0.02 t}$. When will the population reach 5000?", zh: "培养基种群 $y = 800 e^{0.02 t}$。何时种群达到 5000？" },
        commonTraps: [
          { en: "Forgetting to divide both sides before taking $\\ln$", zh: "取 $\\ln$ 前忘记两边相除" },
        ],
      },
      {
        id: "pt-3-5-7",
        title: { en: "Apply a Logistic Growth Model", zh: "应用逻辑斯蒂增长模型" },
        description: { en: "Evaluate or solve a logistic equation for time or population.", zh: "对逻辑斯蒂方程求值或解时间/人口。" },
        howToRecognize: { en: "Equation has form $y = \\frac{a}{1 + b e^{-rt}}$.", zh: "方程形如 $y = \\frac{a}{1 + b e^{-rt}}$。" },
        steps: [
          { en: "Substitute given $t$ to find $y$, OR substitute $y$ and solve for $t$", zh: "代入已知 $t$ 求 $y$，或代入 $y$ 解 $t$" },
          { en: "When solving for $t$: isolate $e^{-rt}$, take $\\ln$", zh: "解 $t$ 时：分离 $e^{-rt}$，取 $\\ln$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "For $y = \\frac{500}{1 + 24 e^{-0.3 t}}$, find $y$ when $t = 10$.", zh: "对 $y = \\frac{500}{1 + 24 e^{-0.3 t}}$，求 $t = 10$ 时的 $y$。" },
        commonTraps: [
          { en: "Errors in algebraic manipulation of the fraction", zh: "对分式代数变形时出错" },
        ],
      },
      {
        id: "pt-3-5-8",
        title: { en: "Use a Logarithmic Model", zh: "应用对数模型" },
        description: { en: "Solve $y = a + b \\ln x$ for $x$ or $y$.", zh: "对 $y = a + b \\ln x$ 解 $x$ 或 $y$。" },
        howToRecognize: { en: "Equation involves $\\ln x$ or $\\log x$ in a model.", zh: "模型方程含 $\\ln x$ 或 $\\log x$。" },
        steps: [
          { en: "If solving for $y$: substitute and compute", zh: "求 $y$：代入并计算" },
          { en: "If solving for $x$: isolate the log, then exponentiate", zh: "求 $x$：分离对数后取指数" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A model is $y = 60 + 8 \\ln x$. Find $x$ when $y = 75$.", zh: "模型为 $y = 60 + 8 \\ln x$。$y = 75$ 时求 $x$。" },
        commonTraps: [
          { en: "Confusing common log and natural log on the calculator", zh: "在计算器上混淆常用对数与自然对数" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-3-5-9",
        title: { en: "Carbon Dating or Radioactive Decay", zh: "碳年代法或放射性衰变" },
        description: { en: "Use half-life and remaining percentage to find an artifact's age.", zh: "利用半衰期与剩余比例求文物年代。" },
        howToRecognize: { en: "Problem mentions carbon-14, fossil age, or radioactive percentage remaining.", zh: "题目提到碳-14、化石年龄或剩余放射性百分比。" },
        steps: [
          { en: "Use $b = \\ln 2 / t_{1/2}$ for the decay constant", zh: "用 $b = \\ln 2 / t_{1/2}$ 算衰减常数" },
          { en: "Set $y = (\\text{remaining percent}) \\cdot a$", zh: "把 $y$ 设为剩余比例 $\\cdot a$" },
          { en: "Solve $y = a e^{-bt}$ for $t$ via $\\ln$", zh: "对 $y = a e^{-bt}$ 用 $\\ln$ 解 $t$" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A fossil contains 25\\% of its original carbon-14 (half-life 5730 years). How old is it?", zh: "化石含原始碳-14 的 25\\%（半衰期 5730 年），它有多老？" },
        commonTraps: [
          { en: "Mixing up percent remaining with percent decayed", zh: "把剩余比例与已衰变比例弄反" },
        ],
      },
      {
        id: "pt-3-5-10",
        title: { en: "Multi-Step Application — Combined Models", zh: "多步骤应用——组合模型" },
        description: { en: "Use multiple model types or extract several quantities from one model.", zh: "综合多种模型或从一个模型中导出多个量。" },
        howToRecognize: { en: "Problem requires both fitting a model AND making multiple predictions.", zh: "题目既要拟合模型又要做多次预测。" },
        steps: [
          { en: "Fit the model (find $a$, $b$, etc.) using data", zh: "用数据拟合模型（求 $a$、$b$ 等）" },
          { en: "Use the model to answer each part", zh: "用模型逐题作答" },
          { en: "Interpret each result with units and context", zh: "结合单位与情境解释每个结果" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A virus spreads logistically with capacity 10000. After 1 week, 200 are infected; after 4 weeks, 4800. Find $b$ and $r$, then determine when 9000 will be infected.", zh: "病毒按逻辑斯蒂传播，承载量 10000。第 1 周感染 200 人，第 4 周 4800 人。求 $b$ 和 $r$，再求何时感染 9000 人。" },
        commonTraps: [
          { en: "Forgetting to use both data points to determine the two parameters", zh: "忘记用两数据点同时确定两个参数" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Describe angles using standard position and identify coterminal angles", zh: "用标准位置描述角并识别同终边角" },
      { en: "Convert between degree and radian measure", zh: "在角度与弧度之间互化" },
      { en: "Use the arc length formula $s = r\\theta$", zh: "运用弧长公式 $s = r\\theta$" },
      { en: "Find the area of a circular sector and solve angular-speed problems", zh: "求扇形面积并解决角速度问题" },
    ],
    keyConcepts: [
      {
        id: "kc-4-1-1",
        title: { en: "Angles in Standard Position & Coterminal Angles", zh: "标准位置角与同终边角" },
        explanation: {
          en: "An angle is in standard position when its vertex is at the origin and its initial side lies along the positive $x$-axis. A positive angle rotates counter-clockwise; a negative angle rotates clockwise. Two angles are coterminal if they share the same terminal side. Add or subtract $360°$ (or $2\\pi$) to find coterminal angles.",
          zh: "角的顶点在原点、始边沿正 $x$ 轴时，称角处于标准位置。正角逆时针旋转，负角顺时针旋转。两个角的终边重合时称为同终边角。加减 $360°$（或 $2\\pi$）即可求同终边角。",
        },
        whenToUse: { en: "Describing rotations and finding equivalent angle measures", zh: "描述旋转及求等价角度" },
        commonMistake: { en: "Confusing direction: positive = counter-clockwise, negative = clockwise", zh: "混淆方向：正角 = 逆时针，负角 = 顺时针" },
        example: { en: "$\\theta = 30°$ and $\\theta = 390°$ are coterminal because $390° - 360° = 30°$", zh: "$\\theta = 30°$ 与 $\\theta = 390°$ 同终边，因为 $390° - 360° = 30°$" },
      },
      {
        id: "kc-4-1-2",
        title: { en: "Radian Measure", zh: "弧度制" },
        explanation: {
          en: "One radian is the measure of a central angle that intercepts an arc equal in length to the radius. A full revolution is $2\\pi$ radians. Therefore $360° = 2\\pi$ rad, and $180° = \\pi$ rad. To convert: degrees → radians multiply by $\\frac{\\pi}{180}$; radians → degrees multiply by $\\frac{180}{\\pi}$.",
          zh: "一弧度是截弧长等于半径的圆心角。一整圈为 $2\\pi$ 弧度。因此 $360° = 2\\pi$ rad，$180° = \\pi$ rad。转换：角度→弧度乘 $\\frac{\\pi}{180}$；弧度→角度乘 $\\frac{180}{\\pi}$。",
        },
        whenToUse: { en: "All formulas in calculus and physics use radians — this is the default angle unit", zh: "微积分与物理的所有公式默认用弧度" },
        commonMistake: { en: "Using degree values in formulas that require radians (e.g., $s = r\\theta$ needs $\\theta$ in radians)", zh: "在需要弧度的公式（如 $s = r\\theta$）中代入角度值" },
        example: { en: "$60° = 60 \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{3}$ rad; $\\frac{5\\pi}{4}$ rad $= \\frac{5\\pi}{4} \\cdot \\frac{180}{\\pi} = 225°$", zh: "$60° = 60 \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{3}$ rad；$\\frac{5\\pi}{4}$ rad $= \\frac{5\\pi}{4} \\cdot \\frac{180}{\\pi} = 225°$" },
      },
      {
        id: "kc-4-1-3",
        title: { en: "Arc Length, Sector Area, and Angular Speed", zh: "弧长、扇形面积与角速度" },
        explanation: {
          en: "Arc length: $s = r\\theta$ ($\\theta$ in radians). Sector area: $A = \\frac{1}{2}r^2\\theta$. Angular speed: $\\omega = \\frac{\\theta}{t}$ (radians per unit time). Linear speed along the arc: $v = r\\omega = \\frac{s}{t}$.",
          zh: "弧长：$s = r\\theta$（$\\theta$ 为弧度）。扇形面积：$A = \\frac{1}{2}r^2\\theta$。角速度：$\\omega = \\frac{\\theta}{t}$（每单位时间的弧度数）。弧上的线速度：$v = r\\omega = \\frac{s}{t}$。",
        },
        whenToUse: { en: "Problems involving circular motion, arc measurement, or rotating objects", zh: "涉及圆周运动、弧度量或旋转物体的问题" },
        commonMistake: { en: "Using degrees instead of radians in $s = r\\theta$ or $A = \\frac{1}{2}r^2\\theta$", zh: "在 $s = r\\theta$ 或 $A = \\frac{1}{2}r^2\\theta$ 中用角度而非弧度" },
        example: { en: "Circle with $r = 10$, central angle $\\frac{\\pi}{3}$: $s = 10 \\cdot \\frac{\\pi}{3} \\approx 10.47$; $A = \\frac{1}{2}(100)\\frac{\\pi}{3} \\approx 52.36$", zh: "半径 $r = 10$、圆心角 $\\frac{\\pi}{3}$ 的圆：$s = 10 \\cdot \\frac{\\pi}{3} \\approx 10.47$；$A = \\frac{1}{2}(100)\\frac{\\pi}{3} \\approx 52.36$" },
      },
    ],
    formulas: [
      {
        id: "f-4-1-1",
        name: { en: "Degree ↔ Radian Conversion", zh: "角度↔弧度互化" },
        formula: "\\text{radians} = \\text{degrees} \\times \\frac{\\pi}{180}, \\quad \\text{degrees} = \\text{radians} \\times \\frac{180}{\\pi}",
        variables: [
          { en: "$180° = \\pi$ radians — the fundamental relationship", zh: "$180° = \\pi$ 弧度——基本关系" },
        ],
        whenToUse: { en: "Whenever you need to switch between the two angle units", zh: "需要在两种角度单位之间转换时" },
        commonProblemTypes: [
          { en: "Convert a given degree measure to radians", zh: "将角度值转换为弧度" },
          { en: "Convert a given radian measure to degrees", zh: "将弧度值转换为角度" },
        ],
        example: { en: "$45° = \\frac{\\pi}{4}$ rad; $\\frac{2\\pi}{3}$ rad $= 120°$", zh: "$45° = \\frac{\\pi}{4}$ rad；$\\frac{2\\pi}{3}$ rad $= 120°$" },
      },
      {
        id: "f-4-1-2",
        name: { en: "Arc Length Formula", zh: "弧长公式" },
        formula: "s = r\\theta",
        variables: [
          { en: "$s$ — arc length", zh: "$s$ — 弧长" },
          { en: "$r$ — radius", zh: "$r$ — 半径" },
          { en: "$\\theta$ — central angle in radians", zh: "$\\theta$ — 圆心角（弧度）" },
        ],
        whenToUse: { en: "Finding the length of an arc intercepted by a central angle", zh: "求圆心角所截弧的长度" },
        commonProblemTypes: [
          { en: "Find arc length given radius and central angle", zh: "已知半径和圆心角求弧长" },
          { en: "Find the central angle given arc length and radius", zh: "已知弧长和半径求圆心角" },
        ],
        example: { en: "$r = 6$, $\\theta = \\frac{\\pi}{4}$: $s = 6 \\cdot \\frac{\\pi}{4} = \\frac{3\\pi}{2} \\approx 4.71$", zh: "$r = 6$，$\\theta = \\frac{\\pi}{4}$：$s = 6 \\cdot \\frac{\\pi}{4} = \\frac{3\\pi}{2} \\approx 4.71$" },
      },
      {
        id: "f-4-1-3",
        name: { en: "Sector Area Formula", zh: "扇形面积公式" },
        formula: "A = \\frac{1}{2}r^2\\theta",
        variables: [
          { en: "$A$ — area of the sector", zh: "$A$ — 扇形面积" },
          { en: "$r$ — radius", zh: "$r$ — 半径" },
          { en: "$\\theta$ — central angle in radians", zh: "$\\theta$ — 圆心角（弧度）" },
        ],
        whenToUse: { en: "Finding the area of a pie-shaped region of a circle", zh: "求圆的扇形区域面积" },
        commonProblemTypes: [
          { en: "Find the area of a sector", zh: "求扇形面积" },
          { en: "Find the central angle given sector area and radius", zh: "已知扇形面积和半径求圆心角" },
        ],
        example: { en: "$r = 8$, $\\theta = \\frac{\\pi}{6}$: $A = \\frac{1}{2}(64)\\frac{\\pi}{6} = \\frac{32\\pi}{6} \\approx 16.76$", zh: "$r = 8$，$\\theta = \\frac{\\pi}{6}$：$A = \\frac{1}{2}(64)\\frac{\\pi}{6} = \\frac{32\\pi}{6} \\approx 16.76$" },
      },
      {
        id: "f-4-1-4",
        name: { en: "Linear and Angular Speed", zh: "线速度与角速度" },
        formula: "\\omega = \\frac{\\theta}{t}, \\quad v = r\\omega = \\frac{s}{t}",
        variables: [
          { en: "$\\omega$ — angular speed (rad/time)", zh: "$\\omega$ — 角速度（弧度/时间）" },
          { en: "$v$ — linear speed (distance/time)", zh: "$v$ — 线速度（距离/时间）" },
          { en: "$r$ — radius", zh: "$r$ — 半径" },
          { en: "$t$ — time", zh: "$t$ — 时间" },
        ],
        whenToUse: { en: "Rotating wheels, pulleys, gears, or any circular-motion problem", zh: "旋转的轮子、滑轮、齿轮或任何圆周运动问题" },
        commonProblemTypes: [
          { en: "Find linear speed from angular speed and radius", zh: "由角速度和半径求线速度" },
          { en: "Find angular speed from revolutions per minute", zh: "由每分钟转数求角速度" },
        ],
        example: { en: "A wheel of radius 2 ft spins at 100 rpm: $\\omega = 100 \\cdot 2\\pi = 200\\pi$ rad/min, $v = 2 \\cdot 200\\pi = 400\\pi \\approx 1257$ ft/min", zh: "半径 2 ft 的轮子 100 rpm：$\\omega = 100 \\cdot 2\\pi = 200\\pi$ rad/min，$v = 2 \\cdot 200\\pi = 400\\pi \\approx 1257$ ft/min" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-4-1-1",
        title: { en: "Convert Degrees to Radians", zh: "角度转弧度" },
        description: { en: "Multiply the degree measure by $\\frac{\\pi}{180}$ and simplify.", zh: "将角度值乘以 $\\frac{\\pi}{180}$ 并化简。" },
        howToRecognize: { en: "A degree value is given; answer required in radians.", zh: "给出角度值；要求用弧度表示。" },
        steps: [
          { en: "Multiply by $\\frac{\\pi}{180}$", zh: "乘以 $\\frac{\\pi}{180}$" },
          { en: "Simplify the fraction", zh: "化简分数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Convert $150°$ to radians.", zh: "将 $150°$ 转换为弧度。" },
        commonTraps: [
          { en: "Forgetting to simplify: $\\frac{150\\pi}{180}$ should become $\\frac{5\\pi}{6}$", zh: "忘记化简：$\\frac{150\\pi}{180}$ 应化为 $\\frac{5\\pi}{6}$" },
        ],
      },
      {
        id: "pt-4-1-2",
        title: { en: "Convert Radians to Degrees", zh: "弧度转角度" },
        description: { en: "Multiply the radian measure by $\\frac{180}{\\pi}$ and simplify.", zh: "将弧度值乘以 $\\frac{180}{\\pi}$ 并化简。" },
        howToRecognize: { en: "A radian value (often with $\\pi$) is given; answer required in degrees.", zh: "给出弧度值（通常含 $\\pi$）；要求用角度表示。" },
        steps: [
          { en: "Multiply by $\\frac{180}{\\pi}$", zh: "乘以 $\\frac{180}{\\pi}$" },
          { en: "Cancel $\\pi$ and simplify", zh: "消去 $\\pi$ 并化简" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Convert $\\frac{7\\pi}{6}$ to degrees.", zh: "将 $\\frac{7\\pi}{6}$ 转换为角度。" },
        commonTraps: [
          { en: "Multiplying by $\\frac{\\pi}{180}$ instead of $\\frac{180}{\\pi}$ (wrong direction)", zh: "乘以 $\\frac{\\pi}{180}$ 而非 $\\frac{180}{\\pi}$（方向搞反）" },
        ],
      },
      {
        id: "pt-4-1-3",
        title: { en: "Find Coterminal Angles", zh: "求同终边角" },
        description: { en: "Add or subtract $360°$ (or $2\\pi$) to find a coterminal angle in a specified range.", zh: "加减 $360°$（或 $2\\pi$）在指定范围内求同终边角。" },
        howToRecognize: { en: "Problem gives an angle and asks for a coterminal angle (often $0° \\leq \\theta < 360°$).", zh: "题目给出一个角，要求在某范围（通常 $0° \\leq \\theta < 360°$）内求同终边角。" },
        steps: [
          { en: "Add or subtract $360°$ (or $2\\pi$) until the result is in the desired range", zh: "加减 $360°$（或 $2\\pi$）直到结果落在要求的范围内" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find a coterminal angle of $-120°$ in $[0°, 360°)$.", zh: "求 $-120°$ 在 $[0°, 360°)$ 内的同终边角。" },
        commonTraps: [
          { en: "Adding only once when multiple additions are needed (e.g., $-750°$)", zh: "需要多次加减时只加减了一次（如 $-750°$）" },
        ],
      },
      {
        id: "pt-4-1-4",
        title: { en: "Sketch an Angle in Standard Position", zh: "在标准位置画角" },
        description: { en: "Draw the initial side on the positive $x$-axis and rotate by the given measure.", zh: "始边沿正 $x$ 轴，按给定量旋转。" },
        howToRecognize: { en: "Problem asks you to draw or sketch an angle.", zh: "题目要求画角。" },
        steps: [
          { en: "Draw the initial side along the positive $x$-axis", zh: "沿正 $x$ 轴画始边" },
          { en: "Rotate counter-clockwise for positive, clockwise for negative", zh: "正角逆时针，负角顺时针" },
          { en: "Mark the terminal side", zh: "标出终边" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Sketch $\\theta = -\\frac{3\\pi}{4}$ in standard position.", zh: "在标准位置画出 $\\theta = -\\frac{3\\pi}{4}$。" },
        commonTraps: [
          { en: "Rotating in the wrong direction for negative angles", zh: "负角时旋转方向搞反" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-4-1-5",
        title: { en: "Find Arc Length", zh: "求弧长" },
        description: { en: "Use $s = r\\theta$ with $\\theta$ in radians.", zh: "用 $s = r\\theta$（$\\theta$ 为弧度）。" },
        howToRecognize: { en: "Given radius and central angle; asked for arc length.", zh: "已知半径和圆心角；要求弧长。" },
        steps: [
          { en: "Convert the angle to radians if given in degrees", zh: "若角为角度制则先转弧度" },
          { en: "Apply $s = r\\theta$", zh: "代入 $s = r\\theta$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the arc length on a circle of radius 12 cm subtended by a central angle of $150°$.", zh: "求半径 12 cm 的圆上圆心角 $150°$ 所对弧长。" },
        commonTraps: [
          { en: "Forgetting to convert $150°$ to radians ($\\frac{5\\pi}{6}$) before using the formula", zh: "忘记将 $150°$ 转为弧度（$\\frac{5\\pi}{6}$）再代入公式" },
        ],
      },
      {
        id: "pt-4-1-6",
        title: { en: "Find Sector Area", zh: "求扇形面积" },
        description: { en: "Use $A = \\frac{1}{2}r^2\\theta$ with $\\theta$ in radians.", zh: "用 $A = \\frac{1}{2}r^2\\theta$（$\\theta$ 为弧度）。" },
        howToRecognize: { en: "Given radius and central angle; asked for area of the sector.", zh: "已知半径和圆心角；要求扇形面积。" },
        steps: [
          { en: "Convert the angle to radians if needed", zh: "如有必要将角转为弧度" },
          { en: "Apply $A = \\frac{1}{2}r^2\\theta$", zh: "代入 $A = \\frac{1}{2}r^2\\theta$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the area of a sector with radius 10 in. and central angle $\\frac{2\\pi}{3}$.", zh: "求半径 10 in.、圆心角 $\\frac{2\\pi}{3}$ 的扇形面积。" },
        commonTraps: [
          { en: "Using $\\pi r^2 \\cdot \\frac{\\theta}{360}$ (degree-based) instead of $\\frac{1}{2}r^2\\theta$ (radian-based)", zh: "用角度公式 $\\pi r^2 \\cdot \\frac{\\theta}{360}$ 而非弧度公式 $\\frac{1}{2}r^2\\theta$" },
        ],
      },
      {
        id: "pt-4-1-7",
        title: { en: "Find Linear Speed from Angular Speed", zh: "由角速度求线速度" },
        description: { en: "Use $v = r\\omega$ to find the linear speed of a point on a rotating object.", zh: "用 $v = r\\omega$ 求旋转物体上某点的线速度。" },
        howToRecognize: { en: "Problem gives rpm or angular speed and asks for linear speed.", zh: "题目给出转速或角速度，要求线速度。" },
        steps: [
          { en: "Convert rpm to radians per unit time: $\\omega = \\text{rpm} \\times 2\\pi$", zh: "将转速转为弧度/时间：$\\omega = \\text{rpm} \\times 2\\pi$" },
          { en: "Apply $v = r\\omega$", zh: "代入 $v = r\\omega$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A tire with radius 14 inches rotates at 500 rpm. Find the linear speed in ft/min.", zh: "半径 14 英寸的轮胎以 500 rpm 旋转，求线速度（ft/min）。" },
        commonTraps: [
          { en: "Forgetting to convert rpm to radians: 1 revolution $= 2\\pi$ radians, not $1$", zh: "忘记将转数转为弧度：$1$ 转 $= 2\\pi$ 弧度，而非 $1$" },
        ],
      },
      {
        id: "pt-4-1-8",
        title: { en: "Find Central Angle from Arc Length", zh: "由弧长求圆心角" },
        description: { en: "Rearrange $s = r\\theta$ to $\\theta = \\frac{s}{r}$.", zh: "由 $s = r\\theta$ 变形为 $\\theta = \\frac{s}{r}$。" },
        howToRecognize: { en: "Given arc length and radius; asked for the angle.", zh: "已知弧长和半径；求圆心角。" },
        steps: [
          { en: "Solve $\\theta = \\frac{s}{r}$ (result in radians)", zh: "求 $\\theta = \\frac{s}{r}$（结果为弧度）" },
          { en: "Convert to degrees if the problem requires it", zh: "若题目要求则转为角度" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "An arc of length 15 cm is on a circle of radius 9 cm. Find the central angle in degrees.", zh: "圆上弧长 15 cm，半径 9 cm，求圆心角（角度制）。" },
        commonTraps: [
          { en: "Forgetting to convert the radian result to degrees when asked", zh: "题目要求角度时忘记将弧度结果转换" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-4-1-9",
        title: { en: "Angular and Linear Speed Application", zh: "角速度与线速度综合应用" },
        description: { en: "Solve real-world problems involving pulleys, gears, or wheels with different radii.", zh: "解决涉及不同半径的滑轮、齿轮或轮子的实际问题。" },
        howToRecognize: { en: "Two rotating objects connected by a belt or chain; different radii given.", zh: "两个旋转物体由皮带或链条连接；给出不同半径。" },
        steps: [
          { en: "Connected objects share the same linear speed: $v_1 = v_2$", zh: "连接的物体线速度相同：$v_1 = v_2$" },
          { en: "Use $r_1 \\omega_1 = r_2 \\omega_2$ to relate angular speeds", zh: "用 $r_1 \\omega_1 = r_2 \\omega_2$ 关联角速度" },
          { en: "Solve for the unknown speed or radius", zh: "解出未知速度或半径" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A belt connects a pulley of radius 3 in. spinning at 1800 rpm to one of radius 5 in. Find the rpm of the larger pulley.", zh: "皮带连接半径 3 in.（1800 rpm）和半径 5 in. 的滑轮，求大滑轮的转速。" },
        commonTraps: [
          { en: "Assuming both pulleys have the same angular speed (they share linear speed, not angular)", zh: "以为两轮角速度相同（它们共享的是线速度而非角速度）" },
        ],
      },
      {
        id: "pt-4-1-10",
        title: { en: "Multi-Step Arc/Sector Problem", zh: "弧长/扇形综合题" },
        description: { en: "Problems that combine arc length, sector area, and unit conversions in a real-world context.", zh: "在实际情境中综合运用弧长、扇形面积与单位换算。" },
        howToRecognize: { en: "Multiple quantities involved: find area given arc length, or compare sectors, etc.", zh: "涉及多个量：由弧长求面积，或比较扇形等。" },
        steps: [
          { en: "Extract all given information and convert units if needed", zh: "提取所有已知量，必要时换算单位" },
          { en: "Use $s = r\\theta$ and/or $A = \\frac{1}{2}r^2\\theta$", zh: "使用 $s = r\\theta$ 和/或 $A = \\frac{1}{2}r^2\\theta$" },
          { en: "Solve the resulting equation(s)", zh: "解出方程" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A sector has arc length 20 cm and area 100 cm². Find the radius and central angle.", zh: "一个扇形的弧长为 20 cm、面积为 100 cm²，求半径和圆心角。" },
        commonTraps: [
          { en: "Not realizing that $A = \\frac{1}{2}rs$ can be derived from the two formulas to avoid solving a system", zh: "没意识到可由两个公式推出 $A = \\frac{1}{2}rs$ 来避免解方程组" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Identify a unit circle and describe its relationship to real numbers", zh: "识别单位圆并描述其与实数的关系" },
      { en: "Evaluate the six trigonometric functions using the unit circle", zh: "利用单位圆求六个三角函数的值" },
      { en: "Know the exact values of trig functions at common angles ($0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$, etc.)", zh: "记住常见角（$0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$ 等）的三角函数精确值" },
      { en: "Use the period of sine and cosine to evaluate trig functions", zh: "利用正弦和余弦的周期性求三角函数值" },
    ],
    keyConcepts: [
      {
        id: "kc-4-2-1",
        title: { en: "The Unit Circle", zh: "单位圆" },
        explanation: {
          en: "The unit circle is the circle $x^2 + y^2 = 1$ centered at the origin. Each real number $t$ corresponds to an arc of length $|t|$ from $(1, 0)$, ending at a point $(x, y)$. We define $\\cos t = x$ and $\\sin t = y$. This extends the trig functions to ALL real numbers, not just acute angles.",
          zh: "单位圆是以原点为圆心、满足 $x^2 + y^2 = 1$ 的圆。每个实数 $t$ 对应从 $(1, 0)$ 出发、弧长为 $|t|$ 的弧，终点为 $(x, y)$。定义 $\\cos t = x$，$\\sin t = y$。这将三角函数推广到所有实数，而不仅限于锐角。",
        },
        whenToUse: { en: "Defining and evaluating trig functions for any angle", zh: "为任意角定义和求三角函数值" },
        commonMistake: { en: "Confusing $(\\cos t, \\sin t)$ order — $x$-coordinate is cosine, $y$-coordinate is sine", zh: "混淆 $(\\cos t, \\sin t)$ 顺序——$x$ 坐标为余弦，$y$ 坐标为正弦" },
        example: { en: "At $t = \\frac{\\pi}{2}$, the point is $(0, 1)$, so $\\cos\\frac{\\pi}{2} = 0$, $\\sin\\frac{\\pi}{2} = 1$", zh: "当 $t = \\frac{\\pi}{2}$ 时，点为 $(0, 1)$，所以 $\\cos\\frac{\\pi}{2} = 0$，$\\sin\\frac{\\pi}{2} = 1$" },
      },
      {
        id: "kc-4-2-2",
        title: { en: "Six Trigonometric Functions from the Unit Circle", zh: "由单位圆定义的六个三角函数" },
        explanation: {
          en: "If the terminal point of $t$ on the unit circle is $(x, y)$: $\\sin t = y$, $\\cos t = x$, $\\tan t = \\frac{y}{x}$ ($x \\neq 0$), $\\csc t = \\frac{1}{y}$ ($y \\neq 0$), $\\sec t = \\frac{1}{x}$ ($x \\neq 0$), $\\cot t = \\frac{x}{y}$ ($y \\neq 0$).",
          zh: "若 $t$ 在单位圆上的终点为 $(x, y)$：$\\sin t = y$，$\\cos t = x$，$\\tan t = \\frac{y}{x}$（$x \\neq 0$），$\\csc t = \\frac{1}{y}$（$y \\neq 0$），$\\sec t = \\frac{1}{x}$（$x \\neq 0$），$\\cot t = \\frac{x}{y}$（$y \\neq 0$）。",
        },
        whenToUse: { en: "Evaluating any trig function at a given angle", zh: "求给定角的任一三角函数值" },
        commonMistake: { en: "Forgetting domain restrictions: $\\tan$ and $\\sec$ are undefined when $x = 0$ (at $\\frac{\\pi}{2}$, $\\frac{3\\pi}{2}$, etc.)", zh: "忘记定义域限制：当 $x = 0$ 时 $\\tan$ 和 $\\sec$ 无定义（如 $\\frac{\\pi}{2}$、$\\frac{3\\pi}{2}$ 等）" },
        example: { en: "At $t = \\frac{\\pi}{4}$: $(x,y) = (\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$, so $\\tan\\frac{\\pi}{4} = 1$", zh: "当 $t = \\frac{\\pi}{4}$：$(x,y) = (\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2})$，所以 $\\tan\\frac{\\pi}{4} = 1$" },
      },
      {
        id: "kc-4-2-3",
        title: { en: "Periodicity and Even/Odd Properties", zh: "周期性与奇偶性" },
        explanation: {
          en: "Sine and cosine have period $2\\pi$: $\\sin(t + 2\\pi) = \\sin t$. Tangent and cotangent have period $\\pi$. Cosine and secant are EVEN: $\\cos(-t) = \\cos t$. Sine, tangent, cosecant, and cotangent are ODD: $\\sin(-t) = -\\sin t$.",
          zh: "正弦和余弦周期为 $2\\pi$：$\\sin(t + 2\\pi) = \\sin t$。正切和余切周期为 $\\pi$。余弦和正割为偶函数：$\\cos(-t) = \\cos t$。正弦、正切、余割和余切为奇函数：$\\sin(-t) = -\\sin t$。",
        },
        whenToUse: { en: "Simplifying trig expressions; evaluating trig functions at angles outside $[0, 2\\pi)$", zh: "化简三角表达式；对 $[0, 2\\pi)$ 之外的角求三角函数值" },
        commonMistake: { en: "Applying the wrong period: $\\tan$ repeats every $\\pi$, NOT every $2\\pi$", zh: "用错周期：$\\tan$ 每 $\\pi$ 重复，不是每 $2\\pi$" },
        example: { en: "$\\sin\\frac{13\\pi}{6} = \\sin(\\frac{13\\pi}{6} - 2\\pi) = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$", zh: "$\\sin\\frac{13\\pi}{6} = \\sin(\\frac{13\\pi}{6} - 2\\pi) = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$" },
      },
    ],
    formulas: [
      {
        id: "f-4-2-1",
        name: { en: "Unit-Circle Definitions of Trig Functions", zh: "三角函数的单位圆定义" },
        formula: "\\sin t = y, \\quad \\cos t = x, \\quad \\tan t = \\frac{y}{x}",
        variables: [
          { en: "$(x, y)$ — point on the unit circle corresponding to angle $t$", zh: "$(x, y)$ — 单位圆上与角 $t$ 对应的点" },
        ],
        whenToUse: { en: "Evaluating trig functions from the unit circle", zh: "由单位圆求三角函数值" },
        commonProblemTypes: [
          { en: "Find exact trig values at standard angles", zh: "求标准角的精确三角函数值" },
          { en: "Determine sign of a trig function in a given quadrant", zh: "判断三角函数在给定象限的符号" },
        ],
        example: { en: "At $t = \\frac{\\pi}{3}$: $(x,y) = (\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$, so $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$, $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$", zh: "当 $t = \\frac{\\pi}{3}$：$(x,y) = (\\frac{1}{2}, \\frac{\\sqrt{3}}{2})$，所以 $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$，$\\cos\\frac{\\pi}{3} = \\frac{1}{2}$" },
      },
      {
        id: "f-4-2-2",
        name: { en: "Reciprocal Identities", zh: "倒数恒等式" },
        formula: "\\csc t = \\frac{1}{\\sin t}, \\quad \\sec t = \\frac{1}{\\cos t}, \\quad \\cot t = \\frac{1}{\\tan t}",
        variables: [
          { en: "Each reciprocal is undefined when the denominator is zero", zh: "分母为零时各倒数函数无定义" },
        ],
        whenToUse: { en: "Converting between the six trig functions", zh: "在六个三角函数之间转换" },
        commonProblemTypes: [
          { en: "Find $\\csc$, $\\sec$, or $\\cot$ from known $\\sin$, $\\cos$, or $\\tan$", zh: "由已知的 $\\sin$、$\\cos$ 或 $\\tan$ 求 $\\csc$、$\\sec$ 或 $\\cot$" },
        ],
        example: { en: "$\\sin\\frac{\\pi}{6} = \\frac{1}{2}$, so $\\csc\\frac{\\pi}{6} = 2$", zh: "$\\sin\\frac{\\pi}{6} = \\frac{1}{2}$，所以 $\\csc\\frac{\\pi}{6} = 2$" },
      },
      {
        id: "f-4-2-3",
        name: { en: "Pythagorean Identity", zh: "勾股恒等式" },
        formula: "\\sin^2 t + \\cos^2 t = 1",
        variables: [
          { en: "Derived from $x^2 + y^2 = 1$ on the unit circle", zh: "由单位圆上 $x^2 + y^2 = 1$ 推出" },
        ],
        whenToUse: { en: "Finding one trig function when the other is known; simplifying expressions", zh: "已知一个三角函数求另一个；化简表达式" },
        commonProblemTypes: [
          { en: "Given $\\sin t$, find $\\cos t$ (or vice versa)", zh: "已知 $\\sin t$ 求 $\\cos t$（或反之）" },
          { en: "Verify or simplify trig expressions", zh: "验证或化简三角表达式" },
        ],
        example: { en: "If $\\sin t = \\frac{3}{5}$ and $t$ is in QI, then $\\cos t = \\frac{4}{5}$", zh: "若 $\\sin t = \\frac{3}{5}$ 且 $t$ 在第一象限，则 $\\cos t = \\frac{4}{5}$" },
      },
      {
        id: "f-4-2-4",
        name: { en: "Common Angle Values Table", zh: "常见角值表" },
        formula: "\\begin{array}{c|cccc} t & 0 & \\frac{\\pi}{6} & \\frac{\\pi}{4} & \\frac{\\pi}{3} & \\frac{\\pi}{2} \\\\ \\hline \\sin t & 0 & \\frac{1}{2} & \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{3}}{2} & 1 \\\\ \\cos t & 1 & \\frac{\\sqrt{3}}{2} & \\frac{\\sqrt{2}}{2} & \\frac{1}{2} & 0 \\end{array}",
        variables: [
          { en: "These five angles plus their reflections cover all standard unit-circle values", zh: "这五个角及其对称角涵盖了所有标准单位圆值" },
        ],
        whenToUse: { en: "Quick reference for exact trig values — memorize this table", zh: "精确三角函数值的快速参考——务必记住此表" },
        commonProblemTypes: [
          { en: "Evaluate trig functions at standard angles without a calculator", zh: "不用计算器求标准角的三角函数值" },
        ],
        example: { en: "$\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$, $\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$", zh: "$\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$，$\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-4-2-1",
        title: { en: "Evaluate Trig Functions at Standard Angles", zh: "求标准角的三角函数值" },
        description: { en: "Use the unit circle to find exact values of sin, cos, or tan at common angles.", zh: "利用单位圆求常见角的 sin、cos 或 tan 精确值。" },
        howToRecognize: { en: "Angle is a multiple of $30°$ or $45°$ ($\\frac{\\pi}{6}$ or $\\frac{\\pi}{4}$).", zh: "角为 $30°$ 或 $45°$ 的倍数（$\\frac{\\pi}{6}$ 或 $\\frac{\\pi}{4}$）。" },
        steps: [
          { en: "Locate the angle on the unit circle", zh: "在单位圆上找到该角" },
          { en: "Read off $(x, y) = (\\cos t, \\sin t)$", zh: "读取 $(x, y) = (\\cos t, \\sin t)$" },
          { en: "Compute $\\tan t = y/x$ if needed", zh: "若需要则计算 $\\tan t = y/x$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the exact values of $\\sin\\frac{\\pi}{3}$, $\\cos\\frac{\\pi}{3}$, and $\\tan\\frac{\\pi}{3}$.", zh: "求 $\\sin\\frac{\\pi}{3}$、$\\cos\\frac{\\pi}{3}$ 和 $\\tan\\frac{\\pi}{3}$ 的精确值。" },
        commonTraps: [
          { en: "Swapping sine and cosine values for $\\frac{\\pi}{3}$ and $\\frac{\\pi}{6}$", zh: "把 $\\frac{\\pi}{3}$ 和 $\\frac{\\pi}{6}$ 的正弦余弦值搞反" },
        ],
      },
      {
        id: "pt-4-2-2",
        title: { en: "Evaluate Reciprocal Trig Functions", zh: "求倒数三角函数值" },
        description: { en: "Find csc, sec, or cot by taking reciprocals of sin, cos, or tan.", zh: "对 sin、cos 或 tan 取倒数求 csc、sec 或 cot。" },
        howToRecognize: { en: "Problem asks for $\\csc$, $\\sec$, or $\\cot$ at a standard angle.", zh: "题目要求标准角处的 $\\csc$、$\\sec$ 或 $\\cot$ 值。" },
        steps: [
          { en: "Find $\\sin t$, $\\cos t$, or $\\tan t$ first", zh: "先求 $\\sin t$、$\\cos t$ 或 $\\tan t$" },
          { en: "Take the reciprocal", zh: "取倒数" },
          { en: "Rationalize the denominator if needed", zh: "如有必要将分母有理化" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find $\\sec\\frac{\\pi}{3}$ and $\\csc\\frac{\\pi}{4}$.", zh: "求 $\\sec\\frac{\\pi}{3}$ 和 $\\csc\\frac{\\pi}{4}$。" },
        commonTraps: [
          { en: "$\\sec$ is $1/\\cos$, NOT $1/\\sin$ — don't mix up the pairings", zh: "$\\sec$ 是 $1/\\cos$，不是 $1/\\sin$——别搞混配对" },
        ],
      },
      {
        id: "pt-4-2-3",
        title: { en: "Determine Sign of Trig Function by Quadrant", zh: "根据象限判断三角函数符号" },
        description: { en: "Use the ASTC rule (All-Sine-Tangent-Cosine) to determine the sign.", zh: "用 ASTC 规则（全-正弦-正切-余弦）判断符号。" },
        howToRecognize: { en: "Given a quadrant; asked whether a trig value is positive or negative.", zh: "给出象限；问三角函数值为正还是为负。" },
        steps: [
          { en: "Identify the quadrant of the angle", zh: "确定角所在的象限" },
          { en: "Apply ASTC: QI all +, QII sin +, QIII tan +, QIV cos +", zh: "用 ASTC：第一象限全正、第二象限 sin 正、第三象限 tan 正、第四象限 cos 正" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Is $\\cos\\frac{5\\pi}{6}$ positive or negative?", zh: "$\\cos\\frac{5\\pi}{6}$ 是正还是负？" },
        commonTraps: [
          { en: "Forgetting that reciprocal functions share the sign of their partner ($\\csc$ has same sign as $\\sin$)", zh: "忘记倒数函数与其配对函数同号（$\\csc$ 与 $\\sin$ 同号）" },
        ],
      },
      {
        id: "pt-4-2-4",
        title: { en: "Identify Unit-Circle Coordinates", zh: "识别单位圆坐标" },
        description: { en: "State the $(x, y)$ coordinates on the unit circle for a given angle.", zh: "给出给定角在单位圆上的 $(x, y)$ 坐标。" },
        howToRecognize: { en: "Problem asks for the point on the unit circle at a given angle.", zh: "题目要求给定角在单位圆上的点。" },
        steps: [
          { en: "Find the reference angle", zh: "求参考角" },
          { en: "Look up $(\\cos, \\sin)$ of the reference angle", zh: "查参考角的 $(\\cos, \\sin)$ 值" },
          { en: "Adjust signs based on the quadrant", zh: "根据象限调整符号" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the coordinates of the point on the unit circle at $\\frac{5\\pi}{4}$.", zh: "求单位圆上 $\\frac{5\\pi}{4}$ 处的坐标。" },
        commonTraps: [
          { en: "Getting the wrong quadrant and applying incorrect signs", zh: "象限判断错误导致符号错误" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-4-2-5",
        title: { en: "Evaluate Trig at Angles Beyond $[0, 2\\pi)$", zh: "求 $[0, 2\\pi)$ 之外角的三角函数值" },
        description: { en: "Use periodicity to reduce the angle to $[0, 2\\pi)$ before evaluating.", zh: "利用周期性将角化到 $[0, 2\\pi)$ 再求值。" },
        howToRecognize: { en: "Angle is negative or greater than $2\\pi$.", zh: "角为负值或大于 $2\\pi$。" },
        steps: [
          { en: "Add or subtract $2\\pi$ (or $360°$) until the angle is in $[0, 2\\pi)$", zh: "加减 $2\\pi$（或 $360°$）直到角在 $[0, 2\\pi)$ 内" },
          { en: "Evaluate the trig function at the resulting angle", zh: "对化简后的角求三角函数值" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find $\\cos\\frac{17\\pi}{4}$.", zh: "求 $\\cos\\frac{17\\pi}{4}$。" },
        commonTraps: [
          { en: "Arithmetic errors when subtracting multiples of $2\\pi$", zh: "减去 $2\\pi$ 的倍数时算术出错" },
        ],
      },
      {
        id: "pt-4-2-6",
        title: { en: "Evaluate Trig at Negative Angles Using Even/Odd Properties", zh: "利用奇偶性求负角的三角函数值" },
        description: { en: "Apply $\\cos(-t) = \\cos t$ (even) and $\\sin(-t) = -\\sin t$ (odd).", zh: "应用 $\\cos(-t) = \\cos t$（偶）和 $\\sin(-t) = -\\sin t$（奇）。" },
        howToRecognize: { en: "The argument is explicitly negative, e.g., $\\sin(-\\frac{\\pi}{3})$.", zh: "自变量明确为负，如 $\\sin(-\\frac{\\pi}{3})$。" },
        steps: [
          { en: "Identify whether the function is even or odd", zh: "判断函数为偶还是奇" },
          { en: "Apply the property: $\\sin(-t) = -\\sin t$, $\\cos(-t) = \\cos t$, $\\tan(-t) = -\\tan t$", zh: "应用性质：$\\sin(-t) = -\\sin t$，$\\cos(-t) = \\cos t$，$\\tan(-t) = -\\tan t$" },
          { en: "Evaluate the positive-angle version", zh: "对正角求值" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Evaluate $\\sin(-\\frac{5\\pi}{6})$ and $\\cos(-\\frac{5\\pi}{6})$.", zh: "求 $\\sin(-\\frac{5\\pi}{6})$ 和 $\\cos(-\\frac{5\\pi}{6})$。" },
        commonTraps: [
          { en: "Treating sine as even ($\\sin(-t) \\neq \\sin t$)", zh: "把正弦当作偶函数（$\\sin(-t) \\neq \\sin t$）" },
        ],
      },
      {
        id: "pt-4-2-7",
        title: { en: "Find All Six Trig Values from One Known Value", zh: "由一个已知值求全部六个三角函数值" },
        description: { en: "Given one trig value and the quadrant, find all six trig functions.", zh: "已知一个三角函数值和象限，求全部六个值。" },
        howToRecognize: { en: "Given $\\sin t = a$ (or $\\cos t$, etc.) and the quadrant.", zh: "给出 $\\sin t = a$（或 $\\cos t$ 等）以及象限。" },
        steps: [
          { en: "Use $\\sin^2 t + \\cos^2 t = 1$ to find the missing sine or cosine", zh: "用 $\\sin^2 t + \\cos^2 t = 1$ 求缺失的正弦或余弦" },
          { en: "Choose the correct sign based on the quadrant", zh: "根据象限选择正确的符号" },
          { en: "Compute $\\tan t = \\sin t / \\cos t$ and the three reciprocals", zh: "计算 $\\tan t = \\sin t / \\cos t$ 及三个倒数函数" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "If $\\cos t = -\\frac{3}{5}$ and $t$ is in Quadrant III, find all six trig values.", zh: "若 $\\cos t = -\\frac{3}{5}$ 且 $t$ 在第三象限，求全部六个三角函数值。" },
        commonTraps: [
          { en: "Choosing the wrong sign for the square root (must match the quadrant)", zh: "平方根符号选错（必须与象限一致）" },
        ],
      },
      {
        id: "pt-4-2-8",
        title: { en: "Evaluate Trig at Quadrantal Angles", zh: "求象限角的三角函数值" },
        description: { en: "Find trig values at $0$, $\\frac{\\pi}{2}$, $\\pi$, $\\frac{3\\pi}{2}$, $2\\pi$.", zh: "求 $0$、$\\frac{\\pi}{2}$、$\\pi$、$\\frac{3\\pi}{2}$、$2\\pi$ 处的三角函数值。" },
        howToRecognize: { en: "The angle lies on an axis (terminal side on $x$- or $y$-axis).", zh: "角的终边落在坐标轴上。" },
        steps: [
          { en: "Identify the unit-circle point: $(1,0)$, $(0,1)$, $(-1,0)$, or $(0,-1)$", zh: "确定单位圆上的点：$(1,0)$、$(0,1)$、$(-1,0)$ 或 $(0,-1)$" },
          { en: "Read $\\cos$ and $\\sin$ directly", zh: "直接读出 $\\cos$ 和 $\\sin$" },
          { en: "Note which functions are undefined (division by zero)", zh: "注意哪些函数无定义（除以零）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find all six trig values at $\\theta = \\pi$.", zh: "求 $\\theta = \\pi$ 处的全部六个三角函数值。" },
        commonTraps: [
          { en: "Saying $\\tan\\frac{\\pi}{2} = 0$ instead of undefined ($x = 0$ at that point)", zh: "把 $\\tan\\frac{\\pi}{2}$ 说成 $0$ 而非无定义（该点 $x = 0$）" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-4-2-9",
        title: { en: "Use Unit Circle to Solve Simple Trig Equations", zh: "利用单位圆解简单三角方程" },
        description: { en: "Find all $t$ in $[0, 2\\pi)$ such that a trig function equals a given value.", zh: "求 $[0, 2\\pi)$ 内使三角函数等于给定值的所有 $t$。" },
        howToRecognize: { en: "Equation like $\\sin t = \\frac{1}{2}$ or $\\cos t = -\\frac{\\sqrt{3}}{2}$.", zh: "方程如 $\\sin t = \\frac{1}{2}$ 或 $\\cos t = -\\frac{\\sqrt{3}}{2}$。" },
        steps: [
          { en: "Identify the reference angle where the trig value matches", zh: "找到三角函数值匹配的参考角" },
          { en: "Determine which quadrants give the correct sign", zh: "确定哪些象限给出正确的符号" },
          { en: "List all solutions in $[0, 2\\pi)$", zh: "列出 $[0, 2\\pi)$ 内的所有解" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find all values of $t$ in $[0, 2\\pi)$ such that $\\cos t = -\\frac{1}{2}$.", zh: "求 $[0, 2\\pi)$ 内满足 $\\cos t = -\\frac{1}{2}$ 的所有 $t$。" },
        commonTraps: [
          { en: "Finding only one solution when there are two (e.g., $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$)", zh: "有两个解却只找到一个（如 $\\frac{2\\pi}{3}$ 和 $\\frac{4\\pi}{3}$）" },
        ],
      },
      {
        id: "pt-4-2-10",
        title: { en: "Verify Identities Using Unit-Circle Values", zh: "用单位圆值验证恒等式" },
        description: { en: "Plug specific unit-circle values to verify or disprove a proposed trig identity.", zh: "代入单位圆上的值来验证或否定一个三角恒等式。" },
        howToRecognize: { en: "Problem asks you to verify $\\sin^2 t + \\cos^2 t = 1$ or similar at specific angles.", zh: "题目要求在特定角处验证 $\\sin^2 t + \\cos^2 t = 1$ 或类似恒等式。" },
        steps: [
          { en: "Choose one or more standard angles", zh: "选择一个或多个标准角" },
          { en: "Compute both sides of the identity using exact values", zh: "用精确值计算等式两边" },
          { en: "Confirm equality (or find a counterexample to disprove)", zh: "确认相等（或找反例否定）" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Verify that $1 + \\tan^2 t = \\sec^2 t$ for $t = \\frac{\\pi}{4}$ and $t = \\frac{\\pi}{3}$.", zh: "验证 $1 + \\tan^2 t = \\sec^2 t$ 在 $t = \\frac{\\pi}{4}$ 和 $t = \\frac{\\pi}{3}$ 处成立。" },
        commonTraps: [
          { en: "Verifying at only one point and concluding the identity is always true — a single check is not a proof", zh: "只在一个点验证就认为恒等式恒成立——单点验证不是证明" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Evaluate trigonometric functions of acute angles using right triangles (SOH-CAH-TOA)", zh: "用直角三角形求锐角的三角函数值（SOH-CAH-TOA）" },
      { en: "Use fundamental trigonometric identities", zh: "使用基本三角恒等式" },
      { en: "Use a calculator to evaluate trigonometric functions", zh: "用计算器求三角函数值" },
      { en: "Solve right triangles and real-world application problems", zh: "求解直角三角形及实际应用问题" },
    ],
    keyConcepts: [
      {
        id: "kc-4-3-1",
        title: { en: "Right Triangle Definitions (SOH-CAH-TOA)", zh: "直角三角形定义（SOH-CAH-TOA）" },
        explanation: {
          en: "For an acute angle $\\theta$ in a right triangle: $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$, $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}$, $\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}$. The reciprocals are $\\csc\\theta = \\frac{\\text{hyp}}{\\text{opp}}$, $\\sec\\theta = \\frac{\\text{hyp}}{\\text{adj}}$, $\\cot\\theta = \\frac{\\text{adj}}{\\text{opp}}$.",
          zh: "对直角三角形中的锐角 $\\theta$：$\\sin\\theta = \\frac{\\text{对边}}{\\text{斜边}}$，$\\cos\\theta = \\frac{\\text{邻边}}{\\text{斜边}}$，$\\tan\\theta = \\frac{\\text{对边}}{\\text{邻边}}$。倒数函数为 $\\csc\\theta = \\frac{\\text{斜边}}{\\text{对边}}$，$\\sec\\theta = \\frac{\\text{斜边}}{\\text{邻边}}$，$\\cot\\theta = \\frac{\\text{邻边}}{\\text{对边}}$。",
        },
        whenToUse: { en: "When working with acute angles inside a right triangle", zh: "处理直角三角形中的锐角时" },
        commonMistake: { en: "Mixing up opposite and adjacent sides — they depend on WHICH angle you're looking at", zh: "搞混对边和邻边——它们取决于你考察的是哪个角" },
        example: { en: "In a 3-4-5 right triangle with $\\theta$ opposite the side of length 3: $\\sin\\theta = \\frac{3}{5}$, $\\cos\\theta = \\frac{4}{5}$, $\\tan\\theta = \\frac{3}{4}$", zh: "在 3-4-5 直角三角形中，$\\theta$ 对边长为 3：$\\sin\\theta = \\frac{3}{5}$，$\\cos\\theta = \\frac{4}{5}$，$\\tan\\theta = \\frac{3}{4}$" },
      },
      {
        id: "kc-4-3-2",
        title: { en: "Special Right Triangles (30-60-90 and 45-45-90)", zh: "特殊直角三角形（30-60-90 和 45-45-90）" },
        explanation: {
          en: "45-45-90 triangle: sides in ratio $1 : 1 : \\sqrt{2}$. So $\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2}$, $\\tan 45° = 1$. 30-60-90 triangle: sides in ratio $1 : \\sqrt{3} : 2$. So $\\sin 30° = \\frac{1}{2}$, $\\cos 30° = \\frac{\\sqrt{3}}{2}$, $\\tan 30° = \\frac{\\sqrt{3}}{3}$.",
          zh: "45-45-90 三角形：边比 $1 : 1 : \\sqrt{2}$。$\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2}$，$\\tan 45° = 1$。30-60-90 三角形：边比 $1 : \\sqrt{3} : 2$。$\\sin 30° = \\frac{1}{2}$，$\\cos 30° = \\frac{\\sqrt{3}}{2}$，$\\tan 30° = \\frac{\\sqrt{3}}{3}$。",
        },
        whenToUse: { en: "Evaluating exact trig values without a calculator", zh: "不用计算器求精确三角函数值" },
        commonMistake: { en: "Swapping $\\sin 30°$ and $\\sin 60°$ — remember: 30° is the smaller angle, so its sine is the smaller value ($\\frac{1}{2}$)", zh: "混淆 $\\sin 30°$ 和 $\\sin 60°$——记住：30° 是较小角，正弦值也较小（$\\frac{1}{2}$）" },
        example: { en: "$\\sin 60° = \\frac{\\sqrt{3}}{2}$, $\\cos 60° = \\frac{1}{2}$, $\\tan 60° = \\sqrt{3}$", zh: "$\\sin 60° = \\frac{\\sqrt{3}}{2}$，$\\cos 60° = \\frac{1}{2}$，$\\tan 60° = \\sqrt{3}$" },
      },
      {
        id: "kc-4-3-3",
        title: { en: "Cofunctions and Complementary Angles", zh: "余函数与互余角" },
        explanation: {
          en: "In a right triangle, the two acute angles are complementary ($\\alpha + \\beta = 90°$). This gives the cofunction identities: $\\sin\\theta = \\cos(90° - \\theta)$, $\\tan\\theta = \\cot(90° - \\theta)$, $\\sec\\theta = \\csc(90° - \\theta)$. The prefix \"co-\" literally means \"complement.\"",
          zh: "直角三角形中两个锐角互余（$\\alpha + \\beta = 90°$）。由此得余函数恒等式：$\\sin\\theta = \\cos(90° - \\theta)$，$\\tan\\theta = \\cot(90° - \\theta)$，$\\sec\\theta = \\csc(90° - \\theta)$。前缀『余』即『互余』之意。",
        },
        whenToUse: { en: "Rewriting a trig function in terms of its cofunction", zh: "将三角函数改写为其余函数" },
        commonMistake: { en: "Applying cofunction identities to non-complementary angles", zh: "对非互余角使用余函数恒等式" },
        example: { en: "$\\sin 25° = \\cos 65°$ because $25° + 65° = 90°$", zh: "$\\sin 25° = \\cos 65°$，因为 $25° + 65° = 90°$" },
      },
    ],
    formulas: [
      {
        id: "f-4-3-1",
        name: { en: "SOH-CAH-TOA", zh: "SOH-CAH-TOA" },
        formula: "\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}, \\quad \\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}, \\quad \\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}",
        variables: [
          { en: "opp = side opposite to $\\theta$", zh: "opp = $\\theta$ 的对边" },
          { en: "adj = side adjacent to $\\theta$ (not the hypotenuse)", zh: "adj = $\\theta$ 的邻边（非斜边）" },
          { en: "hyp = hypotenuse", zh: "hyp = 斜边" },
        ],
        whenToUse: { en: "Right triangle problems involving an acute angle", zh: "涉及锐角的直角三角形问题" },
        commonProblemTypes: [
          { en: "Find a missing side given one side and one acute angle", zh: "已知一边和一锐角求缺失边" },
          { en: "Find an acute angle given two sides", zh: "已知两边求锐角" },
        ],
        example: { en: "If opp $= 5$, hyp $= 13$: $\\sin\\theta = \\frac{5}{13}$", zh: "若对边 $= 5$，斜边 $= 13$：$\\sin\\theta = \\frac{5}{13}$" },
      },
      {
        id: "f-4-3-2",
        name: { en: "Cofunction Identities", zh: "余函数恒等式" },
        formula: "\\sin\\theta = \\cos(90° - \\theta), \\quad \\tan\\theta = \\cot(90° - \\theta), \\quad \\sec\\theta = \\csc(90° - \\theta)",
        variables: [
          { en: "$\\theta$ — an acute angle ($0° < \\theta < 90°$)", zh: "$\\theta$ — 锐角（$0° < \\theta < 90°$）" },
        ],
        whenToUse: { en: "Relating a trig function to the complementary angle's cofunction", zh: "将三角函数与互余角的余函数关联" },
        commonProblemTypes: [
          { en: "Rewrite $\\sin 40°$ in terms of cosine", zh: "将 $\\sin 40°$ 用余弦表示" },
          { en: "Solve equations like $\\sin\\theta = \\cos(\\theta + 10°)$", zh: "解方程如 $\\sin\\theta = \\cos(\\theta + 10°)$" },
        ],
        example: { en: "$\\tan 70° = \\cot 20°$", zh: "$\\tan 70° = \\cot 20°$" },
      },
      {
        id: "f-4-3-3",
        name: { en: "Angle of Elevation / Depression", zh: "仰角/俯角" },
        formula: "\\tan\\theta = \\frac{\\text{opposite (vertical)}}{\\text{adjacent (horizontal)}}",
        variables: [
          { en: "$\\theta$ — angle of elevation (looking up) or depression (looking down) from horizontal", zh: "$\\theta$ — 仰角（向上看）或俯角（向下看）相对于水平线" },
        ],
        whenToUse: { en: "Word problems involving height, distance, and an observer's line of sight", zh: "涉及高度、距离和观察者视线的应用题" },
        commonProblemTypes: [
          { en: "Find the height of a building given angle of elevation and distance", zh: "已知仰角和距离求建筑物高度" },
          { en: "Find the distance from the base given height and angle", zh: "已知高度和角度求距底部的距离" },
        ],
        example: { en: "Standing 50 m from a tower, angle of elevation is $60°$: height $= 50\\tan 60° = 50\\sqrt{3} \\approx 86.6$ m", zh: "距塔 50 m，仰角 $60°$：高度 $= 50\\tan 60° = 50\\sqrt{3} \\approx 86.6$ m" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-4-3-1",
        title: { en: "Find Trig Ratios from a Right Triangle", zh: "由直角三角形求三角比" },
        description: { en: "Given side lengths, compute all six trig ratios for a specified acute angle.", zh: "已知边长，对指定锐角计算全部六个三角比。" },
        howToRecognize: { en: "Right triangle with labeled sides; asked for trig values.", zh: "标注了边长的直角三角形；要求三角函数值。" },
        steps: [
          { en: "Identify opp, adj, hyp relative to the given angle", zh: "确定对边、邻边、斜边（相对于给定角）" },
          { en: "Use the Pythagorean Theorem to find any missing side", zh: "用勾股定理求缺失边" },
          { en: "Apply SOH-CAH-TOA and reciprocals", zh: "应用 SOH-CAH-TOA 及倒数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "In a right triangle, the side opposite $\\theta$ is 8 and the hypotenuse is 17. Find all six trig values.", zh: "直角三角形中，$\\theta$ 的对边为 8，斜边为 17，求全部六个三角函数值。" },
        commonTraps: [
          { en: "Forgetting to find the adjacent side first ($\\sqrt{17^2 - 8^2} = 15$)", zh: "忘记先求邻边（$\\sqrt{17^2 - 8^2} = 15$）" },
        ],
      },
      {
        id: "pt-4-3-2",
        title: { en: "Evaluate Trig Functions of Special Angles", zh: "求特殊角的三角函数值" },
        description: { en: "Use 30-60-90 and 45-45-90 triangles to find exact values.", zh: "用 30-60-90 和 45-45-90 三角形求精确值。" },
        howToRecognize: { en: "Angle is $30°$, $45°$, or $60°$ (or radian equivalents).", zh: "角为 $30°$、$45°$ 或 $60°$（或弧度等价）。" },
        steps: [
          { en: "Draw the appropriate special triangle", zh: "画出对应的特殊三角形" },
          { en: "Label the sides using the known ratio", zh: "用已知比标注边长" },
          { en: "Read off the trig value", zh: "读出三角函数值" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find $\\sec 30°$ and $\\cot 45°$ using special triangles.", zh: "用特殊三角形求 $\\sec 30°$ 和 $\\cot 45°$。" },
        commonTraps: [
          { en: "Not rationalizing: $\\sec 30° = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$", zh: "未有理化：$\\sec 30° = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$" },
        ],
      },
      {
        id: "pt-4-3-3",
        title: { en: "Use Cofunctions of Complementary Angles", zh: "利用互余角的余函数" },
        description: { en: "Rewrite a trig function using a cofunction identity.", zh: "用余函数恒等式改写三角函数。" },
        howToRecognize: { en: "Problem asks to express one trig function as a cofunction, or involves $\\sin\\theta = \\cos(...)$.", zh: "题目要求将一个三角函数用余函数表示，或涉及 $\\sin\\theta = \\cos(...)$。" },
        steps: [
          { en: "Identify the complement: $90° - \\theta$", zh: "求互余角：$90° - \\theta$" },
          { en: "Apply the identity: $\\sin\\theta = \\cos(90° - \\theta)$, etc.", zh: "应用恒等式：$\\sin\\theta = \\cos(90° - \\theta)$ 等" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Express $\\sin 72°$ as a function of an angle less than $45°$.", zh: "将 $\\sin 72°$ 表示为一个小于 $45°$ 的角的函数。" },
        commonTraps: [
          { en: "Writing $\\sin 72° = \\sin 18°$ instead of $\\cos 18°$", zh: "写成 $\\sin 72° = \\sin 18°$ 而非 $\\cos 18°$" },
        ],
      },
      {
        id: "pt-4-3-4",
        title: { en: "Use Calculator for Trig Values", zh: "用计算器求三角函数值" },
        description: { en: "Evaluate trig functions at non-special angles using a calculator.", zh: "用计算器求非特殊角的三角函数值。" },
        howToRecognize: { en: "Angle is not a standard angle (e.g., $23.5°$); calculator needed.", zh: "角不是标准角（如 $23.5°$）；需要计算器。" },
        steps: [
          { en: "Set calculator to the correct mode (degree or radian)", zh: "将计算器设为正确模式（角度或弧度）" },
          { en: "Enter the function and angle", zh: "输入函数和角度" },
          { en: "Round to the required number of decimal places", zh: "按要求四舍五入" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Use a calculator to find $\\tan 67.3°$ to four decimal places.", zh: "用计算器求 $\\tan 67.3°$（保留四位小数）。" },
        commonTraps: [
          { en: "Calculator in radian mode when the angle is in degrees (or vice versa)", zh: "角为角度时计算器却在弧度模式（或反之）" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-4-3-5",
        title: { en: "Find a Missing Side of a Right Triangle", zh: "求直角三角形的缺失边" },
        description: { en: "Given one side and one acute angle, find another side using trig.", zh: "已知一边和一锐角，用三角函数求另一边。" },
        howToRecognize: { en: "Right triangle with one known side and one known acute angle; asked for another side.", zh: "直角三角形已知一边一角；求另一边。" },
        steps: [
          { en: "Label opp, adj, hyp relative to the known angle", zh: "对已知角标注对边、邻边、斜边" },
          { en: "Choose the trig function that involves the known and unknown sides", zh: "选择包含已知边和未知边的三角函数" },
          { en: "Set up and solve the equation", zh: "列方程求解" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "In a right triangle, one acute angle is $35°$ and the hypotenuse is 20. Find both legs.", zh: "直角三角形中，一个锐角为 $35°$，斜边为 20，求两条直角边。" },
        commonTraps: [
          { en: "Using the wrong trig function (e.g., sine when you need cosine for the adjacent side)", zh: "用错三角函数（如需要邻边时用了正弦而非余弦）" },
        ],
      },
      {
        id: "pt-4-3-6",
        title: { en: "Find an Acute Angle Given Two Sides", zh: "已知两边求锐角" },
        description: { en: "Use an inverse trig function to find an angle from a ratio.", zh: "用反三角函数由比值求角。" },
        howToRecognize: { en: "Two sides of a right triangle given; asked for an angle.", zh: "给出直角三角形两边；要求求角。" },
        steps: [
          { en: "Form the appropriate trig ratio (opp/hyp, adj/hyp, or opp/adj)", zh: "构造合适的三角比（对/斜、邻/斜 或 对/邻）" },
          { en: "Apply the inverse function: $\\theta = \\sin^{-1}(\\text{ratio})$, etc.", zh: "用反函数：$\\theta = \\sin^{-1}(\\text{比值})$ 等" },
          { en: "Use a calculator to get the decimal approximation", zh: "用计算器得到近似值" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "The legs of a right triangle are 7 and 24. Find the acute angles.", zh: "直角三角形两直角边为 7 和 24，求两个锐角。" },
        commonTraps: [
          { en: "Confusing $\\sin^{-1}$ (inverse) with $\\frac{1}{\\sin}$ (reciprocal)", zh: "混淆 $\\sin^{-1}$（反函数）和 $\\frac{1}{\\sin}$（倒数）" },
        ],
      },
      {
        id: "pt-4-3-7",
        title: { en: "Solve a Complete Right Triangle", zh: "完整求解直角三角形" },
        description: { en: "Find all unknown sides and angles of a right triangle.", zh: "求直角三角形的所有未知边和角。" },
        howToRecognize: { en: "Right triangle with enough info (one side + one angle, or two sides); asked for ALL unknowns.", zh: "直角三角形给出足够信息；要求求所有未知量。" },
        steps: [
          { en: "Find the third angle: $C = 90° - A$ (or $B$)", zh: "求第三个角：$C = 90° - A$" },
          { en: "Use trig ratios to find missing sides", zh: "用三角比求缺失边" },
          { en: "Verify using the Pythagorean Theorem", zh: "用勾股定理验证" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "In right triangle $ABC$ with $C = 90°$, $A = 41°$, and $c = 25$. Find $a$, $b$, and $B$.", zh: "直角三角形 $ABC$，$C = 90°$，$A = 41°$，$c = 25$，求 $a$、$b$ 和 $B$。" },
        commonTraps: [
          { en: "Not checking the answer: $a^2 + b^2$ should equal $c^2$", zh: "不检验：$a^2 + b^2$ 应等于 $c^2$" },
        ],
      },
      {
        id: "pt-4-3-8",
        title: { en: "Angle of Elevation / Depression Problem", zh: "仰角/俯角问题" },
        description: { en: "Use trig to find a height or distance in an elevation/depression scenario.", zh: "在仰角/俯角情境中用三角函数求高度或距离。" },
        howToRecognize: { en: "Word problem mentions looking up or down from horizontal.", zh: "应用题提到从水平方向向上或向下看。" },
        steps: [
          { en: "Draw a diagram with the horizontal, line of sight, and right triangle", zh: "画出水平线、视线和直角三角形" },
          { en: "Label the known angle, known side, and unknown side", zh: "标注已知角、已知边和未知边" },
          { en: "Set up the trig equation and solve", zh: "列三角方程求解" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "From a point 200 ft from the base of a building, the angle of elevation to the top is $62°$. Find the height.", zh: "从距建筑物底部 200 ft 处，仰望楼顶仰角为 $62°$，求楼高。" },
        commonTraps: [
          { en: "Confusing elevation and depression — elevation looks UP, depression looks DOWN", zh: "混淆仰角和俯角——仰角向上看，俯角向下看" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-4-3-9",
        title: { en: "Two-Triangle Application Problem", zh: "双三角形应用题" },
        description: { en: "Solve a problem that requires setting up two right triangles sharing a common side.", zh: "解决需要建立共边的两个直角三角形的问题。" },
        howToRecognize: { en: "Two angles of elevation/depression from different points, or observer at the top and bottom.", zh: "从不同点的两个仰角/俯角，或观察者在顶部和底部。" },
        steps: [
          { en: "Draw a diagram and label both triangles", zh: "画图并标注两个三角形" },
          { en: "Set up trig equations for each triangle, using the shared side", zh: "对每个三角形列三角方程，利用公共边" },
          { en: "Solve the system of equations", zh: "解方程组" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "From point A on the ground, the angle of elevation to the top of a tower is $60°$. From point B, 100 ft farther away, it is $30°$. Find the height of the tower.", zh: "从地面 A 点仰望塔顶，仰角为 $60°$；从距 A 点远 100 ft 的 B 点看，仰角为 $30°$。求塔高。" },
        commonTraps: [
          { en: "Not realizing the total distance from B to the base is $d + 100$, not $100$", zh: "没意识到 B 到塔底总距离是 $d + 100$ 而非 $100$" },
        ],
      },
      {
        id: "pt-4-3-10",
        title: { en: "Bearing and Navigation Problem", zh: "方位角与导航问题" },
        description: { en: "Use right triangle trig to solve bearing/navigation problems.", zh: "用直角三角形三角学解决方位角/导航问题。" },
        howToRecognize: { en: "Problem mentions compass bearings (e.g., N 30° E) or navigation directions.", zh: "题目提到罗盘方位角（如 N 30° E）或导航方向。" },
        steps: [
          { en: "Draw a diagram with north-south line and the bearing angle", zh: "画图标出南北线和方位角" },
          { en: "Identify the right triangle and label sides", zh: "找出直角三角形并标注边" },
          { en: "Use trig to find distances or angles", zh: "用三角函数求距离或角度" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A ship sails on bearing N 40° E for 120 miles. How far north and how far east has it traveled?", zh: "一艘船沿 N 40° E 方位行驶 120 英里。它向北和向东各行驶了多远？" },
        commonTraps: [
          { en: "Measuring the bearing from the wrong axis (bearings are measured from north or south, not east)", zh: "从错误的轴量方位角（方位角从北或南量起，而非从东）" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Evaluate trig functions of any angle using the definitions with $(x, y, r)$", zh: "用 $(x, y, r)$ 定义求任意角的三角函数值" },
      { en: "Determine the signs of trig functions in each quadrant (ASTC)", zh: "判断三角函数在各象限的符号（ASTC）" },
      { en: "Find and use reference angles to evaluate trig functions", zh: "求参考角并用其求三角函数值" },
      { en: "Evaluate trig functions using the reference angle method", zh: "用参考角法求三角函数值" },
    ],
    keyConcepts: [
      {
        id: "kc-4-4-1",
        title: { en: "General Definition: $(x, y, r)$", zh: "一般定义：$(x, y, r)$" },
        explanation: {
          en: "For any angle $\\theta$ in standard position, let $(x, y)$ be a point on the terminal side and $r = \\sqrt{x^2 + y^2}$. Then $\\sin\\theta = \\frac{y}{r}$, $\\cos\\theta = \\frac{x}{r}$, $\\tan\\theta = \\frac{y}{x}$, etc. This extends trig to ANY angle (not just acute or unit-circle).",
          zh: "设 $\\theta$ 为标准位置角，$(x, y)$ 为终边上一点，$r = \\sqrt{x^2 + y^2}$。则 $\\sin\\theta = \\frac{y}{r}$，$\\cos\\theta = \\frac{x}{r}$，$\\tan\\theta = \\frac{y}{x}$。这将三角函数推广到任意角。",
        },
        whenToUse: { en: "When given a specific point on the terminal side of an angle", zh: "当给出角的终边上的某个点时" },
        commonMistake: { en: "Using $r$ as negative — $r$ is always positive since it's a distance", zh: "让 $r$ 为负——$r$ 始终为正，因为它是距离" },
        example: { en: "Point $(-3, 4)$ on terminal side: $r = 5$, $\\sin\\theta = \\frac{4}{5}$, $\\cos\\theta = \\frac{-3}{5}$, $\\tan\\theta = \\frac{4}{-3}$", zh: "终边上的点 $(-3, 4)$：$r = 5$，$\\sin\\theta = \\frac{4}{5}$，$\\cos\\theta = \\frac{-3}{5}$，$\\tan\\theta = \\frac{4}{-3}$" },
      },
      {
        id: "kc-4-4-2",
        title: { en: "Signs by Quadrant (ASTC)", zh: "各象限的符号（ASTC）" },
        explanation: {
          en: "ASTC = \"All Students Take Calculus.\" QI: ALL positive. QII: only Sin (and csc) positive. QIII: only Tan (and cot) positive. QIV: only Cos (and sec) positive. This follows from the signs of $x$ and $y$ in each quadrant.",
          zh: "ASTC 记忆法：第 I 象限全正；第 II 象限仅 Sin（和 csc）正；第 III 象限仅 Tan（和 cot）正；第 IV 象限仅 Cos（和 sec）正。这由各象限中 $x$、$y$ 的符号决定。",
        },
        whenToUse: { en: "Determining the sign of a trig value when you know the quadrant", zh: "知道象限后确定三角函数值的符号" },
        commonMistake: { en: "Forgetting that reciprocal pairs share signs: $\\sin$ and $\\csc$ always have the same sign", zh: "忘记倒数对同号：$\\sin$ 和 $\\csc$ 总是同号" },
        example: { en: "In QIII: $\\sin 210° < 0$, $\\cos 210° < 0$, but $\\tan 210° > 0$", zh: "在第三象限：$\\sin 210° < 0$，$\\cos 210° < 0$，但 $\\tan 210° > 0$" },
      },
      {
        id: "kc-4-4-3",
        title: { en: "Reference Angles", zh: "参考角" },
        explanation: {
          en: "The reference angle $\\theta'$ is the acute angle formed by the terminal side and the $x$-axis. For QI: $\\theta' = \\theta$. QII: $\\theta' = 180° - \\theta$. QIII: $\\theta' = \\theta - 180°$. QIV: $\\theta' = 360° - \\theta$. The trig value of $\\theta$ equals the trig value of $\\theta'$ with the appropriate sign from ASTC.",
          zh: "参考角 $\\theta'$ 是终边与 $x$ 轴所成的锐角。第 I 象限：$\\theta' = \\theta$。第 II 象限：$\\theta' = 180° - \\theta$。第 III 象限：$\\theta' = \\theta - 180°$。第 IV 象限：$\\theta' = 360° - \\theta$。$\\theta$ 的三角函数值等于 $\\theta'$ 的三角函数值加上 ASTC 确定的符号。",
        },
        whenToUse: { en: "Evaluating trig functions of any angle by reducing to an acute angle", zh: "将任意角化为锐角来求三角函数值" },
        commonMistake: { en: "Finding the reference angle from the $y$-axis instead of the $x$-axis", zh: "以 $y$ 轴而非 $x$ 轴为基准求参考角" },
        example: { en: "$\\theta = 240°$ is in QIII, so $\\theta' = 240° - 180° = 60°$. Thus $\\sin 240° = -\\sin 60° = -\\frac{\\sqrt{3}}{2}$", zh: "$\\theta = 240°$ 在第三象限，$\\theta' = 240° - 180° = 60°$。所以 $\\sin 240° = -\\sin 60° = -\\frac{\\sqrt{3}}{2}$" },
      },
    ],
    formulas: [
      {
        id: "f-4-4-1",
        name: { en: "General Trig Definitions (Any Angle)", zh: "三角函数的一般定义（任意角）" },
        formula: "\\sin\\theta = \\frac{y}{r}, \\quad \\cos\\theta = \\frac{x}{r}, \\quad \\tan\\theta = \\frac{y}{x} \\quad (r = \\sqrt{x^2+y^2})",
        variables: [
          { en: "$(x, y)$ — any point on the terminal side of $\\theta$", zh: "$(x, y)$ — $\\theta$ 终边上的任一点" },
          { en: "$r$ — distance from origin to $(x, y)$, always positive", zh: "$r$ — 原点到 $(x, y)$ 的距离，始终为正" },
        ],
        whenToUse: { en: "Evaluating trig functions when given a point on the terminal side", zh: "已知终边上一点时求三角函数值" },
        commonProblemTypes: [
          { en: "Given a point $(x,y)$, find all six trig values", zh: "已知点 $(x,y)$，求全部六个三角函数值" },
        ],
        example: { en: "Point $(5, -12)$: $r = 13$, $\\sin\\theta = -\\frac{12}{13}$, $\\cos\\theta = \\frac{5}{13}$", zh: "点 $(5, -12)$：$r = 13$，$\\sin\\theta = -\\frac{12}{13}$，$\\cos\\theta = \\frac{5}{13}$" },
      },
      {
        id: "f-4-4-2",
        name: { en: "Reference Angle Formulas", zh: "参考角公式" },
        formula: "\\theta' = \\begin{cases} \\theta & \\text{QI} \\\\ 180°-\\theta & \\text{QII} \\\\ \\theta-180° & \\text{QIII} \\\\ 360°-\\theta & \\text{QIV} \\end{cases}",
        variables: [
          { en: "$\\theta'$ — the reference angle (always acute: $0° < \\theta' < 90°$)", zh: "$\\theta'$ — 参考角（始终为锐角：$0° < \\theta' < 90°$）" },
        ],
        whenToUse: { en: "Finding the reference angle to evaluate trig of any angle via known acute-angle values", zh: "求参考角以通过已知锐角值来计算任意角的三角函数" },
        commonProblemTypes: [
          { en: "Find the reference angle for a given angle", zh: "求给定角的参考角" },
          { en: "Evaluate trig functions using reference angles", zh: "用参考角求三角函数值" },
        ],
        example: { en: "$\\theta = 315°$ (QIV): $\\theta' = 360° - 315° = 45°$", zh: "$\\theta = 315°$（第四象限）：$\\theta' = 360° - 315° = 45°$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-4-4-1",
        title: { en: "Find Reference Angle", zh: "求参考角" },
        description: { en: "Given an angle, find its reference angle.", zh: "已知角，求其参考角。" },
        howToRecognize: { en: "Problem asks for the reference angle of a given angle.", zh: "题目要求给定角的参考角。" },
        steps: [
          { en: "Determine which quadrant the angle is in", zh: "确定角在哪个象限" },
          { en: "Apply the reference angle formula for that quadrant", zh: "应用该象限的参考角公式" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the reference angle for $225°$.", zh: "求 $225°$ 的参考角。" },
        commonTraps: [
          { en: "Using $180° - \\theta$ for QIII (should be $\\theta - 180°$)", zh: "对第三象限用 $180° - \\theta$（应为 $\\theta - 180°$）" },
        ],
      },
      {
        id: "pt-4-4-2",
        title: { en: "Determine Sign of Trig Function", zh: "判断三角函数的符号" },
        description: { en: "State whether a trig function is positive or negative at a given angle.", zh: "判断给定角处的三角函数为正还是为负。" },
        howToRecognize: { en: "Problem asks if $\\sin\\theta$, $\\cos\\theta$, or $\\tan\\theta$ is positive or negative.", zh: "题目问 $\\sin\\theta$、$\\cos\\theta$ 或 $\\tan\\theta$ 为正还是为负。" },
        steps: [
          { en: "Find which quadrant $\\theta$ is in", zh: "确定 $\\theta$ 所在象限" },
          { en: "Apply ASTC", zh: "应用 ASTC 法则" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Determine the sign of $\\cos 200°$ and $\\sin 200°$.", zh: "判断 $\\cos 200°$ 和 $\\sin 200°$ 的符号。" },
        commonTraps: [
          { en: "Thinking tangent is negative in QIII (it's positive there)", zh: "以为正切在第三象限为负（实际为正）" },
        ],
      },
      {
        id: "pt-4-4-3",
        title: { en: "Trig Values from a Point on the Terminal Side", zh: "由终边上的点求三角函数值" },
        description: { en: "Given $(x, y)$ on the terminal side, find all six trig values.", zh: "已知终边上的点 $(x, y)$，求全部六个三角函数值。" },
        howToRecognize: { en: "A specific point $(x, y)$ is given on the terminal side of $\\theta$.", zh: "给出 $\\theta$ 终边上的特定点 $(x, y)$。" },
        steps: [
          { en: "Compute $r = \\sqrt{x^2 + y^2}$", zh: "求 $r = \\sqrt{x^2 + y^2}$" },
          { en: "Apply definitions: $\\sin = y/r$, $\\cos = x/r$, $\\tan = y/x$", zh: "应用定义：$\\sin = y/r$，$\\cos = x/r$，$\\tan = y/x$" },
          { en: "Compute reciprocals", zh: "求倒数函数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "The point $(-5, 12)$ is on the terminal side of $\\theta$. Find all six trig values.", zh: "点 $(-5, 12)$ 在 $\\theta$ 的终边上，求全部六个三角函数值。" },
        commonTraps: [
          { en: "Making $r$ negative ($r$ is always positive)", zh: "让 $r$ 为负（$r$ 始终为正）" },
        ],
      },
      {
        id: "pt-4-4-4",
        title: { en: "Evaluate Trig at Quadrantal Angles", zh: "求象限角的三角函数值" },
        description: { en: "Find trig values at $0°$, $90°$, $180°$, $270°$.", zh: "求 $0°$、$90°$、$180°$、$270°$ 处的三角函数值。" },
        howToRecognize: { en: "Angle is on an axis.", zh: "角的终边在坐标轴上。" },
        steps: [
          { en: "Identify the point: $(1,0)$, $(0,1)$, $(-1,0)$, or $(0,-1)$", zh: "确定对应点：$(1,0)$、$(0,1)$、$(-1,0)$ 或 $(0,-1)$" },
          { en: "Read $\\sin$ and $\\cos$ directly; check for undefined values", zh: "直接读出 $\\sin$ 和 $\\cos$；检查是否无定义" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find $\\tan 90°$ and $\\sec 270°$.", zh: "求 $\\tan 90°$ 和 $\\sec 270°$。" },
        commonTraps: [
          { en: "Saying $\\tan 90° = 1$ instead of undefined", zh: "把 $\\tan 90°$ 说成 $1$ 而非无定义" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-4-4-5",
        title: { en: "Evaluate Trig Using Reference Angle", zh: "用参考角求三角函数值" },
        description: { en: "Find the exact value of a trig function at a non-acute standard angle.", zh: "求非锐角标准角的三角函数精确值。" },
        howToRecognize: { en: "Angle like $120°$, $210°$, $315°$, $\\frac{5\\pi}{6}$, etc.", zh: "如 $120°$、$210°$、$315°$、$\\frac{5\\pi}{6}$ 等角。" },
        steps: [
          { en: "Find the reference angle", zh: "求参考角" },
          { en: "Evaluate the trig function at the reference angle", zh: "对参考角求三角函数值" },
          { en: "Attach the correct sign using ASTC", zh: "用 ASTC 附上正确符号" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find $\\cos\\frac{5\\pi}{3}$ exactly.", zh: "求 $\\cos\\frac{5\\pi}{3}$ 的精确值。" },
        commonTraps: [
          { en: "Getting the sign wrong: $\\frac{5\\pi}{3}$ is in QIV where cosine is positive", zh: "符号搞错：$\\frac{5\\pi}{3}$ 在第四象限，余弦为正" },
        ],
      },
      {
        id: "pt-4-4-6",
        title: { en: "Find $\\theta$ Given a Trig Value and Quadrant", zh: "由三角函数值和象限求 $\\theta$" },
        description: { en: "Find $\\theta$ in a specified range given one trig value and the quadrant.", zh: "在指定范围内，由一个三角函数值和象限求 $\\theta$。" },
        howToRecognize: { en: "Given $\\sin\\theta = -\\frac{1}{2}$ and $\\theta$ is in QIII (or similar).", zh: "给出 $\\sin\\theta = -\\frac{1}{2}$ 且 $\\theta$ 在第三象限（或类似条件）。" },
        steps: [
          { en: "Find the reference angle from the absolute value of the trig ratio", zh: "由三角比的绝对值求参考角" },
          { en: "Use the quadrant to determine the actual angle: $\\theta = 180° + \\theta'$ for QIII, etc.", zh: "根据象限确定实际角：第三象限 $\\theta = 180° + \\theta'$ 等" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find $\\theta$ in $[0°, 360°)$ if $\\tan\\theta = \\sqrt{3}$ and $\\theta$ is in QIII.", zh: "若 $\\tan\\theta = \\sqrt{3}$ 且 $\\theta$ 在第三象限，求 $[0°, 360°)$ 内的 $\\theta$。" },
        commonTraps: [
          { en: "Forgetting that $\\tan$ is positive in BOTH QI and QIII", zh: "忘记 $\\tan$ 在第一和第三象限都为正" },
        ],
      },
      {
        id: "pt-4-4-7",
        title: { en: "Find Remaining Trig Values Given One Value and Quadrant", zh: "由一个值和象限求其余三角函数值" },
        description: { en: "Use identities and quadrant info to find all six trig values.", zh: "利用恒等式和象限信息求全部六个值。" },
        howToRecognize: { en: "Given $\\sin\\theta$ (or another trig value) and the quadrant; asked for all six.", zh: "给出 $\\sin\\theta$（或其他值）和象限；求全部六个。" },
        steps: [
          { en: "Use $\\sin^2\\theta + \\cos^2\\theta = 1$ to find the missing sine or cosine", zh: "用 $\\sin^2\\theta + \\cos^2\\theta = 1$ 求缺失的正弦或余弦" },
          { en: "Use the quadrant to choose the correct sign", zh: "根据象限选择正确符号" },
          { en: "Compute $\\tan$, $\\cot$, $\\sec$, $\\csc$", zh: "计算 $\\tan$、$\\cot$、$\\sec$、$\\csc$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "If $\\sin\\theta = \\frac{5}{13}$ and $\\theta$ is in QII, find the remaining five trig values.", zh: "若 $\\sin\\theta = \\frac{5}{13}$ 且 $\\theta$ 在第二象限，求其余五个三角函数值。" },
        commonTraps: [
          { en: "Choosing the wrong sign for cosine (QII means $\\cos < 0$)", zh: "余弦符号选错（第二象限 $\\cos < 0$）" },
        ],
      },
      {
        id: "pt-4-4-8",
        title: { en: "Evaluate Trig at Negative or Large Angles", zh: "求负角或大角的三角函数值" },
        description: { en: "Find coterminal angle in $[0°, 360°)$, then use reference angle.", zh: "先求 $[0°, 360°)$ 内的同终边角，再用参考角。" },
        howToRecognize: { en: "Angle is negative or exceeds $360°$.", zh: "角为负值或超过 $360°$。" },
        steps: [
          { en: "Add/subtract $360°$ (or $2\\pi$) to find a coterminal angle in $[0°, 360°)$", zh: "加减 $360°$（或 $2\\pi$）得到 $[0°, 360°)$ 内的同终边角" },
          { en: "Find the reference angle and quadrant", zh: "求参考角和象限" },
          { en: "Evaluate with the correct sign", zh: "用正确符号求值" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find $\\sin(-\\frac{7\\pi}{4})$.", zh: "求 $\\sin(-\\frac{7\\pi}{4})$。" },
        commonTraps: [
          { en: "Arithmetic error in finding the coterminal angle", zh: "求同终边角时算术出错" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-4-4-9",
        title: { en: "Find All Angles with a Given Trig Value", zh: "求满足给定三角函数值的所有角" },
        description: { en: "Find all $\\theta$ in $[0°, 360°)$ satisfying a trig equation.", zh: "求 $[0°, 360°)$ 内满足三角方程的所有 $\\theta$。" },
        howToRecognize: { en: "Equation like $\\cos\\theta = -\\frac{\\sqrt{2}}{2}$; asked for all solutions.", zh: "方程如 $\\cos\\theta = -\\frac{\\sqrt{2}}{2}$；要求所有解。" },
        steps: [
          { en: "Find the reference angle from $|\\text{value}|$", zh: "由 $|\\text{值}|$ 求参考角" },
          { en: "Determine which quadrants give the correct sign", zh: "确定哪些象限给出正确符号" },
          { en: "Write the angle(s) using $\\theta = \\text{base} \\pm \\theta'$", zh: "写出角：$\\theta = \\text{基准} \\pm \\theta'$" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find all $\\theta$ in $[0°, 360°)$ such that $\\sin\\theta = -\\frac{\\sqrt{3}}{2}$.", zh: "求 $[0°, 360°)$ 内满足 $\\sin\\theta = -\\frac{\\sqrt{3}}{2}$ 的所有 $\\theta$。" },
        commonTraps: [
          { en: "Finding only one solution (there are usually two)", zh: "只找到一个解（通常有两个）" },
        ],
      },
      {
        id: "pt-4-4-10",
        title: { en: "Constrained Trig Value Problem", zh: "三角函数约束问题" },
        description: { en: "Given two trig conditions (e.g., $\\tan\\theta = -\\frac{3}{4}$ and $\\cos\\theta > 0$), find exact trig values.", zh: "给出两个三角条件（如 $\\tan\\theta = -\\frac{3}{4}$ 且 $\\cos\\theta > 0$），求精确三角函数值。" },
        howToRecognize: { en: "A trig ratio AND a sign constraint (or quadrant) are both given.", zh: "同时给出三角比和符号约束（或象限）。" },
        steps: [
          { en: "Use the sign constraint to determine the quadrant", zh: "用符号约束确定象限" },
          { en: "Construct a reference triangle from the given ratio", zh: "由给定比值构造参考三角形" },
          { en: "Find $r$ and compute all six trig values with correct signs", zh: "求 $r$ 并用正确符号计算全部六个值" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "If $\\tan\\theta = -\\frac{3}{4}$ and $\\cos\\theta > 0$, find $\\sin\\theta$ and $\\sec\\theta$.", zh: "若 $\\tan\\theta = -\\frac{3}{4}$ 且 $\\cos\\theta > 0$，求 $\\sin\\theta$ 和 $\\sec\\theta$。" },
        commonTraps: [
          { en: "Ignoring the sign constraint and picking the wrong quadrant", zh: "忽略符号约束而选错象限" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Sketch the basic graphs of $y = \\sin x$ and $y = \\cos x$", zh: "画出 $y = \\sin x$ 和 $y = \\cos x$ 的基本图像" },
      { en: "Identify amplitude, period, phase shift, and vertical shift", zh: "识别振幅、周期、相位移与垂直平移" },
      { en: "Graph $y = a\\sin(bx - c) + d$ and $y = a\\cos(bx - c) + d$ using transformations", zh: "用变换法画 $y = a\\sin(bx - c) + d$ 和 $y = a\\cos(bx - c) + d$ 的图像" },
      { en: "Write equations from given graphs", zh: "由给定图像写出方程" },
    ],
    keyConcepts: [
      {
        id: "kc-4-5-1",
        title: { en: "Basic Sine and Cosine Graphs", zh: "基本正弦和余弦图像" },
        explanation: {
          en: "$y = \\sin x$: starts at $(0, 0)$, max at $(\\frac{\\pi}{2}, 1)$, zero at $(\\pi, 0)$, min at $(\\frac{3\\pi}{2}, -1)$, returns to $(2\\pi, 0)$. $y = \\cos x$: starts at $(0, 1)$, zero at $(\\frac{\\pi}{2}, 0)$, min at $(\\pi, -1)$, zero at $(\\frac{3\\pi}{2}, 0)$, returns to $(2\\pi, 1)$. Both have period $2\\pi$, amplitude $1$, and range $[-1, 1]$.",
          zh: "$y = \\sin x$：从 $(0, 0)$ 出发，极大值 $(\\frac{\\pi}{2}, 1)$，零点 $(\\pi, 0)$，极小值 $(\\frac{3\\pi}{2}, -1)$，回到 $(2\\pi, 0)$。$y = \\cos x$：从 $(0, 1)$ 出发，零点 $(\\frac{\\pi}{2}, 0)$，极小值 $(\\pi, -1)$，零点 $(\\frac{3\\pi}{2}, 0)$，回到 $(2\\pi, 1)$。两者周期 $2\\pi$，振幅 $1$，值域 $[-1, 1]$。",
        },
        whenToUse: { en: "As the starting point for all sinusoidal graphing", zh: "作为所有正弦型图像绘制的起点" },
        commonMistake: { en: "Confusing the starting point: sine starts at 0, cosine starts at 1", zh: "起点搞混：正弦从 0 出发，余弦从 1 出发" },
        example: { en: "$y = \\sin x$ crosses zero at $x = 0, \\pi, 2\\pi$; $y = \\cos x$ crosses zero at $x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$", zh: "$y = \\sin x$ 在 $x = 0, \\pi, 2\\pi$ 过零；$y = \\cos x$ 在 $x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$ 过零" },
      },
      {
        id: "kc-4-5-2",
        title: { en: "Amplitude and Vertical Shift", zh: "振幅与垂直平移" },
        explanation: {
          en: "For $y = a\\sin(bx - c) + d$: Amplitude $= |a|$ — the distance from the midline to the max (or min). Vertical shift $= d$ — moves the midline from $y = 0$ to $y = d$. If $a < 0$, the graph is reflected across the midline. Range: $[d - |a|, d + |a|]$.",
          zh: "对 $y = a\\sin(bx - c) + d$：振幅 $= |a|$——中线到极值的距离。垂直平移 $= d$——中线从 $y = 0$ 移到 $y = d$。若 $a < 0$，图像关于中线翻转。值域：$[d - |a|, d + |a|]$。",
        },
        whenToUse: { en: "Determining the vertical scale and position of a sinusoidal graph", zh: "确定正弦型图像的纵向范围与位置" },
        commonMistake: { en: "Saying amplitude is $a$ instead of $|a|$ — amplitude is always positive", zh: "说振幅为 $a$ 而非 $|a|$——振幅始终为正" },
        example: { en: "$y = -3\\sin x + 2$: amplitude $= 3$, midline $y = 2$, range $[-1, 5]$", zh: "$y = -3\\sin x + 2$：振幅 $= 3$，中线 $y = 2$，值域 $[-1, 5]$" },
      },
      {
        id: "kc-4-5-3",
        title: { en: "Period and Phase Shift", zh: "周期与相位移" },
        explanation: {
          en: "For $y = a\\sin(bx - c) + d$: Period $= \\frac{2\\pi}{|b|}$ — the horizontal length of one full cycle. Phase shift $= \\frac{c}{b}$ — the horizontal translation (positive = right). Factor out $b$ first: $y = a\\sin[b(x - \\frac{c}{b})] + d$ to read the shift directly.",
          zh: "对 $y = a\\sin(bx - c) + d$：周期 $= \\frac{2\\pi}{|b|}$——一个完整周期的水平长度。相位移 $= \\frac{c}{b}$——水平平移（正值向右）。先提取 $b$：$y = a\\sin[b(x - \\frac{c}{b})] + d$ 可直接读出平移量。",
        },
        whenToUse: { en: "Finding horizontal scale and position of a sinusoidal graph", zh: "确定正弦型图像的水平范围与位置" },
        commonMistake: { en: "Computing period as $\\frac{2\\pi}{b}$ when $b$ is negative — use $|b|$; and reading phase shift as $c$ instead of $\\frac{c}{b}$", zh: "当 $b$ 为负时周期算成 $\\frac{2\\pi}{b}$——应用 $|b|$；相位移读成 $c$ 而非 $\\frac{c}{b}$" },
        example: { en: "$y = \\sin(2x - \\pi)$: period $= \\frac{2\\pi}{2} = \\pi$, phase shift $= \\frac{\\pi}{2}$ right", zh: "$y = \\sin(2x - \\pi)$：周期 $= \\frac{2\\pi}{2} = \\pi$，相位移 $= \\frac{\\pi}{2}$ 向右" },
      },
    ],
    formulas: [
      {
        id: "f-4-5-1",
        name: { en: "General Sinusoidal Form", zh: "一般正弦型函数" },
        formula: "y = a\\sin(bx - c) + d \\quad \\text{or} \\quad y = a\\cos(bx - c) + d",
        variables: [
          { en: "$|a|$ — amplitude", zh: "$|a|$ — 振幅" },
          { en: "$\\frac{2\\pi}{|b|}$ — period", zh: "$\\frac{2\\pi}{|b|}$ — 周期" },
          { en: "$\\frac{c}{b}$ — phase shift (horizontal)", zh: "$\\frac{c}{b}$ — 相位移（水平）" },
          { en: "$d$ — vertical shift (midline $y = d$)", zh: "$d$ — 垂直平移（中线 $y = d$）" },
        ],
        whenToUse: { en: "Graphing or writing equations for any sinusoidal function", zh: "画任意正弦型函数图像或写方程" },
        commonProblemTypes: [
          { en: "Graph a sinusoidal function given its equation", zh: "由方程画正弦型函数图像" },
          { en: "Write the equation from a graph", zh: "由图像写方程" },
        ],
        example: { en: "$y = 2\\sin(3x - \\frac{\\pi}{2}) + 1$: amp $= 2$, period $= \\frac{2\\pi}{3}$, shift right $\\frac{\\pi}{6}$, midline $y = 1$", zh: "$y = 2\\sin(3x - \\frac{\\pi}{2}) + 1$：振幅 $= 2$，周期 $= \\frac{2\\pi}{3}$，右移 $\\frac{\\pi}{6}$，中线 $y = 1$" },
      },
      {
        id: "f-4-5-2",
        name: { en: "Key Points of One Period (Sine)", zh: "一个周期的关键点（正弦）" },
        formula: "\\text{Start: } \\frac{c}{b}, \\quad \\text{Quarter: } \\frac{c}{b}+\\frac{T}{4}, \\quad \\text{Half: } \\frac{c}{b}+\\frac{T}{2}, \\quad \\text{Three-Quarter: } \\frac{c}{b}+\\frac{3T}{4}, \\quad \\text{End: } \\frac{c}{b}+T",
        variables: [
          { en: "$T = \\frac{2\\pi}{|b|}$ — period", zh: "$T = \\frac{2\\pi}{|b|}$ — 周期" },
          { en: "For sine: values at these points are $d$, $d+a$, $d$, $d-a$, $d$", zh: "对正弦：这些点处的值依次为 $d$、$d+a$、$d$、$d-a$、$d$" },
        ],
        whenToUse: { en: "Plotting one full period by dividing it into four equal parts", zh: "将一个完整周期四等分以画图" },
        commonProblemTypes: [
          { en: "Plot key points and sketch the graph", zh: "标关键点并画图" },
        ],
        example: { en: "$y = \\sin x$: key points $(0,0)$, $(\\frac{\\pi}{2},1)$, $(\\pi,0)$, $(\\frac{3\\pi}{2},-1)$, $(2\\pi,0)$", zh: "$y = \\sin x$：关键点 $(0,0)$、$(\\frac{\\pi}{2},1)$、$(\\pi,0)$、$(\\frac{3\\pi}{2},-1)$、$(2\\pi,0)$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-4-5-1",
        title: { en: "Identify Amplitude and Period", zh: "识别振幅和周期" },
        description: { en: "Read off amplitude and period from a given equation.", zh: "从给定方程读出振幅和周期。" },
        howToRecognize: { en: "Equation in the form $y = a\\sin(bx)$ or $y = a\\cos(bx)$.", zh: "方程形如 $y = a\\sin(bx)$ 或 $y = a\\cos(bx)$。" },
        steps: [
          { en: "Amplitude $= |a|$", zh: "振幅 $= |a|$" },
          { en: "Period $= \\frac{2\\pi}{|b|}$", zh: "周期 $= \\frac{2\\pi}{|b|}$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the amplitude and period of $y = 3\\cos(4x)$.", zh: "求 $y = 3\\cos(4x)$ 的振幅和周期。" },
        commonTraps: [
          { en: "Confusing $b$ with the period — the period is $\\frac{2\\pi}{b}$, not $b$", zh: "把 $b$ 当成周期——周期是 $\\frac{2\\pi}{b}$ 而非 $b$" },
        ],
      },
      {
        id: "pt-4-5-2",
        title: { en: "Identify Phase Shift and Vertical Shift", zh: "识别相位移和垂直平移" },
        description: { en: "Extract phase shift and vertical shift from the general form.", zh: "从一般形式中提取相位移和垂直平移。" },
        howToRecognize: { en: "Equation has the form $y = a\\sin(bx - c) + d$.", zh: "方程形如 $y = a\\sin(bx - c) + d$。" },
        steps: [
          { en: "Phase shift $= \\frac{c}{b}$ (right if positive)", zh: "相位移 $= \\frac{c}{b}$（正值向右）" },
          { en: "Vertical shift $= d$", zh: "垂直平移 $= d$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the phase shift and vertical shift of $y = 2\\sin(3x - \\pi) + 5$.", zh: "求 $y = 2\\sin(3x - \\pi) + 5$ 的相位移和垂直平移。" },
        commonTraps: [
          { en: "Reading phase shift as $\\pi$ instead of $\\frac{\\pi}{3}$ — must divide $c$ by $b$", zh: "把相位移读为 $\\pi$ 而非 $\\frac{\\pi}{3}$——必须将 $c$ 除以 $b$" },
        ],
      },
      {
        id: "pt-4-5-3",
        title: { en: "Determine Range of a Sinusoidal Function", zh: "求正弦型函数的值域" },
        description: { en: "Find the range from amplitude and vertical shift.", zh: "由振幅和垂直平移求值域。" },
        howToRecognize: { en: "Problem asks for maximum, minimum, or range.", zh: "题目要求最大值、最小值或值域。" },
        steps: [
          { en: "Max $= d + |a|$, Min $= d - |a|$", zh: "最大值 $= d + |a|$，最小值 $= d - |a|$" },
          { en: "Range $= [d - |a|, d + |a|]$", zh: "值域 $= [d - |a|, d + |a|]$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the range of $y = -4\\cos x + 3$.", zh: "求 $y = -4\\cos x + 3$ 的值域。" },
        commonTraps: [
          { en: "Thinking the negative sign means the range is $[-7, -1]$ — the negative only flips the graph, range is still $[d-|a|, d+|a|]$", zh: "以为负号使值域变为 $[-7, -1]$——负号只翻转图像，值域仍为 $[d-|a|, d+|a|]$" },
        ],
      },
      {
        id: "pt-4-5-4",
        title: { en: "Describe Effect of Negative $a$", zh: "描述 $a$ 为负时的效果" },
        description: { en: "Explain how a negative leading coefficient reflects the graph.", zh: "说明负系数如何反射图像。" },
        howToRecognize: { en: "The coefficient $a$ is negative; asked about the graph shape.", zh: "系数 $a$ 为负；问图像形状。" },
        steps: [
          { en: "Negative $a$ reflects the graph across the midline ($y = d$)", zh: "负 $a$ 使图像关于中线（$y = d$）翻转" },
          { en: "Amplitude is still $|a|$", zh: "振幅仍为 $|a|$" },
          { en: "For sine: starts going DOWN from the midline instead of up", zh: "对正弦：从中线向下而非向上出发" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Describe how $y = -\\sin x$ differs from $y = \\sin x$.", zh: "描述 $y = -\\sin x$ 与 $y = \\sin x$ 的区别。" },
        commonTraps: [
          { en: "Saying amplitude is $-1$ — amplitude is always positive", zh: "说振幅为 $-1$——振幅始终为正" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-4-5-5",
        title: { en: "Graph a Sinusoidal Function", zh: "画正弦型函数图像" },
        description: { en: "Graph one or two full periods of $y = a\\sin(bx - c) + d$.", zh: "画 $y = a\\sin(bx - c) + d$ 的一到两个完整周期。" },
        howToRecognize: { en: "Equation given; asked to sketch the graph.", zh: "给出方程；要求画图。" },
        steps: [
          { en: "Find amplitude $|a|$, period $\\frac{2\\pi}{|b|}$, phase shift $\\frac{c}{b}$, vertical shift $d$", zh: "求振幅 $|a|$、周期 $\\frac{2\\pi}{|b|}$、相位移 $\\frac{c}{b}$、垂直平移 $d$" },
          { en: "Compute the five key $x$-values (divide one period into 4 equal parts)", zh: "计算五个关键 $x$ 值（将一个周期四等分）" },
          { en: "Plot the corresponding $y$-values and connect with a smooth curve", zh: "标出对应 $y$ 值并用光滑曲线连接" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Graph two full periods of $y = 2\\sin(2x - \\frac{\\pi}{2})$.", zh: "画 $y = 2\\sin(2x - \\frac{\\pi}{2})$ 的两个完整周期。" },
        commonTraps: [
          { en: "Dividing the period incorrectly — each quarter is $\\frac{T}{4}$, not $\\frac{\\pi}{4}$ in general", zh: "周期分割错误——每段为 $\\frac{T}{4}$，不一定是 $\\frac{\\pi}{4}$" },
        ],
      },
      {
        id: "pt-4-5-6",
        title: { en: "Graph with Vertical Shift", zh: "带垂直平移的图像" },
        description: { en: "Graph a sinusoidal function with a nonzero $d$.", zh: "画垂直平移不为零的正弦型函数。" },
        howToRecognize: { en: "Equation has $+ d$ or $- d$ at the end.", zh: "方程末尾有 $+ d$ 或 $- d$。" },
        steps: [
          { en: "Draw the midline at $y = d$", zh: "在 $y = d$ 处画中线" },
          { en: "Graph the sinusoid about this new midline", zh: "以新中线为基准画正弦曲线" },
          { en: "Mark max at $d + |a|$ and min at $d - |a|$", zh: "标最大值 $d + |a|$ 和最小值 $d - |a|$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Graph $y = 3\\cos x - 2$ over $[0, 2\\pi]$.", zh: "在 $[0, 2\\pi]$ 上画 $y = 3\\cos x - 2$。" },
        commonTraps: [
          { en: "Forgetting to shift the midline — the curve oscillates about $y = d$, not $y = 0$", zh: "忘记移动中线——曲线关于 $y = d$ 振荡，而非 $y = 0$" },
        ],
      },
      {
        id: "pt-4-5-7",
        title: { en: "Write Equation from Graph", zh: "由图像写方程" },
        description: { en: "Determine $a$, $b$, $c$, $d$ from a given sinusoidal graph.", zh: "由给定正弦型图像确定 $a$、$b$、$c$、$d$。" },
        howToRecognize: { en: "Graph of a sinusoid given; asked for the equation.", zh: "给出正弦型图像；要求写方程。" },
        steps: [
          { en: "Read off max and min to find amplitude $|a| = \\frac{\\text{max} - \\text{min}}{2}$ and midline $d = \\frac{\\text{max} + \\text{min}}{2}$", zh: "读出最大值和最小值，振幅 $|a| = \\frac{\\text{max} - \\text{min}}{2}$，中线 $d = \\frac{\\text{max} + \\text{min}}{2}$" },
          { en: "Find the period $T$ from the graph, then $b = \\frac{2\\pi}{T}$", zh: "从图上读周期 $T$，然后 $b = \\frac{2\\pi}{T}$" },
          { en: "Identify phase shift from where the cycle begins", zh: "由周期起点确定相位移" },
          { en: "Choose sine or cosine based on the starting shape", zh: "根据起始形状选择正弦或余弦" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A sinusoidal graph has max $5$, min $-1$, period $\\pi$, and starts at a maximum at $x = \\frac{\\pi}{4}$. Write the equation.", zh: "正弦型图像最大值 $5$、最小值 $-1$、周期 $\\pi$，在 $x = \\frac{\\pi}{4}$ 处取最大值。写出方程。" },
        commonTraps: [
          { en: "Mixing up which function to use: if the graph starts at a max, cosine is usually simpler", zh: "搞混用哪个函数：若图像从最大值开始，余弦通常更简便" },
        ],
      },
      {
        id: "pt-4-5-8",
        title: { en: "Compare Two Sinusoidal Functions", zh: "比较两个正弦型函数" },
        description: { en: "Describe how two sinusoidal functions differ in graph features.", zh: "描述两个正弦型函数在图像特征上的区别。" },
        howToRecognize: { en: "Two equations given; asked to compare amplitude, period, shift, etc.", zh: "给出两个方程；要求比较振幅、周期、平移等。" },
        steps: [
          { en: "Extract $a$, $b$, $c$, $d$ from each equation", zh: "从每个方程提取 $a$、$b$、$c$、$d$" },
          { en: "Compare amplitude, period, phase shift, and vertical shift", zh: "比较振幅、周期、相位移和垂直平移" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Compare the graphs of $y = 2\\sin(x)$ and $y = 2\\sin(x - \\frac{\\pi}{3}) + 1$.", zh: "比较 $y = 2\\sin(x)$ 和 $y = 2\\sin(x - \\frac{\\pi}{3}) + 1$ 的图像。" },
        commonTraps: [
          { en: "Forgetting that phase shift is $\\frac{c}{b}$, not just $c$, though here $b = 1$ so they happen to be equal", zh: "忘记相位移是 $\\frac{c}{b}$ 而非 $c$，虽然此处 $b = 1$ 恰好相等" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-4-5-9",
        title: { en: "Model Real-World Data with a Sinusoidal Function", zh: "用正弦型函数建模实际数据" },
        description: { en: "Write a sinusoidal model for periodic phenomena (temperature, tides, daylight hours).", zh: "为周期现象（温度、潮汐、日照时长）建立正弦型模型。" },
        howToRecognize: { en: "Word problem with periodic data and asks for a trig model.", zh: "含周期数据的应用题，要求建立三角模型。" },
        steps: [
          { en: "Find the amplitude: $|a| = \\frac{\\text{max} - \\text{min}}{2}$", zh: "求振幅：$|a| = \\frac{\\text{max} - \\text{min}}{2}$" },
          { en: "Find the vertical shift: $d = \\frac{\\text{max} + \\text{min}}{2}$", zh: "求垂直平移：$d = \\frac{\\text{max} + \\text{min}}{2}$" },
          { en: "Find the period from the data, then $b = \\frac{2\\pi}{T}$", zh: "从数据中读取周期，然后 $b = \\frac{2\\pi}{T}$" },
          { en: "Determine phase shift based on when max or min occurs", zh: "根据极值出现的时间确定相位移" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A city's temperature varies from a low of $40°$F in January to a high of $85°$F in July. Write a sinusoidal model.", zh: "某城市气温从一月最低 $40°$F 到七月最高 $85°$F。建立正弦型模型。" },
        commonTraps: [
          { en: "Using the wrong period: annual data has $T = 12$ months, so $b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$", zh: "周期搞错：年度数据 $T = 12$ 个月，$b = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$" },
        ],
      },
      {
        id: "pt-4-5-10",
        title: { en: "Graph with Multiple Transformations", zh: "多重变换图像" },
        description: { en: "Graph a function that combines amplitude change, period change, phase shift, vertical shift, and reflection.", zh: "画同时含振幅变化、周期变化、相位移、垂直平移和翻转的函数。" },
        howToRecognize: { en: "Equation with all parameters: $y = -a\\sin(bx - c) + d$ with $a, b, c, d \\neq 0$.", zh: "方程含全部参数：$y = -a\\sin(bx - c) + d$，$a, b, c, d \\neq 0$。" },
        steps: [
          { en: "Extract all parameters: $|a|$, period, phase shift, $d$, reflection", zh: "提取所有参数：$|a|$、周期、相位移、$d$、翻转" },
          { en: "Compute five key points for one period", zh: "计算一个周期的五个关键点" },
          { en: "Apply reflection ($a < 0$) to the $y$-values", zh: "对 $y$ 值应用翻转（$a < 0$）" },
          { en: "Plot and connect with a smooth curve", zh: "标点并用光滑曲线连接" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Graph $y = -3\\cos(\\frac{\\pi}{2}x + \\pi) - 1$ over two periods.", zh: "在两个周期内画 $y = -3\\cos(\\frac{\\pi}{2}x + \\pi) - 1$。" },
        commonTraps: [
          { en: "Applying phase shift and reflection in the wrong order — factor out $b$ first to find the true shift", zh: "相位移和翻转的顺序搞错——先提取 $b$ 以找到真正的平移量" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Sketch the graph of $y = \\tan x$ and $y = \\cot x$", zh: "画 $y = \\tan x$ 和 $y = \\cot x$ 的图像" },
      { en: "Sketch the graph of $y = \\sec x$ and $y = \\csc x$", zh: "画 $y = \\sec x$ 和 $y = \\csc x$ 的图像" },
      { en: "Identify vertical asymptotes, period, and domain of each function", zh: "识别各函数的垂直渐近线、周期和定义域" },
      { en: "Graph transformed versions of these functions", zh: "画这些函数的变换图像" },
    ],
    keyConcepts: [
      {
        id: "kc-4-6-1",
        title: { en: "Graph of Tangent and Cotangent", zh: "正切和余切的图像" },
        explanation: {
          en: "$y = \\tan x$ has period $\\pi$, vertical asymptotes at $x = \\frac{\\pi}{2} + n\\pi$, passes through the origin, and increases from $-\\infty$ to $+\\infty$ in each period. $y = \\cot x$ has period $\\pi$, vertical asymptotes at $x = n\\pi$, and decreases from $+\\infty$ to $-\\infty$ in each period. Neither has amplitude (range is all reals).",
          zh: "$y = \\tan x$ 周期 $\\pi$，垂直渐近线在 $x = \\frac{\\pi}{2} + n\\pi$，过原点，每个周期从 $-\\infty$ 增到 $+\\infty$。$y = \\cot x$ 周期 $\\pi$，垂直渐近线在 $x = n\\pi$，每个周期从 $+\\infty$ 减到 $-\\infty$。两者无振幅（值域为全体实数）。",
        },
        whenToUse: { en: "Graphing tangent or cotangent and identifying their key features", zh: "画正切或余切图像并识别关键特征" },
        commonMistake: { en: "Drawing tangent with period $2\\pi$ instead of $\\pi$", zh: "把正切的周期画成 $2\\pi$ 而非 $\\pi$" },
        example: { en: "$\\tan 0 = 0$, $\\tan\\frac{\\pi}{4} = 1$, $\\tan\\frac{\\pi}{2}$ is undefined (asymptote)", zh: "$\\tan 0 = 0$，$\\tan\\frac{\\pi}{4} = 1$，$\\tan\\frac{\\pi}{2}$ 无定义（渐近线）" },
      },
      {
        id: "kc-4-6-2",
        title: { en: "Graph of Secant and Cosecant", zh: "正割和余割的图像" },
        explanation: {
          en: "$y = \\sec x = \\frac{1}{\\cos x}$: period $2\\pi$, vertical asymptotes where $\\cos x = 0$ ($x = \\frac{\\pi}{2} + n\\pi$), range $(-\\infty, -1] \\cup [1, \\infty)$. Graph consists of U-shaped curves opening up and down. $y = \\csc x = \\frac{1}{\\sin x}$: period $2\\pi$, asymptotes where $\\sin x = 0$ ($x = n\\pi$), same range shape.",
          zh: "$y = \\sec x = \\frac{1}{\\cos x}$：周期 $2\\pi$，垂直渐近线在 $\\cos x = 0$ 处（$x = \\frac{\\pi}{2} + n\\pi$），值域 $(-\\infty, -1] \\cup [1, \\infty)$。图像由向上和向下的 U 形曲线组成。$y = \\csc x = \\frac{1}{\\sin x}$：周期 $2\\pi$，渐近线在 $\\sin x = 0$ 处（$x = n\\pi$），值域形状相同。",
        },
        whenToUse: { en: "Graphing secant or cosecant, often by first sketching cosine or sine as a guide", zh: "画正割或余割图像，通常先画余弦或正弦作为参考" },
        commonMistake: { en: "Thinking secant/cosecant can take values between $-1$ and $1$ — they cannot", zh: "以为正割/余割可以取 $-1$ 到 $1$ 之间的值——不可以" },
        example: { en: "$\\sec 0 = 1$, $\\sec\\frac{\\pi}{3} = 2$, $\\sec\\frac{\\pi}{2}$ is undefined", zh: "$\\sec 0 = 1$，$\\sec\\frac{\\pi}{3} = 2$，$\\sec\\frac{\\pi}{2}$ 无定义" },
      },
      {
        id: "kc-4-6-3",
        title: { en: "Transformations of Tan, Cot, Sec, Csc", zh: "正切、余切、正割、余割的变换" },
        explanation: {
          en: "For $y = a\\tan(bx - c) + d$: period $= \\frac{\\pi}{|b|}$ (not $\\frac{2\\pi}{|b|}$), phase shift $= \\frac{c}{b}$, vertical shift $= d$, vertical stretch $= |a|$. The factor $a$ stretches the graph vertically but there is no amplitude. Asymptotes shift by the phase shift. For sec/csc, period remains $\\frac{2\\pi}{|b|}$.",
          zh: "对 $y = a\\tan(bx - c) + d$：周期 $= \\frac{\\pi}{|b|}$（不是 $\\frac{2\\pi}{|b|}$），相位移 $= \\frac{c}{b}$，垂直平移 $= d$，纵向伸缩 $= |a|$。系数 $a$ 纵向伸缩图像但无振幅。渐近线随相位移移动。对 sec/csc，周期仍为 $\\frac{2\\pi}{|b|}$。",
        },
        whenToUse: { en: "Graphing transformed tan/cot/sec/csc functions", zh: "画变换的 tan/cot/sec/csc 函数图像" },
        commonMistake: { en: "Using $\\frac{2\\pi}{b}$ as the period for tangent — tangent's base period is $\\pi$, not $2\\pi$", zh: "把正切的周期算成 $\\frac{2\\pi}{b}$——正切的基本周期是 $\\pi$ 而非 $2\\pi$" },
        example: { en: "$y = \\tan(2x)$: period $= \\frac{\\pi}{2}$, asymptotes at $x = \\frac{\\pi}{4} + \\frac{n\\pi}{2}$", zh: "$y = \\tan(2x)$：周期 $= \\frac{\\pi}{2}$，渐近线在 $x = \\frac{\\pi}{4} + \\frac{n\\pi}{2}$" },
      },
    ],
    formulas: [
      {
        id: "f-4-6-1",
        name: { en: "Tangent / Cotangent Properties", zh: "正切/余切性质" },
        formula: "y = a\\tan(bx - c) + d: \\quad \\text{Period} = \\frac{\\pi}{|b|}, \\quad \\text{Phase shift} = \\frac{c}{b}",
        variables: [
          { en: "Asymptotes of $\\tan$: $bx - c = \\pm\\frac{\\pi}{2}$, i.e., $x = \\frac{c \\pm \\frac{\\pi}{2}}{b}$", zh: "$\\tan$ 的渐近线：$bx - c = \\pm\\frac{\\pi}{2}$，即 $x = \\frac{c \\pm \\frac{\\pi}{2}}{b}$" },
          { en: "Asymptotes of $\\cot$: $bx - c = 0$ and $bx - c = \\pi$", zh: "$\\cot$ 的渐近线：$bx - c = 0$ 和 $bx - c = \\pi$" },
        ],
        whenToUse: { en: "Graphing tangent or cotangent functions", zh: "画正切或余切函数图像" },
        commonProblemTypes: [
          { en: "Find period and asymptotes of a transformed tangent", zh: "求变换正切函数的周期和渐近线" },
        ],
        example: { en: "$y = \\tan(\\frac{x}{2})$: period $= 2\\pi$, asymptotes at $x = \\pi + 2n\\pi$", zh: "$y = \\tan(\\frac{x}{2})$：周期 $= 2\\pi$，渐近线在 $x = \\pi + 2n\\pi$" },
      },
      {
        id: "f-4-6-2",
        name: { en: "Secant / Cosecant Properties", zh: "正割/余割性质" },
        formula: "y = a\\sec(bx - c) + d: \\quad \\text{Period} = \\frac{2\\pi}{|b|}, \\quad \\text{Range}: (-\\infty, d-|a|] \\cup [d+|a|, \\infty)",
        variables: [
          { en: "Asymptotes of $\\sec$: where $\\cos(bx - c) = 0$", zh: "$\\sec$ 的渐近线：$\\cos(bx - c) = 0$ 处" },
          { en: "Asymptotes of $\\csc$: where $\\sin(bx - c) = 0$", zh: "$\\csc$ 的渐近线：$\\sin(bx - c) = 0$ 处" },
        ],
        whenToUse: { en: "Graphing secant or cosecant functions", zh: "画正割或余割函数图像" },
        commonProblemTypes: [
          { en: "Graph $\\csc$ by first sketching the corresponding $\\sin$ curve", zh: "先画 $\\sin$ 曲线再画 $\\csc$ 图像" },
        ],
        example: { en: "$y = 2\\sec x$: range $(-\\infty, -2] \\cup [2, \\infty)$, asymptotes at $x = \\frac{\\pi}{2} + n\\pi$", zh: "$y = 2\\sec x$：值域 $(-\\infty, -2] \\cup [2, \\infty)$，渐近线在 $x = \\frac{\\pi}{2} + n\\pi$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-4-6-1",
        title: { en: "Find Period and Asymptotes of Tangent", zh: "求正切函数的周期和渐近线" },
        description: { en: "Given $y = a\\tan(bx)$, find the period and consecutive asymptotes.", zh: "已知 $y = a\\tan(bx)$，求周期和相邻渐近线。" },
        howToRecognize: { en: "Tangent function; asked for period or asymptotes.", zh: "正切函数；要求周期或渐近线。" },
        steps: [
          { en: "Period $= \\frac{\\pi}{|b|}$", zh: "周期 $= \\frac{\\pi}{|b|}$" },
          { en: "Asymptotes: solve $bx = \\pm\\frac{\\pi}{2}$", zh: "渐近线：解 $bx = \\pm\\frac{\\pi}{2}$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the period and two consecutive asymptotes of $y = \\tan(3x)$.", zh: "求 $y = \\tan(3x)$ 的周期和两条相邻渐近线。" },
        commonTraps: [
          { en: "Using $\\frac{2\\pi}{b}$ instead of $\\frac{\\pi}{b}$ for tangent's period", zh: "正切的周期用 $\\frac{2\\pi}{b}$ 而非 $\\frac{\\pi}{b}$" },
        ],
      },
      {
        id: "pt-4-6-2",
        title: { en: "Find Period and Asymptotes of Cotangent", zh: "求余切函数的周期和渐近线" },
        description: { en: "Given $y = a\\cot(bx)$, find period and asymptotes.", zh: "已知 $y = a\\cot(bx)$，求周期和渐近线。" },
        howToRecognize: { en: "Cotangent function; asked for period or asymptotes.", zh: "余切函数；要求周期或渐近线。" },
        steps: [
          { en: "Period $= \\frac{\\pi}{|b|}$", zh: "周期 $= \\frac{\\pi}{|b|}$" },
          { en: "Asymptotes: solve $bx = n\\pi$ ($n$ integer)", zh: "渐近线：解 $bx = n\\pi$（$n$ 为整数）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the period and asymptotes of $y = \\cot(\\frac{\\pi}{2}x)$.", zh: "求 $y = \\cot(\\frac{\\pi}{2}x)$ 的周期和渐近线。" },
        commonTraps: [
          { en: "Confusing cotangent asymptotes ($x = n\\pi/b$) with tangent asymptotes", zh: "把余切渐近线（$x = n\\pi/b$）与正切渐近线搞混" },
        ],
      },
      {
        id: "pt-4-6-3",
        title: { en: "Identify Asymptotes of Secant/Cosecant", zh: "识别正割/余割的渐近线" },
        description: { en: "Find vertical asymptotes from the zeros of the reciprocal function.", zh: "从倒数函数的零点求垂直渐近线。" },
        howToRecognize: { en: "Secant or cosecant function; asked for asymptotes or domain.", zh: "正割或余割函数；要求渐近线或定义域。" },
        steps: [
          { en: "For $\\sec(bx - c)$: find where $\\cos(bx - c) = 0$", zh: "对 $\\sec(bx - c)$：找 $\\cos(bx - c) = 0$ 之处" },
          { en: "For $\\csc(bx - c)$: find where $\\sin(bx - c) = 0$", zh: "对 $\\csc(bx - c)$：找 $\\sin(bx - c) = 0$ 之处" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the vertical asymptotes of $y = \\csc(2x)$ on $[0, 2\\pi]$.", zh: "求 $y = \\csc(2x)$ 在 $[0, 2\\pi]$ 上的垂直渐近线。" },
        commonTraps: [
          { en: "Missing asymptotes because you only solved for the first few zeros", zh: "只解出前几个零点而遗漏了渐近线" },
        ],
      },
      {
        id: "pt-4-6-4",
        title: { en: "State Domain and Range", zh: "给出定义域和值域" },
        description: { en: "State the domain and range of tan, cot, sec, or csc.", zh: "给出 tan、cot、sec 或 csc 的定义域和值域。" },
        howToRecognize: { en: "Problem asks for domain or range of one of these four functions.", zh: "题目要求这四个函数之一的定义域或值域。" },
        steps: [
          { en: "Domain: exclude asymptote locations", zh: "定义域：去掉渐近线位置" },
          { en: "Range: tan and cot → $(-\\infty, \\infty)$; sec and csc → $(-\\infty, -1] \\cup [1, \\infty)$", zh: "值域：tan 和 cot → $(-\\infty, \\infty)$；sec 和 csc → $(-\\infty, -1] \\cup [1, \\infty)$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "State the domain and range of $y = \\sec x$.", zh: "给出 $y = \\sec x$ 的定义域和值域。" },
        commonTraps: [
          { en: "Including values between $-1$ and $1$ in the range of secant", zh: "把 $-1$ 到 $1$ 之间的值算入正割的值域" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-4-6-5",
        title: { en: "Graph a Transformed Tangent Function", zh: "画变换正切函数图像" },
        description: { en: "Graph $y = a\\tan(bx - c) + d$ by finding asymptotes and key points.", zh: "通过求渐近线和关键点画 $y = a\\tan(bx - c) + d$。" },
        howToRecognize: { en: "Tangent equation with transformations; asked to graph.", zh: "含变换的正切方程；要求画图。" },
        steps: [
          { en: "Find two consecutive asymptotes by solving $bx - c = -\\frac{\\pi}{2}$ and $bx - c = \\frac{\\pi}{2}$", zh: "解 $bx - c = -\\frac{\\pi}{2}$ 和 $bx - c = \\frac{\\pi}{2}$ 求两条相邻渐近线" },
          { en: "Find the midpoint (where $\\tan = 0$ before shift) and quarter points", zh: "求中点（平移前 $\\tan = 0$ 处）和四分点" },
          { en: "Apply vertical stretch $a$ and shift $d$, then sketch", zh: "应用纵向伸缩 $a$ 和平移 $d$，然后画图" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Graph $y = 2\\tan(x - \\frac{\\pi}{4})$ over one period.", zh: "画 $y = 2\\tan(x - \\frac{\\pi}{4})$ 的一个周期。" },
        commonTraps: [
          { en: "Forgetting that the asymptotes also shift by the phase shift", zh: "忘记渐近线也随相位移移动" },
        ],
      },
      {
        id: "pt-4-6-6",
        title: { en: "Graph Cosecant via Sine", zh: "借助正弦画余割图像" },
        description: { en: "Sketch $y = \\csc(bx)$ by first graphing $y = \\sin(bx)$ as a guide.", zh: "先画 $y = \\sin(bx)$ 作辅助线，再画 $y = \\csc(bx)$。" },
        howToRecognize: { en: "Cosecant function; graphing requested.", zh: "余割函数；要求画图。" },
        steps: [
          { en: "Sketch $y = \\sin(bx)$ lightly (as a guide curve)", zh: "轻画 $y = \\sin(bx)$（作为辅助曲线）" },
          { en: "Draw vertical asymptotes where $\\sin = 0$", zh: "在 $\\sin = 0$ 处画垂直渐近线" },
          { en: "At each max/min of sine, plot the corresponding $\\csc$ value (reciprocal)", zh: "在正弦的每个极值处标 $\\csc$ 值（取倒数）" },
          { en: "Draw U-shaped curves opening away from the $x$-axis", zh: "画远离 $x$ 轴开口的 U 形曲线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Graph $y = \\csc(2x)$ over $[0, 2\\pi]$.", zh: "在 $[0, 2\\pi]$ 上画 $y = \\csc(2x)$。" },
        commonTraps: [
          { en: "Drawing the U-curves through the sine wave instead of away from it", zh: "把 U 形曲线画穿正弦波而非远离它" },
        ],
      },
      {
        id: "pt-4-6-7",
        title: { en: "Graph Secant via Cosine", zh: "借助余弦画正割图像" },
        description: { en: "Sketch $y = a\\sec(bx - c) + d$ using the cosine guide curve.", zh: "用余弦辅助曲线画 $y = a\\sec(bx - c) + d$。" },
        howToRecognize: { en: "Secant function with transformations; graphing requested.", zh: "含变换的正割函数；要求画图。" },
        steps: [
          { en: "Sketch the guide curve $y = a\\cos(bx - c) + d$", zh: "画辅助曲线 $y = a\\cos(bx - c) + d$" },
          { en: "Draw asymptotes where cosine crosses its midline", zh: "在余弦过中线处画渐近线" },
          { en: "Draw U-curves at each peak and valley of cosine", zh: "在余弦的每个波峰和波谷处画 U 形曲线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Graph $y = \\sec(x - \\frac{\\pi}{2})$ over $[-\\pi, 3\\pi]$.", zh: "在 $[-\\pi, 3\\pi]$ 上画 $y = \\sec(x - \\frac{\\pi}{2})$。" },
        commonTraps: [
          { en: "Not shifting the asymptotes when there is a phase shift", zh: "有相位移时忘记移动渐近线" },
        ],
      },
      {
        id: "pt-4-6-8",
        title: { en: "Graph a Transformed Cotangent Function", zh: "画变换余切函数图像" },
        description: { en: "Graph $y = a\\cot(bx - c) + d$.", zh: "画 $y = a\\cot(bx - c) + d$ 的图像。" },
        howToRecognize: { en: "Cotangent function with transformations.", zh: "含变换的余切函数。" },
        steps: [
          { en: "Find two consecutive asymptotes: $bx - c = 0$ and $bx - c = \\pi$", zh: "求两条相邻渐近线：$bx - c = 0$ 和 $bx - c = \\pi$" },
          { en: "Find the midpoint (where $\\cot = 0$) and quarter points", zh: "求中点（$\\cot = 0$ 处）和四分点" },
          { en: "Apply vertical stretch and shift, sketch the decreasing curve", zh: "应用纵向伸缩和平移，画递减曲线" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Graph $y = -\\cot(x + \\frac{\\pi}{4})$ over one period.", zh: "画 $y = -\\cot(x + \\frac{\\pi}{4})$ 的一个周期。" },
        commonTraps: [
          { en: "Confusing cotangent's decreasing nature with tangent's increasing shape", zh: "把余切的递减特性与正切的递增形状搞混" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-4-6-9",
        title: { en: "Match Equation to Graph", zh: "方程与图像匹配" },
        description: { en: "Given several graphs and equations of tan/cot/sec/csc, match them.", zh: "给出多个 tan/cot/sec/csc 的图像和方程，进行匹配。" },
        howToRecognize: { en: "Multiple graphs and equations; asked to pair them up.", zh: "多个图像和方程；要求配对。" },
        steps: [
          { en: "Check asymptote locations to narrow down the function type", zh: "检查渐近线位置以缩小函数类型" },
          { en: "Determine the period to identify $b$", zh: "确定周期以找出 $b$" },
          { en: "Check increasing/decreasing behavior and vertical stretch", zh: "检查递增/递减行为和纵向伸缩" },
          { en: "Verify with a specific point", zh: "用一个具体点验证" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Match each equation to its graph: (a) $y = 2\\tan(\\frac{x}{2})$, (b) $y = -\\cot x$, (c) $y = \\csc(2x)$.", zh: "将每个方程与其图像匹配：(a) $y = 2\\tan(\\frac{x}{2})$，(b) $y = -\\cot x$，(c) $y = \\csc(2x)$。" },
        commonTraps: [
          { en: "Confusing $\\cot$ (decreasing between asymptotes) with $\\tan$ (increasing between asymptotes)", zh: "搞混 $\\cot$（渐近线间递减）和 $\\tan$（渐近线间递增）" },
        ],
      },
      {
        id: "pt-4-6-10",
        title: { en: "Write Equation from Tangent/Cotangent Graph", zh: "由正切/余切图像写方程" },
        description: { en: "Determine the equation of a tangent or cotangent function from its graph.", zh: "由正切或余切函数的图像确定方程。" },
        howToRecognize: { en: "Graph of a tangent/cotangent curve is given; asked for the equation.", zh: "给出正切/余切曲线的图像；要求写方程。" },
        steps: [
          { en: "Identify two consecutive asymptotes — their distance is the period", zh: "找两条相邻渐近线——间距即周期" },
          { en: "Compute $b$: for tan/cot, $b = \\frac{\\pi}{\\text{period}}$", zh: "算 $b$：对 tan/cot，$b = \\frac{\\pi}{\\text{周期}}$" },
          { en: "Find the phase shift from the asymptote or zero location", zh: "由渐近线或零点位置确定相位移" },
          { en: "Check a point to determine $a$ (vertical stretch) and $d$", zh: "代入一个点确定 $a$（纵向伸缩）和 $d$" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A tangent curve has consecutive asymptotes at $x = -1$ and $x = 3$, passes through $(1, 2)$. Write the equation.", zh: "正切曲线的相邻渐近线在 $x = -1$ 和 $x = 3$，过点 $(1, 2)$，写出方程。" },
        commonTraps: [
          { en: "Forgetting to account for vertical shift when reading the graph's midline", zh: "读图时忘记考虑垂直平移" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Evaluate $\\arcsin x$, $\\arccos x$, and $\\arctan x$", zh: "求 $\\arcsin x$、$\\arccos x$ 和 $\\arctan x$ 的值" },
      { en: "Understand the restricted domains used to define inverse trig functions", zh: "理解定义反三角函数所用的限制定义域" },
      { en: "Graph the three primary inverse trig functions", zh: "画三个主要反三角函数的图像" },
      { en: "Evaluate compositions of trig and inverse trig functions", zh: "求三角函数与反三角函数的复合值" },
    ],
    keyConcepts: [
      {
        id: "kc-4-7-1",
        title: { en: "Inverse Sine ($\\arcsin$ or $\\sin^{-1}$)", zh: "反正弦（$\\arcsin$ 或 $\\sin^{-1}$）" },
        explanation: {
          en: "$y = \\arcsin x$ means $\\sin y = x$ where $-\\frac{\\pi}{2} \\leq y \\leq \\frac{\\pi}{2}$. Domain: $[-1, 1]$. Range: $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$. The restricted range ensures the function is one-to-one. The output is always an angle in QI or QIV (or on the boundary).",
          zh: "$y = \\arcsin x$ 意为 $\\sin y = x$，其中 $-\\frac{\\pi}{2} \\leq y \\leq \\frac{\\pi}{2}$。定义域：$[-1, 1]$。值域：$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$。限制值域保证函数一一对应。输出角始终在第一或第四象限（或边界上）。",
        },
        whenToUse: { en: "Finding an angle whose sine is a known value", zh: "求正弦值为已知值的角" },
        commonMistake: { en: "Giving answers outside $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ — $\\arcsin$ never returns $\\frac{2\\pi}{3}$ even though $\\sin\\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{2}$", zh: "给出 $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ 之外的答案——$\\arcsin$ 不会返回 $\\frac{2\\pi}{3}$，尽管 $\\sin\\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{2}$" },
        example: { en: "$\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}$, $\\arcsin(-1) = -\\frac{\\pi}{2}$", zh: "$\\arcsin(\\frac{1}{2}) = \\frac{\\pi}{6}$，$\\arcsin(-1) = -\\frac{\\pi}{2}$" },
      },
      {
        id: "kc-4-7-2",
        title: { en: "Inverse Cosine ($\\arccos$ or $\\cos^{-1}$)", zh: "反余弦（$\\arccos$ 或 $\\cos^{-1}$）" },
        explanation: {
          en: "$y = \\arccos x$ means $\\cos y = x$ where $0 \\leq y \\leq \\pi$. Domain: $[-1, 1]$. Range: $[0, \\pi]$. The output is always an angle in QI or QII (or on the boundary).",
          zh: "$y = \\arccos x$ 意为 $\\cos y = x$，其中 $0 \\leq y \\leq \\pi$。定义域：$[-1, 1]$。值域：$[0, \\pi]$。输出角始终在第一或第二象限（或边界上）。",
        },
        whenToUse: { en: "Finding an angle whose cosine is a known value", zh: "求余弦值为已知值的角" },
        commonMistake: { en: "Returning a negative angle — $\\arccos$ always returns $[0, \\pi]$", zh: "返回负角——$\\arccos$ 总是返回 $[0, \\pi]$ 范围的值" },
        example: { en: "$\\arccos(\\frac{\\sqrt{2}}{2}) = \\frac{\\pi}{4}$, $\\arccos(-1) = \\pi$", zh: "$\\arccos(\\frac{\\sqrt{2}}{2}) = \\frac{\\pi}{4}$，$\\arccos(-1) = \\pi$" },
      },
      {
        id: "kc-4-7-3",
        title: { en: "Inverse Tangent ($\\arctan$ or $\\tan^{-1}$)", zh: "反正切（$\\arctan$ 或 $\\tan^{-1}$）" },
        explanation: {
          en: "$y = \\arctan x$ means $\\tan y = x$ where $-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}$. Domain: $(-\\infty, \\infty)$. Range: $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$. The graph has horizontal asymptotes at $y = \\pm\\frac{\\pi}{2}$.",
          zh: "$y = \\arctan x$ 意为 $\\tan y = x$，其中 $-\\frac{\\pi}{2} < y < \\frac{\\pi}{2}$。定义域：$(-\\infty, \\infty)$。值域：$(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$。图像有水平渐近线 $y = \\pm\\frac{\\pi}{2}$。",
        },
        whenToUse: { en: "Finding an angle whose tangent is a known value", zh: "求正切值为已知值的角" },
        commonMistake: { en: "Giving $\\arctan(-1) = \\frac{3\\pi}{4}$ — must be in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, so the answer is $-\\frac{\\pi}{4}$", zh: "给出 $\\arctan(-1) = \\frac{3\\pi}{4}$——必须在 $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ 内，答案是 $-\\frac{\\pi}{4}$" },
        example: { en: "$\\arctan(1) = \\frac{\\pi}{4}$, $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$", zh: "$\\arctan(1) = \\frac{\\pi}{4}$，$\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$" },
      },
    ],
    formulas: [
      {
        id: "f-4-7-1",
        name: { en: "Inverse Trig Function Domains and Ranges", zh: "反三角函数的定义域和值域" },
        formula: "\\arcsin: [-1,1] \\to [-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}], \\quad \\arccos: [-1,1] \\to [0, \\pi], \\quad \\arctan: \\mathbb{R} \\to (-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})",
        variables: [
          { en: "Each inverse function reverses its parent on the restricted domain", zh: "每个反函数在限制定义域上逆转其原函数" },
        ],
        whenToUse: { en: "Checking whether an input is valid and predicting the output range", zh: "检查输入是否有效并预测输出范围" },
        commonProblemTypes: [
          { en: "State domain and range of an inverse trig function", zh: "给出反三角函数的定义域和值域" },
          { en: "Determine if a value is in the domain", zh: "判断一个值是否在定义域内" },
        ],
        example: { en: "$\\arcsin(2)$ is undefined since $2 \\notin [-1, 1]$", zh: "$\\arcsin(2)$ 无定义，因为 $2 \\notin [-1, 1]$" },
      },
      {
        id: "f-4-7-2",
        name: { en: "Cancellation Properties", zh: "抵消性质" },
        formula: "\\sin(\\arcsin x) = x \\; (|x| \\leq 1), \\quad \\arcsin(\\sin \\theta) = \\theta \\; (-\\tfrac{\\pi}{2} \\leq \\theta \\leq \\tfrac{\\pi}{2})",
        variables: [
          { en: "Similar rules for $\\cos/\\arccos$ and $\\tan/\\arctan$ with their respective restricted ranges", zh: "对 $\\cos/\\arccos$ 和 $\\tan/\\arctan$ 有类似规则，各用其限制值域" },
        ],
        whenToUse: { en: "Simplifying compositions of trig and inverse trig functions", zh: "化简三角函数与反三角函数的复合" },
        commonProblemTypes: [
          { en: "Simplify $\\sin(\\arcsin x)$ or $\\arcsin(\\sin \\theta)$", zh: "化简 $\\sin(\\arcsin x)$ 或 $\\arcsin(\\sin \\theta)$" },
          { en: "Evaluate nested compositions like $\\cos(\\arctan x)$", zh: "求嵌套复合如 $\\cos(\\arctan x)$ 的值" },
        ],
        example: { en: "$\\arcsin(\\sin \\frac{5\\pi}{6}) = \\frac{\\pi}{6}$ (not $\\frac{5\\pi}{6}$, since $\\frac{5\\pi}{6} \\notin [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$)", zh: "$\\arcsin(\\sin \\frac{5\\pi}{6}) = \\frac{\\pi}{6}$（不是 $\\frac{5\\pi}{6}$，因为 $\\frac{5\\pi}{6} \\notin [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$）" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-4-7-1",
        title: { en: "Evaluate Inverse Trig at Standard Values", zh: "求标准值处的反三角函数" },
        description: { en: "Find exact values like $\\arcsin(\\frac{1}{2})$ or $\\arccos(0)$.", zh: "求精确值如 $\\arcsin(\\frac{1}{2})$ 或 $\\arccos(0)$。" },
        howToRecognize: { en: "Input is a standard unit-circle value; output is an angle.", zh: "输入为标准单位圆值；输出为角。" },
        steps: [
          { en: "Ask: which angle in the restricted range has this trig value?", zh: "问：限制值域中哪个角有此三角函数值？" },
          { en: "Recall unit-circle values", zh: "回忆单位圆值" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find $\\arcsin(\\frac{\\sqrt{3}}{2})$ and $\\arccos(-\\frac{1}{2})$.", zh: "求 $\\arcsin(\\frac{\\sqrt{3}}{2})$ 和 $\\arccos(-\\frac{1}{2})$。" },
        commonTraps: [
          { en: "Giving $\\arccos(-\\frac{1}{2}) = -\\frac{\\pi}{3}$ instead of $\\frac{2\\pi}{3}$ — arccos range is $[0, \\pi]$", zh: "给出 $\\arccos(-\\frac{1}{2}) = -\\frac{\\pi}{3}$ 而非 $\\frac{2\\pi}{3}$——arccos 值域是 $[0, \\pi]$" },
        ],
      },
      {
        id: "pt-4-7-2",
        title: { en: "Evaluate $\\arctan$ at Standard Values", zh: "求标准值处的 $\\arctan$" },
        description: { en: "Find $\\arctan(0)$, $\\arctan(1)$, $\\arctan(\\sqrt{3})$, etc.", zh: "求 $\\arctan(0)$、$\\arctan(1)$、$\\arctan(\\sqrt{3})$ 等。" },
        howToRecognize: { en: "Input to $\\arctan$ is a known tangent value.", zh: "输入 $\\arctan$ 的值为已知正切值。" },
        steps: [
          { en: "Find the angle in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ whose tangent equals the input", zh: "在 $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ 中找正切值等于输入的角" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find $\\arctan(-\\sqrt{3})$.", zh: "求 $\\arctan(-\\sqrt{3})$。" },
        commonTraps: [
          { en: "Saying $\\arctan(-\\sqrt{3}) = \\frac{2\\pi}{3}$ — must be in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$, answer is $-\\frac{\\pi}{3}$", zh: "说 $\\arctan(-\\sqrt{3}) = \\frac{2\\pi}{3}$——必须在 $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ 内，答案是 $-\\frac{\\pi}{3}$" },
        ],
      },
      {
        id: "pt-4-7-3",
        title: { en: "State Domain and Range of Inverse Trig", zh: "给出反三角函数的定义域和值域" },
        description: { en: "State the domain and range of $\\arcsin$, $\\arccos$, or $\\arctan$.", zh: "给出 $\\arcsin$、$\\arccos$ 或 $\\arctan$ 的定义域和值域。" },
        howToRecognize: { en: "Problem asks for domain/range of an inverse trig function.", zh: "题目要求反三角函数的定义域/值域。" },
        steps: [
          { en: "Recall the restricted ranges for each function", zh: "回忆各函数的限制值域" },
          { en: "Domain of $\\arcsin$ and $\\arccos$: $[-1, 1]$; domain of $\\arctan$: all reals", zh: "$\\arcsin$ 和 $\\arccos$ 的定义域：$[-1, 1]$；$\\arctan$ 的定义域：全体实数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "State the domain and range of $y = \\arccos x$.", zh: "给出 $y = \\arccos x$ 的定义域和值域。" },
        commonTraps: [
          { en: "Confusing domain and range — domain is the set of valid inputs, range is the set of outputs", zh: "搞混定义域和值域——定义域是有效输入集，值域是输出集" },
        ],
      },
      {
        id: "pt-4-7-4",
        title: { en: "Direct Cancellation: $\\sin(\\arcsin x)$", zh: "直接抵消：$\\sin(\\arcsin x)$" },
        description: { en: "Simplify an outer trig composed with its own inverse.", zh: "化简外层三角函数与其自身反函数的复合。" },
        howToRecognize: { en: "Expression has the form $\\sin(\\arcsin x)$ or $\\cos(\\arccos x)$, etc.", zh: "表达式形如 $\\sin(\\arcsin x)$ 或 $\\cos(\\arccos x)$ 等。" },
        steps: [
          { en: "Check that $x$ is in the domain of the inverse function", zh: "检查 $x$ 是否在反函数的定义域内" },
          { en: "If so, $\\sin(\\arcsin x) = x$", zh: "若是，$\\sin(\\arcsin x) = x$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Evaluate $\\cos(\\arccos \\frac{3}{5})$.", zh: "求 $\\cos(\\arccos \\frac{3}{5})$。" },
        commonTraps: [
          { en: "Applying cancellation when $x$ is outside the domain (e.g., $\\arcsin(2)$ is undefined)", zh: "当 $x$ 在定义域之外时仍进行抵消（如 $\\arcsin(2)$ 无定义）" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-4-7-5",
        title: { en: "Reverse Cancellation: $\\arcsin(\\sin \\theta)$", zh: "反向抵消：$\\arcsin(\\sin \\theta)$" },
        description: { en: "Evaluate $\\arcsin(\\sin \\theta)$ when $\\theta$ may be outside the restricted range.", zh: "当 $\\theta$ 可能在限制值域之外时，求 $\\arcsin(\\sin \\theta)$。" },
        howToRecognize: { en: "Expression like $\\arcsin(\\sin \\frac{5\\pi}{6})$.", zh: "表达式如 $\\arcsin(\\sin \\frac{5\\pi}{6})$。" },
        steps: [
          { en: "Check if $\\theta$ is in the restricted range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$", zh: "检查 $\\theta$ 是否在限制值域 $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ 内" },
          { en: "If yes: answer is $\\theta$. If no: find the angle in the range with the same sine value", zh: "若是：答案为 $\\theta$。若否：找值域内有相同正弦值的角" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Evaluate $\\arcsin(\\sin \\frac{7\\pi}{6})$.", zh: "求 $\\arcsin(\\sin \\frac{7\\pi}{6})$。" },
        commonTraps: [
          { en: "Saying the answer is $\\frac{7\\pi}{6}$ — it's outside $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$; correct answer is $-\\frac{\\pi}{6}$", zh: "说答案是 $\\frac{7\\pi}{6}$——它不在 $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ 内；正确答案是 $-\\frac{\\pi}{6}$" },
        ],
      },
      {
        id: "pt-4-7-6",
        title: { en: "Composition: Different Trig and Inverse Trig", zh: "不同三角函数与反三角函数的复合" },
        description: { en: "Evaluate expressions like $\\cos(\\arcsin \\frac{3}{5})$ or $\\tan(\\arccos x)$.", zh: "求类似 $\\cos(\\arcsin \\frac{3}{5})$ 或 $\\tan(\\arccos x)$ 的值。" },
        howToRecognize: { en: "Outer function differs from the inner inverse (e.g., $\\cos(\\arcsin \\cdot)$).", zh: "外层函数与内层反函数不同（如 $\\cos(\\arcsin \\cdot)$）。" },
        steps: [
          { en: "Let $\\theta = \\arcsin(\\frac{3}{5})$, so $\\sin\\theta = \\frac{3}{5}$ with $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$", zh: "设 $\\theta = \\arcsin(\\frac{3}{5})$，则 $\\sin\\theta = \\frac{3}{5}$，$\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$" },
          { en: "Draw a right triangle with opp $= 3$, hyp $= 5$, find adj $= 4$", zh: "画直角三角形，对边 $= 3$，斜边 $= 5$，求邻边 $= 4$" },
          { en: "Read off the desired ratio: $\\cos\\theta = \\frac{4}{5}$", zh: "读出所求比值：$\\cos\\theta = \\frac{4}{5}$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find $\\cos(\\arcsin \\frac{5}{13})$.", zh: "求 $\\cos(\\arcsin \\frac{5}{13})$。" },
        commonTraps: [
          { en: "Forgetting to consider the sign — in the arcsin range, cosine is always non-negative", zh: "忘记考虑符号——在 arcsin 的值域中，余弦始终非负" },
        ],
      },
      {
        id: "pt-4-7-7",
        title: { en: "Composition with Variable: $\\sin(\\arccos x)$", zh: "含变量的复合：$\\sin(\\arccos x)$" },
        description: { en: "Express a composition as an algebraic expression in $x$.", zh: "将复合表达为 $x$ 的代数表达式。" },
        howToRecognize: { en: "The inner value is a variable $x$, not a number.", zh: "内层值为变量 $x$，而非数字。" },
        steps: [
          { en: "Let $\\theta = \\arccos x$, so $\\cos\\theta = x$, $\\theta \\in [0, \\pi]$", zh: "设 $\\theta = \\arccos x$，则 $\\cos\\theta = x$，$\\theta \\in [0, \\pi]$" },
          { en: "Draw a triangle: adj $= x$, hyp $= 1$, opp $= \\sqrt{1 - x^2}$", zh: "画三角形：邻边 $= x$，斜边 $= 1$，对边 $= \\sqrt{1 - x^2}$" },
          { en: "$\\sin(\\arccos x) = \\sqrt{1 - x^2}$ (positive since $\\theta \\in [0, \\pi]$)", zh: "$\\sin(\\arccos x) = \\sqrt{1 - x^2}$（为正，因 $\\theta \\in [0, \\pi]$）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Write $\\tan(\\arcsin x)$ as an algebraic expression for $|x| < 1$.", zh: "将 $\\tan(\\arcsin x)$ 写为 $|x| < 1$ 时的代数表达式。" },
        commonTraps: [
          { en: "Dropping the $\\pm$ — use the sign determined by the restricted range of the inverse function", zh: "丢掉 $\\pm$——应由反函数限制值域决定符号" },
        ],
      },
      {
        id: "pt-4-7-8",
        title: { en: "Graph an Inverse Trig Function", zh: "画反三角函数图像" },
        description: { en: "Sketch $y = \\arcsin x$, $y = \\arccos x$, or $y = \\arctan x$.", zh: "画 $y = \\arcsin x$、$y = \\arccos x$ 或 $y = \\arctan x$ 的图像。" },
        howToRecognize: { en: "Problem asks for the graph of an inverse trig function.", zh: "题目要求画反三角函数图像。" },
        steps: [
          { en: "Plot key points (e.g., $\\arcsin$: $(-1, -\\frac{\\pi}{2})$, $(0, 0)$, $(1, \\frac{\\pi}{2})$)", zh: "标关键点（如 $\\arcsin$：$(-1, -\\frac{\\pi}{2})$、$(0, 0)$、$(1, \\frac{\\pi}{2})$）" },
          { en: "Note the domain restriction on the $x$-axis", zh: "注意 $x$ 轴上的定义域限制" },
          { en: "For $\\arctan$: draw horizontal asymptotes at $y = \\pm\\frac{\\pi}{2}$", zh: "对 $\\arctan$：画水平渐近线 $y = \\pm\\frac{\\pi}{2}$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Sketch the graph of $y = \\arctan x$ and label key features.", zh: "画 $y = \\arctan x$ 的图像并标注关键特征。" },
        commonTraps: [
          { en: "Drawing the graph over all $x$ for arcsin/arccos — they're only defined on $[-1, 1]$", zh: "对 arcsin/arccos 画全体 $x$ 的图——它们仅在 $[-1, 1]$ 上有定义" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-4-7-9",
        title: { en: "Nested Inverse Trig Composition", zh: "嵌套反三角复合" },
        description: { en: "Evaluate complex compositions like $\\sin(2\\arccos \\frac{3}{5})$ using double-angle formulas.", zh: "用倍角公式求复杂复合如 $\\sin(2\\arccos \\frac{3}{5})$。" },
        howToRecognize: { en: "A multiple-angle expression wraps an inverse trig function.", zh: "倍角表达式包裹反三角函数。" },
        steps: [
          { en: "Let $\\theta = \\arccos \\frac{3}{5}$, find $\\sin\\theta$ and $\\cos\\theta$ via triangle", zh: "设 $\\theta = \\arccos \\frac{3}{5}$，用三角形求 $\\sin\\theta$ 和 $\\cos\\theta$" },
          { en: "Apply double-angle: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$", zh: "用倍角公式：$\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$" },
          { en: "Compute: $2 \\cdot \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{24}{25}$", zh: "计算：$2 \\cdot \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{24}{25}$" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find $\\cos(2\\arcsin \\frac{5}{13})$.", zh: "求 $\\cos(2\\arcsin \\frac{5}{13})$。" },
        commonTraps: [
          { en: "Forgetting to use the double-angle formula and trying to compute $2\\arcsin(\\frac{5}{13})$ directly", zh: "忘记用倍角公式，试图直接计算 $2\\arcsin(\\frac{5}{13})$" },
        ],
      },
      {
        id: "pt-4-7-10",
        title: { en: "Algebraic Simplification of Inverse Trig Composition", zh: "反三角复合的代数化简" },
        description: { en: "Express compositions like $\\sec(\\arctan x)$ as algebraic expressions.", zh: "将 $\\sec(\\arctan x)$ 等复合表达为代数表达式。" },
        howToRecognize: { en: "Composition of trig and inverse trig with variable input; asked for algebraic form.", zh: "含变量输入的三角函数与反三角函数复合；要求代数形式。" },
        steps: [
          { en: "Let $\\theta = \\arctan x$, so $\\tan\\theta = x$ with $\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$", zh: "设 $\\theta = \\arctan x$，则 $\\tan\\theta = x$，$\\theta \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$" },
          { en: "Draw triangle: opp $= x$, adj $= 1$, hyp $= \\sqrt{1 + x^2}$", zh: "画三角形：对边 $= x$，邻边 $= 1$，斜边 $= \\sqrt{1 + x^2}$" },
          { en: "$\\sec\\theta = \\frac{\\text{hyp}}{\\text{adj}} = \\sqrt{1 + x^2}$", zh: "$\\sec\\theta = \\frac{\\text{斜边}}{\\text{邻边}} = \\sqrt{1 + x^2}$" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Write $\\csc(\\arccos x)$ as an algebraic expression.", zh: "将 $\\csc(\\arccos x)$ 写为代数表达式。" },
        commonTraps: [
          { en: "Using the wrong triangle sides — label opp, adj, hyp carefully based on which inverse trig is given", zh: "三角形边标错——根据给出的是哪个反三角函数仔细标注对边、邻边、斜边" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Solve applied problems using right triangle trigonometry", zh: "用直角三角形三角学解决应用问题" },
      { en: "Solve problems involving bearings and navigation", zh: "解决涉及方位角和导航的问题" },
      { en: "Model and solve simple harmonic motion problems", zh: "建模并求解简谐运动问题" },
      { en: "Use trigonometric models for real-world periodic phenomena", zh: "用三角模型描述现实中的周期现象" },
    ],
    keyConcepts: [
      {
        id: "kc-4-8-1",
        title: { en: "Bearings and Navigation", zh: "方位角与导航" },
        explanation: {
          en: "A bearing describes direction as an angle measured clockwise from due north (or expressed as N/S followed by degrees E/W). For example, N 40° E means start facing north, rotate 40° toward east. S 25° W means start facing south, rotate 25° toward west. These problems always reduce to right triangles.",
          zh: "方位角用从正北方向顺时针量的角度（或 N/S 加度数加 E/W）来描述方向。例如 N 40° E 意为面朝北、向东偏转 40°。S 25° W 意为面朝南、向西偏转 25°。这类问题总能化为直角三角形。",
        },
        whenToUse: { en: "Navigation, surveying, and direction problems", zh: "导航、测量和方向问题" },
        commonMistake: { en: "Measuring the bearing angle from east (like standard position) instead of from north", zh: "从东方（如标准位置角）而非从北方量方位角" },
        example: { en: "Bearing N 60° E with distance 200 mi: north component $= 200\\cos 60° = 100$, east component $= 200\\sin 60° \\approx 173$", zh: "方位角 N 60° E、距离 200 mi：北分量 $= 200\\cos 60° = 100$，东分量 $= 200\\sin 60° \\approx 173$" },
      },
      {
        id: "kc-4-8-2",
        title: { en: "Simple Harmonic Motion", zh: "简谐运动" },
        explanation: {
          en: "Simple harmonic motion is modeled by $d = a\\sin(\\omega t)$ or $d = a\\cos(\\omega t)$, where $d$ is displacement from equilibrium, $|a|$ is the amplitude (maximum displacement), $\\omega$ is the angular frequency, period $= \\frac{2\\pi}{\\omega}$, and frequency $= \\frac{\\omega}{2\\pi}$ (cycles per unit time).",
          zh: "简谐运动由 $d = a\\sin(\\omega t)$ 或 $d = a\\cos(\\omega t)$ 建模，其中 $d$ 为相对平衡位置的位移，$|a|$ 为振幅（最大位移），$\\omega$ 为角频率，周期 $= \\frac{2\\pi}{\\omega}$，频率 $= \\frac{\\omega}{2\\pi}$（每单位时间的周期数）。",
        },
        whenToUse: { en: "Springs, pendulums, sound waves, and other oscillating systems", zh: "弹簧、钟摆、声波及其他振荡系统" },
        commonMistake: { en: "Confusing angular frequency $\\omega$ with frequency $f$ — $f = \\frac{\\omega}{2\\pi}$", zh: "混淆角频率 $\\omega$ 与频率 $f$——$f = \\frac{\\omega}{2\\pi}$" },
        example: { en: "$d = 4\\cos(3t)$: amplitude $= 4$, period $= \\frac{2\\pi}{3}$, frequency $= \\frac{3}{2\\pi}$", zh: "$d = 4\\cos(3t)$：振幅 $= 4$，周期 $= \\frac{2\\pi}{3}$，频率 $= \\frac{3}{2\\pi}$" },
      },
      {
        id: "kc-4-8-3",
        title: { en: "Multi-Step Application Strategy", zh: "多步应用策略" },
        explanation: {
          en: "Many real-world trig problems require: (1) draw a diagram, (2) label known and unknown quantities, (3) identify the right triangle(s), (4) choose the appropriate trig ratio, (5) solve and interpret the result in context. Always check: does the answer make physical sense?",
          zh: "许多实际三角问题需要：(1) 画图，(2) 标注已知和未知量，(3) 找出直角三角形，(4) 选择合适的三角比，(5) 求解并在情境中解释结果。始终检查：答案在物理上是否合理？",
        },
        whenToUse: { en: "Any applied trig problem — follow this systematic approach", zh: "任何三角应用题——按此系统方法进行" },
        commonMistake: { en: "Skipping the diagram — most errors come from mislabeled triangles", zh: "跳过画图——大多数错误源于三角形标注错误" },
        example: { en: "A surveyor measures angles from two points to find the width of a river — set up two triangles sharing the river width as a side", zh: "测量员从两点量角以求河宽——建立共享河宽为一边的两个三角形" },
      },
    ],
    formulas: [
      {
        id: "f-4-8-1",
        name: { en: "Simple Harmonic Motion", zh: "简谐运动" },
        formula: "d = a\\sin(\\omega t) \\quad \\text{or} \\quad d = a\\cos(\\omega t)",
        variables: [
          { en: "$d$ — displacement from equilibrium at time $t$", zh: "$d$ — 时刻 $t$ 时相对平衡位置的位移" },
          { en: "$|a|$ — amplitude (maximum displacement)", zh: "$|a|$ — 振幅（最大位移）" },
          { en: "$\\omega$ — angular frequency (rad/time)", zh: "$\\omega$ — 角频率（弧度/时间）" },
          { en: "Period $= \\frac{2\\pi}{\\omega}$, Frequency $= \\frac{\\omega}{2\\pi}$", zh: "周期 $= \\frac{2\\pi}{\\omega}$，频率 $= \\frac{\\omega}{2\\pi}$" },
        ],
        whenToUse: { en: "Modeling oscillations: springs, pendulums, sound, electromagnetic waves", zh: "建模振荡：弹簧、钟摆、声波、电磁波" },
        commonProblemTypes: [
          { en: "Find amplitude, period, and frequency from the equation", zh: "由方程求振幅、周期和频率" },
          { en: "Write the equation given physical parameters", zh: "由物理参数写方程" },
          { en: "Find displacement at a given time", zh: "求给定时刻的位移" },
        ],
        example: { en: "A spring oscillates with $d = 6\\cos(\\pi t)$: amplitude $6$, period $2$ sec, frequency $\\frac{1}{2}$ Hz", zh: "弹簧振荡 $d = 6\\cos(\\pi t)$：振幅 $6$，周期 $2$ 秒，频率 $\\frac{1}{2}$ Hz" },
      },
      {
        id: "f-4-8-2",
        name: { en: "Bearing Components", zh: "方位角分量" },
        formula: "\\text{N/S component} = d\\cos\\theta, \\quad \\text{E/W component} = d\\sin\\theta",
        variables: [
          { en: "$d$ — distance traveled", zh: "$d$ — 行驶距离" },
          { en: "$\\theta$ — bearing angle (measured from north)", zh: "$\\theta$ — 方位角（从正北量起）" },
        ],
        whenToUse: { en: "Breaking a bearing/distance into north-south and east-west components", zh: "将方位角/距离分解为南北和东西分量" },
        commonProblemTypes: [
          { en: "Find how far north/south and east/west an object has traveled", zh: "求物体向南北和东西各走了多远" },
          { en: "Find the total distance between two points after bearing changes", zh: "方位变化后求两点间的总距离" },
        ],
        example: { en: "Bearing S 30° E, distance 50 mi: south $= 50\\cos 30° \\approx 43.3$, east $= 50\\sin 30° = 25$", zh: "方位角 S 30° E，距离 50 mi：向南 $= 50\\cos 30° \\approx 43.3$，向东 $= 50\\sin 30° = 25$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-4-8-1",
        title: { en: "Find Amplitude, Period, Frequency from SHM Equation", zh: "由简谐运动方程求振幅、周期、频率" },
        description: { en: "Read off the parameters from $d = a\\sin(\\omega t)$ or $d = a\\cos(\\omega t)$.", zh: "从 $d = a\\sin(\\omega t)$ 或 $d = a\\cos(\\omega t)$ 读取参数。" },
        howToRecognize: { en: "SHM equation given; asked for amplitude, period, or frequency.", zh: "给出简谐运动方程；要求振幅、周期或频率。" },
        steps: [
          { en: "Amplitude $= |a|$", zh: "振幅 $= |a|$" },
          { en: "Period $= \\frac{2\\pi}{\\omega}$", zh: "周期 $= \\frac{2\\pi}{\\omega}$" },
          { en: "Frequency $= \\frac{\\omega}{2\\pi}$", zh: "频率 $= \\frac{\\omega}{2\\pi}$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the amplitude, period, and frequency of $d = 3\\sin(8\\pi t)$.", zh: "求 $d = 3\\sin(8\\pi t)$ 的振幅、周期和频率。" },
        commonTraps: [
          { en: "Confusing $\\omega = 8\\pi$ with the period (period is $\\frac{2\\pi}{8\\pi} = \\frac{1}{4}$)", zh: "把 $\\omega = 8\\pi$ 当成周期（周期是 $\\frac{2\\pi}{8\\pi} = \\frac{1}{4}$）" },
        ],
      },
      {
        id: "pt-4-8-2",
        title: { en: "Find Displacement at a Given Time", zh: "求给定时刻的位移" },
        description: { en: "Substitute $t$ into the SHM equation to find $d$.", zh: "将 $t$ 代入简谐运动方程求 $d$。" },
        howToRecognize: { en: "SHM equation given; asked for $d$ at a specific $t$.", zh: "给出简谐运动方程；要求某时刻的 $d$ 值。" },
        steps: [
          { en: "Substitute $t$ into the equation", zh: "将 $t$ 代入方程" },
          { en: "Evaluate the trig function (exact or calculator)", zh: "求三角函数值（精确或用计算器）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "If $d = 5\\cos(\\pi t)$, find $d$ when $t = 1.5$ sec.", zh: "若 $d = 5\\cos(\\pi t)$，求 $t = 1.5$ 秒时的 $d$。" },
        commonTraps: [
          { en: "Calculator in degree mode when argument is in radians", zh: "参数为弧度时计算器却在角度模式" },
        ],
      },
      {
        id: "pt-4-8-3",
        title: { en: "Interpret a Bearing", zh: "解读方位角" },
        description: { en: "Convert a bearing description to a diagram and angle.", zh: "将方位角描述转化为图示和角度。" },
        howToRecognize: { en: "Problem gives a bearing like N 35° W or S 70° E.", zh: "题目给出方位角如 N 35° W 或 S 70° E。" },
        steps: [
          { en: "Draw north-south line", zh: "画南北线" },
          { en: "From north (or south), rotate the given degrees toward east (or west)", zh: "从北（或南）向东（或西）偏转给定度数" },
          { en: "Label the resulting direction", zh: "标注方向" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Sketch and interpret the bearing S 55° E.", zh: "画出并解读方位角 S 55° E。" },
        commonTraps: [
          { en: "Measuring from east/west instead of north/south", zh: "从东/西而非南/北量起" },
        ],
      },
      {
        id: "pt-4-8-4",
        title: { en: "Basic Right Triangle Application", zh: "基本直角三角形应用" },
        description: { en: "Solve a straightforward real-world right triangle problem.", zh: "解决一个简单的直角三角形实际问题。" },
        howToRecognize: { en: "Word problem with one right triangle, one unknown.", zh: "含一个直角三角形、一个未知量的应用题。" },
        steps: [
          { en: "Draw and label the right triangle", zh: "画并标注直角三角形" },
          { en: "Choose the trig ratio relating the known and unknown", zh: "选择关联已知量和未知量的三角比" },
          { en: "Solve", zh: "求解" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "A ladder 20 ft long leans against a wall at $70°$ from the ground. How high does it reach?", zh: "20 ft 的梯子以 $70°$ 角靠墙，能达到多高？" },
        commonTraps: [
          { en: "Using the wrong trig function — the height is the opposite side, so use $\\sin 70°$", zh: "用错三角函数——高度是对边，应用 $\\sin 70°$" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-4-8-5",
        title: { en: "Bearing and Distance Problem", zh: "方位角和距离问题" },
        description: { en: "Find distances or positions using bearing descriptions.", zh: "利用方位角描述求距离或位置。" },
        howToRecognize: { en: "Two bearings or a bearing with distance; asked for a resulting distance or position.", zh: "两个方位角或方位角加距离；求结果距离或位置。" },
        steps: [
          { en: "Draw a diagram with the north-south reference at each point", zh: "在每个点画出南北参考线" },
          { en: "Decompose each leg into N/S and E/W components", zh: "将每段分解为南北和东西分量" },
          { en: "Use the Pythagorean Theorem for the total distance", zh: "用勾股定理求总距离" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A ship sails N 30° E for 80 mi, then S 60° E for 60 mi. How far is it from the starting point?", zh: "船先沿 N 30° E 行驶 80 mi，再沿 S 60° E 行驶 60 mi。距出发点多远？" },
        commonTraps: [
          { en: "Forgetting to add/subtract components correctly when direction changes", zh: "方向变化时分量加减搞错" },
        ],
      },
      {
        id: "pt-4-8-6",
        title: { en: "Write SHM Equation from Physical Description", zh: "由物理描述写简谐运动方程" },
        description: { en: "Write $d = a\\sin(\\omega t)$ or $d = a\\cos(\\omega t)$ from given physical parameters.", zh: "由给定物理参数写出 $d = a\\sin(\\omega t)$ 或 $d = a\\cos(\\omega t)$。" },
        howToRecognize: { en: "Amplitude, period/frequency given; asked to write the equation.", zh: "给出振幅、周期/频率；要求写方程。" },
        steps: [
          { en: "Identify amplitude $a$", zh: "确定振幅 $a$" },
          { en: "Compute $\\omega = \\frac{2\\pi}{T}$ from the period", zh: "由周期算 $\\omega = \\frac{2\\pi}{T}$" },
          { en: "Choose sine or cosine based on initial condition ($d(0) = 0$ → sine, $d(0) = a$ → cosine)", zh: "根据初始条件选正弦或余弦（$d(0) = 0$ → 正弦，$d(0) = a$ → 余弦）" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A spring is pulled 8 cm below equilibrium and released. It completes one cycle every 0.5 sec. Write the model.", zh: "弹簧从平衡位置下拉 8 cm 释放，每 0.5 秒完成一个周期。写出模型。" },
        commonTraps: [
          { en: "Using sine when the object starts at maximum displacement (should use cosine)", zh: "物体从最大位移开始时用正弦（应用余弦）" },
        ],
      },
      {
        id: "pt-4-8-7",
        title: { en: "Angle of Elevation/Depression Application", zh: "仰角/俯角应用" },
        description: { en: "Solve a real-world problem involving angles of elevation or depression.", zh: "解决涉及仰角或俯角的实际问题。" },
        howToRecognize: { en: "Problem mentions looking up/down at an object from a known distance or height.", zh: "题目提到从已知距离或高度向上/向下看某物体。" },
        steps: [
          { en: "Draw the right triangle with horizontal and vertical sides", zh: "画出含水平和垂直边的直角三角形" },
          { en: "Label the given angle, known side, and unknown side", zh: "标注已知角、已知边和未知边" },
          { en: "Use the appropriate trig ratio to solve", zh: "用合适的三角比求解" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "From the top of a 120 ft cliff, the angle of depression to a boat is $25°$. How far is the boat from the base of the cliff?", zh: "从 120 ft 高的悬崖顶，俯视一艘船的俯角为 $25°$。船距悬崖底部多远？" },
        commonTraps: [
          { en: "Confusing the angle of depression (from horizontal down) with the angle at the base of the triangle", zh: "混淆俯角（从水平向下）与三角形底角" },
        ],
      },
      {
        id: "pt-4-8-8",
        title: { en: "Two-Observer Problem", zh: "双观察者问题" },
        description: { en: "Two observers at known positions measure angles to the same object; find the object's position.", zh: "两个已知位置的观察者测量同一物体的角度；求物体位置。" },
        howToRecognize: { en: "Two angles of elevation from different distances to the same point.", zh: "从不同距离对同一点的两个仰角。" },
        steps: [
          { en: "Draw the diagram with both observers and the target", zh: "画出含两个观察者和目标的图" },
          { en: "Set up trig equations for each triangle (shared height)", zh: "对每个三角形列三角方程（共享高度）" },
          { en: "Solve the system", zh: "解方程组" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "From point A, the angle of elevation to a tower is $50°$. From point B, 200 ft farther away, it is $35°$. Find the tower height.", zh: "从 A 点仰望塔顶仰角 $50°$，从远 200 ft 的 B 点仰角 $35°$。求塔高。" },
        commonTraps: [
          { en: "Labeling the distance from B to the tower as 200 instead of $d + 200$", zh: "把 B 到塔的距离标为 200 而非 $d + 200$" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-4-8-9",
        title: { en: "Multi-Leg Navigation Problem", zh: "多段航行问题" },
        description: { en: "Track a ship or plane through multiple bearing changes and find final position.", zh: "追踪船或飞机经多次方位变化后的最终位置。" },
        howToRecognize: { en: "Two or more legs with different bearings and distances.", zh: "两段或多段不同方位角和距离。" },
        steps: [
          { en: "Decompose each leg into N/S and E/W components", zh: "将每段分解为南北和东西分量" },
          { en: "Sum all N/S components and all E/W components", zh: "将所有南北分量和东西分量分别求和" },
          { en: "Use Pythagorean Theorem for total distance and $\\arctan$ for bearing", zh: "用勾股定理求总距离，用 $\\arctan$ 求方位角" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A plane flies N 50° W for 300 mi, then S 20° W for 200 mi, then due east for 150 mi. Find the distance and bearing from start to finish.", zh: "飞机先沿 N 50° W 飞 300 mi，再沿 S 20° W 飞 200 mi，再正东飞 150 mi。求起点到终点的距离和方位角。" },
        commonTraps: [
          { en: "Mixing up signs when changing from north to south legs", zh: "从北向段转到南向段时符号搞混" },
        ],
      },
      {
        id: "pt-4-8-10",
        title: { en: "Damped or Combined Harmonic Motion", zh: "阻尼或组合简谐运动" },
        description: { en: "Analyze motion with damping ($d = ae^{-bt}\\cos(\\omega t)$) or combined oscillations.", zh: "分析含阻尼（$d = ae^{-bt}\\cos(\\omega t)$）或组合振荡的运动。" },
        howToRecognize: { en: "Equation includes an exponential decay factor or sum of trig functions.", zh: "方程含指数衰减因子或三角函数之和。" },
        steps: [
          { en: "Identify the amplitude envelope ($ae^{-bt}$ decays over time)", zh: "识别振幅包络线（$ae^{-bt}$ 随时间衰减）" },
          { en: "The oscillation still has period $\\frac{2\\pi}{\\omega}$", zh: "振荡仍有周期 $\\frac{2\\pi}{\\omega}$" },
          { en: "Find when displacement first returns to zero, or when amplitude drops below a threshold", zh: "求位移首次回零的时刻，或振幅降到阈值以下的时刻" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A shock absorber has displacement $d = 10e^{-0.5t}\\cos(4\\pi t)$. Find the amplitude after 3 seconds and the period of oscillation.", zh: "减震器位移 $d = 10e^{-0.5t}\\cos(4\\pi t)$。求 3 秒后的振幅和振荡周期。" },
        commonTraps: [
          { en: "Treating $e^{-0.5t}$ as part of the frequency instead of the amplitude envelope", zh: "把 $e^{-0.5t}$ 当成频率的一部分而非振幅包络" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Recognize and use reciprocal identities", zh: "识别并使用倒数恒等式" },
      { en: "Recognize and use quotient identities", zh: "识别并使用商恒等式" },
      { en: "Recognize and use Pythagorean identities", zh: "识别并使用毕达哥拉斯恒等式" },
      { en: "Use identities to simplify and rewrite trigonometric expressions", zh: "用恒等式化简和改写三角表达式" },
    ],
    keyConcepts: [
      {
        id: "kc-5-1-1",
        title: { en: "Reciprocal and Quotient Identities", zh: "倒数与商恒等式" },
        explanation: {
          en: "Reciprocal: $\\csc\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\cot\\theta = \\frac{1}{\\tan\\theta}$. Quotient: $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$. These are the building blocks for all trig simplification.",
          zh: "倒数：$\\csc\\theta = \\frac{1}{\\sin\\theta}$，$\\sec\\theta = \\frac{1}{\\cos\\theta}$，$\\cot\\theta = \\frac{1}{\\tan\\theta}$。商：$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$，$\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$。它们是所有三角化简的基础。",
        },
        whenToUse: { en: "Converting between different trig functions to simplify an expression", zh: "在不同三角函数之间转换以化简表达式" },
        commonMistake: { en: "Confusing $\\sec$ with $\\csc$ — $\\sec = 1/\\cos$, $\\csc = 1/\\sin$", zh: "混淆 $\\sec$ 和 $\\csc$——$\\sec = 1/\\cos$，$\\csc = 1/\\sin$" },
        example: { en: "$\\frac{\\sin\\theta}{\\cos\\theta} \\cdot \\frac{1}{\\sin\\theta} = \\frac{1}{\\cos\\theta} = \\sec\\theta$", zh: "$\\frac{\\sin\\theta}{\\cos\\theta} \\cdot \\frac{1}{\\sin\\theta} = \\frac{1}{\\cos\\theta} = \\sec\\theta$" },
      },
      {
        id: "kc-5-1-2",
        title: { en: "Pythagorean Identities", zh: "毕达哥拉斯恒等式" },
        explanation: {
          en: "Three forms: (1) $\\sin^2\\theta + \\cos^2\\theta = 1$, (2) $1 + \\tan^2\\theta = \\sec^2\\theta$, (3) $1 + \\cot^2\\theta = \\csc^2\\theta$. Forms (2) and (3) are obtained by dividing (1) by $\\cos^2\\theta$ and $\\sin^2\\theta$ respectively. Each can be rearranged to isolate any term.",
          zh: "三种形式：(1) $\\sin^2\\theta + \\cos^2\\theta = 1$，(2) $1 + \\tan^2\\theta = \\sec^2\\theta$，(3) $1 + \\cot^2\\theta = \\csc^2\\theta$。(2) 和 (3) 分别由 (1) 除以 $\\cos^2\\theta$ 和 $\\sin^2\\theta$ 得到。每种都可变形以分离任一项。",
        },
        whenToUse: { en: "Replacing one squared trig expression with another; simplifying sums/differences of squared trig functions", zh: "用一个三角平方表达式替换另一个；化简三角函数平方的和/差" },
        commonMistake: { en: "Writing $\\sin^2\\theta - \\cos^2\\theta = 1$ — the signs must match the identity", zh: "写成 $\\sin^2\\theta - \\cos^2\\theta = 1$——符号必须与恒等式一致" },
        example: { en: "$\\sec^2\\theta - 1 = \\tan^2\\theta$; $1 - \\sin^2\\theta = \\cos^2\\theta$", zh: "$\\sec^2\\theta - 1 = \\tan^2\\theta$；$1 - \\sin^2\\theta = \\cos^2\\theta$" },
      },
      {
        id: "kc-5-1-3",
        title: { en: "Simplification Strategies", zh: "化简策略" },
        explanation: {
          en: "Common strategies: (1) Convert everything to sin and cos, (2) Factor out common factors, (3) Combine fractions over a common denominator, (4) Use Pythagorean identities to reduce the number of different trig functions, (5) Multiply numerator and denominator by a conjugate.",
          zh: "常用策略：(1) 全部化为 sin 和 cos，(2) 提取公因子，(3) 通分合并分式，(4) 用毕达哥拉斯恒等式减少不同三角函数的数量，(5) 分子分母同乘共轭表达式。",
        },
        whenToUse: { en: "When a trig expression looks complex and needs to be reduced", zh: "当三角表达式看起来复杂需要化简时" },
        commonMistake: { en: "Trying to simplify both sides at once instead of working on one side only", zh: "同时化简两边而非只操作一边" },
        example: { en: "$\\frac{1 - \\cos^2\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta} = \\sin\\theta$", zh: "$\\frac{1 - \\cos^2\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta}{\\sin\\theta} = \\sin\\theta$" },
      },
    ],
    formulas: [
      {
        id: "f-5-1-1",
        name: { en: "Reciprocal Identities", zh: "倒数恒等式" },
        formula: "\\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}",
        variables: [
          { en: "Each is undefined when its denominator is zero", zh: "分母为零时各式无定义" },
        ],
        whenToUse: { en: "Converting between trig functions", zh: "在三角函数之间转换" },
        commonProblemTypes: [
          { en: "Simplify expressions involving csc, sec, or cot", zh: "化简含 csc、sec 或 cot 的表达式" },
        ],
        example: { en: "$\\csc 30° = \\frac{1}{\\sin 30°} = 2$", zh: "$\\csc 30° = \\frac{1}{\\sin 30°} = 2$" },
      },
      {
        id: "f-5-1-2",
        name: { en: "Pythagorean Identities", zh: "毕达哥拉斯恒等式" },
        formula: "\\sin^2\\theta + \\cos^2\\theta = 1, \\quad 1 + \\tan^2\\theta = \\sec^2\\theta, \\quad 1 + \\cot^2\\theta = \\csc^2\\theta",
        variables: [
          { en: "Each can be rearranged (e.g., $\\sin^2\\theta = 1 - \\cos^2\\theta$)", zh: "每个都可变形（如 $\\sin^2\\theta = 1 - \\cos^2\\theta$）" },
        ],
        whenToUse: { en: "Replacing one squared trig function with another", zh: "用一个三角平方函数替换另一个" },
        commonProblemTypes: [
          { en: "Simplify by substituting a Pythagorean identity", zh: "通过代入毕达哥拉斯恒等式化简" },
          { en: "Factor expressions like $\\sin^2\\theta - \\cos^2\\theta$", zh: "因式分解如 $\\sin^2\\theta - \\cos^2\\theta$ 的表达式" },
        ],
        example: { en: "$\\sec^2\\theta - \\tan^2\\theta = 1$", zh: "$\\sec^2\\theta - \\tan^2\\theta = 1$" },
      },
      {
        id: "f-5-1-3",
        name: { en: "Cofunction Identities (Radian Form)", zh: "余函数恒等式（弧度形式）" },
        formula: "\\sin(\\tfrac{\\pi}{2} - \\theta) = \\cos\\theta, \\quad \\tan(\\tfrac{\\pi}{2} - \\theta) = \\cot\\theta, \\quad \\sec(\\tfrac{\\pi}{2} - \\theta) = \\csc\\theta",
        variables: [
          { en: "Each trig function of an angle equals the cofunction of its complement", zh: "每个三角函数等于其互余角的余函数" },
        ],
        whenToUse: { en: "Rewriting a function as its cofunction", zh: "将一个函数改写为其余函数" },
        commonProblemTypes: [
          { en: "Simplify expressions involving $\\frac{\\pi}{2} - \\theta$", zh: "化简含 $\\frac{\\pi}{2} - \\theta$ 的表达式" },
        ],
        example: { en: "$\\cos(\\frac{\\pi}{2} - x) = \\sin x$", zh: "$\\cos(\\frac{\\pi}{2} - x) = \\sin x$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-5-1-1",
        title: { en: "Simplify Using Reciprocal/Quotient Identities", zh: "用倒数/商恒等式化简" },
        description: { en: "Rewrite an expression by replacing sec, csc, tan, cot with sin and cos.", zh: "用 sin 和 cos 替换 sec、csc、tan、cot 来改写表达式。" },
        howToRecognize: { en: "Expression contains sec, csc, tan, or cot; asked to simplify.", zh: "表达式含 sec、csc、tan 或 cot；要求化简。" },
        steps: [
          { en: "Replace each function with its sin/cos definition", zh: "用 sin/cos 定义替换每个函数" },
          { en: "Simplify the resulting fraction", zh: "化简所得分式" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Simplify $\\cos\\theta \\cdot \\tan\\theta$.", zh: "化简 $\\cos\\theta \\cdot \\tan\\theta$。" },
        commonTraps: [
          { en: "Forgetting to cancel common factors after substitution", zh: "代换后忘记约掉公因子" },
        ],
      },
      {
        id: "pt-5-1-2",
        title: { en: "Simplify Using a Pythagorean Identity", zh: "用毕达哥拉斯恒等式化简" },
        description: { en: "Replace a squared trig expression using $\\sin^2 + \\cos^2 = 1$ or its variants.", zh: "用 $\\sin^2 + \\cos^2 = 1$ 或其变形替换三角平方表达式。" },
        howToRecognize: { en: "Expression contains $\\sin^2\\theta$, $\\cos^2\\theta$, $\\tan^2\\theta$, or $\\sec^2\\theta$ with $\\pm 1$.", zh: "表达式含 $\\sin^2\\theta$、$\\cos^2\\theta$、$\\tan^2\\theta$ 或 $\\sec^2\\theta$ 与 $\\pm 1$。" },
        steps: [
          { en: "Identify which Pythagorean identity applies", zh: "确定适用哪个毕达哥拉斯恒等式" },
          { en: "Substitute and simplify", zh: "代入并化简" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Simplify $\\sec^2\\theta - 1$.", zh: "化简 $\\sec^2\\theta - 1$。" },
        commonTraps: [
          { en: "Using the wrong variant (e.g., $1 + \\tan^2 = \\sec^2$ not $\\csc^2$)", zh: "用错变形（如 $1 + \\tan^2 = \\sec^2$ 而非 $\\csc^2$）" },
        ],
      },
      {
        id: "pt-5-1-3",
        title: { en: "Find Remaining Trig Values Using Identities", zh: "用恒等式求其余三角函数值" },
        description: { en: "Given one trig value and the quadrant, find the others using identities.", zh: "已知一个三角函数值和象限，用恒等式求其余值。" },
        howToRecognize: { en: "Given $\\sin\\theta = a$ and quadrant; asked for $\\cos\\theta$, $\\tan\\theta$, etc.", zh: "给出 $\\sin\\theta = a$ 和象限；求 $\\cos\\theta$、$\\tan\\theta$ 等。" },
        steps: [
          { en: "Use $\\sin^2\\theta + \\cos^2\\theta = 1$ to find the missing function", zh: "用 $\\sin^2\\theta + \\cos^2\\theta = 1$ 求缺失函数" },
          { en: "Use the quadrant for the correct sign", zh: "根据象限选正确符号" },
          { en: "Compute the remaining functions via quotient and reciprocal identities", zh: "用商和倒数恒等式算出其余函数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "If $\\tan\\theta = -\\frac{4}{3}$ and $\\cos\\theta > 0$, find $\\sin\\theta$ and $\\sec\\theta$.", zh: "若 $\\tan\\theta = -\\frac{4}{3}$ 且 $\\cos\\theta > 0$，求 $\\sin\\theta$ 和 $\\sec\\theta$。" },
        commonTraps: [
          { en: "Choosing the wrong sign from the quadrant", zh: "象限选错符号" },
        ],
      },
      {
        id: "pt-5-1-4",
        title: { en: "Apply Cofunction Identity", zh: "应用余函数恒等式" },
        description: { en: "Rewrite a trig function of $\\frac{\\pi}{2} - \\theta$ as a cofunction.", zh: "将 $\\frac{\\pi}{2} - \\theta$ 的三角函数改写为余函数。" },
        howToRecognize: { en: "Argument is $\\frac{\\pi}{2} - \\theta$ or $90° - \\theta$.", zh: "自变量为 $\\frac{\\pi}{2} - \\theta$ 或 $90° - \\theta$。" },
        steps: [
          { en: "Apply: $\\sin(\\frac{\\pi}{2} - \\theta) = \\cos\\theta$, $\\tan(\\frac{\\pi}{2} - \\theta) = \\cot\\theta$, etc.", zh: "应用：$\\sin(\\frac{\\pi}{2} - \\theta) = \\cos\\theta$，$\\tan(\\frac{\\pi}{2} - \\theta) = \\cot\\theta$ 等" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Simplify $\\sin(\\frac{\\pi}{2} - x) \\cdot \\sec x$.", zh: "化简 $\\sin(\\frac{\\pi}{2} - x) \\cdot \\sec x$。" },
        commonTraps: [
          { en: "Applying the wrong cofunction pairing", zh: "余函数配对搞错" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-5-1-5",
        title: { en: "Factor a Trig Expression", zh: "三角表达式的因式分解" },
        description: { en: "Factor expressions like $\\sin^2\\theta - \\cos^2\\theta$ or $\\sec^2\\theta - \\sec\\theta - 2$.", zh: "因式分解如 $\\sin^2\\theta - \\cos^2\\theta$ 或 $\\sec^2\\theta - \\sec\\theta - 2$ 的表达式。" },
        howToRecognize: { en: "Expression is a polynomial in a trig function.", zh: "表达式是三角函数的多项式。" },
        steps: [
          { en: "Treat the trig function as a variable (let $u = \\sin\\theta$, etc.)", zh: "把三角函数当变量（令 $u = \\sin\\theta$ 等）" },
          { en: "Factor the resulting polynomial", zh: "对所得多项式因式分解" },
          { en: "Substitute back", zh: "回代" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Factor $2\\sin^2\\theta + \\sin\\theta - 1$.", zh: "因式分解 $2\\sin^2\\theta + \\sin\\theta - 1$。" },
        commonTraps: [
          { en: "Not recognizing the expression as a quadratic in $\\sin\\theta$", zh: "没认出表达式是关于 $\\sin\\theta$ 的二次式" },
        ],
      },
      {
        id: "pt-5-1-6",
        title: { en: "Combine Fractions and Simplify", zh: "通分合并并化简" },
        description: { en: "Add or subtract trig fractions by finding a common denominator.", zh: "通分后加减三角分式。" },
        howToRecognize: { en: "Sum or difference of two trig fractions.", zh: "两个三角分式的和或差。" },
        steps: [
          { en: "Find the common denominator", zh: "找公分母" },
          { en: "Combine numerators", zh: "合并分子" },
          { en: "Simplify using identities", zh: "用恒等式化简" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Simplify $\\frac{1}{1 - \\sin\\theta} + \\frac{1}{1 + \\sin\\theta}$.", zh: "化简 $\\frac{1}{1 - \\sin\\theta} + \\frac{1}{1 + \\sin\\theta}$。" },
        commonTraps: [
          { en: "Not recognizing $(1 - \\sin\\theta)(1 + \\sin\\theta) = \\cos^2\\theta$", zh: "没认出 $(1 - \\sin\\theta)(1 + \\sin\\theta) = \\cos^2\\theta$" },
        ],
      },
      {
        id: "pt-5-1-7",
        title: { en: "Multiply by Conjugate to Simplify", zh: "乘以共轭式化简" },
        description: { en: "Multiply numerator and denominator by a conjugate to eliminate radicals or simplify.", zh: "分子分母同乘共轭式以消除根号或化简。" },
        howToRecognize: { en: "Expression has $1 \\pm \\sin\\theta$ or $1 \\pm \\cos\\theta$ in a denominator.", zh: "分母含 $1 \\pm \\sin\\theta$ 或 $1 \\pm \\cos\\theta$。" },
        steps: [
          { en: "Multiply top and bottom by the conjugate", zh: "分子分母同乘共轭" },
          { en: "The denominator becomes a Pythagorean identity", zh: "分母化为毕达哥拉斯恒等式" },
          { en: "Simplify", zh: "化简" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Simplify $\\frac{\\cos\\theta}{1 - \\sin\\theta}$.", zh: "化简 $\\frac{\\cos\\theta}{1 - \\sin\\theta}$。" },
        commonTraps: [
          { en: "Only multiplying one of numerator/denominator by the conjugate", zh: "只将分子或分母中的一个乘以共轭" },
        ],
      },
      {
        id: "pt-5-1-8",
        title: { en: "Rewrite in Terms of a Single Trig Function", zh: "用单一三角函数改写" },
        description: { en: "Convert an expression so it uses only sin, only cos, or only one function.", zh: "将表达式转化为只含 sin、只含 cos 或只含一个函数。" },
        howToRecognize: { en: "Expression mixes multiple trig functions; asked to rewrite in terms of one.", zh: "表达式混合多个三角函数；要求用一个函数改写。" },
        steps: [
          { en: "Use identities to express all functions in terms of the target function", zh: "用恒等式将所有函数表示为目标函数" },
          { en: "Simplify", zh: "化简" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Write $\\cot^2\\theta + 1$ in terms of $\\sin\\theta$ only.", zh: "将 $\\cot^2\\theta + 1$ 只用 $\\sin\\theta$ 表示。" },
        commonTraps: [
          { en: "Getting lost in multiple substitutions — plan the conversion path first", zh: "多次代换迷失方向——先规划转换路径" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-5-1-9",
        title: { en: "Multi-Step Simplification", zh: "多步化简" },
        description: { en: "Simplify a complex expression requiring several identity applications.", zh: "化简需多次应用恒等式的复杂表达式。" },
        howToRecognize: { en: "Expression combines fractions, products, and powers of multiple trig functions.", zh: "表达式包含多个三角函数的分式、乘积和幂。" },
        steps: [
          { en: "Convert everything to sin and cos", zh: "全部化为 sin 和 cos" },
          { en: "Combine fractions if needed", zh: "如有必要通分合并" },
          { en: "Apply Pythagorean identities", zh: "应用毕达哥拉斯恒等式" },
          { en: "Factor and cancel", zh: "因式分解并约分" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Simplify $\\frac{\\sec\\theta - \\cos\\theta}{\\tan\\theta}$.", zh: "化简 $\\frac{\\sec\\theta - \\cos\\theta}{\\tan\\theta}$。" },
        commonTraps: [
          { en: "Not seeing that $\\sec\\theta - \\cos\\theta = \\frac{1 - \\cos^2\\theta}{\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta}$", zh: "没看出 $\\sec\\theta - \\cos\\theta = \\frac{1 - \\cos^2\\theta}{\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta}$" },
        ],
      },
      {
        id: "pt-5-1-10",
        title: { en: "Trigonometric Substitution Preview", zh: "三角代换预览" },
        description: { en: "Simplify algebraic expressions by substituting a trig function for a variable.", zh: "用三角函数替换变量以化简代数表达式。" },
        howToRecognize: { en: "Expression contains $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, or $\\sqrt{x^2 - a^2}$.", zh: "表达式含 $\\sqrt{a^2 - x^2}$、$\\sqrt{a^2 + x^2}$ 或 $\\sqrt{x^2 - a^2}$。" },
        steps: [
          { en: "For $\\sqrt{a^2 - x^2}$: let $x = a\\sin\\theta$", zh: "对 $\\sqrt{a^2 - x^2}$：令 $x = a\\sin\\theta$" },
          { en: "Substitute and use $1 - \\sin^2\\theta = \\cos^2\\theta$", zh: "代入并用 $1 - \\sin^2\\theta = \\cos^2\\theta$" },
          { en: "Simplify the radical", zh: "化简根号" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Simplify $\\sqrt{9 - x^2}$ using $x = 3\\sin\\theta$.", zh: "用 $x = 3\\sin\\theta$ 化简 $\\sqrt{9 - x^2}$。" },
        commonTraps: [
          { en: "Forgetting the absolute value: $\\sqrt{\\cos^2\\theta} = |\\cos\\theta|$, which equals $\\cos\\theta$ when $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$", zh: "忘记绝对值：$\\sqrt{\\cos^2\\theta} = |\\cos\\theta|$，当 $\\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ 时等于 $\\cos\\theta$" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Verify trig identities by transforming one side into the other", zh: "通过将一边变形为另一边来验证三角恒等式" },
      { en: "Apply effective strategies for verifying identities", zh: "应用有效策略验证恒等式" },
      { en: "Recognize common patterns that lead to simplification", zh: "识别可导致化简的常见模式" },
    ],
    keyConcepts: [
      {
        id: "kc-5-2-1",
        title: { en: "Guidelines for Verifying Identities", zh: "验证恒等式的原则" },
        explanation: {
          en: "Key rules: (1) Work with ONE side only — do not move terms across the equals sign. (2) Start with the more complex side. (3) Convert to sin and cos when stuck. (4) Factor, combine fractions, or multiply by conjugates. (5) Watch for Pythagorean identity opportunities.",
          zh: "关键规则：(1) 只操作一边——不要跨等号移项。(2) 从较复杂的一边开始。(3) 卡住时全部化为 sin 和 cos。(4) 因式分解、通分或乘以共轭。(5) 注意毕达哥拉斯恒等式的使用机会。",
        },
        whenToUse: { en: "Every identity verification problem", zh: "每个恒等式验证题" },
        commonMistake: { en: "Working on both sides simultaneously and meeting in the middle — this is not a valid proof technique", zh: "同时操作两边并在中间会合——这不是有效的证明方法" },
        example: { en: "To verify $\\frac{\\sin\\theta}{\\csc\\theta} + \\frac{\\cos\\theta}{\\sec\\theta} = 1$: LHS $= \\sin^2\\theta + \\cos^2\\theta = 1$ = RHS", zh: "验证 $\\frac{\\sin\\theta}{\\csc\\theta} + \\frac{\\cos\\theta}{\\sec\\theta} = 1$：左边 $= \\sin^2\\theta + \\cos^2\\theta = 1$ = 右边" },
      },
      {
        id: "kc-5-2-2",
        title: { en: "Common Verification Techniques", zh: "常用验证技巧" },
        explanation: {
          en: "Useful moves: (1) $1 - \\cos^2\\theta \\to \\sin^2\\theta$ and variants. (2) $\\frac{1}{\\cos\\theta} \\to \\sec\\theta$. (3) Factor difference of squares: $\\sin^2\\theta - \\cos^2\\theta = (\\sin\\theta - \\cos\\theta)(\\sin\\theta + \\cos\\theta)$. (4) Multiply by $\\frac{1 + \\sin\\theta}{1 + \\sin\\theta}$ to clear $1 - \\sin\\theta$ from a denominator.",
          zh: "有用手法：(1) $1 - \\cos^2\\theta \\to \\sin^2\\theta$ 及变形。(2) $\\frac{1}{\\cos\\theta} \\to \\sec\\theta$。(3) 因式分解平方差：$\\sin^2\\theta - \\cos^2\\theta = (\\sin\\theta - \\cos\\theta)(\\sin\\theta + \\cos\\theta)$。(4) 乘以 $\\frac{1 + \\sin\\theta}{1 + \\sin\\theta}$ 消去分母中的 $1 - \\sin\\theta$。",
        },
        whenToUse: { en: "When standard substitution doesn't simplify enough — try these targeted moves", zh: "当标准代换不够用时——试试这些针对性手法" },
        commonMistake: { en: "Trying the same approach repeatedly when it doesn't work — switch strategies", zh: "同一方法不奏效时反复尝试——应切换策略" },
        example: { en: "Verify $\\frac{1}{1 - \\sin\\theta} = \\sec\\theta(\\sec\\theta + \\tan\\theta)$: multiply RHS out and convert to sin/cos", zh: "验证 $\\frac{1}{1 - \\sin\\theta} = \\sec\\theta(\\sec\\theta + \\tan\\theta)$：展开右边并转为 sin/cos" },
      },
    ],
    formulas: [
      {
        id: "f-5-2-1",
        name: { en: "Identity Verification Template", zh: "恒等式验证模板" },
        formula: "\\text{LHS} \\xrightarrow{\\text{identities}} \\cdots \\xrightarrow{\\text{simplify}} \\text{RHS}",
        variables: [
          { en: "Work on only one side (usually the more complex one)", zh: "只操作一边（通常是较复杂的一边）" },
          { en: "Each step must be a valid algebraic or identity-based transformation", zh: "每一步必须是有效的代数或恒等式变换" },
        ],
        whenToUse: { en: "Every identity verification problem", zh: "每个恒等式验证题" },
        commonProblemTypes: [
          { en: "Verify a given trig identity", zh: "验证给定的三角恒等式" },
        ],
        example: { en: "Verify $\\tan\\theta + \\cot\\theta = \\sec\\theta\\csc\\theta$: LHS $= \\frac{\\sin}{\\cos} + \\frac{\\cos}{\\sin} = \\frac{\\sin^2 + \\cos^2}{\\sin\\cos} = \\frac{1}{\\sin\\cos}$ = RHS", zh: "验证 $\\tan\\theta + \\cot\\theta = \\sec\\theta\\csc\\theta$：左边 $= \\frac{\\sin}{\\cos} + \\frac{\\cos}{\\sin} = \\frac{\\sin^2 + \\cos^2}{\\sin\\cos} = \\frac{1}{\\sin\\cos}$ = 右边" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-5-2-1",
        title: { en: "One-Step Verification", zh: "一步验证" },
        description: { en: "Verify an identity that requires only one substitution.", zh: "验证只需一步代换的恒等式。" },
        howToRecognize: { en: "One side is already close to the other after a single identity.", zh: "一次恒等式代换即可使一边等于另一边。" },
        steps: [
          { en: "Apply a single identity (reciprocal, quotient, or Pythagorean)", zh: "应用一个恒等式（倒数、商或毕达哥拉斯）" },
          { en: "Confirm both sides match", zh: "确认两边一致" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Verify: $\\tan\\theta \\cdot \\cos\\theta = \\sin\\theta$.", zh: "验证：$\\tan\\theta \\cdot \\cos\\theta = \\sin\\theta$。" },
        commonTraps: [
          { en: "Over-complicating: just replace $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ and cancel", zh: "过度复杂化：只需替换 $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ 然后约分" },
        ],
      },
      {
        id: "pt-5-2-2",
        title: { en: "Pythagorean Substitution Verification", zh: "毕达哥拉斯代换验证" },
        description: { en: "Verify by replacing a squared expression via Pythagorean identity.", zh: "用毕达哥拉斯恒等式替换平方表达式来验证。" },
        howToRecognize: { en: "One side has $\\sin^2$ or $\\cos^2$ that pairs with the other side.", zh: "一边有 $\\sin^2$ 或 $\\cos^2$ 可与另一边配对。" },
        steps: [
          { en: "Identify the Pythagorean substitution needed", zh: "确定需要的毕达哥拉斯代换" },
          { en: "Substitute and simplify", zh: "代入并化简" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Verify: $1 - 2\\sin^2\\theta = 2\\cos^2\\theta - 1$.", zh: "验证：$1 - 2\\sin^2\\theta = 2\\cos^2\\theta - 1$。" },
        commonTraps: [
          { en: "Trying to work on both sides — just convert the LHS using $\\sin^2\\theta = 1 - \\cos^2\\theta$", zh: "试图操作两边——只需用 $\\sin^2\\theta = 1 - \\cos^2\\theta$ 转换左边" },
        ],
      },
      {
        id: "pt-5-2-3",
        title: { en: "Convert to Sin/Cos and Verify", zh: "化为 sin/cos 后验证" },
        description: { en: "Verify by converting both sides to sin and cos.", zh: "将两边都化为 sin 和 cos 来验证。" },
        howToRecognize: { en: "Both sides contain sec, csc, tan, or cot.", zh: "两边都含 sec、csc、tan 或 cot。" },
        steps: [
          { en: "Rewrite the more complex side using sin and cos only", zh: "只用 sin 和 cos 改写较复杂的一边" },
          { en: "Simplify to match the other side", zh: "化简使其等于另一边" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Verify: $\\cot\\theta \\cdot \\sec\\theta = \\csc\\theta$.", zh: "验证：$\\cot\\theta \\cdot \\sec\\theta = \\csc\\theta$。" },
        commonTraps: [
          { en: "Not simplifying fully after conversion", zh: "转换后未充分化简" },
        ],
      },
      {
        id: "pt-5-2-4",
        title: { en: "Verify Involving Squared Functions", zh: "含平方函数的验证" },
        description: { en: "Verify identities where both sides involve squared trig functions.", zh: "验证两边都含三角函数平方的恒等式。" },
        howToRecognize: { en: "Expressions like $\\sec^2\\theta - \\tan^2\\theta = 1$.", zh: "表达式如 $\\sec^2\\theta - \\tan^2\\theta = 1$。" },
        steps: [
          { en: "Apply the relevant Pythagorean identity directly", zh: "直接应用相关的毕达哥拉斯恒等式" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Verify: $\\csc^2\\theta(1 - \\cos^2\\theta) = 1$.", zh: "验证：$\\csc^2\\theta(1 - \\cos^2\\theta) = 1$。" },
        commonTraps: [
          { en: "Not recognizing $1 - \\cos^2\\theta = \\sin^2\\theta$ immediately", zh: "没立即认出 $1 - \\cos^2\\theta = \\sin^2\\theta$" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-5-2-5",
        title: { en: "Verify by Combining Fractions", zh: "通分合并验证" },
        description: { en: "Verify by adding/subtracting fractions on one side.", zh: "对一边通分加减来验证。" },
        howToRecognize: { en: "One side is a sum/difference of fractions.", zh: "一边是分式之和/差。" },
        steps: [
          { en: "Find common denominator", zh: "找公分母" },
          { en: "Combine and simplify using identities", zh: "合并并用恒等式化简" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Verify: $\\frac{\\sin\\theta}{1 + \\cos\\theta} + \\frac{1 + \\cos\\theta}{\\sin\\theta} = 2\\csc\\theta$.", zh: "验证：$\\frac{\\sin\\theta}{1 + \\cos\\theta} + \\frac{1 + \\cos\\theta}{\\sin\\theta} = 2\\csc\\theta$。" },
        commonTraps: [
          { en: "Arithmetic errors when combining the numerators", zh: "合并分子时的算术错误" },
        ],
      },
      {
        id: "pt-5-2-6",
        title: { en: "Verify by Factoring", zh: "因式分解验证" },
        description: { en: "Verify by factoring one side of the identity.", zh: "对一边因式分解来验证。" },
        howToRecognize: { en: "One side is a polynomial in trig functions.", zh: "一边是三角函数的多项式。" },
        steps: [
          { en: "Factor the polynomial (difference of squares, common factor, etc.)", zh: "因式分解（平方差、公因子等）" },
          { en: "Simplify to match the other side", zh: "化简使其等于另一边" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Verify: $\\sin^4\\theta - \\cos^4\\theta = 1 - 2\\cos^2\\theta$.", zh: "验证：$\\sin^4\\theta - \\cos^4\\theta = 1 - 2\\cos^2\\theta$。" },
        commonTraps: [
          { en: "Not seeing the difference of squares: $a^4 - b^4 = (a^2 - b^2)(a^2 + b^2)$", zh: "没看出平方差：$a^4 - b^4 = (a^2 - b^2)(a^2 + b^2)$" },
        ],
      },
      {
        id: "pt-5-2-7",
        title: { en: "Verify Using Conjugate Multiplication", zh: "乘共轭验证" },
        description: { en: "Verify by multiplying by a conjugate to clear a denominator.", zh: "乘以共轭消去分母来验证。" },
        howToRecognize: { en: "Denominator contains $1 \\pm \\sin\\theta$ or $1 \\pm \\cos\\theta$.", zh: "分母含 $1 \\pm \\sin\\theta$ 或 $1 \\pm \\cos\\theta$。" },
        steps: [
          { en: "Multiply numerator and denominator by the conjugate", zh: "分子分母同乘共轭" },
          { en: "Simplify using $(1 - \\sin\\theta)(1 + \\sin\\theta) = \\cos^2\\theta$", zh: "用 $(1 - \\sin\\theta)(1 + \\sin\\theta) = \\cos^2\\theta$ 化简" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Verify: $\\frac{\\cos\\theta}{1 - \\sin\\theta} = \\sec\\theta + \\tan\\theta$.", zh: "验证：$\\frac{\\cos\\theta}{1 - \\sin\\theta} = \\sec\\theta + \\tan\\theta$。" },
        commonTraps: [
          { en: "Forgetting to distribute the conjugate properly in the numerator", zh: "分子展开共轭时分配不当" },
        ],
      },
      {
        id: "pt-5-2-8",
        title: { en: "Verify a Multi-Term Identity", zh: "多项恒等式验证" },
        description: { en: "Verify an identity that requires 3+ transformation steps.", zh: "验证需要 3 步以上变换的恒等式。" },
        howToRecognize: { en: "Identity has multiple terms, mixed functions, and doesn't simplify in one step.", zh: "恒等式有多项、混合函数，且无法一步化简。" },
        steps: [
          { en: "Start with the more complex side", zh: "从较复杂的一边开始" },
          { en: "Apply a sequence of identities and algebraic simplifications", zh: "应用一系列恒等式和代数化简" },
          { en: "Show each step clearly", zh: "清楚展示每一步" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Verify: $\\frac{\\tan\\theta + \\cot\\theta}{\\sec\\theta} = \\csc\\theta$.", zh: "验证：$\\frac{\\tan\\theta + \\cot\\theta}{\\sec\\theta} = \\csc\\theta$。" },
        commonTraps: [
          { en: "Losing track of intermediate steps — write each transformation explicitly", zh: "中间步骤跟丢——每步变换都明确写出" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-5-2-9",
        title: { en: "Challenging Identity Verification", zh: "高难度恒等式验证" },
        description: { en: "Verify a non-obvious identity requiring creative strategy choices.", zh: "验证需要创造性策略选择的不明显恒等式。" },
        howToRecognize: { en: "Neither side looks like it simplifies directly; requires a clever move.", zh: "两边都不像能直接化简；需要巧妙手法。" },
        steps: [
          { en: "Try multiple approaches: convert to sin/cos, factor, use conjugate", zh: "尝试多种方法：化为 sin/cos、因式分解、共轭" },
          { en: "Look for hidden structure (e.g., difference of squares, common factors)", zh: "寻找隐藏结构（如平方差、公因子）" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Verify: $\\frac{1 + \\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{1 + \\sin\\theta} = 2\\sec\\theta$.", zh: "验证：$\\frac{1 + \\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{1 + \\sin\\theta} = 2\\sec\\theta$。" },
        commonTraps: [
          { en: "Giving up too early — try at least 2-3 different starting strategies", zh: "过早放弃——至少尝试 2-3 种不同的起始策略" },
        ],
      },
      {
        id: "pt-5-2-10",
        title: { en: "Disprove a False Identity", zh: "反驳假恒等式" },
        description: { en: "Show that a proposed identity is NOT true by finding a counterexample.", zh: "通过找反例说明一个拟议恒等式不成立。" },
        howToRecognize: { en: "Problem asks you to determine if an equation is an identity.", zh: "题目要求判断一个等式是否为恒等式。" },
        steps: [
          { en: "Try a specific value (e.g., $\\theta = \\frac{\\pi}{4}$)", zh: "代入一个特定值（如 $\\theta = \\frac{\\pi}{4}$）" },
          { en: "If both sides are unequal, it is NOT an identity", zh: "若两边不等，则不是恒等式" },
          { en: "If they are equal, try another value — a single check doesn't prove an identity", zh: "若相等，再试另一个值——单点验证不能证明恒等式" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Is $\\sin(2\\theta) = 2\\sin\\theta$ an identity? Prove or disprove.", zh: "$\\sin(2\\theta) = 2\\sin\\theta$ 是恒等式吗？证明或反驳。" },
        commonTraps: [
          { en: "Testing only $\\theta = 0$ where both sides happen to be 0 — must test non-trivial values", zh: "只测 $\\theta = 0$（两边恰好都为 0）——必须测非平凡值" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Solve linear trigonometric equations", zh: "求解一次三角方程" },
      { en: "Solve trig equations by factoring", zh: "通过因式分解求解三角方程" },
      { en: "Solve trig equations using identities", zh: "利用恒等式求解三角方程" },
      { en: "Find all solutions vs. solutions in a given interval", zh: "求所有解与给定区间内的解" },
    ],
    keyConcepts: [
      {
        id: "kc-5-3-1",
        title: { en: "Isolate the Trig Function", zh: "分离三角函数" },
        explanation: {
          en: "Treat the trig function as a variable: solve for $\\sin\\theta$, $\\cos\\theta$, etc., then use inverse functions or the unit circle to find $\\theta$. For example, $2\\sin\\theta - 1 = 0 \\Rightarrow \\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$ in $[0, 2\\pi)$.",
          zh: "把三角函数当变量：解出 $\\sin\\theta$、$\\cos\\theta$ 等，再用反函数或单位圆求 $\\theta$。例如 $2\\sin\\theta - 1 = 0 \\Rightarrow \\sin\\theta = \\frac{1}{2} \\Rightarrow \\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$（在 $[0, 2\\pi)$ 内）。",
        },
        whenToUse: { en: "First step in almost every trig equation", zh: "几乎每个三角方程的第一步" },
        commonMistake: { en: "Finding only one angle when there are two (or more) in $[0, 2\\pi)$", zh: "在 $[0, 2\\pi)$ 内有两个（或更多）解时只找到一个" },
        example: { en: "$\\cos\\theta = -\\frac{\\sqrt{2}}{2}$: $\\theta = \\frac{3\\pi}{4}, \\frac{5\\pi}{4}$", zh: "$\\cos\\theta = -\\frac{\\sqrt{2}}{2}$：$\\theta = \\frac{3\\pi}{4}, \\frac{5\\pi}{4}$" },
      },
      {
        id: "kc-5-3-2",
        title: { en: "Factoring Trig Equations", zh: "因式分解三角方程" },
        explanation: {
          en: "When a trig equation is quadratic (e.g., $2\\sin^2\\theta - \\sin\\theta - 1 = 0$), let $u = \\sin\\theta$, factor the quadratic, and solve each factor. Do NOT divide both sides by a trig function — you may lose solutions where that function equals zero.",
          zh: "当三角方程��二次式（如 $2\\sin^2\\theta - \\sin\\theta - 1 = 0$）时，令 $u = \\sin\\theta$，因式分解二次式，解每个因子。不要两边同除三角函数——可能丢失该函数为零的解。",
        },
        whenToUse: { en: "Equations that are quadratic in sin, cos, or tan", zh: "关于 sin、cos 或 tan 的二次方程" },
        commonMistake: { en: "Dividing by $\\sin\\theta$ and losing the solution $\\sin\\theta = 0$", zh: "两边除以 $\\sin\\theta$ 而丢失 $\\sin\\theta = 0$ 的解" },
        example: { en: "$2\\sin^2\\theta - \\sin\\theta = 0 \\Rightarrow \\sin\\theta(2\\sin\\theta - 1) = 0 \\Rightarrow \\sin\\theta = 0$ or $\\sin\\theta = \\frac{1}{2}$", zh: "$2\\sin^2\\theta - \\sin\\theta = 0 \\Rightarrow \\sin\\theta(2\\sin\\theta - 1) = 0 \\Rightarrow \\sin\\theta = 0$ 或 $\\sin\\theta = \\frac{1}{2}$" },
      },
      {
        id: "kc-5-3-3",
        title: { en: "General Solutions vs. Specific Interval", zh: "通解与特定区间的解" },
        explanation: {
          en: "General solution: add the full period. For sine/cosine: $\\theta = \\alpha + 2n\\pi$ ($n$ integer). For tangent: $\\theta = \\alpha + n\\pi$. Specific interval (e.g., $[0, 2\\pi)$): list only the solutions that fall in the interval.",
          zh: "通解：加上完整周期。对 sin/cos：$\\theta = \\alpha + 2n\\pi$（$n$ 为整数）。对 tan：$\\theta = \\alpha + n\\pi$。特定区间（如 $[0, 2\\pi)$）：只列出落在区间内的解。",
        },
        whenToUse: { en: "Deciding whether to give all solutions or just those in a specific interval", zh: "决定是给出所有解还是仅给特定区间内的解" },
        commonMistake: { en: "Giving the general solution when the problem asks for $[0, 2\\pi)$ only, or vice versa", zh: "题目要求 $[0, 2\\pi)$ 内的解却给了通解，或反之" },
        example: { en: "$\\sin\\theta = \\frac{1}{2}$: on $[0, 2\\pi)$: $\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$. General: $\\theta = \\frac{\\pi}{6} + 2n\\pi$ or $\\frac{5\\pi}{6} + 2n\\pi$", zh: "$\\sin\\theta = \\frac{1}{2}$：在 $[0, 2\\pi)$：$\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$。通解：$\\theta = \\frac{\\pi}{6} + 2n\\pi$ 或 $\\frac{5\\pi}{6} + 2n\\pi$" },
      },
    ],
    formulas: [
      {
        id: "f-5-3-1",
        name: { en: "General Solution Patterns", zh: "通解模式" },
        formula: "\\sin\\theta = a: \\; \\theta = \\arcsin(a) + 2n\\pi \\; \\text{or} \\; \\pi - \\arcsin(a) + 2n\\pi",
        variables: [
          { en: "$\\cos\\theta = a$: $\\theta = \\pm\\arccos(a) + 2n\\pi$", zh: "$\\cos\\theta = a$：$\\theta = \\pm\\arccos(a) + 2n\\pi$" },
          { en: "$\\tan\\theta = a$: $\\theta = \\arctan(a) + n\\pi$", zh: "$\\tan\\theta = a$：$\\theta = \\arctan(a) + n\\pi$" },
          { en: "$n$ is any integer", zh: "$n$ 为任意整数" },
        ],
        whenToUse: { en: "Writing the complete set of solutions to a trig equation", zh: "写出三角方程的完整解集" },
        commonProblemTypes: [
          { en: "Find all solutions of a trig equation", zh: "求三角方程的所有解" },
          { en: "Find solutions in $[0, 2\\pi)$", zh: "求 $[0, 2\\pi)$ 内的解" },
        ],
        example: { en: "$\\tan\\theta = 1$: $\\theta = \\frac{\\pi}{4} + n\\pi$", zh: "$\\tan\\theta = 1$：$\\theta = \\frac{\\pi}{4} + n\\pi$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-5-3-1",
        title: { en: "Solve a Linear Trig Equation", zh: "解一次三角方程" },
        description: { en: "Solve equations like $2\\cos\\theta + 1 = 0$.", zh: "解如 $2\\cos\\theta + 1 = 0$ 的方程。" },
        howToRecognize: { en: "One trig function, first power, simple algebra.", zh: "一个三角函数、一次、简单代数。" },
        steps: [
          { en: "Isolate the trig function", zh: "分离三角函数" },
          { en: "Find all angles with that value in the given interval", zh: "在给定区间找所有满足的角" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Solve $2\\sin\\theta - \\sqrt{3} = 0$ on $[0, 2\\pi)$.", zh: "在 $[0, 2\\pi)$ 上解 $2\\sin\\theta - \\sqrt{3} = 0$。" },
        commonTraps: [
          { en: "Finding only $\\frac{\\pi}{3}$ and missing $\\frac{2\\pi}{3}$", zh: "只找到 $\\frac{\\pi}{3}$ 而漏掉 $\\frac{2\\pi}{3}$" },
        ],
      },
      {
        id: "pt-5-3-2",
        title: { en: "Solve $\\tan\\theta = k$", zh: "解 $\\tan\\theta = k$" },
        description: { en: "Find solutions using the shorter period of tangent ($\\pi$).", zh: "利用正切较短的周期（$\\pi$）求解。" },
        howToRecognize: { en: "Equation involves $\\tan$ only.", zh: "方程只含 $\\tan$。" },
        steps: [
          { en: "Find the reference angle: $\\theta' = \\arctan|k|$", zh: "求参考角：$\\theta' = \\arctan|k|$" },
          { en: "Solutions are $\\theta' + n\\pi$ (or $-\\theta' + n\\pi$ for negative $k$ depending on convention)", zh: "解为 $\\theta' + n\\pi$（负 $k$ 时可能为 $-\\theta' + n\\pi$）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Solve $\\tan\\theta = -1$ on $[0, 2\\pi)$.", zh: "在 $[0, 2\\pi)$ 上解 $\\tan\\theta = -1$。" },
        commonTraps: [
          { en: "Using $2\\pi$ as the period instead of $\\pi$", zh: "用 $2\\pi$ 而非 $\\pi$ 作为周期" },
        ],
      },
      {
        id: "pt-5-3-3",
        title: { en: "Solve Trig Equation with No Solution Check", zh: "检验三角方程是否有解" },
        description: { en: "Determine if a trig equation has solutions (e.g., $\\sin\\theta = 2$).", zh: "判断三角方程是否有解（如 $\\sin\\theta = 2$）。" },
        howToRecognize: { en: "Isolated trig value is outside the function's range.", zh: "分离出的三角值超出函数的值域。" },
        steps: [
          { en: "Isolate the trig function", zh: "分离三角函数" },
          { en: "Check if the value is in the range ($[-1, 1]$ for sin/cos)", zh: "检查值是否在值域内（sin/cos 为 $[-1, 1]$）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Solve $\\cos\\theta = -3$.", zh: "解 $\\cos\\theta = -3$。" },
        commonTraps: [
          { en: "Trying to find an angle for $\\cos\\theta = -3$ — no solution exists", zh: "试图为 $\\cos\\theta = -3$ 找角——无解" },
        ],
      },
      {
        id: "pt-5-3-4",
        title: { en: "Write General Solution", zh: "写出通解" },
        description: { en: "Express the complete solution set with the $+ 2n\\pi$ or $+ n\\pi$ form.", zh: "用 $+ 2n\\pi$ 或 $+ n\\pi$ 形式表达完整解集。" },
        howToRecognize: { en: "Problem says \"find all solutions\" without restricting an interval.", zh: "题目说求所有解，未限定区间。" },
        steps: [
          { en: "Find solutions in one period", zh: "在一个周期内找解" },
          { en: "Add $+ 2n\\pi$ (for sin/cos) or $+ n\\pi$ (for tan)", zh: "加上 $+ 2n\\pi$（sin/cos）或 $+ n\\pi$（tan）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find all solutions of $\\sin\\theta = -\\frac{\\sqrt{2}}{2}$.", zh: "求 $\\sin\\theta = -\\frac{\\sqrt{2}}{2}$ 的所有解。" },
        commonTraps: [
          { en: "Listing only one family of solutions when there are two", zh: "有两族解时只列了一族" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-5-3-5",
        title: { en: "Solve by Factoring", zh: "因式分解求解" },
        description: { en: "Factor a trig equation into a product of factors and solve each.", zh: "将三角方程分解为因式之积并分别求解。" },
        howToRecognize: { en: "Equation is quadratic in a trig function, or has a common trig factor.", zh: "方程关于某三角函数为二次，或有公因子。" },
        steps: [
          { en: "Factor (common factor, quadratic, etc.)", zh: "因式分解（提取公因子、二次分解等）" },
          { en: "Set each factor equal to zero", zh: "令每个因子等于零" },
          { en: "Solve each equation separately", zh: "分别求解每个方程" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $2\\cos^2\\theta - \\cos\\theta - 1 = 0$ on $[0, 2\\pi)$.", zh: "在 $[0, 2\\pi)$ 上解 $2\\cos^2\\theta - \\cos\\theta - 1 = 0$。" },
        commonTraps: [
          { en: "Dividing by $\\cos\\theta$ instead of factoring — loses the $\\cos\\theta = 0$ solutions", zh: "除以 $\\cos\\theta$ 而非分解——丢失 $\\cos\\theta = 0$ 的解" },
        ],
      },
      {
        id: "pt-5-3-6",
        title: { en: "Solve Using Pythagorean Identity", zh: "用毕达哥拉斯恒等式求解" },
        description: { en: "Use $\\sin^2 + \\cos^2 = 1$ to convert to a single trig function, then solve.", zh: "用 $\\sin^2 + \\cos^2 = 1$ 化为单一三角函数后求解。" },
        howToRecognize: { en: "Equation mixes $\\sin^2$ and $\\cos$ (or vice versa).", zh: "���程混合 $\\sin^2$ 和 $\\cos$（或反之）。" },
        steps: [
          { en: "Replace $\\sin^2\\theta$ with $1 - \\cos^2\\theta$ (or vice versa)", zh: "用 $1 - \\cos^2\\theta$ 替换 $\\sin^2\\theta$（或反之）" },
          { en: "Simplify to a quadratic in one trig function", zh: "化简为关于单一三角函数的二次式" },
          { en: "Factor and solve", zh: "因式分解并求解" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $2\\sin^2\\theta + 3\\cos\\theta - 3 = 0$ on $[0, 2\\pi)$.", zh: "在 $[0, 2\\pi)$ 上解 $2\\sin^2\\theta + 3\\cos\\theta - 3 = 0$。" },
        commonTraps: [
          { en: "Forgetting to check if $\\cos\\theta$ values are in $[-1, 1]$ after solving the quadratic", zh: "解完二次方程后忘��检查 $\\cos\\theta$ 值是否在 $[-1, 1]$ 内" },
        ],
      },
      {
        id: "pt-5-3-7",
        title: { en: "Solve Equations with Multiple Angles", zh: "含倍角的���程" },
        description: { en: "Solve equations like $\\sin(2\\theta) = \\frac{\\sqrt{3}}{2}$ or $\\cos(3\\theta) = 0$.", zh: "解如 $\\sin(2\\theta) = \\frac{\\sqrt{3}}{2}$ 或 $\\cos(3\\theta) = 0$ 的方程。" },
        howToRecognize: { en: "Argument of the trig function is $2\\theta$, $3\\theta$, etc.", zh: "三角函数的自变量为 $2\\theta$、$3\\theta$ 等。" },
        steps: [
          { en: "Let $u = 2\\theta$ (or $3\\theta$, etc.) and solve for $u$ first", zh: "令 $u = 2\\theta$（或 $3\\theta$ 等），先解出 $u$" },
          { en: "Expand the interval: if $\\theta \\in [0, 2\\pi)$, then $u \\in [0, 4\\pi)$ for $2\\theta$", zh: "扩展区间：若 $\\theta \\in [0, 2\\pi)$，则 $u \\in [0, 4\\pi)$（对 $2\\theta$）" },
          { en: "Find all $u$ in the expanded interval, then divide by 2 (or 3) to get $\\theta$", zh: "在扩展区间找所有 $u$，再除以 2（或 3）得 $\\theta$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $\\sin(2\\theta) = \\frac{1}{2}$ on $[0, 2\\pi)$.", zh: "在 $[0, 2\\pi)$ 上解 $\\sin(2\\theta) = \\frac{1}{2}$。" },
        commonTraps: [
          { en: "Not expanding the interval — there are typically twice as many solutions for $2\\theta$", zh: "没扩展区���——$2\\theta$ 通常有双倍的解" },
        ],
      },
      {
        id: "pt-5-3-8",
        title: { en: "Solve Using Square Root Property", zh: "用开方法求解" },
        description: { en: "Solve equations like $\\tan^2\\theta = 3$ by taking square roots.", zh: "用开方法解如 $\\tan^2\\theta = 3$ 的方程。" },
        howToRecognize: { en: "Equation has a squared trig function equal to a constant.", zh: "方程中三角函数的平方等于常数。" },
        steps: [
          { en: "Take the square root: $\\tan\\theta = \\pm\\sqrt{3}$", zh: "开方：$\\tan\\theta = \\pm\\sqrt{3}$" },
          { en: "Solve each case separately", zh: "分别求解每种情况" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $4\\cos^2\\theta - 3 = 0$ on $[0, 2\\pi)$.", zh: "在 $[0, 2\\pi)$ 上解 $4\\cos^2\\theta - 3 = 0$。" },
        commonTraps: [
          { en: "Forgetting the $\\pm$ when taking the square root — both signs give valid solutions", zh: "开方时忘记 $\\pm$——两个符号都给出有效解" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-5-3-9",
        title: { en: "Solve Trig Equation Requiring Identity + Factoring", zh: "需恒等式加因式分解的三角方程" },
        description: { en: "Use an identity to rewrite, then factor and solve.", zh: "先用恒等式改写，再因式分解求解。" },
        howToRecognize: { en: "Equation mixes multiple trig functions and doesn't factor directly.", zh: "方程混合多��三角函数且不能直接分解。" },
        steps: [
          { en: "Use an identity to convert to a single trig function", zh: "用恒等式化为单一三角函数" },
          { en: "Rearrange into standard form (e.g., $au^2 + bu + c = 0$)", zh: "整理为标准形式（如 $au^2 + bu + c = 0$）" },
          { en: "Factor and solve each factor", zh: "因式分解并求解每个因子" },
          { en: "Check all solutions in the original equation", zh: "在原方程中验证所有解" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Solve $\\sec^2\\theta - 2\\tan\\theta = 4$ on $[0, 2\\pi)$.", zh: "在 $[0, 2\\pi)$ 上解 $\\sec^2\\theta - 2\\tan\\theta = 4$。" },
        commonTraps: [
          { en: "Not substituting $\\sec^2\\theta = 1 + \\tan^2\\theta$ to get a quadratic in $\\tan\\theta$", zh: "没代入 $\\sec^2\\theta = 1 + \\tan^2\\theta$ 以得到关于 $\\tan\\theta$ 的二次式" },
        ],
      },
      {
        id: "pt-5-3-10",
        title: { en: "Approximate Solutions with Calculator", zh: "用计算器求近似解" },
        description: { en: "Use inverse trig functions on a calculator when exact values are not available.", zh: "当精确值不可得时用计算器的反三角函数。" },
        howToRecognize: { en: "The trig value is not a standard unit-circle value.", zh: "三角值不是标准单位圆值。" },
        steps: [
          { en: "Isolate the trig function", zh: "分离三角函数" },
          { en: "Use calculator to find the reference angle", zh: "用计算器求参考角" },
          { en: "Use the quadrant to find all solutions", zh: "根据象限找所有解" },
          { en: "Round to the required precision", zh: "按要求精度四舍五入" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Solve $3\\sin\\theta + 2 = 0$ on $[0, 2\\pi)$ to four decimal places.", zh: "在 $[0, 2\\pi)$ 上解 $3\\sin\\theta + 2 = 0$（保留四位小数）。" },
        commonTraps: [
          { en: "Only finding one angle from the calculator and forgetting the other quadrant solution", zh: "只从计算器得到一个角而忘记另一个象限的解" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Use sum and difference formulas for sine, cosine, and tangent", zh: "���用正弦、余弦和正切的和差公式" },
      { en: "Evaluate trig functions at non-standard angles by splitting into standard ones", zh: "将非标准角拆为标准角之和/差来求三角函数值" },
      { en: "Simplify expressions using sum/difference formulas", zh: "用和差公式化简表达式" },
      { en: "Verify identities using sum/difference formulas", zh: "用和差公式验证恒等式" },
    ],
    keyConcepts: [
      {
        id: "kc-5-4-1",
        title: { en: "Sum and Difference Formulas for Sine and Cosine", zh: "正弦和余弦的和差公式" },
        explanation: {
          en: "$\\cos(u \\pm v) = \\cos u \\cos v \\mp \\sin u \\sin v$ (note the sign flip). $\\sin(u \\pm v) = \\sin u \\cos v \\pm \\cos u \\sin v$ (same sign). These allow evaluating trig at angles like $75° = 45° + 30°$ or $\\frac{\\pi}{12} = \\frac{\\pi}{3} - \\frac{\\pi}{4}$.",
          zh: "$\\cos(u \\pm v) = \\cos u \\cos v \\mp \\sin u \\sin v$（注意符号翻转）。$\\sin(u \\pm v) = \\sin u \\cos v \\pm \\cos u \\sin v$（同号）。这些公式可用来求如 $75° = 45° + 30°$ 或 $\\frac{\\pi}{12} = \\frac{\\pi}{3} - \\frac{\\pi}{4}$ 处的三角值。",
        },
        whenToUse: { en: "Evaluating trig at non-standard angles; simplifying expressions with angle sums/differences", zh: "求非标准角的三角值；化简含角和/差的表达式" },
        commonMistake: { en: "Getting the sign wrong in the cosine formula — $\\cos(u+v)$ has a MINUS between the terms", zh: "余弦公式符号搞错——$\\cos(u+v)$ 两项之间是减号" },
        example: { en: "$\\cos 75° = \\cos(45° + 30°) = \\cos 45°\\cos 30° - \\sin 45°\\sin 30° = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$", zh: "$\\cos 75° = \\cos(45° + 30°) = \\cos 45°\\cos 30° - \\sin 45°\\sin 30° = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$" },
      },
      {
        id: "kc-5-4-2",
        title: { en: "Sum and Difference Formula for Tangent", zh: "正切的和差公式" },
        explanation: {
          en: "$\\tan(u \\pm v) = \\frac{\\tan u \\pm \\tan v}{1 \\mp \\tan u \\tan v}$. Less commonly used but essential for evaluating tangent at non-standard angles.",
          zh: "$\\tan(u \\pm v) = \\frac{\\tan u \\pm \\tan v}{1 \\mp \\tan u \\tan v}$。使用频率较低，但在求非标准角的正切值时不可缺少。",
        },
        whenToUse: { en: "Finding exact values of tangent at angles like $75°$ or $\\frac{7\\pi}{12}$", zh: "求如 $75°$ 或 $\\frac{7\\pi}{12}$ 处的正切精确值" },
        commonMistake: { en: "Sign error in the denominator — it's $1 \\mp \\tan u \\tan v$ (opposite sign from numerator)", zh: "分母符号错误——是 $1 \\mp \\tan u \\tan v$（与分子相反）" },
        example: { en: "$\\tan 75° = \\frac{\\tan 45° + \\tan 30°}{1 - \\tan 45° \\tan 30°} = \\frac{1 + \\frac{\\sqrt{3}}{3}}{1 - \\frac{\\sqrt{3}}{3}} = 2 + \\sqrt{3}$", zh: "$\\tan 75° = \\frac{\\tan 45° + \\tan 30°}{1 - \\tan 45° \\tan 30°} = \\frac{1 + \\frac{\\sqrt{3}}{3}}{1 - \\frac{\\sqrt{3}}{3}} = 2 + \\sqrt{3}$" },
      },
    ],
    formulas: [
      {
        id: "f-5-4-1",
        name: { en: "Sum/Difference Formulas", zh: "和差公式" },
        formula: "\\sin(u \\pm v) = \\sin u\\cos v \\pm \\cos u\\sin v, \\quad \\cos(u \\pm v) = \\cos u\\cos v \\mp \\sin u\\sin v",
        variables: [
          { en: "$u, v$ — any angles", zh: "$u, v$ — 任意角" },
          { en: "Sine: same sign as the $\\pm$. Cosine: opposite sign.", zh: "正弦：与 $\\pm$ 同号。余弦：与 $\\pm$ 反号。" },
        ],
        whenToUse: { en: "Expanding or collapsing trig of angle sums/differences", zh: "展开或合并角和/差的三角函数" },
        commonProblemTypes: [
          { en: "Find exact value of $\\sin 75°$ or $\\cos\\frac{\\pi}{12}$", zh: "求 $\\sin 75°$ 或 $\\cos\\frac{\\pi}{12}$ 的精确值" },
          { en: "Simplify $\\sin(x + \\frac{\\pi}{2})$", zh: "化简 $\\sin(x + \\frac{\\pi}{2})$" },
        ],
        example: { en: "$\\sin(\\frac{\\pi}{3} + \\frac{\\pi}{4}) = \\sin\\frac{\\pi}{3}\\cos\\frac{\\pi}{4} + \\cos\\frac{\\pi}{3}\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$", zh: "$\\sin(\\frac{\\pi}{3} + \\frac{\\pi}{4}) = \\sin\\frac{\\pi}{3}\\cos\\frac{\\pi}{4} + \\cos\\frac{\\pi}{3}\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$" },
      },
      {
        id: "f-5-4-2",
        name: { en: "Tangent Sum/Difference", zh: "正切和差公式" },
        formula: "\\tan(u \\pm v) = \\frac{\\tan u \\pm \\tan v}{1 \\mp \\tan u \\tan v}",
        variables: [
          { en: "Numerator sign matches $\\pm$; denominator sign is opposite", zh: "分子符号与 $\\pm$ 相同；分母符号相反" },
        ],
        whenToUse: { en: "Finding tangent of a sum or difference of angles", zh: "求角和或角差的正切值" },
        commonProblemTypes: [
          { en: "Evaluate $\\tan 15°$ or $\\tan\\frac{5\\pi}{12}$", zh: "求 $\\tan 15°$ 或 $\\tan\\frac{5\\pi}{12}$" },
        ],
        example: { en: "$\\tan 15° = \\tan(45° - 30°) = \\frac{1 - \\frac{\\sqrt{3}}{3}}{1 + \\frac{\\sqrt{3}}{3}} = 2 - \\sqrt{3}$", zh: "$\\tan 15° = \\tan(45° - 30°) = \\frac{1 - \\frac{\\sqrt{3}}{3}}{1 + \\frac{\\sqrt{3}}{3}} = 2 - \\sqrt{3}$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-5-4-1",
        title: { en: "Evaluate Trig at Non-Standard Angle", zh: "求非标准角的三角值" },
        description: { en: "Split the angle into a sum/difference of standard angles and apply the formula.", zh: "将角拆为标准角的和/差并应用公式。" },
        howToRecognize: { en: "Angle like $75°$, $15°$, $\\frac{7\\pi}{12}$, $\\frac{\\pi}{12}$.", zh: "角如 $75°$、$15°$、$\\frac{7\\pi}{12}$、$\\frac{\\pi}{12}$。" },
        steps: [
          { en: "Write the angle as a sum or difference of $30°, 45°, 60°$ (or their radian equivalents)", zh: "将角写为 $30°, 45°, 60°$（或弧度等价）的和/差" },
          { en: "Apply the appropriate formula", zh: "应用合适的公式" },
          { en: "Simplify", zh: "化简" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the exact value of $\\sin 15°$.", zh: "求 $\\sin 15°$ 的精确值。" },
        commonTraps: [
          { en: "Not finding the right split — $15° = 45° - 30°$ or $60° - 45°$", zh: "拆分不当——$15° = 45° - 30°$ 或 $60° - 45°$" },
        ],
      },
      {
        id: "pt-5-4-2",
        title: { en: "Simplify $\\sin(\\theta + \\frac{\\pi}{2})$ Type Expressions", zh: "化简 $\\sin(\\theta + \\frac{\\pi}{2})$ 型表达式" },
        description: { en: "Apply sum formula where one angle is a quadrantal angle.", zh: "当一个角为象限角时应用和差公式。" },
        howToRecognize: { en: "Expression like $\\cos(x + \\pi)$, $\\sin(\\theta - \\frac{\\pi}{2})$, etc.", zh: "表达式如 $\\cos(x + \\pi)$、$\\sin(\\theta - \\frac{\\pi}{2})$ 等。" },
        steps: [
          { en: "Apply the formula with the known values of the quadrantal angle", zh: "代入象限角的已知值应用公式" },
          { en: "Simplify (most terms vanish since $\\sin 0 = 0$, $\\cos\\frac{\\pi}{2} = 0$, etc.)", zh: "化简（大多数项消失，因为 $\\sin 0 = 0$、$\\cos\\frac{\\pi}{2} = 0$ 等）" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Simplify $\\cos(\\theta + \\pi)$.", zh: "化简 $\\cos(\\theta + \\pi)$。" },
        commonTraps: [
          { en: "Distributing the trig function: $\\cos(\\theta + \\pi) \\neq \\cos\\theta + \\cos\\pi$", zh: "分配三角函数：$\\cos(\\theta + \\pi) \\neq \\cos\\theta + \\cos\\pi$" },
        ],
      },
      {
        id: "pt-5-4-3",
        title: { en: "Evaluate Using Given Trig Values", zh: "利用已知三角值求值" },
        description: { en: "Given $\\sin u$ and $\\cos v$ (with quadrants), find $\\sin(u + v)$.", zh: "已知 $\\sin u$ 和 $\\cos v$（含象限），求 $\\sin(u + v)$。" },
        howToRecognize: { en: "Two trig values and their quadrants given; asked for a sum/difference value.", zh: "给出两个三角值及其象限；要求和/差的值。" },
        steps: [
          { en: "Use Pythagorean identity to find missing sin/cos values", zh: "用毕达哥拉斯恒等式求缺失的 sin/cos 值" },
          { en: "Apply the sum/difference formula", zh: "应用和差公式" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "If $\\sin u = \\frac{3}{5}$ (QI) and $\\cos v = -\\frac{5}{13}$ (QII), find $\\cos(u + v)$.", zh: "若 $\\sin u = \\frac{3}{5}$（第一象限）且 $\\cos v = -\\frac{5}{13}$（第二象限），求 $\\cos(u + v)$。" },
        commonTraps: [
          { en: "Wrong sign on the missing value due to quadrant", zh: "因象限导致缺失值符号错误" },
        ],
      },
      {
        id: "pt-5-4-4",
        title: { en: "Recognize and Collapse a Sum Formula Pattern", zh: "识别并合并和差公式模式" },
        description: { en: "Recognize that $\\sin A\\cos B + \\cos A\\sin B = \\sin(A+B)$ in a given expression.", zh: "在表达式中识别 $\\sin A\\cos B + \\cos A\\sin B = \\sin(A+B)$。" },
        howToRecognize: { en: "Expression matches the expanded form of a sum/difference formula.", zh: "表达式匹配和差公式的展开形式。" },
        steps: [
          { en: "Identify the pattern ($\\sin\\cos \\pm \\cos\\sin$ or $\\cos\\cos \\mp \\sin\\sin$)", zh: "识别模式（$\\sin\\cos \\pm \\cos\\sin$ 或 $\\cos\\cos \\mp \\sin\\sin$）" },
          { en: "Write as a single trig function of a sum/difference", zh: "写为和/差的单一三角函数" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Simplify $\\sin 3x \\cos x - \\cos 3x \\sin x$.", zh: "化简 $\\sin 3x \\cos x - \\cos 3x \\sin x$。" },
        commonTraps: [
          { en: "Not recognizing the pattern — it's $\\sin(3x - x) = \\sin 2x$", zh: "没认出模式——它是 $\\sin(3x - x) = \\sin 2x$" },
        ],
      },
      // ── Medium (3) ────────────────────────────────────────
      {
        id: "pt-5-4-5",
        title: { en: "Verify Identity Using Sum/Difference Formulas", zh: "用和差公式验证恒等式" },
        description: { en: "Verify an identity by expanding one side using sum/difference formulas.", zh: "用和差公式展开一边来验证恒等式。" },
        howToRecognize: { en: "Identity involves $\\sin(A \\pm B)$ or $\\cos(A \\pm B)$.", zh: "恒等式涉及 $\\sin(A \\pm B)$ 或 $\\cos(A \\pm B)$。" },
        steps: [
          { en: "Expand using the appropriate formula", zh: "用合适的公式展开" },
          { en: "Simplify to match the other side", zh: "化简使其等于另一边" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Verify: $\\sin(\\frac{\\pi}{2} - \\theta) = \\cos\\theta$.", zh: "验证：$\\sin(\\frac{\\pi}{2} - \\theta) = \\cos\\theta$。" },
        commonTraps: [
          { en: "Using the wrong formula (sum vs. difference)", zh: "用错公式（和 vs 差）" },
        ],
      },
      {
        id: "pt-5-4-6",
        title: { en: "Find $\\tan(u + v)$ from Given Values", zh: "由已知值求 $\\tan(u + v)$" },
        description: { en: "Use the tangent sum formula with given tangent values.", zh: "用正切和公式和已知正切值。" },
        howToRecognize: { en: "Given $\\tan u$ and $\\tan v$; asked for $\\tan(u \\pm v)$.", zh: "给出 $\\tan u$ 和 $\\tan v$；要求 $\\tan(u \\pm v)$。" },
        steps: [
          { en: "Apply $\\tan(u+v) = \\frac{\\tan u + \\tan v}{1 - \\tan u\\tan v}$", zh: "应用 $\\tan(u+v) = \\frac{\\tan u + \\tan v}{1 - \\tan u\\tan v}$" },
          { en: "Simplify the fraction", zh: "化简分式" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "If $\\tan u = 2$ and $\\tan v = 3$, find $\\tan(u + v)$.", zh: "若 $\\tan u = 2$ 且 $\\tan v = 3$，求 $\\tan(u + v)$。" },
        commonTraps: [
          { en: "Sign error in the denominator", zh: "分母符号错误" },
        ],
      },
      {
        id: "pt-5-4-7",
        title: { en: "Solve Equation Using Sum/Difference Formula", zh: "用和差公式解方程" },
        description: { en: "Solve a trig equation by expanding a sum/difference expression.", zh: "展开和差表达式来解三角方程。" },
        howToRecognize: { en: "Equation contains $\\sin(x + \\alpha)$ or $\\cos(x - \\alpha)$ with known $\\alpha$.", zh: "方程含 $\\sin(x + \\alpha)$ 或 $\\cos(x - \\alpha)$，$\\alpha$ 已知。" },
        steps: [
          { en: "Expand using sum/difference formula", zh: "用和差公式展开" },
          { en: "Collect terms and solve", zh: "整理并求解" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $\\sin(x + \\frac{\\pi}{4}) = \\frac{1}{2}$ on $[0, 2\\pi)$.", zh: "在 $[0, 2\\pi)$ 上解 $\\sin(x + \\frac{\\pi}{4}) = \\frac{1}{2}$。" },
        commonTraps: [
          { en: "Forgetting to adjust the interval when solving for $x + \\frac{\\pi}{4}$", zh: "解 $x + \\frac{\\pi}{4}$ 时忘记调整区间" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-5-4-8",
        title: { en: "Derive a Cofunction or Reduction Formula", zh: "推导余函数或化简公式" },
        description: { en: "Use sum/difference formulas to derive identities like $\\cos(\\pi - \\theta) = -\\cos\\theta$.", zh: "用和差公式推导如 $\\cos(\\pi - \\theta) = -\\cos\\theta$ 的恒等式。" },
        howToRecognize: { en: "Asked to prove a reduction formula from first principles.", zh: "要求从基本原理证明化简公式。" },
        steps: [
          { en: "Write the angle as a sum or difference involving $\\frac{\\pi}{2}$, $\\pi$, or $2\\pi$", zh: "将角写为含 $\\frac{\\pi}{2}$、$\\pi$ 或 $2\\pi$ 的和/差" },
          { en: "Apply the sum/difference formula", zh: "应用和差公式" },
          { en: "Use known values ($\\sin\\pi = 0$, $\\cos\\pi = -1$, etc.) to simplify", zh: "用已知值（$\\sin\\pi = 0$、$\\cos\\pi = -1$ 等）化简" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Prove that $\\sin(\\pi + \\theta) = -\\sin\\theta$ using the sum formula.", zh: "用和公式证明 $\\sin(\\pi + \\theta) = -\\sin\\theta$。" },
        commonTraps: [
          { en: "Using the result you're trying to prove as a step — this is circular reasoning", zh: "在证明中使用要证的结论——这是循环论证" },
        ],
      },
      {
        id: "pt-5-4-9",
        title: { en: "Multi-Step Problem Combining Sum/Difference with Other Identities", zh: "和差公式与其他恒等式的综合题" },
        description: { en: "Problems requiring sum/difference formulas together with Pythagorean or reciprocal identities.", zh: "需要和差公式与毕达哥拉斯或倒数恒等��配合的问题。" },
        howToRecognize: { en: "Complex expression or equation requiring multiple identity types.", zh: "需要多种恒等式的复杂表达式或方程。" },
        steps: [
          { en: "Identify which formulas are needed", zh: "确定需要哪些公式" },
          { en: "Apply them in a logical sequence", zh: "按逻辑顺序应用" },
          { en: "Simplify at each step", zh: "每步都化简" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "If $\\sin(\\alpha + \\beta) = 1$ and $\\sin(\\alpha - \\beta) = \\frac{1}{2}$, find $\\sin\\alpha\\cos\\alpha$.", zh: "若 $\\sin(\\alpha + \\beta) = 1$ 且 $\\sin(\\alpha - \\beta) = \\frac{1}{2}$，求 $\\sin\\alpha\\cos\\alpha$。" },
        commonTraps: [
          { en: "Not adding/subtracting the expanded formulas to isolate the desired product", zh: "不将展开式加减以分离所求乘积" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Use double-angle formulas for sine, cosine, and tangent", zh: "使用正弦、余弦和正切的倍角公式" },
      { en: "Use half-angle formulas", zh: "使用半角公式" },
      { en: "Use power-reducing formulas", zh: "使用降幂公式" },
      { en: "Use product-to-sum and sum-to-product formulas", zh: "使用积化和差与和差化积公式" },
    ],
    keyConcepts: [
      {
        id: "kc-5-5-1",
        title: { en: "Double-Angle Formulas", zh: "倍角公式" },
        explanation: {
          en: "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$. $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$ (three forms). $\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$. Derived by setting $u = v = \\theta$ in the sum formulas.",
          zh: "$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$。$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$（三种形式）。$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$。由和公式中令 $u = v = \\theta$ 推出。",
        },
        whenToUse: { en: "Simplifying expressions with $2\\theta$; solving equations with double angles", zh: "化简含 $2\\theta$ 的表达式；解含倍角的方程" },
        commonMistake: { en: "$\\sin 2\\theta \\neq 2\\sin\\theta$ — the $2\\cos\\theta$ factor is essential", zh: "$\\sin 2\\theta \\neq 2\\sin\\theta$——$2\\cos\\theta$ 因子不可少" },
        example: { en: "If $\\sin\\theta = \\frac{3}{5}$, $\\cos\\theta = \\frac{4}{5}$: $\\sin 2\\theta = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}$", zh: "若 $\\sin\\theta = \\frac{3}{5}$，$\\cos\\theta = \\frac{4}{5}$：$\\sin 2\\theta = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}$" },
      },
      {
        id: "kc-5-5-2",
        title: { en: "Half-Angle and Power-Reducing Formulas", zh: "半角与降幂公式" },
        explanation: {
          en: "Half-angle: $\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$, $\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}$, $\\tan\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1 + \\cos\\theta}$. The $\\pm$ depends on the quadrant of $\\frac{\\theta}{2}$. Power-reducing: $\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$, $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$.",
          zh: "半角：$\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$，$\\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 + \\cos\\theta}{2}}$，$\\tan\\frac{\\theta}{2} = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1 + \\cos\\theta}$。$\\pm$ 取决于 $\\frac{\\theta}{2}$ 所在象限。降幂：$\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$，$\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$。",
        },
        whenToUse: { en: "Finding exact values at half-angles; reducing powers for integration", zh: "求半角的精确值；为积分降幂" },
        commonMistake: { en: "Choosing the wrong sign for the half-angle — determine the quadrant of $\\frac{\\theta}{2}$, not $\\theta$", zh: "半角符号选错——应根据 $\\frac{\\theta}{2}$ 而非 $\\theta$ 的象限" },
        example: { en: "$\\cos\\frac{\\pi}{8} = \\cos\\frac{\\pi/4}{2} = \\sqrt{\\frac{1 + \\cos\\frac{\\pi}{4}}{2}} = \\sqrt{\\frac{1 + \\frac{\\sqrt{2}}{2}}{2}} = \\frac{\\sqrt{2 + \\sqrt{2}}}{2}$", zh: "$\\cos\\frac{\\pi}{8} = \\cos\\frac{\\pi/4}{2} = \\sqrt{\\frac{1 + \\cos\\frac{\\pi}{4}}{2}} = \\sqrt{\\frac{1 + \\frac{\\sqrt{2}}{2}}{2}} = \\frac{\\sqrt{2 + \\sqrt{2}}}{2}$" },
      },
      {
        id: "kc-5-5-3",
        title: { en: "Product-to-Sum and Sum-to-Product Formulas", zh: "积化和差与和差化积公式" },
        explanation: {
          en: "Product-to-sum: $\\sin u \\cos v = \\frac{1}{2}[\\sin(u+v) + \\sin(u-v)]$, $\\cos u \\cos v = \\frac{1}{2}[\\cos(u-v) + \\cos(u+v)]$, $\\sin u \\sin v = \\frac{1}{2}[\\cos(u-v) - \\cos(u+v)]$. Sum-to-product: $\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$, etc.",
          zh: "积化和差：$\\sin u \\cos v = \\frac{1}{2}[\\sin(u+v) + \\sin(u-v)]$，$\\cos u \\cos v = \\frac{1}{2}[\\cos(u-v) + \\cos(u+v)]$，$\\sin u \\sin v = \\frac{1}{2}[\\cos(u-v) - \\cos(u+v)]$。和差化积：$\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$ 等。",
        },
        whenToUse: { en: "Simplifying products of trig functions into sums, or vice versa", zh: "将三角函数之积化为和，或反之" },
        commonMistake: { en: "Mixing up which formula has $+$ or $-$ — check the signs carefully for each case", zh: "搞混哪个公式用 $+$ 或 $-$——每种情况都仔细核对符号" },
        example: { en: "$\\sin 5x + \\sin 3x = 2\\sin 4x \\cos x$", zh: "$\\sin 5x + \\sin 3x = 2\\sin 4x \\cos x$" },
      },
    ],
    formulas: [
      {
        id: "f-5-5-1",
        name: { en: "Double-Angle Formulas", zh: "倍角公式" },
        formula: "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta, \\quad \\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta, \\quad \\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}",
        variables: [
          { en: "Alternative forms: $\\cos 2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$", zh: "等价形式：$\\cos 2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$" },
        ],
        whenToUse: { en: "Simplifying or solving expressions with $2\\theta$", zh: "化简或求解含 $2\\theta$ 的表达式" },
        commonProblemTypes: [
          { en: "Find $\\sin 2\\theta$ given $\\sin\\theta$ and the quadrant", zh: "已知 $\\sin\\theta$ 和象限求 $\\sin 2\\theta$" },
          { en: "Rewrite $\\sin^2 x$ without exponents (using $\\cos 2x$)", zh: "用 $\\cos 2x$ 去掉 $\\sin^2 x$ 的指数" },
        ],
        example: { en: "$\\cos 2\\theta = 1 - 2\\sin^2\\theta$: if $\\sin\\theta = \\frac{1}{3}$, $\\cos 2\\theta = 1 - \\frac{2}{9} = \\frac{7}{9}$", zh: "$\\cos 2\\theta = 1 - 2\\sin^2\\theta$：若 $\\sin\\theta = \\frac{1}{3}$，$\\cos 2\\theta = 1 - \\frac{2}{9} = \\frac{7}{9}$" },
      },
      {
        id: "f-5-5-2",
        name: { en: "Half-Angle Formulas", zh: "半角公式" },
        formula: "\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1-\\cos\\theta}{2}}, \\quad \\cos\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1+\\cos\\theta}{2}}",
        variables: [
          { en: "$\\pm$ determined by the quadrant of $\\frac{\\theta}{2}$", zh: "$\\pm$ 由 $\\frac{\\theta}{2}$ 所在象限决定" },
          { en: "$\\tan\\frac{\\theta}{2} = \\frac{1-\\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1+\\cos\\theta}$", zh: "$\\tan\\frac{\\theta}{2} = \\frac{1-\\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1+\\cos\\theta}$" },
        ],
        whenToUse: { en: "Exact trig values at half of a known angle", zh: "��已知角一半处的精确三角值" },
        commonProblemTypes: [
          { en: "Find $\\sin 22.5°$ or $\\cos\\frac{\\pi}{8}$", zh: "求 $\\sin 22.5°$ 或 $\\cos\\frac{\\pi}{8}$" },
        ],
        example: { en: "$\\sin 15° = \\sin\\frac{30°}{2} = \\sqrt{\\frac{1 - \\cos 30°}{2}} = \\sqrt{\\frac{1 - \\frac{\\sqrt{3}}{2}}{2}} = \\frac{\\sqrt{2 - \\sqrt{3}}}{2}$", zh: "$\\sin 15° = \\sin\\frac{30°}{2} = \\sqrt{\\frac{1 - \\cos 30°}{2}} = \\sqrt{\\frac{1 - \\frac{\\sqrt{3}}{2}}{2}} = \\frac{\\sqrt{2 - \\sqrt{3}}}{2}$" },
      },
      {
        id: "f-5-5-3",
        name: { en: "Power-Reducing Formulas", zh: "降幂公式" },
        formula: "\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}, \\quad \\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}, \\quad \\tan^2\\theta = \\frac{1 - \\cos 2\\theta}{1 + \\cos 2\\theta}",
        variables: [
          { en: "Derived from the double-angle formulas for cosine", zh: "由余弦倍角公式推出" },
        ],
        whenToUse: { en: "Rewriting squared trig functions in terms of first power (important for calculus integration)", zh: "将三角函��的平方改写为一次（对微积分积分很重要）" },
        commonProblemTypes: [
          { en: "Rewrite $\\sin^4 x$ without exponents greater than 1", zh: "将 $\\sin^4 x$ 改写为不含大于 1 的指数" },
        ],
        example: { en: "$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$", zh: "$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-5-5-1",
        title: { en: "Evaluate $\\sin 2\\theta$ or $\\cos 2\\theta$ from Given Values", zh: "由已知值求 $\\sin 2\\theta$ 或 $\\cos 2\\theta$" },
        description: { en: "Given $\\sin\\theta$ and/or $\\cos\\theta$ and the quadrant, find $\\sin 2\\theta$ or $\\cos 2\\theta$.", zh: "已知 $\\sin\\theta$ 和/或 $\\cos\\theta$ 及象限，求 $\\sin 2\\theta$ 或 $\\cos 2\\theta$。" },
        howToRecognize: { en: "Given a trig value and quadrant; asked for a double-angle value.", zh: "给出三角值和象限；要求倍角值。" },
        steps: [
          { en: "Find both $\\sin\\theta$ and $\\cos\\theta$ if not both given", zh: "若���同时给出则求出 $\\sin\\theta$ 和 $\\cos\\theta$" },
          { en: "Apply $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ or $\\cos 2\\theta$ formula", zh: "应用 $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$ 或 $\\cos 2\\theta$ 公式" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "If $\\cos\\theta = -\\frac{4}{5}$ and $\\theta$ is in QIII, find $\\sin 2\\theta$.", zh: "若 $\\cos\\theta = -\\frac{4}{5}$ 且 $\\theta$ 在第三象限，求 $\\sin 2\\theta$。" },
        commonTraps: [
          { en: "Using the wrong sign for $\\sin\\theta$ in QIII (it's negative)", zh: "第三象限 $\\sin\\theta$ 的符号用错（应为负）" },
        ],
      },
      {
        id: "pt-5-5-2",
        title: { en: "Use Power-Reducing Formula", zh: "使用降幂公式" },
        description: { en: "Rewrite a squared trig expression without exponents.", zh: "将三角平方表达式改写为不含指数的形式。" },
        howToRecognize: { en: "Expression contains $\\sin^2\\theta$ or $\\cos^2\\theta$; asked to rewrite.", zh: "表达式含 $\\sin^2\\theta$ 或 $\\cos^2\\theta$；要求改写。" },
        steps: [
          { en: "Apply $\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$ or $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$", zh: "应用 $\\sin^2\\theta = \\frac{1 - \\cos 2\\theta}{2}$ 或 $\\cos^2\\theta = \\frac{1 + \\cos 2\\theta}{2}$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Rewrite $\\cos^2 3x$ without exponents.", zh: "将 $\\cos^2 3x$ 改写为不含指数的形式。" },
        commonTraps: [
          { en: "Forgetting to double the angle: $\\cos^2(3x)$ uses $\\cos(6x)$, not $\\cos(3x)$", zh: "忘记角度加倍：$\\cos^2(3x)$ 用 $\\cos(6x)$ 而非 $\\cos(3x)$" },
        ],
      },
      {
        id: "pt-5-5-3",
        title: { en: "Evaluate Half-Angle Expression", zh: "求半角表达式的值" },
        description: { en: "Find the exact value of $\\sin\\frac{\\theta}{2}$ or $\\cos\\frac{\\theta}{2}$.", zh: "求 $\\sin\\frac{\\theta}{2}$ 或 $\\cos\\frac{\\theta}{2}$ 的精确值。" },
        howToRecognize: { en: "Asked for a trig value at half of a known angle (e.g., $\\sin 22.5°$).", zh: "要求已知角一半处的三角值（如 $\\sin 22.5°$）。" },
        steps: [
          { en: "Identify $\\theta$ such that $\\frac{\\theta}{2}$ is the target angle", zh: "找到 $\\theta$ 使得 $\\frac{\\theta}{2}$ 为目标角" },
          { en: "Apply the half-angle formula with the correct $\\pm$ sign", zh: "应用半角公式并选择正确的 $\\pm$ 号" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the exact value of $\\cos 22.5°$.", zh: "求 $\\cos 22.5°$ 的精确值。" },
        commonTraps: [
          { en: "Using $\\theta = 22.5°$ in the formula instead of $\\theta = 45°$ (since $22.5° = \\frac{45°}{2}$)", zh: "在公式中用 $\\theta = 22.5°$ 而非 $\\theta = 45°$（因为 $22.5° = \\frac{45°}{2}$）" },
        ],
      },
      {
        id: "pt-5-5-4",
        title: { en: "Apply Product-to-Sum Formula", zh: "应用积化和差公式" },
        description: { en: "Convert a product of trig functions into a sum or difference.", zh: "将三角函数之积转化为和或差。" },
        howToRecognize: { en: "Expression is a product like $\\sin A \\cos B$ or $\\cos A \\cos B$.", zh: "表达式为乘积如 $\\sin A \\cos B$ 或 $\\cos A \\cos B$。" },
        steps: [
          { en: "Choose the correct product-to-sum formula", zh: "选择正确的积化和差公式" },
          { en: "Substitute and simplify", zh: "代入并化简" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Write $\\sin 5x \\cos 3x$ as a sum.", zh: "将 $\\sin 5x \\cos 3x$ 写为和的形式。" },
        commonTraps: [
          { en: "Using the wrong formula — $\\sin\\cos$ uses the sine formula, $\\cos\\cos$ uses the cosine formula", zh: "用错公式——$\\sin\\cos$ 用正弦公式，$\\cos\\cos$ 用余弦公式" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-5-5-5",
        title: { en: "Solve Equation Using Double-Angle Formula", zh: "用倍角公式解方程" },
        description: { en: "Rewrite a double-angle expression and solve the resulting equation.", zh: "改写倍角表达式并解所得方程。" },
        howToRecognize: { en: "Equation contains $\\sin 2\\theta$ or $\\cos 2\\theta$ mixed with single-angle terms.", zh: "方程含 $\\sin 2\\theta$ 或 $\\cos 2\\theta$ 与单角项混合。" },
        steps: [
          { en: "Replace $\\sin 2\\theta$ or $\\cos 2\\theta$ using double-angle formulas", zh: "用倍角公式替换 $\\sin 2\\theta$ 或 $\\cos 2\\theta$" },
          { en: "Simplify to a single trig function", zh: "化简为单一三角函数" },
          { en: "Solve", zh: "求解" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $\\cos 2x + \\cos x = 0$ on $[0, 2\\pi)$.", zh: "在 $[0, 2\\pi)$ 上解 $\\cos 2x + \\cos x = 0$。" },
        commonTraps: [
          { en: "Not choosing the right form of $\\cos 2x$ — use $2\\cos^2 x - 1$ when the equation also has $\\cos x$", zh: "没选对 $\\cos 2x$ 的形式——方程含 $\\cos x$ 时用 $2\\cos^2 x - 1$" },
        ],
      },
      {
        id: "pt-5-5-6",
        title: { en: "Verify Identity Using Double-Angle Formulas", zh: "用倍角公式验证恒等式" },
        description: { en: "Verify an identity by expanding double-angle expressions.", zh: "通过展开倍角表达式来验证恒等式。" },
        howToRecognize: { en: "Identity involves $\\sin 2\\theta$ or $\\cos 2\\theta$.", zh: "恒等式涉及 $\\sin 2\\theta$ 或 $\\cos 2\\theta$。" },
        steps: [
          { en: "Expand the double-angle expression", zh: "展开倍角表达式" },
          { en: "Simplify and match the other side", zh: "化简并与另一边匹配" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Verify: $\\frac{\\sin 2\\theta}{2\\sin\\theta} = \\cos\\theta$.", zh: "验证：$\\frac{\\sin 2\\theta}{2\\sin\\theta} = \\cos\\theta$。" },
        commonTraps: [
          { en: "Not expanding $\\sin 2\\theta$ and trying to manipulate it as-is", zh: "不展开 $\\sin 2\\theta$ 就试图直接操作" },
        ],
      },
      {
        id: "pt-5-5-7",
        title: { en: "Reduce $\\sin^4 x$ Using Power-Reducing Twice", zh: "两次降幂化简 $\\sin^4 x$" },
        description: { en: "Apply power-reducing formula multiple times for higher powers.", zh: "对高次幂多次应用降幂公式。" },
        howToRecognize: { en: "Expression has $\\sin^4 x$, $\\cos^4 x$, or similar high powers.", zh: "表达式含 $\\sin^4 x$、$\\cos^4 x$ 或类似高次幂。" },
        steps: [
          { en: "Write $\\sin^4 x = (\\sin^2 x)^2$", zh: "写 $\\sin^4 x = (\\sin^2 x)^2$" },
          { en: "Apply $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$ and expand", zh: "应用 $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$ 并展开" },
          { en: "Apply power-reducing again to $\\cos^2 2x$", zh: "对 $\\cos^2 2x$ 再次降幂" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Rewrite $\\sin^4 x$ in terms of first powers of cosine.", zh: "将 $\\sin^4 x$ 用余弦的一次幂表示。" },
        commonTraps: [
          { en: "Forgetting to expand $(\\frac{1 - \\cos 2x}{2})^2$ fully before applying the second reduction", zh: "在第二次降幂前忘记完全展开 $(\\frac{1 - \\cos 2x}{2})^2$" },
        ],
      },
      {
        id: "pt-5-5-8",
        title: { en: "Apply Sum-to-Product Formula", zh: "应用和差化积公式" },
        description: { en: "Convert a sum/difference of sines or cosines into a product.", zh: "将正弦或余弦的和/差转化为乘积。" },
        howToRecognize: { en: "Expression is $\\sin A + \\sin B$ or $\\cos A - \\cos B$.", zh: "表达式为 $\\sin A + \\sin B$ 或 $\\cos A - \\cos B$。" },
        steps: [
          { en: "Use sum-to-product: $\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$", zh: "用和差化积：$\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$" },
          { en: "Simplify", zh: "化简" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Write $\\cos 4x - \\cos 2x$ as a product.", zh: "将 $\\cos 4x - \\cos 2x$ 写为乘积形式。" },
        commonTraps: [
          { en: "Confusing sum-to-product with product-to-sum — check which direction you need", zh: "搞混和差化积与积化和差——看清需要哪个方向" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-5-5-9",
        title: { en: "Solve Equation Using Half-Angle or Double-Angle Strategy", zh: "用半角或倍角策略解方程" },
        description: { en: "Solve equations where a half-angle or double-angle substitution simplifies the problem.", zh: "用半角或倍角代换化简方程后求解。" },
        howToRecognize: { en: "Equation mixes single and double angles, or half and full angles.", zh: "方程混合单角与倍角，或半角与全角。" },
        steps: [
          { en: "Choose the substitution that makes all angles the same", zh: "选择使所有角相同的代换" },
          { en: "Apply the formula and simplify", zh: "应用公式并化简" },
          { en: "Solve and check solutions", zh: "求解并验证" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Solve $\\sin 2x = \\cos x$ on $[0, 2\\pi)$.", zh: "在 $[0, 2\\pi)$ 上解 $\\sin 2x = \\cos x$。" },
        commonTraps: [
          { en: "Not rewriting $\\sin 2x = 2\\sin x\\cos x$ and then factoring out $\\cos x$", zh: "没有将 $\\sin 2x = 2\\sin x\\cos x$ 改写再提取 $\\cos x$" },
        ],
      },
      {
        id: "pt-5-5-10",
        title: { en: "Multi-Formula Simplification or Proof", zh: "多公式综合化简或证明" },
        description: { en: "Problems requiring a combination of double-angle, half-angle, and sum/product formulas.", zh: "需要倍角、半角和积化和差公式组合使用的问题。" },
        howToRecognize: { en: "Complex expression or identity that doesn't yield to a single formula.", zh: "��能用单一公式处理的复杂表达式或恒等式。" },
        steps: [
          { en: "Identify which formulas to apply and in what order", zh: "确定应用哪些公式及顺序" },
          { en: "Apply them step by step, simplifying at each stage", zh: "逐步应用，每步都化简" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Verify: $\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$.", zh: "验证：$\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$。" },
        commonTraps: [
          { en: "Not splitting $3\\theta = 2\\theta + \\theta$ and using sum + double-angle formulas together", zh: "没有拆分 $3\\theta = 2\\theta + \\theta$ 并同时使用和公式与倍角公式" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Use the Law of Cosines to solve SAS and SSS triangles", zh: "用余弦定理求解 SAS 和 SSS 三角形" },
      { en: "Use Heron's Area Formula to find the area of a triangle given three sides", zh: "用海伦公式由三边求三角形面积" },
      { en: "Choose between Law of Sines and Law of Cosines based on given information", zh: "根据已知信息选择正弦定理或余弦定理" },
    ],
    keyConcepts: [
      {
        id: "kc-6-2-1",
        title: { en: "Law of Cosines", zh: "余弦定理" },
        explanation: {
          en: "$c^2 = a^2 + b^2 - 2ab\\cos C$ (and similarly for the other sides). This generalizes the Pythagorean Theorem (when $C = 90°$, the $\\cos C$ term vanishes). Use it when you have SAS (two sides and the included angle) or SSS (all three sides).",
          zh: "$c^2 = a^2 + b^2 - 2ab\\cos C$（其他边类推）。这是勾股定理的推广（当 $C = 90°$ 时，$\\cos C$ 项消失）。当已知 SAS（两边及夹角）或 SSS（三边）时使用。",
        },
        whenToUse: { en: "SAS or SSS configurations — Law of Sines cannot handle these directly", zh: "SAS 或 SSS 构型——正弦定理无法直接处理" },
        commonMistake: { en: "Using the wrong angle in the formula — $C$ must be the angle BETWEEN sides $a$ and $b$", zh: "公式中用错角——$C$ 必须是边 $a$ 和 $b$ 之间的夹角" },
        example: { en: "$a = 8$, $b = 5$, $C = 60°$: $c^2 = 64 + 25 - 80(\\frac{1}{2}) = 49$, so $c = 7$", zh: "$a = 8$、$b = 5$、$C = 60°$：$c^2 = 64 + 25 - 80(\\frac{1}{2}) = 49$，所以 $c = 7$" },
      },
      {
        id: "kc-6-2-2",
        title: { en: "Solving SSS Triangles", zh: "求解 SSS 三角形" },
        explanation: {
          en: "Given three sides, find angles by rearranging the Law of Cosines: $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$. Find the largest angle first (opposite the longest side) to avoid ambiguity, then use Law of Sines or repeat for the other angles.",
          zh: "已知三边，变形余弦定理求角：$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$。先求最大角（最长边的对角）以避免歧义，再用正弦定理或重复求其余角。",
        },
        whenToUse: { en: "All three sides are known, no angles given", zh: "三边已知，无角" },
        commonMistake: { en: "Finding a smaller angle first and getting an ambiguous sine inverse — always start with the largest angle", zh: "先求较小角得到不确定的反正弦——应先从最大角开始" },
        example: { en: "$a = 3$, $b = 5$, $c = 7$: $\\cos C = \\frac{9 + 25 - 49}{30} = -\\frac{1}{2}$, so $C = 120°$", zh: "$a = 3$、$b = 5$、$c = 7$：$\\cos C = \\frac{9 + 25 - 49}{30} = -\\frac{1}{2}$，所以 $C = 120°$" },
      },
      {
        id: "kc-6-2-3",
        title: { en: "Heron's Area Formula", zh: "海伦面积公式" },
        explanation: {
          en: "Given three sides $a$, $b$, $c$: $s = \\frac{a + b + c}{2}$ (semi-perimeter), then Area $= \\sqrt{s(s-a)(s-b)(s-c)}$. No angle needed.",
          zh: "已知三边 $a$、$b$、$c$：$s = \\frac{a + b + c}{2}$（半周长），面积 $= \\sqrt{s(s-a)(s-b)(s-c)}$。无需角度。",
        },
        whenToUse: { en: "Finding the area of a triangle when all three sides are known", zh: "三边已知时求三角形面积" },
        commonMistake: { en: "Forgetting to compute the semi-perimeter $s$ first", zh: "忘记先算半周长 $s$" },
        example: { en: "$a = 5$, $b = 6$, $c = 7$: $s = 9$, Area $= \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} = 6\\sqrt{6}$", zh: "$a = 5$、$b = 6$、$c = 7$：$s = 9$，面积 $= \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} = 6\\sqrt{6}$" },
      },
    ],
    formulas: [
      {
        id: "f-6-2-1",
        name: { en: "Law of Cosines", zh: "余弦定理" },
        formula: "c^2 = a^2 + b^2 - 2ab\\cos C",
        variables: [
          { en: "$a, b, c$ = sides; $C$ = angle opposite side $c$", zh: "$a, b, c$ = 三边；$C$ = 边 $c$ 的对角" },
        ],
        whenToUse: { en: "SAS or SSS configurations", zh: "SAS 或 SSS 构型" },
        commonProblemTypes: [
          { en: "Find the third side given SAS", zh: "已知 SAS 求第三边" },
          { en: "Find an angle given SSS", zh: "已知 SSS 求角" },
        ],
        example: { en: "$a = 10$, $b = 7$, $C = 45°$: $c^2 = 100 + 49 - 140\\cos 45° \\approx 50.01$, $c \\approx 7.07$", zh: "$a = 10$、$b = 7$、$C = 45°$：$c^2 = 100 + 49 - 140\\cos 45° \\approx 50.01$，$c \\approx 7.07$" },
      },
      {
        id: "f-6-2-2",
        name: { en: "Heron's Area Formula", zh: "海伦面积公式" },
        formula: "\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}, \\quad s = \\frac{a+b+c}{2}",
        variables: [
          { en: "$s$ = semi-perimeter", zh: "$s$ = 半周长" },
          { en: "$a, b, c$ = three sides", zh: "$a, b, c$ = 三条边" },
        ],
        whenToUse: { en: "Finding area from three sides without knowing any angle", zh: "三边已知无角时求面积" },
        commonProblemTypes: [
          { en: "Find area given three sides", zh: "已知三边求面积" },
        ],
        example: { en: "$a = 3$, $b = 4$, $c = 5$: $s = 6$, Area $= \\sqrt{6 \\cdot 3 \\cdot 2 \\cdot 1} = 6$", zh: "$a = 3$、$b = 4$、$c = 5$：$s = 6$，面积 $= \\sqrt{6 \\cdot 3 \\cdot 2 \\cdot 1} = 6$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-6-2-1",
        title: { en: "Find Third Side (SAS)", zh: "求第三边（SAS）" },
        description: { en: "Given two sides and the included angle, find the third side.", zh: "已知两边及夹角，求第三边。" },
        howToRecognize: { en: "Two sides and the included angle given.", zh: "给出两边及其夹角。" },
        steps: [
          { en: "Apply $c^2 = a^2 + b^2 - 2ab\\cos C$", zh: "应用 $c^2 = a^2 + b^2 - 2ab\\cos C$" },
          { en: "Take the square root", zh: "开方" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "In $\\triangle ABC$, $a = 11$, $b = 15$, $C = 30°$. Find $c$.", zh: "在 $\\triangle ABC$ 中，$a = 11$、$b = 15$、$C = 30°$，求 $c$。" },
        commonTraps: [
          { en: "Using the wrong angle — $C$ must be between sides $a$ and $b$", zh: "用错角——$C$ 必须在边 $a$ 和 $b$ 之间" },
        ],
      },
      {
        id: "pt-6-2-2",
        title: { en: "Find an Angle (SSS)", zh: "求角（SSS）" },
        description: { en: "Given all three sides, find one of the angles.", zh: "已知三边，求其中一个角。" },
        howToRecognize: { en: "Three sides given, no angles.", zh: "给出三边，无角。" },
        steps: [
          { en: "Rearrange: $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$", zh: "变形：$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$" },
          { en: "$C = \\arccos(\\text{result})$", zh: "$C = \\arccos(\\text{结果})$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find angle $C$ if $a = 6$, $b = 8$, $c = 10$.", zh: "若 $a = 6$、$b = 8$、$c = 10$，求角 $C$。" },
        commonTraps: [
          { en: "Arithmetic error in the numerator — double-check $a^2 + b^2 - c^2$", zh: "分子算术错误——仔细检查 $a^2 + b^2 - c^2$" },
        ],
      },
      {
        id: "pt-6-2-3",
        title: { en: "Find Area Using Heron's Formula", zh: "用海伦公式求面积" },
        description: { en: "Compute area from three side lengths.", zh: "由三边长度计算面积。" },
        howToRecognize: { en: "Three sides given; asked for area.", zh: "给出三边；要求面积。" },
        steps: [
          { en: "Compute $s = \\frac{a+b+c}{2}$", zh: "算 $s = \\frac{a+b+c}{2}$" },
          { en: "Compute Area $= \\sqrt{s(s-a)(s-b)(s-c)}$", zh: "算面积 $= \\sqrt{s(s-a)(s-b)(s-c)}$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the area of a triangle with sides $a = 7$, $b = 8$, $c = 9$.", zh: "求边长 $a = 7$、$b = 8$、$c = 9$ 的三角形面积。" },
        commonTraps: [
          { en: "Forgetting the square root at the end", zh: "最后忘记开方" },
        ],
      },
      {
        id: "pt-6-2-4",
        title: { en: "Choose Law of Sines vs. Law of Cosines", zh: "选择正弦定理还是余弦定理" },
        description: { en: "Determine which law to apply based on given information.", zh: "根据已知信息决定用哪个定理。" },
        howToRecognize: { en: "Given some combination of sides and angles; asked which method to use.", zh: "给出某种边角组合；问用哪种方法。" },
        steps: [
          { en: "AAS, ASA, SSA → Law of Sines", zh: "AAS、ASA、SSA → 正弦定理" },
          { en: "SAS, SSS → Law of Cosines", zh: "SAS、SSS → 余弦定理" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "You know $a = 10$, $b = 12$, $C = 55°$. Which law should you use?", zh: "已知 $a = 10$、$b = 12$、$C = 55°$，该用哪个定理？" },
        commonTraps: [
          { en: "Trying to use Law of Sines for SAS — it requires two angle-side pairs, which SAS doesn't directly give", zh: "对 SAS 用正弦定理——正弦定理需要两对角-边，SAS 无法直接给出" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-6-2-5",
        title: { en: "Solve Complete Triangle (SAS)", zh: "完整求解三角形（SAS）" },
        description: { en: "Find all unknowns given SAS.", zh: "已知 SAS 求所有未知量。" },
        howToRecognize: { en: "Two sides and included angle; asked for all unknowns.", zh: "两边及夹角；求所有未知量。" },
        steps: [
          { en: "Use Law of Cosines to find the third side", zh: "用余弦定理求第三边" },
          { en: "Use Law of Sines (or Cosines again) to find the second angle", zh: "用正弦定理（或再次余弦定理）求第二个角" },
          { en: "Third angle = $180°$ minus the other two", zh: "第三个角 = $180°$ 减去另两个" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Solve $\\triangle ABC$: $a = 9$, $b = 12$, $C = 40°$.", zh: "求解 $\\triangle ABC$：$a = 9$、$b = 12$、$C = 40°$。" },
        commonTraps: [
          { en: "Using Law of Sines for the second angle might give an ambiguous result — safer to use Law of Cosines again", zh: "用正弦定理求第二角可能有歧义——再用余弦定理更安全" },
        ],
      },
      {
        id: "pt-6-2-6",
        title: { en: "Solve Complete Triangle (SSS)", zh: "完整求解三角形（SSS）" },
        description: { en: "Find all angles given three sides.", zh: "已知三边求所有角。" },
        howToRecognize: { en: "Three sides given; asked for all angles.", zh: "给出三边；求所有角。" },
        steps: [
          { en: "Find the largest angle first using Law of Cosines", zh: "先用余弦定理求最大角" },
          { en: "Find a second angle using Law of Cosines or Law of Sines", zh: "用余弦定理或正弦定理求第二个角" },
          { en: "Subtract to find the third angle", zh: "减法求第三个角" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find all angles of a triangle with sides $a = 5$, $b = 7$, $c = 10$.", zh: "求边长 $a = 5$、$b = 7$、$c = 10$ 的三角形的所有角。" },
        commonTraps: [
          { en: "Getting a negative cosine and thinking there's no solution — negative cosine means an obtuse angle, which is fine", zh: "得到负余弦值就以为无解——负余弦意味着钝角，这是正常的" },
        ],
      },
      {
        id: "pt-6-2-7",
        title: { en: "Application: Distance Between Two Points", zh: "应用：两点间距离" },
        description: { en: "Use Law of Cosines in a real-world distance problem.", zh: "在实际距离问题中使用余弦定理。" },
        howToRecognize: { en: "Two distances from a common point and the angle between them; asked for the distance between the endpoints.", zh: "从一个公共点出发的两段距离及其夹角；要求端点间的距离。" },
        steps: [
          { en: "Identify the SAS configuration in the problem", zh: "在问题中识别 SAS 构型" },
          { en: "Apply Law of Cosines", zh: "应用余弦定理" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Two ships leave a port: one goes N 40° E for 100 mi, the other S 50° E for 80 mi. How far apart are they?", zh: "两艘船离港：一艘沿 N 40° E 行 100 mi，另一艘沿 S 50° E 行 80 mi。它们相距多远？" },
        commonTraps: [
          { en: "Not calculating the included angle correctly from the bearings", zh: "从方位角算夹角时出错" },
        ],
      },
      {
        id: "pt-6-2-8",
        title: { en: "Determine Triangle Type from SSS", zh: "由 SSS 判断三角形类型" },
        description: { en: "Determine if a triangle is acute, right, or obtuse from its sides.", zh: "由三边判断三角形是锐角、直角还是钝角三角形。" },
        howToRecognize: { en: "Three sides given; asked about the type of triangle.", zh: "给出三边；问三角形类型。" },
        steps: [
          { en: "Find $\\cos C$ for the largest angle", zh: "对最大角求 $\\cos C$" },
          { en: "$\\cos C > 0$: acute; $\\cos C = 0$: right; $\\cos C < 0$: obtuse", zh: "$\\cos C > 0$：锐角；$\\cos C = 0$：直角；$\\cos C < 0$：钝角" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Is the triangle with sides $4, 5, 8$ acute, right, or obtuse?", zh: "边长 $4, 5, 8$ 的三角形是锐角、直角还是钝角？" },
        commonTraps: [
          { en: "Not checking the largest angle — only the largest angle can be obtuse", zh: "没检查最大角——只有最大角可能是钝角" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-6-2-9",
        title: { en: "Navigation Problem Requiring Both Laws", zh: "需要两个定理的导航问题" },
        description: { en: "Solve a navigation problem that requires both Law of Sines and Law of Cosines.", zh: "解决需要正弦定理和余弦定理的导航问题。" },
        howToRecognize: { en: "Multi-step bearing/distance problem forming an oblique triangle.", zh: "形成斜三角形的多步方位角/距离问题。" },
        steps: [
          { en: "Draw the triangle from the given bearings and distances", zh: "由给定方位角和距离画三角形" },
          { en: "Use Law of Cosines to find the unknown side", zh: "用余弦定理求未知边" },
          { en: "Use Law of Sines to find remaining angles or bearing", zh: "用正弦定理求其余角或方位角" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A plane flies 400 mi on bearing N 30° W, then 300 mi on bearing N 75° E. Find the distance and bearing from start to finish.", zh: "飞机沿 N 30° W 飞 400 mi，再沿 N 75° E 飞 300 mi。求起点到终点的距离和方位角。" },
        commonTraps: [
          { en: "Incorrectly computing the included angle between the two legs from bearings", zh: "从方位角算两段间夹角时出错" },
        ],
      },
      {
        id: "pt-6-2-10",
        title: { en: "Area and Side-Length Combined Problem", zh: "面积与边长综合题" },
        description: { en: "Find a missing measurement using both area formulas and the Law of Cosines.", zh: "同时用面积公式和余弦定理求缺失量。" },
        howToRecognize: { en: "Area is given along with some sides/angles; asked for a missing quantity.", zh: "给出面积和部分边/角；求缺失量。" },
        steps: [
          { en: "Use area formula to find a missing side or angle", zh: "用面积公式求缺失边或角" },
          { en: "Use Law of Cosines to complete the triangle", zh: "用余弦定理完成三角形" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A triangle has area 30, sides $a = 10$ and $b = 8$, and angle $C$ between them. Find $C$ and $c$.", zh: "三角形面积 30，边 $a = 10$、$b = 8$，$C$ 为其夹角。求 $C$ 和 $c$。" },
        commonTraps: [
          { en: "Forgetting the area formula $\\frac{1}{2}ab\\sin C$ — use it to find $C$ first", zh: "忘记面积公式 $\\frac{1}{2}ab\\sin C$——先用它求 $C$" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Represent vectors as directed line segments and in component form", zh: "用有向线段和分量形式表示向量" },
      { en: "Perform vector addition, subtraction, and scalar multiplication", zh: "进行向量加法、减法和数乘" },
      { en: "Find the magnitude and direction angle of a vector", zh: "求向量的模和方向角" },
      { en: "Write vectors using unit vectors $\\mathbf{i}$ and $\\mathbf{j}$", zh: "用单位向量 $\\mathbf{i}$ 和 $\\mathbf{j}$ 表示向量" },
    ],
    keyConcepts: [
      {
        id: "kc-6-3-1",
        title: { en: "Component Form and Magnitude", zh: "分量形式与模" },
        explanation: {
          en: "A vector $\\mathbf{v}$ from $(x_1, y_1)$ to $(x_2, y_2)$ has component form $\\langle x_2 - x_1, y_2 - y_1 \\rangle = \\langle a, b \\rangle$. Its magnitude is $\\|\\mathbf{v}\\| = \\sqrt{a^2 + b^2}$. A unit vector in the direction of $\\mathbf{v}$ is $\\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$.",
          zh: "从 $(x_1, y_1)$ 到 $(x_2, y_2)$ 的向量 $\\mathbf{v}$ 的分量形式为 $\\langle x_2 - x_1, y_2 - y_1 \\rangle = \\langle a, b \\rangle$。模为 $\\|\\mathbf{v}\\| = \\sqrt{a^2 + b^2}$。$\\mathbf{v}$ 方向上的单位向量为 $\\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}$。",
        },
        whenToUse: { en: "Any time you need to describe a vector's length or direction numerically", zh: "需要用数值描述向量的长度或方向时" },
        commonMistake: { en: "Subtracting coordinates in the wrong order: terminal minus initial", zh: "坐标相减顺序搞反：终点减起点" },
        example: { en: "$\\mathbf{v} = \\langle 3, 4 \\rangle$: $\\|\\mathbf{v}\\| = 5$, unit vector $= \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$", zh: "$\\mathbf{v} = \\langle 3, 4 \\rangle$：$\\|\\mathbf{v}\\| = 5$，单位向量 $= \\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$" },
      },
      {
        id: "kc-6-3-2",
        title: { en: "Vector Operations", zh: "向量运算" },
        explanation: {
          en: "Addition: $\\langle a_1, b_1 \\rangle + \\langle a_2, b_2 \\rangle = \\langle a_1 + a_2, b_1 + b_2 \\rangle$. Scalar multiplication: $k\\langle a, b \\rangle = \\langle ka, kb \\rangle$. Subtraction: $\\mathbf{u} - \\mathbf{v} = \\mathbf{u} + (-\\mathbf{v})$. Geometrically: addition is tip-to-tail; subtraction points from $\\mathbf{v}$ to $\\mathbf{u}$.",
          zh: "加法：$\\langle a_1, b_1 \\rangle + \\langle a_2, b_2 \\rangle = \\langle a_1 + a_2, b_1 + b_2 \\rangle$。数乘：$k\\langle a, b \\rangle = \\langle ka, kb \\rangle$。减法：$\\mathbf{u} - \\mathbf{v} = \\mathbf{u} + (-\\mathbf{v})$。几何上：加法首尾相接；减法从 $\\mathbf{v}$ 指向 $\\mathbf{u}$。",
        },
        whenToUse: { en: "Combining forces, velocities, displacements, or any vector quantities", zh: "合成力、速度、位移或任何向量量" },
        commonMistake: { en: "Adding magnitudes directly instead of using component-wise addition", zh: "直接相加模而非按分量相加" },
        example: { en: "$\\langle 2, 3 \\rangle + \\langle -1, 5 \\rangle = \\langle 1, 8 \\rangle$", zh: "$\\langle 2, 3 \\rangle + \\langle -1, 5 \\rangle = \\langle 1, 8 \\rangle$" },
      },
      {
        id: "kc-6-3-3",
        title: { en: "Direction Angle and Unit-Vector Notation", zh: "方向角与单位向量记法" },
        explanation: {
          en: "The direction angle $\\theta$ is measured from the positive $x$-axis. $\\mathbf{v} = \\|\\mathbf{v}\\|(\\cos\\theta\\,\\mathbf{i} + \\sin\\theta\\,\\mathbf{j})$. Given components $\\langle a, b \\rangle$: $\\theta = \\arctan(\\frac{b}{a})$, adjusted for quadrant. Standard unit vectors: $\\mathbf{i} = \\langle 1, 0 \\rangle$, $\\mathbf{j} = \\langle 0, 1 \\rangle$.",
          zh: "方向角 $\\theta$ 从正 $x$ 轴量起。$\\mathbf{v} = \\|\\mathbf{v}\\|(\\cos\\theta\\,\\mathbf{i} + \\sin\\theta\\,\\mathbf{j})$。已知分量 $\\langle a, b \\rangle$：$\\theta = \\arctan(\\frac{b}{a})$，需根据象限调整。标准单位向量：$\\mathbf{i} = \\langle 1, 0 \\rangle$，$\\mathbf{j} = \\langle 0, 1 \\rangle$。",
        },
        whenToUse: { en: "Converting between magnitude-direction and component representations", zh: "在模-方向和分量表示之间转换" },
        commonMistake: { en: "Not adjusting $\\arctan$ for the correct quadrant (e.g., QII or QIII)", zh: "未根据正确象限调整 $\\arctan$（如第二或第三象限）" },
        example: { en: "$\\mathbf{v} = \\langle -3, 3 \\rangle$: $\\|\\mathbf{v}\\| = 3\\sqrt{2}$, $\\theta = 135°$", zh: "$\\mathbf{v} = \\langle -3, 3 \\rangle$：$\\|\\mathbf{v}\\| = 3\\sqrt{2}$，$\\theta = 135°$" },
      },
    ],
    formulas: [
      {
        id: "f-6-3-1",
        name: { en: "Vector Magnitude", zh: "向量的模" },
        formula: "\\|\\mathbf{v}\\| = \\sqrt{a^2 + b^2} \\quad \\text{for } \\mathbf{v} = \\langle a, b \\rangle",
        variables: [
          { en: "$a, b$ — horizontal and vertical components", zh: "$a, b$ — 水平和垂直分量" },
        ],
        whenToUse: { en: "Finding the length of a vector", zh: "求向量的长度" },
        commonProblemTypes: [
          { en: "Find magnitude from components", zh: "由分量求模" },
          { en: "Find a unit vector", zh: "求单位向量" },
        ],
        example: { en: "$\\|\\langle -5, 12 \\rangle\\| = \\sqrt{25 + 144} = 13$", zh: "$\\|\\langle -5, 12 \\rangle\\| = \\sqrt{25 + 144} = 13$" },
      },
      {
        id: "f-6-3-2",
        name: { en: "Direction Angle", zh: "方向角" },
        formula: "\\theta = \\arctan\\left(\\frac{b}{a}\\right) \\quad (\\text{adjust for quadrant})",
        variables: [
          { en: "$\\mathbf{v} = \\langle a, b \\rangle$", zh: "$\\mathbf{v} = \\langle a, b \\rangle$" },
          { en: "$\\theta$ measured counter-clockwise from positive $x$-axis", zh: "$\\theta$ 从正 $x$ 轴逆时针量" },
        ],
        whenToUse: { en: "Finding the direction of a vector", zh: "求向量的方向" },
        commonProblemTypes: [
          { en: "Find direction angle from components", zh: "由分量求方向角" },
          { en: "Convert between magnitude-angle and component forms", zh: "在模-角和分量形式之间转换" },
        ],
        example: { en: "$\\langle -1, \\sqrt{3} \\rangle$: $\\arctan(\\frac{\\sqrt{3}}{-1}) = -60°$, but QII → $\\theta = 120°$", zh: "$\\langle -1, \\sqrt{3} \\rangle$：$\\arctan(\\frac{\\sqrt{3}}{-1}) = -60°$，但在第二象限 → $\\theta = 120°$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-6-3-1",
        title: { en: "Find Component Form and Magnitude", zh: "求分量形式和模" },
        description: { en: "Given initial and terminal points, find the component form and magnitude.", zh: "已知始点和终点，求分量形式和模。" },
        howToRecognize: { en: "Two points given; asked for the vector.", zh: "给出两点；要求向量。" },
        steps: [
          { en: "Components: $\\langle x_2 - x_1, y_2 - y_1 \\rangle$", zh: "分量：$\\langle x_2 - x_1, y_2 - y_1 \\rangle$" },
          { en: "Magnitude: $\\sqrt{a^2 + b^2}$", zh: "模：$\\sqrt{a^2 + b^2}$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the component form and magnitude of the vector from $(1, -2)$ to $(4, 2)$.", zh: "求从 $(1, -2)$ 到 $(4, 2)$ 的向量的分量形式和模。" },
        commonTraps: [
          { en: "Subtracting initial from terminal (not the reverse)", zh: "用终点减起点（不要反过来）" },
        ],
      },
      {
        id: "pt-6-3-2",
        title: { en: "Perform Vector Operations", zh: "进行向量运算" },
        description: { en: "Add, subtract, or scalar-multiply vectors in component form.", zh: "对分量形式的向量进行加法、减法或数乘。" },
        howToRecognize: { en: "Two vectors given; asked to compute $\\mathbf{u} + \\mathbf{v}$, $2\\mathbf{u} - 3\\mathbf{v}$, etc.", zh: "给出两个向量；要求计算 $\\mathbf{u} + \\mathbf{v}$、$2\\mathbf{u} - 3\\mathbf{v}$ 等。" },
        steps: [
          { en: "Apply operations component-wise", zh: "按分量进行运算" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "If $\\mathbf{u} = \\langle 3, -1 \\rangle$ and $\\mathbf{v} = \\langle -2, 4 \\rangle$, find $2\\mathbf{u} + \\mathbf{v}$.", zh: "若 $\\mathbf{u} = \\langle 3, -1 \\rangle$、$\\mathbf{v} = \\langle -2, 4 \\rangle$，求 $2\\mathbf{u} + \\mathbf{v}$。" },
        commonTraps: [
          { en: "Forgetting to multiply BOTH components by the scalar", zh: "忘记将两个分量都乘以标量" },
        ],
      },
      {
        id: "pt-6-3-3",
        title: { en: "Find Unit Vector", zh: "求单位向量" },
        description: { en: "Find the unit vector in the direction of a given vector.", zh: "求给定向量方向上的单位向量。" },
        howToRecognize: { en: "Asked for a unit vector in a given direction.", zh: "要求给定方向的单位向量。" },
        steps: [
          { en: "Compute $\\|\\mathbf{v}\\|$", zh: "求 $\\|\\mathbf{v}\\|$" },
          { en: "Divide each component by $\\|\\mathbf{v}\\|$", zh: "每个分量除以 $\\|\\mathbf{v}\\|$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the unit vector in the direction of $\\langle 5, -12 \\rangle$.", zh: "求 $\\langle 5, -12 \\rangle$ 方向上的单位向量。" },
        commonTraps: [
          { en: "Dividing only one component", zh: "只除一个分量" },
        ],
      },
      // ── Medium (4) ────────────────────────────────────────
      {
        id: "pt-6-3-4",
        title: { en: "Find Direction Angle", zh: "求方向角" },
        description: { en: "Find the direction angle of a vector from its components.", zh: "由向量分量求方向角。" },
        howToRecognize: { en: "Vector given in component form; asked for direction angle.", zh: "给出分量形式的向量；要求方向角。" },
        steps: [
          { en: "Compute $\\arctan(b/a)$", zh: "算 $\\arctan(b/a)$" },
          { en: "Adjust for the correct quadrant", zh: "根据正确象限调整" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the direction angle of $\\mathbf{v} = \\langle -4, 4\\sqrt{3} \\rangle$.", zh: "求 $\\mathbf{v} = \\langle -4, 4\\sqrt{3} \\rangle$ 的方向角。" },
        commonTraps: [
          { en: "Calculator gives $\\arctan(-\\sqrt{3}) = -60°$ but the vector is in QII, so $\\theta = 120°$", zh: "计算器给出 $\\arctan(-\\sqrt{3}) = -60°$ 但向量在第二象限，所以 $\\theta = 120°$" },
        ],
      },
      {
        id: "pt-6-3-5",
        title: { en: "Convert Magnitude-Direction to Components", zh: "模-方向转分量" },
        description: { en: "Given $\\|\\mathbf{v}\\|$ and $\\theta$, find the components.", zh: "已知 $\\|\\mathbf{v}\\|$ 和 $\\theta$，求分量。" },
        howToRecognize: { en: "Magnitude and angle given; asked for component form.", zh: "给出模和角；要求分量形式。" },
        steps: [
          { en: "$a = \\|\\mathbf{v}\\|\\cos\\theta$, $b = \\|\\mathbf{v}\\|\\sin\\theta$", zh: "$a = \\|\\mathbf{v}\\|\\cos\\theta$，$b = \\|\\mathbf{v}\\|\\sin\\theta$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A vector has magnitude 10 and direction angle $210°$. Find its components.", zh: "向量的模为 10、方向角 $210°$，求分量。" },
        commonTraps: [
          { en: "Using degrees in a calculator set to radians", zh: "计算器在弧度模式却输入角度值" },
        ],
      },
      {
        id: "pt-6-3-6",
        title: { en: "Resultant Force Problem", zh: "合力问题" },
        description: { en: "Find the resultant of two or more forces given magnitudes and directions.", zh: "由各力的大小和方向求合力。" },
        howToRecognize: { en: "Multiple forces with magnitudes and angles; asked for the resultant.", zh: "多个力有大小和角度；求合力。" },
        steps: [
          { en: "Convert each force to components", zh: "将每个力转为分量" },
          { en: "Add components", zh: "分量相加" },
          { en: "Find magnitude and direction of the resultant", zh: "求合力的大小和方向" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Forces of 50 N at $30°$ and 80 N at $135°$ act on an object. Find the resultant.", zh: "50 N（$30°$）和 80 N（$135°$）的力作用于一个物体，求合力。" },
        commonTraps: [
          { en: "Adding magnitudes directly (50 + 80 = 130) instead of using components", zh: "直接相加大小（50 + 80 = 130）而不用分量" },
        ],
      },
      {
        id: "pt-6-3-7",
        title: { en: "Velocity Vector Application", zh: "速度向量应用" },
        description: { en: "Solve problems involving ground speed, wind speed, and heading.", zh: "解决涉及地面速度、风速和航向的问题。" },
        howToRecognize: { en: "Airplane/boat with heading and wind/current; asked for true course or ground speed.", zh: "飞机/船有航向和风/水流；求真实航线或地面速度。" },
        steps: [
          { en: "Convert aircraft velocity and wind velocity to components", zh: "将飞行速度和风速转为分量" },
          { en: "Add to get the resultant (ground velocity)", zh: "相加得合速度（地面速度）" },
          { en: "Find magnitude and direction", zh: "求大小和方向" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A plane heads N 30° E at 500 mph. Wind blows from the west at 60 mph. Find the ground speed and actual bearing.", zh: "飞机沿 N 30° E 以 500 mph 飞行，西风 60 mph。求地面速度和实际方位。" },
        commonTraps: [
          { en: "Wind blowing FROM the west means it pushes EAST — the component is positive in the east direction", zh: "西风吹来意味着向东推——分量在东方向为正" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-6-3-8",
        title: { en: "Equilibrium Force Problem", zh: "力平衡问题" },
        description: { en: "Find the force needed to bring a system to equilibrium.", zh: "求使系统达到平衡的力。" },
        howToRecognize: { en: "Multiple known forces; asked for a force that makes the resultant zero.", zh: "多个已知力；求使合力为零的力。" },
        steps: [
          { en: "Find the resultant of the known forces", zh: "求已知力的合力" },
          { en: "The equilibrium force is the opposite: $-\\mathbf{R}$", zh: "平衡力为合力的反向：$-\\mathbf{R}$" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Forces of 100 N at $0°$, 150 N at $120°$, and $F$ at angle $\\theta$ keep an object in equilibrium. Find $F$ and $\\theta$.", zh: "100 N（$0°$）、150 N（$120°$）和未知力 $F$（角度 $\\theta$）使物体平衡，求 $F$ 和 $\\theta$。" },
        commonTraps: [
          { en: "Forgetting to negate both components for the equilibrium force", zh: "忘记对平衡力的两个分量都取反" },
        ],
      },
      {
        id: "pt-6-3-9",
        title: { en: "Inclined Plane Force Decomposition", zh: "斜面力分解" },
        description: { en: "Decompose gravity into components parallel and perpendicular to an inclined plane.", zh: "将重力分解为平行和垂直于斜面的分量。" },
        howToRecognize: { en: "Object on an incline; asked for force components along and perpendicular to the slope.", zh: "物体在斜面上；求沿斜面和垂直于斜面的力分量。" },
        steps: [
          { en: "Gravity force parallel to slope: $W\\sin\\alpha$", zh: "沿斜面的重力分量：$W\\sin\\alpha$" },
          { en: "Gravity force perpendicular to slope: $W\\cos\\alpha$", zh: "垂直于斜面的重力分量：$W\\cos\\alpha$" },
          { en: "where $\\alpha$ is the angle of the incline", zh: "其中 $\\alpha$ 为斜面倾角" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "A 200-lb crate sits on a $25°$ incline. Find the force required to keep it from sliding (ignore friction).", zh: "200 磅箱子在 $25°$ 斜面上，求防止下滑所需的力（忽略摩擦）。" },
        commonTraps: [
          { en: "Swapping sin and cos — the component ALONG the slope uses sin of the incline angle", zh: "sin 和 cos 搞反——沿斜面的分量用斜面角的 sin" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Compute the dot product of two vectors", zh: "计算两个向量的点积" },
      { en: "Find the angle between two vectors", zh: "求两个向量的夹角" },
      { en: "Determine if two vectors are orthogonal", zh: "判断两个向量是否正交" },
      { en: "Find the projection of one vector onto another", zh: "求一个向量在另一个上的投影" },
    ],
    keyConcepts: [
      {
        id: "kc-6-4-1",
        title: { en: "Dot Product", zh: "点积" },
        explanation: {
          en: "For $\\mathbf{u} = \\langle a_1, b_1 \\rangle$ and $\\mathbf{v} = \\langle a_2, b_2 \\rangle$: $\\mathbf{u} \\cdot \\mathbf{v} = a_1 a_2 + b_1 b_2$. The result is a SCALAR (not a vector). Alternatively: $\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$.",
          zh: "对 $\\mathbf{u} = \\langle a_1, b_1 \\rangle$ 和 $\\mathbf{v} = \\langle a_2, b_2 \\rangle$：$\\mathbf{u} \\cdot \\mathbf{v} = a_1 a_2 + b_1 b_2$。结果是标量（不是向量）。等价形式：$\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$。",
        },
        whenToUse: { en: "Finding angles between vectors, testing orthogonality, computing projections", zh: "求向量夹角、判断正交、计算投影" },
        commonMistake: { en: "Treating the dot product as a vector — it's a scalar (a number)", zh: "把点积当向量——它是标量（数值）" },
        example: { en: "$\\langle 3, 4 \\rangle \\cdot \\langle -2, 5 \\rangle = -6 + 20 = 14$", zh: "$\\langle 3, 4 \\rangle \\cdot \\langle -2, 5 \\rangle = -6 + 20 = 14$" },
      },
      {
        id: "kc-6-4-2",
        title: { en: "Angle Between Vectors and Orthogonality", zh: "向量夹角与正交" },
        explanation: {
          en: "$\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}$. If $\\mathbf{u} \\cdot \\mathbf{v} = 0$, the vectors are orthogonal (perpendicular). If $\\mathbf{u} \\cdot \\mathbf{v} > 0$, the angle is acute. If $\\mathbf{u} \\cdot \\mathbf{v} < 0$, the angle is obtuse.",
          zh: "$\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}$。若 $\\mathbf{u} \\cdot \\mathbf{v} = 0$，向量正交（垂直）。若 $\\mathbf{u} \\cdot \\mathbf{v} > 0$，夹角为锐角。若 $\\mathbf{u} \\cdot \\mathbf{v} < 0$，夹角为钝角。",
        },
        whenToUse: { en: "Finding the angle between two vectors or checking perpendicularity", zh: "求两向量夹角或判断垂直" },
        commonMistake: { en: "Forgetting to divide by both magnitudes", zh: "忘记除以两个模" },
        example: { en: "$\\langle 1, 2 \\rangle \\cdot \\langle -4, 2 \\rangle = 0$, so the vectors are orthogonal", zh: "$\\langle 1, 2 \\rangle \\cdot \\langle -4, 2 \\rangle = 0$，所以向量正交" },
      },
      {
        id: "kc-6-4-3",
        title: { en: "Vector Projection", zh: "向量投影" },
        explanation: {
          en: "The projection of $\\mathbf{u}$ onto $\\mathbf{v}$: $\\text{proj}_{\\mathbf{v}} \\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2} \\mathbf{v}$. The scalar component (signed length): $\\text{comp}_{\\mathbf{v}} \\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|}$.",
          zh: "$\\mathbf{u}$ 在 $\\mathbf{v}$ 上的投影：$\\text{proj}_{\\mathbf{v}} \\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2} \\mathbf{v}$。标量分量（有符号长度）：$\\text{comp}_{\\mathbf{v}} \\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|}$。",
        },
        whenToUse: { en: "Decomposing a vector into parallel and perpendicular components relative to another vector", zh: "将向量分解为相对于另一个向量的平行和垂直分量" },
        commonMistake: { en: "Dividing by $\\|\\mathbf{v}\\|$ instead of $\\|\\mathbf{v}\\|^2$ in the projection formula", zh: "在投影公式中除以 $\\|\\mathbf{v}\\|$ 而非 $\\|\\mathbf{v}\\|^2$" },
        example: { en: "$\\text{proj}_{\\langle 1,0 \\rangle} \\langle 3, 4 \\rangle = \\frac{3}{1} \\langle 1, 0 \\rangle = \\langle 3, 0 \\rangle$", zh: "$\\text{proj}_{\\langle 1,0 \\rangle} \\langle 3, 4 \\rangle = \\frac{3}{1} \\langle 1, 0 \\rangle = \\langle 3, 0 \\rangle$" },
      },
    ],
    formulas: [
      {
        id: "f-6-4-1",
        name: { en: "Dot Product", zh: "点积" },
        formula: "\\mathbf{u} \\cdot \\mathbf{v} = a_1 a_2 + b_1 b_2 = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta",
        variables: [
          { en: "$\\mathbf{u} = \\langle a_1, b_1 \\rangle$, $\\mathbf{v} = \\langle a_2, b_2 \\rangle$", zh: "$\\mathbf{u} = \\langle a_1, b_1 \\rangle$，$\\mathbf{v} = \\langle a_2, b_2 \\rangle$" },
          { en: "$\\theta$ = angle between the vectors", zh: "$\\theta$ = 向量夹角" },
        ],
        whenToUse: { en: "Computing dot product, angle, or checking orthogonality", zh: "计算点积、夹角或判断正交" },
        commonProblemTypes: [
          { en: "Find $\\mathbf{u} \\cdot \\mathbf{v}$", zh: "求 $\\mathbf{u} \\cdot \\mathbf{v}$" },
          { en: "Find the angle between two vectors", zh: "求两向量夹角" },
        ],
        example: { en: "$\\langle 2, -1 \\rangle \\cdot \\langle 3, 4 \\rangle = 6 - 4 = 2$", zh: "$\\langle 2, -1 \\rangle \\cdot \\langle 3, 4 \\rangle = 6 - 4 = 2$" },
      },
      {
        id: "f-6-4-2",
        name: { en: "Vector Projection Formula", zh: "向量投影公式" },
        formula: "\\text{proj}_{\\mathbf{v}} \\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2} \\mathbf{v}",
        variables: [
          { en: "Result is a vector in the direction of $\\mathbf{v}$", zh: "结果是 $\\mathbf{v}$ 方向上的向量" },
        ],
        whenToUse: { en: "Decomposing $\\mathbf{u}$ into components parallel and perpendicular to $\\mathbf{v}$", zh: "将 $\\mathbf{u}$ 分解为平行和垂直于 $\\mathbf{v}$ 的分量" },
        commonProblemTypes: [
          { en: "Find the projection of $\\mathbf{u}$ onto $\\mathbf{v}$", zh: "求 $\\mathbf{u}$ 在 $\\mathbf{v}$ 上的投影" },
          { en: "Work done by a force: $W = \\mathbf{F} \\cdot \\mathbf{d}$", zh: "力做的功：$W = \\mathbf{F} \\cdot \\mathbf{d}$" },
        ],
        example: { en: "$\\text{proj}_{\\langle 2,0 \\rangle} \\langle 3, 4 \\rangle = \\frac{6}{4} \\langle 2, 0 \\rangle = \\langle 3, 0 \\rangle$", zh: "$\\text{proj}_{\\langle 2,0 \\rangle} \\langle 3, 4 \\rangle = \\frac{6}{4} \\langle 2, 0 \\rangle = \\langle 3, 0 \\rangle$" },
      },
    ],
    problemTypes: [
      // ── Easy (3) ──────────────────────────────────────────
      {
        id: "pt-6-4-1",
        title: { en: "Compute a Dot Product", zh: "计算点积" },
        description: { en: "Calculate $\\mathbf{u} \\cdot \\mathbf{v}$ from components.", zh: "由分量计算 $\\mathbf{u} \\cdot \\mathbf{v}$。" },
        howToRecognize: { en: "Two vectors given; asked for their dot product.", zh: "给出两个向量；要求点积。" },
        steps: [
          { en: "$\\mathbf{u} \\cdot \\mathbf{v} = a_1 a_2 + b_1 b_2$", zh: "$\\mathbf{u} \\cdot \\mathbf{v} = a_1 a_2 + b_1 b_2$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find $\\langle 4, -3 \\rangle \\cdot \\langle 2, 5 \\rangle$.", zh: "求 $\\langle 4, -3 \\rangle \\cdot \\langle 2, 5 \\rangle$。" },
        commonTraps: [
          { en: "Writing the result as a vector — dot product is a scalar", zh: "把结果写成向量——点积是标量" },
        ],
      },
      {
        id: "pt-6-4-2",
        title: { en: "Determine Orthogonality", zh: "判断正交" },
        description: { en: "Check if two vectors are orthogonal by computing their dot product.", zh: "通过计算点积判断两向量是否正交。" },
        howToRecognize: { en: "Asked if vectors are perpendicular/orthogonal.", zh: "问向量是否垂直/正交。" },
        steps: [
          { en: "Compute $\\mathbf{u} \\cdot \\mathbf{v}$", zh: "算 $\\mathbf{u} \\cdot \\mathbf{v}$" },
          { en: "If $= 0$, orthogonal; otherwise not", zh: "若 $= 0$，正交；否则不正交" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Are $\\langle 3, 6 \\rangle$ and $\\langle 4, -2 \\rangle$ orthogonal?", zh: "$\\langle 3, 6 \\rangle$ 和 $\\langle 4, -2 \\rangle$ 正交吗？" },
        commonTraps: [
          { en: "Assuming perpendicular = opposite signs on components (not true in general)", zh: "以为垂直 = 分量符号相反（一般不对）" },
        ],
      },
      {
        id: "pt-6-4-3",
        title: { en: "Find Angle Between Vectors", zh: "求向量夹角" },
        description: { en: "Use $\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}$.", zh: "用 $\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}$。" },
        howToRecognize: { en: "Two vectors given; asked for the angle between them.", zh: "给出两个向量；要求夹角。" },
        steps: [
          { en: "Compute $\\mathbf{u} \\cdot \\mathbf{v}$, $\\|\\mathbf{u}\\|$, $\\|\\mathbf{v}\\|$", zh: "算 $\\mathbf{u} \\cdot \\mathbf{v}$、$\\|\\mathbf{u}\\|$、$\\|\\mathbf{v}\\|$" },
          { en: "$\\theta = \\arccos\\left(\\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}\\right)$", zh: "$\\theta = \\arccos\\left(\\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}\\right)$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Find the angle between $\\langle 1, 0 \\rangle$ and $\\langle 1, 1 \\rangle$.", zh: "求 $\\langle 1, 0 \\rangle$ 与 $\\langle 1, 1 \\rangle$ 的夹角。" },
        commonTraps: [
          { en: "Forgetting to take $\\arccos$ — the result is the cosine of the angle, not the angle itself", zh: "忘记取 $\\arccos$——结果是夹角的余弦，不是夹角本身" },
        ],
      },
      // ── Medium (3) ────────────────────────────────────────
      {
        id: "pt-6-4-4",
        title: { en: "Find Vector Projection", zh: "求向量投影" },
        description: { en: "Project $\\mathbf{u}$ onto $\\mathbf{v}$.", zh: "求 $\\mathbf{u}$ 在 $\\mathbf{v}$ 上的投影。" },
        howToRecognize: { en: "Asked for $\\text{proj}_{\\mathbf{v}} \\mathbf{u}$.", zh: "要求 $\\text{proj}_{\\mathbf{v}} \\mathbf{u}$。" },
        steps: [
          { en: "Compute $\\mathbf{u} \\cdot \\mathbf{v}$ and $\\|\\mathbf{v}\\|^2$", zh: "算 $\\mathbf{u} \\cdot \\mathbf{v}$ 和 $\\|\\mathbf{v}\\|^2$" },
          { en: "$\\text{proj}_{\\mathbf{v}} \\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2} \\mathbf{v}$", zh: "$\\text{proj}_{\\mathbf{v}} \\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|^2} \\mathbf{v}$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find $\\text{proj}_{\\langle 2, 1 \\rangle} \\langle 4, 3 \\rangle$.", zh: "求 $\\text{proj}_{\\langle 2, 1 \\rangle} \\langle 4, 3 \\rangle$。" },
        commonTraps: [
          { en: "Using $\\|\\mathbf{v}\\|$ instead of $\\|\\mathbf{v}\\|^2$ in the denominator", zh: "分母用 $\\|\\mathbf{v}\\|$ 而非 $\\|\\mathbf{v}\\|^2$" },
        ],
      },
      {
        id: "pt-6-4-5",
        title: { en: "Decompose Vector into Parallel and Perpendicular", zh: "将向量分解为平行和垂直分量" },
        description: { en: "Write $\\mathbf{u} = \\mathbf{w}_1 + \\mathbf{w}_2$ where $\\mathbf{w}_1 \\parallel \\mathbf{v}$ and $\\mathbf{w}_2 \\perp \\mathbf{v}$.", zh: "将 $\\mathbf{u} = \\mathbf{w}_1 + \\mathbf{w}_2$，其中 $\\mathbf{w}_1 \\parallel \\mathbf{v}$，$\\mathbf{w}_2 \\perp \\mathbf{v}$。" },
        howToRecognize: { en: "Asked to decompose a vector relative to another direction.", zh: "要求相对于另一个方向分解向量。" },
        steps: [
          { en: "$\\mathbf{w}_1 = \\text{proj}_{\\mathbf{v}} \\mathbf{u}$", zh: "$\\mathbf{w}_1 = \\text{proj}_{\\mathbf{v}} \\mathbf{u}$" },
          { en: "$\\mathbf{w}_2 = \\mathbf{u} - \\mathbf{w}_1$", zh: "$\\mathbf{w}_2 = \\mathbf{u} - \\mathbf{w}_1$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Decompose $\\langle 5, 2 \\rangle$ into components parallel and perpendicular to $\\langle 1, 1 \\rangle$.", zh: "将 $\\langle 5, 2 \\rangle$ 分解为平行和垂直于 $\\langle 1, 1 \\rangle$ 的分量。" },
        commonTraps: [
          { en: "Not verifying: $\\mathbf{w}_2$ should be orthogonal to $\\mathbf{v}$ (check $\\mathbf{w}_2 \\cdot \\mathbf{v} = 0$)", zh: "未验证：$\\mathbf{w}_2$ 应正交于 $\\mathbf{v}$（检查 $\\mathbf{w}_2 \\cdot \\mathbf{v} = 0$）" },
        ],
      },
      {
        id: "pt-6-4-6",
        title: { en: "Work Done by a Force", zh: "力做的功" },
        description: { en: "Compute work as $W = \\mathbf{F} \\cdot \\mathbf{d} = \\|\\mathbf{F}\\|\\|\\mathbf{d}\\|\\cos\\theta$.", zh: "用 $W = \\mathbf{F} \\cdot \\mathbf{d} = \\|\\mathbf{F}\\|\\|\\mathbf{d}\\|\\cos\\theta$ 计算功。" },
        howToRecognize: { en: "Force and displacement given; asked for work done.", zh: "给出力和位移；要求做的功。" },
        steps: [
          { en: "If components given: $W = F_x d_x + F_y d_y$", zh: "若给出分量：$W = F_x d_x + F_y d_y$" },
          { en: "If magnitude and angle given: $W = \\|\\mathbf{F}\\|\\|\\mathbf{d}\\|\\cos\\theta$", zh: "若给出大小和角度：$W = \\|\\mathbf{F}\\|\\|\\mathbf{d}\\|\\cos\\theta$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "A force of 50 lb at $30°$ above horizontal moves an object 100 ft horizontally. Find the work done.", zh: "50 磅力与水平成 $30°$，使物体水平移动 100 ft，求做的功。" },
        commonTraps: [
          { en: "Multiplying force magnitude by distance without the $\\cos\\theta$ factor", zh: "力的大小乘以距离时忘了 $\\cos\\theta$ 因子" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-6-4-7",
        title: { en: "Multi-Force Work Problem", zh: "多力做功问题" },
        description: { en: "Compute total work when multiple forces act over a displacement.", zh: "多个力作用于一个位移时计算总功。" },
        howToRecognize: { en: "Multiple forces; asked for total work.", zh: "多个力；要求总功。" },
        steps: [
          { en: "Find resultant force $\\mathbf{F} = \\mathbf{F}_1 + \\mathbf{F}_2 + \\cdots$", zh: "求合力 $\\mathbf{F} = \\mathbf{F}_1 + \\mathbf{F}_2 + \\cdots$" },
          { en: "Compute $W = \\mathbf{F} \\cdot \\mathbf{d}$", zh: "算 $W = \\mathbf{F} \\cdot \\mathbf{d}$" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Forces $\\langle 10, 3 \\rangle$ and $\\langle -4, 8 \\rangle$ act on an object that moves from $(0,0)$ to $(5, 2)$. Find total work.", zh: "力 $\\langle 10, 3 \\rangle$ 和 $\\langle -4, 8 \\rangle$ 作用于物体，物体从 $(0,0)$ 移到 $(5, 2)$，求总功。" },
        commonTraps: [
          { en: "Computing work for each force separately and averaging instead of adding", zh: "分别算各力的功然后取平均而非相加" },
        ],
      },
      {
        id: "pt-6-4-8",
        title: { en: "Find a Vector Satisfying Angle and Dot Product Conditions", zh: "求满足夹角和点积条件的向量" },
        description: { en: "Find a vector that is orthogonal to a given vector, or at a specific angle.", zh: "求与给定向量正交或成特定角的向量。" },
        howToRecognize: { en: "Asked to find a vector with a specific relationship (angle, perpendicularity) to a given one.", zh: "要求找与给定向量有特定关系（角度、垂直）的向量。" },
        steps: [
          { en: "For orthogonal: if $\\mathbf{v} = \\langle a, b \\rangle$, then $\\langle -b, a \\rangle$ and $\\langle b, -a \\rangle$ are orthogonal to $\\mathbf{v}$", zh: "正交：若 $\\mathbf{v} = \\langle a, b \\rangle$，则 $\\langle -b, a \\rangle$ 和 $\\langle b, -a \\rangle$ 与 $\\mathbf{v}$ 正交" },
          { en: "For a specific angle: use $\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}$ as a constraint", zh: "特定角：用 $\\cos\\theta = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|}$ 作为约束" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find a unit vector that makes a $60°$ angle with $\\langle 1, 0 \\rangle$.", zh: "求与 $\\langle 1, 0 \\rangle$ 成 $60°$ 角的单位向量。" },
        commonTraps: [
          { en: "Forgetting there are two such vectors (above and below the $x$-axis)", zh: "忘记有两个这样的向量（$x$ 轴上方和下方各一个）" },
        ],
      },
    ],
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
    learningGoals: [
      { en: "Plot complex numbers in the complex plane", zh: "在复数平面上标复数" },
      { en: "Convert between standard form ($a + bi$) and trigonometric form ($r(\\cos\\theta + i\\sin\\theta)$)", zh: "在标准形式 ($a + bi$) 和三角形式 ($r(\\cos\\theta + i\\sin\\theta)$) 之间转换" },
      { en: "Multiply and divide complex numbers in trigonometric form", zh: "用三角形式进行复数乘除" },
      { en: "Use DeMoivre's Theorem to find powers and $n$th roots of complex numbers", zh: "用棣莫弗定理求复数的幂和 $n$ 次方根" },
    ],
    keyConcepts: [
      {
        id: "kc-6-5-1",
        title: { en: "Trigonometric (Polar) Form of a Complex Number", zh: "复数的三角（极坐标）形式" },
        explanation: {
          en: "A complex number $z = a + bi$ can be written as $z = r(\\cos\\theta + i\\sin\\theta)$ where $r = |z| = \\sqrt{a^2 + b^2}$ (modulus) and $\\theta = \\arg(z) = \\arctan(\\frac{b}{a})$ (argument, adjusted for quadrant). Sometimes written $r\\,\\text{cis}\\,\\theta$.",
          zh: "复数 $z = a + bi$ 可写为 $z = r(\\cos\\theta + i\\sin\\theta)$，其中 $r = |z| = \\sqrt{a^2 + b^2}$（模）且 $\\theta = \\arg(z) = \\arctan(\\frac{b}{a})$（辐角，需根据象限调整）。有时写作 $r\\,\\text{cis}\\,\\theta$。",
        },
        whenToUse: { en: "Multiplication, division, powers, and roots are much easier in this form", zh: "三角形式使乘除、幂和方根运算更简便" },
        commonMistake: { en: "Not adjusting the argument for the correct quadrant (same issue as direction angles)", zh: "辐角未根据正确象限调整（与方向角相同的问题）" },
        example: { en: "$1 + i$: $r = \\sqrt{2}$, $\\theta = 45°$, so $z = \\sqrt{2}(\\cos 45° + i\\sin 45°)$", zh: "$1 + i$：$r = \\sqrt{2}$，$\\theta = 45°$，所以 $z = \\sqrt{2}(\\cos 45° + i\\sin 45°)$" },
      },
      {
        id: "kc-6-5-2",
        title: { en: "Multiplication and Division in Trig Form", zh: "三角形式的乘除" },
        explanation: {
          en: "Multiplication: $r_1(\\text{cis}\\,\\theta_1) \\cdot r_2(\\text{cis}\\,\\theta_2) = r_1 r_2\\,\\text{cis}(\\theta_1 + \\theta_2)$. Multiply moduli, add arguments. Division: $\\frac{r_1}{r_2}\\,\\text{cis}(\\theta_1 - \\theta_2)$. Divide moduli, subtract arguments.",
          zh: "乘法：$r_1(\\text{cis}\\,\\theta_1) \\cdot r_2(\\text{cis}\\,\\theta_2) = r_1 r_2\\,\\text{cis}(\\theta_1 + \\theta_2)$。模相乘，辐角相加。除法：$\\frac{r_1}{r_2}\\,\\text{cis}(\\theta_1 - \\theta_2)$。模相除，辐角相减。",
        },
        whenToUse: { en: "Multiplying or dividing complex numbers", zh: "复数乘除" },
        commonMistake: { en: "Adding moduli instead of multiplying in multiplication", zh: "乘法时对模做加法而非乘法" },
        example: { en: "$2\\,\\text{cis}\\,30° \\cdot 3\\,\\text{cis}\\,60° = 6\\,\\text{cis}\\,90° = 6i$", zh: "$2\\,\\text{cis}\\,30° \\cdot 3\\,\\text{cis}\\,60° = 6\\,\\text{cis}\\,90° = 6i$" },
      },
      {
        id: "kc-6-5-3",
        title: { en: "DeMoivre's Theorem", zh: "棣莫弗定理" },
        explanation: {
          en: "Powers: $[r(\\cos\\theta + i\\sin\\theta)]^n = r^n(\\cos n\\theta + i\\sin n\\theta)$. Roots: the $n$th roots of $r\\,\\text{cis}\\,\\theta$ are $\\sqrt[n]{r}\\,\\text{cis}\\left(\\frac{\\theta + 2k\\pi}{n}\\right)$ for $k = 0, 1, \\ldots, n-1$. There are exactly $n$ distinct $n$th roots, equally spaced around a circle of radius $\\sqrt[n]{r}$.",
          zh: "幂：$[r(\\cos\\theta + i\\sin\\theta)]^n = r^n(\\cos n\\theta + i\\sin n\\theta)$。根：$r\\,\\text{cis}\\,\\theta$ 的 $n$ 次根为 $\\sqrt[n]{r}\\,\\text{cis}\\left(\\frac{\\theta + 2k\\pi}{n}\\right)$，$k = 0, 1, \\ldots, n-1$。恰有 $n$ 个不同的 $n$ 次根，均匀分布在半径为 $\\sqrt[n]{r}$ 的圆上。",
        },
        whenToUse: { en: "Finding powers or roots of complex numbers", zh: "求复数的幂或方根" },
        commonMistake: { en: "Forgetting to raise $r$ to the $n$th power (or take the $n$th root) — not just the angle", zh: "忘记对 $r$ 取 $n$ 次幂（或 $n$ 次根）——不只是角度" },
        example: { en: "$(1 + i)^6$: $r = \\sqrt{2}$, $\\theta = 45°$; $(\\sqrt{2})^6 \\text{cis}(270°) = 8(0 - i) = -8i$", zh: "$(1 + i)^6$：$r = \\sqrt{2}$，$\\theta = 45°$；$(\\sqrt{2})^6 \\text{cis}(270°) = 8(0 - i) = -8i$" },
      },
    ],
    formulas: [
      {
        id: "f-6-5-1",
        name: { en: "Trigonometric Form", zh: "三角形式" },
        formula: "z = r(\\cos\\theta + i\\sin\\theta), \\quad r = \\sqrt{a^2 + b^2}, \\quad \\theta = \\arctan\\frac{b}{a}",
        variables: [
          { en: "$a + bi$ — standard form", zh: "$a + bi$ — 标准形式" },
          { en: "$r$ — modulus; $\\theta$ — argument", zh: "$r$ — 模；$\\theta$ — 辐角" },
        ],
        whenToUse: { en: "Converting between forms; preparing for multiplication, division, powers, or roots", zh: "形式转换；为乘除、幂、方根做准备" },
        commonProblemTypes: [
          { en: "Convert $a + bi$ to trig form", zh: "将 $a + bi$ 转为三角形式" },
          { en: "Convert trig form to $a + bi$", zh: "将三角形式转为 $a + bi$" },
        ],
        example: { en: "$-3 + 3i$: $r = 3\\sqrt{2}$, $\\theta = 135°$", zh: "$-3 + 3i$：$r = 3\\sqrt{2}$，$\\theta = 135°$" },
      },
      {
        id: "f-6-5-2",
        name: { en: "DeMoivre's Theorem", zh: "棣莫弗定理" },
        formula: "[r(\\cos\\theta + i\\sin\\theta)]^n = r^n(\\cos n\\theta + i\\sin n\\theta)",
        variables: [
          { en: "$n$ — any positive integer for powers; for roots, use $n = \\frac{1}{k}$ approach", zh: "$n$ — 幂运算取正整数；方根用 $n = \\frac{1}{k}$ 方法" },
        ],
        whenToUse: { en: "Finding powers or $n$th roots of complex numbers", zh: "求复数的幂或 $n$ 次根" },
        commonProblemTypes: [
          { en: "Compute $(1 + i)^{10}$", zh: "计算 $(1 + i)^{10}$" },
          { en: "Find all cube roots of $8$", zh: "求 $8$ 的所有立方根" },
        ],
        example: { en: "Cube roots of $8$: $r = 8$, $\\theta = 0°$; roots: $2\\,\\text{cis}\\,0° = 2$, $2\\,\\text{cis}\\,120°$, $2\\,\\text{cis}\\,240°$", zh: "$8$ 的立方根：$r = 8$，$\\theta = 0°$；根：$2\\,\\text{cis}\\,0° = 2$、$2\\,\\text{cis}\\,120°$、$2\\,\\text{cis}\\,240°$" },
      },
    ],
    problemTypes: [
      // ── Easy (4) ──────────────────────────────────────────
      {
        id: "pt-6-5-1",
        title: { en: "Convert to Trigonometric Form", zh: "转换为三角形式" },
        description: { en: "Write $a + bi$ in $r(\\cos\\theta + i\\sin\\theta)$ form.", zh: "将 $a + bi$ 写成 $r(\\cos\\theta + i\\sin\\theta)$ 形式。" },
        howToRecognize: { en: "Complex number in standard form; asked for trig form.", zh: "标准形式的复数；要求三角形式。" },
        steps: [
          { en: "Find $r = \\sqrt{a^2 + b^2}$", zh: "求 $r = \\sqrt{a^2 + b^2}$" },
          { en: "Find $\\theta = \\arctan(b/a)$, adjust for quadrant", zh: "求 $\\theta = \\arctan(b/a)$，根据象限调整" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Write $-1 + \\sqrt{3}i$ in trigonometric form.", zh: "将 $-1 + \\sqrt{3}i$ 写成三角形式。" },
        commonTraps: [
          { en: "Getting $\\theta = -60°$ instead of $120°$ (must be in QII)", zh: "得到 $\\theta = -60°$ 而非 $120°$（应在第二象限）" },
        ],
      },
      {
        id: "pt-6-5-2",
        title: { en: "Convert to Standard Form", zh: "转换为标准形式" },
        description: { en: "Write $r(\\cos\\theta + i\\sin\\theta)$ as $a + bi$.", zh: "将 $r(\\cos\\theta + i\\sin\\theta)$ 写为 $a + bi$。" },
        howToRecognize: { en: "Complex number in trig form; asked for standard form.", zh: "三角形式的复数；要求标准形式。" },
        steps: [
          { en: "$a = r\\cos\\theta$, $b = r\\sin\\theta$", zh: "$a = r\\cos\\theta$，$b = r\\sin\\theta$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Write $4(\\cos 210° + i\\sin 210°)$ in standard form.", zh: "将 $4(\\cos 210° + i\\sin 210°)$ 写成标准形式。" },
        commonTraps: [
          { en: "Calculator in wrong mode (degrees vs. radians)", zh: "计算器模式搞错（角度 vs 弧度）" },
        ],
      },
      {
        id: "pt-6-5-3",
        title: { en: "Multiply Complex Numbers in Trig Form", zh: "用三角形式进行复数乘法" },
        description: { en: "Multiply moduli, add arguments.", zh: "模相乘，辐角相加。" },
        howToRecognize: { en: "Two complex numbers in trig form; asked for their product.", zh: "两个三角形式的复数；要求乘积。" },
        steps: [
          { en: "$r_1 r_2 \\,\\text{cis}(\\theta_1 + \\theta_2)$", zh: "$r_1 r_2 \\,\\text{cis}(\\theta_1 + \\theta_2)$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Multiply $3(\\cos 40° + i\\sin 40°)$ and $5(\\cos 80° + i\\sin 80°)$.", zh: "计算 $3(\\cos 40° + i\\sin 40°)$ 与 $5(\\cos 80° + i\\sin 80°)$ 的乘积。" },
        commonTraps: [
          { en: "Multiplying arguments instead of adding them", zh: "辐角相乘而非相加" },
        ],
      },
      {
        id: "pt-6-5-4",
        title: { en: "Divide Complex Numbers in Trig Form", zh: "用三角形式进行复数除法" },
        description: { en: "Divide moduli, subtract arguments.", zh: "模相除，辐角相减。" },
        howToRecognize: { en: "Division of two complex numbers in trig form.", zh: "两个三角形式复数的除法。" },
        steps: [
          { en: "$\\frac{r_1}{r_2} \\,\\text{cis}(\\theta_1 - \\theta_2)$", zh: "$\\frac{r_1}{r_2} \\,\\text{cis}(\\theta_1 - \\theta_2)$" },
        ],
        difficulty: "easy",
        exampleProblem: { en: "Divide $10(\\cos 300° + i\\sin 300°)$ by $2(\\cos 120° + i\\sin 120°)$.", zh: "计算 $10(\\cos 300° + i\\sin 300°) \\div 2(\\cos 120° + i\\sin 120°)$。" },
        commonTraps: [
          { en: "Subtracting moduli instead of dividing", zh: "模相减而非相除" },
        ],
      },
      // ── Medium (3) ────────────────────────────────────────
      {
        id: "pt-6-5-5",
        title: { en: "Find Power Using DeMoivre's Theorem", zh: "用棣莫弗定理求幂" },
        description: { en: "Compute $z^n$ by raising the modulus to the $n$th power and multiplying the argument by $n$.", zh: "对模取 $n$ 次幂、辐角乘以 $n$ 来计算 $z^n$。" },
        howToRecognize: { en: "Asked for $(a+bi)^n$ where $n$ is a positive integer.", zh: "要求 $(a+bi)^n$，$n$ 为正整数。" },
        steps: [
          { en: "Convert to trig form: $r\\,\\text{cis}\\,\\theta$", zh: "转为三角形式：$r\\,\\text{cis}\\,\\theta$" },
          { en: "Apply: $r^n \\,\\text{cis}(n\\theta)$", zh: "应用：$r^n \\,\\text{cis}(n\\theta)$" },
          { en: "Convert back to $a + bi$", zh: "转回 $a + bi$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find $(1 - i)^8$.", zh: "求 $(1 - i)^8$。" },
        commonTraps: [
          { en: "Forgetting to raise $r$ to the power (not just the angle)", zh: "忘记对 $r$ 取幂（不只是角度）" },
        ],
      },
      {
        id: "pt-6-5-6",
        title: { en: "Find $n$th Roots of a Complex Number", zh: "求复数的 $n$ 次根" },
        description: { en: "Find all $n$ distinct $n$th roots using DeMoivre's Theorem.", zh: "用棣莫弗定理求所有 $n$ 个不同的 $n$ 次根。" },
        howToRecognize: { en: "Asked for square roots, cube roots, or $n$th roots of a complex number.", zh: "要求复数的平方根、立方根或 $n$ 次根。" },
        steps: [
          { en: "Convert to trig form", zh: "转为三角形式" },
          { en: "Roots: $\\sqrt[n]{r}\\,\\text{cis}\\left(\\frac{\\theta + 360°k}{n}\\right)$, $k = 0, 1, \\ldots, n-1$", zh: "根：$\\sqrt[n]{r}\\,\\text{cis}\\left(\\frac{\\theta + 360°k}{n}\\right)$，$k = 0, 1, \\ldots, n-1$" },
          { en: "List all $n$ roots", zh: "列出全部 $n$ 个根" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find the three cube roots of $-8$.", zh: "求 $-8$ 的三个立方根。" },
        commonTraps: [
          { en: "Stopping at $k = 0$ — there are $n$ roots, not just one", zh: "只算 $k = 0$ 就停——有 $n$ 个根，不只一个" },
        ],
      },
      {
        id: "pt-6-5-7",
        title: { en: "Find Roots of Unity", zh: "求单位根" },
        description: { en: "Find all $n$th roots of $1$.", zh: "求 $1$ 的所有 $n$ 次根。" },
        howToRecognize: { en: "Asked for the $n$th roots of unity ($z^n = 1$).", zh: "要求单位根（$z^n = 1$）。" },
        steps: [
          { en: "$r = 1$, $\\theta = 0°$", zh: "$r = 1$，$\\theta = 0°$" },
          { en: "Roots: $\\text{cis}\\left(\\frac{360°k}{n}\\right)$, $k = 0, 1, \\ldots, n-1$", zh: "根：$\\text{cis}\\left(\\frac{360°k}{n}\\right)$，$k = 0, 1, \\ldots, n-1$" },
        ],
        difficulty: "medium",
        exampleProblem: { en: "Find all fourth roots of unity.", zh: "求所有四次单位根。" },
        commonTraps: [
          { en: "Forgetting that $1$ itself is always one of the roots (at $k = 0$)", zh: "忘记 $1$ 本身总是其中一个根（$k = 0$ 时）" },
        ],
      },
      // ── Hard (2) ──────────────────────────────────────────
      {
        id: "pt-6-5-8",
        title: { en: "Solve $z^n = w$ for Complex $w$", zh: "解 $z^n = w$（$w$ 为复数）" },
        description: { en: "Find all complex solutions of $z^n = w$.", zh: "求 $z^n = w$ 的所有复数解。" },
        howToRecognize: { en: "Equation like $z^4 = -16$ or $z^3 = 8i$.", zh: "方程如 $z^4 = -16$ 或 $z^3 = 8i$。" },
        steps: [
          { en: "Write $w$ in trig form", zh: "将 $w$ 写成三角形式" },
          { en: "Apply the $n$th root formula", zh: "应用 $n$ 次根公式" },
          { en: "Convert each root to $a + bi$ if required", zh: "如有要求将每个根转为 $a + bi$" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find all complex solutions of $z^4 = -16$.", zh: "求 $z^4 = -16$ 的所有复数解。" },
        commonTraps: [
          { en: "Converting $-16$ to trig form incorrectly — $r = 16$, $\\theta = 180°$", zh: "将 $-16$ 转为三角形式时出错——$r = 16$，$\\theta = 180°$" },
        ],
      },
      {
        id: "pt-6-5-9",
        title: { en: "Plot Roots in the Complex Plane", zh: "在复数平面上画根" },
        description: { en: "Find and plot all $n$th roots, noting they are equally spaced on a circle.", zh: "求并标出所有 $n$ 次根，注意它们在圆上均匀分布。" },
        howToRecognize: { en: "Asked to find AND plot the roots.", zh: "要求找并画出根。" },
        steps: [
          { en: "Find all $n$ roots using DeMoivre's", zh: "用棣莫弗定理求所有 $n$ 个根" },
          { en: "Note they lie on a circle of radius $\\sqrt[n]{r}$", zh: "它们位于半径 $\\sqrt[n]{r}$ 的圆上" },
          { en: "Adjacent roots are separated by $\\frac{360°}{n}$", zh: "相邻根间隔 $\\frac{360°}{n}$" },
          { en: "Plot each point", zh: "标出每个点" },
        ],
        difficulty: "hard",
        exampleProblem: { en: "Find and plot the five fifth roots of $32$.", zh: "求并画出 $32$ 的五个五次方根。" },
        commonTraps: [
          { en: "Not recognizing the geometric pattern — roots of unity form a regular polygon", zh: "没认出几何规律——单位根构成正多边形" },
        ],
      },
    ],
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
