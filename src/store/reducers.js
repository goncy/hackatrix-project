import { combineReducers } from "redux"

import contacts from "./branches/contacts"
import filters from "./branches/filters"
import users from "./branches/users"

const rootReducer = combineReducers({
  [contacts.constants.NAMESPACE]: contacts.reducer,
  [filters.constants.NAMESPACE]: filters.reducer,
  [users.constants.NAMESPACE]: users.reducer
})

export default rootReducer
