import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
		</div>
	);
};

export default App;
