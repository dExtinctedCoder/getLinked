import React from "react";

interface sectionProps {
	label: string;
	textBox: React.ReactElement;
	src: string;
	alt?: string;
	extras?: string;
	misc?: React.ReactElement;
	id?: string;
}

const Section = ({
	textBox,
	label,
	extras,
	src,
	alt,
	misc,
	id,
}: sectionProps): React.ReactElement => {
	return (
		<section
			aria-label={label}
			id={id}
			className={`relative lg:overflow-auto overflow-hidden py-8 px-[42px] flex flex-col items-center gap-y-4 pb-8 lg:py-10 lg:px-16 lg:flex-row lg:gap-x-24 ${extras}`}
		>
			<img
				src={src}
				alt={alt !== "" ? alt : "alt text"}
				className="z-10 lg:w-1/2"
			/>
			{textBox}
			{misc}
		</section>
	);
};

export default Section;
