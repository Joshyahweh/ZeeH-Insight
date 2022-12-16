import "../styles/globals.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebarr from "components/global/Sidebar";
import Topbar from "components/global/Topbar";
import UserSidebar from "userComponent/Settings/Global/UserSidebar";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <ProSidebarProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ProSidebarProvider>
  );
}

export default MyApp;
