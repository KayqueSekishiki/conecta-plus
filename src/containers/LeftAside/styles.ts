import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;

  span {
    color: #00aaff;
    font-weight: bold;
  }
`

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eeeeee;
  height: 100vh;
`

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  Button {
    height: 40px;
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`

export const Icon = styled.img`
  width: 32px;
`
