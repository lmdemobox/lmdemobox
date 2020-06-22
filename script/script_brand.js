$(document).ready(function(){
  const pageTitle='大陽牌';
  document.title=pageTitle+' | Linkedmarts';

  $('#position_nav').load('component/nav.html');
  $('#position_cat').load('component/categoryBar.html');

  $('#position_brandDetail').load('component/brandDetail.html');
  $('#position_brandProduct').load('component/brandProduct.html');
  //$('#position_brandCopRe3').load('component/brandCopRe3.html');
  $('#position_brandADlc').load('component/brandADlc.html');
  $('#position_brandCust').load('component/brandCust.html');

  $('#position_footer').load('component/footer.html');

  /////////////////////////////////////////////////////////////////////////



});
