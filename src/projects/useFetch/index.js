import React from "react";
import UseFetch from './UseFetch'
const url = "https://api.github.com/users";


export default function Index() {
    const { loading, people } = UseFetch(url);

    return (<div>
        {loading ? "Loading...." : people.map(item => <div>{item.login}</div>)}

    </div>)

}