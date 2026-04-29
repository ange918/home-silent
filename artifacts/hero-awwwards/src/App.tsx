import { Switch, Route, Router as WouterRouter } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Projets from "@/pages/Projets";
import Studio from "@/pages/Studio";
import Journal from "@/pages/Journal";
import Presse from "@/pages/Presse";
import Boutique from "@/pages/Boutique";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <div className="min-h-screen w-full bg-[#f3f3f1]">
        <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projets" component={Projets} />
          <Route path="/studio" component={Studio} />
          <Route path="/journal" component={Journal} />
          <Route path="/presse" component={Presse} />
          <Route path="/boutique" component={Boutique} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </WouterRouter>
  );
}

export default App;
