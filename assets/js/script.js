$(document).ready(function () {
    $('.tablinks').on('click', function () {
        $('.tablinks').removeClass('tablinks-active');
        $(this).addClass('tablinks-active');

        var tabId = $(this).data('tab');
        $('.tabcontent').hide();
        $('#' + tabId).show();

        var backgroundImages = {
            'tab1': 'assets/img/1.png',
            'tab2': 'assets/img/2.png',
            'tab3': 'assets/img/3.png',
            'tab4': 'assets/img/4.png',
            'tab5': 'assets/img/5.png',
            'tab6': 'assets/img/6.png',
            'tab7': 'assets/img/7.png'
        };
        $('body').css('background-image', 'url("' + backgroundImages[tabId] + '")');
    });

    $('.tablinks:first').trigger('click');

    $('.next-tab').on('click', function() {
        var $currentTab = $('.tablinks-active');
        var $nextTab = $currentTab.next('.tablinks');

        if ($nextTab.length === 0) {
            $nextTab = $('.tablinks').first();
        }
        
        $('.tablinks-active').removeClass('tablinks-active');
        $nextTab.addClass('tablinks-active');

        var tabId = $nextTab.data('tab');
        $('.tabcontent').hide();
        $('#' + tabId).show();

        var backgroundImages = {
            'tab1': 'assets/img/1.png',
            'tab2': 'assets/img/2.png',
            'tab3': 'assets/img/3.png',
            'tab4': 'assets/img/4.png',
            'tab5': 'assets/img/5.png',
            'tab6': 'assets/img/6.png',
            'tab7': 'assets/img/7.png'
        };
        $('body').css('background-image', 'url("' + backgroundImages[tabId] + '")');

        $nextTab[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    $('.tabs__wrapper').on('click', '.next-tab', function() {
        var scrollLeftPos = $('.tabs__wrapper').scrollLeft();
        $('.tabs__wrapper').animate({
            scrollLeft: scrollLeftPos + 200
        }, 500);
    });
});
