import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>NFT-Lottery-Dapp</Head>
      <main className="px-4">
        <div className="pt-10">
          <h1 className="text-center mb-10 font-semibold text-3xl text-purple">
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
          <h2 className="font-semibold text-5xl text-purple mb-5">
            The moon is made of pancakes
          </h2>
          <h2 className="font-semibold text-xl mb-5">
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </h2>
          <div className="flex">
            <button className="inline-flex items-center shadow-md rounded-2xl border-0 font-semibold justify-center bg-lightGreen text-white h-12 px-6 mr-4">
              Connect Wallet
            </button>
            <button className="inline-flex items-center shadow-md rounded-2xl border-2 font-semibold justify-center bg-transparent text-lightGreen border-lightGreen border-solid h-12 px-6">
              Trade Now
            </button>
          </div>
        </div>
        <div className='"flex flex-col flex-1"'>
          <img src="./crypto-lottery.png" alt="" className="mb-12" />
          <h2 className="font-semibold text-3xl text-purple mb-10 capitalize">
            Test out your chances by entering the Lottery
          </h2>
          <div className="flex items-center mb-40">
            <button className="inline-flex items-center shadow-md rounded-2xl border-0 font-semibold justify-center bg-lightGreen text-white h-12 px-6 mr-4">
              Go To Lottery
            </button>
            <h1 className="text-lightGreen font-semibold">About Lottery</h1>
          </div>
        </div>
        <div className='"flex flex-col flex-1"'>
          <div className=" flex mb-12">
            <img src="./nft.png" alt="" width="175" height="175" />
            <img src="./marketplace.png" alt="" width="175" height="175" />
          </div>
          <h2 className="font-semibold text-3xl text-purple mb-10 capitalize">
            Be a part of a marketplace where you can buy, sell, list nfts
          </h2>
          <div className="flex items-center mb-40">
            <button className="inline-flex items-center shadow-md rounded-2xl border-0 font-semibold justify-center bg-lightGreen text-white h-12 px-6 mr-4">
              Go To Marketplace
            </button>
            <h1 className="text-lightGreen font-semibold">About Marketplace</h1>
          </div>
        </div>
        <div className='"flex flex-col flex-1"'>
          <div className=" flex mb-12 justify-center">
            <img src="./fraction.webp" alt="" width="175" height="175" />
          </div>
          <h2 className="font-semibold text-3xl text-purple mb-10 capitalize">
            Want to fractionalize your nfts? Enter Here!!!
          </h2>
          <div className="flex items-center ">
            <button className="inline-flex items-center shadow-md rounded-2xl border-0 font-semibold justify-center bg-lightGreen text-white h-12 px-6 mr-4">
              Go To Fractionalizer
            </button>
            <h1 className="text-lightGreen font-semibold">About Fractionalizer</h1>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default Home
