// src/postBox.js / moved majority of code over to app.js
import React, { useState } from 'react';
import './postBox.css';

const PostBox = () => {
    const [tweet, setTweet] = useState('');
    const [postData, setPostData] = useState([]);
    const maxTweetLength = 280;

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    if (tweet.trim()) {
        setPostData((prevPostData) => [...prevPostData, tweet]);
      setTweet('');
    }
  };

  return (
    <div className="tweet-box">
      <form onSubmit={handleTweetSubmit}>
        <textarea
          value={tweet}
          onChange={handleTweetChange}
          placeholder="Ready to Game?"
          maxLength={maxTweetLength}
        />
        <div className="tweet-box-footer">
          <span className="char-count">{maxTweetLength - tweet.length}</span>
          <button type="submit" disabled={!tweet.trim()}>Tweet</button>
        </div>
      </form>
      <ul>
        {postData.map((d, i) => (
          <li key={d}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostBox;
