import { useState, useEffect } from "react";
import {
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const EditBlog = () => {
	const nav = useNavigate();
	const { id } = useParams(); // Assuming you have a route parameter for the blog ID
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	// Fetch existing blog data when the component mounts
	useEffect(() => {
		const fetchBlogData = async () => {
			try {
				const response = await axios.get(`http://localhost:3000/blogs/${id}`);
				const blogData = response.data;

				setTitle(blogData.title);
				setDescription(blogData.description);
			} catch (error) {
				console.error(error);
				setErrorMessage("An error occurred while fetching the blog data.");
			}
		};

		fetchBlogData();
	}, [id]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const formData = new FormData();
			formData.append("title", title);
			formData.append("description", description);
			formData.append("image", file);

			const response = await axios.put(
				`http://localhost:3000/blogs/${id}`, // Update the existing blog by ID
				formData
			);

			if (response.status === 200) {
				toast.success("Successfully Updated Blog!");
				nav("/");
			} else {
				setErrorMessage(response.data.message);
			}
		} catch (error) {
			console.error(error);
			setErrorMessage("An error occurred while updating the blog.");
		}
	};

	return (
		<Container component="main">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Typography
					component="h1"
					variant="h5">
					Edit Blog
				</Typography>
				<form onSubmit={handleFormSubmit}>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						label="Blog Title"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<TextField
						rows={16}
						multiline
						variant="outlined"
						margin="normal"
						fullWidth
						label="Description"
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<input
						type="file"
						accept="image/*"
						onChange={(e) => setFile(e.target.files[0])}
					/>
					{errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}>
						Update
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default EditBlog;
