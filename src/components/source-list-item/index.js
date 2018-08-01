import React from 'react'
import SourceListItemWrapper from './styles'

const SourceListItem = (props) => {
  return (
    <SourceListItemWrapper>
      <a href={props.url}>{props.parent}&nbsp;[{props.name}]</a>
    </SourceListItemWrapper>
  )
}

export default SourceListItem