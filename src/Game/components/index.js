import React from 'react';
import {Table,Modal,Button} from 'antd';
import {qus} from 'esn'


export default class Main extends React.PureComponent {
    constructor(arg) {
        super(arg);
    }

    componentWillMount = ()=> {
        const { get, act_list } = this.props
        get('/list',{r:'0.7153214477881407'},(data)=>{
            act_list(data.data.msg.newlist)
        })
    }

    render() {
        const { red_list } = this.props
        const list = red_list.map((data,index)=>(
            <div key={index}>
                <div className="list_img"><a href={data.url} target="_blank"><img src={data.appthumb} alt=""/></a></div>
                <div className="list_tit">{data.title}</div>
                <div>{data.pubdate}</div>
                <div>浏览量：{data.play}</div>
            </div>))
        return (
            <div>
                <div className="neiye">
                    <h1>我是内页，我也来个列表</h1>
                    <h3 className="hongzi">{qus('canshu')}</h3>
                </div>
                <div className="list">
                    {list}
                </div>
            </div>
        )
    }
}