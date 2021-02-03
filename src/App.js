import React, { Component } from 'react'
import ArtWall from './ArtWall'
import Bio from './Bio'
import jsonp from 'jsonp';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      photos: []
    }
    this.loadPhotos = this.loadPhotos.bind(this);;
  }
  componentDidMount() {
    this.loadPhotos();
  }
  loadPhotos() {
    const urlParams = {
      api_key: process.env.REACT_APP_FLICKR_API_KEY,
      photoset_id: process.env.REACT_APP_FLICKR_PHOTOSET_ID,
      user_id: process.env.REACT_APP_FLICKR_USER_ID,
      format: 'json',
      per_page: '120',
      extras: 'url_m,url_c,url_l,url_h,url_o',
    };

    let url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos';
    url = Object.keys(urlParams).reduce((acc, item) => {
      return acc + '&' + item + '=' + urlParams[item];
    }, url);

    jsonp(url, { name: 'jsonFlickrApi' }, (err, data) => {

      let photos = data.photoset.photo.map(item => {
        let aspectRatio = parseFloat(item.width_o / item.height_o);
        console.log(item.url_l)
        return {
          src: item.url_l === undefined ? item.url_m : item.url_l,
          width: parseInt(item.width_o),
          height: parseInt(item.height_o),
          title: item.title,
          aspectRatio: aspectRatio,
          alt: item.title,
          key: item.id,
          srcSet: [
            `${item.url_m} ${item.width_m}w`,
            `${item.url_c} ${item.width_c}w`,
            `${item.url_l} ${item.width_l}w`,
            `${item.url_h} ${item.width_h}w`,
          ],
          sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw',
        };
      });
      this.setState({
        photos: this.state.photos ? this.state.photos.concat(photos) : photos,
      });
    });
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        visible: true
      });
    } else {
      this.setState(prevState => ({
        visible: !prevState.visible,
      }));
    }
  }

  render() {
    console.log(this.state.photos)
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.photos) {
      if (this.state.visible === false) {
        currentlyVisibleState = <ArtWall photos={this.state.photos} />
        buttonText = <Button size="lg" style={{ float: 'right', marginTop: "5px", marginBottom: "5px" }} variant="outline-info" onClick={this.handleClick}>MICHAEL CALLAHAN'S ART WORKS</Button>;
      } else {
        currentlyVisibleState = <div className="vertical-center"><Bio /></div>
        buttonText = <Button size="lg" style={{ float: 'right', marginRight: "100px", marginTop: "5px", marginBottom: "5px" }} variant="outline-info" onClick={this.handleClick}>BACK TO GALLERY</Button>
      }
      return (
        <div >
          {currentlyVisibleState}
          <Container>
            {buttonText}
          </Container>
        </div >
      );
    } else {
      return (
        <div className="App">
          <div id="msg-app-loading" className="loading-msg">
            Loading
          </div>
        </div>
      );
    }
  }
}


export default App



