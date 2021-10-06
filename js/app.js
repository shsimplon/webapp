//tester si le servicewolker est accepter par le navigator, etape tres importante
//serviceWolker sert pour le cach sans ca pas de progresive wabapp

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js");
}
