import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loadin: true, error: null });

    useEffect(() => {
      return () => {
        isMounted.current=false;
      }
    }, [])
    

    useEffect(() => {

        setState({ data: null, loadin: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                    if(isMounted){
                        setState({
                            loadin: false,
                            error: null,
                            data
                        })
                    }

            })
    }, [url])

    return state;

}
