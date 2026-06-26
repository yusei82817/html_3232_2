const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    alert("ボタンが押された！");
});
const now = new Date();
console.log("アクセス時間:", now.toLocaleString());

const btn = document.getElementById("btn");

navigator.geolocation.getCurrentPosition(
    function(position){
        console.log("緯度:", position.coords.latitude);
        console.log("経度:", position.coords.longitude);
    },
    function(error){
        console.log("位置情報は取得できませんでした。");
    }
);

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    alert("ボタンが押された！");
});
