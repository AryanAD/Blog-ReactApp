import { Box, IconButton, Link, styled } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Cards from "../components/Cards";
import Modify from "../components/Modify";
import ListDisplay from "../components/ListItems";
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
		background: "linear-gradient(262deg, #FFE7A8, #7890F5)",
	};

	const firstSection = {
		margin: "25px auto 25px",
		width: "90vw",
		height: "35vh",
		display: "flex",
		justifyContent: "space-around",
		gap: "1%",
	};

	const secondSection = {
		margin: "auto auto 25px",
		width: "90vw",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		gap: "1%",
	};

	const leftSecond = {
		display: "flex",
		width: "75vw",
		flexDirection: "column",
	};
	const rightSecond = {
		display: "flex",
		width: "100%",
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
			<Box sx={firstSection}>
				<Cards />
			</Box>
			<Box sx={secondSection}>
				<Box sx={leftSecond}>
					<Modify />
				</Box>
				<Box sx={rightSecond}>
					<ListDisplay />
				</Box>
			</Box>

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
