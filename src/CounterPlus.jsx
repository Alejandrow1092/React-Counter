const CounterPlus = ()=>{
    const aumento=0; 



    return(
        <>
            <Counter name="aumento"/>
            <p>{state}</p>
            <button onClick={()=>add()}>Sumar</button>
            <button onClick={()=>sus()}>Restar</button>
            <button onClick={()=>restart()}>Restar</button>
        </>
    )

}

export default CounterPlus;