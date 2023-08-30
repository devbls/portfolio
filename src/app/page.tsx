'use client'

import { Box, Flex } from "@chakra-ui/react";

import { Navbar } from "@/components/Navbar";
import { FirstSection } from "@/components/FirstSection";

export default function Home() {
  return (
    <Flex w="100%" id="top" direction="column">
      <Box h="4rem" w="100%" position="absolute" mt="1rem">
        <Navbar />
      </Box>
      <FirstSection />
    </Flex>
  )
}
