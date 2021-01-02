import React, { Component } from 'react';
import { AiFillGithub,AiFillHeart } from 'react-icons/ai';

class Footer extends Component {
    render() {
        return (
            <footer id="sticky-footer" className="py-4 bg-primary text-white-50">
            <div className="container text-center">
              {/*<small>Copyright &copy; Your Website</small>*/}
              <p>Made with <AiFillHeart/> by   Moctar Zaidane <AiFillGithub name="Test" onClick={event =>  window.location.href='https://github.com/MZDN'} /> </p>
            </div>
          </footer>
        );
    }
}

export default Footer;