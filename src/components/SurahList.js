
import { Component } from 'react';
import '../css/App.css';
import Footer from './Footer';
import Header from './Header';

import ApiClient from './ApiClient';

import '../css/App.scss';
import Pagination from './Pagination';
import SurahCard from './SurahCard';



class SurahList extends Component {
  constructor() {
    super();
    this.state = {
      quranData: [],
      lastIndex: 0,
      currentQuranData: [], 
      currentPage: null, 
      totalPages: null
    }
    this.onPageChanged = this.onPageChanged.bind(this);
  }
  componentDidMount() {
    const config = {
      headers: {
        'accept': '*/*',
        'content-type': 'application/json'
      }
    };

    ApiClient.get('quran/quran-uthmani',config).then(res=> {
      console.log(res.data);
      const data = res.data;

      let surahsData  = data.data.surahs.map(item => {
        item.aptId = this.state.lastIndex;
        this.setState({ lastIndex: this.state.lastIndex + 1 });
        return item;
      });
      console.log(surahsData);
      //const { data: quranData } = surahsData;
      this.setState({quranData:surahsData});
      console.log(this.state.quranData);
    }).catch(err => {
      // what now?
      console.log(err);
    })
  }
  onPageChanged = data => {
    const { quranData } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentQuranData = quranData.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentQuranData, totalPages });
  }


  render(){
    const { quranData, currentQuranData, currentPage, totalPages } = this.state;
    const totalSurahs = quranData.length;

    if (totalSurahs === 0) return null;

    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

   
  return (

    <>
    <Header className="App-header">
       
    </Header>
    <div className="App"></div>
    <div>
    <div className="container mb-5">
        <div className="row d-flex flex-row py-5">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <h2 className={headerClass}>
                <strong className="text-secondary">{totalSurahs}</strong> Surahs
              </h2>
              { currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                </span>
              ) }
            </div>
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={totalSurahs} pageLimit={18} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
          </div>

          { currentQuranData.map(surah => <SurahCard key={surah.aptId} surah={surah} />) }
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>

  );
}
}

export default SurahList;
