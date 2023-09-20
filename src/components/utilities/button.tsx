import React from "react";
import { Link } from "react-router-dom";
interface buttonProps {
	text: string;
	extras?: string;
	to: string;
}

const Button = ({ text, to, extras }: buttonProps): React.ReactElement => {
	return (
		<Link
			to={to}
			className={`${extras} flex items-center justify-center pry-color text-white rounded capitalize text-sm py-[14px] px-[46px] lg:text-base lg:py-4 lg:px-[52px]`}
		>
			{text}
		</Link>
	);
};

export default Button;
