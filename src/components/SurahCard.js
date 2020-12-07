import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoLocation } from 'react-icons/go';
import { AiOutlineFieldNumber, AiOutlineNumber } from 'react-icons/ai';

import { BrowserRouter as Router, Link } from 'react-router-dom';


class SurahCard extends Component {
  constructor(props) {
    super(props);
      const {
        aptId = null, ayahs = null, name = null, englishName = null, englishNameTranslation = null, number = null, revelationType = null
      } = props.surah;
    this.aptId = aptId;
    this.name=name;
    this.englishName=englishName;
    this.englishNameTranslation=englishNameTranslation;
    this.revelationType=revelationType;
    this.number=number;
    this.ayahs=ayahs;

  }
  handleClick = evt => {
    evt.preventDefault();
    console.log('Click happened');
  }

  componentDidMount() {

  }

  render() {
    
    return (
      <Link to={"/surah/"+this.number} className="col-sm-6 col-md-4 surah-card">
      <div  key={this.aptId}>
        <div className="surah-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
          
            <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
           
            <img src={'https://assets-1f14.kxcdn.com/images/' +  (this.number).toString().padStart(3, '0')+ '.svg'} className="img-rounded" width="100" height="50" />
           
            </div>
          
         
          <div className="px-3">
            <span className="surah-region text-secondary text-uppercase"><AiOutlineFieldNumber />{this.number} {this.englishName}</span>
            <span className="surah-name text-dark d-block">{this.englishNameTranslation}</span>
            <span className="surah-name text-dark text-secondary text-lowercase small"><AiOutlineNumber />ayah:{this.ayahs.length} / <GoLocation />{this.revelationType === 'Meccan' ? 'Mecca' : 'Medina'}</span>
          </div>
        </div>
      </div>
      </Link>

    );
  }
}

SurahCard.propTypes = {
  surah: PropTypes.shape({
    aptId: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    englishName: PropTypes.string.isRequired,
    englishNameTranslation: PropTypes.string.isRequired,
    revelationType: PropTypes.string.isRequired,
    ayahs: PropTypes.arrayOf({
      hizbQuarter: PropTypes.number.isRequired,
      juz: PropTypes.number.isRequired,
      manzil: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      numberInSurah: PropTypes.number.isRequired,
      page: PropTypes.number.isRequired,
      ruku: PropTypes.number.isRequired,
      sajda: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    onSurahPageChanged:PropTypes.func
  }).isRequired
};

export default SurahCard;