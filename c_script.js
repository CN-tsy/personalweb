console.log("tsy c_script.js v=1.0");

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

function getNavHref(nav1Href, nav2Href, nav3Href, nav4Href) {
    nav.innerHTML=`
    <a href="${nav1Href}" style="--i:1">HOME</a>
    <a href="${nav2Href}" style="--i:2">ABOUT</a>
    <a href="${nav3Href}" style="--i:3">ARTICLES</a>
    <a href="${nav4Href}" style="--i:4">NEWS</a>
    `;

    menu.innerHTML=`
    <a href="${nav1Href}" style="--i:1">Home</a>
    <a href="${nav2Href}" style="--i:2">About</a>
    <a href="${nav3Href}" style="--i:3">Articles</a>
    <a href="${nav4Href}" style="--i:4">News</a>
    `;
    console.log(`nav${nav}\nmenu${menu}`);
}

