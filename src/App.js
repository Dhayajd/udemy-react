import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Imgsec from "./components/Img_sec"
import Recommanded from "./components/Recommanded"
import Topics from "./components/Topics"
import Popular from "./components/Popular"
import Footer from "./components/Footer"


function App(){
    return(
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Imgsec></Imgsec>
            <Recommanded></Recommanded>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}
export default App