document.addEventListener('DOMContentLoaded', () => {
      const cities = [
        { name: "BEIJING", timeZone: "Asia/Shanghai" },
        { name: "WASHINGTON", timeZone: "America/New_York" },
        { name: "LONDON", timeZone: "Europe/London" },
        { name: "NAIROBI", timeZone: "Africa/Nairobi" }
      ];
      
      const container = document.getElementById('clock-container');
      let currentIndex = 0;
      
      // 创建时钟元素
      cities.forEach((city, index) => {
        const clockItem = document.createElement('div');
        clockItem.className = 'clock-item';
        clockItem.textContent = `${city.name} ${getTimeForTimeZone(city.timeZone)}`;
        clockItem.dataset.index = index;
        container.appendChild(clockItem);
      });
      
      // 初始化显示第一个
      container.children.classList.add('active');
      
      // 切换函数
      function switchCity() {
        const currentItem = container.querySelector('.active');
        const nextIndex = (currentIndex + 1) % cit
