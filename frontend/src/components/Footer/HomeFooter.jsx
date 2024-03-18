import React from "react";
import { Center, Footer, Group, Anchor, Text, Flex, ActionIcon } from "@mantine/core";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function HomeFooter() {
  return (
    <Footer height={60} p="md">
      <Center>
        <Flex gap={45} align="center">
          <Group spacing="sm">
            <Anchor href="https://facebook.com/#" target="_blank">
              <FaFacebook size="1.4rem" color="var(--primary-color)" />
            </Anchor>
            <Anchor href="https://twitter.com/#" target="_blank">
              <FaXTwitter size="1.4rem" color="var(--primary-color)" />
            </Anchor>
            <Anchor href="https://www.instagram.com/#" target="_blank">
              <FaInstagram size="1.4rem" color="var(--primary-color)" />
            </Anchor>
            <Anchor href="https://www.tiktok.com/#" target="_blank">
              <FaTiktok size="1.4rem" color="var(--primary-color)" />
            </Anchor>
          </Group>
          <Text color="var(--text-color)" size="sm">
            © 2024 McLaren Racing Limited.
          </Text>
          <Group spacing={8}>
            <Anchor href="https://www.mclaren.com/" target="_blank" color="var(--text-color)" size="xs">
              TERMS OF USE
            </Anchor>
            <Anchor href="https://www.mclaren.com/" target="_blank" color="var(--text-color)" size="xs">
              PRIVACY POLICY
            </Anchor>
            <Anchor href="https://www.mclaren.com/" target="_blank" color="var(--text-color)" size="xs">
              COOKIE POLICY
            </Anchor>
          </Group>
        </Flex>
      </Center>
    </Footer>
  );
}

export default HomeFooter;
