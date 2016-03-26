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

    $(".glitch").hover(
        function(e){
            var $this = $(this),
                $innerText = $this.text(),
                $thisColor = $this.css('color'),
                $dataColor = $thisColor,
                $dataBg = $this.data('bg'),
                $dataAttr = $this.attr('data-text'),
                $thisOffset = $this.offset(),
                $thisX = $thisOffset.left,
                $thisY = $thisOffset.top,
                $thisColor = $this.css('color'),
                $rndColor = 'rgb('+ (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ','+ (Math.floor(Math.random() * 256)) + ')';


            /* -----------------------
            | CLONE THIS
            ------------------------- */
            // clone element 1 and position it
            if(!$('.cloneOne').length) {
                var $cloneOne = $this.clone().addClass('clone cloneOne');
                $cloneOne.appendTo('body');
                $cloneOne.css({
                    left: $thisX,
                    top: $thisY
                });
            }
    
            // clone element 2 and position it
            if(!$('.cloneTwo').length) {
                var $cloneTwo = $this.clone().addClass('clone cloneTwo');
                $cloneTwo.appendTo('body');
                $cloneTwo.css({
                    left: $thisX,
                    top: $thisY
                });
            }


            /* -----------------------
            | SET THE DATA ATTRIBUTES
            ------------------------- */
            // copy text into data-color
            if ( $this.not('[data-color]') ) {
                $this.attr('data-color', $dataColor);
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
                $('.cloneOne, .cloneTwo').css('color', $dataColor);

                $('.cloneOne').css('text-shadow', '-2px 0 ' + $rndColor);
                $('.cloneTwo').css('text-shadow', '2px 0 ' + $rndColor);
            }
        },
        function(e){
            //remove cloned element onMouseLeave
            $('.cloneOne').remove();
            $('.cloneTwo').remove();
        }
    );
});
