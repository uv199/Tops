/*
// HOF

function HOF(params) {
  return () => {};
}

let fun2 = () => {};

HOF(fun2);


// Clouser
function Clouser(params) {
    let x = 100;
    return () => {
        console.log(x);
    };
}

Clouser();


// currying
function currying() {
    return ()=>{
        return ()=>{
            
        }
    }
}
currying()()()

*/
// HOC

function HOC(Componenet) {
  return () => {
    let [x, setX] = useState();
    return <Componenet />;
  };
}
