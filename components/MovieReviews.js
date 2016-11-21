const React = require('react')

function MovieReviews(props) {
  return (
    <ul className="review-list">
      {props.reviews.map(review => (<li className="review">review.display_title</li>))}
    </ul>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews
