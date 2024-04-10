$(document).ready(function () {
    $('.tablinks').on('click', function () {
        var tabId = $(this).data('tab');
        $('.tabcontent').hide();
        $('#' + tabId).show();

        // Изменение фона сайта при переключении табов
        var backgroundImages = {
            'tab1': './assets/img/1.png',
            'tab2': './assets/img/2.png',
            'tab3': './assets/img/3.png',
            'tab4': './assets/img/4.png',
            'tab5': './assets/img/5.png',
            'tab6': './assets/img/6.png',
            'tab7': './assets/img/7.png'
        };
        $('body').css('background-image', 'url("' + backgroundImages[tabId] + '")');
    });

    // По умолчанию показываем первый таб и его содержимое
    $('.tablinks:first').trigger('click');
});
