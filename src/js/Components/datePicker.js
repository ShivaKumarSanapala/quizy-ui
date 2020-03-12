import React from 'react';
export default function (){
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