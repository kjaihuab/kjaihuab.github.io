window.onload = function(){
	var elems = document.getElementsByName("box");
	
	for (var i in elems) {
		elems[i].addEventListener('mouseover', function(){
			this.classList.remove('out');
			this.classList.add('hover');
		});

		elems[i].addEventListener('mouseout', function(){
			this.classList.remove('hover');
			this.classList.add('out');
		});
	}
}