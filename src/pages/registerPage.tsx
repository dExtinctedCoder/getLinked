import React, { useState } from "react";
import Nav from "../components/sections/nav";
import * as Yup from "yup";
import Button, { FormButton } from "../components/utilities/button";
import ManEmoji from "../assets/images/image_processing20200511-10310-13mnlsx.png";
import WomanEmoji from "../assets/images/1f6b6-2640.png";
import ManOkay from "../assets/images/3d-graphic-designer-showing-thumbs-up-png 1.png";
import STAR_PURPLE from "../assets/images/sata-gra.png";
import STARGray from "../assets/images/stargray.png";
import STAR from "../assets/images/star.png";
import BlurPurple1 from "../assets/images/purple-lens-flare-png.png";
import BlurPurple2 from "../assets/images/purple-lens-flare-png-2.png";
import CONGRATULATION from "../assets/images/congratulation.png";
import { useMutation } from "react-query";
import { queryClient } from "../App";
import { request } from "../utils/axios.utils";
import { Formik, Form, ErrorMessage } from "formik";
import Overlay from "../components/utilities/overlay";
import Modal from "../components/utilities/modal";
import uuid from "react-uuid";

const RegisterPage = (): React.ReactElement => {
	// generate a random number using the react-uuid library
	const generateId = (): string => {
		return uuid();
	};

	const [isSuccess, setIsSuccess] = useState(false);
	const urlPath = "/hackathon/registration"; // this is the url path after the baseurl for the registration endpoint

	// function to reset form after submission
	const reset = (fn: () => void): void => {
		fn();
		// setUserInfo(defaultState);
	};

	const postUser = (userDetail: object): void => {
		createUser(userDetail);
	};

	// react query function to create user
	const createUserFn = async (details: object): Promise<object> => {
		return await request({ url: urlPath, method: "post", data: details });
	};

	// react-query hook that sends post request to create user
	const { mutate: createUser } = useMutation(createUserFn, {
		onSuccess: () => {
			void queryClient.invalidateQueries("register");
			setIsSuccess(true);
		},
		onError: (error: Error) => {
			throw new Error(error.message);
		},
	});

	// validation schema for registration form validation
	const validationSchema = Yup.object({
		team_name: Yup.string(),
		email: Yup.string().email("Invalid email format"),
		phone_number: Yup.number(),
		project_topic: Yup.string(),
		group_size: Yup.number(),
		category: Yup.string(),
	});

	const initialValues = {
		team_name: "",
		email: "",
		phone_number: "",
		project_topic: "",
		group_size: "",
		category: "",
	};

	// function that handles form submission
	const handleSubmit = (
		values: typeof initialValues,
		{ resetForm }: { resetForm: () => void }
	): void => {
		postUser({ ...values, id: generateId(), privacy_poclicy_accepted: true });
		reset(resetForm);
	};

	return (
		<div className="relative overflow-hidden pry-black text-white min-h-screen pb-16 lg:pb-32">
			{isSuccess ? (
				<Overlay>
					<Modal>
						<>
							<img
								src={CONGRATULATION}
								alt="congratulation-image"
								className=""
							/>
							<h4 className="text-center font-semibold mb-7 md:text-[32px]">
								Congratulations <br />
								you have successfully Registered!
							</h4>
							<p className="text-xs font-medium text-center pb-6 md:text-sm">
								Yes, it was easy and you did it! check your mail box for next
								step
							</p>
							<Button text="back" extras="w-full" />
						</>
					</Modal>
				</Overlay>
			) : (
				""
			)}
			<div className="hidden md:block">
				<Nav />
			</div>
			<div className="flex items-center px-16 py-6 md:hidden">
				<h3 className="text-[15px] font-bold font-['Clash_Display'] text-[#D434FE]">
					Register
				</h3>
			</div>
			<div className="z-10 relative px-[42px] md:pt-16 lg:flex lg:justify-between">
				<section className="pt-8 pb-10 w-full md:flex md:flex-col md:gap-y-4">
					<img
						src={ManOkay}
						alt="man-okay-illustration"
						className="max-w-[195px] m-auto mb-6 lg:min-w-full lg:m-0"
					/>
					<div className="flex items-end gap-x-6 mb-2 md:hidden">
						<p className="text-xs">Be part of this movement!</p>
						<div className="relative flex items-center justify-center px-6 w-fit">
							<img src={WomanEmoji} alt="woman-emoji" />
							<img src={ManEmoji} alt="man-emoji" />
							<span className="absolute bottom-0 left-0 right-0 border-b border-dashed border-[#D434FE]"></span>
						</div>
					</div>
					<h4 className="text-xl pb-6 md:hidden">CREATE YOUR ACCOUNT</h4>
				</section>
				<section className="w-full md:p-16 md:rounded-xl md:bg-[#FFFFFF08] md:shadow-[0px_4px_4px_0px_#0000003f]">
					<section className="hidden w-full md:block">
						<h3 className="text-[32px] font-semibold font-['Clash_Display'] text-[#D434FE]">
							Register
						</h3>
						<div className="flex items-end gap-x-4 mb-2">
							<p className="text-sm w-fit">Be part of this movement!</p>
							<div className="relative flex items-center justify-center w-fit px-6">
								<img src={WomanEmoji} alt="woman-emoji" />
								<img src={ManEmoji} alt="man-emoji" />
								<span className="absolute bottom-0 left-0 right-0 border-b border-dashed border-[#D434FE]"></span>
							</div>
						</div>
						<h4 className="text-2xl pb-8 pt-4">CREATE YOUR ACCOUNT</h4>
					</section>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						<Form className="flex flex-col items-center justify-between gap-y-6 md:flex-row md:flex-wrap md:gap-x-0 md:gap-y-8">
							<div className="w-full md:w-[48%]">
								<label className="pb-[6px]" htmlFor="first-name-field">
									Team&apos;s Name
								</label>
								<input
									type="text"
									name="first-name-field"
									id="first-name-field"
									placeholder="Enter the name of your group"
									className="w-full py-3 px-6 rounded border border-white focus:border-[#D434FE] focus:outline-none bg-[#FFFFFF08] shadow-[0px_4px_4px_0px_#0000003f] text-sm font-normal text-white placeholder:text-[#ffffff3f]"
								/>
								<ErrorMessage
									component="small"
									className="text-red-500 text-xs"
									name="team_name"
								/>
							</div>
							<div className="w-full md:w-[48%]">
								<label className="pb-[6px]" htmlFor="phone-number-field">
									Phone
								</label>
								<input
									type="tel"
									name="phone-number-field"
									id="phone-number-field"
									placeholder="Enter your phone number"
									className="w-full py-3 px-6 rounded border border-white focus:border-[#D434FE] focus:outline-none bg-[#FFFFFF08] shadow-[0px_4px_4px_0px_#0000003f] text-sm font-normal text-white placeholder:text-[#ffffff3f]"
								/>
								<ErrorMessage
									component="small"
									className="text-red-500 text-xs"
									name="phone_number"
								/>
							</div>
							<div className="w-full md:w-[48%]">
								<label className="pb-[6px]" htmlFor="email-field">
									Email
								</label>
								<input
									type="email"
									name="email-field"
									id="email-field"
									placeholder="Enter your email address"
									className="w-full py-3 px-6 rounded border border-white focus:border-[#D434FE] focus:outline-none bg-[#FFFFFF08] shadow-[0px_4px_4px_0px_#0000003f] text-sm font-normal text-white placeholder:text-[#ffffff3f]"
								/>
								<ErrorMessage
									component="small"
									className="text-red-500 text-xs"
									name="email"
								/>
							</div>
							<div className="w-full md:w-[48%]">
								<label className="pb-[6px]" htmlFor="project-topic-field">
									Project Topic
								</label>
								<input
									type="text"
									name="project-topic-field"
									id="project-topic-field"
									placeholder="What is your group project topic"
									className="w-full py-3 px-6 rounded border border-white focus:border-[#D434FE] focus:outline-none bg-[#FFFFFF08] shadow-[0px_4px_4px_0px_#0000003f] text-sm font-normal text-white placeholder:text-[#ffffff3f]"
								/>
								<ErrorMessage
									component="small"
									className="text-red-500 text-xs"
									name="project_topic"
								/>
							</div>
							<div className="w-full flex items-center justify-between gap-x-5">
								<div className="w-full">
									<label className="pb-[6px]" htmlFor="category-select-options">
										Category
									</label>
									<select
										className="cursor-pointer w-full py-3 px-6 rounded border border-white focus:border-[#D434FE] focus:outline-none bg-[#FFFFFF08] shadow-[0px_4px_4px_0px_#0000003f] text-sm font-normal text-white"
										name="category-select-options"
										id="category-select-options"
									>
										<option className="text-black" selected>
											Select
										</option>
										<option className="text-black" value="category-one">
											Category One
										</option>
										<option className="text-black" value="category-two">
											Category Two
										</option>
										<option className="text-black" value="category-three">
											Category Three
										</option>
									</select>
									<ErrorMessage
										component="small"
										className="text-red-500 text-xs"
										name="category"
									/>
								</div>
								<div className="w-full">
									<label className="pb-[6px]" htmlFor="group-size-options">
										Group
									</label>
									<select
										className="cursor-pointer w-full py-3 px-6 rounded border border-white focus:border-[#D434FE] focus:outline-none bg-[#FFFFFF08] shadow-[0px_4px_4px_0px_#0000003f] text-sm font-normal text-white"
										name="group-size-options"
										id="group-size-options"
									>
										<option className="text-black" selected>
											Select
										</option>
										<option className="text-black" value="two-four">
											Between two(2) to four(4)
										</option>
										<option className="text-black" value="five-eight">
											Between five(5) to eight(8)
										</option>
										<option className="text-black" value="over-eight">
											More than eight(8)
										</option>
									</select>
									<ErrorMessage
										component="small"
										className="text-red-500 text-xs"
										name="group_size"
									/>
								</div>
							</div>
							<div className="self-start">
								<span className="text-[9px] pb-3 text-[#FF26B9]">
									Please review your registration details before submitting
								</span>
								<div className="flex items-center gap-x-4">
									<input
										type="checkbox"
										name="checkbox"
										id="checkbox"
										required
										className="w-4 cursor-pointer accent-[#FF26B9]"
									/>
									<small className="text-[10px]">
										I agreed with the event terms and conditions and privacy
										policy
									</small>
								</div>
							</div>
							<FormButton text="Submit" extras="w-full md:hidden" />
							<FormButton text="Register Now" extras="hidden w-full md:flex" />
						</Form>
					</Formik>
				</section>
				<img
					src={STAR_PURPLE}
					alt="purple-star"
					className="absolute top-[16%] right-[20%] lg:left-[5%] lg:top-[10%]"
				/>
				<img
					src={STARGray}
					alt="grey-star"
					className="absolute left-[3%] top-[41%] w-[15px] lg:left-auto lg:right-[15%] lg:top-[10%]"
				/>
				<img
					src={STARGray}
					alt="grey-star"
					className="hidden absolute left-[4%] bottom-0 lg:left-[10%] md:block"
				/>
				<img
					src={STAR}
					alt="white-star"
					className="hidden absolute right-[10%] -bottom-[4%] w-[20px] lg:right-[10%] md:block"
				/>
			</div>
			<img
				src={BlurPurple1}
				alt="blur-purple"
				className="absolute top-[0%] -left-[30%] opacity-70 lg:opacity-60 lg:-left-[40%] lg:top-0"
			/>
			<img
				src={BlurPurple2}
				alt="blur-purple"
				className="absolute hidden opacity-60 lg:-right-[25%] lg:-bottom-[30%] bg-blend-hard-light md:block"
			/>
		</div>
	);
};

export default RegisterPage;
