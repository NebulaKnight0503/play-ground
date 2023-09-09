import {walletUtils} from "@nx-playground/wallet-utils";
import {logMessageLowercase, logMessageUppercase} from "@nx-playground/core";

export const myNearWallet = () => {
  return "my-near-wallet";
}


logMessageUppercase(walletUtils());

logMessageUppercase("Test my-near-wallet 1");
logMessageLowercase("Test my-near-wallet 1");