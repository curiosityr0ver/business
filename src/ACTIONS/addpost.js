export const fetchPosts = () => {
    return {
        type: "ADD_POST",
        payload: { id: 123, title: 'Post Title' }
    }
}