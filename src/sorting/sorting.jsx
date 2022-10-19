import React from "react";
import './Sorting.css';
import {mergeSort}  from "./algorithms/algorithm";
export default class Sorting extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      array: [],
    };
  }
  
  componentDidMount() {
    this.resetArray();
  }
  
  resetArray() {
    const array = [];
    for (let i = 0; i < 300; i++) {
      array.push(randomIntFromInterval(5, 1000));
    }
    this.setState({array});
  }
  mergeSort(){
    const sorted_arr = mergeSort(this.state.array);
    const javasort = this.state.array.slice().sort((a,b) => a - b);
    console.log(sorted_arr);
    console.log(javasort);
  }
  
  render() {
    const {array} = this.state;
    
    return (
      <div className="arr_container">
      {array.map((value, idx) => (
        <div
        className="arr_bar"
        key={idx}
        style = {{height: `${value*0.9}px`, reversed: true}}
        ></div>
        ))}
        <div><button onClick={() => this.resetArray()}>Generate New Array</button></div>
        <div><button onClick={() => this.mergeSort()}>mergesort</button></div>
        <div><button onClick={() => this.resetArray()}>Generate New Array</button></div>
        <div><button onClick={() => this.resetArray()}>Generate New Array</button></div>
        <div><button onClick={() => this.resetArray()}>Generate New Array</button></div>
        </div>
        );
      }
    }
    
    //create random number function
    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }