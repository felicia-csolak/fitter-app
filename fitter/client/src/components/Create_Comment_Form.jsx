import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Create_Comment_Form extends Component {
    constructor(props) {
        super()
    }
    state = {
        comment: {
            content: '',
            post_id: ''
        }
    }

    componentDidMount = () => {
        console.log(this.props)
        this.setState({
            comment: {
                post_id: this.props.match.params.id
            }
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            comment: {
                ...prevState.comment,
                [name]: value
            }
        }))
    }


    render() {
        return (
            <>
                <div className="sub-header-container">
                    {this.props.currentUser && (
                        <div className="post-header">
                            Hi @{this.props.currentUser.username}!  Leave a comment.
                        </div>)}
                    <div className="post-content">
                        <form onSubmit={(e) => { e.preventDefault(); this.props.handleCommentCreate(this.state.comment.post_id, this.state.comment.content) }}>
                            Content:
                        <input
                                name='content'
                                type='text'
                                value={this.state.comment.content}
                                onChange={this.handleChange}
                            />
                            <input type='submit' value="Submit" />
                        </form>
                    </div>
                    <div className="post-footer"></div>
                </div>
            </>
        )
    }
}

export default withRouter(Create_Comment_Form)
