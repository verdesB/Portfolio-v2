import './Feedback.scss'
import {CardStackDemo} from "@/app/CardsMotionCustom";

export default function FeedBackSection() {
    return (
        <section id="feedbacks" className="feedback">
            <div className="feedback__boxTop">
                <h2 className="feedback__title">FEEDBACKS</h2>

            </div>
            <div className="feedback__boxBottom">
                <CardStackDemo/>
            </div>
        </section>
    )
}