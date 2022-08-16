export default (user = null, action) => {
    if (action.type === "FETCH_USER") {
        return action.payload
    } else {
        return user
    }
}
