import React from 'react';
import "./App.css";
import Header from "./components/header";
import AddSpace1 from "./components/addSpace1";
import ActiveEvents from "./components/activeEvents";
import AddSpace2 from "./components/addSpace2";
import Categories from "./components/categories";
import Footer from "./components/Footer";


function App(){
   
    return (
        <div className = "app">
           <Header/>
            <AddSpace1/>
            <ActiveEvents/>
            <AddSpace2/>
            <Categories/>
            <Footer/>
        </div>
    );
}

export default App;