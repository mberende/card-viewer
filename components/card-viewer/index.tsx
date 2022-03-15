import { type FC } from 'react';
import { Box } from '@chakra-ui/react';
import { CardList } from './components/card-list';
import { CardListContextProvider } from '../../context/CardListContex';
import { TopBar } from '@/components/card-viewer/components/top-bar';

const CardViewer: FC<{}> = () => {
  return (
    <CardListContextProvider>
      <Box width="100%" height="100%">
        <TopBar />
        <CardList />
      </Box>
    </CardListContextProvider>
  );
};

export { CardViewer };
