$(document).ready(function(){
  var inputTel = $('.js-phone');
  var item = $('.js-item');
  var modal = $('.js-modal');
  var buttonSubmit = $('.js-submit');
  var deviceHeight = $(window).height();
  var deviceWidth = $(window).width();

  if (deviceWidth <= 800) {
    $('body').css('height', deviceHeight * 2);
    $('.container').css('height', deviceHeight);
  }
  buttonSubmit.on('click', function(ev){
    ev.preventDefault();
    var selfInput = $(ev.currentTarget).parent().find('.js-phone');
    var isChcked = $($(ev.currentTarget).parent().find('.js-checkbox')).is(':checked');
    var isValidInput = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(selfInput.val());
    if (isChcked && isValidInput) {
      $(ev.currentTarget).parent().find('label').removeClass('error')
      selfInput.removeClass('form__input--error');
      console.log('go');
      $.ajax({
        url: '',
        method: 'post',
        data: {
          phone: selfInput.val()
        }
      })
      return;
    }

    if (!isValidInput && selfInput.val() === '') {
      selfInput.addClass('form__input--error');
    }

    if (!isChcked) {
      var label = $(ev.currentTarget).parent().find('label');
      if (label.hasClass('error')) {
        label.removeClass('error');
        label.addClass('error');
      }
      label.addClass('error');

      return;
    }
  })

  item.on('click', function() {
    modal.addClass('popup--show');
  })

  modal.on('click', function(ev) {
    if ($(ev.target).hasClass('js-modal')) {
      modal.removeClass('popup--show');
    }

    return;
  })

  //inputTel.on('focus', function() {
  //  //$('body').animate({
  //  //  scrollTop: '30px'
  //  //}, 1000)
  //  $('body').css({
  //    overflow: 'hidden'
  //  });
  //  //$('.out').css('height', deviceHeight);
  //})
  //
  //inputTel.on('blur', function() {
  //  $('body').css('overflow', 'visible');
  //  $('.out').css('height', '100%');
  //})

  inputTel.inputmask({
    alias: 'phone',
    allowDropdown: false
  })
})
