import React from 'react';
import Header from './js/Components/Header.js';
import Content from './js/Screens/Content.js';
import Sidebar from './js/Components/Sidebar';

class App extends React.Component {
    render() {
        return (<div className='quiz'>
            <Sidebar />
            <div className='w-100'>
                <Header />
                <Content />
            </div>
        </div>);
    }
}
export default App;