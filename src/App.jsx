import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";

function App() {
  return (
    <>
      <center>
        <AppName />
        <AppTodo />
        <AppTodo />
        <div className="container text-center">
          <div className="row">
            <div className="col-6">Buy Milk</div>
            <div className="col-4">04/10/2022</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">
                Danger
              </button>
            </div>
            <div className="row">
              <div className="col-6">Go to college</div>
              <div className="col-4">05/10/2022</div>
              <div className="col-2">
                <button type="button" className="btn btn-danger">
                  Danger
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
