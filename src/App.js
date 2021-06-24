import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import './index.css';

function App() {
  let categoryInfo = {title:"Categoryy List"};
  let productInfo ={title:"Product List", anything:"Anything"};
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 font-bold">
          <Navi/>
        </div>
        <div className="grid grid-cols-3 ">
          <CategoryList info={categoryInfo}/>
          <div className="grid grid-cols-1 ">
           <ProductList info={productInfo}/>
        </div>
        </div>
        
      </div>
      
    </div>
  );
}
 
export default App;
