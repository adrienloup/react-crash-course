import { TestGenericTypeList } from "./components/TestGenericType/TestGenericTypeList";

function App() {
  return (
    <>
      <TestGenericTypeList
        list={[{ value: 1 }, { value: 2 }, { value: 3 }]}
        onClick={(item) => console.log(item)}
      />
      <TestGenericTypeList
        list={[{ name: "1" }, { name: "2" }, { name: "3" }]}
        onClick={(item) => console.log(item)}
      />
    </>
  );
}

export default App;
