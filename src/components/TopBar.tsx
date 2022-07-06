
import React from 'react'
import { Outlet } from 'react-router-dom'

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
  Spacer,
  CloseButton,
  AbsoluteCenter,
} from '@chakra-ui/react';



import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { createIcon } from '@chakra-ui/icons'

// using `path`
export const CircleIcon = createIcon({
  displayName: 'circleIcon',
  viewBox: '0 0 428 774',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      d="M147.5 724.5C60.4724 665.774 13 583 0.363159 499.5V0H472V758.322C407.988 771.319 253.115 795.768 147.5 724.5Z"
      fill="#FECB33" />
  ),
})

type Props = {}

const TopBar = (props: Props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
      <>
      <Box bg='black' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>B@B</Box>
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton
                color='white'
              bg='black'
              colorScheme = 'blackAlpha'
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
                />
            
          </Flex>
        </Flex>
      </Box>
     
        <Box>
          {isOpen ? (<CircleIcon boxSize={550} position="absolute">
          </CircleIcon>) : <></>}
        </Box>
        <Box>
          {isOpen ? <CloseButton size='md' color='white' />: <></>}
        </Box>
        
      <Outlet/>
    </>
  );
}
  

export default TopBar
