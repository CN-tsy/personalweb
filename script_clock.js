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
        const nextIndex = (currentIndex + 1) % cities.length;
        const nextItem = container.children[nextIndex];
        
        // 更新内容
        cities.forEach((city, i) => {
          container.children[i].textContent = 
            `${city.name} ${getTimeForTimeZone(city.timeZone)}`;
        });
        
        // 动画切换
        currentItem.classList.remove('active');
        currentItem.classList.add('leaving');
        
        setTimeout(() => {
          currentItem.classList.remove('leaving');
          nextItem.classList.add('active');
          currentIndex = nextIndex;
        }, 700);
      }
      
      // 获取时区时间
      function getTimeForTimeZone(timeZone) {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      return formatter.format(now).replace(/^24/, '00');
      }
      
      // 初始更新
      setInterval(switchCity, 5000);
    });
