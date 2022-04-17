import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import Link from "next/link";


const Home: NextPage = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);

  const web3ModalRef: any = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
     setAccount(await web3Provider.getSigner().getAddress());

    // If user is not connected to the Rinkeby network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      alert("Change the network to Rinkeby");
      throw new Error("Change network to Rinkeby");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

     useEffect(() => {
       // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
       if (!walletConnected) {
         // Assign the Web3Modal class to the reference object by setting it's `current` value
         // The `current` value is persisted throughout as long as this page is open
         web3ModalRef.current = new Web3Modal({
           network: "rinkeby",
           providerOptions: {},
          //  disableInjectedProvider: false,
         });
        //  connectWallet();
       }
     }, [walletConnected]);

  return (
    <div>
      <Head>NFT-Lottery-Dapp</Head>
      <main className="px-4">
        <div className="pt-10">
          <h1 className="text-center mb-10 font-semibold text-3xl text-red-500">
            Welcome To The NFT-Lottery Exchange
          </h1>
        </div>
        <img
          src="./bunny.png"
          alt=""
          width="200"
          height="200"
          className="mx-auto mb-10"
        />
        <div className="flex flex-col flex-1 mb-40">
          <h2 className="font-semibold text-5xl text-red-500 mb-5">
            The moon is made of pancakes
          </h2>
          <h2 className="font-semibold text-xl mb-5">
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </h2>
          <div className="flex">
            {walletConnected ? (
              <Link href="/swap">
                <a>
                  <button className="inline-flex items-center shadow-md rounded-2xl border-2 font-semibold justify-center bg-transparent text-green-400 border-green-400 border-solid h-12 px-6">
                    Trade Now
                  </button>
                </a>
              </Link>
            ) : (
              <>
                <button
                  onClick={connectWallet}
                  className="inline-flex items-center shadow-md rounded-2xl border-0 font-semibold justify-center bg-green-400 text-white h-12 px-6 mr-4"
                >
                  Connect Wallet
                </button>
                <Link href="/swap">
                  <a>
                    <button className="inline-flex items-center shadow-md rounded-2xl border-2 font-semibold justify-center bg-transparent text-green-400 border-green-400 border-solid h-12 px-6">
                      Trade Now
                    </button>
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
        <div className='"flex flex-col flex-1"'>
          <img src="./crypto-lottery.png" alt="" className="mb-12" />
          <h2 className="font-semibold text-3xl text-red-500 mb-10 capitalize">
            Test out your chances by entering the Lottery
          </h2>
          <div className="flex items-center mb-40">
            <button className="inline-flex items-center shadow-md rounded-2xl border-0 font-semibold justify-center bg-green-400 text-white h-12 px-6 mr-4">
              Go To Lottery
            </button>
            <h1 className="text-green-400 font-semibold">About Lottery</h1>
          </div>
        </div>
        <div className='"flex flex-col flex-1"'>
          <div className=" flex mb-12">
            <img src="./nft.png" alt="" width="175" height="175" />
            <img src="./marketplace.png" alt="" width="175" height="175" />
          </div>
          <h2 className="font-semibold text-3xl text-red-500 mb-10 capitalize">
            Be a part of a marketplace where you can buy, sell, list nfts
          </h2>
          <div className="flex items-center mb-40">
            <button className="inline-flex items-center shadow-md rounded-2xl border-0 font-semibold justify-center bg-green-400 text-white h-12 px-6 mr-4">
              Go To Marketplace
            </button>
            <h1 className="text-green-400 font-semibold">About Marketplace</h1>
          </div>
        </div>
        <div className='"flex flex-col flex-1"'>
          <div className=" flex mb-12 justify-center">
            <img src="./fraction.webp" alt="" width="175" height="175" />
          </div>
          <h2 className="font-semibold text-3xl text-red-500 mb-10 capitalize">
            Want to fractionalize your nfts? Enter Here!!!
          </h2>
          <div className="flex items-center ">
            <button className="inline-flex items-center shadow-md rounded-2xl border-0 font-semibold justify-center bg-green-400 text-white h-12 px-6 mr-4">
              Go To Fractionalizer
            </button>
            <h1 className="text-green-400 font-semibold">
              About Fractionalizer
            </h1>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home
