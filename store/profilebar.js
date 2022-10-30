export const state = () => ({
    profilebar: false
})

export const mutations = {
    toggle(state, payload) {
        state.profilebar = payload.status;
    },
}