import styled from 'styled-components'
import { bg, fg } from '../../colors'

export const Button = styled.button.attrs(props => ({
  fontSize: props.size || '1rem'
}))`
background-color: ${bg.actionTranslucid};
color: ${fg.dark};
display: flex;
align-items: center;
text-align: center;
outline-style: none;
border: none;
width: 100%;
cursor: pointer;
padding: 1rem;
font-size: ${props => props.fontSize};
transition: all 200ms cubic-bezier(.9,.12,.5,.97);
font-weight: 450;
border-radius: 2rem;

:hover {
  background-color: ${bg.transparent};
  box-shadow: 0px 4px 20px ${bg.translucid};
  z-index: 11;
}
`
export const ButtonHeader = styled.div`
display: flex;
align-items: center;
outline-style: none;
border: none;
width: max-content;
cursor: pointer;
margin-right: 1rem;
height: 100%;
`

export const IconButton = styled.button`
font-size: 1rem;
padding: 1rem;
border-style: none;
display: flex;
justify-content: space-evenly;
align-items: center;
cursor: pointer;
width: 100%;
background-color: ${bg.action};
color: ${fg.normal};
transition: all 200ms cubic-bezier(.9,.12,.5,.97);
&+&{
  border-top: 3px solid ${fg.translucid};
}

:hover {
  background-color: ${bg.toAction};
  color: ${fg.normal};
}

`
