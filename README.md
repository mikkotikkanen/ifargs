ifargs
========

**Simplifying function arguments with high entropy**

For those days when the permutations of function arguments gets too complex to handle in any simple way. 

## Usage
```javascript
args = ifargs(arguments, 'this[number], that[number]') || args;
args = ifargs(arguments, 'this[number], that[number], them...') || args; // Stack rest of the arguments to them
args = ifargs(arguments, 'data[object]') || args;
args = ifargs(arguments, 'name[string], age[number]?') || args; // Set age as optional argument
args = ifargs(arguments, 'size[number]') || args;
```

