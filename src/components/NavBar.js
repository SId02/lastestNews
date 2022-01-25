import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
	return (
		<div>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item"to="https://newsapi.org/"target="_blank"	rel="noopener noreferrer">
						<Link aria-current="page" to="/">LastestNews</Link>
					</a>
					<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-end">
						<a className="navbar-item" rel="noopener noreferrer">
							<Link aria-current="page" to="/">
						
								Home
							</Link>
						</a>
						<a className="navbar-item" rel="noopener noreferrer">
							<Link aria-current="page" to="/technology">
								Technology
							</Link>
						</a>
						<a className="navbar-item" rel="noopener noreferrer">
							<Link aria-current="page" to="/sports">
								Sports
							</Link>
						</a>
						<a className="navbar-item" rel="noopener noreferrer">
							<Link aria-current="page" to="/entertainment">
								Entertainment
							</Link>
						</a>
						<a className="navbar-item">
							<Link aria-current="page" to="/health">
								Health
							</Link>
						</a>
						<a className="navbar-item">
							<Link aria-current="page" to="/science">
								Science
							</Link>
						</a>
						<a className="navbar-item">
							<Link aria-current="page" to="/business">
								Business
							</Link>
						</a>
					
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
