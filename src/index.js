import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from, ApolloLink, concat, split
} from "@apollo/client"
import {onError} from "@apollo/client/link/error";
import {WebSocketLink} from "@apollo/client/link/ws";
import {getMainDefinition} from "@apollo/client/utilities";


const l = "Insert token here"

const errorLink = onError(({
                               graphqlErrors, networkError
                           }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({message, location, path}) => {
            alert(`GraphQL error: ${message} in location ${location} and path ${path}`)
            return <div>Error {message}</div>
        })
    }
})

const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(({headers = {}}) => ({
        headers: {
            ...headers,
            authorization: l,
        }
    }));
    return forward(operation);
})

const wsLink = new WebSocketLink({
    uri: "wss://api.tibber.com/v1-beta/gql/subscriptions",
    options: {
        reconnect: true,
        connectionParams: () => ({
                token: l
            }
        ),

    }


})

const httpLink = from([
    errorLink,
    new HttpLink({uri: "https://api.tibber.com/v1-beta/gql"})
])

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, splitLink),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
