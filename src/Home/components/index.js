import React from 'react';
import {Table,Modal,Button} from 'antd';


export default class Common extends React.Component {
    constructor(arg) {
        super(arg);
    }

    componentWillMount = ()=> {

    }

    render() {
      console.log(this.props,9999)
        return (
            <div className="head">
                {this.props.red_head_tit}
            </div>
        )
    }
}