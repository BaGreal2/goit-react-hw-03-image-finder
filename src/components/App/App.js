import React, { Component } from 'react';
import './App.css';
import Searchbar from '../Searchar/Searchbar';
import Loader from '../Loader/Loader';
import { fetchImagesByQuery } from '../../services/galleryApi';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

export default class App extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
    page: 1,
  };
  fetchImages = () => {
    this.setState({
      loading: true,
      error: null,
    });
    fetchImagesByQuery(this.state.search, this.state.page)
      .then(res =>
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...res],
            page: prevState.page + 1,
          };
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  onSubmit = value => {
    this.setState(
      {
        search: value,
        page: 1,
        images: [],
      },
      this.fetchImages,
    );
  };
  buttonOnClick = () => {
    this.fetchImages();
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.images !== this.state.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  componentDidMount(prevProps, prevState) {
    this.setState({
      page: 1,
    })
    this.fetchImages();
  }
  render() {
    const { images, loading } = this.state;
    return (
      <div className="container">
        <Searchbar onSubmit={this.onSubmit} />
        {loading && <Loader />}
        <ImageGallery images={images} />
        {!loading && <Button onClick={this.buttonOnClick} />}
      </div>
    );
  }
}
