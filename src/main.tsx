import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client } from './utils/apollo.ts'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
