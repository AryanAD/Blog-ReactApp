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
import { useEffect, useState } from "react";
import axios from "axios";

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

	return (
		<Box>
			{myData.slice(0, 1).map((data) => {
				return (
					<Card
						key={data.id}
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
								sx={btnStyle}
								variant="contained"
								color="info"
								key="one">
								<OpenInNewRoundedIcon /> Visit
							</Button>

							<Button
								sx={btnStyle}
								variant="contained"
								color="success"
								key="two">
								<AddRoundedIcon /> Edit
							</Button>

							<Button
								sx={btnStyle}
								variant="contained"
								color="error"
								key="three">
								<DeleteForeverRoundedIcon /> Delete
							</Button>
						</CardActions>
					</Card>
				);
			})}
		</Box>
	);
};

export default Modify;
