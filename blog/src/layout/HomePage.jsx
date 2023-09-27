import Cards from "../components/Cards";

const HomePage = () => {
	const homeBG = {
		height: "100vh",
	};
	return (
		<div style={homeBG}>
			<Cards />
		</div>
	);
};

export default HomePage;
