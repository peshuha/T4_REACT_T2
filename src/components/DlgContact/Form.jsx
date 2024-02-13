import React from "react"

export default class Form extends React.Component {

    state = {
        email: "", 
        is_agree: false
    }

    OnChangeText = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
 
    OnChangeCheckbox = (e) => {
        this.setState({[e.target.name]: e.target.checked})
    }

    validate = () => {
        const {email, is_agree} = this.state

        if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
            alert("Некорректный майл")
            return
        }
        
        if(!is_agree) {
            alert("Требуется отметить согласие на обработку перс данных")
            return
        }

        alert("Поздравляю вас !")
    }
   
    render () {
        const {email, is_agree} = this.state

        return <div>
            <input 
                type="text" 
                name="email" 
                value={email}
                onChange={this.OnChangeText}
            />
            <input 
                type="checkbox" 
                name="is_agree" 
                value = {is_agree}
                onChange={this.OnChangeCheckbox}
            />
            <button onClick={this.validate}>Send</button>
        </div>
    }

}