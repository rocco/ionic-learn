$(function() {
  var $container = $('.container');
  var $getIonic = $('.get-ionic-wrapper');
  var viewedCta = localStorage.getItem('viewedCta');


  function setGetIonicPosition() {
    $getIonic.css({
      left: $container.css('margin-left')
    });

  }

  setGetIonicPosition();

  $(window).on('resize', setGetIonicPosition);

  $('.expand').on('click', function() {
    if ($(this).hasClass('expanded')) {
      $('footer.main nav')
      .addClass('animated bounceOutLeft')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { $(this).removeClass('expanded'); });
      
    } else {
      $('footer.main nav').addClass('expanded animated bounceInLeft');
    }
    $(this, '.expand-wrapper .expand').toggleClass('expanded');
  });

  $('footer.main nav').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
    $(this).removeClass('animated bounceInLeft bounceOutLeft');
  });
  

  if (!viewedCta) {
    $('.get-ionic-wrapper').removeClass('viewed');
  }

  $(document).on('click', '.close-cta', function(e) {
    $('.get-ionic-wrapper').addClass('viewed');
    localStorage.setItem('viewedCta', true);
  });

  $(document).on('click', '.get-ionic', function(e) {
    localStorage.setItem('viewedCta', true);
    $('.get-ionic-wrapper').hide();
  });

  $('span.difficulty').tooltip({});
});
