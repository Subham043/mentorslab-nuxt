export default function({ redirect,  store }) {
    const role = store.state.auth.user.role
    if (role!=="ADMIN") {
        return redirect('/dashboard')
    }
}