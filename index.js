$(function () {
    $('.search').on('click',function(){
        $('.header').addClass('searching');
        $('.bag').removeClass().addClass('chahao');
    });
    $('.chahao').on('click',function(){
        $('.header').removeClass('searching');
        $('.chahao').removeClass().addClass('bag');
    });
    $('.daohang').on('click',function(){
        $('.daohang').toggleClass('gengduo');
        $('.zhezhao').toggleClass('heizhe');
        $('.xiaobag').toggleClass('bagright');
        $('.list').toggleClass('hengtiao');
    });
    $('.snei span').on('click',function(){
       $('.more').eq($(this).index()).toggleClass('morexie');
       $('.xialist').eq($(this).index()).toggleClass('xialalist');
        $('.xialist a').toggleClass('xiali');
    });
    var slides=$('.gallery-slide-wrapper a');
    var dots=$('.dot-nav .dot');
    var left=$('.left');
    var right=$('.right');
    var carouser=$('.carouser');
    var move=0;
    var moving=false;
    $(document).on('mousedown',false);
    // right.on('mousedown',false);
    var moveTo=function(el,dir){
        moving=true;
        if(dir=='right'){
            slides.filter('.active').removeClass('active').addClass('leave').delay(1000).queue(function(){
                $(this).removeClass('leave').dequeue();
                moving=false;
            });
            $(el).addClass('right');
            $(el).get(0).offsetWidth;
            $(el).removeClass('right').addClass('active');
        }else if(dir=='left'){
            slides.filter('.active').removeClass('active').addClass('right').delay(1000).queue(function(){
                $(this).removeClass('right').dequeue();
                moving=false;
            });
            $(el).addClass('enter').addClass('active').delay(1000).queue(function(){
                $(this).removeClass('enter').dequeue();
            })
        }

        // $(el).addClass('active').eq(slides.index(el)).addClass('active');
        dots.removeClass('active').eq(slides.index(el)).addClass('active');
    };
    var moveRight=function(){
        if(moving){return}
        var active=slides.filter('.active');
        var el=active.next().length?active.next():slides.eq(0);
        moveTo(el,'right')
    };
    var moveLeft=function(){
        if(moving){return}
        var active=slides.filter('.active');
        var el=active.prev().length?active.prev():slides.eq(-1);
        moveTo(el,'left')
    };
    move=setInterval(function(){
        moveRight();
    },3000);
    dots.on('click',function(){
        if(moving){return}
        var c=slides.index(slides.filter('.active'));
        var n=$(this).index();
        if(c==n){return}
        if(c>n){
            moveTo(slides.eq(n),'left')
        }else{
            moveTo(slides.eq(n),'right')
        }
        clearTimeout(move);
    });
    left.on('click',function(){
        moveLeft();
        clearTimeout(move);
    });
    right.on('click',function(){
        moveRight();
        clearTimeout(move);
    })
});