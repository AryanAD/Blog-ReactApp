import {
	Box,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography,
} from "@mui/material";

const Create = () => {
	return (
		<Container
			component="main"
			maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Typography
					component="h1"
					variant="h5">
					Create new Blog
				</Typography>
				<Box
					component="form"
					noValidate
					sx={{ mt: 1 }}>
					<TextField
						id="standard-basic"
						variant="standard"
						margin="normal"
						fullWidth
						label="Blog Title"
						type="text"
					/>
					<TextField
						id="standard-basic"
						variant="standard"
						margin="normal"
						fullWidth
						label="Description"
						type="text"
					/>
					<TextField
						id="standard-basic"
						variant="standard"
						margin="normal"
						fullWidth
						label="Add Cover Image"
						type="image"
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}>
						Add
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default Create;
