import styled from 'styled-components'
import { bg, fg, gradient } from '../../colors'

export const Card = styled.div.attrs(props => ({
  color: props.color || bg.platinum,
  position: props.position || 'static',
  minHeight: props.minHeight || 'none'
}))`
background-color: ${props => props.color};
display: flex;
flex-direction: column;
align-items: center;
position: ${props => props.position};
color: ${fg.dark};
min-width: max-content;
width: 100%;
height: 100%;
min-height:${props => props.minHeight};
border-radius: ${props => props.round ? '.5em' : 'none'};
box-shadow: ${props => props.show ? 'none' : `0 4px 20px 0 ${bg.translucid}`};
z-index: 10;
transition: all 250ms ease;
max-height: 100%;


@media screen and (max-width: 600px) {
width: 100%;
font-size: 5vw;
};


`

export const CardBody = styled.div.attrs(props => ({
  direction: props.direction || 'column'
}))`
justify-content: center;
position: static;
align-items: center;
display: flex;
flex-direction: ${props => props.direction};
padding: 1rem;
border-radius: inherit;
flex-wrap: wrap;
height: 100%;
width: max-content;
max-height: 100%;
font-size: inherit;
transition: all 250ms ease;
@media screen and (max-width: 997px) {
  padding: .5rem;

}
@media screen and (max-width: 800px) {
  padding: .2rem;
 
}
`
export const CardHeader = styled.div.attrs(props => ({
  border: props.border || 'none'
}))`
display: flex;
width: 1;
height: fit-content;
border-radius: inherit;
border: ${props => props.border};
align-items: flex-start;
`
export const CardSide = styled.div.attrs(props => ({

}))`
display: flex;
width: max-content;
height: 100%;
border-radius: inherit;
padding: .5rem;
border-left: .1px dashed ${bg.actionTranslucid};
align-items: flex-start;
margin: 0 0 0 2em;
`
export const CardFooter = styled.div.attrs(props => ({
  minHeight: props.minHeight || 'max-content',
  minWidth: props.minWidth || '80%'
}))`
justify-content: center;
align-items: center;
display: flex;
padding: .5rem;
width: ${props => props.minWidth};
height: ${props => props.minHeight};
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
color: ${bg.platinum};
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
color: inherit;
font-size: 90%;
width:100%;
position: relative;
z-index: 3;
&>span {
  color: ${bg.translucid};
  font-size: 16px;
}
&>span+span {
  color: ${bg.action};
  font-size: 20px;
  font-weight: 500;
}
`
