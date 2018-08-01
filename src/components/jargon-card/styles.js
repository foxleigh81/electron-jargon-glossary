import styled from 'styled-components'

export default styled.li`
  width: 28%;
  float: left;
  padding: 1rem;
  margin: 1%;
  position: relative;

  h1 {
    font-size: 2rem;
  }

  .description {
    padding: 1rem 0;
  }

  &.card-type {
    &--acronym {
      background-color: #BBDEFB;
    }
    &--term {
      background-color: #B2DFDB;
    }
  }

  .card-tag {
    position: absolute;
    top: 0;
    right: 0;
    padding: .5rem;
    background-color: #ffffff40;
    text-transform: capitalize;
  }

  .long-term {
    &:before {
      content: "(";
    }
    &:after {
      content: ")";
    }
  }
`
