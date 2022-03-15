import { type FC } from 'react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import {
  HStack,
  VStack,
  Heading,
  Box,
  Flex,
  type FlexProps,
} from '@chakra-ui/react';

interface ICardsLayout {
  children: React.ReactNode;
}

const NavBar: FC<{}> = () => {
  return (
    <Box as={'header'} bg="blue.200" color={'white'} p={4}>
      <nav>
        <Heading as="h3"> Cards Viewer </Heading>
      </nav>
    </Box>
  );
};

const LeftMenu: FC<{}> = () => {
  return (
    <ul style={{ listStyleType: 'none' }}>
      <li>
        <NextLink href={'/'} passHref>
          <Link>Card Viewer</Link>
        </NextLink>
      </li>
      <li>
        <NextLink href={'/other-page'} passHref>
          <Link>Other page</Link>
        </NextLink>
      </li>
    </ul>
  );
};

const MainLayout: FC<ICardsLayout> = (props) => {
  const { children } = props;
  const commonStylingProps: FlexProps = {
    alignItems: 'flex-start',
    minWidth: 'container.xs',
    height: 'full',
    marginInlineStart: '0px',
    overflowY: 'auto',
  };

  return (
    <>
      <NavBar />
      <HStack
        height="100vh"
        alignItems="flex-start"
        flexWrap="wrap"
        spacing={0}
      >
        <Flex
          as="aside"
          {...commonStylingProps}
          flexBasis={{ base: '100%', lg: '15%' }}
          height="100vh"
          width="full"
          padding={4}
          bg="gray.200"
          alignItems={'flex-start'}
        >
          <LeftMenu />
        </Flex>
        <Flex
          as="main"
          {...commonStylingProps}
          flexBasis={{ base: '100%', lg: '85%' }}
          p={10}
          bg={'gray.100'}
        >
          {children}
        </Flex>
      </HStack>
    </>
  );
};

export { MainLayout };
