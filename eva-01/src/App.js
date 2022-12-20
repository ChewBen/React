import React, {Component} from "react";
import './App.css';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component{
    state={
        todos:[
            {id:'001',name:'eat',done:true},
            {id:'002',name:'sleep',done:false},
            {id:'003',name:'code',done:true}
        ]
    }
    render() {
        const {todos}=this.state

        return < div className = "todo-container">
            <div className = "todo-wrap">
                <Header/>
                <List todos={todos}/>
                <Footer/>
            </div>
        </div>
    }
}
export default App;
