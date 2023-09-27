import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

const Modify = () => {
	return (
		<div>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt="Blog Image"
					height="140"
					image=""
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div">
						Blog Title
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary">
						Blog Content || perferendis obcaecati odio beatae laborum mollitia
						iusto quidem qui vel alias voluptatem voluptates at!
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						variant="contained"
						fullWidth>
						Visit
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default Modify;