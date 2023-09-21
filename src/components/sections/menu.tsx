import React from "react";
import { Link } from "react-router-dom";
import Button from "../utilities/button";
import CLOSE from "../../assets/icons/Vector4.svg";
import { useAppDispatch } from "../../store/hooks";
import { CLOSE_MENU, toggleMenu } from "../../store/app/app.actions";

const Menu = (): React.ReactElement => {
	const dispatchMenuAction = useAppDispatch();

	return (
		<aside className="absolute top-4 right-4 left-4 z-20 pry-black py-5 px-8 pb-24 rounded-lg pry-black backdrop-blur-[30px] border-[0.5px] border-[#ffffffa] md:hidden">
			<div
				onClick={() => dispatchMenuAction(toggleMenu(CLOSE_MENU))}
				className="rounded-full w-fit m-auto mr-0 p-[3px] border border-[#903AFF]"
			>
				<img className="cursor-pointer" src={CLOSE} alt="close-menu-button" />
			</div>
			<nav className="text-white pt-10 mb-7 flex flex-col gap-y-2 text-lg font-medium font-[Inter]">
				<Link to="/timeline">Timeline</Link>
				<Link to="/overview">Overview</Link>
				<Link to="/faqs">FAQs</Link>
				<Link to="/contact">Contact</Link>
			</nav>
			<Button text="register" to="/register" extras="w-fit" />
		</aside>
	);
};

export default Menu;
