import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Comments extends Component {
    constructor(props){
        super()
    }
    render() {
        return (
            <>
                    <div className="feed-container">
                    {this.props.comments && this.props.comments.map(comment => (
                        <React.Fragment key={this.props.comments.id}>
                        <div className="post-feed-container">
                            <div className='post-header'>
                                {this.props.username && 
                                <>
                                <Link to={`/users/${this.props.user_id}`}>
                                    <div>@{this.props.username} commented at </div>
                                    <div>{comment.updated_at}</div>
                                </Link>
                                </>
                                }
                            </div>
                        <div className="post-content">
                            <p>{comment.content}</p>
                        </div>
                        <div className="post-footer"></div>
                        </div>
                        </React.Fragment>
                    ))}
            </div>
            </>
        )
    }
}
