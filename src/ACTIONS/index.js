import jsonPlaceholder from "../APIS/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// export const fetchPosts = () => {
//     return {
//         type: "FETCH_POSTS",
//         payload: {
//             jsonPlaceholder
//         }
//     }
// }

