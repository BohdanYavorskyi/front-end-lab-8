function debounce(callback, delay){
    let timeoutID = 0;
    
    return () => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(callback,delay);
    };
};

// Example
let iterator = 0;

function increaseIteratorBy1() {
    iterator++;

    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'