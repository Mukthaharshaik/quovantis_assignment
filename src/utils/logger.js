
//Logger Functionality for dev
export default logger ={
    log: __DEV__ ? console.log : () => {},
    error: __DEV__ ? console.log : () => {},
};