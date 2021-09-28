import styled from 'styled-components'
import { bg, fg, color, gradient } from '../../colors'

export const Input = styled.input`
border-style: none;
outline-style: none ;
border-radius: 50px;
color: ${fg.dark};
justify-content: flex-start;
direction: initial;
display: flex;
background-color: ${bg.transparent};
padding: 1rem;
height: max-content;
align-self: center;
:disabled {
  background-color: ${bg.light};
  color: ${bg.platinum};
  cursor: not-allowed;
}

`

export const ColorInput = styled.input`
border-style: none;
outline-style: none ;
height: 2rem;
width: 50%;
align-self: center;

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
  display: flex;
  padding: 1rem;
  border-radius: 10rem;
  outline: none;
  border: none;
  color: ${bg.black};
  background-color: ${bg.actionTranslucid};
  font-size: 1rem;
  letter-spacing: .15rem;
  transition: all .3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  :hover{
    background-color: ${bg.transparent} ;
    box-shadow: 0px 2px 20px ${bg.translucid};
  }

`
