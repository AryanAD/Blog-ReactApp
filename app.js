const express = require("express");
const app = express();
const Blog = require("./model/blogModel");
const mongoConnection = require("./database/db");
require("dotenv").config();
const { multer, storage } = require("./utils/multerConfig");
const cors = require("cors");

app.use(
	cors({
		origin: ["http://localhost:5173"],
	})
);

const upload = multer({ storage: storage });

mongoConnection(process.env.MONGO_URI);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("uploads"));

app.post("/blogs", upload.single("image"), async (req, res) => {
	if (!req.file || !req.body.title || !req.body.description) {
		return res.json({
			status: 400,
			message: "Please fill all the fields  title, description and image",
		});
	}
	const image = req.file.filename;
	try {
		const blog = await Blog.create({
			title: req.body.title,
			description: req.body.description,
			image: process.env.Backend_URL + image,
		});
		res.json({
			status: 200,
			message: "Blog created successfully",
		});
	} catch (e) {
		res.json({
			status: 400,
			message: e.message,
		});
	}
});

app.get("/blogs", async (req, res) => {
	try {
		const blogs = await Blog.find();
		res.json({
			status: 200,
			blogs: blogs,
		});
	} catch (e) {
		res.json({
			status: 400,
			message: e.message,
		});
	}
});
app.get("/blogs/:id", async (req, res) => {
	try {
		const blogs = await Blog.findById(req.params.id);
		res.json({
			status: 200,
			blogs: blogs,
		});
	} catch (e) {
		res.json({
			status: 400,
			message: e.message,
		});
	}
});
app.delete("/blogs/:id", async (req, res) => {
	try {
		const blog = await Blog.findByIdAndDelete(req.params.id);
		res.json({
			status: 200,
			message: "Blog deleted successfully",
		});
	} catch (e) {
		res.json({
			status: 400,
			message: e.message,
		});
	}
});

app.patch("/blogs/:id", upload.single("image"), async (req, res) => {
	try {
		const blog = await Blog.findById(req.params.id);
		if (req.file) {
			const image = req.file.filename;
			blog.image = process.env.Backend_URL + image;
		}
		if (req.body.title) {
			blog.title = req.body.title;
		}
		if (req.body.description) {
			blog.description = req.body.description;
		}
		await blog.save();
		res.json({
			status: 200,
			message: "Blog updated successfully",
		});
	} catch (e) {
		res.json({
			status: 400,
			message: e.message,
		});
	}
});

app.all("*", (req, res) => {
	res.json({
		status: 404,
		message: "Page not found",
	});
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
