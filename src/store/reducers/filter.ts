import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contact'

type FilterState = {
  letterSearch?: string
  criterion: 'family' | 'friends' | 'business' | 'favorites' | 'all'
  value?: enums.Group
}

const initialState: FilterState = {
  letterSearch: '',
  criterion: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeLetterSearch: (state, action: PayloadAction<string>) => {
      state.letterSearch = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      const { criterion, value } = action.payload
      state.criterion = criterion
      state.value = value
    }
  }
})

export const { changeLetterSearch, changeFilter } = filterSlice.actions
export default filterSlice.reducer
