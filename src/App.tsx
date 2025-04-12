import './App.css'
import './components/Grid/Grid.tsx'
import {PageLayout} from "./components/Layout/PageLayout.tsx";
import {useUrlSync} from "./features/Sharing/useUrlStateSync.ts";

function App() {
    useUrlSync();

    return (
        <PageLayout/>
    )
}

export default App
