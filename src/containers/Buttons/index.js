import styled from 'styled-components'
import { bg, fg } from '../../colors'

export const Button = styled.button`
background-color: ${bg.translucid};
color: ${fg.dark};
outline-style: none;
border: none;

cursor: pointer;
padding: 0.5rem;
transition: all 200ms cubic-bezier(.9,.12,.5,.97);
:active {
  background-color: ${bg.actionTranslucid};
}
`
export const IconButton = styled.button`
font-size: 1rem;
padding: .7rem;
border-style: none;
display: flex;
justify-content: space-evenly;
align-items: center;
cursor: pointer;
width: 100%;
background-color: ${bg.dark};
color: ${fg.normal};
transition: all 200ms cubic-bezier(.9,.12,.5,.97);
:hover {
  background-color: ${bg.normal};
}

`
