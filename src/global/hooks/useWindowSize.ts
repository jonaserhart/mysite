import { useLayoutEffect, useState } from 'react';

export interface Size {
  width: number;
  height: number;
}

export function useWindowSize() {
	const [size, setSize] = useState<Size>({ width: 0, height: 0 });
	useLayoutEffect(() => {
		function updateSize() {
			const newSize: Size = {
				width: window.innerWidth,
				height: window.innerHeight,
			};
			setSize(newSize);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}