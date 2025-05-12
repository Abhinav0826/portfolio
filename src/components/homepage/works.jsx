import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">NIT Warangal</div>
							<div className="work-subtitle">
								Btech in ECE
							</div>
							<div className="work-duration">2021 - 2025</div>
							<div className="cg">CGPA - 5.64</div>
						</div>
						<div className="work">
							<div className="work-title">New Millnnium School</div>
							<div className="work-subtitle">
								Class XII
							</div>
							<div className="work-duration">2020 - 2021</div>
							<div className="cg">Percentage - 96%</div>
						</div>
						<div className="work">
							<div className="work-title">Green Field School</div>
							<div className="work-subtitle">
								Class X
							</div>
							<div className="work-duration">2018 - 2019</div>
							<div className="cg">Percentage - 85%</div>
						</div>
						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
