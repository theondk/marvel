import { useState, useCallback } from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type' : 'application/json'}) => {
        setLoading(true);
        setError(false);
        try {
            const response = await fetch(url, {method, body, headers});
        
            if (!response.ok) {
                throw new Error(`Can't fetch ${url}`);
            }

            const data = await response.json();

            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    }, []);

    return { loading, error, request }
}

export { useHttp };