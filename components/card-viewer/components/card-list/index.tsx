import { FC, useContext } from 'react';
import { VStack } from '@chakra-ui/react';
import { CardItem } from '@/components/card-viewer/components/card-item';
import { useCardListContext } from '../../../../lib/hooks/CardListContext';

const CardList: FC<{}> = () => {
  const { list } = useCardListContext();

  return (
    <VStack width="100%">
      {list.map(
        (item) => item.shouldBeShown && <CardItem {...item} key={item._id} />
      )}
    </VStack>
  );
};

export { CardList };
