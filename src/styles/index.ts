import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 80vh;
  overflow-y: scroll;

  h2 {
    margin: 40px 0 24px 0;
  }
`

export const Title = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Field = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
export const Button = styled.button`
  min-width: 80px;
  min-height: 32px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;

  &:hover {
    background-color: transparent;
    border: 1px solid ${variaveis.azulEscuro};
    color: ${variaveis.azulEscuro};
  }

  &:active {
    background-color: ${variaveis.azulEscuro};
    color: #fff;
  }
`

export const SaveButton = styled(Button)`
  background-color: ${variaveis.verde};

  &:hover {
    background-color: transparent;
    border: 1px solid ${variaveis.verde};
    color: ${variaveis.verde};
  }

  &:active {
    background-color: ${variaveis.verde};
    color: #fff;
  }
`
