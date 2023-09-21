import React from "react";
import Button from "../utilities/button";
import LOGO from "../../assets/images/getlinked.png";
import MENU from "../../assets/icons/Vector (3).svg";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { OPEN_MENU, toggleMenu } from "../../store/app/app.actions";
import Menu from "./menu";

const Nav = (): React.ReactElement => {
	const menuState = useAppSelector((state) => state.appReducer.menuState);
	const dispatchMenuAction = useAppDispatch();

	return (
		<header className="relative flex py-7 px-6 items-center justify-between border-b border-b-[#ffffff2d] lg:py-[31.5px] lg:px-16">
			<Link to="/" className="block w-[72px] lg:w-[171px]">
				<img src={LOGO} alt="get-linked.png" />
			</Link>
			<div
				onClick={() => dispatchMenuAction(toggleMenu(OPEN_MENU))}
				className="cursor-pointer md:hidden"
			>
				<img src={MENU} alt="menu button" />
			</div>
			<nav className="hidden items-center justify-between gap-x-9 md:flex lg:gap-x-14">
				<NavLink to="/#timeline" className="font-normal text-base text-white">
					Timeline
				</NavLink>
				<NavLink to="/#overview" className="font-normal text-base text-white">
					Overview
				</NavLink>
				<NavLink to="/#faqs" className="font-normal text-base text-white">
					FAQs
				</NavLink>
				<NavLink to="/contact" className="font-normal text-base text-white">
					Contact
				</NavLink>
			</nav>
			<Button to="/register" text="register" extras="hidden md:flex" />
			{menuState ? <Menu /> : ""}
		</header>
	);
};

export default Nav;
