
import {connect} from 'react-redux'
import {Addtocart} from '../services/action/action'
import Home from "../components/home";

const mapStateToProps=state=>({
       storedata:state.cartItmes

})
const mapDispatchToProps=disptach=>({
    addtocartHandler:data=>disptach(Addtocart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
//export default Home;