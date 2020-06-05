$(document).ready(function(){
  const pageTitle='食品及飲料';
  document.title=pageTitle+' | Linkedmarts';

  $('#position_nav').load('component/nav.html');
  $('#position_cat').load('component/categoryBar.html');
  $('#position_adBanner').load('component/ad_category.html');

  $('#position_footer').load('component/footer.html');

  /////////////////////////////////////////////////////////////////////////
  $('div.main_cat').on('click',function(){
    $('div.sc_list').removeClass('active');
    $('div.sub_cat_title').removeClass('active');
    $('div.sc_item').removeClass('active');
  });
  $('div.sub_cat_title ').on('click',function(){
    let target=$(this).attr('id');
    target=target+'_list';
    $('div.sub_cat_title').removeClass('active');
    $(this).addClass('active');
    $('div.sc_list').removeClass('active');
    $('div.'+target).addClass('active');
  });
  $('div.sc_item').on('click',function(){
    $('div.sc_item').removeClass('active');
    $(this).addClass('active');
  });
  $('div.brand_item').on('click',function(){
    $(this).toggleClass('active');
  });



  const slider=document.getElementById('price_slider');
  noUiSlider.create(slider,{
    start:[0,100],
    connect:true,
    range:{'min':0,'max':100}
  });

  slider.noUiSlider.on('update',function(values,handle){
    console.log(handle);
  });
});
