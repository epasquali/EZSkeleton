"use client";

import { IconChevronDown } from "@tabler/icons-react";
import {
  Burger,
  Center,
  Container,
  Group,
  Image,
  Menu,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { getMantineColor } from "../../../utils/themeutils";
import { getNavLinks } from "../../../config/navlinks";

interface NavbarProps {
  variant?: string;
}

export function Navbar({ variant }: NavbarProps) {
  const theme = useMantineTheme();
  const navbarcfg = theme.navbars[variant];
  const navlinks = getNavLinks();

  const [opened, { toggle }] = useDisclosure(false);

  const items = navlinks.map((link) => {
    const menuItems = link.submenu?.map((item) => {
      return (
        <Menu.Item key={item.url}>
          <a href={item.url} className={classes.link}>
            {item.label}
          </a>{" "}
        </Menu.Item>
      );
    });

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
              style={{
                color: navbarcfg?.fontColor
                  ? getMantineColor({ color: navbarcfg?.fontColor, theme })
                  : "",
                "--navlink-hover-bg": navbarcfg?.hoverbg
                  ? getMantineColor({ color: navbarcfg?.hoverbg, theme })
                  : "",
              }}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
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
  });

  return (
    <header
      className={classes.header}
      style={{
        backgroundColor: navbarcfg?.bgColor
          ? getMantineColor({ color: navbarcfg?.bgColor, theme })
          : "",
      }}
    >
      <Container size={"97%"}>
        <div className={classes.inner}>
          <Image src="/fishbonewhite.png" alt="EZSkeleton logo" h={"30px"} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
