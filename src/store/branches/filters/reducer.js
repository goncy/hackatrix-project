import R from "ramda"

import { setLocationFilter, setSkillFilter } from "./actions"

const initialState = {
  skill: null,
  location: null
}

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case setSkillFilter.type:
      return state // R.assoc("options", payload)(state)
    case setLocationFilter.type:
      return state // R.assoc("options", payload)(state)
    default:
      return state
  }
}

export default filters
