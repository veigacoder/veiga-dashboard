import styled from 'styled-components'
import { bg, fg } from '../../colors'

export const Bar = styled.div`
width: 100%;
height: 1;
display: flex;
flex-direction: row;
background-color: ${props => props.light ? bg.light : bg.dark};
color: ${props => props.light ? fg.dark : fg.normal};
`
export const BarContent = styled.div`
padding: 0.5rem;
height: max-content;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
flex-direction: row;

`
export const SideBar = styled.div`
width: max-content;
height: 100vh;
display: flex;
background-color: ${props => props.light ? bg.light : bg.dark};
color: ${props => props.light ? fg.dark : fg.normal};
`
export const SideBarContent = styled.div`
padding: 0.5rem;
width: max-content;

`
