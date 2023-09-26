import "./App.css";
import { Route, Routes } from "react-router";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
			<h1>Hi</h1>
		</div>
	);
};

export default App;
