import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import Spider from '../../images/spider_news.svg';
import Bird from '../../images/twitter_bird.svg';

class News extends Component {
  /* eslint-disable no-undef */
  componentDidMount() {
    if (twttr.widgets) {
      this.createTimeline();
    } else {
      twttr.ready(this.createTimeline);
    }
  }

  createTimeline = () => {
    twttr.widgets.createTimeline(
      {
        sourceType: 'profile',
        screenName: 'ApiPlatform',
      },
      this.timeline
    );
  };
  /* eslint-enable no-undef */

  render() {
    const { location } = this.props;

    return (
      <Layout location={location}>
        <div className="social">
          <Helmet title="Social" />
          <header className="page__header-overlaid bg-blue-extralight">
            <div className="container">
              <h1 className="page__title color-blue-extradark">
                What&#39;s <strong>new</strong>?
              </h1>
            </div>
          </header>
          <section className="container">
            <img src={Spider} className="social__spider" alt="spider" />
            <div className="social__content">
              <div className="social__birds">
                <img src={Bird} alt="bird" width="70" height="70" />
                <img src={Bird} alt="bird" width="50" height="50" />
                <img src={Bird} alt="bird" width="40" height="40" />
              </div>
              <div
                className="twitter__timeline"
                ref={el => {
                  this.timeline = el;
                }}
              />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
News.propTypes = {
  location: PropTypes.object.isRequired,
};

export default News;
