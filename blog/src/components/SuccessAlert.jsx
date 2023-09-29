import { Alert, Button, Snackbar, Stack } from "@mui/material";
import React from "react";

const SuccessAlert = () => {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<Stack
			spacing={2}
			sx={{ width: "100%" }}>
			<Button
				variant="outlined"
				onClick={handleClick}>
				Open success snackbar
			</Button>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}>
				<Alert
					onClose={handleClose}
					severity="success"
					sx={{ width: "100%" }}>
					This is a success message!
				</Alert>
			</Snackbar>
			<Alert severity="success">This is a success message!</Alert>
		</Stack>
	);
};

export default SuccessAlert;
