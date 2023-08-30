import {walletUtils} from "@nx-playground/wallet-utils";

export const myNearWallet = () => {
  return "my-near-wallet";
}

import { logMessage } from "@nx-playground/core";

logMessage(walletUtils());

logMessage("Test my-near-wallet")