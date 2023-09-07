import {walletUtils} from "@nx-playground/wallet-utils";

export const myNearWallet = () => {
  return "my-near-wallet";
}

import { logMessageUppercase } from "@nx-playground/core";

logMessageUppercase(walletUtils());

logMessageUppercase("Test my-near-wallet")
logMessageUppercase("Test my-near-wallet")