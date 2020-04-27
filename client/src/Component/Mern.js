import React, { Component } from 'react';
import axios from 'axios'

class Mern extends Component {
    constructor(props) {

        super(props);
        this.state = {
            title: '',
            author: '',
            body: '',
            posts: []


        }
    }
    componentDidMount = () => {
        this.getBlogPost();
    };


    getBlogPost = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.setState({ posts: data });
                console.log('Data has been received!!');
            })
            .catch(() => {
                alert('Error retrieving data!!!');
            });
    }
    //handleRemove = (id) => {
    //    // Filter all todos except the one to be removed
    //    const remainder = this.state.data.filter((todo) => {
    //        if (todo.id !== id) return todo;
    //    });
    //    // Update state with filter
    //    axios.delete(this.apiUrl + '/' + id)
    //        .then((res) => {
    //            this.setState({ data: remainder });
    //        })
    //}
    Delete = (id) => {
     
        const remainder = this.state.posts.filter((x) => {
            if (x._id !== id) return x;
        });
        axios.delete('.api' + '/' + id)
            .then((res) => {
                this.setState({
                    posts: remainder
                })
            })
        console.log("sb sdbjkdsk", id)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    submit = (e) => {
        e.preventDefault();
        const payload = {
            title: this.state.title,
            author: this.state.author,
            body: this.state.body
        };
        axios({
            url: '/api/save ',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('data has been sent to the server');
                this.resetUserInputs();
                this.getBlogPost();
            })
            .catch(() => {
                console.log('Internal server error')
            });
    };
    resetUserInputs = () => {
        this.setState({
            title: '',
            body: '',
            author: ''
        });
    };
    displayBlogPost = (posts) => {

        if (!posts.length) return null;


        return posts.map((post, index) => (
            <div onClick={this.Delete} key={index} className="blog-post__display">
                <h3 >{post.title}</h3>
                <p>{post.author}</p>
                <p>{post.body}</p>
            </div>
        ));
    };
    render() {
        console.log('state', this.state)




        return (

            <div>
                <form onSubmit={this.submit}>
                    <div className="form-input">
                        <input
                            type='text'
                            name='title'
                            placeholder='Enter your title'
                            value={this.state.title}
                            onChange={this.handleChange}
                        />

                    </div>
                    <br />
                    <div className="form-input">
                        <input
                            type='text'
                            name='author'
                            placeholder='Enter author name'
                            value={this.state.author}
                            onChange={this.handleChange}
                        />

                    </div>
                    <br />

                    <div className="form-input">
                        <textarea
                            name='body'
                            placeholder='Enter body details'
                            value={this.state.body}
                            cols='30'
                            rows='10'
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                    <br />
                    <button onClick={this.submit}>Submit</button>
                </form>

                <div className="blog-">
                    {this.displayBlogPost(this.state.posts)}
                </div>
            </div>
        )
    }
}

export default Mern;
