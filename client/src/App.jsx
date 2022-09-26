import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import TodosNew from "./routes/TodosNew";

const TodosLoader = async () => {
  const res = await fetch("/api/todos/");
  const data = await res.json();
  return data;
};

const TodoLoader = async () => {
  const res = await fetch("/api/todos/");
  const data = await res.json();
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, loader: TodoLoader, element: <p>Testing</p> },
      { path: "todos", loader: TodosLoader, element: <TodosNew /> },
    ],
  },
]);

// const router2 = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" loader={TodosLoader} element={<TodosNew />} />
//   )
// );

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    // <Navbar />
    //     <Route path="/" element={<Todos />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
