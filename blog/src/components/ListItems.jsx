import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

const ListDisplay = () => {
	return (
		<List
			sx={{
				width: "100%",
				maxWidth: 360,
				bgcolor: "#4bb7f1",
				borderRadius: "11px",
				boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
				color: "#000",
			}}
			aria-label="contacts">
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon></ListItemIcon>
					<ListItemText primary="Chelsea Otakan" />
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemText
						inset
						primary="Eric Hoffman"
					/>
				</ListItemButton>
			</ListItem>
		</List>
	);
};

export default ListDisplay;
