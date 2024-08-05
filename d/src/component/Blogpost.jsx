import React from 'react';
import "./style.css";
import imgblog2 from '../assest/imgblog2.png';
import articleImage1 from '../assest/Article_Image1.png';
import profileImage from '../assest/Ellipse80.png';
import likeButton from '../assest/likebutton.png';
import commentButton from '../assest/commentbutton.png';

const BlogPost = () => {
  const cardData = [
    {
      imageSrc: imgblog2,
      title: "How To Make GUI in Java With Example",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: articleImage1,
      title: "Make Animated Light Mode And Dark Mode Toggle With CSS",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: imgblog2,
      title: "Make Tic Tac Toe Games With Reactjs",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: imgblog2,
      title: "How To Make GUI in Java With Example",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: articleImage1,
      title: "Make Animated Light Mode And Dark Mode Toggle With CSS",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: imgblog2,
      title: "Make Tic Tac Toe Games With Reactjs",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: imgblog2,
      title: "How To Make GUI in Java With Example",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: articleImage1,
      title: "Make Animated Light Mode And Dark Mode Toggle With CSS",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: imgblog2,
      title: "Make Tic Tac Toe Games With Reactjs",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: imgblog2,
      title: "How To Make GUI in Java With Example",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: articleImage1,
      title: "Make Animated Light Mode And Dark Mode Toggle With CSS",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    },
    {
      imageSrc: imgblog2,
      title: "Make Tic Tac Toe Games With Reactjs",
      date: "Jan 10, 2022",
      smallImageSrc: profileImage,
      authorName: "John Doe",
      likeCount: 10,
      commentCount: 5
    }
  ];

  return (
    <section className="blog-post">
      <h1>Blog Posts</h1>
      <div className="card-container" id="card-container">
        {cardData.map((data, index) => (
          <div key={index} className="card">
            <img src={data.imageSrc} alt="Blog" />
            <h3>{data.title}</h3>
            <hr />
            <div className="info-row">
              <img src={data.smallImageSrc} alt="Author" />
              <div>
                <span className="name">{data.authorName}</span>
                <div className="date">{data.date}</div>
              </div>
              <div className="icons">
                <img src={likeButton} alt="Like" />
                <span className="like-count">{data.likeCount}</span>
                <img src={commentButton} alt="Comment" />
                <span className="comment-count">{data.commentCount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPost;
