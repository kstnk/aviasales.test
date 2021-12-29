import { INIT_USER } from "./actionTypes"

export function initUserAC(payload) {
    return { type: INIT_USER, payload }
}