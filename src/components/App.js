
import { Component } from 'react';
import '../css/App.css';
import Footer from './Footer';
import Header from './Header';
import QuranPage from './QuranPage';
import QuranBook from './QuranBook';
import FlipPage from 'react-flip-page'
import ApiClient from './ApiClient';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quranData: [],
      lastIndex: 0
    }
  }
  componentDidMount() {
    const config = {
      headers: {
        'accept': '*/*',
        'content-type': 'application/json'
      }
    };
    ApiClient.get('edition',config).then(res=> {
      console.log(res.data);
    });
    ApiClient.get('quran/quran-uthmani',config).then(res=> {
      console.log(res.data);
      const data = res.data;

      const surahsData  = data.data.surahs.map(item => {
        item.aptId = this.state.lastIndex;
        this.setState({ lastIndex: this.state.lastIndex + 1 });
        return item;
      });
      console.log(surahsData);
      this.setState({quranData:surahsData})
      console.log(this.state.quranData);
    }).catch(err => {
      // what now?
      console.log(err);
    })
  }
  render(){
  return (
    <>
    <Header className="App-header">
       
    </Header>
    <div className="App">
      <QuranPage
        quranData={this.state.quranData}
      ></QuranPage>
    </div>
    <Footer></Footer>
    </>
  );
}
}

export default App;
