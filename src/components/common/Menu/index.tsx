import React from "react";
import Drawer from "@mui/material/Drawer";

type Anchor = string;

function Menu() {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <Drawer
      anchor={"right"}
      open={state}
      onClose={toggleDrawer("right", false)}
    >
      ddd
    </Drawer>
  );
}

export default Menu;
