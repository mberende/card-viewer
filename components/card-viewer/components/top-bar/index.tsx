import { FC, useContext } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Button,
  FormControl,
  FormErrorMessage,
  Icon,
} from '@chakra-ui/react';

import { CardListContext } from '../../../../context/CardListContex';
import { useForm } from 'react-hook-form';
import { FileUpload } from '@/components/card-viewer/components/file-upload';
import { FiFile } from 'react-icons/fi';

type FormValues = {
  file_: FileList;
};

const validateFiles = (value: FileList) => {
  // console.log(value);
  if (value.length < 1) {
    return 'Files is required';
  }
  return true;
};

const TopBar: FC<{}> = () => {
  const { clearList, addItems } = useContext(CardListContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const readJson = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      if (typeof event.target.result === 'string') {
        const payload = JSON.parse(event.target.result);
        // console.log(payload);
        addItems(payload);
      }
    });
    reader.readAsText(file);
  };

  const onSubmit = handleSubmit((data) => {
    const fileList = data.file_ as FileList;
    const list = Array.from(fileList);
    list.forEach((file) => readJson(file));
  });

  return (
    <Flex>
      <Box p="4">
        <form onSubmit={onSubmit}>
          <Flex>
            <FormControl isInvalid={!!errors.file_} isRequired>
              <FileUpload
                accept={'application/JSON'}
                multiple
                register={register('file_', { validate: validateFiles })}
              >
                <Button leftIcon={<Icon as={FiFile} />}>Upload</Button>
              </FileUpload>
              <FormErrorMessage>
                {errors.file_ && errors?.file_.message}
              </FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="red">
              Import
            </Button>
          </Flex>
        </form>
      </Box>
      <Spacer />
      <Box p="4">
        <Button onClick={() => clearList()} colorScheme={'red'}>
          Clear Data
        </Button>
      </Box>
    </Flex>
  );
};

export { TopBar };
