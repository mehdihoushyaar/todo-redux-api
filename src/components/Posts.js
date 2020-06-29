import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../redux/actions/postActions'

class Posts extends Component{

    componentWillMount(){
       this.props.fetchPosts()
    }

    
    render(){
        const postItems = this.props.posts.reverse().map(post => {
            return (
                <div className='post' key={post.id}>
                    <h3>{post.title} </h3>
                    <p>{post.body} </p>
                    <span>post id: {post.id} </span>
                </div>
            )
        })
        return(
            <div>{postItems}</div>
        )}}


const mapStateToProps = state => ({
    posts: state.postInCombine.items
})


export default connect(mapStateToProps, {fetchPosts})(Posts)