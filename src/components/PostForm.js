import React, {Component} from 'react'
import {connect} from 'react-redux'
import {newPost} from '../redux/actions/postActions'

class PostForm extends Component{
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.submit = this.submit.bind(this)
        this.state = {
            title: '',
            body: ''
        }}


    onChange(e){
      this.setState({
        [e.target.name] : e.target.value
      })}


    submit(e){
      e.preventDefault()
      const newItem = {
        title: this.state.title,
        body: this.state.body
      }
      this.props.newPost(newItem)
    }


    render(){
        return(
            <div className='form'>
              <h2>Add Item</h2><br/>
                <form onSubmit={this.submit} >
                    <div>
                        <label>Enter Title:</label><br/>
                        <input type='text' name='title' value={this.state.title} onChange={this.onChange} />
                    </div>
                    <br/>
                    <div>
                      <label>Enter Text: </label><br/>
                      <textarea name='body' value={this.state.body} onChange={this.onChange} />
                    </div>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null,{newPost})(PostForm)