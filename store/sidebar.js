export const state = () => ({
    sidebar: false
})

export const mutations = {
    toggle(state, payload) {
        state.sidebar = payload.status;
    },
}