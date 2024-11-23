function display() {
  fetch('/api/')
  .then(response => response.text())
  .then(data => console.log(data));
}
