import styled from 'styled-components'
import { bg, fg } from '../../colors'

export const Bar = styled.div.attrs(props => ({
  orientation: props.direction || 'center',
  position: props.position || 'static'

}))`
width: 100%;
height: max-content;
display: flex;
flex-direction: row;
align-items: center;
position: ${props => props.position};
justify-content: flex-end;
background-color: #fff0; //invisible
color: ${props => props.light ? fg.normal : fg.dark};
z-index:99;
top: 0;
left: 0;
@media screen and (max-width: 600px) {
 position: static;
 top: 0;
left: 0;
};

`
export const BarContent = styled.div.attrs(props => ({
}))`
justify-content: ${props => props.orientation};
direction: ${props => props.direction};
height: max-content;
width: 100%;
display: flex;
padding: 1rem 2rem 1rem 0 ;
`

export const FooterBar = styled.div.attrs(props => ({
  position: props.position || 'static'
}))`
width:100%;
height: max-content;
display: flex;
flex-direction: row;
align-items: center;
position: ${props => props.position};
justify-content: center;
background-color: ${bg.noColor}; //invisible
color: ${props => props.light ? fg.normal : fg.dark};
z-index: 20;  
@media screen and (max-width: 750px) {
 position: static;
};

@media screen and (max-width: 750px) {
  position: static;
};
`

export const FooterBarContent = styled.div.attrs(props => ({

}))`
justify-content:center;
height: max-content;
width: 100%;
padding: .7rem;
display: flex;
`

export const SideBar = styled.div`
width: max-content;
max-width: 20vw;
height: 1 ;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
background-color: ${props => props.darl ? bg.dark : bg.platinum};
color: ${props => props.light ? fg.dark : fg.normal};
z-index: 20;
box-shadow: 3px 0 20px ${bg.translucid};

@media screen and (max-width: 997px) {
 position: static;
}
@media screen and (max-width: 800px) {
  position: static;
}
`

export const SideBarContent = styled.div`
padding: 1rem;
flex-direction: column;
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
`
export const SideBarHeader = styled.div`
padding: 1rem;
font-size: 30px;
color: ${bg.actionTranslucid};
`
