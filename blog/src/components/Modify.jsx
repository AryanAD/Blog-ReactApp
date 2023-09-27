import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const cardStyle = {
	width: "70vw",
	height: "100%",
	borderRadius: "13px",
};

const btnStyle = {
	width: "100%",
	height: "100%",
	borderRadius: "11px",
	gap: "10px",
	fontSize: "16px",
};
const Modify = () => {
	return (
		<Box>
			<Card sx={cardStyle}>
				<CardMedia
					component="img"
					alt="Blog Image"
					height="400"
					image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="Box">
						Blog Title
						<hr />
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary">
						Blog Content || perferendis obcaecati odio beatae laborum mollitia
						iusto quidem qui vel alias voluptatem voluptates at!
					</Typography>
				</CardContent>
				<CardActions
					sx={{
						display: "flex",
						justifyContent: "space-around",
					}}>
					<Button
						sx={btnStyle}
						variant="contained"
						color="info"
						key="one">
						<OpenInNewRoundedIcon /> Visit
					</Button>

					<Button
						sx={btnStyle}
						variant="contained"
						color="success"
						key="two">
						<AddRoundedIcon /> Edit
					</Button>

					<Button
						sx={btnStyle}
						variant="contained"
						color="error"
						key="three">
						<DeleteForeverRoundedIcon /> Delete
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default Modify;
