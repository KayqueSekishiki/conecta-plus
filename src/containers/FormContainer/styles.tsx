import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666;
  gap: 16px;
`

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    magin-bottom: 6px;
  }

  input,
  label {
    margin-right: 6px;
  }
`

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`
