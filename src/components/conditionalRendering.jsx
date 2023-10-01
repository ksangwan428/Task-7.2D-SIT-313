import React, { useState } from 'react';
import './conditionalRendering.css';
import { storage } from './firebase';
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function ConditionalRendering() {
  const [postType, setPostType] = useState('question');

  const handleTypeChange = (event) => {
    setPostType(event.target.value);
  };

  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload === null) return; // Use '===' for comparison, not '='
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    });
  };


  return (
    <div className="ui form">
      <div className="field">
        <h4 className="custom-heading">New Post</h4>
      </div>
      <div className="field select">
        <label>Select Post Type:</label>
        <div className="ui radio checkbox">
          <input
            id='questions'
            type="radio"
            name="postType"
            value="question"
            checked={postType === 'question'}
            onChange={handleTypeChange}
          />
          <label htmlFor='questions'>Question</label>
        </div>
        <div className="ui radio checkbox">
          <input
            id='article'
            type="radio"
            name="postType"
            value="article"
            checked={postType === 'article'}
            onChange={handleTypeChange}
          />
          <label htmlFor='article'>Article</label>
        </div>
      </div>

      <div className='main-body'>
        <h4 className="custom-heading">What do you want to ask or share: </h4>
        {postType === 'question' && (
          <div>
            <p>This section is designed based on the type of the post.</p>
            <div className="field tags">
              <label htmlFor='title'>Title:</label>
              <input type="text" placeholder="Start your question with how, what, why, etc." id='title' />
            </div>

            <div className="field image-upload">
                <label htmlFor="title">Browse</label>
                <input 
                    id="title" 
                    type="file" 
                    onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                    }}
                />
                <button onClick={uploadImage}>Upload</button>
            </div>


            <div className="field">
              <label htmlFor='describe'>Describe your problem: </label>
              <textarea placeholder="" id='describe' />
            </div>
            <div className="field tags">
              <label htmlFor='tags'>Tags:</label>
              <input type="text" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" id='tags' />
            </div>
          </div>
        )}
        {postType === 'article' && (
          <div>
            <p>This section is designed based on the type of the post.</p>
            <div className="field tags">
              <label>Title:</label>
              <input type="text" placeholder="Enter a title" />
            </div>

            <div className="field image-upload">
                <label htmlFor="title">Browse</label>
                <input 
                    id="title" 
                    type="file" 
                    onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                    }}
                />
                <button onClick={uploadImage}>Upload</button>
            </div>

            <div className="field tags">
              <label>Abstract:</label>
              <input type="text" placeholder="Enter a descriptive title" />
            </div>
            <div className="field">
              <label>Article Text:</label>
              <textarea placeholder="Enter your article text" />
            </div>
            <div className="field tags">
              <label>Tags:</label>
              <input type="text" placeholder="Please add up to 3 tags to describe what your article is about e.g., Java" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConditionalRendering;