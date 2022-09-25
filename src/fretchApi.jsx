import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const query = gql`
  query getUser { 
    viewer { 
        name 
    }
  }
`;

export const WithData = () => {
    console.log("here")
    const { loading, error, data } = useQuery(query, {
        variables: {},
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all'
    });

    if (loading) return 'Loading...';
    else if (error) return 'Error!';
    else if (data && data.viewer) {
        console.log("haha")
        return <>{
            data.viewer
        }</>
    } else {
        return null;
    }
};

export default WithData;