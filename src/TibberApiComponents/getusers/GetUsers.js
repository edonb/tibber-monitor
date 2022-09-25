import React, {useEffect} from "react";
import {useQuery} from "@apollo/react-hooks";
import {LOAD_USERS} from "../GraphQL/Queries";



function GetUsers() {
    const {data, error, loading} = useQuery(LOAD_USERS)

    useEffect(()=> {
        console.log("checking data")
        console.log(`Our data: ${{data}}`)
        console.log(data)
        if (data) console.log(data.viewer.name)
    }, [data])

    if (data){
        return (
            <div>
                Hei {data.viewer.name}

            </div>
        )
    }
    if (loading){
        return (
            <div>
                Loading... {loading}
            </div>
        )
    }
    else {
        return <div> Ingen data funnet.</div>
    }
}

export default GetUsers;