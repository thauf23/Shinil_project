$(function(){
//ready

//img_icon Selection
// $('.visual_icon span').on('click',function(){
//     var idx = $(this).index();
//     var idxImg = idx - 2;

//     //img_icon Selection
//     if(idx > 1 && idx < 7){
//     $('.visual ul li').removeClass('visual_show');
//     $('.visual ul li').eq(idxImg).addClass('visual_show');
//     }
// });

//play icon
$('.visual_icon p').on('click',function(){
    var playImg = 'img/visual/play-button.png';
    var playSrc = 'img/visual/pause.png';
    if($(this).find('img').attr('src') == playSrc){
        $(this).find('img').attr('src',playImg);
    }else{
        $(this).find('img').attr('src',playSrc);
    }
});

// visual slide
// $('.visual ul').css({
//     left: '-100%'
// })

// console.log(slideLi);
// for(var i=0; i < 6; i++){
//     $('.visual ul .visual_none')[i].css({
//         top: 0,
//         left: '-100%'*i
//     });
// }





//end
});

