import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import List from './components/List';

export default function App() {
  const [first, setfirst] = useState([])

  useEffect(() => {
    const getList = () => {
      fetch('http://localhost:4000/task')
      .then(res => res.json())
      .then(res => setfirst(res))
  }
  getList();
}
  , [])
  
  return (
    <Fragment>
      <Navbar brand={'Task Application'}/>
      <div className = "container ">
          <div className = "row">
            <div className = "col-7">
              <h2 style={{textAlign: 'center'}}>List</h2>
              <List list = {first} />
            </div>
            <div className = "col-5">
              <h2 style={{textAlign: 'center'}}>Book Form</h2>
            </div>
          </div>
      </div>
    </Fragment>
  );
}
