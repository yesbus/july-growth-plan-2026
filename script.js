const YEAR = 2026;
const MONTH_INDEX = 6;
const TOTAL_DAYS = 31;
const STORAGE_KEY = "july-growth-plan-2026";

const plans = [
  {
    day: 1,
    theme: "从轻量开始，把节奏调顺。",
    tasks: [
      { kind: "阅读", icon: "读", title: "建立阅读起点", detail: "读一本非虚构或专业书 25 分钟，写下 3 个关键词和 1 个想继续查的问题。" },
      { kind: "运动", icon: "走", title: "快走唤醒", detail: "户外快走 30 分钟，速度保持能说短句；结束做肩颈环绕和小腿拉伸各 2 组。" }
    ]
  },
  {
    day: 2,
    theme: "把注意力从手机挪回手边的事。",
    tasks: [
      { kind: "益智", icon: "拼", title: "100片拼图开局", detail: "先按边框、颜色、纹理分三堆，完成外框；记录最容易卡住的区域。" },
      { kind: "运动", icon: "伸", title: "核心稳定", detail: "平板支撑 3 组，每组 25 秒；臀桥 3 组，每组 15 次；最后做猫牛式 2 分钟。" }
    ]
  },
  {
    day: 3,
    theme: "阅读输入和手作输出各占一半。",
    tasks: [
      { kind: "阅读", icon: "摘", title: "主题摘抄", detail: "阅读 30 分钟，摘出 2 句有用内容，用自己的话改写成可执行建议。" },
      { kind: "益智", icon: "豆", title: "拼豆图案", detail: "选择 1 个 12x12 小图案，先配色再摆豆；完成后拍照，标出下一次要换的颜色。" }
    ]
  },
  {
    day: 4,
    theme: "周末不加量，只做得更完整。",
    tasks: [
      { kind: "运动", icon: "跑", title: "间歇慢跑", detail: "热身走 8 分钟；慢跑 2 分钟加快走 2 分钟，循环 6 轮；放松拉伸 8 分钟。" },
      { kind: "益智", icon: "数", title: "数独一盘", detail: "完成一盘入门或中级数独，卡住时只做候选数，不直接看答案。" }
    ]
  },
  {
    day: 5,
    theme: "给身体恢复，也给大脑一点秩序。",
    tasks: [
      { kind: "阅读", icon: "复", title: "周阅读复盘", detail: "翻看本周笔记 20 分钟，挑 1 个观点写成 120 字短评。" },
      { kind: "运动", icon: "瑜", title: "舒缓瑜伽", detail: "拜日式 4 轮；婴儿式、鸽子式、仰卧扭转各 90 秒，重点放慢呼吸。" }
    ]
  },
  {
    day: 6,
    theme: "新一周先抓精神状态。",
    tasks: [
      { kind: "阅读", icon: "读", title: "晨间阅读", detail: "起床后 1 小时内阅读 20 分钟，手机放到看不见的位置；写一句今日要实践的内容。" },
      { kind: "运动", icon: "腿", title: "下肢力量", detail: "深蹲 3 组 x 12 次，箭步蹲左右各 10 次，提踵 3 组 x 18 次；组间休息 60 秒。" }
    ]
  },
  {
    day: 7,
    theme: "用拼图训练耐心和观察。",
    tasks: [
      { kind: "益智", icon: "拼", title: "拼图推进", detail: "继续拼图 40 分钟，优先找高对比色区域；最后把剩余碎片重新按图案分组。" },
      { kind: "运动", icon: "氧", title: "有氧耐力", detail: "骑车或椭圆机 35 分钟，前 5 分钟热身，中间保持稳定出汗，最后 5 分钟降速。" }
    ]
  },
  {
    day: 8,
    theme: "把读到的东西说清楚。",
    tasks: [
      { kind: "阅读", icon: "讲", title: "费曼复述", detail: "阅读 25 分钟后，用 5 句话向假想朋友解释核心观点，发现说不清的地方做标记。" },
      { kind: "运动", icon: "背", title: "背部激活", detail: "弹力带划船 3 组 x 15 次，俯身 Y-T-W 各 10 次，靠墙天使 2 组 x 12 次。" }
    ]
  },
  {
    day: 9,
    theme: "手眼协调，也是在练专注力。",
    tasks: [
      { kind: "益智", icon: "豆", title: "拼豆进阶", detail: "做一个 16x16 对称图案，先完成中心线，再向两边复制；检查是否左右一致。" },
      { kind: "运动", icon: "拉", title: "全身拉伸", detail: "颈侧、胸部、髋屈肌、腘绳肌、小腿各 60 秒；每个动作保持鼻吸口呼。" }
    ]
  },
  {
    day: 10,
    theme: "让知识和生活发生一点连接。",
    tasks: [
      { kind: "阅读", icon: "联", title: "生活联想", detail: "阅读 30 分钟，选 1 个观点写出它能用在学习、工作或情绪管理中的场景。" },
      { kind: "益智", icon: "棋", title: "棋类残局", detail: "做 3 道象棋或国际象棋入门残局，每题最多思考 8 分钟，再看解析。" }
    ]
  },
  {
    day: 11,
    theme: "力量训练轻量但标准。",
    tasks: [
      { kind: "运动", icon: "力", title: "上肢力量", detail: "跪姿俯卧撑 3 组 x 10 次，哑铃推举 3 组 x 12 次，二头弯举 2 组 x 12 次。" },
      { kind: "阅读", icon: "摘", title: "金句卡片", detail: "读 20 分钟，做 1 张纸质或电子卡片：原句、解释、可行动作各一栏。" }
    ]
  },
  {
    day: 12,
    theme: "周日做整理，不追求塞满。",
    tasks: [
      { kind: "益智", icon: "盘", title: "拼图收尾", detail: "完成拼图或推进 45 分钟；如果未完成，记录剩余区域和下一步策略。" },
      { kind: "运动", icon: "走", title: "轻松散步", detail: "晚饭后散步 40 分钟，前 20 分钟不听音频，观察路上 5 个细节。" }
    ]
  },
  {
    day: 13,
    theme: "重新启动，目标要小。",
    tasks: [
      { kind: "阅读", icon: "读", title: "一章推进", detail: "阅读 1 小节或 25 分钟，结束时给本节写一个 10 字以内的小标题。" },
      { kind: "运动", icon: "核", title: "核心循环", detail: "死虫 12 次、俄罗斯转体 20 次、侧桥左右各 20 秒，循环 3 轮。" }
    ]
  },
  {
    day: 14,
    theme: "让手作进入稳定流程。",
    tasks: [
      { kind: "益智", icon: "豆", title: "拼豆配色表", detail: "做一个小图案前先列 4 色配色表，完成后比较实际效果和预期差异。" },
      { kind: "运动", icon: "跳", title: "低冲击燃脂", detail: "开合步 40 秒、原地后踢腿 40 秒、深蹲 12 次、休息 40 秒，循环 5 轮。" }
    ]
  },
  {
    day: 15,
    theme: "月中校准，不靠情绪判断进度。",
    tasks: [
      { kind: "阅读", icon: "复", title: "月中复盘", detail: "回看前半月笔记 30 分钟，选 3 条最有用内容，写成一页清单。" },
      { kind: "运动", icon: "测", title: "体能小测", detail: "记录平板支撑最长时间、1 分钟深蹲次数、快走 1 公里用时；只和自己比。" }
    ]
  },
  {
    day: 16,
    theme: "今天主练耐心。",
    tasks: [
      { kind: "益智", icon: "数", title: "逻辑题训练", detail: "做 2 道逻辑推理题，写出推理步骤；错题只改步骤，不只改答案。" },
      { kind: "运动", icon: "肩", title: "肩颈放松", detail: "靠墙站 3 分钟；肩胛绕环 20 次；斜方肌、胸小肌拉伸各 60 秒。" }
    ]
  },
  {
    day: 17,
    theme: "让阅读结果更可见。",
    tasks: [
      { kind: "阅读", icon: "图", title: "思维导图", detail: "阅读 25 分钟后画一张 1 页思维导图，只保留 1 个中心和 5 个分支。" },
      { kind: "益智", icon: "拼", title: "拼图限时", detail: "设定 30 分钟计时，只攻克一个区域；结束时把策略写在便签上。" }
    ]
  },
  {
    day: 18,
    theme: "周六给身体一次完整刺激。",
    tasks: [
      { kind: "运动", icon: "循", title: "全身循环", detail: "深蹲 12、俯卧撑 8、臀桥 15、登山跑 20、休息 60 秒，循环 4 轮。" },
      { kind: "阅读", icon: "听", title: "有声阅读", detail: "听 30 分钟优质播客或有声书，暂停记录 3 个要点，不边刷屏边听。" }
    ]
  },
  {
    day: 19,
    theme: "慢下来，做一个漂亮收尾。",
    tasks: [
      { kind: "益智", icon: "豆", title: "拼豆成品", detail: "完成一个可当书签或杯垫的小作品，检查边缘是否牢固，拍照归档。" },
      { kind: "运动", icon: "瑜", title: "恢复瑜伽", detail: "猫牛式、下犬式、低弓步、仰卧抱膝各 90 秒，整套做 2 轮。" }
    ]
  },
  {
    day: 20,
    theme: "新的一周，先清理输入通道。",
    tasks: [
      { kind: "阅读", icon: "清", title: "阅读环境清理", detail: "整理书桌 10 分钟，再阅读 25 分钟；桌面只留书、笔、水杯。" },
      { kind: "运动", icon: "走", title: "坡度快走", detail: "跑步机坡度 4 到 6，快走 30 分钟；没有跑步机就找带坡路线走。" }
    ]
  },
  {
    day: 21,
    theme: "动手活动也要有目标。",
    tasks: [
      { kind: "益智", icon: "拼", title: "300片拼图启动", detail: "只做分类和边框，限定 45 分钟；把同色但不同纹理分开摆放。" },
      { kind: "运动", icon: "腿", title: "髋腿稳定", detail: "蚌式开合左右各 15 次，单腿臀桥左右各 10 次，侧向走 3 组。" }
    ]
  },
  {
    day: 22,
    theme: "用输出倒逼理解。",
    tasks: [
      { kind: "阅读", icon: "写", title: "200字短写", detail: "读 20 分钟，写 200 字：这段内容解决了什么问题、我能怎么用。" },
      { kind: "运动", icon: "背", title: "坐姿修复", detail: "每 10 分钟做一次肩胛后缩，共 6 次；晚上加弹力带拉伸 3 组 x 15 次。" }
    ]
  },
  {
    day: 23,
    theme: "训练空间想象和细节检查。",
    tasks: [
      { kind: "益智", icon: "折", title: "折纸挑战", detail: "完成 1 个中等难度折纸模型，步骤卡住时倒回两步检查折痕方向。" },
      { kind: "运动", icon: "氧", title: "稳定有氧", detail: "游泳、骑车或快走 40 分钟，强度保持微喘；结束补水并拉伸小腿。" }
    ]
  },
  {
    day: 24,
    theme: "把信息变成自己的语言。",
    tasks: [
      { kind: "阅读", icon: "问", title: "问题清单", detail: "阅读 30 分钟，列出 5 个问题，其中 1 个明天查资料回答。" },
      { kind: "益智", icon: "数", title: "记忆宫殿", detail: "选 10 个随机词，用房间路线记忆；20 分钟后默写，统计正确率。" }
    ]
  },
  {
    day: 25,
    theme: "周六把强度放在白天。",
    tasks: [
      { kind: "运动", icon: "跑", title: "节奏跑走", detail: "热身 8 分钟；慢跑 4 分钟加快走 2 分钟，循环 5 轮；拉伸 10 分钟。" },
      { kind: "阅读", icon: "复", title: "章节回顾", detail: "不读新内容，回看本周阅读笔记，整理出 3 条行动建议。" }
    ]
  },
  {
    day: 26,
    theme: "用轻任务保持连续性。",
    tasks: [
      { kind: "益智", icon: "棋", title: "棋盘思考", detail: "下 1 盘 10 分钟快棋或做 3 道战术题，复盘一个失误。" },
      { kind: "运动", icon: "伸", title: "长拉伸", detail: "全身拉伸 25 分钟，髋、腿后侧、胸肩各做 2 个动作，每个 60 到 90 秒。" }
    ]
  },
  {
    day: 27,
    theme: "月底前把阅读成果收束。",
    tasks: [
      { kind: "阅读", icon: "整", title: "知识卡整理", detail: "整理本月阅读卡片 30 分钟，删掉重复内容，保留 5 张最有价值的卡片。" },
      { kind: "运动", icon: "力", title: "力量巩固", detail: "深蹲 15、俯卧撑 10、臀桥 18、平板 30 秒，循环 4 轮，动作保持标准。" }
    ]
  },
  {
    day: 28,
    theme: "把益智活动做成可展示的小成果。",
    tasks: [
      { kind: "益智", icon: "豆", title: "拼豆组合", detail: "做 2 个同主题小图案，尝试一冷一暖两种配色；完成后放在同一张照片里。" },
      { kind: "运动", icon: "走", title: "晚间步行", detail: "晚饭后走 45 分钟，前 10 分钟慢走热身，中间保持轻汗，最后 5 分钟降速。" }
    ]
  },
  {
    day: 29,
    theme: "让表达更清楚。",
    tasks: [
      { kind: "阅读", icon: "讲", title: "三分钟讲述", detail: "读 25 分钟后录一段 3 分钟语音，讲清一个观点；回听并删掉口头禅。" },
      { kind: "益智", icon: "拼", title: "拼图收束", detail: "推进 300 片拼图 40 分钟，优先完成边缘相连的区域，结束时清点剩余块数。" }
    ]
  },
  {
    day: 30,
    theme: "给身体和计划一次复查。",
    tasks: [
      { kind: "运动", icon: "测", title: "体能复测", detail: "重复 15 日的小测：平板、1 分钟深蹲、1 公里快走；对比变化并写一句原因。" },
      { kind: "阅读", icon: "写", title: "月底总结草稿", detail: "写 300 字总结：本月最有用的阅读、最有效的运动、最想保留的习惯。" }
    ]
  },
  {
    day: 31,
    theme: "完成比完美重要，给八月留一个入口。",
    tasks: [
      { kind: "阅读", icon: "收", title: "最终复盘", detail: "整理 7 月阅读和活动记录，选出 3 个八月继续做的主题。" },
      { kind: "益智", icon: "展", title: "成果展示", detail: "把拼图、拼豆、数独或折纸成果拍成一张合集，写下最满意的一件事。" }
    ]
  }
];

const bonusTips = [
  "桌面只留今天要用的3样东西。",
  "喝一杯水，再开始第一项任务。",
  "把手机放到够不到的位置 30 分钟。",
  "开始前写下今天最小完成标准。",
  "任务结束后给自己画一个小勾。",
  "开窗通风 5 分钟，让身体先醒过来。",
  "把明天要用的书和工具提前摆好。",
  "完成后不要立刻加量，先记录感受。"
];

const weekdayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
const calendarGrid = document.querySelector("#calendarGrid");
const planner = document.querySelector("#planner");
const selectedDate = document.querySelector("#selectedDate");
const weekdayLabel = document.querySelector("#weekdayLabel");
const dayTheme = document.querySelector("#dayTheme");
const taskList = document.querySelector("#taskList");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const bonusText = document.querySelector("#bonusText");
const openPlanButton = document.querySelector("#openPlan");
const shuffleBonusButton = document.querySelector("#shuffleBonus");

let selectedDay = getDefaultDay();
let completed = loadCompleted();

function getDefaultDay() {
  const now = new Date();
  if (now.getMonth() === MONTH_INDEX && now.getDate() >= 1 && now.getDate() <= TOTAL_DAYS) {
    return now.getDate();
  }
  return 1;
}

function loadCompleted() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCompleted() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
}

function renderCalendar() {
  calendarGrid.innerHTML = "";
  const firstDay = new Date(YEAR, MONTH_INDEX, 1).getDay();
  const mondayOffset = (firstDay + 6) % 7;

  for (let index = 0; index < mondayOffset; index += 1) {
    const empty = document.createElement("div");
    empty.className = "calendar-empty";
    calendarGrid.append(empty);
  }

  plans.forEach((plan) => {
    const date = new Date(YEAR, MONTH_INDEX, plan.day);
    const button = document.createElement("button");
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isToday = isTodayDate(plan.day);
    const isComplete = plan.tasks.every((_, index) => completed[taskKey(plan.day, index)]);

    button.className = "day-button";
    button.type = "button";
    button.dataset.day = String(plan.day);
    button.setAttribute("aria-label", `7月${plan.day}日，${weekdayNames[date.getDay()]}`);
    if (isWeekend) button.classList.add("is-weekend");
    if (isToday) button.classList.add("is-today");
    if (plan.day === selectedDay) button.classList.add("is-selected");
    if (isComplete) button.classList.add("is-complete");

    button.innerHTML = `<strong>${plan.day}</strong><span>${plan.tasks[0].kind} · ${plan.tasks[1].kind}</span>`;
    button.addEventListener("click", () => selectDay(plan.day));
    calendarGrid.append(button);
  });
}

function isTodayDate(day) {
  const now = new Date();
  return now.getFullYear() === YEAR && now.getMonth() === MONTH_INDEX && now.getDate() === day;
}

function selectDay(day) {
  selectedDay = day;
  renderCalendar();
  renderDetail();
}

function renderDetail() {
  const plan = plans.find((item) => item.day === selectedDay);
  const date = new Date(YEAR, MONTH_INDEX, selectedDay);

  selectedDate.textContent = `7月${selectedDay}日`;
  weekdayLabel.textContent = weekdayNames[date.getDay()];
  dayTheme.textContent = plan.theme;
  taskList.innerHTML = "";

  plan.tasks.forEach((task, index) => {
    const row = document.createElement("article");
    row.className = "task-row";
    row.dataset.kind = task.kind;

    const key = taskKey(selectedDay, index);
    const isDone = Boolean(completed[key]);

    row.innerHTML = `
      <div class="task-badge" aria-hidden="true">${task.icon}</div>
      <div class="task-copy">
        <h4>${task.kind} · ${task.title}</h4>
        <p>${task.detail}</p>
      </div>
      <button class="task-check" type="button" aria-pressed="${isDone}" aria-label="${task.title}完成状态">${isDone ? "✓" : ""}</button>
    `;

    row.querySelector(".task-check").addEventListener("click", (event) => {
      completed[key] = !completed[key];
      if (!completed[key]) {
        delete completed[key];
      }
      saveCompleted();
      event.currentTarget.setAttribute("aria-pressed", String(Boolean(completed[key])));
      event.currentTarget.textContent = completed[key] ? "✓" : "";
      updateProgress();
      renderCalendar();
    });

    taskList.append(row);
  });
}

function taskKey(day, index) {
  return `${day}-${index}`;
}

function updateProgress() {
  const done = Object.keys(completed).filter((key) => completed[key]).length;
  const total = TOTAL_DAYS * 2;
  const percent = Math.round((done / total) * 100);
  progressText.textContent = `${done} / ${total}`;
  progressBar.style.width = `${percent}%`;
}

function shuffleBonus() {
  const current = bonusText.textContent;
  const pool = bonusTips.filter((tip) => tip !== current);
  const nextTip = pool[Math.floor(Math.random() * pool.length)];
  bonusText.textContent = nextTip;
}

function openPlanner() {
  planner.hidden = false;
  openPlanButton.textContent = "计划已打开";
  renderCalendar();
  renderDetail();
  updateProgress();
  window.requestAnimationFrame(() => {
    planner.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

openPlanButton.addEventListener("click", openPlanner);
shuffleBonusButton.addEventListener("click", shuffleBonus);

if (window.location.hash === "#planner") {
  openPlanner();
}
