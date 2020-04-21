import React from 'react';

const Form = (props) =>{
 
    return (
      <div >
       <form onSubmit={props.getWeather}>
           <input type="text" name="country"  placeholder="Country ..."/>
           <input type="text" name="city" placeholder="City ..."/>
           <button type="submit">Get Weather</button>

        </form>
      </div>
    );
  

}


export default Form;
