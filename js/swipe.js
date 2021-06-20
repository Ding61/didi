<script>
 
// pure JS
var elem = document.getElementById('mySwipe');
window.mySwipe = Swipe(elem, {
   startSlide: 1,//初始化页面显示第4个轮番图  从0开始
   auto: 3000,//自动切换时间间隔3秒
   continuous: true,//切换所有图片完毕 继续切换第一张,反之false 
  // disableScroll: true,
  // stopPropagation: true,
  // callback: function(index, element) {},//每次执行的回调
  // transitionEnd: function(index, element) {}
});
 
 
</script>