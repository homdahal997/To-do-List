import React, {useReducer, useEffect} from 'react';
import { initialState, reducer } from './reducers/TodoReducer';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import './App.css'
import './assets/css/bootstrap-to-do-list.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // Fetch initial todos from the API
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((todo) => ({
          id: todo.id,
          text: todo.title,
          complete: todo.completed,
        }));
        dispatch({ type: 'SET_TODOS', payload: formattedData });
      });
  }, []);

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <Header title = "ToDo List"></Header>
                  <AddTodo dispatch={dispatch} state={state} />
                  <Footer year={new Date().getFullYear()} />
                  <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default App
