import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, remaining, currency} = useContext(AppContext);
    const changeEvent = (x) => {
        if((x < budget - remaining)) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        if((x > 200000)) {
            alert("You cannot make the budget that big");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(x),
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input
                        type='number'
                        id='budget'
                        value={budget}
                        step={10}
                        onChange={(event) => changeEvent(event.target.value)}>
                        </input>
        </div>
    );
};
export default Budget;
