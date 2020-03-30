$(function(){
//ready

//visual img_icon Selection
var idxImg=0;
$('.visual_icon > span').eq(1).find('img').on('click',function(){
    idxImg = $(this).index();
    imgChoose()
});

function imgChoose(){
    $('.visual ul li').removeClass('visual_show');
    $('.visual ul li').eq(idxImg).addClass('visual_show');
}

//visual prev
$('.visual_icon span:first').on('click',function(){
    if(idxImg == 0){
        idxImg = 5;
    };
    --idxImg;
    imgChoose()      
});

//visual next
$('.visual_icon span:last').on('click',function(){
    if(idxImg == 4){
        idxImg = -1;
    };
    ++idxImg;
    imgChoose()    
});

// //visual play icon
// $('.visual_icon p').on('click',function(){
//     var playImg = 'img/visual/play-button.png';
//     var playSrc = 'img/visual/pause.png';
//     if($(this).find('img').attr('src') == playSrc){
//         $(this).find('img').attr('src',playImg);
//         $('.visual_move').css('animation-play-state','paused');
//     }else{
//         $(this).find('img').attr('src',playSrc);
//         $('.visual_move').css('animation-play-state','running');
//     }
// });






//end
});

