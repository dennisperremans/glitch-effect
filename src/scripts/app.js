var site = {
    settings: {
        debug: false
    },
    init: function(settings){
        $.extend(this.settings, settings);
    },

    cloneOneElement: function($element) {
        if(!$('.cloneOne').length) {
            var $thisX = $element.offset().left,
                $thisY = $element.offset().top,
                $cloneOne = $element.clone().addClass('clone cloneOne');

            $cloneOne.appendTo('body');
            $cloneOne.css({
                left: $thisX,
                top: $thisY
            });
        }
    },

    cloneTwoElement: function($element) {
        if(!$('.cloneTwo').length) {
            var $thisX = $element.offset().left,
                $thisY = $element.offset().top,
                $cloneTwo = $element.clone().addClass('clone cloneTwo');

            $cloneTwo.appendTo('body');
            $cloneTwo.css({
                left: $thisX,
                top: $thisY
            });
        }
    },
};

$(function(){
    site.init({
        debug: true
    });

    $(".glitch").hover(
        function(e){
            var $this = $(this),
                $innerText = $this.text(),
                $thisColor = $this.css('color'),
                $dataAttr = $this.attr('data-text'),
                $thisColor = $this.css('color'),
                $rndColor = 'rgb('+ (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ','+ (Math.floor(Math.random() * 256)) + ')';


            /* -----------------------
            | CLONE ELEMENTS
            ------------------------- */
            site.cloneOneElement($this);
            site.cloneTwoElement($this);


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
                $('.cloneOne, .cloneTwo').css('color', $thisColor);

                $('.cloneOne').css('text-shadow', '-2px 0 ' + $rndColor);
                $('.cloneTwo').css('text-shadow', '2px 0 ' + $rndColor);
            }
        },
        function(e){
            //remove cloned element onMouseLeave
            $('.clone').remove();
        }
    );
});
