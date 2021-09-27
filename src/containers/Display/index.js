import styled from 'styled-components'
import { bg } from '../../colors'

export const Display = styled.div`
height: inherit;
width: 100%;
background-color: ${bg.light};
display: flex;
padding: ;

`
export const DisplayTop = styled.div`
height: max-content;
width: 100%;
display: flex;
margin: 0 0 2rem 0;
`
export const DisplayBottom = styled.div`
height: max-content;
width: 100%;
display: flex;
margin: 2rem 0 0 0;
`
export const DisplaySide = styled.div`
height: 1;
display: flex;
`
export const DisplayBody = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
padding: 2rem;
`
export const PageBlock = styled.div`
display: flex;
flex-direction: column;
height: max-content;
min-height: 100vh;
width: 1;
max-height: 100%;
background-color: ${bg.light};
`
export const PageRow = styled.div.attrs(props => ({
  columns: props.number || '3',
  mediumDisplay: props.mdNumber || '3',
  smallDisplay: props.smNumber || '2',
  gap: props.gap || '1em'
}))`
display: grid;
grid-template-columns: repeat(${props => props.columns}, 1fr);
grid-gap: ${props => props.gap};
row-gap:${props => props.gap};
align-items: baseline;
padding: 1rem;
color: inherit;
height: max-content;
max-height: 100%;
min-height: max-content;
position: relative;
width: 1;
transition: all 250ms ease;
@media screen and (max-width: 997px) {
  grid-template-columns: repeat(${props => props.mediumDisplay}, 1fr);
  grid-gap: .5em;
}

@media screen and (max-width: 800px) {
  grid-template-columns: repeat(${props => props.smallDisplay}, 1fr);
  row-gap: 3em;
}
`
