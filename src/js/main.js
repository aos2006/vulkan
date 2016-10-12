$(document).ready(function(){
  var inputTel = $('.js-phone');
  var item = $('.js-item');
  var modal = $('.js-modal');
  var buttonSubmit = $('.js-submit');
  var deviceHeight = $(window).height();

  buttonSubmit.on('click', function(ev){
    ev.preventDefault();
    var selfInput = $(ev.currentTarget).parent().find('.js-phone');
    var isChcked = $($(ev.currentTarget).parent().find('.js-checkbox')).is(':checked');
    var isValidInput = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(selfInput.val());
    if (isChcked && isValidInput) {
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
      console.log('not valid');
      selfInput.addClass('form__input--error');
    }

    if (!isChcked) {
      console.log('not checked');
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

  inputTel.on('focus', function() {
    $('.out').css('height', deviceHeight);
  })

  inputTel.on('blur', function() {
    $('.out').css('height', '100%');
  })

  inputTel.inputmask({
    alias: 'phone',
    allowDropdown: false
  })
})
