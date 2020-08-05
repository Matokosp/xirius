var md = window.matchMedia( "(min-width: 1000px)" );

  if (md.matches) {

		var i = null;

    $(document).on('mousemove', function(e) {

			var x = e.clientX;
			var y = e.clientY;

      $('#cursor').css({
        left: e.clientX,
        top: e.clientY,
      });

			$("#cursorRound").show();
			$('#cursorRound').css({
				opacity: '1',
        left: e.clientX - 8,
        top: e.clientY - 8,
				width: '20px',
				height: '20px'
      });

			// i = setTimeout('$("#cursorRound").css({width:"0",height:"0",opacity: "0"});', 1000);

    }).mouseleave(function() {
				clearTimeout(i);
		});
    }
