import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
	Typography,
} from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cardStyle = {
	width: "70vw",
	height: "100%",
	borderRadius: "11px",
	boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
};

const btnStyle = {
	width: "100%",
	height: "100%",
	borderRadius: "11px",
	gap: "10px",
	fontSize: "16px",
};

const limitText = (text, limit) => {
	if (text.length > limit) {
		return text.substring(0, limit) + "...";
	}
	return text;
};

const Modify = () => {
	const navigate = useNavigate();
	const [myData, setMyData] = useState([]);

	const fetchMyData = async () => {
		try {
			let response = await axios.get(`http://localhost:3000/blogs`);
			setMyData(response.data.blogs);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	useEffect(() => {
		fetchMyData();
	}, []);

	const handleDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:3000/blogs/${id}`);

			setMyData((prevData) => prevData.filter((blog) => blog._id !== id));
			window.location.reload();
			console.log(`Blog with ID ${id} deleted successfully.`);
		} catch (error) {
			console.error(`Error deleting blog with ID ${id}:`, error);
		}
	};

	const handleEdit = (id) => {
		navigate(`/edit-blogs/${id}`);
	};

	return (
		<Box>
			{myData.length === 0 ? (
				<Card
					sx={{
						borderRadius: "13px",
						width: 1350,
						height: 546,
						bgcolor: "#4bb7f1",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
					}}>
					<CircularProgress
						color={"primary"}
						size={80}
					/>
				</Card>
			) : (
				myData
					.map((data) => (
						<Card
							key={data._id}
							sx={cardStyle}>
							<CardMedia
								component="img"
								alt="Blog Image"
								height="400"
								image={data.image}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="Box">
									{data.title}
									<hr />
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary">
									{limitText(data.description, 280)}
								</Typography>
							</CardContent>
							<CardActions
								sx={{
									display: "flex",
									justifyContent: "space-around",
								}}>
								<Button
									onClick={() => {
										navigate(`/blogs/${data._id}`, {});
									}}
									sx={btnStyle}
									variant="contained"
									color="info"
									key="one">
									<OpenInNewRoundedIcon /> Visit
								</Button>
								<Button
									onClick={() => handleEdit(data._id)}
									sx={btnStyle}
									variant="contained"
									color="success"
									key="two">
									<AddRoundedIcon /> Edit
								</Button>
								<Button
									onClick={() => handleDelete(data._id)}
									sx={btnStyle}
									variant="contained"
									color="error"
									key="three">
									<DeleteForeverRoundedIcon /> Delete
								</Button>
							</CardActions>
						</Card>
					))
					.reverse()
					.slice(0, 1)
			)}
		</Box>
	);
};

export default Modify;
