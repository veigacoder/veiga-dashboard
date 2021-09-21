import styled from 'styled-components'
import { bg } from '../../colors'

export const Display = styled.div`
height: 100%;
width: 100%;
background-color: ${bg.darkest};
display: flex;
flex-direction: row;
`
export const DisplayTop = styled.div`
height: 10%;
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
padding: 2rem;
height: 100%;
background-color: ${bg.normal};
`
