$(function(){
//ready

$('.visual_icon span').on('click',function(){
    var idx = $(this).index();
    var idxImg = idx - 2;

    //img_icon Selection
    if(idx > 1 && idx < 7){
    $('.visual ul li').removeClass('visual_show');
    $('.visual ul li').eq(idxImg).addClass('visual_show');
    }

});






//end
});

