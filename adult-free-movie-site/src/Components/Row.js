import React, { useState, useEffect } from "react";
import axios from "../util/axios";
import "../row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const image_base_url = "https://image.tmdb.org/t/p/w400/";
const videoOpts = { height: "390", width: "100%", playerVars: { autoplay: 1 } };

export default function Row({ fetchUrl, title, isLargeRow }) {
	const [movies, setMovie] = useState([]);
	const [trailerUrl, settrailerUrl] = useState("");

	useEffect(() => {
		//
		async function fetchData() {
			const request = await axios.get(fetchUrl).then();
			// console.table(request.data.results);
			setMovie(request.data.results);
		}
		fetchData();
	}, [fetchUrl]);

	const handleClick = (movie) => {
		if (trailerUrl) {
			settrailerUrl("");
		} else {
			movieTrailer(movie?.name || "").then((url) => {
				const urlParams = new URLSearchParams(new URL(url).search);
				settrailerUrl(urlParams.get("v"));
			});
			// .catch((error) => console.log("catch error =>", error));
		}
	};
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="movie_posters">
				{movies.map((movie) => (
					<img
						className={`movie_poster ${isLargeRow && "large"}`}
						key={movie.id}
						src={`${image_base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
						onClick={() => handleClick(movie)}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={videoOpts} />}
		</div>
	);
}
