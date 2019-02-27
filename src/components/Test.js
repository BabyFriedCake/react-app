import React from 'react'
import '../assets/css/index.css'
class Test extends React.Component {
    constructor(props) {
        // props用于父子组件传值
        super(props)
        this.state = {
            msg: '我是Test组件',
            title: '我是一个',
            color: 'red'
        }
    }
    render() {
        return (
            <div>
                <h2 title={this.state.title + this.state.msg}>
                    {this.state.msg}
                </h2>
                <br />
                <h3 className={this.state.color}>我是一个红色的h3.....</h3>
                <br />
                <label htmlFor="name">姓名</label>
                <input type="text" id="name" />
            </div>
        )
    }
}
export default Test;