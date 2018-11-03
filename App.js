import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import y from './pics/yahya.PNG';
import a from './pics/amine.PNG';
import ar from './pics/arsslen.PNG';
import s from './pics/sameh.PNG';
import Grp from './grp';

const yahya={pic:y, fname:"Yahya", sname:"Bouhlel",job1:"FOUNDER", job2:"CEO"};
const amine={pic:a, fname:"Amine", sname:"Bouhlel", job1:"FOUNDER", job2:"COO"};
const arsslen={pic:ar, fname:"Arsslen", sname:"Idadi", job1:"SOFTWARE ENGINEER", job2:"PART TIME PRG. MANAGER"};
const sameh={pic:s, fname:"Sameh",  sname:"Ghanmi", job1:"FULL TIME PROGRAM", job2:"MANAGER"};
const group =[yahya, amine, arsslen, sameh];

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const{pic="", fname="",sname="", job1="", job2=""}=group;
    return (
      <div className="App">

          <h1 className="titre">Notre équipe</h1>
        
        <div className="équipe"> 
          {group.map((el,i)=>{
            return <Grp pic={el.pic} fname={el.fname} sname={el.sname} job1={el.job1} job2={el.job2}/>})}
        </div>
        
      </div>
    );
  }
}

export default App;
