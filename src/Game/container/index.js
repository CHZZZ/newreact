import Main from "../components"
import {bindActionCreators} from "redux"
import * as index_act from "../services";
import {mapstate} from "../models"
import {connect} from "react-redux"

function bindact(dispatch) {
  return bindActionCreators(index_act, dispatch)
}

export default connect(mapstate, bindact)(Main);