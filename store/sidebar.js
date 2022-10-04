export const state = () => ({
    sidebar: false
})

export const mutations = {
    toggle(state) {
        state.sidebar = !state.sidebar;
    },
}