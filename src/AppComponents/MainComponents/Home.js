import React, { useRef } from 'react';

export const Home = () => {
  const salTransx = 24;
  const imgRef = useRef(null);
  const salRef = useRef(null);

  const zoomInd = () => {
    if (imgRef.current && salRef.current) {
      imgRef.current.style.transform = 'scale(4) translate(-17%, 15%)';
      salRef.current.style.transform = `scale(0.8) translate(${-1 * salTransx}%, 0%)`;
      salRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
  };

  const zoomoInd = () => {
    if (imgRef.current && salRef.current) {
      imgRef.current.style.transform = 'scale(1)';
      salRef.current.style.transform = `scale(1) translate(${salTransx - 24}%, 0%)`;
      salRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
  };

  return (
    <div>
      <article
        id="home-article"
        style={{ overflow: 'hidden' }}
        onMouseOver={zoomInd}
        onMouseOut={zoomoInd}
      >
        <img
          ref={imgRef}
          id="cover-image"
          style={{ transition: 'transform 4s ease' }}
          src="asdf.jpg"
          alt="Cover Image"
        />
        <span className="material-symbols-outlined">
          <a href="#experiences-section">
            <img src="expand-more.png" alt="Down Arrow" />
          </a>
        </span>

        <div
          ref={salRef}
          id="salutation"
          className="text-overlay unselect"
          style={{
            padding: '20px',
            borderRadius: '30px',
            transition: 'transform 4s ease',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          <div style={{ fontSize: '60px' }}>
            <b>I'm Yashasvi, </b>
          </div>
          <br />
          <h4>
            With expertise in Web development, <br />
            Competitive Programming, and Data Analytics,
          </h4>
          <h5>
            I'm ready to take on diverse projects <br />
            and push the boundaries of innovation.
          </h5>
        </div>
      </article>
    </div>
  );
};

export default Home;
