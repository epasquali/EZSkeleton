export const INTERNAL_LINKS = {
  forgotPassword: "/user/reset_password",
  login: "/login",
  register: "/register",
};

export const TOPNAVBAR_LINKS = [
  { label: "Features", url: "/features" },
  {
    label: "Learn",
    url: "#1",
    submenu: [
      { label: "Documentation", url: "/docs" },
      { label: "Resources", url: "/resources" },
      { label: "Community", url: "/community" },
      { label: "Blog", url: "/blog" },
    ],
  },
  { label: "About", url: "/about" },
  { label: "Pricing", url: "/pricing" },
  {
    label: "Support",
    url: "#2",
    submenu: [
      { label: "FAQ", url: "/faq" },
      { label: "Book a demo", url: "/demo" },
      { label: "Forums", url: "/forums" },
    ],
  },
];

//We use getNavLinks because we assume the links can be dynamic (for example, the menu can
// be different if the user is logged in).
//Recall user is an array. If no user is logged in or found, it is empty,
//otherwise it has length 1 and user[0] contains the user structure.
export function getNavLinks(user) {
  //return user.length ? loggedInLinks(user[0]) : TOPNAVBAR_LINKS;
  return TOPNAVBAR_LINKS;
}
