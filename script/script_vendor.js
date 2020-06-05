$(document).ready(function(){
  const pageTitle='柴米酒鹽公司';
  document.title=pageTitle+' | Linkedmarts';

  $('#position_nav').load('component/nav.html');
  $('#position_cat').load('component/categoryBar.html');

  $('#position_vendorDetail').load('component/vendorDetail.html');
  $('#position_vendorProduct').load('component/vendorProduct.html');
  $('#position_vendorCopRe3').load('component/vendorCopRe3.html');
  $('#position_vendorADlc').load('component/vendorADlc.html');
  $('#position_vendorCust').load('component/vendorCust.html');

  $('#position_footer').load('component/footer.html');

  /////////////////////////////////////////////////////////////////////////



});
