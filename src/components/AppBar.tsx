import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';

const meL = () => {
  window.open("#");
}

const tg = () => {
  window.open("#");
}

const tweet = () => {
  window.open("#");
}

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div >
      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66">
        <div className="navbar-start align-items-center">
          <div className="hidden sm:inline w-22 h-22 md:p-2 ml-10">
            <img className='logo' onClick={() => window.location.href = '/'} src="https://assets-19n.pages.dev/imgs/logo.png" />
          </div>
          <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex md:hidden text-lg " />
        </div>

        <div className="navbar-end">
          <div className="hidden md:inline-flex align-items-center justify-items gap-6">
            <img className='icons' onClick={meL} src="https://optimusassets.pages.dev/imgs/magiceden.png" />
            <img className='icons' src="https://social-c3e.pages.dev/imgs/twitter (1).png" onClick={tweet} />
            <img className='icons' src="https://social-op.pages.dev/imgs/telegram.png" onClick={tg} />

            <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6 " />

          </div>

        </div>
      </div>
    </div>
  );
};
