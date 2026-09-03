import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import QAProgram from "./pages/QAProgram";
import HowItWorks from "./pages/HowItWorks";
import ApplyQA from "./pages/ApplyQA";
import VerifyCertificate from "./pages/VerifyCertificate";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/qa-software-testing" element={<QAProgram />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/apply/qa-software-testing" element={<ApplyQA />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
