import React from 'react'

export default function UseFetch(url) { // always use use before any var to create a custom Hook

    const [loading, setLoading] = React.useState(true);
    const [people, setPeople] = React.useState([]);

    const getProduct = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPeople(data);
        setLoading(false)
    };

    React.useEffect(() => {
        getProduct();

    }, [url])

    return { loading, people}
}
