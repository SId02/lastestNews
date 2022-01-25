import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);
	const [loading, setLoading] = useState(true);
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const updateNews = async () => {
		props.setProgress(10);
		const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
		setLoading(true);
		let data = await fetch(url);
		props.setProgress(30);
		let parsedData = await data.json();
		props.setProgress(70);
		setArticles(parsedData.articles);
		setTotalResults(parsedData.totalResults);
		setLoading(false);
		props.setProgress(100);
	};

	useEffect(() => {
		document.title = `${capitalizeFirstLetter(props.category)} - News`;
		updateNews();
		// eslint-disable-next-line
	}, []);

	const fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${
			props.country
		}&category=${props.category}&apiKey=${props.apiKey}&page=${
			page + 1
		}&pageSize=${props.pageSize}`;
		setPage(page + 1);
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(articles.concat(parsedData.articles));
		setTotalResults(parsedData.totalResults);
	};
	return (
		<>
			<div class="container is-widescreen mt-6 ">
				<section class="hero">
					<div class="hero-body">
						<div class="container has-text-centered">
							<p class="title"> {capitalizeFirstLetter(props.category)} Headlines</p>
						</div>
					</div>
				</section>
			
				{loading && <Spinner />}
				<InfiniteScroll
					dataLength={articles.length}
					next={fetchMoreData}
					hasMore={articles.length !== totalResults}
					loader={<Spinner />}
				>
					<section className="has-background-light ">
						<div className="container ">
							<div className="section">
								<div className="row columns is-multiline mt-6">
									{articles.map((element) => {
										return (
											<div    className="column  is-4-desktop is-6-tablet"    key={element.url}>
												<NewsItem
													title={element.title ? element.title : ""}
													description={element.description ? element.description : ""}
													imageUrl={element.urlToImage}
													newsUrl={element.url}
													author={element.author}
													date={element.publishedAt}
													source={element.source.name}
												/>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</section>
				</InfiniteScroll>
			</div>
		</>
	);
};

News.defaultProps = {
	country: "in",
	pageSize: 8,
	category: "general",
};

News.propTypes = {
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
};

export default News;
