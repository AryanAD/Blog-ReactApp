import "./App.css";
// import {  } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layout/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./layout/Footer";
import Cards from "./components/Cards";
import Create from "./components/Create";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				{/* <ToastContainer /> */}
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>

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
			</BrowserRouter>
		</div>
	);
};

export default App;
