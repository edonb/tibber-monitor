import {gql} from "@apollo/client"

export const LOAD_USERS = gql`
    {
  viewer {
    name
    login
    homes {
      address {
        address1
        postalCode
        city
        country
      }
    }
  }
}
`
export const LOAD_PRICES = gql`
{
  viewer {
    homes {
      currentSubscription{
        priceInfo{
          current{
            total
            startsAt
          }
          today {
            total
            startsAt
          }
          tomorrow {
            total
            startsAt
          }
        }
      }
    }
  }
}
`

export const SUBSCRIBE_LIVE = gql`
subscription{
  liveMeasurement(homeId:"c90d4949-7add-40fd-a275-343c5be90c6b"){
    timestamp
    power
    priceInfo
    accumulatedConsumption
    accumulatedCost
    currency
    minPower
    averagePower
    maxPower
  }
}
`
export const SUBSCRIBE_POWER = gql`
subscription{
  liveMeasurement(homeId:"c90d4949-7add-40fd-a275-343c5be90c6b"){
    power
    minPower
    maxPower
  }
}
`
