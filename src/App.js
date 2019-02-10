import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }

  display = (button, e) => {
    this.chk.check = this.chk.check
    if(button === '%'){
      this.setState({
        displayValue: `${parseFloat(this.state.displayValue)/10}` 
      })
      return
    }
    if([this.state.displayValue].includes('.') && button === '.'){
      return
    }
    console.log(this.state.waitingForNewValue)
    if(this.state.waitingForNewValue===false && this.state.displayValue ==='0'){
        this.setState({
          displayValue : ''
              }, ()=>{
                console.log(this.state)
                console.log('hi')
                this.setState({
                  
                  displayValue : `${this.state.displayValue}${button}`,
                  previousValue : `${this.state.displayValue}${button}`

                  })

                  },()=>{
                this.setState({
                  displayValue : `${this.state.displayValue}${button}`
                  })
        })
    } 
    else{
        this.setState({
          displayValue : `${this.state.displayValue}${button}`
            })
    }
   
 
    if(this.state.waitingForNewValue===true && this.state.displayValue !== 0){
          
      
      console.log(this.state)  
    this.setState({
        displayValue : ''
            },()=>{

              this.setState({
                waitingForNewValue : false,
                displayValue : `${this.state.displayValue}${button}`

                })

            })
            
    }
   
  }
     
    evaluate(){
      if(this.state.operation === '/'){

       console.log(parseFloat('dispVal',this.state.displayValue))
        console.log('preVal',parseFloat(this.state.previousValue))
        return parseFloat(this.state.previousValue)/parseFloat(this.state.displayValue)
      }
      if(this.state.operation === '*'){
        return parseFloat(this.state.previousValue) * parseFloat(this.state.displayValue)

      }
      if(this.state.operation === '-'){
        return parseFloat(this.state.previousValue) - parseFloat(this.state.displayValue)

      }
      if(this.state.operation === '+'){
        return parseFloat(this.state.previousValue) + parseFloat(this.state.displayValue)

      }

        }
      
        
  
    
chk = {
  check : false,
}

  
  operation = (sign) => {
    
    if(sign === '±'){
      this.setState({
        displayValue: `${parseInt(this.state.displayValue) * -1}` 
      })
      return
    }



    if(this.state.waitingForNewValue === false && !this.chk.check) {
      console.log('value',this.state.previousValue )
       this.chk.check = !this.chk.check
       console.log('checking',this.chk.check)
        this.setState({
          waitingForNewValue : true,
          operation : sign,
          previousValue : this.state.displayValue,
        })
      }
      else if(this.state.waitingForNewValue === false && this.chk.check){
        // this.chk.check = !this.chk.check
        console.log('checking',this.chk.check)

        this.setState({
          waitingForNewValue : true,
          operation : sign,
          previousValue : this.state.displayValue,
          displayValue : this.evaluate(),
        }, ()=>{

          this.setState({
            previousValue : this.state.displayValue,

          })
        })

      }
     
    

    if(this.state.waitingForNewValue === true){
      console.log(this.state)
      // this.setState({
      //   displayValue: '',

      // })
      this.setState({
        // waitingForNewValue: false,
        operation: sign,
      
      }, ()=>{
        this.setState({
          previousValue : this.state.displayValue,
          // displayValue : this.evaluate(),



        })


      })
      console.log(this.state.waitingForNewValue)
    }
  }



  allClear=()=>{
    if(this.state.displayValue){
       this.setState({
         displayValue : '1',

       }
       )
       console.log(this.state)
       this.chk.check = true;
    }
    else if(this.state.operation !== null){
      this.setState({
        operation : null,
      })
    }
    else if(this.state.previousValue !==null){
      this.setState({
        displayValue: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false
      })
    }


this.chk={
  check : false,
}
  }


  render() {
    const AC =  !this.state.previousValue ? 
     <div className=" button " onClick={this.allClear}>AC</div> : <div className=" button " onClick={this.allClear}>C</div>
    return (<>
    <div className='container'>
    <div className='calc-body'>
    
      <div  className=" calc-input scroll">
       {this.state.displayValue}
      </div>
      <div className=" calc-button-row">
     
        {AC}
        <div className=" button" onClick={e => this.display('%', e)}  >%</div>
        <div className=" button ops" onClick={e => this.operation('±', e)}  >±</div>
        <div className=" button ops" onClick={e => this.operation('/', e)}  >÷</div>
      </div>

      <div className=" calc-button-row">
        <div className="outline button" onClick={e => this.display('7', e)}  >7</div>
        <div className="outline button" onClick={e => this.display('8', e)}  >8</div>
        <div className="outline button" onClick={e => this.display('9', e)}  >9</div>
        <div className="outline button ops" onClick={e => this.operation('*', e)}  >x</div>
      </div>

      <div className=" calc-button-row">
        <div className=" button" onClick={e => this.display('4', e)}  >4</div>
        <div className=" button" onClick={e => this.display('5', e)}  >5</div>
        <div className=" button" onClick={e => this.display('6', e)}  >6</div>
        <div className=" button" onClick={e => this.operation('-', e)}  >-</div>
      </div>

      <div className=" calc-button-row">
        <div className=" button" onClick={e => this.display('1', e)}  >1</div>
        <div className=" button" onClick={e => this.display('2', e)}  >2</div>
        <div className=" button" onClick={e => this.display('3', e)}  >3</div>
        <div className=" button" onClick={e => this.operation('+', e)}  >+</div>
      </div>

      <div className=" calc-button-row">
        <div className="double" onClick={e => this.display('0', e)}  >0</div>
        <div className=" button" onClick={e => this.display('.', e)}  >.</div>
        <div className=" button" onClick={e => this.operation('=', e)}  >=</div>
      </div>
  
</div>
</div>

    </>
    )
  }
}

export default App;
