import CreateSnippet from "./components/CreateSnippet";
import ViewSnippet from "./components/ViewSnippet";

function App() {
  return (
    <div style={{ padding:"20px"}}>
      <h1>PasteBin Clone</h1>
      <CreateSnippet />
      <hr />
      <ViewSnippet />
    </div>
  );
}

export default App;