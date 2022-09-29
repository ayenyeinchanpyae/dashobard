import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Center from "./components/Center";
import ConversationSections from "./components/ConversationSections";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="flex w-full  mb-4">
      <Sidebar className="w-1/4" />
      <div className=" flex w-3/4 justify-between">
        {/* <Center className="w-4/7" /> */}
        <Center className="w-5/7" />

        <ConversationSections className="w-2/7" />
      </div>
    </div>
  );
}

export default App;
