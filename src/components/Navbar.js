function Navbar(){
    return(
        <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color:" #010b1e"}}></i>
            <input class="navbar__s2__input" type="text" placeholder="Search for anything"></input>
        </div>
        <div class="navbar__s3">
           <div class="courses">
            <p>Courses</p>
            <p class="courses__popup">
                No Courses
            </p>
           </div>
          <div class="mylearning">
            <p>My Learning</p>
            <p class="mylearning__popup">
                You have not purchased any courses
            </p>
          </div>
            <i class="fa-solid fa-cart-shopping" style={{color: "#040910"}}></i>
            <i class="fa-solid fa-bell" style={{color: "#010813"}}></i>
            <i class="fa-solid fa-user" style={{color: "#010d23"}}></i>

        </div>
        <div class="navbar__s4">
            <i class="fa-solid fa-bars"></i>
        </div>

    </div>
    )
}
export default Navbar