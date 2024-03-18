import Layout from "@components/Layout/Layout";
import { ActionIcon, AspectRatio, Button, Center, Checkbox, Flex, Group, Image, Select, Stack, Text, TextInput } from "@mantine/core";
import HomeHeader from "@components/Header/HomeHeader";
import HomeFooter from "@components/Footer/HomeFooter";
import Styles from "./PreviewPage.module.css";
import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";

function PreviewPage() {
  const images = ["/images/McLaren_Car_5.png", "/images/McLaren_Car_6.png", "/images/McLaren_Car_7.png"];

  const slides = images.map((image, i) => (
    <Carousel.Slide key={i}>
      <Image src={image} />
    </Carousel.Slide>
  ));

  return (
    <Layout header={<HomeHeader />} footer={<HomeFooter />}>
      <Center my="xl">
        <Stack align="center" spacing={30} w="100%">
          <div className={Styles.img_border}>
            <AspectRatio ratio={512 / 612} w="100%" h="100%" mx="auto">
              <div>
                <Image src="https://picsum.photos/500/612" alt="Arrow McLaren" />
              </div>
            </AspectRatio>
          </div>
          <Stack>
            <Flex gap="lg">
              <div>
                <Text size="xl" weight={600}>
                  FULL NAME:
                </Text>
                <TextInput label={null} placeholder="Enter your name" className={Styles.input_css} />
              </div>
              <div>
                <Text size="xl" weight={600}>
                  EMAIL:
                </Text>
                <TextInput label={null} placeholder="Enter your email" className={Styles.input_css} />
              </div>
            </Flex>
            <Checkbox label="I agree to the privacy policy and to receiving promotional emails from Arrow McLaren." radius={0} size="xs" />
          </Stack>
          <div>
            <Text align="center" size={25} weight={600}>
              Select a Car:
            </Text>
            <Carousel
              withIndicators
              loop
              classNames={{
                root: Styles.carousel,
                controls: Styles.carouselControls,
                indicator: Styles.carouselIndicator,
              }}
            >
              {slides}
            </Carousel>
          </div>
          <Link to="/result">
            <Button size="xl" className={Styles.btn_css} radius={0}>
              LET'S GO!
            </Button>
          </Link>
        </Stack>
      </Center>
    </Layout>
  );
}

export default PreviewPage;
