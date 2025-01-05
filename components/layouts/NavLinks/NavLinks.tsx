import { Menu, useMantineTheme } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./NavLinks.module.css";
import { getNavLinks } from "../../../config/navlinks";
import { getMantineColor } from "../../../utils/themeutils";

interface NavbarProps {
  variant?: string;
}

export function NavLinks({ variant }: NavbarProps) {
  const theme = useMantineTheme();
  const navbarcfg = theme.navbars[variant];
  const navlinks = getNavLinks();

  return (
    <>
      {navlinks.map((link: any) => {
        const menuItems = link.submenu?.map((item: any) => (
          <Menu.Item key={item.url}>
            <a
              href={item.url}
              className={classes.link}
              /*style={{
                color: navbarcfg?.fontColor
                  ? getMantineColor({ color: navbarcfg?.fontColor, theme })
                  : "",
                "--navlink-hover-bg": navbarcfg?.hoverbg
                  ? getMantineColor({ color: navbarcfg?.hoverbg, theme })
                  : "",
              }}*/
            >
              {item.label}
            </a>
          </Menu.Item>
        ));

        if (menuItems) {
          return (
            <Menu
              key={link.label}
              trigger="hover"
              transitionProps={{ exitDuration: 0 }}
              withinPortal
            >
              <Menu.Target>
                <a
                  href={link.url}
                  className={classes.link}
                  //onClick={(event) => event.preventDefault()}
                  style={{
                    color: navbarcfg?.fontColor
                      ? getMantineColor({ color: navbarcfg?.fontColor, theme })
                      : "",
                    "--navlink-hover-bg": navbarcfg?.hoverbg
                      ? getMantineColor({ color: navbarcfg?.hoverbg, theme })
                      : "",
                  }}
                >
                  <span>{link.label}</span>
                  <IconChevronDown size={14} stroke={1.5} />
                </a>
              </Menu.Target>
              <Menu.Dropdown>{menuItems}</Menu.Dropdown>
            </Menu>
          );
        }

        return (
          <a
            key={link.label}
            href={link.url}
            className={classes.link}
            style={{
              color: navbarcfg?.fontColor
                ? getMantineColor({ color: navbarcfg?.fontColor, theme })
                : "",
              "--navlink-hover-bg": navbarcfg?.hoverbg
                ? getMantineColor({ color: navbarcfg?.hoverbg, theme })
                : "",
            }}
          >
            {link.label}
          </a>
        );
      })}
    </>
  );
}
