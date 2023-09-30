import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layout/HomePage";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Create from "./components/Create";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogDisplay from "./components/BlogDisplay";
import EditBlog from "./components/EditBlog";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
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
						element={<HomePage />}
					/>
					<Route
						path="cards/:id"
						element={<Cards />}
					/>
					<Route
						path="blogs/:id"
						element={<BlogDisplay />}
					/>
					<Route
						path="create"
						element={<Create />}
					/>
					<Route
						path="edit-blogs/:id"
						element={<EditBlog />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
