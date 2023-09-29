import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ListBlogs = () => {
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

	console.log(myData);

	return (
		<List
			sx={{
				width: "100%",
				maxWidth: 360,
				height: 546,
				overflowY: "scroll",
				textAlign: "left",
				bgcolor: "#4bb7f1",
				borderRadius: "11px",
				boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
				color: "#000",
			}}>
			{myData.map((data) => {
				console.log(data);
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
			})}
		</List>
	);
};

export default ListBlogs;
