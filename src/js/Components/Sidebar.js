import React from 'react';   


class Sidebar extends React.Component { 
    constructor(){
        super()
        this.icons=['Quiz','Stats'];
    }
    render() {
        return (<aside className='text-align-center'>
            <div className='position-relative sidebar-icons-group'>
           {this.icons.map((item)=>{
               return <div className='sidebar-boxes'>
                   {item}
               </div>
           })
        }
        </div>
           
        </aside>);
    }
}
export default Sidebar;