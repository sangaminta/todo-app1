import React, { Component } from 'react'

 class ViewMessage extends Component {
     state={
         data:[
             {id:1, msg:"learn css"},
             {id:2, msg:"learn html"},
             {id:3, msg:"learn bootstrap"},
             {id:4, msg:"learn reactjs"}
         ]
     }
    render() {
        // console.log(id,'-----------------')
        const id = this.props.match.params.id
        const message = this.state.data.find((item)=>{
            
            return item.id== id 
            
        })
        console.log(message,'jjjjjjjjjjjjj');
        
        return (
            <div className="panel panel-danger">
                <div className ='panel-heading'>{message.msg}</div>
                
            </div>
        )
    }
}
export default ViewMessage;