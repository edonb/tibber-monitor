import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {LOAD_PRICES} from "./TibberApiComponents/GraphQL/Queries";

const Prices = () => {
    const {data, error, loading} = useQuery(LOAD_PRICES)

    if (loading) return <p> Loading prices...</p>
    if(data) console.log(data)
    return null
}
export default Prices