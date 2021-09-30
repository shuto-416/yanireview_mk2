import './YaniReview.scss'
import ReviewHead from './ReviewComponents/ReviewHead'
import ReviewCards from './ReviewComponents/ReviewCards'

function YaniReview () {

    return (
        <div className="review-body">
            <ReviewHead/>
            <ReviewCards/>
        </div>
    )
}

export default YaniReview