import React from 'react'
import JargonCard from '../jargon-card'
import JargonCardStyles from './styles'

const JargonList = (props) => {
  return (
    <JargonCardStyles>
        {
          props.data.map((e, i) => <JargonCard key={e.uuid} {...e} />)
        }
    </JargonCardStyles>
  )
}

export default JargonList