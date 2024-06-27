// Immediately Invoked Function Expressions (IIFE)


(function sahil(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sahil')

