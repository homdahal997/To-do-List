import React, {useReducer, useEffect} from 'react';
import { initialState, reducer } from './reducers/TodoReducer';
import AddTodo from './components/AddTodo';
import './App.css'
import './assets/css/bootstrap-to-do-list.min.css'



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // Fetch initial todos from the API
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
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
                  <h1>ToDo List</h1>
                  <AddTodo dispatch={dispatch} state={state} />
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
