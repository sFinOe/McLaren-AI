import Layout from "@components/Layout/Layout";
import { ActionIcon, AspectRatio, Button, Center, Checkbox, Flex, Group, Image, Select, Stack, Text, TextInput } from "@mantine/core";
import HomeHeader from "@components/Header/HomeHeader";
import HomeFooter from "@components/Footer/HomeFooter";
import Styles from "./ResultPage.module.css";
import { Link } from "react-router-dom";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { TbReload } from "react-icons/tb";

function ResultPage() {
  return (
    <Layout header={<HomeHeader />} footer={<HomeFooter />}>
      <Center my="xl">
        <Stack align="center" spacing={30} w="100%">
          <div className={Styles.img_border}>
            <AspectRatio ratio={512 / 612} w="100%" h="100%" mx="auto">
              <div>
                <Image src="/images/McLaren_5_Top.png" alt="Arrow McLaren" />
              </div>
            </AspectRatio>
          </div>
          <Text size={35} weight={600}>
            <span
              style={{
                color: "var(--primary-color)",
              }}
            >
              SHARE
            </span>{" "}
            YOUR NEW LOOK!
          </Text>
          <Group spacing="xl">
            <Link to="/preview">
              <ActionIcon size={70} className={Styles.icon_bn}>
                <FaRegShareFromSquare size="2.7rem" />
              </ActionIcon>
            </Link>
            <ActionIcon size={70} className={Styles.icon_bn}>
              <LuDownload size="2.4rem" />
            </ActionIcon>
          </Group>
          <Image src="/images/poster.png" alt="Arrow McLaren" />
          <Stack spacing="xs" align="center">
            <Text size={35} weight={400}>
              CUSTOM POSTER (16x20)
            </Text>
            <Text size={35} weight={400}>
              $21.99
            </Text>
          </Stack>
          <Link to="/result">
            <Button size="xl" className={Styles.btn_css} radius={0}>
              GET NOW
            </Button>
          </Link>
          <Stack bg="var(--secondary-color)" radius="xs" p={30} align="center">
            <Text fz={24} align="center">
              Not happy? Try again!
            </Text>
            <ActionIcon size={70} className={Styles.icon_bn_2} radius="xl">
              <TbReload size="2.4rem" />
            </ActionIcon>
          </Stack>
        </Stack>
      </Center>
    </Layout>
  );
}

export default ResultPage;
