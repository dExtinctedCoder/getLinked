import React, { useEffect } from "react";

interface overlayProps {
	children: React.ReactElement;
}
const Overlay = ({ children }: overlayProps): React.ReactElement => {
	const bodyElem = document.querySelector("body") as HTMLBodyElement;
	useEffect(() => {
		bodyElem.style.position = "fixed";
		bodyElem.style.height = "100vh";

		return () => {
			bodyElem.style.position = "static";
			bodyElem.style.height = "auto";
		};
	}, []);
	return (
		<div className="absolute inset-0 bg-[#150E28ED] w-screen h-screen z-30">
			{children}
		</div>
	);
};

export default Overlay;
