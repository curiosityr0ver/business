import jsonPlaceholder from "../APIS/jsonPlaceholder";


export const fetchUser = () => async dispatch => {
    const response = await jsonPlaceholder.get('/users/');

    dispatch({ type: 'FETCH_USERS', payload: response.data });
};