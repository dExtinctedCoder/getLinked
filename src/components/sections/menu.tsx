import React from "react";
import { Link } from "react-router-dom";
import Button from "../utilities/button";
import { useAppDispatch } from "../../store/hooks";
import { CLOSE_MENU, toggleMenu } from "../../store/app/app.actions";
import Close from "../utilities/closeBtn";

const Menu = (): React.ReactElement => {
	const dispatchMenuAction = useAppDispatch();

	return (
		<aside className="absolute top-4 right-4 left-4 z-20 pry-black py-5 px-8 pb-24 rounded-lg pry-black backdrop-blur-[30px] border-[0.5px] border-[#ffffffa] md:hidden">
			<div
				onClick={() => dispatchMenuAction(toggleMenu(CLOSE_MENU))}
				className="rounded-full w-fit m-auto mr-0 p-[3px]"
			>
				<Close />
			</div>
			<nav className="text-white pt-10 mb-7 flex flex-col gap-y-2 text-lg font-medium font-[Inter]">
				<Link className="w-fit" to="/timeline">
					Timeline
				</Link>
				<Link className="w-fit" to="/overview">
					Overview
				</Link>
				<Link className="w-fit" to="/faqs">
					FAQs
				</Link>
				<Link className="w-fit" to="/contact">
					Contact
				</Link>
			</nav>
			<Button text="register" to="/register" extras="w-fit" />
		</aside>
	);
};

export default Menu;
