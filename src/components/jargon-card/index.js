import React from 'react'
import JargonCardWrapper from './styles'
// NOTE: Sources temporarily removed
// import SourceList from '../source-list';

const JargonCard = (props) => {
  return (
    <JargonCardWrapper className={'card-type card-type--' + props.type}>
      <span className="card-tag">{props.type}</span>
      <h1>{props.shortTerm ? props.shortTerm : props.longTerm}&nbsp;
      {props.shortTerm ? <span className="long-term">{props.longTerm}</span> : null}
      </h1>
      { props.definition.length > 0 && <div className="description"><p>{props.definition}</p></div>}
      {/* { props.sources && 
        <SourceList {...props} />
      } */}
    </JargonCardWrapper>
  )
}

export default JargonCard