import React from 'react';

import './styles.css';

export const LeftBar = () => {
  return (
    <div className='left-wrapper'>
      <div className='bottom-bar'>
        <div className='button'>
          <ion-icon name='airplane-outline' size='large'></ion-icon>
        </div>
        <div className='button'>
          <ion-icon name='accessibility-outline' size='large'></ion-icon>
        </div>
        <div className='button'>
          <ion-icon name='arrow-redo-outline' size='large'></ion-icon>
        </div>
      </div>
    </div>
  );
};
