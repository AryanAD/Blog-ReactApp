import React from "react";
import { Box, Container, Link, Toolbar, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footerStyles = {
	width: "100vw",
	height: "40vh",
	background: "whitesmoke",
};
const footerContainer = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-around",
	height: "40vh",
	margin: "30px 10px 0 10px",
};

const divider = {
	borderLeft: "6px solid tomato",
	borderRadius: "3px",
	height: "200px",
	position: "absolute",
	left: "65%",
	marginLeft: "-3px",
};
const left = { width: "40vw" };

const socialLinksStyles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	marginTop: "16px",
};

const centerStyles = {
	display: "flex",
	alignItems: "center",
};

const linkTextStyles = {
	display: "flex",
	color: "white",
	textDecoration: "none",
};

const Footer = () => {
	return (
		<footer style={footerStyles}>
			<div style={footerContainer}>
				<div style={divider} />
				<div style={left}>
					<h1>Aryan's Portfolio</h1>
					<p>
						A portfolio website of Aryan Adhikari that contains all the
						information one requires about Aryan to hire him.
					</p>
				</div>
				<div style="right">
					<div style="contactInfo">
						<p>
							<i style="fa-solid fa-globe"></i>
							<div style="align">&nbsp;Website:&nbsp;</div>
							<a
								href="https://aryanad.github.io/portfolio"
								target="_blank">
								aryanad.github.io/portfolio
							</a>
						</p>
					</div>
					<div style="contactInfo">
						<p>
							<i style="fa-solid fa-envelope"></i>
							<div style="align">&nbsp;Email:&nbsp;</div>
							<a
								href="mailto:aryanhohai@gmail.com?subject=Portfolio Website"
								target="_blank">
								aryanhohai@gmail.com
							</a>
						</p>
					</div>
					<div style="contactInfo">
						<p>
							<i style="fa-solid fa-phone"></i>
							<div style="align">&nbsp;Phone no:&nbsp;</div>
							<a href="tel:9814273753">+977 9814273753</a>
						</p>
					</div>
					<div style="contactInfo">
						<p>
							<i style="fa-brands fa-github"></i>
							<div style="align">&nbsp;Github:&nbsp;</div>
							<a
								href="https://www.github.com/AryanAD"
								target="_blank">
								github.com/AryanAD
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
