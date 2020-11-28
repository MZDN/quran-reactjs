import React from 'react';
import PropTypes from 'prop-types';
import { GoLocation } from 'react-icons/go';
import {AiOutlineFieldNumber,AiOutlineNumber} from 'react-icons/ai';



const SurahCard = props => {
  const {
    aptId=null, ayahs=null,name=null,englishName=null,englishNameTranslation=null,number=null,revelationType=null
  } = props.surah || {};

  return (
    <div className="col-sm-6 col-md-4 surah-card" key={aptId}>
      <div className="surah-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
        <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
          <img  src={'https://assets-1f14.kxcdn.com/images/' + (number).toString().padStart(3, '0')+'.svg'}  class="img-rounded" width="100" height="50"/>

        </div>
        <div className="px-3">
            <span className="surah-region text-secondary text-uppercase"><AiOutlineFieldNumber/>{number} { englishName }</span>
            <span className="surah-name text-dark d-block">{englishNameTranslation}</span>
            <span className="surah-name text-dark text-secondary text-lowercase small"><AiOutlineNumber/>ayah:{ayahs.length} / <GoLocation/>{revelationType=='Meccan'? 'Mecca':'Medina'}</span>
        </div>
      </div>
    </div>
  )
}

SurahCard.propTypes = {
  surah: PropTypes.shape({
    aptId:PropTypes.number.isRequired,
    number:PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    englishName: PropTypes.string.isRequired,
    englishNameTranslation:PropTypes.string.isRequired,
    revelationType:PropTypes.string.isRequired,
    ayahs: PropTypes.shape({
        hizbQuarter: PropTypes.number.isRequired,
        juz:PropTypes.number.isRequired,
        manzil:PropTypes.number.isRequired,
        number:PropTypes.number.isRequired,
        numberInSurah:PropTypes.number.isRequired,
        page:PropTypes.number.isRequired,
        ruku:PropTypes.number.isRequired,
        sajda:PropTypes.bool.isRequired,
        text:PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default SurahCard;