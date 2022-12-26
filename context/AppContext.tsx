import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from "react";
import { projectsData } from "../libs/projects";

interface IGlobalContextProps {
  connected: any;
  projects: any;
  loading: boolean;
  selectedChain: any;
  setConnected: Dispatch<SetStateAction<any>>;
  setSelectedChain: Dispatch<SetStateAction<any>>;
  setLoading: Dispatch<SetStateAction<any>>;
  setProjects: Dispatch<SetStateAction<any>>
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
  setLoading: () => { },
  setProjects: () => { },
  projects: []

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

  // projects

  const [projects, setProjects] = useState(projectsData)

  let sharedState: IGlobalContextProps = useMemo(() => ({
    connected,
    loading: isLoading,
    setConnected,
    setLoading: setIsLoading,
    selectedChain,
    setSelectedChain,
    projects,
    setProjects

  }), [connected, isLoading, selectedChain, projects])

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}
