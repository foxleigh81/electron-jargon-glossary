import React from 'react'
import JargonCardStyles from './styles'

const JargonCard = (props) => {
  return (
    <JargonCardStyles>
      <h1>{props.shortTerm ? props.shortTerm : props.longTerm}</h1>
      {props.shortTerm ? <span>{props.longTerm}</span> : null}
      { props.definition.length > 0 && <p>{props.definition}</p>}
      {/* TODO: Make child components not inline if */}
      { props.sources && 
        <React.Fragment>
          <h2>Sources:</h2>
          <ul>
            { props.sources.map((data) => <li key={data.name}><a href={data.url}>{props.longTerm} on {data.name}</a></li>)}
          </ul>
        </React.Fragment>
      }
    </JargonCardStyles>
  )
}

export default JargonCard