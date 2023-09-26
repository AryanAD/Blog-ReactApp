import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<Home />}></Route>
			</Routes>
		</div>
	);
};

export default App;
