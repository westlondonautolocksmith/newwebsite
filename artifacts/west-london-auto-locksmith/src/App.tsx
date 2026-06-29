import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import VehicleLockoutPage from "@/pages/VehicleLockoutPage";
import CarKeysPage from "@/pages/CarKeysPage";
import LostCarKeysPage from "@/pages/LostCarKeysPage";
import SpareCarKeyPage from "@/pages/SpareCarKeyPage";
import AreasPage from "@/pages/AreasPage";
import PricingPage from "@/pages/PricingPage";
import ReviewsPage from "@/pages/ReviewsPage";
import FAQsPage from "@/pages/FAQsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import CookiesPage from "@/pages/CookiesPage";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const pending = sessionStorage.getItem("scrollTarget");
    if (pending) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        document.getElementById(pending)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/vehicle-lockout" component={VehicleLockoutPage} />
        <Route path="/car-keys" component={CarKeysPage} />
        <Route path="/lost-car-keys" component={LostCarKeysPage} />
        <Route path="/spare-car-key" component={SpareCarKeyPage} />
        <Route path="/areas-we-cover" component={AreasPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/faqs" component={FAQsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/cookies" component={CookiesPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <TooltipProvider>
      <StructuredData />
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
        <CookieConsent />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
