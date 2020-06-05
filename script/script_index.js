$(document).ready(function(){
  //
  document.title='Linkedmarts | 主頁';
  //
  $('#position_nav').load('component/nav.html');
  $('#position_cat').load('component/categoryBar.html');

  $('div#position_notification').load('component/notification.html');

  $('#position_carousel').load('component/carousel.html');
  $('#position_countDown').load('component/countDown.html');
  $('#position_hotProduct').load('component/hotProduct.html');
  $('#position_groupCheer').load('component/groupCheer.html');

  $('#position_footer').load('component/footer.html');
});
