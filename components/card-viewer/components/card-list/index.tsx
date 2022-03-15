import { FC, useContext } from 'react';
import { VStack } from '@chakra-ui/react';
import { CardItem } from '@/components/card-viewer/components/card-item';
import { CardListContext } from '../../../../context/CardListContex';

const CardList: FC<{}> = () => {
  const { list } = useContext(CardListContext);

  return (
    <VStack width="100%">
      {list.map((item) => (
        <CardItem {...item} key={item._id} />
      ))}
    </VStack>
  );
};

export { CardList };
