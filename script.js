
    class Calculator {
    constructor(initialOutput, currentOutput){
        this.initialOutput = initialOutput
        this.currentOutput = currentOutput
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.initialOperand = ''
        this.operation = undefined
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }

    appendNumber(number){ 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if (this.currentOperand === '') return
        if (this.initialOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.initialOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation 
        const initial = parseFloat(this.initialOperand)
        const current = parseFloat(this.currentOperand) 
        switch (this.operation){
            case '+':
                computation = initial + current
                break
            case '-':
                    computation = initial - current
                    break
            case '*':
                computation = initial * current
                break
            case '/':
                computation = initial / current
                break

            default:
                return  
        }
        this.currentOperand = computation
        this.operation = undefined
        this.initialOperand = ''
    }

    updateDisplay(){
        this.currentOutput.innerText = this.currentOperand
        this.initialOutput.innerText = this.initialOperand
        
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const initialOutput = document.querySelector('[data-initial-output]')
const currentOutput = document.querySelector('[data-current-output]')


const calculator = new Calculator(initialOutput, currentOutput)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
    })


deleteButton.addEventListener('click', button => {
        calculator.delete()
        calculator.updateDisplay()
    })