$(function () {
    
    $('#box').fullpage({

        navigation: true,
        sectionsColor: ['#f9dd67','#84a2d4','#ef674d','#ffeedd','#cf4759','#85d9ed','#8ac060','#84d9ed'],
        afterLoad: function (a, index) {
            // 清除jQuery动画，其实就是把style属性给清空就行了
            $('.section div,.section img').attr('style','').stop();
            $('.ye2 .search').attr('src',"images/02/search01.png");
            $('.section').removeClass('animation');

            // 第二屏
            if (index == 2) {
                $('.ye2 .search').animate({
                    marginRight:-111
                },1000,'easeOutBounce',function () {
                    
                    $('.ye2 .search').attr('src',"images/02/search02.png");

                    $('.ye2 .search').delay(500).animate({
                        marginRight:-280,
                        bottom:450,
                        height:30
                    },800)
                    $('.ye2 .sofa').delay(500).animate({
                        width:441,
                        height:218
                    },800)
                });
            }
            // 第三屏
            if (index == 3) {
                $('.ye3').addClass('animation');
            }

            // 第四屏
            if(index == 4) {
                $('.ye4 .che').animate({
                    marginLeft:1000
                },2500,"easeInElastic",function () {
                    $('.ye4 .dizhi').fadeIn();
                    $('.ye4 .gao1').fadeOut();
                })
            }
            // 第五屏
            if (index == 5) {
                $('.ye5').addClass('animation');
                // $('.ye5 .hand').animate({
                //     bottom:0
                // },1000,function () {
                //     $('.ye5 .bill').delay(300).animate({
                //         top:-130
                //     },1000,function () {
                //         // $('.ye5 .words')
                //     })
                // })
                // $('.ye5 .mouse1').delay(1000).fadeOut();
            }
            // 第六屏
            // $('').attr('style','');
            if (index == 6) {


                $('.ye6 .box1').animate({
                    top:25
                },1000,function () {
                    $('.ye6 .box').delay(200).animate({
                        backgroundPositionX:-1100 
                    },1000,function () {
                        $('.ye6 .man').animate({
                            width: 130,
                            height: 160
                        },600,function () {
                            $('.ye6 .man').animate({
                                right: -200
                            },1000,function () {
                                $('.ye6 .door').show();
                                setTimeout(function () {
                                    $('.ye6 .girl').show();
                                },500)
                            })
                        })
                    })
                }) 
            }

            
            // 第七屏
            if (index == 7) {
                $('.ye7').addClass('animation');
            }

            // 第八屏 

            if (index == 8) {

                var boxH = $(window).height();
                var boxW = $(window).width();
                console.log(boxH+','+boxW);
                
                $('.ye8 .box').mousemove(function(e){
                    // console.log(e);
                    var Xx = e.pageX;
                    // console.log(Xx);
                    var Yy = e.pageY;

                    var mousey = boxH - Yy;
                    var bottom = mousey - 449;

                    bottom = bottom >= 0 ? 0 :bottom;

                    $('.ye8 .hand').css({left:Xx-70,bottom:bottom -5})
                })

                $('.ye8 .zailai').click(function () {
                    
                    $.fn.fullpage.moveTo(1);
                    
                })

            }







          
        }
    });



})