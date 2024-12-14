import { usePathname } from 'next/navigation';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type LoadingContextType = {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    direction: string;
    setDirection: (isLoading: string) => void;
    nextUrl: string;
    setNextUrl: (isLoading: string) => void;
    oldPathname: string;
    setOldPathname: (oldPathname: string) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const pathname = usePathname()
    const [direction, setDirection] = useState<string>("in")
    const [nextUrl, setNextUrl] = useState<string>("/")
    const [oldPathname, setOldPathname] = useState<string>("/")
    return (
        <LoadingContext.Provider value={{ oldPathname, setOldPathname, isLoading, setIsLoading, direction, setDirection, nextUrl, setNextUrl }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('LoadingContext must be used within a LoadingProvider');
    }
    return context;
};