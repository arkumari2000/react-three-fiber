import React from 'react';

import './styles.css';

export const ZoomBar = () => {
  return (
    <div className='zoom-wrapper'>
      <div className='bottom-bar'>
        <div className='button'>
          <ion-icon name='add-outline' size='large'></ion-icon>
        </div>
        <div className='button'>
          <ion-icon name='remove-outline' size='large'></ion-icon>
        </div>
      </div>
    </div>
  );
};
