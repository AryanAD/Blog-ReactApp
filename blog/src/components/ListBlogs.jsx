import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ListBlogs = () => {
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

	return (
		<List
			sx={{
				width: "100%",
				maxWidth: 360,
				height: 562,
				overflowY: "scroll",
				textAlign: "left",
				bgcolor: "#4bb7f1",
				borderRadius: "11px",
				boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
				color: "#000",
			}}>
			{myData.length === 0 ? (
				<Box
					sx={{
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Typography variant="h5">No Blogs Found</Typography>
				</Box>
			) : (
				myData
					.map((data) => {
						return (
							<ListItem
								sx={{ borderBottom: "1px solid gray" }}
								key={data.id}
								disablePadding>
								<ListItemButton
									onClick={() => {
										navigate(`/blogs/${data._id}`, {});
									}}>
									<ListItemText primary={data.title}></ListItemText>
								</ListItemButton>
							</ListItem>
						);
					})
					.reverse()
			)}
		</List>
	);
};

export default ListBlogs;
