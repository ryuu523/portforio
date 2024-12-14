import { usePathname } from 'next/navigation';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type LoadingContextType = {
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    direction: string;
    setDirection: (isLoading: string) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const pathname = usePathname()
    const [direction, setDirection] = useState<string>("in")
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            
        }, 900)
    }, [pathname])
    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading, direction, setDirection }}>
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