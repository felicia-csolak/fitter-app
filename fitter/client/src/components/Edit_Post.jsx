import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

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
            <>
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.handlePostUpdate(parseInt(this.props.id), this.state);
            }}>

        <h3>Edit Post Content</h3>

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
        </>
        )
    }
}

export default withRouter(Edit_Post)
