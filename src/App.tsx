import "./App.css";
import { useAppSelector } from "./app/hooks";
import Beans from "./features/beans/Beans";
import { selectBeansLabel } from "./features/beans/selectors";

function App() {
  const beansLabel = useAppSelector(selectBeansLabel);
  return (
    <div className="App">
      <header className="App-header">{beansLabel}</header>
      <Beans />
    </div>
  );
}

export default App;
