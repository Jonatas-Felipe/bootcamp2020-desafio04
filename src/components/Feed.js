import React, { Component } from 'react';

import Post from './Post';

class Feed extends Component{

  state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Gabriel Tedeschi",
            avatar: "https://avatars0.githubusercontent.com/u/12170214"
          },
          date: "24 Fevereiro 2020",
          content: "Rocketseat rules!!!",
          comments: [
            {
              id: 1,
              author: {
                name: "Jonatas Felipe",
                avatar: "https://avatars0.githubusercontent.com/u/46595834"
              },
              content: "COOOOOOOOOL!"
            }
          ]
        },
        {
          id: 2,
          author: {
            name: "Gabriela Ferreira",
            avatar: "https://avatars0.githubusercontent.com/u/56211563"
          },
          date: "24 Fevereiro 2020",
          content: "ReactJS é Incrivel.",
          comments: [
            {
              id: 1,
              author: {
                name: "Jonatas Felipe",
                avatar: "https://avatars0.githubusercontent.com/u/46595834"
              },
              content: "AMAZING!"
            }
          ]
        }
      ],
  };

  render(){
    const { posts } = this.state; 

    return(
      <section>
        {posts.map(post => <Post key={post.id} data={post} />)}
      </section>
    )
  };
}

export default Feed;
