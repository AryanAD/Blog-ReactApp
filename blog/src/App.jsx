import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Body from "./layouts/Body";
import Display from "./Display";

const App = () => {
	return (
		<div className="App">
			<Display />
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<Body />}
				/>
			</Routes>
		</div>
	);
};

export default App;
