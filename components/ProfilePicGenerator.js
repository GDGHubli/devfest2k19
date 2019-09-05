import React, { Component } from 'react'
import Rodal from 'rodal';
import html2canvas from 'html2canvas';

// include styles
// import 'rodal/lib/rodal.css';

const overlayList = [
  'blue',
  'red',
  'yellow',
  'green',
  'blue-s',
  'red-s',
  'yellow-s',
  'green-s'
];

export class ProfilePicGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: true,
      isImageAvailable: false,
      selectedOverlayIndex: -1
    }
  }

  toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

  handleUpload = event => {
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      const image = document.getElementById("uploaded-image");
      image.setAttribute('display', 'block');
      image.setAttribute('src', e.target.result);
    }
    fileReader.readAsDataURL(event.target.files[0]);
  }

  addThisOverlay = index => {
    this.setState({ selectedOverlayIndex: index })
  }

  generate = async () => {
    const downloadButton = document.getElementById("download");
    html2canvas(document.querySelector("#overlay-wrapper"))
      .then(canvas => {
        const image = canvas.toDataURL('image/png')
        downloadButton.setAttribute('href', image);
      })
  }

  render() {

    return (
      <div>
        <Rodal width={500} height={500} visible={this.state.isModalVisible} onClose={this.toggleModal}>
          <h1>Generate your profile pic for Devfest</h1>
          <label>
            <span>Click here to select a photo (Don't worry photos is not uploaded anywhere)</span>
          </label>

          <div className="profile-content">
            <div id="upload-button-overlay">
              <div id="overlay-wrapper">
                <img id="uploaded-image" />
                {
                  this.state.selectedOverlayIndex > -1 ?
                    <img src={`../assets/images/overlays/${overlayList[this.state.selectedOverlayIndex]}.png`} id="overlay" width={'100%'} />
                    : null
                }
              </div>
              <input id="upload-button" type="file" onChange={this.handleUpload} />
            </div>
            <div id="overlay-list" className={'overlay-wrapper'}>
              {
                overlayList.map((o, i) => {
                  return (
                    <img key={i} onClick={() => this.addThisOverlay(i)} src={`../assets/images/overlays/${o}.png`} className={`overlay-image ${this.state.selectedOverlayIndex === i ? 'selected-overlay-image' : ''}`} />
                  )
                })
              }
            </div>
          </div>

          <a id="download" download="devfest-profile.png">
            <button type="button" className={'generate-button'} onClick={() => this.generate()}>Generate &amp; Download</button>
          </a>
          <div id="profile-pic"></div>
        </Rodal>
      </div>
    )
  }
}

export default ProfilePicGenerator
