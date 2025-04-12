import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Contact'
import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      id: 1,
      name: 'Kayque Sekishiki',
      title: 'Game and Front-End Developer',
      email: 'email_kayque@email.com',
      phone: 71912345678,
      group: enums.Group.FAMILY,
      favorite: enums.Favorite.FAVORITED
    },
    {
      id: 2,
      name: 'Pedro Pedro Pedro',
      title: 'UI and Pixel Designer',
      email: 'email_pedro@email.com',
      phone: 71912345678,
      group: enums.Group.BUSINESS,
      favorite: enums.Favorite.UNFAVORITE
    },
    {
      id: 3,
      name: 'Nathan Muricy',
      title: 'Designer',
      email: 'email_nathan@email.com',
      phone: 71912345678,
      group: enums.Group.FRIENDS,
      favorite: enums.Favorite.FAVORITED
    },
    {
      id: 4,
      name: 'Empresa X',
      title: 'RH da Empresa X',
      email: 'email_empresax@email.com',
      phone: 71912345678,
      group: enums.Group.BUSINESS,
      favorite: enums.Favorite.UNFAVORITE
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contact) => contact.id !== action.payload)
      ]
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const indexContact = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexContact >= 0) {
        state.itens[indexContact] = action.payload
      }
    },
    registerContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const isContactExist = state.itens.find(
        (contact) =>
          contact.name.toLocaleLowerCase() ===
          action.payload.name.toLocaleLowerCase()
      )

      if (isContactExist) {
        alert('There is already a contact registered with that name.')
      } else {
        const lastRegistration = state.itens[state.itens.length - 1]

        const newContact = {
          ...action.payload,
          id: lastRegistration ? lastRegistration.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    },
    changeFavorite: (
      state,
      action: PayloadAction<{ id: number; favorited: boolean }>
    ) => {
      const contactIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex].favorite = action.payload.favorited
          ? enums.Favorite.FAVORITED
          : enums.Favorite.UNFAVORITE
      }
    }
  }
})

export const { deleteContact, editContact, registerContact, changeFavorite } =
  contactsSlice.actions
export default contactsSlice.reducer
