import './Feedback.scss'
import {CardStackDemo} from "@/app/CardsMotionCustom";

export default function FeedBackSection() {
    return (
        <section className="feedback">
            <div className="feedback__boxTop">
                <h2 className="feedback__title">FeedBacks</h2>

            </div>
            <div className="feedback__boxBottom">
                <CardStackDemo/>
            </div>
        </section>
    )
}