import "bootstrap/dist/css/bootstrap.min.css";
import { MyBudgetTracker } from "./views/MyBudgetTracker";
import { AppProvider } from "./context/AppContext"; // Import AppProvider

const App = () => {
  return (
    <AppProvider>
      <MyBudgetTracker />
    </AppProvider>
  );
};

export default App;