// console.log(useState);
  

//   // const [ counter, setCounter ] = useState(0)
//   // console.log('rendering with counter value', counter)

//   // const increaseByOne = () => {
//   //   console.log('increasing, value before', counter)
//   //   setCounter(counter + 1)
//   // }

//   // const decreaseByOne = () => { 
//   //   console.log('decreasing, value before', counter)
//   //   setCounter(counter - 1)
//   // }

//   // const setToZero = () => {
//   //   console.log('resetting to zero, value before', counter)
//   //   setCounter(0)
//   // }

//   // const course = {

//   //   name: 'Half Stack application development',
//   //   parts: [
//   //     {
//   //       name: 'Fundamentals of React',
//   //       exercises: 10
//   //     },
//   //     {
//   //       name: 'Using props to pass data',
//   //       exercises: 7
//   //     },
//   //     {
//   //       name: 'State of a component',
//   //       exercises: 14
//   //     }
//   //   ]
//   // };
//       {/* <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />      
      
//        <Display counter={counter} />
//       <Button
//         onSmash={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />     
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />            */}

//       const [left, setLeft] = useState(0)
//       const [right, setRight] = useState(0)
//       const [allClicks, setAll] = useState([])
//       const [total, setTotal] = useState(0)
//       const [value, setValue] = useState(10)

      
//   const setToValue = (newValue) => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }


    
//   //     const handleLeftClick = () => {
//   //       setAll(allClicks.concat('L'))
//   //       console.log('left before', left)

//   //       const updatedLeft = left + 1

//   //       setLeft(updatedLeft)
//   //       setTotal(updatedLeft + right) 
//   //     }

//   //     console.log('left after', left)

      
      
//   //     const handleRightClick = () => {
//   //       setAll(allClicks.concat('R'))
//   //       const updatedRight = right + 1;
//   //       setRight(updatedRight);
//   //       setTotal(left + updatedRight);
//   //     };

//   //     const handleResetClick = () => {
//   //       setTotal(0)
//   //       setAll([' '])
//   //       setLeft(0)
//   //       setRight(0)
//   //     }
//   //     const History = (props) => {
//   //       if (props.allClicks.length === 0) {
//   //         return (
//   //           <div>
//   //             the app is used by pressing the buttons
//   //           </div>
//   //         )
//   //       }
        
      
//   //       return (
//   //         <div>
//   //           button press history: {props.allClicks.join(' ')}
//   //         </div>
//   //       )
//   //     }

      
//   // const hello = () => {
//   //   const handler = () => console.log('hello world')
//   //   return handler
//   // }


    
//       return (
//         <div>
//           {/* {left}
//           <button onClick={handleLeftClick}>left</button>
//           <button onClick={handleRightClick}>right</button>
//           {right}
//           <p>{allClicks.join(' ')}</p>
//           <p>total {total}</p>

//           <button onClick={handleResetClick}>Reset</button>
//           <History allClicks={allClicks} />

//           <div>
//       {value}
//       <button onClick={hello()}>button</button>
//     </div> */}

// <div>
// <Display value={value} />

//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>



//           </div>
//       )}