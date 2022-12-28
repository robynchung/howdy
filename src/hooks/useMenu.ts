import React from "react";

function useMenu() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = React.useCallback((open: boolean) => {
    setState(open);
  }, []);

  return {
    toggleDrawer,
    state,
  };
}

export default useMenu;
