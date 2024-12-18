import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type MenuContextType = {
    isActive: boolean;
    setIsActive: (isActive: boolean) => void;
    changeActive: () => void;

};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const changeActive = () => {
        setIsActive((prev) => !prev)
    }
    return (
        <MenuContext.Provider value={{ isActive, setIsActive, changeActive}}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('MenuContext must be used within a MenuProvider');
    }
    return context;
};