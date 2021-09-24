import styled from 'styled-components'
import { bg } from '../../colors'

export const Display = styled.div`
height: 100%;
width: 100%;
background-color: ${bg.light};
display: flex;
flex-direction: row;
`
export const DisplayTop = styled.div`
height: max-content;
width: 100%;
display: flex;
`
export const DisplaySide = styled.div`
height: 100%;
display: flex;
`
export const DisplayBody = styled.div`
display: flex;
flex-direction: column;
height: 1;
width: 100%;
`
export const PageBlock = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background-color: ${bg.light};
`
export const PageRow = styled.div.attrs(props => ({
  columns: props.number || '3'
}))`
display: grid;
grid-template-columns: repeat(${props => props.columns}, 1fr);
grid-gap: 1em;
justify-content: space-between;
align-items: center;
padding: 2rem;
height: max-content;
`
