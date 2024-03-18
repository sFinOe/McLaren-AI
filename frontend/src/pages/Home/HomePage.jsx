import Layout from "@components/Layout/Layout";
import { Button, Center, Image, Stack, Text } from "@mantine/core";
import HomeHeader from "@components/Header/HomeHeader";
import Styles from "./HomePage.module.css";
import HomeFooter from "@components/Footer/HomeFooter";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Layout header={<HomeHeader />} footer={<HomeFooter />}>
      <Center h="calc(100vh - 180px)">
        <Stack align="center" spacing={40}>
          <Text fz={30} fw={500} align="center">
            Transform into your favorite{" "}
            <span
              style={{
                color: "var(--primary-color)",
              }}
            >
              Arrow McLaren
            </span>{" "}
            driver with the power of{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              AI
            </span>
            .
          </Text>
          <div className={Styles.img_border}>
            <Image src="https://picsum.photos/500" alt="Arrow McLaren" width={550} height={300} />
          </div>
          <Center>
            <Link to="/upload">
              <Button size="xl" className={Styles.btn_css} radius={0}>
                START
              </Button>
            </Link>
          </Center>
        </Stack>
      </Center>
    </Layout>
  );
}

export default HomePage;
