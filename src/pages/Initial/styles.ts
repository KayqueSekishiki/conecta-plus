import styled from 'styled-components'

export const Title = styled.h1`
  color: red;

  span {
    color: blue;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 16px;

  Button {
    height: 40px;
  }
`

export const Input = styled.input`
  min-width: 300px;
  padding: 8px;
  text-align: center;

  font-size: 16px;
  border: 1px solid;
  border-radius: 4px;
`
