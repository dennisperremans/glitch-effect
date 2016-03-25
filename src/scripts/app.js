var site = {
    settings: {
        debug: false
    },
    init: function(settings){
        $.extend(this.settings, settings);
    },
};

$(function(){
    site.init({
        debug: true
    });

    $('.glitch').mouseover(function(){
        var $this = $(this),
            $innerText = $this.text(),
            $dataColor = $this.data('color'),
            $dataBg = $this.data('bg'),
            $dataAttr = $this.attr('data-text');

        if ( $this.not('[data-text]') ) {
            $this.attr('data-text', $innerText);
        }
    });

    /* ------------------------------
        Fire functions on resize
    ------------------------------- */
    $( window ).resize(function() {

    });
});
