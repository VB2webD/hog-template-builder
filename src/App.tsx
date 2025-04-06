import './App.css'
import './components/Grid/grid.tsx'
import {Grid} from "./components/Grid/grid.tsx";
import {TowerDisplay} from "./components/TowerDisplay/TowerDisplay.tsx";
import {Inventory} from "./components/Inventory/Inventory.tsx";
import {ItemDisplay} from "./components/ItemDisplay/ItemDisplay.tsx";

function App() {


    return (
        <>
            <Inventory/>
            <ItemDisplay/>
            <TowerDisplay/>
            <div className="card">
                <h3>Grid</h3>
                <Grid isMurloc={false}/>
            </div>
        </>
    )
}

export default App
