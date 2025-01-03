import { Flex } from "@mantine/core";
import { Navbar } from "./Navbar/Navbar";
import { Copyright } from "./Copyright";

import "./layout.css";

/*export function PageLayout({ children }) {
  return (
    <>
      <NavBar bgcolor="gray.700" color="gray.50" />
      <div className="page-bg">
        <Alerts />
        <Flex minH={"60vh"} bg="gray.50" align={"top"} justify={"center"}>
          {children}
        </Flex>
      </div>
      <MidFooter />
      <Footer />
    </>
  );
}*/

export function PageLayout({ children }) {
  return (
    <>
      <Navbar variant={"standardpage"} />
      <div className="page-bg">
        <Flex mih={"70vh"} bg={"gray.0"} align={"center"} justify={"center"}>
          {children}
        </Flex>
      </div>
      <Copyright />
    </>
  );
}
