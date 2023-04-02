import { Provider } from "react-redux";
import "./App.css";
import AppRoutes from "./routes/appRoutes";
import myStore from "./redux/store";

const App = () => {
  return (
    <Provider store={myStore}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
