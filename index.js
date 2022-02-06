<script type="text/javascript">
$(function() {
    $.post('/Account/MainMenu',
        { isHomePage: false },
        function(data) {
            $('body .layout').prepend(data);
            menuModule.init();
            // set menu active item
            $('span.icon-game').parent('.topMenuItem').addClass('active');
        });
})
</script>