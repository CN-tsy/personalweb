const festivalPeriods = [
    { name: "十月庆典", start: { month: 9, day: 1 }, end: { month: 9, day: 31 } }, // 10.1-10.31
    { name: "三月庆典", start: { month: 2, day: 1 }, end: { month: 2, day: 10 } },   // 3.1-3.10
    { name: "四月庆典", start: { month: 3, day: 20 }, end: { month: 3, day: 30 } }  // 4.20-4.30
];

// 检查日期并执行重定向
function checkFestivalDates() {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0-11
    const currentDay = now.getDate();
    const statusDisplay = document.getElementById('statusDisplay');
    let isFestival = false;

    for (const period of festivalPeriods) {
        if (isDateInRange(currentMonth, currentDay, period.start, period.end)) {
            isFestival = true;
        }
    }

    if (!isFestival) {
        statusDisplay.textContent = '主题：默认主题 当前不在任何特殊时段内';
    }
    else {
        window.location.href = './celebrations/index.html'; // 重定向到节日页面
    }
}

// 判断日期是否在范围内
function isDateInRange(month, day, start, end) {
    // 同月比较
    if (start.month === end.month) {
        return month === start.month && 
               day >= start.day && 
               day <= end.day;
    }
    return false;
}

// 手动触发节日模式（调试用）
function triggerFestivalMode() {
    alert('调试模式：已进入节日页面');
    window.location.href = './celebrations/index.html'; // 重定向到节日页面
}

// 页面加载时检查
document.addEventListener('DOMContentLoaded', checkFestivalDates);

// 添加调试按钮（调试用）
const debugButton = document.createElement('button');
debugButton.textContent = '调试节日模式';
debugButton.style.position = 'fixed';
debugButton.style.bottom = '10px';
debugButton.style.right = '10px';
debugButton.style.zIndex = 1000;
debugButton.addEventListener('click', triggerFestivalMode);
document.body.appendChild(debugButton);

// 每天检查一次（86400000毫秒=1天）
setInterval(checkFestivalDates, 86400000);