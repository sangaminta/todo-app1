import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {items,handlerCheck,handlerEdit} = this.props;
        return (
            <div >
            
                {items.map((item,index) =>{
                    console.log("--item and index--",index )
                    return(
                        <div key={index} className = 'form-control text-capitalize my-2'>
                            <span><input type ="checkbox" key ={item.id} title = {item.title} onClick ={()=>handlerCheck(index)} /></span>
                            <span className ='mx-2' >{item.title}</span>
                            <span className = 'mx-2 text-success float-right'>
                            <i className ={item.checked?'fas fa-pen':''} onClick ={()=>handlerEdit(item)} />
                            </span>
                            <span className ={item.checked?'.col bg-dark rounded text-white float-right':""}>{item.checked? 'complete':''}</span>                          
                        </div>                        
                    )
                })}
            </div>  
        )
    }
}
