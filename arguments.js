function sum (...args) {
  return args.reduce((acc, el) => acc + el);
}

function sum(...args) {
  return args.reduce((acc, el) => acc + el);
}

Function.prototype.myBind = function(context, ...bindArgs) {
  return (...callArgs) => this.apply(context, bindArgs.concat(callArgs));
};


function curriedSum(num) {
  let collection = [];
  function _curriedSum(arg) {
    collection.push(arg);
     if (collection.length === num) {
       return collection.reduce((acc, el) => acc + el);
     } else {
       return _curriedSum;
     }
  }
 return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  let collection = [];
  let _curry = (arg) => {
    collection.push(arg);
    if (collection.length === numArgs) {
      return this(...collection);
    
    } else {
      return _curry;
    }
  }
  return _curry;
}
