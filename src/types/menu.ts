type MenuType = {
  to: string;
  name: string;
};

export declare type MenuProps = {
  menuList: Array<MenuType>;
};

export declare type IconProps = {
  handleToggle: (open: boolean) => void;
};
