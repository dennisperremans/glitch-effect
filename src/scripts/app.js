var site = {
    settings: {
        debug: false
    },
    init: function(settings){
        $.extend(this.settings, settings);
    },

    cloneElement: function($element) {
        var elements = ['One', 'Two', 'Three', 'Four'];

        $.each(elements, function(index, value) {
            if(!$('.clone' + value).length) {
                var $thisX = $element.offset().left,
                    $thisY = $element.offset().top,
                    $clonedElement = $element.clone().addClass('clone clone' + value);

                $clonedElement.appendTo('body');
                $clonedElement.css({
                    left: $thisX,
                    top: $thisY
                });
            }
        });
    },
};

$(function(){
    site.init({
        debug: true
    });

    $(".glitch").hover(
        function(){
            var $this = $(this),
                $innerText = $this.text(),
                $thisColor = $this.css('color'),
                $rndColor = 'rgb('+ (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ','+ (Math.floor(Math.random() * 256)) + ')';


            /* -----------------------
            | CLONE ELEMENTS
            ------------------------- */
            site.cloneElement($this);

            /* -----------------------
            | SET THE DATA ATTRIBUTES
            ------------------------- */

            // copy text into data-color
            if ( $this.not('[data-color]') ) {
                $this.attr('data-color', $thisColor);
            }

            // copy text into data-text
            if ( $this.not('[data-text]') ) {
                $this.attr('data-text', $innerText);
            }

            /* -----------------------
            | SET THE COLORS
            ------------------------- */

            //set the color on the cloned elements
            if ($this.attr('data-color')) {
                $('.clone').css('color', $thisColor);

                $('.clone:nth-child(odd)').css('text-shadow', '-2px 0 ' + $rndColor);
                $('.clone:nth-child(even)').css('text-shadow', '2px 0 ' + $rndColor);
            }
        },
        function(){
            //remove cloned element onMouseLeave
            $('.clone').remove();
        }
    );
});
