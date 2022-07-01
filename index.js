import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';



function ButtonOne(){
    return (
        <h2>heading 1</h2>
    );
}

function ButtonTwo(){
    return (
        <h2>heading 2</h2>
    );
}


function RenderFunctions(props){
    const isShow = props.isShow;

const exampleSwitch = () =>{
    switch(isShow){
        case true:
            return <ButtonOne />
            break;
        
        case false:
            return <ButtonTwo />
            break;
        
        default:
            return null;
        
        }
}


return(
    
<>
{exampleSwitch()}

</>



);



}

function Garage(props){
    const cars = props.cars;
    return(
        <div>

<h1> logical (&&) conditional rendering </h1>

{cars.length >0 &&

<p>we have {cars.length} elements in this array Car </p>

}

        </div>
    )
}



const cars=[];
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);



// {(() => {
//     switch(isShow){
//     case true:
//         return <ButtonOne />
//         break;
    
//     case false:
//         return <ButtonTwo />
//         break;
    
//     default:
//         return null;
    
//     }
    
//     })()}