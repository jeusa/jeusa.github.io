

$(window).on("load", function() {
    setTimeout(function(){
        drawBackground();
    }, 100);

    setActiveNav();
});

$(window).on('hashchange', function() {
    setActiveNav(); 
});

function setActiveNav() {
    const pathHash = window.location.hash;
    const navLinks = $('.nav-link');
    
    navLinks.each(function() {
        const link = $(this);
        if (link.attr('href') === pathHash) {
            link.addClass('active');
        } else {
            link.removeClass('active');
        }
    });
}