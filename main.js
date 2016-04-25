$(function(){

    $(window).scroll(function(){
       var scrollTop = $('body').scrollTop();
        console.log($('#content').scrollTop());
       $('body')[scrollTop>0 ? 'addClass' : 'removeClass']('scrolled');
    });

})