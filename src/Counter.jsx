import {useState} from 'react';

const Counter=()=>{

    const [state, setCounter]=useState(0);
    const [state1, setCounter1]=useState(1);

    const add=()=>{
        setCounter(state + state1);
    }

    const sus=()=>{
        setCounter(state - state1);
    }

    const restart=()=>{
        setCounter(0);
    }

    
    const add1=()=>{
        setCounter1(state1 + 1);
    }

    const sus1=()=>{
        setCounter1(state1 - 1);
    }

    const restart1=()=>{
        setCounter1(1);
    }

    return(
        <main>
            <section id="1">
                <p>{state}</p>
                <button id="bt1" onClick={()=>add()}>Sumar</button>
                <button id="bt1" onClick={()=>sus()}>Restar</button>
                <button id="bt1" onClick={()=>restart()}>Restart</button>
            </section>
            
            
            <section  id="1">
                
                <p id="blue">{state1}</p>
                <button id="bt1" onClick={()=>add1()}>Sumar</button>
                <button id="bt1" onClick={()=>sus1()}>Restar</button>
                <button id="bt1" onClick={()=>restart1()}>Restart</button>
            </section>
            

        </main>

    )

}

export default Counter;