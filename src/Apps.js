import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Buttons from './components/Button';


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
    if(this.state.waitingForNewValue===false && this.state.displayValue ==='0' ){
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
      if(this.state.displayValue !==''){

        this.setState({
          displayValue : `${this.state.displayValue}${button}`,
          // previousValue : `${this.state.displayValue}${button}`

            })
          

      }
      
      this.setState({
        displayValue : ''
            }, ()=>{
              console.log(this.state)
              console.log('hi')
              this.setState({
                displayValue : `${this.state.displayValue}${button}`
                })
              })
  
      //           },()=>{
      //         this.setState({
      //           displayValue : `${this.state.displayValue}${button}`
      //           })
      // })
  }
 
    }     
  
      
  
      
    evaluate(){
      if(this.operation === '/'){
          this.setState({

            displayValue : 10

          })

          console.log(this.state)
      }
      // const newArr = str.split('')
      // console.log('start',newArr)
      // let operate = 0
      //   for(let i = 0 ; i < newArr.length; i++){
        
      //     if(newArr[i] === '+'){
      //       operate = operate + parseInt(newArr[i+1])
      //     }
      //     else if(newArr[i]=== '/'){
      //       console.log(operate)
      //       operate = operate / parseInt(newArr[i+1])
      //       console.log(operate)
  
      //     }
      //     else if(newArr[i] === '*'){
      //      operate = operate * parseInt(newArr[i+1])

      //     }
      //     else if(newArr[i] ==='-'){
      //      operate = operate - parseInt(newArr[i+1])

      //     }
      //     else if(newArr[i] === '.'){
      //       console.log('now',operate)
      //       operate = operate + newArr[i]
      //       // i = newArr[i]+2
      //       console.log('after', operate)

      //     }
      //     else if(typeof parseInt(newArr[i]) === 'number' && i !== newArr.length-1 ){
      //       operate = operate + parseInt(newArr[i])
          
      //     }


        }
        
  
    


    
  


  operation = (sign) => {
    if(sign === '±'){
      this.setState({
        displayValue: `${parseInt(this.state.displayValue) * -1}` 
      })
    }

    if(sign === '%'){
      this.setState({
        displayValue: `${parseInt(this.state.displayValue) / 10}` 
      })
    }

    if(this.state.waitingForNewValue === false){
      this.setState({
        waitingForNewValue : true,
        operation : sign,
      })
    }

    if(this.state.waitingForNewValue === true){
      console.log(this.state)
      this.setState({
        waitingForNewValue: false,
        operation: sign,
        displayValue : this.evaluate(),
        previousValue : `${this.state.previousValue}${this.state.operation}${this.state.displayValue}`
      
      })
    }
  }
   


      
      


    
    
  

  allClear(){
      this.setState({
        displayValue: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false
      })

  }


  render() {
    return (<>
      <div overflow='scroll' className="row">
        <div className="col2 button display ">{this.state.displayValue}</div>
      </div>
      <div className="row">
        <div className="col3 button" onClick={e => this.allClear}>AC</div>
        <Buttons num={'%'} />
        <Buttons num={'±'} />
        <div className="col3 button" onClick={e => this.operation('/', e)}  >÷</div>
      </div>

      <div className="row">
        <div className="col3 button" onClick={e => this.display('7', e)}  >7</div>
        <div className="col3 button" onClick={e => this.display('8', e)}  >8</div>
        <div className="col3 button" onClick={e => this.display('9', e)}  >9</div>
        <div className="col3 button" onClick={e => this.operation('*', e)}  >x</div>
      </div>

      <div className="row">
        <div className="col3 button" onClick={e => this.display('4', e)}  >4</div>
        <div className="col3 button" onClick={e => this.display('5', e)}  >5</div>
        <div className="col3 button" onClick={e => this.display('6', e)}  >6</div>
        <div className="col3 button" onClick={e => this.operation('-', e)}  >-</div>
      </div>

      <div className="row">
        <div className="col3 button" onClick={e => this.display('1', e)}  >1</div>
        <div className="col3 button" onClick={e => this.display('2', e)}  >2</div>
        <div className="col3 button" onClick={e => this.display('3', e)}  >3</div>
        <div className="col3 button" onClick={e => this.operation('+', e)}  >+</div>
      </div>

      <div className="row">
        <div className="col3 button" onClick={e => this.display('0', e)}  >0</div>
        <div className="col3 button" onClick={e => this.display(';', e)}  >2</div>
        <div className="col3 button" onClick={e => this.display(';', e)}  >3</div>
        <div className="col3 button" onClick={e => this.operation('+', e)}  >+</div>
      </div>



    </>
    )
  }
}

export default App;
