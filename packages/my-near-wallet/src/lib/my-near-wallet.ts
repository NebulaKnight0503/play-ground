import {walletUtils} from "@nx-playground/wallet-utils";

export const myNearWallet = () => {
  return "my-near-wallet";
}

import { logMessageUppercase } from "@nx-playground/core";

logMessageUppercase(walletUtils());

logMessageUppercase("Test my-near-wallet 1.");
logMessageUppercase("Test my-near-wallet 2.");
logMessageUppercase("Test my-near-wallet 3.");
logMessageUppercase("Test my-near-wallet 4.");
logMessageUppercase("Test my-near-wallet 5.");
logMessageUppercase("Test my-near-wallet 6.");
