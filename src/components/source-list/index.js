import React from 'react'
import SourceListWrapper from './styles'
import SourceListItem from '../source-list-item';

const SourceList = (props) => {
  return (
    <SourceListWrapper>
        <h2>Related Sources:</h2>
        <ul>
          { props.sources.map((data) => <SourceListItem key={data.id} name={data.name} url={data.url} parent={props.longTerm} />)}
        </ul>
    </SourceListWrapper>
  )
}

export default SourceList