import { useEffect } from "react";
import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
 // Sayfa kapatıldığında veya yeniden yüklendiğinde çalışacak fonksiyon
 const clearLocalStorageOnUnload = () => {
  // localStorage'ı temizle
  localStorage.clear();
};

// Sayfa bileşeni oluşturulduğunda componentdidmount gibi çalışır
useEffect(() => {
  // Sayfa kapatıldığında veya yeniden yüklendiğinde clearLocalStorageOnUnload fonksiyonunu çağır
  window.addEventListener("beforeunload", clearLocalStorageOnUnload);

  // Clean-up işlemi: bileşen kaldırıldığında eventListener'ı kaldır
  return () => {
    window.removeEventListener("beforeunload", clearLocalStorageOnUnload);
  };
}, []);
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
