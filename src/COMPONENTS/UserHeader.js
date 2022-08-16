import React from 'react';
import { useEffect } from 'react';
import { fetchUser } from '../ACTIONS/fetchUser';
import { connect } from 'react-redux/es/exports';
const UserHeader = ({ index, fetchUser, user }) => {

    useEffect(() => {
        if (!user) {
            fetchUser() //to avoid multiple fetch of array
        }


    }, []);

    const displayMethod = () => {

        if (user) {
            return (
                <div>{user[index].name}</div>
            )
        }


    }

    return (
        <div>
            <h2>Snowy</h2>
            {displayMethod()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {

        user: state.user

    }
}

export default connect(
    mapStateToProps,
    { fetchUser: fetchUser }
)(UserHeader);
