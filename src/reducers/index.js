
import { combineReducers } from 'redux';
import postsReducer from './postsReducer'
import userReducer from './userReducer';

// const songsReducer = () => {
//     return [
//         {
//             title: "Tum Hi Ho",
//             duration: "3:24"
//         },
//         {
//             title: "Babaji Ki Booti",
//             duration: "4:15"
//         },
//         {
//             title: "Arabic Kuthu",
//             duration: "3:45"
//         },
//         {
//             title: "Kesariya",
//             duration: "2:56"
//         }
//     ]
// }
// const selectedSongReducer = (selectedSong = null, action) => {
//     if (action.type === "FETCH_POST") {
//         return action.payload
//     } else {
//         return 21
//     }
// }

// const counterReducer = (count = 0, action) => {

//     if (action.type === "COUNT_INCREMENT") {
//         return action.payload
//     }
//     if (action.type === "COUNT_DECREMENT") {
//         return action.payload
//     } else {
//         return count
//     }

// }



export default combineReducers(
    {
        posts: postsReducer,
        user: userReducer
    }
)