import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Body = () => {
	return (
		<>
			<Header />
			<Footer />
			<Outlet />
		</>
	);
};

export default Body;
