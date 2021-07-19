import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x4da646b71014332ae8370017d05205346d3ca50a',
      },
      {
        label: 'Liquidity',
        href:
          'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x4da646b71014332ae8370017d05205346d3ca50a',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Barn',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: '/nft',
  },

  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap Chart',
        href: 'https://info.quickswap.exchange/token/0x4dA646B71014332AE8370017d05205346d3ca50A',
      },
      {
        label: 'Polygon Explorer',
        href: 'https://polygonscan.com/token/0x4dA646B71014332AE8370017d05205346d3ca50A',
      },
      {
        label: 'honest Chart',
        href: 'https://quickchart.app/token/0x4dA646B71014332AE8370017d05205346d3ca50A',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/HonestWorkFarm/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@honestwork',
      },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@honest-team/s/honestwork-farms/',
      },
    ],
  },
  {
    label: 'GMO HARVESTS',
    icon: 'RoadmapIcon',
    href: 'https://app.gitbook.com/@honest-team/s/honestwork-farms/token/farm-pumpamentals',
  },
  {
    label: 'Collab',
    icon: 'HandshakeIcon',
    href: 'https://t.me/honestworkfarms',
  },
]

export default config
