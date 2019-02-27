import React from 'react';
class News extends React.Component {
    constructor() {
        super()
        this.state = {
            userinfo: {
                name: 'liying',
                age: 28,
            }
        }
    }
    render() {
        return (
            <div>
                <p>我是{this.state.userinfo.name}</p>
                <ul>
                    <li>我是列表</li>
                    <li>我是列表</li>
                    <li>我是列表</li>
                </ul>
            </div>
        )
    }
}
export default News