import {
  SimpleGrid,
  Box,
  Flex,
  Text,
  Link as StyledLink,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Project = ({
  image,
  text,
  page,
}: {
  image: string;
  text: string;
  page: string;
}) => (
  <Flex flexDirection="column" alignItems="center" justifyContent="center">
    <Box as="figure">
      <Image src={image} height="380px" width="900px" objectFit="cover" />
    </Box>
    <Text>{text}</Text>
    <Link href={page}>
      <StyledLink>View Project</StyledLink>
    </Link>
  </Flex>
);
export default function Projects() {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} pt="1.5rem">
        <Project
          image="/lilyanneMockup.png"
          text="a blog for my dear friend lilyanne"
          page="/lilyanneproject"
        />
        <Project
          image="/eargasmMockup.png"
          text="A music website"
          page="eargasm"
        />
      </SimpleGrid>
    </>
  );
}
