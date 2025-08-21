console.log("你学会了打开开发者工具!");
setTimeout(() => {
    alert("由于作者正在学习JavaScript,手机端左上角的“三”需要JS检测,所以无法连接到导航栏,手机可以在设置里把ui设置成pc即可");
}, 3000); // 3000毫秒=3秒
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector(".close");
    const tip = document.querySelector(".tips");
    
    function hide(e) {
        e.preventDefault();
        tip.style.display = 'none';
        console.log("closed");
    }
    
    closeBtn.addEventListener("click", hide);
});

