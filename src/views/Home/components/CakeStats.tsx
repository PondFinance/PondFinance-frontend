import React, {useCallback} from 'react'
import { Card, CardBody, Heading, Text, LinkExternal, Button } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd, usePriceCakeBnb } from '../../../state/hooks'
import rug from  './rug.png'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background-image: url('/images/egg/stats.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
    min-width: 10%;
  min-height: 10%;
  width: 100%;
  height: auto;
  
  
  
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  justify-content: 'space-between';
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const token = getCakeAddress();

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);
  let honestPerBlock = 0;
  const burnValue = eggPrice.times(burnedBalance);
  const cakePrice = usePriceCakeBusd();
  if(farms && farms[0] && farms[0].honestPerBlock){
    honestPerBlock = new BigNumber(farms[0].honestPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  const addWatchJaguarToken = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const provider = window.ethereum
    if (provider) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: token,
              symbol: 'honest',
              decimals: '18',
              image: '/logo.png',
            },
          },
        })

        if (wasAdded) {
          console.log('Token was added')
        }
      } catch (error) {
        // TODO: find a way to handle when the user rejects transaction or it fails
      }
    }
  }, [])


  return (
    <StyledCakeStats>
      <CardBody margin={24}>
        <Heading size="xl" mb="24px">
        Frog Stats
        </Heading>
        <Row>
          <Text fontSize="14px">honest Price</Text>
          <CardValue fontSize="14px" value={eggPrice.toNumber()} decimals={2} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">Total Supply</Text>
          <Text bold fontSize="14px">{getBalanceNumber(totalSupply)}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">Circulating Supply</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">Tokens to be farmed</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px"> Frog/block</Text>
          <Text bold fontSize="14px">{honestPerBlock}</Text>
        </Row>
        <Row style={{marginTop: '24px'}}>
          <LinkExternal small href={`https://polygonscan.com/token/${token}`}>
            {token}
          </LinkExternal>
        </Row>
        <Wrapper>
          <a href="https://rugdoc.io/project/honest-farms/" target="_blank" rel="noopener noreferrer">
            <img width="155px" src={rug} alt="rug"/>
          </a>
          <Button onClick={addWatchJaguarToken} size="sm">
            + Add Frog to <img style={{ marginLeft: 8 }} width={16} src="https://jaguarswap.com/images/tokens/metamask.png" alt="metamask logo" />
          </Button>
          </Wrapper>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
