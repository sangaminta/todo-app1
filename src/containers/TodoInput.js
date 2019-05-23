import React, { Component } from 'react'
export default class TodoInput extends Component {
    render() {
        const {item,empty,handlerChange,handlerSubmit} = this.props;
        return (
            <div>
                <form onSubmit ={handlerSubmit}>
                    <div className ='input-group'>
                    <input type ='text' className={empty?'form-control text-capitalize mt-4 border-danger':'form-control text-capitalize mt-4 '} placeholder='your todo item' value={item} onChange ={handlerChange}/>
                    </div>
                    <button type='submit' className='btn btn-block btn-primary mt-4'>submit</button>
                </form>
            </div>            
        )
    }
}
