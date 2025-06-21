let total = 0;

const counters = {
  wasser: 0,
  softdrinks: 0,
  bier: 0,
  alster: 0,
  alkoholfrei: 0,
  havana: 0,
  springer: 0,
  kurze: 0,
  pfand: 0
};

function addWithCount(amount, key) {
  total += amount;
  counters[key]++;
  updateTotal();
  updateCounter(key);
}

function add(amount) {
  total += amount;
  counters["pfand"]++;
  updateTotal();
  updateCounter("pfand");
}

function reset() {
  total = 0;
  for (let key in counters) {
    counters[key] = 0;
    updateCounter(key);
  }
  updateTotal();
}

function updateTotal() {
  document.getElementById("total").innerText =
    total.toFixed(2).replace('.', ',') + " €";
}

function updateCounter(key) {
  const counterElement = document.getElementById("count-" + key);
  if (counterElement) {
    counterElement.innerText = counters[key] + "×";
  }
}
