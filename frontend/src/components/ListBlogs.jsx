import {
	Box,
	CircularProgress,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Modify from "./Modify";
import Cards from "./Cards";

const ListBlogs = () => {
	const [listID, setListID] = useState();
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

	const handleBlogDeleted = () => {
		fetchMyData();
	};

	const listStyle = {
		width: "100%",
		maxWidth: 360,
		overflowY: "scroll",
		textAlign: "left",
		bgcolor: "#4bb7f1",
		borderRadius: "11px",
		boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
		color: "#000",
	};

	const listBoxStyle = {
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	const cardFirstSection = {
		margin: "25px auto 25px",
		maxWidth: "90vw",
		maxHeight: "35vh",
		display: "flex",
		// justifyContent: "space-around",
		gap: "1%",
	};

	const cardSecondSection = {
		margin: "auto auto 25px",
		width: "90vw",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		gap: "1%",
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
			<Box sx={cardFirstSection}>
				<Cards myData={myData} />
			</Box>
			<Box sx={cardSecondSection}>
				<Modify
					listID={listID}
					onBlogDeleted={handleBlogDeleted}
				/>
				<List sx={listStyle}>
					{myData.length === 0 ? (
						<Box sx={listBoxStyle}>
							<CircularProgress
								color={"primary"}
								size={80}
							/>
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
												setListID(data._id);
											}}>
											<ListItemText primary={data.title}></ListItemText>
										</ListItemButton>
									</ListItem>
								);
							})
							.reverse()
					)}
				</List>
			</Box>
		</Box>
	);
};

export default ListBlogs;
