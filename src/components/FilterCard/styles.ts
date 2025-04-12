import styled from 'styled-components'

type Props = {
  isActive: boolean
}
export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.isActive ? '#1E90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.isActive ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.isActive ? '#1E90FF' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
