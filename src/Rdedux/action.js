export const SHOW_DATA = "SHOW_DATA"
export const FILTER = "FILTER"

export const showData = (payload) => ({
    type: SHOW_DATA,
    payload
})

export const filter = (payload) => ({
    type: FILTER,
    payload
})
