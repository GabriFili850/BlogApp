import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';
import { formatId, formatTitle, formatBody, formatUserId } from '../formatters';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            console.log(post);

            return (
                <div className="item" key={formatId(post.id)}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{formatTitle(post.title)}</h2>
                            <p>{formatBody(post.body)}</p>
                        </div>
                        <UserHeader userId={formatUserId(post.userId)} />
                    </div>
                </div>
            );
        });
    }

    

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
};

export default connect(
    mapStateToProps,
    { fetchPostsAndUsers }
)(PostList);
