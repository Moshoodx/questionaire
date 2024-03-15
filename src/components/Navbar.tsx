'use client'

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export function Navbar() {
  const pathname = usePathname();
  const shouldBeAlternate = !['/'].includes(pathname);

  const colorModeValue = shouldBeAlternate ? 'var(--primary-color)' : 'var(--fourth-color)';

  return (
    <>
      <Box w={'100%'} bg={colorModeValue} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link color={shouldBeAlternate ? 'var(--fourth-color)' : 'var(--primary-color)'} _hover={{ textDecoration: 'none' }} href={'/'} fontWeight={600} fontSize={24} letterSpacing={-1.3}>QUESTIONAIRE</Link>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}

              <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}
              >
                {/* <Button
                  as={'a'}
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize={'md'}
                  fontWeight={600}
                  color={'white'}
                  bg={'var(--secondary-color)'}
                  href={'#'}
                  _hover={{
                    bg: 'var(--secondary-color)'
                  }}
                >
                  Continue Quiz
                </Button> */}
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
