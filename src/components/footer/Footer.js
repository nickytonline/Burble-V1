import React from "react";
import "./footer.scss";
import {Link} from "react-router-dom";

// TODO: Look into importing multiple items from 1 folder || Attempt v1 not good so far
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/BurbleLogo.png";

function Footer() {
	return (
		<div
			className="footer"
			style={{
				backgroundImage: `url(${bg})`,
			}}
		>
			<div className="footer__content container">
				<div className="footer__content__logo">
					<div className="logo">
						<img alt="" src={logo} />
						<Link to="/"> Burble </Link>{" "}
					</div>{" "}
				</div>{" "}
				<div className="footer__content__menus">
					<div className="footer__content__menu">
						<Link to="/"> Home </Link>
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://tinyurl.com/bdf62rbw"}}
						>
							{" "}
							Contact Us{" "}
						</Link>{" "}
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://tinyurl.com/bdf62rbw"}}
						>
							{" "}
							Terms Of Service{" "}
						</Link>{" "}
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://github.com/Nerajno/Burble"}}
						>
							{" "}
							About Me{" "}
						</Link>{" "}
					</div>{" "}
					<div className="footer__content__menu">
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://tinyurl.com/bdf62rbw"}}
						>
							{" "}
							Live{" "}
						</Link>
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://tinyurl.com/bdf62rbw"}}
						>
							{" "}
							FAQ{" "}
						</Link>{" "}
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://tinyurl.com/bdf62rbw"}}
						>
							{" "}
							Premium{" "}
						</Link>
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://tinyurl.com/bdf62rbw"}}
						>
							{" "}
							Privacy Policy{" "}
						</Link>{" "}
					</div>{" "}
					<div className="footer__content__menu">
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://tinyurl.com/bdf62rbw"}}
						>
							{" "}
							You Must Watch{" "}
						</Link>{" "}
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://tinyurl.com/bdf62rbw"}}
						>
							{" "}
							Recent Release{" "}
						</Link>
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://tinyurl.com/bdf62rbw"}}
						>
							{" "}
							Top IMDB{" "}
						</Link>{" "}
						<Link
							rel="noopener noreferrer"
							target="_blank"
							to={{pathname: "https://github.com/Nerajno/Burble-Ongoing"}}
						>
							{" "}
							Github Repo{" "}
						</Link>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
			{/* Footer */}{" "}
		</div>
	);
}

export default Footer;
