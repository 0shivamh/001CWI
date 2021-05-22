import Header from "./Components/header.component";
import Nav from "./Components/nav.component";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>

      <hr></hr>
      <p class='cop' >
            Copyright &#169;2017-2021 Some rights reserved | <a href='https://www.cwipedia.in' >cwipedia.in</a>
</p>
    </div>
  );
}

export default App;
