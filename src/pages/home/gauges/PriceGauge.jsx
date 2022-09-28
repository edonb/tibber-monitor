import Gauge from "../../../components/gauge/Gauge";
import {LOAD_PRICES} from "../../../TibberApiComponents/GraphQL/Queries";
import {useQuery} from "@apollo/react-hooks";
import {useEffect, useState} from "react";
import {Speed} from "../../../components/gauge/SpeedGauge";



const PowerGauge = () => {
    const {data, error, loading} = useQuery(LOAD_PRICES)
    const [priceNow, setPriceNow] = useState(null)
    const [minPrice, setMinPrice] = useState(null)
    const [maxPrice, setMaxPrice] = useState(null)

    function setMaxMin(points){
        let max = -200
        let min = 200
        points.forEach(point => {
            if (point.total > max) {
                max = point.total
            }
            if (point.total < min){
                min = point.total
            }
        })
        setMinPrice(min)
        setMaxPrice(max)
    }

    useEffect(()=>{
        if(error) return;
        if(data){
            const priceInfo = data.viewer.homes[0].currentSubscription.priceInfo;
            setPriceNow(priceInfo.current.total)
            setMaxMin(priceInfo.today)
        }
    }, [data, error])


    if(loading){
        return(
            <Gauge min={0} max={10000} current={Math.random()*10000} unit="kr" title="Loading.."></Gauge>
        )
    }
    if(priceNow){
        return  (
            <>
            <Speed value={priceNow} unit="kr" decimals={2} domain={[minPrice, maxPrice]} />
            </>

        )
    }
    if(error){
        console.log(error)
    }
}

export default PowerGauge