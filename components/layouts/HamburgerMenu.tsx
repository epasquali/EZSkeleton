import { Burger, Menu } from "@mantine/core";
import { NavLinks } from "./NavLinks/NavLinks";

interface HamburgerMenuProps {
  opened: boolean;
  toggle: () => void;
  variant: string;
}

export function HamburgerMenu({ opened, toggle, variant }: HamburgerMenuProps) {
  return (
    <div>
      <Menu
        opened={opened}
        onClose={toggle}
        transitionProps={{ exitDuration: 0 }}
        withArrow
        position="bottom"
      >
        <Menu.Target>
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Menu.Target>
        <Menu.Dropdown>
          <NavLinks variant={variant} />
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
