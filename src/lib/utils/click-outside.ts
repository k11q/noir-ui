export function useClickOutside(e: MouseEvent, element: HTMLElement) {
	const elementRect = element.getBoundingClientRect();

	if (
		e.clientX > elementRect.left &&
		e.clientX < elementRect.right &&
		e.clientY > elementRect.top &&
		e.clientY < elementRect.bottom
	) {
		return false;
	} else {
		e.preventDefault();
		e.stopPropagation();
		return true;
	}
}
