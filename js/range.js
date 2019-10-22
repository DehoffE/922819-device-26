var range = document.querySelector('.range');
			var selected = range.querySelector('.selected');
			var thumbFirst = range.querySelectorAll('.thumb')[0];
			var thumbSecond = range.querySelectorAll('.thumb')[1];
			var startPrice = thumbFirst.querySelector('.range__price');
			var endPrice = thumbSecond.querySelector('.range__price');

			thumbFirst.onmousedown = function(e){
				window.onmousemove = function(e) {
					if (thumbFirst.style.marginRight === '') {
						thumbFirst.style.marginRight = '0px';
					}

					if (selected.style.marginLeft === '') {
						selected.style.marginLeft = '0px';
					}

					if (parseFloat(thumbFirst.style.marginRight) < 0) {
						thumbFirst.style.marginRight = '0px';
					}

					if (parseFloat(selected.style.marginLeft) + e.movementX < 0) {
						selected.style.marginLeft = '0px';
						return;
					}

					if ((parseFloat(thumbFirst.style.marginRight) + e.movementX + parseFloat(selected.style.marginLeft) + 20) > 180) {
						return;
					}

					thumbFirst.style.marginRight = (parseFloat(thumbFirst.style.marginRight) + (e.movementX * -1)) + 'px';
					selected.style.marginLeft = (parseFloat(selected.style.marginLeft) + e.movementX) + 'px';
					startPrice.textContent = 'от ' + ((parseFloat(selected.style.marginLeft) + e.movementX) * 25);
				};
			};

			thumbSecond.onmousedown = function(e){
				window.onmousemove = function(e) {
					if (thumbFirst.style.marginRight === '') {
						thumbFirst.style.marginRight = '0px';
					}

					if (selected.style.marginLeft === '') {
						selected.style.marginLeft = '0px';
					}

					if (parseFloat(thumbFirst.style.marginRight) < 0) {
						thumbFirst.style.marginRight = '0px';
					}

					if ((parseFloat(thumbFirst.style.marginRight) + e.movementX + parseFloat(selected.style.marginLeft) + 20) > 180) {
						return;
					}
					thumbFirst.style.marginRight = (parseFloat(thumbFirst.style.marginRight) + e.movementX) + 'px';
					endPrice.textContent = 'до ' + ((parseFloat(selected.style.marginLeft) + e.movementX + parseFloat(thumbFirst.style.marginRight)) * 31);
				};
			};

			window.onmouseup = function() {
				window.onmousemove = null;
			}