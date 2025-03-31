import './App.css'
import './components/Grid/Grid.tsx'
import {Grid} from "./components/Grid/Grid.tsx";

function App() {


    return (
        <>
            <h1>Grid</h1>
            <div className="card">
                <Grid isMurloc={true}/>
            </div>
        </>
    )
}

export default App
