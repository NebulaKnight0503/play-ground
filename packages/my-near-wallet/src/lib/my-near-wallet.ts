import {walletUtils} from "@nx-playground/wallet-utils";

export const myNearWallet = () => {
  return "my-near-wallet";
}

import { logMessage } from "@nx-playground/core";

logMessage(walletUtils());

logMessage("Test my-near-wallet")
logMessage("Test my-near-wallet 1")
logMessage("Test my-near-wallet 2")
logMessage("Test my-near-wallet 3")
logMessage("Test my-near-wallet 4")
logMessage("Test my-near-wallet 5")