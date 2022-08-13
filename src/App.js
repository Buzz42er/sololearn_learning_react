
const Hello = (props) => {
    return (
      <>
      <h1>This is me learning React with SoloLearn</h1>
      <p>Hope you're doing well, my name is {props.name}</p>
      <MySecondComponent date={Date()}/>
      </>
      
    )
}

const MySecondComponent = (props) => {
  return (
    <>
    <p>This is todays date : {props.date}</p>
    </>
  )
}


function App() {
  return  <Hello name='Jure' /> ;
}

export default App;
