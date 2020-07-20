import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Edit_Post extends Component {
    state = {
        content: '',
        title:''
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
            title: this.props.postItem.title
        })
    }
    
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            content: value,
            title: value
        })
    }
    render() {
        return (
            <>
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.handlePostUpdate(parseInt(this.props.id), this.state);
            }}>

        <h3>Edit Post</h3>

        <label forHTML="title">
        Title:
        <input
            type='text'
            value={this.state.title}
            onChange={this.handleChange}
        />
        </label>

        <label forHTML="content">
        Content:
        <input
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
        />
        </label>


        <button>Submit</button>
        </form>
        </>
        )
    }
}

export default withRouter(Edit_Post)
