import React from "react";
import { NavLink as Link } from "react-router-dom";
interface buttonProps {
	text: string;
	extras?: string;
	to?: string;
	isNavBtn?: boolean;
}

const Button = ({
	text,
	to,
	extras,
	isNavBtn,
}: buttonProps): React.ReactElement => {
	return (
		<Link
			to={to ?? ""}
			style={({ isActive }) => {
				return {
					background:
						isActive && (isNavBtn ?? false)
							? "linear-gradient(#150e28, #150e28) padding-box, linear-gradient(270deg, #903aff 0%, #fe34b9 100%) border-box"
							: "",
					border:
						isActive && (isNavBtn ?? false) ? "2px solid transparent" : "",
				};
			}}
			className={`${extras} flex items-center justify-center pry-color text-white rounded capitalize text-sm py-[14px] px-[46px] lg:text-base lg:py-4 lg:px-[52px]`}
		>
			{text}
		</Link>
	);
};

export default Button;

export const FormButton = ({
	text,
	extras,
}: buttonProps): React.ReactElement => {
	return (
		<button
			type="submit"
			className={`${extras} flex items-center justify-center pry-color text-white rounded capitalize text-sm py-[14px] px-[46px] lg:text-base lg:py-4 lg:px-[52px]`}
		>
			{text}
		</button>
	);
};
