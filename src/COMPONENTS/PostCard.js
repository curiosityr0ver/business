import { React, useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import { fetchPosts } from '../ACTIONS';
import jsonPlaceholder from '../APIS/jsonPlaceholder';

const PostCard = (props) => {



    useEffect(() => {
        props.fetchPosts();
    }, []);


    const displayMethod = () => {

        console.log(props);


        return (
            <div>
                Boy
            </div>
        )
    }


    return (
        displayMethod()
    );
}

const mapStateToProps = (state) => {

    return {
        posts: state.posts
    }
}

export default connect(
    mapStateToProps,
    { fetchPosts: fetchPosts }
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