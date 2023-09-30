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
			console.log(response);
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
		width: "250px",
	};

	return (
		<>
			{myData.length === 0 ? (
				<Card
					sx={{
						borderRadius: "13px",
						width: "100%",
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
					.slice(0, 6)
					.reverse()
					.map((data) => {
						return (
							<Card
								key={data.id}
								sx={{ borderRadius: "13px" }}>
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
										sx={overflowWrap}
										variant="body2"
										color="text.secondary">
										{data.description}
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
			)}
		</>
	);
};

export default Cards;
