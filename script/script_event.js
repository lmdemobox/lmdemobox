document.addEventListener('keypress',(e)=>{
  if(e.which==97){
    $('div.b4_login').show();
    $('div.af_login').hide();
  }else if(e.which==98){
    $('div.b4_login').hide();
    $('div.af_login').show();
  }
});
window.addEventListener('scroll',function(){
  if(window.scrollY>=195){
    $('#section_category>div.wrapper').addClass('scrolled');
  }else if(window.scrollY<194){
    $('#section_category>div.wrapper').removeClass('scrolled');
  }
});
