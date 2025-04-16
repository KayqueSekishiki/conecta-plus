import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import {
  deleteContact,
  editContact,
  changeFavorite
} from '../../store/reducers/contacts'

import ContactClass from '../../models/Contact'
import * as enums from '../../utils/enums/Contact'
import { Button, SaveButton } from '../../styles'

type Props = ContactClass

const Contact = ({
  id,
  name: originalName,
  title: originalTitle,
  email: originalEmail,
  phone: originalPhone,
  group: originalGroup,
  favorite: originalFavorite
}: Props) => {
  const dispatch = useDispatch()
  const [name, setName] = useState(originalName)
  const [title, setTitle] = useState(originalTitle)
  const [email, setEmail] = useState(originalEmail)
  const [phone, setPhone] = useState(originalPhone)
  const [group, setGroup] = useState(originalGroup)
  const [favorite, setFavorite] = useState(originalFavorite)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }
    if (originalTitle.length > 0) {
      setTitle(originalTitle)
    }
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
    if (originalPhone !== 0) {
      setPhone(originalPhone)
    }
    if (originalGroup) {
      setGroup(originalGroup)
    }
    if (originalFavorite) {
      setFavorite(originalFavorite)
    }
  }, [
    originalName,
    originalTitle,
    originalEmail,
    originalPhone,
    originalGroup,
    originalFavorite
  ])

  function cancelEdit() {
    setName(originalName)
    setTitle(originalTitle)
    setEmail(originalEmail)
    setPhone(originalPhone)
    setGroup(originalGroup)
    setFavorite(originalFavorite)
    setIsEditing(false)
  }

  function toggleFavoriteContact() {
    let f = favorite === 'Favorites' ? false : true

    console.log(favorite, f)

    dispatch(changeFavorite({ id, favorited: f }))
  }

  return (
    <S.Card>
      <label>
        <S.Tags>
          {isEditing ? (
            <em>
              <S.Title>Editing: {name}</S.Title>
            </em>
          ) : (
            <>
              <S.Title
                onClick={() => {
                  toggleFavoriteContact()
                }}
              >
                {name}
              </S.Title>
            </>
          )}
          <S.Tag parameter="group" group={group}>
            {group}
          </S.Tag>
          {favorite === enums.Favorite.FAVORITED && (
            <S.Tag parameter="favorite" favorite={favorite}>
              {favorite}
            </S.Tag>
          )}
        </S.Tags>
      </label>

      <S.Text
        disabled={!isEditing}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div>
        <label htmlFor="email">Email</label>
        <S.Text
          id="email"
          disabled={!isEditing}
          value={email}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <S.Text
          id="phone"
          disabled={!isEditing}
          value={phone}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  editContact({
                    id,
                    name,
                    title,
                    email,
                    phone,
                    group,
                    favorite
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.DeleteCancelButton onClick={cancelEdit}>
              Cancelar
            </S.DeleteCancelButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.DeleteCancelButton onClick={() => dispatch(deleteContact(id))}>
              Remover
            </S.DeleteCancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contact
