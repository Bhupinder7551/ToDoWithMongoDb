import React, { Component } from 'react';
import axios from 'axios';



class Todo extends Component {
    constructor(props) {

        super(props);
        this.state = {
            data: [],
            todoName: '',
            todoName2: '',


        }
        this.apiUrl = 'https://next.json-generator.com/api/json/get/Vy_YfLadO'
    }
    componentDidMount() {
        // Make HTTP reques with Axios
        axios.get(this.apiUrl)
            .then((res) => {
                // Set state with result
                this.setState({ data: res.data });
            });
        const d = this.state.data
        console.log("dygsdygbiuashiohoiv", d)
    }
    // Add todo handler
    addTodo = (val) => {
        console.log("detail of entered value", val)
        const data = { 'text': this.state.todoName, 'age': this.state.todoName2 }


        // Update data
        axios.post(this.apiUrl, data)
            .then((res) => {
                this.state.data.push(res.data.book_array);
                this.setState({ data: this.state.data });
            });
        this.refs.node.value = ''
        this.refs.node2.value = ''
    }



    // Handle remove
    handleRemove = (id) => {
        // Filter all todos except the one to be removed
        const remainder = this.state.data.filter((todo) => {
            if (todo.id !== id) return todo;
        });
        // Update state with filter
        axios.delete(this.apiUrl + '/' + id)
            .then((res) => {
                this.setState({ data: remainder });
            })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    render() {





        return (

            <div>
                <h1>To-Do [{this.state.data.length}]</h1>
                <div>
                    <form >
                        <input style={{ boxShadow: 'inset 0 0 10px red' }} ref="node" className="form-control col-md-12" type='text' name='todoName' placeholder='enter Name' onChange={this.onChange} />
                    </form>
                    <br />
                    <br />
                    <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                        <input style={{ boxShadow: 'inset 0 0 10px green' }} ref="node2" className="form-control col-md-12" type='text' name='todoName2' placeholder='enter age' onChange={this.onChange} />

                        <button
                            onClick={this.addTodo}>Submit</button>
                    </div>

                    <br />
                    <ul className="list-group" style={{ marginTop: '30px' }}>{this.state.data.map(x =>
                        <div >

                            <li style={{ justifyContent: 'space-between', display: 'flex', boxShadow: 'inset 0 0 10px grey' }} onClick={() => this.handleRemove(x.id)} className="list-group-item">{x.book_title}<span>{x.author}</span></li>
                        </div>
                    )}</ul>

                </div>
            </div>
        )
    }
}

export default Todo;
