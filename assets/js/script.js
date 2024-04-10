$(document).ready(function () {
    $('.tab').click(function () {
        var tabNumber = $(this).data('tab');

        $('.tab-content .content').removeClass('active');

        $('.tab-content .content[data-tab="' + tabNumber + '"]').addClass('active');

        $('.tabs .tab').removeClass('active');

        $(this).addClass('active');
    });

    $('.tab-content .content[data-tab="1"]').addClass('active');

    $('.tabs .tab[data-tab="1"]').addClass('active');
});
