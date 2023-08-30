import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

import image from '../../public/image.png';

function FirstSection() {
  return (
    <Flex h="100vh" minH="800px" pos="relative" align="center" justify="center" _after={{
      content: `""`,
      position: 'absolute',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}>
      <Image
        src={image}
        alt="Picture of the author"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <Flex direction="column" align="center" textAlign="center" zIndex="2">
        <Heading as="h1" color="white" fontSize="70px" fontWeight="normal" mb="20px">Hi, I'm <Text as="span" fontWeight="bold">Brenno Santos</Text></Heading>
        <Text maxW="640px" color="gray" fontSize="1.25rem" lineHeight="2" mb="1.5rem">
          A Product Designer working at Facebook. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </Text>
        <Link href="/#bottom">
          <Button
            h="3.5rem"
            px="1.5rem"
            bgColor="#57d131"
            color="white"
            fontWeight="normal"
            borderRadius="3.5rem"
            letterSpacing="0.1rem"
            _hover={{
              bgColor: '#4ebe2a'
            }}
            _active={{
              bgColor: '#45a926'
            }}
          >
            MORE ON ME
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export { FirstSection };
