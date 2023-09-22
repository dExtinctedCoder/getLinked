import React, { useEffect } from "react";
import Nav from "../components/sections/nav";
import Vector4 from "../assets/images/Vector4.png";
import Button from "../components/utilities/button";
import ManInVR from "../assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import BLAST from "../assets/images/1f4a5.png";
import CHAIN from "../assets/images/chain-9365116-7621444.png";
import BULB from "../assets/images/Creative1.png";
import GLOBE from "../assets/images/image-1.png";
import PURPLELENS1 from "../assets/images/purple-lens-flare-png.png";
import PURPLELENS2 from "../assets/images/purple-lens-flare-png-2.png";
import STAR from "../assets/images/star.png";
import STAR_PURPLE from "../assets/images/sata-gra.png";
import STARGray from "../assets/images/stargray.png";
import BigIdea from "../assets/images/thebigIdea1.png";
import WOMAN from "../assets/images/7450159 1.png";
import ARROW from "../assets/images/arrow.png";
import ELLIPSE from "../assets/images/Ellipse 2.png";
import ManAndWoman from "../assets/images/8046554 1.png";
import { useAppDispatch } from "../store/hooks";
import { CLOSE_MENU, toggleMenu } from "../store/app/app.actions";
import Section from "../components/sections/landingPageSection";

const HomePage = (): React.ReactElement => {
	const dispatchMenuAction = useAppDispatch();
	useEffect(() => {
		dispatchMenuAction(toggleMenu(CLOSE_MENU));
	}, []);

	return (
		<div className="pry-black text-white">
			<section
				aria-label="hero section"
				className="relative bg-blend-hard-light bg-no-repeat bg-[top_13%_left_-120px] bg-[length:100%] lg:bg-[length:50%] lg:bg-[top_left_100px]"
			>
				<Nav />
				<img
					src={PURPLELENS1}
					alt="purple-lens-flare-png.png"
					className="absolute -left-[20%] bg-blend-hard-light top-[15%] inset-0 lg:w-1/2 lg:left-[6%]"
				/>
				<img
					src={STAR}
					alt="star.png"
					className="w-3 top-[18%] left-[35%] absolute lg:w-fit lg:left-[8%] lg:top-[20%]"
				/>
				<img
					src={STARGray}
					alt="star-gray.png"
					className="w-2 top-[41%] right-[28%] absolute lg:w-fit lg:left-[30%] lg:inset-auto lg:bottom-[20%]"
				/>
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
							className="z-10 h-full"
						/>
						<img
							src={GLOBE}
							alt="globe"
							className="absolute z-20 top-0 right-0 left-0 w-4/5 m-auto"
						/>
						<img
							src={PURPLELENS2}
							alt="purple-lens-flare-png.png"
							className="absolute bg-blend-hard-light inset-0 h-full -top-[20%] left-[10%] m-auto w-fit -rotate-90"
						/>
					</div>
				</div>
			</section>
			<hr className="border-0 h-[1px] bg-[#ffffff2d]" />
			<Section
				label="introduction-section"
				src={BigIdea}
				alt="the-big-idea-illustration"
				extras="gap-y-12"
				misc={
					<>
						<img
							src={STAR_PURPLE}
							alt="star.png"
							className="absolute left-[8%] top-[18%] lg:w-[20px] lg:top-[32%] lg:left-[6%]"
						/>
						<img
							src={STAR_PURPLE}
							alt="star.png"
							className="absolute right-[12%] top-[67%] w-[10px] lg:w-[15px] lg:top-[33%] lg:right-[6%]"
						/>
						<img
							src={ARROW}
							alt="arrow.png"
							className="absolute top-[58%] m-auto lg:bottom-[5%] lg:w-[50px] lg:left-[47%] lg:m-0 lg:top-auto"
						/>
					</>
				}
				textBox={
					<div className="px-4 lg:px-0 lg:w-1/2">
						<h4 className="font-['Clash_Display'] text-center text-xl font-bold lg:text-[32px] lg:mb-2 lg:text-left">
							Introduction to getlinked
						</h4>
						<h4 className="font-['Clash_Display'] text-center text-xl font-bold pb-2 text-[#D434FE] lg:text-[32px] lg:mb-4 lg:text-left">
							tech Hackathon 1.0
						</h4>
						<p className="text-[13px] text-center leading-[27.5px] lg:text-sm lg:text-left">
							Our tech hackathon is a melting pot of visionaries, and its
							purpose is as clear as day: to shape the future. Whether
							you&apos;re a coding genius, a design maverick, or a concept
							wizard, you&apos;ll have the chance to transform your ideas into
							reality. Solving real-world problems, pushing the boundaries of
							technology, and creating solutions that can change the world,
							that&apos;s what we&apos;re all about!
						</p>
					</div>
				}
			/>
			<hr className="border-0 h-[1px] bg-[#ffffff2d]" />
			<Section
				label="rules-and-guidelines-section"
				src={WOMAN}
				alt="woman-sitting-and-reading"
				extras="lg:flex-row-reverse"
				misc={
					<>
						<img
							src={STARGray}
							alt="star.png"
							className="absolute w-3 left-[10%] top-[31%] lg:w-[20px] lg:top-[12%] lg:left-[23%]"
						/>
						<img
							src={STAR}
							alt="star.png"
							className="absolute right-[9%] top-[67%] w-[10px] lg:w-[15px] lg:top-[33%] lg:right-[6%] lg:hidden"
						/>
						<img
							src={STAR}
							alt="star.png"
							className="absolute w-3 bottom-[4%] left-[20%] lg:w-fit lg:left-[47%] lg:bottom-[28%]"
						/>
						<img
							src={ELLIPSE}
							alt="ellipse.png"
							className="hidden lg:block absolute top-[19%] right-[13.5%]"
						/>
						<img
							src={PURPLELENS1}
							alt=""
							className="absolute -top-[3%] -left-[33%] lg:inset-0 lg:w-1/2"
						/>
						{/* <img
							src={PURPLELENS1}
							alt=""
							className="absolute top-[50%] -right-[60%] lg:inset-0 lg:w-1/2 lg:-right-[50%]"
						/> */}
					</>
				}
				textBox={
					<div className="px-4 lg:px-0 lg:w-1/2">
						<h4 className="font-['Clash_Display'] text-center text-xl font-bold lg:text-[32px] lg:mb-2 lg:text-left">
							Rules and
						</h4>
						<h4 className="font-['Clash_Display'] text-center text-xl font-bold mb-2 text-[#D434FE] lg:text-[32px] lg:mb-4 lg:text-left">
							Guidelines
						</h4>
						<p className="text-[13px] text-center leading-[27.5px] lg:text-sm lg:text-left">
							Our tech hackathon is a melting pot of visionaries, and its
							purpose is as clear as day: to shape the future. Whether
							you&apos;re a coding genius, a design maverick, or a concept
							wizard, you&apos;ll have the chance to transform your ideas into
							reality. Solving real-world problems, pushing the boundaries of
							technology, and creating solutions that can change the world,
							that&apos;s what we&apos;re all about!
						</p>
					</div>
				}
			/>
			<hr className="border-0 h-[1px] bg-[#ffffff2d]" />
			<Section
				label="judging-and-criteria-section"
				src={ManAndWoman}
				alt="man-and-woman-working"
				extras="pb-16 lg:pb-24"
				misc={
					<>
						<img
							src={STAR_PURPLE}
							alt="star.png"
							className="absolute left-[43%] top-[2%] lg:left-[15%]"
						/>
						<img
							src={STARGray}
							alt="star.png"
							className="absolute top-[20%] right-[45%] w-3 lg:right-[67%] lg:top-[46%]"
						/>
						<img
							src={STAR}
							alt="star.png"
							className="absolute right-[12%] bottom-[9%] w-[10px] lg:top-[80%] lg:right-[50%]"
						/>
						<img
							src={ELLIPSE}
							alt="ellipse.png"
							className="hidden absolute lg:block top-[7%] left-[10.5%]"
						/>
					</>
				}
				textBox={
					<div className="px-4 lg:px-0 lg:w-1/2">
						<h4 className="font-['Clash_Display'] text-center text-xl font-bold lg:text-[32px] lg:mb-2 lg:text-left">
							Judging Criteria
						</h4>
						<h4 className="font-['Clash_Display'] text-center text-xl font-bold mb-4 text-[#D434FE] lg:text-[32px] lg:mb-4 lg:text-left">
							Key attributes
						</h4>
						<p className="text-xs text-center leading-[22.555px] mb-5 lg:text-sm lg:text-left">
							<span className="text-[13px] text-[#FF26B9]">
								Innovation and Creativity:{" "}
							</span>
							Evaluate the uniqueness and creativity of the solution. Consider
							whether it addresses a real-world problem in a novel way or
							introduces innovative features.
						</p>
						<p className="text-xs text-center leading-[22.555px] mb-5 lg:text-sm lg:text-left">
							<span className="text-[13px] text-[#FF26B9]">
								Functionality:{" "}
							</span>
							Assess how well the solution works. Does it perform its intended
							functions effectively and without major issues? Judges would
							consider the completeness and robustness of the solution.
						</p>
						<p className="text-xs text-center leading-[22.555px] mb-5 lg:text-sm lg:text-left">
							<span className="text-[13px] text-[#FF26B9]">
								Impact and Relevance:{" "}
							</span>
							Determine the potential impact of the solution in the real world.
							Does it address a significant problem, and is it relevant to the
							target audience? Judges would assess the potential social,
							economic, or environmental benefits.
						</p>
						<p className="text-xs text-center leading-[22.555px] mb-5 lg:text-sm lg:text-left">
							<span className="text-xs text-[#FF26B9]">
								Technical Complexity:{" "}
							</span>
							Evaluate the technical sophistication of the solution. Judges
							would consider the complexity of the code, the use of advanced
							technologies or algorithms, and the scalability of the solution.
						</p>
						<p className="text-xs text-center leading-[22.555px] mb-4 lg:mb-8 lg:text-sm lg:text-left">
							<span className="text-[13px] text-[#FF26B9]">
								Adherence to Hackathon Rules:{" "}
							</span>
							Judges will Ensure that the team adhered to the rules and
							guidelines of the hackathon, including deadlines, use of specific
							technologies or APIs, and any other competition-specific
							requirements.
						</p>
						<Button
							to="/register"
							text="read more"
							extras="m-auto w-fit lg:ml-0"
						/>
					</div>
				}
			/>
		</div>
	);
};

export default HomePage;
