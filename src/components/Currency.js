import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch} = useContext(AppContext);
    const changeEvent = (x) => {
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: x,
        });
    };

    return (
        <div >
             <select className="btn btn-success dropdown-toggle" onChange={(event) => changeEvent(event.target.value)}> 
                <option defaultValue>£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>

            </select>
        </div>
    );
};
export default Currency;