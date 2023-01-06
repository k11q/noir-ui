

export function trapFocus(element: HTMLElement) {
	if(element){
	event?.preventDefault()
	const focusableEls = [
		...element.querySelectorAll(
		  'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
		)
	  ].filter(
		el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
	  );
	const firstFocusableEl = focusableEls[0] as HTMLElement;
	console.log('trap-focused')
	const lastFocusableEl = focusableEls[focusableEls.length - 1] as HTMLElement;
	const KEYCODE_TAB = 9;

	if(firstFocusableEl){firstFocusableEl.focus();}

	element.addEventListener('keydown', function (e) {
		const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

		if (!isTabPressed) {
			return;
		}

		if (e.shiftKey) {
			/* shift + tab */ if (document.activeElement === firstFocusableEl) {
				lastFocusableEl.focus();
				e.preventDefault();
			}
		} /* tab */ else {
			if (document.activeElement === lastFocusableEl) {
				firstFocusableEl.focus();
				e.preventDefault();
			}
		}
	});
	return firstFocusableEl
}
}
