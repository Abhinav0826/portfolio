import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						{/* <div className="contact-logo">
							<Logo width={46} />
						</div> */}
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch
						</div>
						<div className="subtitle about-subtitle">
									Let's build something awesome together. Drop a message, I'll get back within a day.
								</div>
				<div className="email-wrapper1">
					<div className="email.wrapper">
						<div className="loc-icon">
						<FontAwesomeIcon icon={faLocationDot} style={{ color: '#65656d' }} />
						</div>

						<div className="social-text">Door no: 8-338, Avanthi nagar, APSP, Kakinada, Andhra Pradesh, India - 533005</div>
					</div>
				</div>
				
			</div>

					
				<div className="email-wrapper2">
					<div className="email.wrapper">
						<div className="loc-icon">
						<FontAwesomeIcon icon={faPhone} style={{ color: '#65656d' }} />
						</div>

						<div className="social-text">+91 8790356756</div>
						</div>
				</div>
				
					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>
					<div className="res">
					Take a Peek at My Resume!
								</div>
					<div className="resumediv">
								<a href="https://drive.google.com/file/d/1ZKDVOirjLpdJ49y81C4uh-2A_CqcENdX/view?usp=drive_link" target="_blank" className="resumebutton">Resume</a>
								</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
