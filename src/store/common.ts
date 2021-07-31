import { createStore } from 'nanostores'

export const common = createStore<boolean>(() => {
  common.set(true)
})

export function updateCommon(c: boolean) {
  common.set(c)
}
