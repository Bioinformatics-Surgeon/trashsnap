import React, { Component } from 'react';
import './App.css';

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
      <div className='container'>
        <ul className='nav'>
          <li className='nav-item'>
            <button className='btn-primary btn'>Button</button>
          </li>
          <li className='nav-item'>
            <button
              id='uploadButton'
              className='btn btn-primary'
              onClick={this.handleSubmit}
            >
              Upload files
            </button>
          </li>
        </ul>

        <div className='row'>
          <div className='col'>Col 1</div>
          <div className='col'>Col 2</div>
        </div>
      </div>
    );
  }
}

export default App;
