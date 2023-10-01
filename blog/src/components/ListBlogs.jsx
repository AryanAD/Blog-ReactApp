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

	const boxStyle = {
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<Box sx={{ display: "flex", gap: 2 }}>
			<Modify listID={listID} />
			<List sx={listStyle}>
				{myData.length === 0 ? (
					<Box sx={boxStyle}>
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
	);
};

export default ListBlogs;
