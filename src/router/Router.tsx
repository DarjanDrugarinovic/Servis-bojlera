import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Home from "pages/home/Home";
import { RegularBoilers } from "pages/regular-boilers/RegularBoilers";
import { FlowBoilers } from "pages/flow-boilers/FlowBoilers";
import { ServiceServices } from "pages/service-services/ServiceServices";
import { ServicesAndRepairs } from "pages/services-and-repairs/ServicesAndRepairs";
import About from "pages/about/About";
import { Contact } from "pages/contact/Contact";
import { Warranty } from "pages/warranty/Warranty";
import { Payment } from "pages/payment/Payment";

const {
  regularBoilers,
  flowBoilers,
  serviceServices,
  servicesAndRepairs,
  about,
  contact,
  warranty,
  payment,
} = routes;

export default function Router() {
  return (
    <Routes>
      <Route path={regularBoilers} element={<RegularBoilers />} />
      <Route path={flowBoilers} element={<FlowBoilers />} />
      <Route path={serviceServices} element={<ServiceServices />} />
      <Route path={servicesAndRepairs} element={<ServicesAndRepairs />} />
      <Route path={about} element={<About />} />
      <Route path={contact} element={<Contact />} />
      <Route path={warranty} element={<Warranty />} />
      <Route path={payment} element={<Payment />} />
      <Route path={"*"} element={<Home />} />
    </Routes>
  );
}
