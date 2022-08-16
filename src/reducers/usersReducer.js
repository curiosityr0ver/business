export default (users = null, action) => {
    if (action.type === "FETCH_USERS") {
        return action.payload
    } else {
        return users
    }
}
