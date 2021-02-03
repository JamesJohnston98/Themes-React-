import React, {useState, useMemo} from 'react';

//useMemo will cache a value so it does not have to be re-rendered everytime
function App() {

  const [num , setNo] = useState(0);
  const [dark_Col, set_D_Col] = useState(false);
  //this is called everytime the application is rendered
  //so this will mean that the theme toggle also takes longer to render

  //dependency is number that only if this changes do we need to re-run the function 
  const doubleNo = useMemo(() => {
    return slow(num)
  }, [num]);

  //theme style to change between dark and light 
  //useMemo is used that this will only run when the theme is changed and not when the number is entered 
  const themeStyles = useMemo(() => {
    return{
    backgroundColor: dark_Col ? 'black' : 'white',
    color: dark_Col ? 'white' : 'black'
    }
  }, [dark_Col]);
  return (
    //the input box to allow the user to enter the number to double
    //button to change the theme toggling it between dark and light
<>
<input type = "number" value={num} onChange={e => setNo(parseInt(e.target.value))} />
<button onClick={() => set_D_Col(prev_D_Col => !prev_D_Col)}>Change Theme</button>
<div style={themeStyles}>{doubleNo}</div>
</>
  );
}

//emulates the slow function to double the number entered 
function slow(number){
  console.log('Calling Slow');
  for(let i = 0; i <= 1000000000; i++){};
  return number * 2;
};

export default App;
