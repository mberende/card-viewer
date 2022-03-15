import type { NextPage } from 'next';
import { MainLayout } from '@/components/layouts/main';
import { Heading, VStack, Text } from '@chakra-ui/react';

const Other: NextPage = () => {
  return (
    <MainLayout>
      <VStack width="100%" height="100%">
        <Heading> Some title here </Heading>
        <Text>
          Some dummy content here dummy content here dummy content here dummy
          content here
        </Text>
      </VStack>
    </MainLayout>
  );
};

export default Other;
