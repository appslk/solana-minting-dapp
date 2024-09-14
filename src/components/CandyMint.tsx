import { generateSigner, publicKey, some, transactionBuilder } from "@metaplex-foundation/umi";
import { FC, useCallback, useMemo, useState, useEffect } from 'react';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import { mplCandyMachine, fetchCandyMachine, safeFetchCandyGuard, mintV2 } from '@metaplex-foundation/mpl-candy-machine';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import useUserSOLBalanceStore from "stores/useUserSOLBalanceStore";
import { notify } from "utils/notifications";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-toolbox";
import * as bs58 from 'bs58';
import { PublicKey } from "@solana/web3.js";
import { FindNftByMintInput, Metaplex } from "@metaplex-foundation/js";
import { Carousel } from "./carousel";

const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;
const candyMachineAddress = publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID);
const treasury = publicKey(process.env.NEXT_PUBLIC_TREASURY);

export const CandyMint: FC = () => {

    const wallet = useWallet();
    const { connection } = useConnection();
    const { getUserSOLBalance } = useUserSOLBalanceStore();
    const [_itemsLoaded, setTotalSupply] = useState(0);
    const [_itemsRedeemed, setItemsRedeemed] = useState(0);
    const [mintedImg, setMintedImg] = useState<string>('');
    const [imageID, setImageID] = useState<string>('');

    const umi = useMemo(() =>
        createUmi(quicknodeEndpoint)
            .use(walletAdapterIdentity(wallet))
            .use(mplCandyMachine())
            .use(mplTokenMetadata()),
        [wallet, mplCandyMachine, walletAdapterIdentity, mplTokenMetadata, quicknodeEndpoint, createUmi]
    );

    useEffect(() => {
        if (wallet.publicKey) {
            getUserSOLBalance(wallet.publicKey, connection);
        }
        
    }, [wallet.publicKey, connection, getUserSOLBalance]);

    return (
        <div className="mintDetails">
            <div>
                <div id="price">Minted {_itemsRedeemed}/10</div>
                <div id="price"><span className="price2">Price 0.01 SOL</span></div>
                <p></p>

                <div className="btns3">
                    <button className="gradient-button">Mint</button>
                </div>

                {mintedImg ?
                    <div className="mintSection">
                        <div className="idAmount">{imageID}</div>
                        <img src={mintedImg} className="mintedNFT" alt="NFT Image" />
                    </div> : null}

                <Carousel />

                <div className="imgs2Main">
                    <img className="img1" src="https://assets-19n.pages.dev/imgs/main1.png" />
                    <img className="img2" src="https://assets-19n.pages.dev/imgs/main2.png" />
                </div>

            </div>
        </div>
    );

};
