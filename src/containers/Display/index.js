import styled from 'styled-components'
import { bg } from '../../colors'

export const Display = styled.div`
height: 100%;
width: 100vw;
display: flex;
max-width: inherit;
`
export const DisplayTop = styled.div.attrs(props => ({
  position: props.position || 'static'
}))`
position: relative;
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
display: flex;
position: relative;
max-width: 20vw;
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
width: inherit;
max-height: inherit;
`
export const Row = styled.div.attrs(props => ({
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
color: inherit;
width: 100%;
padding: 1rem;
min-height: max-content;
height: max-content;
position: ${props => props.position};

transition: all 250ms ease;
@media screen and (max-width: 600px) {
  grid-template-columns: repeat(${props => props.mediumDisplay}, 1fr);
  grid-gap: 2em;
  &+&{
    margin-top: 2em;
  }
}


`
