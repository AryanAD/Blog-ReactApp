import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

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
	if (typeof text === "string" && text.length > limit) {
		return text.substring(0, limit) + "...";
	}
	return text;
};

const Modify = ({ listID, onBlogDeleted }) => {
	const navigate = useNavigate();
	const [myData, setMyData] = useState(null);
	const [defaultData, setDefaultData] = useState([]);

	const fetchDefaultData = async () => {
		try {
			const res = await axios.get(`http://localhost:3000/blogs`);
			setDefaultData(res.data.blogs);
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	};
	useEffect(() => {
		fetchDefaultData();
	}, []);

	const reverseData = [...defaultData].reverse();

	const fetchMyData = async () => {
		try {
			const response = await axios.get(`http://localhost:3000/blogs/${listID}`);
			setMyData(response.data.blogs);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	useEffect(() => {
		fetchMyData();
	}, [listID]);

	const handleDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:3000/blogs/${id}`);
			console.log(`Blog with ID ${id} deleted successfully.`);
			fetchDefaultData();
			fetchMyData();
			onBlogDeleted();
		} catch (error) {
			console.error(`Error deleting blog with ID ${id}:`, error);
		}
	};

	const handleEdit = (id) => {
		navigate(`/edit-blogs/${id}`);
	};

	return (
		<Box>
			{myData ? (
				<Card sx={cardStyle}>
					<CardMedia
						component="img"
						alt="Blog Image"
						height="400"
						image={myData.image}
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div">
							{myData.title}
							<hr />
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary">
							{limitText(myData.description, 280)}
						</Typography>
					</CardContent>
					<CardActions
						sx={{
							display: "flex",
							justifyContent: "space-around",
						}}>
						<Button
							onClick={() => {
								navigate(`/blogs/${myData._id}`, {});
							}}
							sx={btnStyle}
							variant="contained"
							color="info">
							<OpenInNewRoundedIcon /> Visit
						</Button>
						<Button
							onClick={() => handleEdit(myData._id)}
							sx={btnStyle}
							variant="contained"
							color="success">
							<AddRoundedIcon /> Edit
						</Button>
						<Button
							onClick={() => handleDelete(myData._id)}
							sx={btnStyle}
							variant="contained"
							color="error">
							<DeleteForeverRoundedIcon /> Delete
						</Button>
					</CardActions>
				</Card>
			) : defaultData ? (
				<Card sx={cardStyle}>
					<CardMedia
						component="img"
						alt="Blog Image"
						height="400"
						image={reverseData[0]?.image}
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div">
							{reverseData[0]?.title}
							<hr />
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary">
							{limitText(reverseData[0]?.description, 280)}
						</Typography>
					</CardContent>
					<CardActions
						sx={{
							display: "flex",
							justifyContent: "space-around",
						}}>
						<Button
							onClick={() => {
								navigate(`/blogs/${reverseData[0]?._id}`, {});
							}}
							sx={btnStyle}
							variant="contained"
							color="info">
							<OpenInNewRoundedIcon /> Visit
						</Button>
						<Button
							onClick={() => handleEdit(reverseData[0]?._id)}
							sx={btnStyle}
							variant="contained"
							color="success">
							<AddRoundedIcon /> Edit
						</Button>
						<Button
							onClick={() => handleDelete(reverseData[0]?._id)}
							sx={btnStyle}
							variant="contained"
							color="error">
							<DeleteForeverRoundedIcon /> Delete
						</Button>
					</CardActions>
				</Card>
			) : (
				<CircularProgress
					color={"primary"}
					size={80}
				/>
			)}
		</Box>
	);
};

export default Modify;
