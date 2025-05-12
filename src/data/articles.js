import React from "react";

function article_1() {
	return {
		date: "May 2023 - July 2023",
		title: "Internship under Professor at NIT Warangal",
		description:
			"Built a reinforcement learning model for 5G modulation with a team of 5, increasing data rates by 9872.79% and reducing bit errors using a PPO agent in a custom OpenAI Gym environment.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">I worked on a project based on reinforcement Learning under a professor from my college. On optimising power allocation in 5G wireless communication systems. The goal was to maximise the data rate while keeping energy consumption within constraints. Traditional approaches such as fixed algorithms can struggle with dynamic environments like user mobility and changing interference which has been defined using parameters like gamma and rho, so We looked at how reinforcement learning can provide a solution. I created a custom simulation environment using OpenAI Gym called 'WirelessEnv' to model communication dynamics such as user mobility, signal propagation, and interference. 
					The environment’s observation space is a 6-dimensional vector representing normalised values for transmit power, distance, frequency, interference, signal power, and noise power. The action space is continuous, representing transmit power from 0 to 1. I used the Proximal Policy Optimisation (PPO) algorithm from the Stable Baselines3 library to train an agent. The agent's task was to learn how to allocate transmit power efficiently. I tracked the data rate achieved and the rewards earned. The reward is based on the square of the data rate divided by the path loss, ensuring high communication efficiency and low energy consumption. The PPO agent was trained over 100 steps, and its performance was evaluated across 100 episodes. Using Matplotlib, I visualised how the agent’s performance evolved. The agent improved in optimising power allocation, leading to increased communication efficiency.</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "October 2023 - November 2023",
		title: "Nivaa Startup",
		description:
			"Developed a React.js website for college startup “Nivaa” with user registration, responsive UI (Tailwind CSS), and MongoDB integration, by a team of 3.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
			<div className="article-content">
					<div className="paragraph">In a team of 3, I contributed to developing the website for the college startup “Nivaa” within a month. We used React.js to build the front-end, ensuring a dynamic and interactive user experience. The website features a user registration system, allowing users to create accounts securely. MongoDB was integrated to store and manage user data, particularly phone numbers, ensuring secure and efficient data storage. Tailwind CSS was employed to design a clean, responsive layout, making the website accessible on all devices. The design focuses on simplicity, with an easy-to-navigate interface, enhancing the user experience. We worked collaboratively, dividing tasks for front-end development, back-end integration, and UI/UX design. The project was completed within the 1-month deadline, successfully delivering a functional, user-friendly platform for the startup.</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
