import React from "react";
import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor.
          <div className="singlePostEdit">
            <i class="singlePostIcon far fa-edit"></i>
            <i class="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Mahier</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptatibus fuga aliquam atque incidunt expedita beatae architecto
          vero ea, eligendi blanditiis commodi sequi ipsa autem placeat ex
          exercitationem! Vitae, fugiat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptatibus fuga aliquam atque incidunt expedita beatae architecto
          vero ea, eligendi blanditiis commodi sequi ipsa autem placeat ex
          exercitationem! Vitae, fugiat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptatibus fuga aliquam atque incidunt expedita beatae architecto
          vero ea, eligendi blanditiis commodi sequi ipsa autem placeat ex
          exercitationem! Vitae, fugiat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptatibus fuga aliquam atque incidunt expedita beatae architecto
          vero ea, eligendi blanditiis commodi sequi ipsa autem placeat ex
          exercitationem! Vitae, fugiat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          voluptatibus fuga aliquam atque incidunt expedita beatae architecto
          vero ea, eligendi blanditiis commodi sequi ipsa autem placeat ex
          exercitationem! Vitae, fugiat!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
