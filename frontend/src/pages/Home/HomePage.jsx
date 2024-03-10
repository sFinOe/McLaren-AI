import Layout from "@components/Layout/Layout";
import { Button, Center, Image, Stack, Text } from "@mantine/core";
import HomeHeader from "@components/Header/HomeHeader";
import Styles from "./HomePage.module.css";
import HomeFooter from "@components/Footer/HomeFooter";

function HomePage() {
  return (
    <Layout header={<HomeHeader />} footer={<HomeFooter />}>
      <Center h="calc(100vh - 180px)">
        <Stack>
          <Text fz="xl" fw={500}>
            Transform into your favorite Arrow McLaren driver with rthe power of AI.
          </Text>
          <Image src="https://picsum.photos/500/250" alt="Arrow McLaren" />
          <Center>
            <Button size="xl" className={Styles.btn_css} radius={0}>
              START
            </Button>
          </Center>
        </Stack>
      </Center>
    </Layout>
  );
}

export default HomePage;
