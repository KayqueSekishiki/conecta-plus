import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { SaveButton } from '../../styles'

const Initial = () => {
  const [user, setUser] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return

    localStorage.removeItem('user')
    localStorage.setItem('user', user)
    navigate('/main')
  }

  function handleChangeUser(e: React.FormEvent) {
    e.preventDefault()
    let localUser = (e.target as HTMLInputElement).value
    const localUserCapitalize =
      localUser.charAt(0).toUpperCase() + localUser.slice(1)

    setUser(localUserCapitalize)
  }

  return (
    <S.Container>
      <S.Title>
        Welcome to <span>Conecta+</span>
      </S.Title>
      <h2>What would you like to be called?</h2>

      <S.Input
        type="text"
        placeholder="Your Name"
        onChange={(e) => handleChangeUser(e)}
      />
      <SaveButton type="submit" onClick={(e) => handleSubmit(e)}>
        CONNECT
      </SaveButton>
    </S.Container>
  )
}

export default Initial
