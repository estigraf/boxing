
import {Number} from "./Number";
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
  if(nbr==2||nbr==3||nbr==5||nbr==7){
    return "yellow"
  }
   else if(nbr%2==0){
   return "green"  
  }
else if((nbr/3)%2==1||nbr==1||(nbr/5)%2==1||(nbr/7)%2==1||(nbr/9)%2==1){
  return "red"
}
else {
  return "yellow"
}
}
let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102]

export default App;
