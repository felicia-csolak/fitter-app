import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './../css/feed.css'

class Edit_Post extends Component {
    state = {
        content: '',
    }
    
    componentDidMount() {
        if (this.props.postItem) {
        this.setFormData();
        }
    }
    
    componentDidUpdate(prevProps) {
        if ( prevProps.postItem !== this.props.postItem ) {
        this.setFormData();
        }
    }
    
    setFormData = () => {
        this.setState({
            content: this.props.postItem.content,
        })
    }
    
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            content: value,
        })
    }
    render() {
        return (
            <div className="edit-comment-master-container">
            <div className="edit-comment-container">
            <div className='post-header'>
            <h3>Edit Post Content</h3>
                        </div>
                        <div className="post-content">
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.handlePostUpdate(parseInt(this.props.id), this.state);
            }}>

        

        <label forHTML="content">
        Content:
        <input
            name='content'
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
        />
        </label>


        <button>Submit</button>
        </form>
        </div>
        <div className="post-footer"></div>
        </div>
        </div>
        )
    }
}

export default withRouter(Edit_Post)
