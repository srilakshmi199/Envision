import "./App.css";
import "./Key";
import Axios from 'Axios';
 function App() {
   var url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

   async function getRecipies(){
     var result =await Axios.get(url);
     console.log(result.data)
   }
  return (
    <div>
      
    </div>
  )
}
export default App