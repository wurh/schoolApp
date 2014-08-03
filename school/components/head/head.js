exports.initSidebar = function () {
    initSidebar();
};

// ready event
initSidebar = function () {
    $('.launch').on('click', function () {
        $(this)
            .toggleClass('active')
            .siblings()
            .removeClass('active');
        $('.sidebar')
            .show()
            .sidebar('toggle');
        });

    $('.hide').on('click',function(){
        $('.sidebar').hide()
            .sidebar('toggle');
        $('.launch').siblings()
            .removeClass('active');
    });
};