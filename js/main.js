let allMoney = 0;

$(document).ready(function () {

  // Header prodact show start
  $('.menu-category-close-btn').click(function () {
    $('#menu-category').removeClass('menu-category-active');
  })

  
  $('.card-item').click(function () {
    $('#menu-category-bg').click();
  })

  $('.mobile-meu-category-playstation').click(function () {

    $('#menu-category .container').each(function (i, obj) {
      if (!$(obj).hasClass('d-none')) {
        $('#menu-category .container').addClass('d-none');
      }
    })

    $('#menu-category').addClass('menu-category-active');

    $('#menu-category .playstation-menu-category').removeClass('d-none');

  })

  $('.mobile-meu-category-xbox').click(function () {

    $('#menu-category .container').each(function (i, obj) {
      if (!$(obj).hasClass('d-none')) {
        $('#menu-category .container').addClass('d-none');
      }
    })

    $('#menu-category').addClass('menu-category-active');

    $('#menu-category .xbox-menu-category').removeClass('d-none');

  })

  $('.mobile-meu-category-steam').click(function () {

    $('#menu-category .container').each(function (i, obj) {
      if (!$(obj).hasClass('d-none')) {
        $('#menu-category .container').addClass('d-none');
      }
    })

    $('#menu-category').addClass('menu-category-active');

    $('#menu-category .steam-menu-category').removeClass('d-none');

  })

  $('.mobile-meu-category-nintendo').click(function () {

    $('#menu-category .container').each(function (i, obj) {
      if (!$(obj).hasClass('d-none')) {
        $('#menu-category .container').addClass('d-none');
      }
    })

    $('#menu-category').addClass('menu-category-active');

    $('#menu-category .nintendo-menu-category').removeClass('d-none');

  })

  $('.mobile-meu-category-itunes').click(function () {

    $('#menu-category .container').each(function (i, obj) {
      if (!$(obj).hasClass('d-none')) {
        $('#menu-category .container').addClass('d-none');
      }
    })

    $('#menu-category').addClass('menu-category-active');

    $('#menu-category .itunes-menu-category').removeClass('d-none');

  })

  $('.mobile-meu-category-other').click(function () {

    $('#menu-category .container').each(function (i, obj) {
      if (!$(obj).hasClass('d-none')) {
        $('#menu-category .container').addClass('d-none');
      }
    })

    $('#menu-category').addClass('menu-category-active');

    $('#menu-category .other-menu-category').removeClass('d-none');

  })

  $('#menu-category-bg').click(function () {
    $('#menu-category').removeClass('menu-category-active');
  })
  // Header prodact show end

  $(".box").click(function () {
    $(".box").removeClass("box-active");
    $(this).addClass("box-active");
  });

  // Burger click start
  $('.burger').click(function () {

    if ($('.mobile-menu').hasClass('mobile-menu-active')) {
      $('.header').removeClass('bg-white');

      $('header').removeClass('position-fixed top-0')
      $('.header-logo-img').attr('src', './images/logo-header.png');
      $('.drop-down-index img').attr('src', './images/dropdown-img.png')
    }
    else {
      $('.header').addClass('bg-white');
      $('header').addClass('position-fixed top-0')
      $('.header-logo-img').attr('src', './images/header_logo.jpg');
      $('.drop-down-index img').attr('src', './images/select-img.jpg')
    }

    if ($('#shop-modal .shop-content').hasClass('active-modal')) {
      $('#shop-modal .shop-content').removeClass('active-modal')
    }

    $('.mobile-menu').toggleClass('mobile-menu-active');
    $('.burger-menu-button img').toggleClass('d-none');
    $('.lang-menu').removeClass('lang_menu_active');
  })
  // Burger click end
  $('.lang-button').click(function () {

    if ($('.lang-menu').hasClass('lang_menu_active')) {
      $('.header').removeClass('bg-white');
      $('.header-logo-img').attr('src', './images/logo-header.png');
      $('.drop-down-index img').attr('src', './images/dropdown-img.png')
    }
    else {
      $('.header').addClass('bg-white');
      $('.header-logo-img').attr('src', './images/header_logo.jpg');
      $('.drop-down-index img').attr('src', './images/select-img.jpg')
    }

    $('.lang-menu').toggleClass('lang_menu_active');
    $('#shop-modal .shop-content').removeClass('active-modal');
    $('.mobile_menu').removeClass('mobile_menu_active');
    $(".drop-down-item-header").addClass("d-none");

  })
  
  // product click start
  $(".drop-down").click(function () {

    $(".drop-down-item-header").toggleClass("d-none");
    $('.header').removeClass('bg-white');
    $('.header-logo-img').attr('src', './images/logo-header.png');
    $('.drop-down-index img').attr('src', './images/dropdown-img.png')
    $('.lang-menu').removeClass('lang_menu_active');

    if ($('#shop-modal .shop-content').hasClass('active-modal')) {
      $('#shop-modal .shop-content').removeClass('active-modal')
    }

  });
  // prodact click end

  // Header basket calculate start
  $('.money').each(function (i, obj) {
    allMoney += Number(obj.innerText);
  })

  $('.euro').text(allMoney + "€");

  $('.plus').click(function () {
    allMoney += 4.99;
    allMoney = Number(parseFloat(allMoney.toString()).toFixed(2));
    $('.euro').text(allMoney + "€")
  })

  $('.minus').click(function () {
    if (allMoney >= 4.99) {
      allMoney -= 4.99;
      allMoney = Number(parseFloat(allMoney.toString()).toFixed(2));
      $('.euro').text(allMoney + "€")
    }
  })

  $('#basket').click(function () {

    $('.header').removeClass('position-fixed top-0');
    $('header').removeClass('position-fixed top-0');

    if ($('#shop-modal .shop-content').hasClass('active-modal')) {
      $('.header').removeClass('bg-white')
      $('.header-logo-img').attr('src', './images/logo-header.png');
      $('.drop-down-index img').attr('src', './images/dropdown-img.png')
    }
    else {
      $('.header').addClass('bg-white');
      $('.header-logo-img').attr('src', './images/header_logo.jpg');
      $('.drop-down-index img').attr('src', './images/select-img.jpg')
    }

    if ($('.mobile-menu').hasClass('mobile-menu-active')) {
      $('.mobile-menu').removeClass('mobile-menu-active');
      $('.exit').removeClass('d-none');
      $('.exit').addClass('d-none');
      $('.burger-stick').removeClass('d-none');
    }

    $('#shop-modal .shop-content').toggleClass('active-modal');
    $('.lang-menu').removeClass('lang_menu_active');
    $(".drop-down-item-header").addClass("d-none");
  })

  // Header basket calculate start

  // lang start 
  $('.lang-item').click(function () {
    $('.lang-item').removeClass('active');
    $(this).addClass('active')
    $('.lang').attr('src', $(this).attr('data-src'))
  })
  // lang end

  // Make order form send start
  $("#send").click(function (event) {
    event.preventDefault();
  })
  // Make order form send end

  // Select category start
  $('.category_item').click(function () {
    const value = $(this).attr('data-filter');

    $('.flag').each(function (i, obj) {
      if (!$(obj).hasClass('d-none')) {

        if (!$(obj).hasClass(value)) {
          $(obj).addClass('d-none')
        }
      }
    })

    // $('.category').each(function (i, obj) {

    // })

    $('.category_item').each(function (i, obj) {
      if ($(obj).hasClass('active')) {
        if (!$(obj).hasClass(value + '1')) {
          $(obj).removeClass('active');
        }
      }
    })

    $('.' + value).toggleClass('d-none');
    $(this).toggleClass('active');


  })
  // Select category end

  // Select category start
  $('.flag-header .flag_item').click( function () {
    $('.flag-header').addClass('d-none');
    $('.drop-down').click();
  })

  $('.category_link-header-playstation').click(function () {

    $('.flag-header').each(function (i, obj) {
      if(!$(obj).hasClass('d-none')){
        $('.flag-header').addClass('d-none')
      }
    })

    $('.flag-playstation-header').toggleClass('d-none');

  })

  $('.category_link-header-xbox').click(function () {

    $('.flag-header').each(function (i, obj) {
      if(!$(obj).hasClass('d-none')){
        $('.flag-header').addClass('d-none')
      }
    })

    $('.flag-xbox-header').toggleClass('d-none');

  })

  $('.category_link-header-steam').click(function () {

    $('.flag-header').each(function (i, obj) {
      if(!$(obj).hasClass('d-none')){
        $('.flag-header').addClass('d-none')
      }
    })

    $('.flag-steam-header').toggleClass('d-none');

  })

  $('.category_link-header-nintendo').click(function () {

    $('.flag-header').each(function (i, obj) {
      if(!$(obj).hasClass('d-none')){
        $('.flag-header').addClass('d-none')
      }
    })

    $('.flag-nintendo-header').toggleClass('d-none');

  })

  $('.category_link-header-itunes').click(function () {

    $('.flag-header').each(function (i, obj) {
      if(!$(obj).hasClass('d-none')){
        $('.flag-header').addClass('d-none')
      }
    })

    $('.flag-itunes-header').toggleClass('d-none');

  })

  $('.category_link-header-other').click(function () {

    $('.flag-header').each(function (i, obj) {
      if(!$(obj).hasClass('d-none')){
        $('.flag-header').addClass('d-none')
      }
    })

    $('.flag-other-header').toggleClass('d-none');

  })
  // Select category end


  // Select price start

  $('.change-container').click(function () {
    $('.change-price').addClass('change-price-active');
  })

  $('.change-price-btn').click(function () {
    $('.change-price').removeClass('change-price-active');
  })

  $('.hovered').click(function () {
    $('.change-price').removeClass('change-price-active');
  })


  // Select price end

})