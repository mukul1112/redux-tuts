import Header from "../components/Header";
import {connect} from 'react-redux'
import {Addtocart} from '../services/action/action'


const mapStateToProps=state=>({
       storedata:state.cartItmes

})
// const mapDispatchToProps=disptach=>({
//     addtocartHandler:data=>disptach(Addtocart(data))
// })

export default connect(mapStateToProps)(Header)
