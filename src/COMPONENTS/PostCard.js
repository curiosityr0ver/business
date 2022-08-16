import { React, useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import { fetchPosts } from '../ACTIONS';
import { fetchUser } from '../ACTIONS/fetchUser';
import UserHeader from './UserHeader';

const PostCard = ({ posts, fetchPosts, fetchUser }) => {

    useEffect(() => {
        fetchPosts()
        fetchUser()
    }, []);


    const displayMethod = () => {
        // console.log(posts);

        //make sure display method is valid for cases where API hasn't returned anything/ global variable is in it's initial state.
        return posts.map((post, index) => {
            if (index < 40) {
                return (
                    <div className="item" key={post.id}>
                        <i className="large middle aligned icon user" />
                        <div className="content">
                            <div className="description">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                                <p>{post.id}</p>
                            </div>
                            <UserHeader index={post.userId} />
                        </div>
                    </div>
                )
            } else {
                return
            }

        })
    }


    return (
        <div className="ui relaxed divided list">
            <h1>Aabga</h1>
            {displayMethod()}
        </div>

    );
}

const mapStateToProps = (state) => {

    return {
        posts: state.posts
    }
}

export default connect(
    mapStateToProps,
    {
        fetchPosts: fetchPosts,
        fetchUser: fetchUser
    }
)(PostCard);


// import React from 'react';
// import { connect } from 'react-redux/es/exports';
// import { fetchPosts } from '../ACTIONS';

// class PostList extends React.Component {
//     componentDidMount() {
//         this.props.fetchPosts();

//     }

//     renderList() {



//         return this.props.posts.map(post => {
//             return (
//                 <div className="item" key={post.id}>
//                     <i className="large middle aligned icon user" />
//                     <div className="content">
//                         <div className="description">
//                             <h2>{post.title}</h2>
//                             <p>{post.body}</p>
//                         </div>
//                     </div>
//                 </div>
//             );
//         });
//     }

//     render() {
//         console.log(this.props.posts);
//         return <div className="ui relaxed divided list">{this.renderList()}</div>;
//     }
// }

// const mapStateToProps = state => {
//     return { posts: state.posts };
// };

// export default connect(
//     mapStateToProps,
//     { fetchPosts }
// )(PostList);
