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
			sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
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
