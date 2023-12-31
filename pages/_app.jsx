import "../styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';


import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrumGoerli,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Head from "next/head";



const { chains, publicClient } = configureChains(
  [arbitrumGoerli],
  [
    alchemyProvider({ apiKey: 'PsfIj_6vxe_rJAOhPRLHFckTks7FtSU-' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'CRIOS',
  projectId: '9083bfd6b337025d4bf01df35955785d',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})



function MyApp({ Component, pageProps }) {
  
  return (
    <>
    
      <Head>
        <title>Crios Finance</title>
        <meta
          name="description"
          content="A decentralized DeFi protocol for lending and borrowing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider  chains={chains}>
        <Component {...pageProps} />
        </RainbowKitProvider>
        </WagmiConfig>
        

    </>
  );
}

export default MyApp;
