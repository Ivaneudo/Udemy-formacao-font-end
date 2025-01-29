import {useState, useEffect} from 'react'

// TODO: 4 custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // TODO: 5 - refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);

    // TODO: 6 - loading
    const [loading, setLoading] = useState(false)

    // TODO: 7 - ERROS
    const [erros, setErros] = useState(null)

    const httpConfig = (data, method) => {
        if (method === "post") {
            setConfig({
                method,
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method)
        }
    }

    useEffect(() => {
        // TODO: 7 - tratando erros
        try {
            
            const fetchData = async () => {
    
                // TODO: 6 - loading
                setLoading(true)
    
                const res = await fetch(url);
                const json = await res.json();
    
                // TODO: 6 - loading
                setLoading(false)
    
                setData(json);
            }

        } catch (error) {
            console.log(error.message);

            SpeechSynthesisErrorEvent("Ouve algum erro ao carregar os dados!")
        }

        fetchData()
    }, [url, callFetch])

    // TODO: 5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            let json

            if (method === "POST") {

                // TODO: 6 - loading
                setLoading(true)

                let fetchOptions = [url, config]
                
                const res = await fetch(...fetchOptions)

                json = await res.json();

                // TODO: 6 - loading
                setLoading(false)
            }

            setCallFetch(json)
        }

        httpRequest()
    }, [config, method, url])

    return {data, httpConfig, loading, Error};
} ;