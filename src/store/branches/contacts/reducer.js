import R from "ramda"

import { addContact, addMessage } from "./actions"

const initialState = {
  list: [
    {
      professional: 0,
      history: [
        { user: "professional", message: "Lorem ipsum" },
        { user: "pacient", message: "Dolor sit amet" }
      ]
    }
  ]
}

const contacts = (state = initialState, { type, payload }) => {
  switch (type) {
    case addContact.type:
      return state // R.assoc("options", payload)(state)
    case addMessage.type:
      return state // R.assoc("options", payload)(state)
    default:
      return state
  }
}

export default contacts
