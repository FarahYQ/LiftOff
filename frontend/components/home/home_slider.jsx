import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class HomeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIdx: 0
    };

  }

  componentDidMount() {
    this.props.getFirstFive();
  }

  renderNewImg(idx) {
    return (e) => {
      this.setState({ photoIdx: idx })
    }
  }

  render() {
    let idx = this.state.photoIdx;
    const camps = this.props.camps;
    if (!camps) {
      return <div>loading...</div>
    }
    const photos = ["https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_tech4.jpg",
      "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_art1.jpg",
      "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_pen.jpg",
      "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_pottery1.jpg",
      "https://s3-us-west-1.amazonaws.com/liftoff-go-photos/campaign-pics/campaigns_bike.jpg"]

    return (
      <div className="slider">
        <Link to={`/campaigns/${camps[idx].id}`}>
          <img className="current-slider-photo" src={camps[idx].main_photo_url} />
        </Link>
        <div className="featured">Featured</div>
        <p className="featured-text">
          Laboriosam excepturi possimus aliquam dolores nesciunt consequatur
          voluptatem. Fugit quam ducimus non.
        </p>
        <div className="slider-arrows">
          <button className="left-slider-arrow" onClick={this.renderNewImg((idx+4)%5).bind(this)}>
            <i className="fas fa-chevron-circle-left" style={{color:"white"}}></i>
          </button>
          <button className="right-slider-arrow" onClick={this.renderNewImg((idx+1)%5).bind(this)}>
            <i className="fas fa-chevron-circle-right"></i>
          </button>
          <div></div>
        </div>
      </div>
    )
  }

}


export default withRouter(HomeSlider);
