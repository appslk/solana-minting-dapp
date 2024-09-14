// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { CandyMint } from 'components/CandyMint';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <div id="bgC" className="w-full mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <div className='mt-6 w-full flex justify-center'>
          <h1 id="mainT" className="text-center text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 mb-4">
            YAKA
          </h1>
        </div>

        <div className="w-full text-center">
          <h4 id="subCon" className="text-2xl md:text-4xl text-slate-300 my-2">
            Forge Your Legacy with Warriors!
          </h4>
          <p className='text-slate-500 text-2xl leading-relaxed' id="subP">
            Unleash the power of ancient warriors with our exclusive NFT collection! Each warrior is meticulously crafted, embodying the strength, honor, and legacy of legendary fighters. Own a piece of history and join the ranks of digital champions!
          </p>
        </div>
      </div>

      <CandyMint />

    </div>
  );
};
