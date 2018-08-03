import React from 'react'
import { Query } from "react-apollo";

// Import GQL Query
import query from './query'

// Import styles
import JargonCardWrapper from './styles'

// Import components
import JargonCard from '../jargon-card'

const JargonList = () => 
  <JargonCardWrapper>
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) return <li>Loading...</li>;
        if (error) return <li>Error :(</li>;
        return data.allTerms.map(( e, i ) => <JargonCard key={e.id} {...e} />)
      }}
    </Query>
  </JargonCardWrapper>

export default JargonList