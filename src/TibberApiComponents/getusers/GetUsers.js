import React, {useEffect} from "react";
import {useQuery} from "@apollo/react-hooks";
import {LOAD_USERS} from "../GraphQL/Queries";



function GetUsers() {
    const {data, error, loading} = useQuery(LOAD_USERS)

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