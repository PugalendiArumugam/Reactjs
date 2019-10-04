import React from 'react';
import './App.css';
import LoginForm from './component/login';
import Message from './component/Message';
import Greet from './component/Greet'
import FunctionClick from './component/FunctionClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import NameList from './component/NameList';
import './appStyle.css';
import styles from './appStyle.module.css'
import Counter from './component/Counter';
import Hookcounter from './component/Hookcounter';
import HCounter from './component/HCounter';


function App() {
  return (
    <div className="App">
      <header className="App-headers">
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Counter />        
        <Hookcounter/>
        <br/>
        <HCounter
        initialCount={5}
        />
        {/* <Greet firstname='Pugal' lastname='Arumugam' />
        <Greet firstname='Tarun' lastname='Pugal' />
        <Message />
        <LoginForm /> */}
        {/* <FunctionClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent/> */}
        {/* <NameList /> */}
      </header>
    </div>
  );
}

export default App;
