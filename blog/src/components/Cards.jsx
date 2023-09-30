import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Cards = () => {
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

	const overflowWrap = {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		maxWidth: "300px",
	};
	const limitLength = (text, limit) => {
		if (text.length > limit) {
			return text.substring(0, limit) + "...";
		}
		return text;
	};

	return (
		<>
			{myData.length === 0 ? (
				<Card
					sx={{
						borderRadius: "13px",
						minWidth: "250px",
						maxWidth: "250px",
						bgcolor: "#4bb7f1",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<CardContent>
						<Typography variant="h4">No Blog Data Found</Typography>
					</CardContent>
				</Card>
			) : (
				myData
					.map((data) => {
						return (
							<Card
								key={data.id}
								sx={{ borderRadius: "13px", width: "300px" }}>
								<CardMedia
									component="img"
									alt="Blog Image"
									height="140"
									image={data.image}
								/>
								<CardContent>
									<Typography
										sx={overflowWrap}
										gutterBottom
										variant="h5"
										component="div">
										{data.title}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary">
										{limitLength(data.description, 95)}
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										onClick={() => {
											navigate(`/blogs/${data._id}`, {});
										}}
										color="info"
										size="small"
										variant="contained"
										fullWidth>
										Visit
									</Button>
								</CardActions>
							</Card>
						);
					})
					.reverse()
					.slice(0, 6)
			)}
		</>
	);
};

export default Cards;
