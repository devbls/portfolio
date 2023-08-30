import { Link, Flex, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link';

function Navbar() {
	return (
		<Flex as="nav" h="inherit" position="relative" align="center" justify="center" zIndex="2" color="white" textTransform="uppercase">
      <Flex as={NextLink} href="/#top" p="0.75rem" align="center" justify="center" position="absolute" my="auto" left="8%" border="1px solid white" letterSpacing="0.2rem">
        devbls
      </Flex>
			<Stack direction="row" spacing={9} letterSpacing="0.2rem">
				<Text as={NextLink} href="/#top">Home</Text>
				<Text>About</Text>
				<Text>Portfolio</Text>
				<Text>Resume</Text>
				<Text>Contact</Text>
			</Stack>
		</Flex>
	);
}

export { Navbar };