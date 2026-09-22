import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../slices/counterSlice";
const AboutIndex = () => {
  const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
  return (
    <div>AboutIndex
      <h1>Count = {count} </h1>
    </div>
  )
}

export default AboutIndex