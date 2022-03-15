import { FC, useCallback, useContext } from 'react';
import { Box, Button, Flex, Heading, Spacer, VStack } from '@chakra-ui/react';
import sanitizeHtml from 'sanitize-html';
import { ICard, CardListContext } from '../../../../context/CardListContex';

const CardItem: FC<ICard> = (props) => {
  const { removeItem, up, down } = useContext(CardListContext);
  const { _id, title, date, descr } = props;

  const upHandler = useCallback(
    (id) => {
      up(id);
    },
    [up]
  );

  const downHandler = useCallback(
    (id) => {
      down(id);
    },
    [down]
  );

  const removeHandler = useCallback(
    (id) => {
      removeItem(id);
    },
    [removeItem]
  );

  return (
    <VStack width="100%">
      <Flex width="100%">
        <Box p={4}>
          <Heading as={'h5'} fontSize="lg">
            {title}
          </Heading>
        </Box>
        <Spacer />
        <Box p={4}>{new Date(date).toLocaleString()}</Box>
      </Flex>
      <Box
        width="100%"
        fontSize="md"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(descr),
        }}
      />
      <Flex width="100%" justifyContent="flex-end">
        <Button
          onClick={() => upHandler(_id)}
          size="md"
          colorScheme="red"
          variant="outline"
          m={2}
        >
          Move Up
        </Button>
        <Button
          size="md"
          colorScheme="red"
          variant="outline"
          m={2}
          onClick={() => downHandler(_id)}
        >
          Move Down
        </Button>
        <Button
          size="md"
          colorScheme="red"
          variant="outline"
          m={2}
          onClick={() => {
            removeHandler(_id);
          }}
        >
          Remove
        </Button>
      </Flex>
    </VStack>
  );
};

export { CardItem };
