export const state = () => ({
    profilebar: false
})

export const mutations = {
    toggle(state) {
        state.profilebar = !state.profilebar;
    },
}