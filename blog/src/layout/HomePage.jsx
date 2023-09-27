import { Box } from "@mui/material";
import Cards from "../components/Cards";
import Modify from "../components/Modify";
import ListDisplay from "../components/ListItems";

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
		justifyContent: "space-around",
		gap: "1%",
	};

	return (
		<Box sx={homeBG}>
			<Box sx={firstSection}>
				<Cards />
			</Box>
			<Box sx={secondSection}>
				<Modify />
				<ListDisplay />
			</Box>
		</Box>
	);
};

export default HomePage;
