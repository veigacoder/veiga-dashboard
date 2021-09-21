import styled from 'styled-components'
import { bg, fg } from '../colors'

export const Card = styled.div`
background-color: ${bg.normal};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color:  ${fg.normal} ;
width: max-content;
height: max-content;
border-radius: ${props => props.round ? '.5em' : 'none'};
box-shadow: 1px 3px 2px  ${bg.dark};
`
export const CardBody = styled.div`
justify-content: center;
align-items: center;
display: flex;
padding: 1rem;
height: fit-content;
border-radius: inherit;
`
export const CardHeader = styled.div`
justify-content: center;
align-items: center;
display: flex;
position: relative;
padding: 1rem;
width: 1;
height: max-content;
border-radius: inherit;
`
export const CardFooter = styled.div`
justify-content: center;
align-items: center;
display: flex;
padding: .5rem;
margin-bottom: .2em;
height: max-content;
border-radius: inherit;
`
export const CardLabel = styled.div`
justify-content: center;
align-items: center;
display: flex;
padding: .5rem;
position: absolute;
background-color: ${bg.action};
font-size: 90%;
top: -30%;
width: 1;
`
