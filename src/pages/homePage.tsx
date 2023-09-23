import React, { useEffect, useState } from "react";
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
import ManThinking from "../assets/images/cwok-casual-211.png";
import QuestionMark from "../assets/images/_.png";
import PRIZECUP from "../assets/images/9486889 1.png";
import GoldMedal from "../assets/images/gold_medal 1.png";
import SilverMedal from "../assets/images/silver_medal 1.png";
import BronzeMedal from "../assets/images/bronze_medal 1.png";
import { useAppDispatch } from "../store/hooks";
import { CLOSE_MENU, toggleMenu } from "../store/app/app.actions";
import Section from "../components/sections/landingPageSection";

const HomePage = (): React.ReactElement => {
	const dispatchMenuAction = useAppDispatch();
	useEffect(() => {
		dispatchMenuAction(toggleMenu(CLOSE_MENU));
	}, []);

	const [faqState, setFaqState] = useState([
		{ faq: false },
		{ faq: false },
		{ faq: false },
		{ faq: false },
		{ faq: false },
	]);
	const setFaqStateFn = (index: number): void => {
		const newState = [...faqState];
		for (let i = 0; i < faqState.length; i++) {
			if (i === index) {
				continue;
			} else {
				newState[i].faq = false;
				setFaqState(newState);
			}
		}
		newState[index].faq = !faqState[index].faq;
		setFaqState(newState);
	};
	const faqs = [
		{
			title: "Can I work on a project I started before the hackathon?",
			text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem delectus nostrum maiores animi alias illo itaque, quod unde est laboriosam dignissimos reiciendis sint sapiente quidem facilis mollitia cum repellendus iusto. Quasi odit incidunt, optio neque totam rerum.",
		},
		{
			title: "What happens if I need help during the hackathon?",
			text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem delectus nostrum maiores animi alias illo itaque, quod unde est laboriosam dignissimos reiciendis sint sapiente quidem facilis mollitia cum repellendus iusto. Quasi odit incidunt, optio neque totam rerum.",
		},
		{
			title: "What happens if I don't have an idea for a project?",
			text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem delectus nostrum maiores animi alias illo itaque, quod unde est laboriosam dignissimos reiciendis sint sapiente quidem facilis mollitia cum repellendus iusto. Quasi odit incidunt, optio neque totam rerum.",
		},
		{
			title: "Can I join a team or do I have to come with one?",
			text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem delectus nostrum maiores animi alias illo itaque, quod unde est laboriosam dignissimos reiciendis sint sapiente quidem facilis mollitia cum repellendus iusto. Quasi odit incidunt, optio neque totam rerum.",
		},
		{
			title: "What happens after the hackathon ends",
			text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem delectus nostrum maiores animi alias illo itaque, quod unde est laboriosam dignissimos reiciendis sint sapiente quidem facilis mollitia cum repellendus iusto. Quasi odit incidunt, optio neque totam rerum.",
		},
	];

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
			<hr className="border-0 h-[1px] bg-[#ffffff2d]" />
			<Section
				label="faqs-section"
				src={ManThinking}
				alt="man-thinking"
				id="faqs"
				extras="flex-col-reverse gap-y-32 lg:flex-row-reverse lg:pt-32"
				misc={
					<>
						<img
							src={QuestionMark}
							alt="question-mark-illustration"
							className="absolute left-[36%] top-[50%] lg:left-auto lg:right-[31.5%] lg:top-[8%]"
						/>
						<img
							src={QuestionMark}
							alt="question-mark-illustration"
							className="absolute w-[25px] left-[18%] top-[55%] lg:left-auto lg:right-[22.5%] lg:top-[17%]"
						/>
						<img
							src={QuestionMark}
							alt="question-mark-illustration"
							className="absolute w-[25px] left-[55%] top-[55%] lg:left-auto lg:right-[41%] lg:top-[17%]"
						/>
						<img
							src={STAR_PURPLE}
							alt="star.png"
							className="absolute w-[18px] left-[15%] top-[3%] lg:left-[3%] lg:top-[20%]"
						/>
						<img
							src={STAR_PURPLE}
							alt="star.png"
							className="absolute  w-[10px] m-auto top-[53%] lg:w-[15px] lg:right-[28%] lg:top-[15%]"
						/>

						<img
							src={STAR_PURPLE}
							alt="star.png"
							className="absolute w-[7px] left-[28%] top-[68%] lg:left-[60%] lg:top-[30%] lg:w-[15px]"
						/>
						<img
							src={STARGray}
							alt="star.png"
							className="absolute w-[10px] top-[77%] left-[13%] lg:w-[26px] lg:left-[53%] lg:top-[56%]"
						/>
						<img
							src={STAR}
							alt="star.png"
							className="absolute w-[16px] bottom-[3%] right-[27%] lg:right-[15%]"
						/>
					</>
				}
				textBox={
					<div>
						<h4 className="font-['Clash_Display'] text-center text-xl font-bold lg:text-[32px] lg:mb-2 lg:text-left">
							Frequently Ask
						</h4>
						<h4 className="font-['Clash_Display'] text-center text-xl font-bold mb-4 text-[#D434FE] lg:text-[32px] lg:mb-4 lg:text-left">
							Question
						</h4>
						<p className="text-[13px] text-center leading-[27.5px] lg:text-sm lg:text-left">
							We got answers to the questions that you might want to ask about
							getlinked Hackathon 1.0
						</p>
						<ul className="pt-10">
							{faqs.map((item, index) => {
								return (
									<li
										key={index}
										className="overflow-y-hidden pry-black z-10 relative h-fit flex flex-col items-start border-b border-[#D434FE]"
									>
										<div className="flex items-center justify-between w-full pr-2">
											<h5 className="text-xs py-3 leading-[18px]">
												{item.title}
											</h5>
											<span
												onClick={() => {
													setFaqStateFn(index);
												}}
												className={`${
													faqState[index].faq ? `rotate-90` : `rotate-[360deg]`
												} transition-transform inline-block text-[#D434FE] text-xl cursor-pointer`}
											>
												+
											</span>
										</div>
										{faqState[index].faq ? (
											<div className="py-3 text-xs leading-5">{item.text}</div>
										) : (
											""
										)}
									</li>
								);
							})}
						</ul>
					</div>
				}
			/>
			<hr className="border-0 h-[1px] bg-[#ffffff2d]" />
			<section
				aria-label="timeline-section"
				id="timeline-section"
				className="relative py-8 pb-16 px-[42px] lg:py-10 lg:px-16 md:pb-32"
			>
				<h4 className="font-['Clash_Display'] text-center text-xl font-bold leading-[26.6px] lg:text-[32px] lg:leading-0 lg:mb-3">
					Timeline
				</h4>
				<p className="text-sm mb-14 leading-[24.136px] max-w-[35ch] m-auto text-center">
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</p>
				<div className="flex flex-col gap-y-7 md:gap-y-4">
					<div className="flex items-stretch gap-x-4 md:justify-between md:items-end md:gap-x-28 md:min-h-max">
						<div className="self-stretch flex flex-col gap-y-2 items-center justify-between md:order-2">
							<span className="w-[2px] h-full ter-color md:w-1"></span>
							<span className="text-xs font-bold p-[2px] aspect-square flex items-center justify-center rounded-full pry-color md:p-2">
								1
							</span>
						</div>
						<div className="flex-col justify-between md:items-end md:order-1 md:text-right md:pt-16 md:w-1/2">
							<h5 className="text-[#D434FE] text-xs font-bold mb-1">
								Hackathon Announcement
							</h5>
							<p className="text-xs leading-[19.188px] md:m-auto md:mr-0 mb-2 md:max-w-[52ch] md:mb-0">
								The getlinked tech hackathon 1.0 is formally announced to the
								general public and teams begin to get ready to register
							</p>
							<span className="text-[#D434FE] text-xs font-bold md:hidden">
								November 18, 2023
							</span>
						</div>
						<span className=" hidden text-[#D434FE] text-xs font-bold md:w-1/2 md:block md:order-3">
							November 18, 2023
						</span>
					</div>
					<div className="flex items-stretch gap-x-4 md:justify-between md:items-end md:gap-x-28 md:min-h-max">
						<div className="self-stretch flex flex-col gap-y-2 items-center justify-between md:order-2">
							<span className="w-[2px] h-full ter-color md:w-1"></span>
							<span className="text-xs font-bold p-[2px] aspect-square flex items-center justify-center rounded-full pry-color md:p-2">
								2
							</span>
						</div>
						<div className="flex-col justify-between md:order-3 md:pt-16 md:w-1/2">
							<h5 className="text-[#D434FE] text-xs font-bold mb-1">
								Teams Registration begins
							</h5>
							<p className="text-xs leading-[19.188px] mb-2 md:max-w-[52ch] md:mb-0">
								Interested teams can now show their interest in the getlinked
								tech hackathon 1.0 2023 by proceeding to register
							</p>
							<span className="text-[#D434FE] text-xs font-bold md:hidden">
								November 18, 2023
							</span>
						</div>
						<span className="hidden text-[#D434FE] text-xs font-bold md:w-1/2 md:block lg:text-right md:order-1">
							November 18, 2023
						</span>
					</div>
					<div className="flex items-stretch gap-x-4 md:justify-between md:items-end md:gap-x-28 md:min-h-max">
						<div className="self-stretch flex flex-col gap-y-2 items-center justify-between md:order-2">
							<span className="w-[2px] h-full ter-color md:w-1"></span>
							<span className="text-xs font-bold p-[2px] aspect-square flex items-center justify-center rounded-full pry-color md:p-2">
								3
							</span>
						</div>
						<div className="flex-col justify-between md:items-end md:order-1 md:text-right md:pt-16 md:w-1/2">
							<h5 className="text-[#D434FE] text-xs font-bold mb-1">
								Teams Registration ends
							</h5>
							<p className="text-xs leading-[19.188px] md:m-auto md:mr-0 mb-2 md:max-w-[52ch] md:mb-0">
								Interested Participants are no longer Allowed to register
							</p>
							<span className="text-[#D434FE] text-xs font-bold md:hidden">
								November 18, 2023
							</span>
						</div>
						<span className=" hidden text-[#D434FE] text-xs font-bold md:w-1/2 md:block md:order-3">
							November 18, 2023
						</span>
					</div>
					<div className="flex items-stretch gap-x-4 md:justify-between md:items-end md:gap-x-28 md:min-h-max">
						<div className="self-stretch flex flex-col gap-y-2 items-center justify-between md:order-2">
							<span className="w-[2px] h-full ter-color md:w-1"></span>
							<span className="text-xs font-bold p-[2px] aspect-square flex items-center justify-center rounded-full pry-color md:p-2">
								4
							</span>
						</div>
						<div className="flex-col justify-between md:order-3 md:pt-16 md:w-1/2">
							<h5 className="text-[#D434FE] text-xs font-bold mb-1">
								Announcement of the accepted teams and ideas
							</h5>
							<p className="text-xs leading-[19.188px] mb-2 md:max-w-[52ch] md:mb-0">
								All teams whom idea has been accepted into getlinked tech
								hackathon 1.0 2023 are formally announced
							</p>
							<span className="text-[#D434FE] text-xs font-bold md:hidden">
								November 18, 2023
							</span>
						</div>
						<span className="hidden text-[#D434FE] text-xs font-bold md:w-1/2 md:block lg:text-right md:order-1">
							November 18, 2023
						</span>
					</div>
					<div className="flex items-stretch gap-x-4 md:justify-between md:items-end md:gap-x-28 md:min-h-max">
						<div className="self-stretch flex flex-col gap-y-2 items-center justify-between md:order-2">
							<span className="w-[2px] h-full ter-color md:w-1"></span>
							<span className="text-xs font-bold p-[2px] aspect-square flex items-center justify-center rounded-full pry-color md:p-2">
								5
							</span>
						</div>
						<div className="flex-col justify-between md:items-end md:order-1 md:text-right md:pt-16 md:w-1/2">
							<h5 className="text-[#D434FE] text-xs font-bold mb-1">
								Getlinked Hackathon 1.0 Offically Begins
							</h5>
							<p className="text-xs leading-[19.188px] md:m-auto md:mr-0 mb-2 md:max-w-[52ch] md:mb-0">
								Accepted teams can now proceed to build their ground breaking
								skill driven solutions
							</p>
							<span className="text-[#D434FE] text-xs font-bold md:hidden">
								November 18, 2023
							</span>
						</div>
						<span className=" hidden text-[#D434FE] text-xs font-bold md:w-1/2 md:block md:order-3">
							November 18, 2023
						</span>
					</div>
					<div className="flex items-stretch gap-x-4 md:justify-between md:items-end md:gap-x-28 md:min-h-max">
						<div className="self-stretch flex flex-col gap-y-2 items-center justify-between md:order-2">
							<span className="w-[2px] h-full ter-color md:w-1"></span>
							<span className="text-xs font-bold p-[2px] aspect-square flex items-center justify-center rounded-full pry-color md:p-2">
								6
							</span>
						</div>
						<div className="flex-col justify-between md:order-3 md:pt-16 md:w-1/2">
							<h5 className="text-[#D434FE] text-xs font-bold mb-1">
								Demo Day
							</h5>
							<p className="text-xs leading-[19.188px] mb-2 md:max-w-[52ch] md:mb-0">
								Teams get the opportunity to pitch their projects to judges. The
								winner of the hackathon will also be announced on this day
							</p>
							<span className="text-[#D434FE] text-xs font-bold md:hidden">
								November 18, 2023
							</span>
						</div>
						<span className="hidden text-[#D434FE] text-xs font-bold md:w-1/2 md:block lg:text-right md:order-1">
							November 18, 2023
						</span>
					</div>
				</div>
				<img
					src={STAR_PURPLE}
					alt="star-purple"
					className="absolute top-[15%] left-[16%] md:top-[19%] md:left-[32%] md:w-[15px]"
				/>
				<img
					src={STAR}
					alt="star-white"
					className="absolute top-[54%] right-[15%] w-[10px] md:w-[26px] md:top-[50%]"
				/>
				<img
					src={STARGray}
					alt="star-gray"
					className="absolute left-[5%] bottom-[4%] w-[10px] md:w-[26px] md:left-[4%] md:bottom-[3%]"
				/>
			</section>
			<hr className="border-0 h-[1px] bg-[#ffffff2d]" />
			<section className="relative bg-[#100B20] pt-16 pb-28 lg:px-16">
				<div className="lg:m-auto lg:w-fit lg:mr-0 lg:px-24">
					<h4 className="font-['Clash_Display'] text-center text-xl font-bold lg:text-left lg:text-[32px] lg:mb-2">
						Prizes and
					</h4>
					<h4 className="font-['Clash_Display'] text-center text-xl font-bold mb-2 text-[#D434FE] lg:text-[32px] lg:mb-4 lg:text-left">
						Rewards
					</h4>
					<p className="text-[13px] text-center leading-[27.5px] lg:text-sm lg:text-left">
						Highlight of the prizes or rewards for winners and for participants.
					</p>
				</div>
				<div className="lg:flex items-center justify-between">
					<img
						src={PRIZECUP}
						alt="prize-cup"
						className="m-auto w-fit object-contain lg:m-0 lg:w-[45%]"
					/>
					<div className="flex gap-y-24 items-center justify-center gap-x-3 pt-40 px-[42px] lg:flex-nowrap lg:w-full">
						<div className="relative w-[120px] aspect-[0.52] flex flex-col items-center justify-end rounded-lg border border-[#D434FE] bg-[#d434fe1e] lg:w-[200px] lg:aspect-[0.75]">
							<p className="text-xs font-semibold mb-1 text-center lg:text-4xl">
								2nd <br />
								Runner
							</p>
							<p className="text-sm pb-4 font-bold text-[#D434FE] text-center lg:text-[32px] lg:leading-[69.248px]">
								N300,000
							</p>
							<img
								src={SilverMedal}
								alt="gold-medal"
								className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[75px] lg:w-[179px] lg:-top-[45%]"
							/>
						</div>
						<div className="relative w-[120px] aspect-[0.52] flex flex-col items-center justify-end rounded-lg border border-[#D434FE] bg-[#d434fe1e] translate-y-4 lg:w-[200px] lg:aspect-[0.75]">
							<p className="text-xs font-semibold mb-1 text-center lg:text-4xl">
								1st <br />
								Runner
							</p>
							<p className="text-smp pb-4 font-bold text-[#903AFF] text-center lg:text-[32px] lg:leading-[69.248px]">
								N400,000
							</p>
							<img
								src={GoldMedal}
								alt="gold-medal"
								className="absolute scale-[2] -top-[25%] left-1/2 -translate-x-1/2 w-[75px] lg:w-[179px] lg:-top-[45%] lg:scale-[1.45]"
							/>
						</div>
						<div className="relative w-[120px] aspect-[0.52] flex flex-col items-center justify-end rounded-lg border border-[#D434FE] bg-[#d434fe1e] lg:w-[200px] lg:aspect-[0.75]">
							<p className="text-xs font-semibold mb-1 text-center lg:text-4xl">
								3rd <br />
								Runner
							</p>
							<p className="text-sm pb-4 font-bold text-[#D434FE] text-center lg:text-[32px] lg:leading-[69.248px]">
								N150,000
							</p>
							<img
								src={BronzeMedal}
								alt="gold-medal"
								className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[75px] lg:w-[179px] lg:-top-[45%]"
							/>
						</div>
					</div>
				</div>
				<img
					src={STAR_PURPLE}
					alt="star-purple"
					className="absolute top-[5%] left-[12%] lg:left-[20%]"
				/>
				<img
					src={STAR_PURPLE}
					alt="star-purple"
					className="absolute top-[9%] right-[26%] lg:right-[20%] lg:top-[19%]"
				/>
				<img
					src={STAR}
					alt="star-white"
					className="absolute w-[15px] top-[58%] left-[12%] lg:left-[50%] lg:top-[25%]"
				/>
				<img
					src={STAR}
					alt="star-white"
					className="absolute w-[13px] right-[12%] top-[63%] lg:right-[6%] lg:top-[31%]"
				/>
				<img
					src={STAR}
					alt="star-white"
					className="hidden absolute w-[13px] lg:left-[20%] lg:block"
				/>
				<img
					src={STARGray}
					alt="star-grey"
					className="absolute w-[15px] bottom-[3%] right-[33%] lg:bottom-[12%] lg:right-[19%]"
				/>
			</section>
		</div>
	);
};

export default HomePage;
