


$(document).ready(function(){
    
    /*****************************************************************/
    /***************************** WOW *******************************/
    /*****************************************************************/
            new WOW().init();
    
    
    /*****************************************************************/
    /*********************** STICKY NAV MENU *************************/
    /*****************************************************************/
       
         $(".js-navigation").sticky(
              {topSpacing:0,
              zIndex:999
         });
    
    /*****************************************************************/
    /*********************** MOBILE NAV MENU *************************/
    /*****************************************************************/

    
        $(".js-nav-icon").click(function(){
           $(this).toggleClass("change");
           $(".js-main-nav").slideToggle(500);
        });
    
        $(".js-menu").click(function(){
               if($(window).width() < 769){
                   $(".js-main-nav").slideUp(500);
                   $(".js-nav-icon").toggleClass("change");
                }
        });
    
    /************************************************************************/
    /**************************** SMOOTH SCROLL *****************************/
    /************************************************************************/
 
         $('a').smoothScroll({
             offset: -20,
             excludeWithin: ['.js_services'],
             speed: 1000
         });
        
 
    
    /*****************************************************************/
    /************* ACTIVE NAV MENU ON SCROLL AND ON CLICK ************/
    /*****************************************************************/
  
         var sections = $('section'),
                nav = $('nav'),
                nav_height = nav.outerHeight();

          $(window).on('scroll', function () {
              var cur_pos = $(this).scrollTop();

              sections.each(function() {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                  nav.find('a').removeClass('active');
                  sections.removeClass('active');

                  $(this).addClass('active');
                  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
                }
              });
          });
    
    
    
    /*************************************************************************/
    /**************************** SCROLL TO TOP ******************************/
    /*************************************************************************/
    
           //Check to see if the window is top if not then display button
           $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.js-scroll-to-top').fadeIn();
                } else {
                    $('.js-scroll-to-top').fadeOut();
                }
            });
            //Click event to scroll to top
            $('.js-scroll-to-top').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });

    
    
    
    /*************************************************************************/
    /**************************** SLICK CAROUSEL *****************************/
    /*************************************************************************/
         
         /** BackGround Slides **/
    
         $('.slides').slick({
             fade: true,
             slidesToShow: 1,
             autoplay:true,
             pauseOnHover:true,
             autoplaySpeed: 3000,
             speed: 1000,
             arrows: true,
             dots: true
      
         });
    
    
         /** Testimonials Slides **/
    
         $('.buildingSleekWebsitesSlides').slick({
             slidesToShow: 1,
             autoplay:true,
             pauseOnHover:true,
             autoplaySpeed: 5000,
             speed: 1000,
             arrows: false,
             dots: true
      
         });
    
    
    /***************************************************************************/
    /******************************* OPEN POPUP ********************************/
    /***************************************************************************/

    
    /***************************************************************************/
    /******************************* OPEN POPUP ********************************/
    /***************************************************************************/
            
               // Bind as an event handler
               $(document).on('click', '[data-lightbox]', lity);
   
    /*****************************************************************/
    /***************************** WOW *******************************/
    /*****************************************************************/
    
    
    /*
    
    
        $('.open-popup-link').magnificPopup({
            type:'inline',
            midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.  
            callbacks: {
                beforeOpen: function() {
                   this.st.mainClass = this.st.el.attr('data-effect');
                }
            }
            
        });
    
    
        /** Showcase Gallery **
    
        $('.showcaseGallery').magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
          // other options
          gallery:{
            enabled:true
          },
          zoom: {
            enabled: true, // By default it's false, so don't forget to enable it
            duration: 500, // duration of the effect, in milliseconds
            easing: 'ease-in-out' // CSS transition easing function
          }

            
        });
    
    */
    
    
    
    /*******************************************************************/
    /***************************** Typed *******************************/
    /*******************************************************************/
    
    $(function(){
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            loop: true,
            backDelay: 3000
        });
    });
    
});




