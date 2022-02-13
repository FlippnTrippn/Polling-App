//List --
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { sidebar } from "../../utils/util";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <List>
      {sidebar.map((item, index) => (
        <ListItem button key={item.name} onClick={() => navigate(item.path)}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;
