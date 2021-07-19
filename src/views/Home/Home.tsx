import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import { Image, Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import rot13 from '../../utils/encode'
// import LotteryCard from './components/LotteryCard'
import { isAddress } from '../../utils/web3'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import EarnAPRCard from './components/EarnAPRCard'
import EarnAssetCard from './components/EarnAssetCard'
import WinCard from './components/WinCard'
import MetaMask from './components/Metamask'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/3a.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 50px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/home.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-width: 10%;
    min-height: 10%;
    width: 100%;
    height: 10%;

    align-items: center;
    display: flex;
    flex: 1;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 72px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const BannerContainer = styled.div`
  background: #e78d45;
  border-radius: 24px;
  padding: 12px;
  margin: 24px;
`

const BannerContent = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 24px;
`

const BannerLink = styled.a`
  color: #fff;
  margin: 24px 0px;
  text-align: center;
  font-size: 18px;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const cookies = new Cookies()
  const aint = "It ain't much but it's Honest Work"

  return (
    <Page>
      <BannerContainer>
        <BannerContent>
          <BannerLink href="https://polygonscan.com/block/16605000">
            <u>Click here To get the countdown until farming starts</u>
          </BannerLink>
        </BannerContent>
      </BannerContainer>
      <div>
        <Cards>
          <FarmStakingCard />
          <CakeStats />
        </Cards>
        <Cards>
          <TotalValueLockedCard />
          <MetaMask />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
