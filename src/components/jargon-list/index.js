import React from 'react'
import JargonCard from '../jargon-card'
import JargonCardWrapper from './styles'

const JargonList = (props) => {
  return (
    <JargonCardWrapper>
        {
          props.data.map((e, i) => <JargonCard key={e.uuid} {...e} />)
        }
    </JargonCardWrapper>
  )
}

export default JargonList