import React, {Component} from 'react'
import './style.css'
class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            cronometro: 0,
            contador: 'Começar'
        }
        this.timer = null
        this.inicio = this.inicio.bind(this)
        this.limpar = this.limpar.bind(this)
    }

    inicio(){
        let state = this.state

        if(this.timer != null){
            state.contador = 'Continuar'
            clearInterval(this.timer)
            this.timer = null
            
        }else{
            this.timer = setInterval( () => {
                state.cronometro += 0.1
                this.setState(state)
            },100)
            state.contador = 'Pausar'
        }
        this.setState(state)
        
    }

    limpar(){
        if(this.timer != null){
            clearInterval(this.timer)
            this.timer = null  
        }
        let state = this.state
        state.cronometro = 0
        state.contador = 'Começar'
        this.setState(state)
    }





    render(){
        return(
            <div className='container'>
                <img src={require('./assets/cronometro.png')} className='img' />
                <a className='timer' >{this.state.cronometro.toFixed(1)}</a>
                <div className='areaBtn'>
                    <a className='botao' onClick={this.inicio} >{this.state.contador}</a>
                    <a className='botao'  onClick={this.limpar} >Limpar</a>
                </div>
            </div>
        )
    }
}

export default App