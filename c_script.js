console.log("HelloHorld");

const closeBtn = document.querySelector(".close");
const tip = document.querySelector(".tips");

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
    
// 点击汉堡按钮切换菜单状态
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(".hamburger clicked");
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});
    
// 点击遮罩层关闭菜单
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});
    
// 点击菜单外部区域关闭菜单
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && e.target !== hamburger) {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    }
});

closeBtn.addEventListener("click", () => {
    tip.style.display = 'none';
    console.log("closed");
});
