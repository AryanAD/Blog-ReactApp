import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BlogDisplay = () => {
	const [blogData, setBlogData] = useState({});

	const { id } = useParams();

	console.log(id);

	useEffect(() => {
		const fetchBlogData = async () => {
			try {
				let response = await axios.get(`http://localhost:3000/blogs/${id}`);
				console.log(response);
				setBlogData(response.data.blogs);
			} catch (err) {
				console.error("Error: " + err.message);
			}
		};

		fetchBlogData();
	}, [id]);

	// console.log(blogData);

	return (
		<Container
			sx={{ marginTop: 2, marginBottom: 2, border: "2px solid gray" }}
			component="main">
			<Box sx={{ marginTop: 2, marginBottom: 2, textAlign: "center" }}>
				<img
					style={{ height: "50%", width: "50%" }}
					src={blogData.image}
					alt="Blog Image"
				/>
			</Box>
			<Box sx={{ height: "100%" }}>
				<Typography variant="h2">{blogData.title}</Typography>
			</Box>
			<hr />
			<hr />
			<Box sx={{ marginTop: 2, height: "100%" }}>
				<Typography
					style={{ textAlign: "justify" }}
					variant="body1">
					&emsp;&emsp;
					{blogData.description}
				</Typography>
			</Box>
		</Container>
	);
};

export default BlogDisplay;
