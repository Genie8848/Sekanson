import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from "react";

interface IGlobalContextProps {
  connected: any;
  loading: boolean;
  selectedChain: any;
  setConnected: Dispatch<SetStateAction<any>>;
  setSelectedChain: Dispatch<SetStateAction<any>>;
  setLoading: Dispatch<SetStateAction<any>>;
}

export const AppContext = createContext<IGlobalContextProps>({
  connected: false,
  loading: false,
  setConnected: () => { },
  setSelectedChain: () => { },
  selectedChain: {
    id: "1",
    title: "Ethereum",
    img: "/images/eth-logo.svg",
    alt: "Ethereum chain",
  },
  setLoading: () => { }
});

export function AppContextWrapper({ children }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [selectedChain, setSelectedChain] = useState({
    id: "1",
    title: "Ethereum",
    img: "/images/eth-logo.svg",
    alt: "Ethereum chain",
  })

  let sharedState: IGlobalContextProps = useMemo(() => ({
    connected,
    loading: isLoading,
    setConnected,
    setLoading: setIsLoading,
    selectedChain,
    setSelectedChain
  }), [connected, isLoading, selectedChain])

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}
