
    $(window).on('load', function() {
        // Function to remove the preloader
        function removePreloader() {
            $('.preLoader').fadeOut(500, function() {
                $(this).remove(); // Remove the preLoader element from the DOM after fading out
            });
        }
        setTimeout(removePreloader, 500); // Delay to simulate loader effect
    });

