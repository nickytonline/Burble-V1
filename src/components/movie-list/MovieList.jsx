import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import "./movie-list.scss";
import MovieCard from "../movie-card/MovieCard";

import {Swiper, SwiperSlide} from "swiper/react";

import tmdbApi, {category} from "../../api/tmdbApi";

const MovieList = (props) => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		const getList = async () => {
			let response = null;
			const params = {};

			if (props.type !== "similar") {
				switch (props.category) {
					case category.movie:
						response = await tmdbApi.getMoviesList(props.type, {params});
						break;
					default:
						response = await tmdbApi.getTvList(props.type, {params});
				}
			} else {
				response = await tmdbApi.similar(props.category, props.id);
			}
			setItems(response.results);
		};
		getList();
	}, [props.category, props.id, props.type]); // TODO: Review

	return (
		<div className="movie-list">
			<Swiper
				grabCursor={true}
				spaceBetween={10}
				slidesPerView={"auto"}
				onSwiper={(swiper) => console.log(swiper)} //TODO: Review
			>
				{items.map((item, i) => (
					<SwiperSlide key={i}>
						<MovieCard item={item} category={props.category} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

MovieList.propTypes = {
	category: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default MovieList;
