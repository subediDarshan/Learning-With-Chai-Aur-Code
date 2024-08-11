let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let result = document.querySelector('#results');
  result.innerHTML = '';
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);

  if (
    (height == '' || isNaN(height) || height < 0) &&
    (weight == '' || isNaN(weight) || weight < 0)
  ) {
    result.appendChild(
      document.createTextNode('Please enter valid height and weight')
    );
  } else if (height == '' || isNaN(height) || height < 0) {
    result.appendChild(document.createTextNode('Please enter valid height'));
  } else if (weight == '' || isNaN(weight) || weight < 0) {
    result.appendChild(document.createTextNode('Please enter valid weight'));
  } else {
    let bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(1);
    result.appendChild(document.createTextNode(bmi));
    if (bmi < 18.6) {
      result.appendChild(document.createTextNode('You are underweight'));
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.appendChild(document.createTextNode('You are normal range'));
    } else {
      result.appendChild(document.createTextNode('You are overweight'));
    }
  }
});
