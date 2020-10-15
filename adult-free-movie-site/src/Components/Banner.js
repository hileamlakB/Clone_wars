import React, { useState, useEffect } from "react";
import axios from "../util/axios";
import requests from "../util/request";
import "../banner.css";

export default function Banner() {
	const [Movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchAnim);

			setMovie(
				request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
			);
		}
		fetchData();
	}, []);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) : str;
	}

	return (
		<header
			className="Banner"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
			}}>
			<div className="banner_contents">
				<h1 className="banner_title">
					{Movie?.title || Movie?.name || Movie?.original_name}
				</h1>
				<div className="banner_buttons">
					<button className="banner_button">Play</button>
					<button className="banner_button">My List</button>
				</div>
				<h1 className="banner_description">{truncate(Movie?.overview, 150)}</h1>
			</div>
			<div className="banner_fade_bottom"></div>
		</header>
	);
}
