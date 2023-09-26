import "./App.css";
import { BrowserRouter, Routes, Route, Checkout } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Nav />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<App />}
					/>
					<Route
						path="/checkout"
						element={<Checkout />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
