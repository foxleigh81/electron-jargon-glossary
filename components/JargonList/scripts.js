// Import dependencies
import gql from 'graphql-tag'
// Import components
import JargonCard from '../JargonCard'

// GraphQL Query
const allTerms = gql `
  query allTerms {
    allTerms {
      id
      type
      shortTerm
      longTerm
      definition
    }
  }
`

export default {
    name: 'JargonList',
    data: () => ({
        loading: 0,
        allTerms: [],
    }),
    apollo: {
        $loadingKey: 'loading',
        allTerms: {
            query: allTerms
        }
    },
    components: {
        JargonCard
    }
}