import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Info from "./components/info/Info";
import Features from "./components/features/Features";
import Plan from "./components/plan/Plan";
import Global from "./components/globalmap/Global";


function App() {
  return (
    <div className="App">
		<Header />
		<Promo />
		<Info />
		<Features />
		<Plan />
		<Global />
    </div>
  );
}

export default App;
