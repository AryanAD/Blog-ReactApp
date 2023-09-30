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
		marginBottom: 1,
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
						width: 1750,
						height: "30vh",
						bgcolor: "#4bb7f1",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
					}}>
					<CardContent>
						<Typography variant="h4">No Blogs Found</Typography>
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
									height="160"
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
									<hr />
									<Typography
										sx={{ marginTop: 1, marginBottom: 0 }}
										variant="body2"
										color="text.secondary">
										{limitLength(data.description, 60)}
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
