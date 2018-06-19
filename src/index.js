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
catcher.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.2) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, rgba(0,0,0,0) 75%, rgba(0,0,0,0) 0), linear-gradient(135deg, rgba(0,0,0,0.1) 0, rgba(0,0,0,0.1) 24%, rgba(0,0,0,0) 26%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, rgba(255,255,255,0) 75%, rgba(0,0,0,0) 100%)';
catcher.style.backgroundSize = '2rem 2rem';

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
