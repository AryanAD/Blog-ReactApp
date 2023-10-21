import { Box, IconButton, Link, styled } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ListBlogs from "../components/ListBlogs";
import { AddRounded } from "@mui/icons-material";
import Footer from "./Footer";

const HtmlTooltip = styled(({ className, ...props }) => (
	<Tooltip
		{...props}
		classes={{ popper: className }}
	/>
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "#f5f5f9",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: "1px solid #dadde9",
	},
}));

const HomePage = () => {
	const homeBG = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		background: "#1999C0",
	};

	const createButton = {
		position: "fixed",
		borderRadius: "50%",
		bottom: "50%",
		right: 15,
		bgcolor: "white",
		width: "50px",
		height: "50px",
	};
	return (
		<Box sx={homeBG}>
			<ListBlogs />

			<Link href="/create">
				<IconButton>
					<HtmlTooltip
						title={<h2>Add New Blog</h2>}
						placement="left">
						<AddRounded
							color="black"
							sx={createButton}
						/>
					</HtmlTooltip>
				</IconButton>
			</Link>
			<Footer />
		</Box>
	);
};

export default HomePage;
