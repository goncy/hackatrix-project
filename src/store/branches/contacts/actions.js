import { makeAction } from "async-action-creator"

import { NAMESPACE } from "./constants"

export const addContact = makeAction(`${NAMESPACE}/ADD_CONTACT`)
export const addMessage = makeAction(`${NAMESPACE}/ADD_MESSAGE`)
