import React, { Component } from 'react';
class Home extends Component {
    constructor(){
        super()
        // 定义数据
        this.state = {
            name:'张三',
            age:30
        }
    }
    render(){
        return (
            <div>
                <p>我是{this.state.name}</p>
                <p>我的年龄是{this.state.age}</p>
            </div>
        )
    }
}
export default Home;