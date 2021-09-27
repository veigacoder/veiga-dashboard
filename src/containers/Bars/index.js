import styled from 'styled-components'
import { bg, fg, color } from '../../colors'

export const Bar = styled.div.attrs(props => ({
  orientation: props.direction || 'flex-end'
}))`
width: 100%;
height: max-content;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
background-color: #fff0; //invisible
color: ${props => props.light ? fg.normal : fg.dark};
z-index: 10;
`

export const BarContent = styled.div.attrs(props => ({
  columns: props.number || '1',
  direction: props.direction || 'ltr'
}))`
justify-content: ${props => props.orientation};
direction: ${props => props.direction};
height: max-content;
width: 100%;
padding: .7rem;
display: grid;
grid-template-columns: repeat(${props => props.columns}, 1fr);

`
export const SideBar = styled.div`
width: max-content;
height: 1 ;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
background-color: ${props => props.darl ? bg.dark : bg.platinum};
color: ${props => props.light ? fg.dark : fg.normal};
z-index: 10;
box-shadow: 3px 0 20px ${bg.translucid};
`

export const SideBarContent = styled.div`
padding: 1rem;
flex-direction: column;
width: max-content;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
`
export const SideBarHeader = styled.div`
padding: 1rem;
font-size: 30px;
color: ${fg.dark};
:hover  { 
    color: ${bg.actionTranslucid};
    cursor: pointer;
}
`
