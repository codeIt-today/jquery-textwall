(function($) {
    $.TextWall = function(el, options) {
        var self = this;

        self.$el = $(el);
        self.el = el;
        self.$el.data("TextWall", self);

        self.init = function() {
            self.options = $.extend({}, $.TextWall.defaults, options);
            self.generator(self.options);
        };

        self.generator = function(options) {
          var arr = options.texts;

          while (arr.length > 0) {
            var index = getRandInt(0, arr.length - 1);

            console.log('index', arr.length);
            var div = $('<div class="text"></div>').text(arr[index]);
            div.css('font-size', getRandNum(
              options.minFontSize, options.maxFontSize) + 'px');
            // div.css('left', getRandNum(0, self.$el.width()));
            // div.css('top', getRandNum(0, self.$el.height()));
            div.css('margin-left', getRandNum(50, 100));
            div.css('margin-right', getRandNum(50, 100));
            div.css('margin-top', getRandNum(-20, 0));
            div.css('margin-bottom', getRandNum(10, 25));
            div.css('transform', 'rotate(' + getRandNum(-10, 10) + 'deg)');

            self.$el.append(div);
            arr.splice(index, 1);
          }

          // options.texts.forEach(function(text) {
          // });
        }

        self.init();
    };

    $.TextWall.defaults = {
      minFontSize: 18,
      maxFontSize: 25,
      gap: 0.3,
      texts: [],
    };

    $.fn.textWall = function(options) {
        return this.each(function() {
            (new $.TextWall(this, options));
        });
    };

    $.fn.test = function(str) {
    };

    function getRandNum(min, max) {
      return Math.random() * (max - min) + min;
    }

    function getRandInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
})(jQuery);
