import React, { Component } from 'react';
import './App.css';
import Philidelphia from './Maps/Philidelphia';

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
            Trash Snap
          </div>

          <div className='row'>
            <div className='col d-flex justify-content-center content'>
              {/* <Philidelphia /> */}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              ipsum ullam voluptatem consectetur eveniet nesciunt accusantium,
              aliquid nihil, voluptatum ipsa iusto tenetur quia fugiat nam eius.
              Expedita officia blanditiis voluptas ad veniam labore quod
              recusandae, laborum atque illum nulla ut soluta enim quisquam quis
              facilis quo explicabo, ipsa sed doloremque unde fuga? Ullam rem
              placeat numquam provident adipisci, nemo quaerat? Adipisci quasi
              laboriosam, provident voluptas quia unde eligendi dolorem nam sit
              incidunt. Labore tempora perferendis aut, enim culpa non similique
              minima mollitia nemo magni dolores itaque? Id delectus voluptas
              eaque commodi, consectetur obcaecati facilis. Earum natus
              reiciendis fuga ab quod.
            </div>
          </div>
        </div>

        <div className='card card-footer p-3 my-2 footer'>
          <ul className='nav justify-content-center'>
            <li className='nav-item center-link'>
              <a className='nav-link p-0' href='#'>
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
              <a className='nav-link p-0' href='#'>
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
