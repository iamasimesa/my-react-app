import './App.css';


const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person name={'React'} lastName={'JS'} age={'13'}/>
      <Person name={'Angular'} lastName={'JS'} age={'18'}/>
      <Person name='Laravel' lastName='PHP' age= {6*2} />
      </div>
     
  );
}

export default App;
