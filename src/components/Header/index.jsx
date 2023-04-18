import CodeIcon from "@mui/icons-material/Code";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Register from "features/Auth/components/Register";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      console.log(reason);
    } else {
      setOpen(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CodeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EZ SHOP
          </Typography>
          <Button color="inherit">Todos</Button>
          <Button color="inherit">Albumn</Button>
          <Button onClick={handleClickOpen} color="inherit">
            Register
          </Button>
        </Toolbar>
      </AppBar>

      {/* Dialog When user click Register */}
      <Dialog
        sx={{ overflow: "hidden !important" }}
        open={open}
        onClose={handleClose}
        disableEscapeKeyDown
      >
        <DialogContent sx={{ overflow: "hidden !important" }}>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
