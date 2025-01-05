"use client";
import { Container, Group, Image, useMantineTheme } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { getMantineColor } from "../../../utils/themeutils";
import { NavLinks } from "../NavLinks/NavLinks";
import { HamburgerMenu } from "../HamburgerMenu";

interface NavbarProps {
  variant?: string;
}

export function Navbar({ variant }: NavbarProps) {
  const theme = useMantineTheme();
  const navbarcfg = theme.navbars[variant];
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [opened, { toggle }] = useDisclosure(false);

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
            <NavLinks variant={variant} />
          </Group>

          {isMobile && (
            <HamburgerMenu opened={opened} toggle={toggle} variant={variant} />
          )}
        </div>
      </Container>
    </header>
  );
}
