import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

// Import styles
import JargonCardWrapper from './styles'

// Import components
import JargonCard from '../jargon-card'

const query = gql`{
  allTerms {
    id
    type
    shortTerm
    longTerm
    definition
  }
}`

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