function calculateIntegral(node) {
  console.log(node.value);
  fetch("http://localhost:8000/").then((response) => {
    console.log(response);
  });
}
