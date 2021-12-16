import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Fonts from '../components/fonts'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/lightsaber${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Fonts />
          <Text>
            Preston Segura
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo