import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import { Row } from 'components/common'
import Dropdown, { DropdownText } from 'components/Dropdown'
import { SignupButton } from 'components/Buttons'
import LogoHeader from 'components/LogoHeader'

const Header = styled(Row)`
  justify-content: space-between;
  height: 110px;
  padding-left: 30px;
  padding-right: 30px;
  width: min(80%, 1400px);
  margin: auto;
  @media screen and (max-width: 600px) {
    width: 480px;
    padding: 0;
  }
  margin-bottom: ${props => props.home ? '80px' : '150px'};
`

const LogoBit = styled(Row)`
  min-width: 205px;
  margin-right: 50px;
  @media screen and (max-width: 600px) {
    margin-right: 0px;
    margin-left: 25px;
  }
`

const LinksBit = styled(Row)`
  width: 100%;
  max-width: 640px;
  justify-content: space-between;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`

const LinksDropdown = styled.div`
  margin-right: 20px;
  @media screen and (min-width: 1400px) {
    display: none;
  }
`

const SignupBit = styled(Row)`
  width: 100%;
  max-width: 200px;
  justify-content: space-between;
  margin-left: 50px;
  @media screen and (max-width: 650px) {
    margin-left: 0;
    justify-content: center;
    max-width: 140px;
  }
`

const SearchButtonContainer = styled.div`
  @media screen and (max-width: 650px) {
    display: none;
  }
`

const NavigatorContainer = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 13;
  background: #ffffff;
  top: 110px;
  left: 30px;
  @media screen and (min-width: 1400px) {
    display: none;
  }
`

const LinksContainer = styled.div`
  width: 70%;
  margin: auto;
  height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`

function Navigator() {
  return (
    <NavigatorContainer>
      <LinksContainer>
        <Link href={'/games'}>
          <a>
            <Dropdown text={'GAMES'} />
          </a>
        </Link>
        <Link href={'/tournaments'}>
          <a>
            <Dropdown text={'TOURNAMENTS'} />
          </a>
        </Link>
        <Link href={'/leaderboards'}>
          <a>
            <Dropdown text={'LEADERBOARDS'} />
          </a>
        </Link>
        <Link href={'/support'}>
          <a>
            <DropdownText>
              SUPPORT
            </DropdownText>
          </a>
        </Link>
      </LinksContainer>
    </NavigatorContainer>
  )
}

export default function _Header({ home }) {
  const [navigatorOpen, setNavigatorOpen] = useState(false)
  const ref = useRef()
  const dropdownRef = useRef()

  useEffect(function() {
    function handleOutsideClick(event) {
      if (
        ref.current 
          && !ref.current.contains(event.target) 
          && !dropdownRef.current.contains(event.target)
      ) 
        setNavigatorOpen(false)
    }
    document.addEventListener('mousedown', handleOutsideClick)

    return function() {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])
  return (
    <Header home={home}>
      <Head>
        <title>Premiere</title>
        <meta 
          name="description" 
          content="Participate in gaming tournaments and receive crypto!" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LogoBit>
        <LinksDropdown 
          ref={dropdownRef}
          onClick={() => setNavigatorOpen(!navigatorOpen)}
        >
          <Image 
            src={
              navigatorOpen 
                ? '/navigator_open.svg' 
                : '/navigator.svg'
            } 
            width={24}
            height={24}
            alt={'navigator'}
          />
        </LinksDropdown>
        <Link href={'/'}>
          <a>
            <LogoHeader />
          </a>
        </Link>
      </LogoBit>
      {
        navigatorOpen &&
          <Navigator ref={ref} />
      }
      <LinksBit>
        <Link href={'/games'}>
          <a>
            <Dropdown text={'GAMES'} />
          </a>
        </Link>
        <Link href={'/tournaments'}>
          <a>
            <Dropdown text={'TOURNAMENTS'} />
          </a>
        </Link>
        <Link href={'/leaderboards'}>
          <a>
            <Dropdown text={'LEADERBOARDS'} />
          </a>
        </Link>
        <Link href={'/support'}>
          <a>
            <DropdownText>
              SUPPORT
            </DropdownText>
          </a>
        </Link>
      </LinksBit>
      <SignupBit>
        <SearchButtonContainer>
          <Image 
            src={'/search.svg'}
            width={32}
            height={32} 
            alt={'search'}
          />
        </SearchButtonContainer>
        <Link href={'/signup'}>
          <a>
            <SignupButton />
          </a>
        </Link>
      </SignupBit>
    </Header>
  )
}

