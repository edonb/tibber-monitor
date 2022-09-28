import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {LOAD_PRICES} from "./TibberApiComponents/GraphQL/Queries";


const Prices = () => {
    const {data, error, loading} = useQuery(LOAD_PRICES)

    if (loading) return <p> Loading prices...</p>
    if (!data) return

    const dat = data.viewer.homes[0].currentSubscription.priceInfo.today
    console.log(dat)


    return (
        <div>


        </div>
    )
}
export default Prices