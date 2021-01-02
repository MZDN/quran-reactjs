import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoLocation } from 'react-icons/go';
import { AiOutlineFieldNumber, AiOutlineNumber } from 'react-icons/ai';

import {   Link } from 'react-router-dom';


class SurahCard extends Component {
  constructor(props) {
    super(props);
   /*   const {
        aptId = null, ayahs = null, name = null, englishName = null, englishNameTranslation = null, number = null, revelationType = null
      } = props.surah;
    this.aptId = aptId;
    this.name=name;
    this.englishName=englishName;
    this.englishNameTranslation=englishNameTranslation;
    this.revelationType=revelationType;
    this.number=number;
    this.ayahs=ayahs;*/
    const {
      aptId= null, bismillah_pre=null, chapter_number=1,id=1, name_arabic="الفاتحة",name_complex="Al-Fātiĥah", name_simple="Al-Fatihah",
      pages=null, revelation_order=null,revelation_place=null, translated_name=null,verses_count=null
    }= props.surah;
      this.aptId=aptId;
      this.bismillah_pre=bismillah_pre;
      this.chapter_number=chapter_number;
      this.id=id;
      this.name_arabic=name_arabic;
      this.name_complex=name_complex;
      this.name_simple=name_simple;
      this.pages=pages;
      this.revelation_order=revelation_place;
      this.revelation_place=revelation_place;
      this.translated_name=translated_name;
      this.verses_count=verses_count;

  }
  handleClick = evt => {
    evt.preventDefault();
    console.log('Click happened');
  }

  componentDidMount() {

  }

  render() {
    
    return (
      <Link to={"/surah/"+this.id} className="col-sm-6 col-md-4 surah-card">
      <div  key={this.aptId}>
        <div className="surah-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
          
            <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
           
            <img src={'https://assets-1f14.kxcdn.com/images/' +  (this.id).toString().padStart(3, '0')+ '.svg'} className="img-rounded" width="100" height="50" alt="Surah"/>
           
            </div>
          
         
          <div className="px-3">
            <span className="surah-region text-secondary text-uppercase"><AiOutlineFieldNumber />{this.id} {this.name_complex}</span>
            <span className="surah-name text-dark d-block">{this.translated_name['name']}</span>
            <span className="surah-name text-dark text-secondary text-lowercase small"><AiOutlineNumber />ayah:{this.verses_count} / <GoLocation />{this.revelation_place}</span>
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
    bismillah_pre: PropTypes.bool.isRequired,
    chapter_number: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name_arabic: PropTypes.string.isRequired,
    name_complex: PropTypes.string.isRequired,
    name_simple: PropTypes.string.isRequired,
    pages:PropTypes.array.isRequired,
    revelation_order: PropTypes.number.isRequired,
    revelation_place:PropTypes.string.isRequired,
    translated_name: PropTypes.arrayOf({
      language_name: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    verses_count:PropTypes.number.isRequired
  }).isRequired
}
/*SurahCard.propTypes = {
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
};*/

export default SurahCard;