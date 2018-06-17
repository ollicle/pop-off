const isFixed = function (el) {
  return window.getComputedStyle(el).getPropertyValue('position').toLowerCase() === 'fixed';
};

const catcher = document.createElement('div');

catcher.style.position = 'fixed';
catcher.style.top = '0';
catcher.style.left = '0';
catcher.style.bottom = '0';
catcher.style.right = '0';
catcher.style.zIndex = '2147483647';
catcher.style.cursor = 'crosshair';

catcher.addEventListener('click', function(e){
	e.stopPropagation();
	
	const yPos = e.pageY - document.documentElement.scrollTop;
	const clicked = document.elementsFromPoint(e.pageX, yPos);
	const fixed = clicked.slice(1, -1).find(isFixed);

	if (fixed) {
		fixed.parentNode.removeChild(fixed);
	} else {
		catcher.parentNode.removeChild(catcher);
	}
});

document.body.appendChild(catcher);
