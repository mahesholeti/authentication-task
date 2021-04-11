import React, { useState } from 'react';

export default function Home() {
    const [apples,setApples] = useState(10);
    const [oranges,setOranges] = useState(10);
    const [grapes,setGrapes] = useState(10);
  return(
    <div className="container-fluid">
        <h2>Home</h2>
        <h4>All Items</h4>
        <div className="row">
            <div className="col">
                <div className="box"> 
                    <h6>APPLES</h6>
                    <h4>{apples}</h4>
                    <div>
                        <button onClick={() => setApples(apples+1)}>+</button>
                        <button onClick={() => setApples(apples-1)}>-</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="box"> 
                    <h6>ORANGES</h6>
                    <h4>{oranges}</h4>
                    <div>
                        <button onClick={() => setOranges(oranges+1)}>+</button>
                        <button onClick={() => setOranges(oranges-1)}>-</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="box"> 
                    <h6>GRAPES</h6>
                    <h4>{grapes}</h4>
                    <div>
                        <button onClick={() => setGrapes(grapes+1)}>+</button>
                        <button onClick={() => setGrapes(grapes-1)}>-</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="box"> 
            <h6>Basket</h6>
            <div>
               
            </div>
        </div>
    </div>
  );
}