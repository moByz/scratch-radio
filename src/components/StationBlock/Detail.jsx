import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

function Detail({
  setOpenPopup = (f) => f,
  openDetailStation = (f) => f,
  openPopup = false,
  id = null,
  name = '',
  description = '',
  art = '',
  album = '',
}) {
  const nodeRef = React.useRef(null);

  const imageBg = (image) => (image.includes('200x200') ? image.replace('200x200', '1920x1080') : `/stations-ico/1920x1080_${id}.webp`);

  const imageStation = (image) => (image.includes('200x200') ? image.replace('200x200', '500x500') : image);

  const closePopup = React.useCallback(
    ({ key }) => {
      if (key === 'Escape') {
        setOpenPopup(false);
      }
    },
    [setOpenPopup],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', (event) => closePopup(event));
  }, [closePopup]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={openPopup}
      timeout={800}
      classNames="popup"
      unmountOnExit
      onEnter={() => setOpenPopup(true)}
      onExited={() => setOpenPopup(false)}
    >
      <div className="popup station-detail" ref={nodeRef}>
        <figure className="station-detail__bg">
          <img
            src={imageBg(art)}
            alt={description}
            className="station-detail__bg-img"
          />
        </figure>
        <div className="popup__content">
          <div className="popup__header container">
            <button
              type="button"
              className="close-button popup__close"
              onClick={openDetailStation}
            >
              <svg
                className="close-button__icon"
                fill="#fff"
                width={19}
                height={19}
                viewBox="0 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.2407 9.50014L18.6389 2.10154C19.1204 1.6203 19.1204 0.842184 18.6389 0.360936C18.1577 -0.120312 17.3796 -0.120312 16.8983 0.360936L9.49989 7.75953L2.10167 0.360936C1.62021 -0.120312 0.842336 -0.120312 0.361098 0.360936C-0.120366 0.842184 -0.120366 1.6203 0.361098 2.10154L7.75932 9.50014L0.361098 16.8987C-0.120366 17.38 -0.120366 18.1581 0.361098 18.6393C0.600928 18.8794 0.916268 19 1.23138 19C1.5465 19 1.86161 18.8794 2.10167 18.6393L9.49989 11.2407L16.8983 18.6393C17.1384 18.8794 17.4535 19 17.7686 19C18.0837 19 18.3988 18.8794 18.6389 18.6393C19.1204 18.1581 19.1204 17.38 18.6389 16.8987L11.2407 9.50014Z" />
              </svg>
            </button>
            <div className="popup__title">{name}</div>
          </div>
          <div className="popup__container container">
            <figure className="station-detail__figure">
              <img
                src={imageStation(art)}
                alt={description}
                className="station-detail__image"
              />
            </figure>
            <div className="station-detail__desc">
              <span className="station-detail__desc-text">
                {description}
              </span>
            </div>
            {album && (
              <div className="text-center station-detail__link">
                <a
                  href={album}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link--theme_gold"
                >
                  Link to artist
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

Detail.propTypes = {
  setOpenPopup: PropTypes.func.isRequired,
  openDetailStation: PropTypes.func.isRequired,
  openPopup: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  art: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
};

export default Detail;
