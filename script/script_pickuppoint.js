$(document).ready(function(){
  //
  document.title='自取點位置 | Linkedmarts';
  //
  $('#position_nav').load('component/nav.html');
  $('#position_cat').load('component/categoryBar.html');

  $('div#position_notification').load('component/notification.html');

  $('#position_pickuppointDetail').load('component/pickuppointDetail.html');

  $('#position_footer').load('component/footer.html');
});
