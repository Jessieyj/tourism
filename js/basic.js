//轮播图
window.onload = function () {
    var pic = document.getElementById("pic");
    var picList = document.getElementById("picList");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var index = 1;

    function showButton() {
        for(var i = 0; i < buttons.length; i++){
            if(buttons[i].className == "on"){
                buttons[i].className = "";
                break;
            }
        }
        buttons[index-1].className = "on";
        console.log("index",index);
    }
    function animate(offset) {
        var newLeft = parseInt(picList.style.left) + offset;
        
        picList.style.left = newLeft + "px";
        if(newLeft+6315<0){
            picList.style.left = 0 + "px";
        }
        console.log("11111111111111")
        if(newLeft>0){
            picList.style.left = -6315 + "px";
        }
    }

    setInterval("next.onclick()",2500);
    for(var i = 0; i<buttons.length; i++){
        buttons[i].onclick = function () {
            if(this.className == "on"){
                return;
            }
            var nowIndex = parseInt(this.getAttribute("index"));
            var offset = -1263 * (nowIndex - index);
            animate(offset);
            index = nowIndex;
            showButton();
        }
    }
    next.onclick = function () {
        if(index == 6){
            index = 1;
        }else{
            index += 1;
        }
        showButton();
        animate(-1263);
    }
    prev.onclick = function () {
        if(index == 1){
            index = 6;
        }else{
            index -= 1;
        }
        showButton();
        animate(1263);
    }
}
