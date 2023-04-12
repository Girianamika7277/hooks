import React from "react";
import { useState } from "react";




const App = () => {
    const purple ="yellow";
   const [bg, setbg] = useState(purple);
   const [name, setName]= useState("click me");

    const bgChange = () => {
        let newbg ="red";
        setbg(newbg);
        setName(" पढ़ना मुश्किल नहीं है, पढ़ते वक्त जो नींद आती है, उसे कंट्रोल करना मुश्किल है।😄");
      };

      const bgBack =() => {
        setbg(purple);
        setName("इतिहास गवाह है..“अलार्म बंद करने के बाद जितनी अच्छी नींद आती है, उतनी अच्छी नींद तो रात में भी नहीं आती।” 😃 ")
      };
    return(
        <>
     <div style={{backgroundColor: bg }}>
       <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
     </div>
        </>
    );

};
export default App;