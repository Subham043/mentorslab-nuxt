export const state = () => ({
    dark: false,
    class:'hold-transition light-skin sidebar-mini theme-primary fixed'
})

export const mutations = {
    toggle(state) {
        state.dark = !state.dark;
        state.class = state.dark ? 'hold-transition dark-skin sidebar-mini theme-primary fixed' : 'hold-transition light-skin sidebar-mini theme-primary fixed';
        // document.getElementsByTagName('body')[0].style.background = state.dark ? '#171e32' : '#f6f9fb';
        // document.getElementsByTagName('body')[0].style.color = state.dark ? 'rgba(255, 255, 255, 0.85)' : '#191d33';
    }
}