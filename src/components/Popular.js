import one from "../images/img6.png"
import two from "../images/img7.jpg"
import three from "../images/img2.jpg"
import four from "../images/img3.jpg"
import five from "../images/img6.png"
import six from "../images/img9.jpg"
import seven from "../images/img8.png"
import eight from "../images/img10.jpg"

function Popular(){
    return(
        <div class="popular">
        <h3>Most Popular</h3>
        <p>Courses that meet todays challenges and tomorrows</p>
        <div class="popular__container">
            <div class="pop_card">
                <img src={one} alt="Not Loading..."></img>
                <h3>The Complete 2024 Web Development Bootcamp</h3>
                <p>Dr.Angela Yu</p>
                <p>2.9 ⭐⭐⭐</p>
                <p>899 <del>1499</del></p>
            </div>
            <div class="pop_card">
                <img src={two} alt="Not Loading..."></img>
                <h3>React Basic in Just 2 hr (2023)</h3>
                <p>Colt Steele</p>
                <p>3.0 ⭐⭐⭐</p>
                <p>299 <del>799</del></p>
            </div>
            <div class="pop_card">
                <img src={three} alt="Not Loading..."></img>
                <h3>The complete Javascript with HTML5 and CSS</h3>
                <p>Errors Makes Clever</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>499 <del>999</del></p>
            </div>
            <div class="pop_card">
                <img src={four} alt="Not Loading..."></img>
                <h3>Android Java Masterclass-Become an App Developer</h3>
                <p>Errors Makes Clever</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>799 <del>1599</del></p>
            </div>
            <div class="pop_card">
                <img src={five} alt="Not Loading..."></img>
                <h3>The Complete 2024 Web Development Bootcamp</h3>
                <p>Dr.Angela Yu</p>
                <p>2.9 ⭐⭐⭐</p>
                <p>899 <del>1499</del></p>
            </div>
            <div class="pop_card">
                <img src={six} alt="Not Loading..."></img>
                <h3>React Basic in Just 2 hr (2023)</h3>
                <p>Colt Steele</p>
                <p>3.0 ⭐⭐⭐</p>
                <p>299 <del>799</del></p>
            </div>
            <div class="pop_card">
                <img src={seven} alt="Not Loading..."></img>
                <h3>The complete Javascript with HTML5 and CSS</h3>
                <p>Errors Makes Clever</p>
                <p>4.7⭐⭐⭐⭐</p>
                <p>499 <del>999</del></p>
            </div>
            <div class="pop_card">
                <img src={eight} alt="Not Loading..."></img>
                <h3>Android Java Masterclass-Become an App Developer</h3>
                <p>Errors Makes Clever</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>799 <del>1599</del></p>
            </div>
        </div>

    </div>
    )
}
export default Popular