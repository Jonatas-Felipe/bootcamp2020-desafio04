import React from 'react';

function Comments({ data }) {
    console.log(data);

  return (
    <div className="comment">
        <img src={data.author.avatar} alt="Imagem Perfil do comentador" />
        <p><b>{data.author.name}</b> {data.content}</p>
    </div>
  );
}

export default Comments;
