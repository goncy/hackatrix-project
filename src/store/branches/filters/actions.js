import { makeAction } from "async-action-creator"

import { NAMESPACE } from "./constants"

export const setSkillFilter = makeAction(`${NAMESPACE}/SET_SKILL`)
export const setLocationFilter = makeAction(`${NAMESPACE}/SET_LOCATION`)
