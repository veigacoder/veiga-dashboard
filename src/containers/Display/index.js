import styled from 'styled-components'
import { bg } from '../../colors'

export const Display = styled.div`
height: 100%;
width: 100%;
display: flex;
max-width: 100vw;
`
export const DisplayTop = styled.div.attrs(props => ({
  position: props.position || 'static'
}))`
position: ${props => props.position};
min-height: max-content;
height: 10rem;
width: 100%;
display: flex;
align-items:baseline;
justify-content: first baseline;
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

`
export const PageBlock = styled.div`
display: flex;
flex-direction: column;
height: max-content;
min-height: 100vh;
width: 1;
max-height: 100%;
`
export const PageRow = styled.div.attrs(props => ({
  columns: props.number || '3',
  mediumDisplay: props.mdNumber || '2',
  smallDisplay: props.smNumber || '1',
  gap: props.gap || '1em',
  position: props.position || 'relative'

}))`
display: grid;
grid-template-columns: repeat(${props => props.columns}, 1fr);
grid-gap: ${props => props.gap};
row-gap:${props => props.gap};
align-items: center;
justify-content: center;
padding: 1rem;
color: inherit;
height: max-content;
max-height: 100%;
min-height: max-content;
position: ${props => props.position};
width: 1;
transition: all 250ms ease;
@media screen and (max-width: 997px) {
  grid-template-columns: repeat(${props => props.mediumDisplay}, 1fr);
  grid-gap: 2em;
  &+&{
    margin-top: 2em;
  }
}

@media screen and (max-width: 800px) {
  grid-template-columns: repeat(${props => props.smallDisplay}, 1fr);
  row-gap: 3em;
  &+&{
    margin-top: 3em;
  }
}
`
