import React, { Component } from 'react';
import './App.css';
import MainMap from './Maps/MainMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit() {
    const myUploadWidget = window.cloudinary.openUploadWidget(
      {
        cloudName: 'moodyappcloudname',
        uploadPreset: 'lw2wvmbe',
        defaultSource: 'camera'
      },
      (error, result) => {
        if (result.event === 'success') {
          console.log(result);
          // close widget
          myUploadWidget.close({ quiet: true });
        } else {
          // console.log(error);
        }
      },
      false
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
      console.log(position);
    }
  }

  render() {
    return (
      <div className='content'>
        <div className='container'>
          <div className='jumbotron d-flex justify-content-center h1'>
            Philly CleanUp
          </div>

          <div className='row'>
            <div className='col d-flex justify-content-center content'>
              <MainMap />
            </div>
          </div>
        </div>

        <div className='card card-footer p-3 my-2 footer'>
          <ul className='nav justify-content-center'>
            <li className='nav-item center-link'>
              <a
                className='nav-link p-0'
                href='https://www.google.com/search?q=trash+tag+reddit&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi86OLY04TiAhWsdd8KHW4KBbMQ_AUIDygC&biw=1680&bih=868'
                target='_blank'
              >
                Snaps
              </a>
            </li>
            <li className='nav-item'>
              <button
                id='uploadButton'
                className='btn btn-primary rounded-pill p-3 m-3'
                onClick={this.handleSubmit}
              >
                Take a Snap
              </button>
            </li>
            <li className='nav-item center-link'>
              <a
                className='nav-link p-0'
                href='https://www.reddit.com/r/TrashTag/'
                target='_blank'
              >
                Friends
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
