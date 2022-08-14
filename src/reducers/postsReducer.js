export default (posts = [], action) => {  //add random variable otherwise reducer will make page not load
    if (action.type === "FETCH_POSTS") {
        return action.payload

    } else if (action.type === "ADD_POST") {
        return [...posts, action.payload]
    }
    else {
        return posts
    }


}