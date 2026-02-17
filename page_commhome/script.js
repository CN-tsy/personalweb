const steadyDuration = 2000; 
// 动态创建关键帧动画样式
const style = document.createElement('style');
style.textContent = `
  @keyframes blink-before {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(style);

// 获取目标元素
const spans = document.querySelectorAll('main p span');

// 定义一个函数来执行动画逻辑
function startBlinkAnimation() {
  spans.forEach(span => {
    // 创建伪元素样式容器
    const pseudoStyle = document.createElement('style');
    span.appendChild(pseudoStyle);

    // 添加闪烁动画
    pseudoStyle.textContent = `
      span::before {
        animation: blink-before 0.5s 3;
        animation-fill-mode: forwards;
      }
    `;

    // 动画结束事件处理
    span.addEventListener('animationend', () => {
      // 闪烁结束后保持常亮
      pseudoStyle.textContent = `span::before { opacity: 1; }`;

      // 常亮持续指定时间后恢复原始状态
      setTimeout(() => {
        pseudoStyle.textContent = '';
      }, steadyDuration);
    }, { once: true });
  });
}

// 使用 setInterval 定时重复执行动画
setInterval(() => {
  startBlinkAnimation();
}, steadyDuration + 2000); // 每次动画结束后再等待一段时间重新开始
