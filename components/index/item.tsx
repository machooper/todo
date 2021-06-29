import { Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Item({ url, icon, heading, text }) {
  return (
    <Link href={url} passHref>
      <Stack
        direction="row"
        justify="space-around"
        align="center"
        w="85vw"
        border="1px"
        borderColor="gray.200"
        shadow="md"
        p=".5rem"
      >
        {icon}
        <Stack w="80%">
          <Heading fontSize="20px">{heading}</Heading>
          <Text maxW="100%">{text}</Text>
        </Stack>
      </Stack>
    </Link>
  );
}
