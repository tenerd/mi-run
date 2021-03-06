function main() {
    var inputFile = fs_open_file("compiler/fixture/knapsack.in.10.dat");
    var numberOfItems = parseInt(inputFile.read_line());
    var capacity = parseInt(inputFile.read_line());
    var items = [];
    for(var i = 0; i < numberOfItems; i++) {
        var weight = inputFile.read_line();
        var price = inputFile.read_line();
        var obj = {w: parseInt(weight), p: parseInt(price)};
        items.push(obj)
    }
    inputFile.close();

    var solution = start(items, numberOfItems, capacity);
    var outputFile = fs_open_file("compiler/fixture/knapsack.out.10.dat");
    outputFile.write(solution);
    outputFile.close();
}

function start(items, numberOfItems, capacity) {
    var solution = {
        bestPrice: 0
    };
    for (var i = 0; i < numberOfItems; i++) {
        //pop first item
        var startWith = items.shift();
        var newArray = [];
        newArray.push(startWith);
        var notUsed = items.slice();
        addToKnapsack(capacity, newArray, notUsed, startWith.w, startWith.p, solution);
        //add item back to end and try pop another
        items.push(startWith);
    }
    return solution.bestPrice;
}

function addToKnapsack(capacity, usedItems, notUsedItems, currentWeight, currentPrice, solution) {
    if (currentPrice > solution.bestPrice) {
        solution.bestPrice = currentPrice;
    }

//    optimalization
    var maxRestPrice = sumPrice(notUsedItems);
    if (currentPrice + maxRestPrice < solution.bestPrice) {
        return;
    }
    var len = notUsedItems.length();
    for(var i = 0; i < len; i++) {
        var nextAdd = notUsedItems.shift();
        usedItems.push(nextAdd);
        if (currentWeight + nextAdd.w <= capacity) {
            addToKnapsack(capacity, usedItems.slice(), notUsedItems.slice(), currentWeight + nextAdd.w, currentPrice + nextAdd.p, solution);
        }
        usedItems.pop();
    }
}

function sumPrice(items) {
    var lenArray = items.slice();
    var tmp = 0;
    for (var i = 0; i < items.length(); i++) {
        tmp += lenArray.pop()
    }
    return tmp;
}
