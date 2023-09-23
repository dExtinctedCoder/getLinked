import React from "react";
import STAR_PURPLE from "../../assets/images/sata-gra.png";

interface modalProps {
	children: React.ReactElement;
}
const Modal = ({ children }: modalProps): React.ReactElement => {
	return (
		<section className="w-fit absolute inset-16 px-8 py-7 flex flex-col items-center justify-center m-auto rounded-md border border-[#D434FE] bg-[#ffffff2] lg:inset-4">
			{children}
			<img
				src={STAR_PURPLE}
				alt="purple-star"
				className="absolute -top-4 -right-4"
			/>
			<img
				src={STAR_PURPLE}
				alt="purple-star"
				className="absolute -bottom-8 right-8"
			/>
		</section>
	);
};

export default Modal;
