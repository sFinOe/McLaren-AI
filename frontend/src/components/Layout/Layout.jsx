import { AppShell } from "@mantine/core";
import proptypes from "prop-types";

function Layout({ navbar, header, footer, children, nopadding, aside }) {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      navbar={navbar ? navbar : <></>}
      header={header ? header : <></>}
      footer={footer ? footer : <></>}
      aside={aside ? aside : <></>}
      padding={nopadding ? 0 : ""}
    >
      {children}
    </AppShell>
  );
}

Layout.propTypes = {
  children: proptypes.node.isRequired,
  navbar: proptypes.node,
  header: proptypes.node,
  footer: proptypes.node,
  nopadding: proptypes.bool,
  aside: proptypes.node,
};

export default Layout;
