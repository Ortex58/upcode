$(document).ready(function() {
    //Burger btn open, close
    
    $('.sandwich').click(function() {
        $('.sandwich').toggleClass('active');
    });

    // Open & Close mobile menu

    $('.sandwich').click(function() {
        if(!$('.nav__menu__main').hasClass('openDone'))
        {
            $('.nav__menu__main').addClass('openDone');
            $('.nav__menu__main').css("display", "flex");
        }
        else
        {
            $('.nav__menu__main').removeClass('openDone');
            $('.nav__menu__main').css("display", "none");
        }
    });

    $(window).resize(function() 
    {     
        if ($(window).width() > 1024)
        {
            $('.nav__menu__main').removeAttr('style');
        }
    });

    // Slider options

    var $slideshow = $('.my__slider');
    var ImagePauses = [1000, 2000, 3000, 7000, 4000];

    // Init
    modifyDelay(0);

    // Sliding settings
    $slideshow.on('change', function(event, slick, currentSlide) {
        modifyDelay(currentSlide);
    });

    // Slider config
    function modifyDelay(startSlide) {
        $slideshow.slick({
            initialSlide: startSlide,
            autoplay: true,
            fade: false,
            dots: true
        });
    }

});
// Hide search icon
$('.nav__menu__search  input').focus(function(){
    $('#search').removeClass('icon-class');
});
$('.nav__menu__search  input').focusout(function(){
    $('#search').addClass('icon-class');
});


// Form validation
$('.form-btn').click(function(){
    var txt = document.getElementById('name').value;
    var mail = document.getElementById('email').value;
    var mass = document.getElementById('message').value;
    if(txt == '' || mail == '' || mess == '') {
        alert('You forgot to input text');
        return false;
    }   
    return true;
});

// Scroll menu
$(window).scroll(function(){

    $('#contact').each(function(){
        if($(this).offset().top-100 < $(window).scrollTop()){
            $('a[href="#contact"]').addClass('active').siblings().removeClass('active');
            $('a[href="#contact"]').addClass('active').siblings().removeClass('active');
        }
        else {
            $('a[href="#contact"]').removeClass('active');
        }
    });

}); 