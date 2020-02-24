import React, { Component } from 'react';

import Comments from './Comments';

class Post extends Component{
    render(){
        const { data } = this.props;
        console.log(data);
        return (
            <div className="background-post">
                <div className="content-post">
                    <div className="user-post">
                        <img src={data.author.avatar} alt="Imagem Perfil" />
                        <div className="data-user-post">
                            <p>{data.author.name}</p>
                            <small>{data.date}</small>
                        </div>
                    </div>
                    <div className="text-post">
                        <p>{data.content}</p>
                    </div>
                </div>
                {data.comments.map(comment => <Comments key={comment.id} data={comment} />)}
            </div>
        );
    }
}

export default Post;
