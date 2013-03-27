
size = 100;
"[price, weight]";
items = [[114, 18], [136, 42], [192, 88], [223, 3]];
"best is: 473"

bestPrice = 0;
bestSolution = [];
i = 0;
itemsWeight = (i) -> {
  if i.length > 0 {
    helper = i.map: (x) -> x<1>;
    helper.reduce: (x, y) -> x + y
  } else {
    0;
  }
};
itemsPrice = (i) -> {
  if i.length > 0 {
    helper = i.map: (x) -> x<0>;
    helper.reduce: (x, y) -> x + y
  } else {
    0;
  }
};


addToKnapsack = (used, unused, bestPrice) -> {

  if unused.length > 0 {
    currentPrice = itemsPrice used;
    if currentPrice > bestPrice {
      bestPrice = currentPrice;
    }

    item = unused.shift:;
    used.push: item;

    totalWeight = itemsWeight used;
    if totalWeight < size {
      addToKnapsack used, unused, bestPrice;
    }

    used.pop:;
    bestPrice;
  } else {
    bestPrice;
  }
}

printItems = (items) -> {
  dbg items.reduce: (item, acc)-> {
    acc + " [" + item<0> + ", " + item<1> + "]";
  }
}

foreach = (len, items, bestPrice) -> {
  if len isnt 0 {
    len = len - 1;
    first = items.shift:;
    itemByValue = items.clone:;
    bestPrice = addToKnapsack [first], itemByValue, bestPrice;
    items.push: first;
    foreach len, items, bestPrice;
  } else {
    bestPrice
  }
}


len = items.length;
foreach len, items, 0;

