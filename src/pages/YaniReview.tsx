import { useEffect, useState } from "react"

import './YaniReview.scss'
import ReviewHead from './ReviewComponents/ReviewHead'
import ReviewCards from './ReviewComponents/ReviewCards'
import Loading from "../components/Loading"
import { client } from "../api/client"

export type ReviewType = {
    id: number,
    title: string,
    discription: string,
    contents: string,
    img: string,
    rating: number
}

const functions = {
    getReviews: async () => {
        return await client.get({ endpoint: "yani-review" })
    },
    filterData: (data: Array<any>) => {
        return data.map((obj: any) => {
            const newObj: ReviewType = {
                id: obj.id,
                title: obj.title,
                discription: obj.discription,
                contents: obj.contents,
                img: obj.img.url,
                rating: obj.rating
            } // 新しいobjを生成

            return newObj
        })
    }
}

const YaniReview = (): JSX.Element => {

    // state
    const [reviews, setReview] = useState<Array<ReviewType>>([])

    // useEffect
    useEffect(() => {
        functions.getReviews()
            .then((data: any) => {
                setReview(functions.filterData(data.contents))
            })
    }, [])

    // JSX
    if (reviews.length === 0) {
        return (
            <div className="review-body">
                <ReviewHead />
                <Loading />
            </div>
        )
    }

    return (
        <div className="review-body">
            <ReviewHead />
            <ReviewCards reviews={reviews} />
        </div>
    )
}

export default YaniReview