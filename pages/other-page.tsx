import type { NextPage } from 'next';

import { MainLayout } from '@/components/layouts/main';

import { Heading, Box, Text } from '@chakra-ui/react';

const Other: NextPage = () => {
  return (
    <MainLayout>
      <Box as="main" width="100%" height="100%">
        <Heading> Some title here </Heading>
        <Text>
          Some dummy content here dummy content here dummy content here dummy
          content here
        </Text>
      </Box>
    </MainLayout>
  );
};

export default Other;
