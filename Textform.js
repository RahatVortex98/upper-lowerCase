import React, { useState } from 'react';

export default function Textform() {

    const [text, setText] = useState("Enter your text");

    const handleOnChange=(event)=>{

        console.log('Handle on Change');
        setText(event.target.value);

    };

    const handleUpClick=()=>{

        console.log('Upper Button Click');
        let newText=text.toUpperCase();
        setText(newText);

    };

    const handleLowerClick=()=>{

        console.log('Lower Button Click');
        let newText=text.toLowerCase();
        setText(newText);

    };




  return (
   <>
     
    <div className="container my-3 " >

        <h1>Text Area</h1>

    <div className="mb-3">

  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>

  <button type="button" className="btn btn-info my-3" onClick={handleUpClick}>UpperCase</button>
  <button type="button" className="btn btn-dark my-3" onClick={handleLowerClick}>LowerCase</button>


  <div className='container my-5'>

    <h1>
        Summery
    </h1>
    <p>
        {text.split(" ").length} words and {text.length}character
    </p>
    <p>
        {0.008*text.split(" ").length}'s your reading time.
    </p>

  </div>
</div>






        </div>

</>
    
  )
}
