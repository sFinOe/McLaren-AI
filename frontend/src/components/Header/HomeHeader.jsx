import { Flex, Header } from "@mantine/core";
import Styles from "./HomeHeader.module.css";

function HomeHeader() {
  return (
    <Header height={{ base: 70 }}>
      <Flex h="100%" px="md" bg="var(--secondary-color)" align="center">
        <img src="/images/McLaren_Logo.png" alt="McLaren Logo" width="120px" />
      </Flex>
    </Header>
  );
}

export default HomeHeader;
