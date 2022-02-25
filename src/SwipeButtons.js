import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { IconButton } from '@mui/material';



function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className="swipeButtons__repeat"> <ReplayIcon fontSize="large"/>
      </IconButton>
      <IconButton className='swipeButtons__close'><CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className='swipeButtons__star'>
      <StarIcon fontSize="large"/>
      </IconButton>
      <IconButton className='swipeButtons__fav'>
      <FavoriteIcon fontSize="large"/>
      </IconButton>
      <IconButton className='swipeButtons__fire'>
      <WhatshotIcon fontSize="large"/>
      </IconButton>
    </div>
  );
};

export default SwipeButtons;