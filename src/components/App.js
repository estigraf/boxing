
import {Number} from "./Number";
//let array=arr()
function App() {
  return (
    <div className="App">
      {arr.map((post,index)=>
      <Number key={index}
              num={post}
             color={zoogi(post)}/>
      )
          }   

    </div>
  );
}
function zoogi(nbr){
 if( isPrime(nbr)){
    return "red"
  }
   else if(nbr%2==0){
   return "green"  
  }

else {
  return "yellow"

}
}
function isPrime(num) {
  if(num==0||num==1){return false}
  for(var i = 2; i < num; i++)
    if(num % i === 0) {return false};
    return true;
}

let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

export default App;

