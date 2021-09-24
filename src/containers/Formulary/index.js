import styled from 'styled-components'
import { bg, fg, color, gradient } from '../../colors'

export const Input = styled.input`
border-style: none;
outline-style: none ;
border-radius: 50px;
color: ${fg.dark};
background-color: ${bg.transparent};
padding: 1rem;
:disabled {
  background-color: ${bg.light};
  color: ${bg.platinum};
  cursor: not-allowed;
}
`
export const Form = styled.form.attrs(props => ({
  columns: props.number || '2'
}))`
display: grid;
grid-template-columns: repeat(${props => props.columns}, 2fr);
grid-gap: 1em;
border-radius: 50px;
padding: 1rem;
`
export const SubmitButton = styled.button.attrs(props => ({
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
transition: all 200ms cubic-bezier(.9,.12,.5,.97),
background-image 400ms cubic-bezier(.9,.12,.5,.97);
font-weight: 450;
border-radius: 2rem;
margin: 0.5em;


:hover {
  background-color: ${bg.creation};
  box-shadow: 0px 4px 20px ${bg.translucid};
  z-index: 11;
}

`
