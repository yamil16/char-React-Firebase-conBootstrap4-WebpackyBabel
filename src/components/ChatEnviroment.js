import React, {Component} from 'react';


class ChatEnviroment extends Component{

    constructor() {
        super();
        this.updateMessage = this.updateMessage.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.state={
            message: '',
            messages:  [ 
            {id:1, text:"hello, how are you? "},
            {id:2, text:"fine, thanks! "}        
            ]
        }
      }
      updateMessage(e) {
        this.setState({
          message: e.target.value
        });
      }
      submitMessage() {
        const message = {
          id: this.state.messages.length,
          text: this.state.message
        };
        let listMessages=this.state.messages;
        listMessages.push(message);
        this.setState({
            messages:listMessages
        });
        this.setState({
            message:''
        });
        console.log(message)
        //firebase.database().ref('messages/' + message.id).set(message);
    }
      
    
      render() {
        // looping Messages
        const currentMessages = this.state.messages.map((message, i) => {
          return (
           <li key={message.id} className="list-group-item list-group-action">{message.text}</li>
          )
        })
    
        return(
          <div className="card">
            <div class="card-body">
              <ul className="list-group">
                {currentMessages} 
              </ul>
            </div>
    
            <div class="card-footer">
              <input 
                value={this.state.message}
                onChange={this.updateMessage}
                type="text" 
                placeholder="Type your Message"
                onChange={this.updateMessage}
                className="form-control"
              />
              <button onClick={this.submitMessage} className="btn btn-primary btn-block">
                Send
              </button>
            </div>
          </div>
        )
      }
    }
    

export default ChatEnviroment;