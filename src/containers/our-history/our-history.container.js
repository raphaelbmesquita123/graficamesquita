import React, { useState } from 'react'
import { OUR_HISTORY_IMAGE_DATA } from '../../data/diplay-image-data'
import './our-history.style.css'

function OurHistory() {
  const [nextPhoto, setNextPhoto] = useState(0)
  const goLeftPhoto = () => setNextPhoto(nextPhoto + 100)
  const goRightPhoto = () => setNextPhoto(nextPhoto - 100)
  if (nextPhoto > 0 || nextPhoto < -300) {
    setNextPhoto(0)
  }
  return (
    <div className='ourHistory' id='ourHistory'>
      <div className='skewedTop'></div>
      <h2>Nossa Historia</h2>

      <div className='ourHistoryContent'>
        <div className='ourHistoryImage'>
          {OUR_HISTORY_IMAGE_DATA.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  transform: `translateY(${nextPhoto}%)`,
                }}
              />
            )
          })}
        </div>

        <div className='ourHistoryText'>
          {OUR_HISTORY_IMAGE_DATA.map((item) => {
            return (
              <div
                key={item.id}
                style={{ transform: `translateY(${nextPhoto}%)` }}
              >
                <h4>{item.year}</h4>
                <span>{item.text}</span>
              </div>
            )
          })}
        </div>

        <i className='fas fa-chevron-left' onClick={goLeftPhoto} />
        <i className='fas fa-chevron-right' onClick={goRightPhoto} />
      </div>
    </div>
  )
}

export default OurHistory
