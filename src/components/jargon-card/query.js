import gql from "graphql-tag";

export default gql`{
  allTerms {
    id
    type
    shortTerm
    longTerm
    definition
  }
}`