import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    {
      title: "Toilet Paper",
      amount: 94.67,
      date: new Date(2021, 2, 21),
    },
    {
      title: "New Tv",
      amount: 1294.67,
      date: new Date(2021, 2, 21),
    },
    {
      title: "Car insuarnce",
      amount: 294.67,
      date: new Date(2021, 2, 21),
    },
    {
      title: "Macbook pro",
      amount: 2294.67,
      date: new Date(2021, 2, 21),
    },
  ];
  return (
    <div>
      <h1>Let's get started okay</h1>
      <ExpenseItems expenses={expenses}/>
    </div>
  );
}

export default App;
