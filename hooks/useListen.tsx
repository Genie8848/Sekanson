import { useMetamask } from "./useMetamask";
import Web3 from "web3"
export const useListen = () => {
    const { dispatch } = useMetamask();

    return () => {
        window.ethereum.on("accountsChanged", async (newAccounts: string[]) => {
            let web3;
            if (newAccounts.length > 0) {
                // uppon receiving a new wallet, we'll request again the balance to synchronize the UI.
                const newBalance = await window.ethereum!.request({
                    method: "eth_getBalance",
                    params: [newAccounts[0], "latest"],
                });
                web3 = new Web3(window.ethereum as any);
                console.log("web3 ", web3)
                dispatch({
                    type: "connect",
                    wallet: newAccounts[0],
                    balance: newBalance,
                    web3
                });
            } else {
                // if the length is 0, then the user has disconnected from the wallet UI
                dispatch({ type: "disconnect" });
            }
        });
    };
};
