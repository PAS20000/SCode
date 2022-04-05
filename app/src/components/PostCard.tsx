import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  useDisclosure,
  ModalOverlay,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  Flex
} from '@chakra-ui/react';

export default function PostCard({  
  post_id,
  postDetails,
  postTitle, 
  postDescription,
  postImage,
  postDate
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Center py={12} as={'article'}>
      <Box onClick={onOpen}
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        _hover={{
          cursor: 'pointer'
        }}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${postImage ? postImage:'/img/digital_art.jpg'})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
          >
          <Image
            rounded={'lg'}
            height={250}
            width={282}
            objectFit={'cover'}
            src={postImage ? postImage:'/img/digital_art.jpg'}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {postDate}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={700} textTransform={'uppercase'} color={useColorModeValue('cyan.500','purple.300')}>
            {postTitle}
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {postDetails}
          </Text>
        </Stack>
      </Box>
      <Modal onClose={onClose} size={'6xl'} isOpen={isOpen}>
        <ModalOverlay/>
        <ModalContent bgColor={useColorModeValue('white', 'gray.900')} backgroundImage={`url(${postImage})`}>
          <ModalHeader>
          </ModalHeader>
          <ModalCloseButton color={'blackAlpha.900'}/>
          <ModalBody>
         
          <Flex align={'center'}>
            <Center flexWrap={'wrap'} boxShadow={'dark-lg'} background={useColorModeValue('white','gray.900')}>
                  <Heading textTransform={'uppercase'} p={5}>
                    {postTitle} {postDate}
                  </Heading>
                  <Text p={5}>{postDescription}</Text>
              </Center>
           </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme={'red'}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}