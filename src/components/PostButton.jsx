import React from 'react';

function PostButton() {
  const handlePostClick = () => {
    // Placeholder action - display a message for now
    alert('Post functionality will be implemented later.');
  };

  return (
    <div>
      <div className="field">
        <button className="ui black button" onClick={handlePostClick}>Post</button>
      </div>
    </div>
  );
}

export default PostButton;