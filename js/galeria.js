// DROPNAVBAR

const dropNavbar = () => {
    if($('.dropNav').hasClass('dropNav-on')){
        $(".dropNav").removeClass('dropNav-on')
    }else{
        $(".dropNav").addClass('dropNav-on')
    }
} 

$('.sec--1-title').fadeOut(3000)

$('.gallery--image1').click(function () {
    let images = $('.gallery--image1').attr("src");
    if (!$('.modal').hasClass('modal--on')) {
        $('.modal').addClass('modal--on')
        $('.modal').html(`<img src=${images} alt="" class='modal--img'>`)
        $('body').css({ "overflow": 'hidden' })
    }
    $('.modal--img').click(function () {
        $('.modal').removeClass('modal--on');
        $('body').css({ "overflow": 'visible' })
    })

});

$('.gallery--image2').click(function () {
    let images = $('.gallery--image2').attr("src");
    if (!$('.modal').hasClass('modal--on')) {
        $('.modal').addClass('modal--on')
        $('.modal').html(`<img src=${images} alt="" class='modal--img'>`)
        $('body').css({ "overflow": 'hidden' })
    }
    $('.modal--img').click(function () {
        $('.modal').removeClass('modal--on');
        $('body').css({ "overflow": 'visible' })
    })

});

$('.gallery--image3').click(function () {
    let images = $('.gallery--image3').attr("src");
    if (!$('.modal').hasClass('modal--on')) {
        $('.modal').addClass('modal--on')
        $('.modal').html(`<img src=${images} alt="" class='modal--img'>`)
        $('body').css({ "overflow": 'hidden' })
    }
    $('.modal--img').click(function () {
        $('.modal').removeClass('modal--on');
        $('body').css({ "overflow": 'visible' })
    })

});

$('.gallery--image4').click(function () {
    let images = $('.gallery--image4').attr("src");
    if (!$('.modal').hasClass('modal--on')) {
        $('.modal').addClass('modal--on')
        $('.modal').html(`<img src=${images} alt="" class='modal--img'>`)
        $('body').css({ "overflow": 'hidden' })
    }
    $('.modal--img').click(function () {
        $('.modal').removeClass('modal--on');
        $('body').css({ "overflow": 'visible' })
    })

});

$('.gallery--image5').click(function () {
    let images = $('.gallery--image5').attr("src");
    if (!$('.modal').hasClass('modal--on')) {
        $('.modal').addClass('modal--on')
        $('.modal').html(`<img src=${images} alt="" class='modal--img'>`)
        $('body').css({ "overflow": 'hidden' })
    }
    $('.modal--img').click(function () {
        $('.modal').removeClass('modal--on');
        $('body').css({ "overflow": 'visible' })
    })

});

$('.gallery--image6').click(function () {
    let images = $('.gallery--image6').attr("src");
    if (!$('.modal').hasClass('modal--on')) {
        $('.modal').addClass('modal--on')
        $('.modal').html(`<img src=${images} alt="" class='modal--img'>`)
        $('body').css({ "overflow": 'hidden' })
    }
    $('.modal--img').click(function () {
        $('.modal').removeClass('modal--on');
        $('body').css({ "overflow": 'visible' })
    })

});