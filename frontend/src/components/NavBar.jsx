import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Container from "@mui/material/Container";
import EditNoteIcon from "@mui/icons-material/EditNote";

const NavBar = () => {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<EditNoteIcon
						variant="h4"
						sx={{
							fontSize: "2.8rem",
							display: { xs: "none", md: "flex" },
							mr: 1,
						}}
					/>
					<Typography
						variant="h4"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						BLOG APP
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							href="/"
							color="inherit">
							<HomeIcon />
						</IconButton>
					</Box>
					<EditNoteIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						BLOG APP
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

					<Box sx={{ flexGrow: 0 }}>
						<IconButton
							href="/"
							sx={{ p: 0 }}>
							<HomeIcon
								sx={{ color: "white", width: "32px", height: "32px" }}
							/>
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;
