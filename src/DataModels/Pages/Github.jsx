import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github () {
    let user = useLoaderData ()
    console.log (user)
    return (
        <div className="flex flex-row items-center justify-around p-10">
          <img src={user?.avatar_url} className="rounded-3xl"/>
          <div>
             <h1>Github : {user?.login}</h1>
             <h1>Followers : {user?.followers}</h1>
             <h1>Following : {user?.following}</h1>
             <h1>Name : {user?.name}</h1>
          </div>
        </div>
    )
}

export const getData = async ()=>{
    const response = await fetch ("https://api.github.com/users/vikashraosahab")
    return await response.json()
}