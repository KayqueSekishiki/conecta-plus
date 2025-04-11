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
      group: enums.Group.FAMILY
    },
    {
      id: 2,
      name: 'Pedro Pedro Pedro',
      title: 'UI and Pixel Designer',
      email: 'email_pedro@email.com',
      phone: 71912345678,
      group: enums.Group.BUSINESS
    },
    {
      id: 3,
      name: 'Nathan Muricy',
      title: 'Designer',
      email: 'email_nathan@email.com',
      phone: 71912345678,
      group: enums.Group.FRIENDS
    },
    {
      id: 4,
      name: 'Empresa X',
      title: 'RH da Empresa X',
      email: 'email_empresax@email.com',
      phone: 71912345678,
      group: enums.Group.BUSINESS
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    removeContact: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contact) => contact.id !== action.payload)
      ]
    }
  }
})

export const { removeContact } = contactsSlice.actions
export default contactsSlice.reducer
