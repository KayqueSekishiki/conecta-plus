import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Field, MainContainer, SaveButton, Title } from '../../styles'
import { Form, Options, Option } from './styles'

import * as enums from '../../utils/enums/Contact'
import { registerContact as register } from '../../store/reducers/contacts'

const FormContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState(0)
  const [group, setGroup] = useState(enums.Group.FRIENDS)
  const [favorite, setFavorite] = useState(enums.Favorite.UNFAVORITE)

  const registerTarefa = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(
      register({
        name,
        title,
        email,
        phone,
        group: enums.Group.FRIENDS,
        favorite: enums.Favorite.UNFAVORITE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Add New Contact</Title>
      <Form onSubmit={registerTarefa}>
        <div>
          <label htmlFor="name">Name</label>
          <Field
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <Field
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Short Description"
            id="title"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <Field
            value={phone}
            onChange={(e) => setPhone(Number(e.target.value))}
            type="number"
            placeholder="Phone Number"
            id="phone"
          />
        </div>

        <Options>
          <p>Group</p>
          {Object.values(enums.Group).map((group) => (
            <Option key={group}>
              <input
                value={group}
                name="group"
                type="radio"
                onChange={({ target }) => setGroup(target.value as enums.Group)}
                id="group"
                defaultChecked={group === enums.Group.FRIENDS}
              />
              <label htmlFor="group">{group}</label>
            </Option>
          ))}
        </Options>

        <Options>
          <p>Favorite</p>
          {Object.values(enums.Favorite).map((favorite) => (
            <Option key={favorite}>
              <input
                value={favorite}
                name="favorite"
                type="radio"
                onChange={({ target }) =>
                  setFavorite(target.value as enums.Favorite)
                }
                id="favorite"
                defaultChecked={favorite === enums.Favorite.UNFAVORITE}
              />
              <label htmlFor="favorite">{favorite}</label>
            </Option>
          ))}
        </Options>

        <SaveButton type="submit">ADD CONTACT</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default FormContainer
