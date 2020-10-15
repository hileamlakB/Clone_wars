import React, { useEffect, useState } from "react";
import "../nav.css";

export default function Nav() {
	const [show, updateShow] = useState("");
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 150) {
				updateShow("show_nav_bg");
			} else {
				updateShow("");
			}
		});
	}, []);

	return (
		<div className={`nav ${show}`}>
			<img className="nav_logo" src="assets/img/logo1.svg" alt="Logo" />
			<svg
				height="384pt"
				viewBox="0 -53 384 384"
				width="384pt"
				fill="white"
				xmlns="http://www.w3.org/2000/svg">
				<path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
				<path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
				<path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
			</svg>
		</div>
	);
}
