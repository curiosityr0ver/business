import React from 'react';
import { useEffect } from 'react';
import { fetchUser } from '../ACTIONS/fetchUser';
import { connect } from 'react-redux/es/exports';
const UserHeader = ({ index, fetchUser, users }) => {

    useEffect(() => {
        if (!users) {
            fetchUser() //to avoid multiple fetch of array
        }


    }, []);

    const displayMethod = () => {

        if (users) {  //to avoid null case of users
            return (
                <div className='header'>{users[index].name}</div>
            )
        }
    }

    return (
        <div>
            {displayMethod()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

        users: state.users

    }
}

export default connect(
    mapStateToProps,
    { fetchUser: fetchUser }
)(UserHeader);
