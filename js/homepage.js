  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    $('#myModal').on('show.bs.modal', function (event) {
      var a = $(event.relatedTarget); // Button that triggered the modal
      var title = a.data('title'); // Extract info from data-* attributes
      var link = a.data('link');
      var content = a.data('content');
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this);
      modal.find('.modal-title').text(title);
      modal.find('.modal-body').text(content);
      $('#project-link').attr('href', link);
      //modal.find('.modal-body input').val(recipient)
    });

    $('.portfolio-box-caption').on('mouseenter', function(event) {
      //console.log($(this).css("opacity", 0.7));
      $(this).css("opacity", 0.7)

    });

    // $('.portfolio-box-caption').hover(function(event) {
    //   console.log("cc");
    //   $(event.target).css("opacity", 0.7);
    //   console.log("bb");
    // });

    $('.portfolio-box-caption').on('mouseleave', function(event) {
      //console.log($(this).css("opacity", 0));
      $(this).css("opacity", 0);
    });

    $(window).on("scroll", function() {
      var currentPos = $(window).scrollTop();
      $('.navbar-nav li a').add('.navbar-header a').each(function() {
        var sectionLink = $(this);
        var navHeight = $('#nav-wrapper').outerHeight() + 1;
        var section = $(sectionLink.attr('href'));

        if (section.position().top - navHeight - 400 <= currentPos && sectionLink.offset().top + section.height() > currentPos) {
          $('.navbar-nav li a').add('.navbar-header a').removeClass('current');
          sectionLink.addClass('current');
        } else {
          sectionLink.removeClass('current');
        }
      });
    })
});