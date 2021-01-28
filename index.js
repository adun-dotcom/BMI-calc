class Calculator {
  constructor(answer) {
    this.answer = answer;
  }

  calcFnct(mass, ft) { 
    this.input1 = mass;
    this.input2 = ft;
    this.result = Number(this.input1 / this.input2 / this.input2) * 10000;
    bmi.innerHTML = this.result;

  }

  displayFnct(){  if(this.input1 === '0' && this.input2 === '0') return
    this.answer.innerHTML = this.result;

  }

  bmiStatus() {
    if (this.result <= 0) {
      bmi.innerHTML = `Are you sure about your weight?`;
      return bmi.innerHTML;
    } else if (this.result > 0 && this.result < 18.5) {
      result.style.color = "red";
      bmi.innerHTML = `You're underweight 😣💔‼`;
      return bmi.innerHTML;
    } else if (this.result >= 18.5 && this.result <= 24.9) {
      result.style.color = "green";
      bmi.innerHTML = `Normal weight 😉💥`;
      return bmi.innerHTML;
    } else if (this.result >= 25 && this.result <= 29.9) {
      bmi.innerHTML = `Ahh, you're overweight 😣‼`;
      result.style.color = "red";
      return bmi.innerHTML;
    } else if (this.result >= 30 && this.result <= 39.9) {
      result.style.color = "red";
      bmi.innerHTML = `Omo, you're in the obese range ❌❌❌`;
      return bmi.innerHTML;
    } else if (this.result >= 40 && this.result <= 100) {
      result.style.color = "red";
      bmi.innerHTML = `You're extremely obese😣💔‼`;
      return bmi.innerHTML;
    } 
  }

  clearbtn() {
    result.innerHTML = "";
    weightInput.value = "";
    heightInput.value = "";
    bmi.innerHTML = "";
  }
}
const weightInput = document.querySelector(".weight");
const heightInput = document.querySelector(".height");
const bmiCalc = document.querySelector(".bmi-btn");
const bmiClear = document.querySelector(".bmi-clear");
const bmi = document.querySelector(".bmi-result");
const result = document.querySelector(".result");
const calculator = new Calculator(result);

bmiCalc.addEventListener("click", function () {
  calculator.calcFnct(weightInput.value, heightInput.value);
  calculator.displayFnct();
  bmi.innerHTML = calculator.bmiStatus();
});

bmiClear.addEventListener("click", function () {
  calculator.clearbtn();
});

console.log(calculator.bmiStatus());
