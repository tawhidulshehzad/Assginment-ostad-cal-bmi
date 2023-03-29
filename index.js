const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
  const weightInput = document.getElementById('weightInput').value;
  const heightInput = document.getElementById('heightInput').value;

  const bmi = weightInput / (heightInput * heightInput);
  document.getElementById('result').value = bmi.toFixed(2);
});
