import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, LinkExternal, Flex } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
background-image: url('/images/egg/meta.png');
background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
 
`

const Block = styled.div`
  margin-bottom: 16px;
`

const TokenImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

const CardImage = styled.img`
  margin-bottom: 0px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const token = getCakeAddress();

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const FarmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = FarmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

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
    <StyledFarmStakingCard>
      <CardBody margin={24}>
        <Heading size="xl" mb="24px">
          About Frog
        </Heading>
        <TokenImageWrapper>
          <CardImage src="/images/egg/9.png" alt="Farm honest logo" width={60} height={60} />
          <hr />
          <Wrapper>
            <Button as="a" target="_blank" rel="noopener noreferrer" href="https://app.gitbook.com/@honest-team/s/honestwork-farms/" size="sm">
              Docs
            </Button>
            <Button as="a" target="_blank" rel="noopener noreferrer" href="https://app.gitbook.com/@honest-team/s/honestwork-farms/token/becoming-an-honest-farmer" size="sm">
              Buy Now
            </Button>
          </Wrapper>
        </TokenImageWrapper>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard