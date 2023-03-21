import { createContext, useContext, useState } from 'react';
import React from 'react';

const LoadingContext = createContext(undefined);

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export const useLoading = () => useContext(LoadingContext);
