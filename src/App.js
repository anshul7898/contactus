import "./App.css";
import AddUser from "./Components/AddUser";
import NewBooking from "./Components/NewBooking";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/Root";
import SearchPrn from "./Components/SearchPrn";
import ContactUs from "./Components/ContactUs";
import NewTicket from "./Components/NewTicket";
import ViewTicket from "./Components/ViewTicket";
import CancelTicket from "./Components/CancelTicket";
import StatusContext from "./store/status-context";
import React from "react";
import Admin from "./Components/Admin";
import ViewSearchedTicket from "./Components/ViewSearchedTicket";
import BookingList from "./Components/BookingList";
import Soup from "./Components/Soup";
import Manchurians from "./Components/Manchurians";
import RiceVariety from "./Components/RiceVariety";
import Noodles from "./Components/Noodles";
import Sandwiches from "./Components/Sandwiches";
import Pizza from "./Components/Pizza";
import SabjiMandi from "./Components/SabjiMandi";
import PaneerkaKhajana from "./Components/SabjiMandi";
import Dal from "./Components/Dal";
import TandoorStarter from "./Components/TandoorStarter";
import BasmatiKaKhazana from "./Components/BasmatiKaKhazana";
import RotiKiTokari from "./Components/RotiKiTokari";
import SaladPapadRaita from "./Components/SaladsPapadRaita";
import ColdBeverages from "./Components/ColdBeverages";
import FreshFruitJuices from "./Components/FreshFruitJuices";
import FreshFruitShakes from "./Components/FreshFruitShakes";
import FruitSalads from "./Components/FruitSalads";
import IceCreams from "./Components/IceCreams";
import KidsSpecial from "./Components/KidsSpecial";
import Sundaes from "./Components/Sundaes";
import VarietyIceCreams from "./Components/VarietyIceCreams";
import Faloodas from "./Components/Faloodas";
const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {  path: "/adduser", element: <AddUser /> },
      {  path: "/newbooking", element: <NewBooking/> },
      {  path: "/searchprn", element: <SearchPrn /> },
      {  path: "/bookinglist", element: <BookingList /> },
      {  path: "/contactus", element: <ContactUs />},
      {  path: "/newticket", element: <NewTicket /> },
      {  path: "/viewticket", element: <ViewTicket /> },
      {  path: "/cancelticket", element: <CancelTicket /> },
      {  path: "/soup", element: <Soup /> },
      {  path: "/manchurians", element: <Manchurians /> },
      {  path: "/ricevariety", element: <RiceVariety /> },
      {  path: "/noodles", element: <Noodles /> },
      {  path: "/sandwiches", element: <Sandwiches /> },
      {  path: "/pizza", element: <Pizza /> },
      {  path: "/sabjimandi", element: <SabjiMandi /> },
      {  path: "/paneerkakhajana", element: <PaneerkaKhajana /> },
      {  path: "/dal", element: <Dal /> },
      {  path: "/tandoorstarter", element: <TandoorStarter /> },
      {  path: "/basmatikakhazana", element: <BasmatiKaKhazana /> },
      {  path: "/rotikitokari", element: <RotiKiTokari /> },
      {  path: "/saladpapadraita", element: <SaladPapadRaita /> },
      {  path: "/coldbeverages", element: <ColdBeverages /> },
      {  path: "/freshfruitjuices", element: <FreshFruitJuices /> },
      {  path: "/freshfruitshakes", element: <FreshFruitShakes /> },
      {  path: "/fruitsalads", element: <FruitSalads /> },
      {  path: "/icecreams", element: <IceCreams /> },
      {  path: "/kidsspecial", element: <KidsSpecial /> },
      {  path: "/sundaes", element: <Sundaes /> },
      {  path: "/varietyicecreams", element: <VarietyIceCreams /> },
      {  path: "/faloodas", element: <Faloodas /> },
      {  path: "/admin", element: <Admin /> },
      {  path: "/viewsearchedticket", element: <ViewSearchedTicket /> },
    ],
  },
]);

function App() {

  return (
    <StatusContext.Provider>
      <RouterProvider router={router} />
    </StatusContext.Provider>
  );
}

export default App;
