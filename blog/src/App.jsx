import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./layout/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./layout/Footer";
import Cards from "./components/Cards";
import Create from "./components/Create";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<HomePage />}>
					<Route
						path="/cards/:id"
						element={<Cards />}
					/>
					<Route element={<Footer />} />
				</Route>
				<Route
					path="/create"
					element={<Create />}
				/>
			</Routes>
		</div>
	);
};

export default App;
