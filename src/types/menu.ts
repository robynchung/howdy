type MenuType = {
  to: string;
  name: string;
};

type SocialType = {
  name: string;
  link: string;
};

export declare type MenuProps = {
  menuList: Array<MenuType>;
};

export declare type IconProps = {
  handleToggle: (open: boolean) => void;
};

export declare type SocialProps = {
  socialList: Array<SocialType>;
};
