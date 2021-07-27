import './App.css';
import Container from './containers/Container'
import Beach1 from './resources/Beach1.jpg'
import Mountain1 from './resources/Mountain1.jpg'
import Bird1 from './resources/Bird1.png'
import Food1 from './resources/Food1.jpg'
import Beach2 from './resources/Beach2.jpg'
import Mountain2 from './resources/Mountain2.jpg'
import Bird2 from './resources/Bird2.jpg'
import Food2 from './resources/Food2.jpg'
import Beach3 from './resources/Beach3.jpg'
import Mountain3 from './resources/Mountain3.jpg'
import Bird3 from './resources/Bird3.jpg'
import Food3 from './resources/Food3.jpg'


function App() {
  return (
    <Container 
      buttonsList={[
        {
          name: "All", 
          value: "All"
        },
        {
          name: "Mountains", 
          value: "Mountains"
        },
        {
          name: "Beaches", 
          value: "Beaches"
        },
        {
          name: "Birds", 
          value: "Birds"
        },
        {
          name: "Food", 
          value: "Food"
        }
      ]}
      picturesList={[{
        type: "Mountains",
        src: Mountain1
      },
      {
        type: "Beaches",
        src: Beach1
      },
      {
        type: "Birds",
        src: Bird1
      },
      {
        type: "Food",
        src: Food1
      },
      {
        type: "Mountains",
        src: Mountain2
      },
      {
        type: "Beaches",
        src: Beach2
      },
      {
        type: "Birds",
        src: Bird2
      },
      {
        type: "Food",
        src: Food2
      },
      {
        type: "Mountains",
        src: Mountain3
      },
      {
        type: "Beaches",
        src: Beach3
      },
      {
        type: "Birds",
        src: Bird3
      },
      {
        type: "Food",
        src: Food3
      }
    ]}
    />
    // <img src={img} alt="cannot display" />
  );
}

export default App;
