import React from 'react';
const dropDown = () => {
    return (
        <React.Fragment>
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                        select
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" > 1</a>
            <a class="dropdown-item"> 2</a>
            <a class="dropdown-item" > 3</a>
        </div>
        </React.Fragment>
    )
};
const datePicker = () => {
    return (
        <React.Fragment>
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                        select
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" > 1</a>
            <a class="dropdown-item"> 2</a>
            <a class="dropdown-item" > 3</a>
        </div>
        </React.Fragment>
    )
};
export default { dropDown, datePicker };