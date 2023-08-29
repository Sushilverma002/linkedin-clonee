import React from 'react';
import './widgets.css';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
function Widgetss() {
    const newsArticle = (heading,subtitle)=>(
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordRoundedIcon/>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoRoundedIcon/>
        </div>
        {newsArticle("react is back","top news -9099 readers")}
        {newsArticle("react is back","top news -9099 readers")}
        {newsArticle("react is back","top news -9099 readers")}
        {newsArticle("react is back","top news -9099 readers")}
        {newsArticle("react is back","top news -9099 readers")}
        {newsArticle("react is back","top news -9099 readers")}
    </div>
  );
}

export default Widgetss