import React, { useEffect } from "react";
import Nav from "../components/sections/nav";
import Vector4 from "../assets/images/Vector4.png";
import Button from "../components/utilities/button";
import ManInVR from "../assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import BLAST from "../assets/images/1f4a5.png";
import CHAIN from "../assets/images/chain-9365116-7621444.png";
import BULB from "../assets/images/Creative1.png";
import GLOBE from "../assets/images/image-1.png";
import BLUR_PURPLE from "../assets/images/purple-lens-flare-png.png";
import { useAppDispatch } from "../store/hooks";
import { CLOSE_MENU, toggleMenu } from "../store/app/app.actions";

const HomePage = (): React.ReactElement => {
	const dispatchMenuAction = useAppDispatch();
	useEffect(() => {
		dispatchMenuAction(toggleMenu(CLOSE_MENU));
	}, []);

	return (
		<div className="pry-black text-white">
			<section
				aria-label="hero section"
				style={{
					backgroundImage: `url(${BLUR_PURPLE}), lightgray
				`,
				}}
				className="bg-blend-hard-light bg-no-repeat bg-[top_13%_left_-120px] bg-[length:100%] lg:bg-[length:50%] lg:bg-[top_left_100px]"
			>
				<Nav />
				<h5
					style={{
						backgroundImage: `url(${Vector4})`,
					}}
					className="whitespace-nowrap pt-8 bg-no-repeat bg-[bottom_2%_right_2%] bg-[length:35%] text-center w-fit m-auto text-base italic font-bold py-2 text-white lg:mr-14 lg:text-4xl lg:py-4 lg:bg-[bottom_1%_right_2%] lg:bg-[length:35%]"
				>
					Igniting a Revolution in HR Innovation
				</h5>
				<div className="flex flex-col justify-between gap-y-5 pt-10 lg:pl-16 lg:flex-row">
					<div className="z-10 flex flex-col items-center text-center lg:text-left lg:items-start">
						<h3
							style={{ backgroundImage: `url(${BULB})` }}
							className="whitespace-nowrap pt-4 bg-no-repeat bg-[top_13%_right_8%] bg-[length:18px] text-[32px] font-bold lg:pt-11 lg:leading-[1.25] lg:bg-[top_0%_right_6%] lg:bg-[length:53px] lg:text-[80px]"
						>
							getlinked Tech
						</h3>
						<div className="flex items-center">
							<h3 className="text-[32px] whitespace-nowrap font-bold mb-2 lg:leading-[1.25] lg:text-[80px]">
								Hackathon 1.0
							</h3>
							<img
								className="w-8 aspect-square lg:w-16"
								src={CHAIN}
								alt="purple chain"
							/>
							<img
								className="w-8 aspect-square lg:w-16"
								src={BLAST}
								alt="blast emoji"
							/>
						</div>
						<p className="max-w-[32ch] text-[13px] font-normal mb-6 md:text-xl md:mb-10">
							Participate in getlinked tech Hackathon 2023 stand a chance to win
							a Big prize
						</p>
						<Button
							text="register"
							to="/register"
							extras="mb-[14.16px] md:mb-[45.58px]"
						/>
						<div className="flex items-center gap-x-5 justify-between font-['Unica_One']">
							<h5 className="text-5xl font-normal lg:text-[64px]">
								00
								<span className="text-sm">H</span>
							</h5>
							<h5 className="text-5xl font-normal lg:text-[64px]">
								00
								<span className="text-sm">M</span>
							</h5>
							<h5 className="text-5xl font-normal lg:text-[64px]">
								00
								<span className="text-sm">S</span>
							</h5>
						</div>
					</div>
					<div className="relative min-h-full">
						<img
							src={ManInVR}
							alt="man-wearing-smart-glasses-touching-virtual-screen"
							className="h-full"
						/>
						<img
							src={GLOBE}
							alt="globe"
							className="absolute z-10 top-0 right-0 left-0 w-[80%] m-auto"
						/>
					</div>
				</div>
			</section>
			<hr className="border-0 h-[1px] bg-[#ffffff2d]" />
		</div>
	);
};

export default HomePage;
