import {
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography,
} from "@mui/material";

const Create = () => {
	return (
		<Container component="main">
			<CssBaseline />
			<Box
				sx={{
					width: "1200px",
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Typography
					component="h1"
					variant="h4">
					Create new Blog
				</Typography>
				<Box
					component="form"
					noValidate
					sx={{ mt: 1 }}>
					<TextField
						id="standard-basic"
						variant="outlined"
						margin="normal"
						fullWidth
						label="Blog Title"
						type="text"
					/>
					<TextField
						rows={8}
						maxRows={20}
						multiline="true"
						id="standard-basic"
						variant="outlined"
						margin="normal"
						fullWidth
						label="Description"
						type="text"
					/>
					<TextField
						variant="standard"
						margin="normal"
						fullWidth
						type="file"
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
