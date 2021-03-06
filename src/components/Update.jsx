import React from 'react';

function Update() {
  return (
    <div className="update text-center">
      <div className="update__inner">
        <span className="update__title">Congratulations, new version is available!</span>
        <p className="update__desc">We are updating the app...</p>
        <div className="update-bar axis-x-center">
          <div className="update-bar__line" />
        </div>
      </div>
    </div>
  );
}

export default Update;
