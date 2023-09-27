import { Box } from "@mui/material";
import Cards from "../components/Cards";

const HomePage = () => {
	const homeBG = {
		height: "100vh",
		display: "flex",
		justifyContent: "center",
	};

	const firstSection = {
		marginTop: "25px",
		width: "90vw",
		height: "30vh",
		display: "flex",
		justifyContent: "space-around",
		gap: "1%",
	};
	return (
		<Box sx={homeBG}>
			<Box sx={firstSection}>
				<Cards />
			</Box>
		</Box>
	);
};

export default HomePage;
