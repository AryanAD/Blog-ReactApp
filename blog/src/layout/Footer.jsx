import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Box, Container, Link, Toolbar, Typography } from "@mui/material";

const footerStyles = {
	backgroundColor: "#1976D2",
	color: "white",
	padding: "20px 0",
};

const iconStyles = {
	marginRight: "8px",
	fontSize: "1.5rem",
};

const socialLinksStyles = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const Footer = () => {
	return (
		<Box
			sx={{
				...footerStyles,
				position: "fixed",
				left: 0,
				bottom: 0,
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
			}}>
			<Container>
				<Toolbar>
					<EditNoteIcon sx={iconStyles} />
					<Typography variant="h6">BLOG APP</Typography>
				</Toolbar>

				<div style={socialLinksStyles}>
					<Link
						href="https://www.facebook.com/"
						target="_blank"
						rel="noopener noreferrer">
						<FaFacebook style={iconStyles} />
					</Link>
					<Link
						href="https://twitter.com/"
						target="_blank"
						rel="noopener noreferrer">
						<FaTwitter style={iconStyles} />
					</Link>
					<Link
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer">
						<FaInstagram style={iconStyles} />
					</Link>
					<Link
						href="https://www.linkedin.com/"
						target="_blank"
						rel="noopener noreferrer">
						<FaLinkedin style={iconStyles} />
					</Link>
				</div>

				<Typography
					variant="body2"
					align="center"
					style={{ marginTop: "16px" }}>
					&copy; {new Date().getFullYear()} BLOG APP
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
