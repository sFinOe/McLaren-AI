import Layout from "@components/Layout/Layout";
import { ActionIcon, Button, Center, Group, Image, Stack, Text } from "@mantine/core";
import HomeHeader from "@components/Header/HomeHeader";
import HomeFooter from "@components/Footer/HomeFooter";
import { IoCameraOutline } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import Styles from "./UploadPage.module.css";
import { Link } from "react-router-dom";

function UploadPage() {
  return (
    <Layout header={<HomeHeader />} footer={<HomeFooter />}>
      <Center h="calc(100vh - 180px)">
        <Stack align="center" spacing={40}>
          <Text fz={30} fw={500} align="center">
            Take a{" "}
            <span
              style={{
                color: "var(--primary-color)",
              }}
            >
              photo
            </span>{" "}
            of yourself or{" "}
            <span
              style={{
                color: "var(--primary-color)",
              }}
            >
              upload
            </span>{" "}
            from camera roll.
          </Text>
          <Group spacing="xl">
            <Link to="/preview">
              <ActionIcon size={70} className={Styles.icon_bn}>
                <IoCameraOutline size="2.7rem" />
              </ActionIcon>
            </Link>
            <ActionIcon size={70} className={Styles.icon_bn}>
              <LuUpload size="2.4rem" />
            </ActionIcon>
          </Group>
          <Stack spacing="sm">
            <Text fz={30} fw={500} align="center" color="var(--primary-color)">
              Tip:
            </Text>
            <Center bg="var(--secondary-color)" radius="xs" p={30}>
              <Text fz={24} align="center">
                For best results, ensure your subject us well-lit and in frame.
              </Text>
            </Center>
          </Stack>
        </Stack>
      </Center>
    </Layout>
  );
}

export default UploadPage;
