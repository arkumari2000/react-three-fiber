import React from 'react';

import './styles.css';

export const BottomBar = () => {
  return (
    <div className='bottom-wrapper' role='bottom-bar'>
      <div className='bottom-bar'>
        <div className='button'>
          <ion-icon name='square-outline' size='large' role='stop'></ion-icon>
        </div>
        <div className='button'>
          <ion-icon name='pause-outline' size='large' role='split'></ion-icon>
        </div>
        <div className='button'>
          <ion-icon name='cube-outline' size='large' role='cube'></ion-icon>
        </div>
      </div>
    </div>
  );
};
