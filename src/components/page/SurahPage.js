
import React, { Component } from 'react';
//import {Button,Card,Row,Container} from 'react-bootstrap'

import Footer from '../Footer';
import Header from '../Header';
import ApiClient from '../ApiClient';
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import Image from 'react-bootstrap/Image'
//import { ReactComponent as SurahHeaderImg} from '../../surah-header.svg';
//import PropTypes from 'prop-types';


import QuranSlider from './QuranSlider'



class SurahPage extends Component {
    constructor(props) {
      super(props);
        /*const {
          ayahs = null, name = null, englishName = null, englishNameTranslation = null, number = null, revelationType = null
        } = props.surah;*/
        this.state = {
          surahData : [],
          pageStart:0,
          pageEnd:0
        }

    }

    componentDidMount () {
        const {surahId} = this.props.match.params;
        console.log(surahId);
        /*const {surah} = this.props.match.params;
        console.log(surah);*/
        const config = {
          headers: {
            'accept': '*/*',
            'content-type': 'application/json'
          }
        };
        ApiClient.get('chapters/'+surahId,config).then(res=> {
          console.log(res.data);
          const responseData = res.data;
          let sDataAR = responseData['chapter'];
          //let sDataEN = responseData.data[1];
          console.log(sDataAR);
          //const { data: quranData } = surahsData;
          //this.setState({surahDataAR:sDataAR});

          this.setState({
            surahData:sDataAR,
            pageStart:sDataAR['pages'][0],
            pageEnd:sDataAR['pages'][1]
          })
          console.log(this.state.pageStart);
          console.log(this.state.pageEnd);
          console.log(this.state.surahData);
      }).catch(err => {
        // what now?
        console.log(err);
      })
    }
    render() {
        return(
            <>
            <Header></Header>
            <div className="container">
                {/*<div className="container-fluid">
               this is a test
                </div>*/}
              <QuranSlider pageStart={this.state.pageStart} pageEnd={this.state.pageEnd} surahData={this.state.surahData}></QuranSlider>
            </div>

            <Footer></Footer>
            </>
        );
    }
}
/*
SurahPage.propTypes = {
  surah: PropTypes.shape({
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
    }).isRequired
  }).isRequired
};*/
export default SurahPage;