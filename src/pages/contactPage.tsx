import React from "react";
import * as Yup from "yup";
import Nav from "../components/sections/nav";
import BackBtn from "../components/utilities/backButton";
import { FormButton } from "../components/utilities/button";
import INSTAGRAM from "../assets/icons/mdi_instagram.svg";
import TWITTER_X from "../assets/icons/Vector2.svg";
import FACEBOOK from "../assets/icons/Vector1.svg";
import LINKEDIN from "../assets/icons/ri_linkedin-fill.svg";
import STAR from "../assets/images/star.png";
import STAR_PURPLE from "../assets/images/sata-gra.png";
import STARGray from "../assets/images/stargray.png";
import BlurPurple1 from "../assets/images/purple-lens-flare-png.png";
import BlurPurple2 from "../assets/images/purple-lens-flare-png-2.png";
import { Link } from "react-router-dom";
import { request } from "../utils/axios.utils";
import { useMutation } from "react-query";
import { queryClient } from "../App";
import { ErrorMessage, Formik, Form } from "formik";

const ContactPage = (): React.ReactElement => {
	const urlPath = "/hackathon/contact-form"; // this is the url path after the baseurl for the registration endpoint

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
		},
		onError: (error: Error) => {
			throw new Error(error.message);
		},
	});

	// validation schema for registration form validation
	const validationSchema = Yup.object({
		first_name: Yup.string().required("First name is required"),
		email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		message: Yup.string().required("Message is required").min(10, "Too short"),
	});

	const initialValues = {
		first_name: "",
		email: "",
		message: "",
	};

	// function that handles form submission
	const handleSubmit = (
		values: typeof initialValues,
		{ resetForm }: { resetForm: () => void }
	): void => {
		postUser({ ...values });
		reset(resetForm);
	};

	return (
		<div className="relative overflow-hidden pry-black text-white min-h-screen pb-16 lg:pb-32">
			<div className="hidden md:block">
				<Nav />
			</div>
			<Link
				to="/"
				className="cursor-pointer flex items-center px-[42px] py-6 md:hidden"
			>
				<BackBtn />
			</Link>
			<div className="relative px-[42px] md:pt-16 md:px-28 lg:flex lg:justify-between">
				<section className="pt-8 pb-10 w-full md:flex md:flex-col md:gap-y-4">
					<h4 className="font-['Clash_Display'] text-xl text-[#D434FE] font-semibold pb-6 md:hidden">
						Questions or need assistance? <br /> Let us know about it
					</h4>
					<p className="text-xs md:hidden">
						Email us below to any question related to our event
					</p>
					<h4 className="hidden mt-3 text-[32px] text-[#D434FE] font-semibold font-['Clash_Display'] md:block">
						Get in touch
					</h4>
					<p className="hidden md:block">
						Contact <br /> Information
					</p>
					<p className="hidden md:block">
						27,Alara Street <br /> Yaba 100012 <br /> Lagos State
					</p>
					<p className="hidden md:block">Call Us : 07067981819</p>
					<p className="hidden md:block">
						we are open from Monday-Friday <br /> 08:00am - 05:00pm
					</p>
					<div className="hidden py-5 md:block">
						<p className="text-[#D434FE] text-xs pb-3">Share on</p>
						<div className="flex items-center gap-x-5">
							<a href="" className="cursor-pointer">
								<img className="" src={INSTAGRAM} alt="instagram-icon" />
							</a>
							<a href="" className="cursor-pointer">
								<img className="" src={TWITTER_X} alt="twitter-x-icon" />
							</a>
							<a href="" className="cursor-pointer">
								<img className="" src={FACEBOOK} alt="facebook-icon" />
							</a>
							<a href="" className="cursor-pointer">
								<img className="" src={LINKEDIN} alt="linkedin-icon" />
							</a>
						</div>
					</div>
				</section>
				<section className="w-full md:p-16 md:rounded-xl md:bg-[#FFFFFF08] md:shadow-[0px_4px_4px_0px_#0000003f]">
					<section className="hidden w-full md:block">
						<h4 className="font-['Clash_Display'] text-xl text-[#D434FE] font-semibold pb-6 md:text-xl">
							Questions or need assistance? <br /> Let us know about it
						</h4>
					</section>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						<Form className="flex flex-col items-center justify-between gap-y-6">
							<input
								type="text"
								name="first-name-field"
								id="first-name-field"
								placeholder="First Name"
								className="w-full py-3 px-6 rounded border border-white focus:border-[#D434FE] focus:outline-none bg-[#FFFFFF08] shadow-[0px_4px_4px_0px_#0000003f] text-base font-normal text-white placeholder:text-white"
							/>
							<ErrorMessage
								name="first_name"
								component="small"
								className="text-red-600"
							/>
							<input
								type="email"
								name="email-field"
								id="email-field"
								placeholder="Mail"
								className="w-full py-3 px-6 rounded border border-white focus:border-[#D434FE] focus:outline-none bg-[#FFFFFF08] shadow-[0px_4px_4px_0px_#0000003f] text-base font-normal text-white placeholder:text-white"
							/>
							<ErrorMessage
								name="email"
								component="small"
								className="text-red-600"
							/>
							<textarea
								name="message"
								id="message-field"
								placeholder="Message"
								rows={6}
								className="w-full py-3 px-6 rounded border border-white focus:border-[#D434FE] focus:outline-none bg-[#FFFFFF08] shadow-[0px_4px_4px_0px_#0000003f] text-base font-normal text-white placeholder:text-white"
							></textarea>
							<ErrorMessage
								name="message"
								component="small"
								className="text-red-600"
							/>
							<FormButton text="Submit" />
						</Form>
					</Formik>
					<div className="py-10 md:hidden">
						<p className="text-[#D434FE] text-center text-xs pb-2">Share on</p>
						<div className="flex items-center justify-center gap-x-3">
							<a href="" className="cursor-pointer">
								<img className="" src={INSTAGRAM} alt="instagram-icon" />
							</a>
							<a href="" className="cursor-pointer">
								<img className="" src={TWITTER_X} alt="twitter-x-icon" />
							</a>
							<a href="" className="cursor-pointer">
								<img className="" src={FACEBOOK} alt="facebook-icon" />
							</a>
							<a href="" className="cursor-pointer">
								<img className="" src={LINKEDIN} alt="linkedin-icon" />
							</a>
						</div>
					</div>
				</section>
				<img
					className="absolute top-[0%] left-1/2 -translate-x-1/2  m-auto lg:top-[0%] lg:left-[10%]"
					src={STAR_PURPLE}
					alt="purple-star"
				/>
				<img
					className="absolute right-[10%] top-[8%] w-[15px] lg:top-[0%] lg:right-[10%] lg:w-[26px]"
					src={STARGray}
					alt="grey-star"
				/>
				<img
					className="absolute right-[5%] bottom-[30%] w-[15px] lg:bottom-0"
					src={STAR}
					alt="white-star"
				/>
				<img
					className="absolute left-[5%] bottom-[10%] lg:left-1/2 lg:bottom-[25%] lg:-translate-x-1/2 lg:w-[18px]"
					src={STAR_PURPLE}
					alt="purple-star"
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

export default ContactPage;
