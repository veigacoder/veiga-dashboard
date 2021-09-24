import styled from 'styled-components'
import { bg, fg, gradient } from '../../colors'

export const Card = styled.div.attrs(props => ({
  color: props.color || bg.platinum
}))`
background-color: ${props => props.color};
display: flex;
position: static;
flex-direction: column;
align-items: center;
color: ${fg.dark};
width: 100%;
height: 100%;
border-radius: ${props => props.round ? '.5em' : 'none'};
box-shadow: 0 4px 20px 0 ${bg.translucid};
@media screen and (max-width: 997px) {
  &+& {margin-top: 3rem;}
}

@media screen and (max-width: 800px) {
  &+& {margin-top: 3rem;}
}
`
export const Bag = styled.div.attrs(props => ({
  color: props.color || bg.platinum
}))`
background-color: ${props => props.color};
display: flex;
position: static;
flex-direction: column;
align-items: center;
color:  ${fg.dark} ;
width: available;
height: max-content;
border-radius: ${props => props.round ? '.5em' : 'none'};
box-shadow: 0 4px 20px 0 ${bg.translucid};
`

export const CardBody = styled.div`
justify-content: center;
align-items: center;
display: flex;
padding: 1rem;
height: fit-content;
border-radius: inherit;
flex-wrap: wrap;
`
export const CardHeader = styled.div.attrs(props => ({
  border: props.border || 'none'
}))`
display: flex;
width: 1;
height: fitcontent;
border-radius: inherit;
border: ${props => props.border}
`
export const CardFooter = styled.div`
justify-content: center;
align-items: center;
display: flex;
padding: .5rem;
width: 80%;
height: max-content;
border-top: .1px dashed ${bg.actionTranslucid};
`
export const GradientLabel = styled.div.attrs(props => ({
  gradient: props.color || gradient.default
}))`
display: flex;
justify-content: center;
padding: 1rem;
box-shadow: 0px 0px 20px  ${bg.transparent};
background-image: ${props => props.gradient};
color: ${fg.normal};
border-radius: ${props => props.round ? '.5em' : 'none'};
font-size: 90%;
width: max-content;
margin: 0 20px 0 ;
top: -15px;
position: relative;
z-index: 3;
box-sizing: border-box;
`
export const ColorLabel = styled.div.attrs(props => ({
  color: props.color || bg.dark,
  shadow: props.shadow || bg.transparent
}))`
display: flex;
justify-content: center;
padding: 1rem;
box-shadow: 0px 0px 20px  ${props => props.shadow};
background-color: ${props => props.color};
color: ${fg.normal};
border-radius: ${props => props.round ? '.5em' : 'none'};
font-size: 90%;
width: max-content;
margin: 0 20px 0 ;
top: -15px;
position: relative;
z-index: 3;
box-sizing: border-box;
`

export const HeaderData = styled.div`
background-color: none;
display: flex;
flex-direction: column;
padding: 1rem 1rem; 
text-align: right;
justify-content: flex-start;
align-items: flex-end;
color: ${fg.dark};
font-size: 90%;
width:100%;
position: relative;
z-index: 3;
&>span {
  color: ${bg.translucid};
  font-size: 16px;
}
&>span+span {
  color: ${bg.dark};
  font-size: 20px;
}
`
