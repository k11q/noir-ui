

export function trapFocus(element: HTMLElement) {
	event?.preventDefault()
	const focusableEls = element.querySelectorAll(
		'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
	);
	const firstFocusableEl = focusableEls[0] as HTMLElement;
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
