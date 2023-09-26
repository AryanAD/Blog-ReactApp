import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./layout/Home";
import NavBar from "./components/NavBar";
import Footer from "./layout/Footer";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<Home />}></Route>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
