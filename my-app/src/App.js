import React, {
  Component
} from "React";
import FriendCard from "../src/compontents/FriendCard";
import Wrapper from "../src/compontents/Wrapper";
import Title from "../src/components/Title";
import friends from "./friends.json";
// Navbar and footer not connected?
import Navbar from "../src/components/Navbar";
import Footer from 
"../src/components/Footer";
//  this is not connected
import "./App.css";

// class App extends Component {
  // render(){
    // return (
  // setting this.state.friends to the friends json array this is similar to the inclass assignment
  // state ={
    // friends,
    // imageClicked: [],
    // score: 0,
    // highScore: 0,
    // printResult: "",
  // }
    // );
  // }

  class App extends Component {
    // setting this.state.friends to friends json array
    state= {
      friends,
      imageClicked: [],
      score: 0,
      highScore: 0,
      printResult: ""
    };

    // filter this.state.friends for friends with an id not equal to the id that is being removed
    // set this.friends.state.friends equal to the new friends array

    // the remove friend was used in 16-stu assignment but we don't need to remove the cards here
    // removeFriend = id => {
      // const friends = this/state.friends.filter(friend => friend.id !== id);
      // this.setState({friends});
    // };


  userClick = event => {
    // this method stops the default action of an element from happening. ex. to prevent a submit button from submitting a form
    event.preventDefault();

    // set variable to currentImage
    const currentImage = event.target.alt;
    // console log when current image is clicked
    console.log(event.target.alt);
    // update state with the clicked image data to current image
    // image is only allowed to be clicked 1 or 0 
    const clickedImage = this.state.imageClicked.indexOf(currentImage) > -1;

    // console log if the image has already been clicked by the user
    console.log("this image has been clicked" + clickedImage);


  // high score
  const topScore = this.state.highScore;

  if (clickedImage) {
    alert("You already clicked this image please try another!");
    this.setState({
      friends: this.state.friends.sort
      // this creates a random sorted array
      // it will sort the array from small number to bigger number, the value a-b returns a negative number so the smaller number will be in the front
      (function (a,b) {
        // math.random() can create number 0~1 excluded which means the result of 0.5 - Math.random() could be either a positive or negative value
        return 0.5 - Math.random();
      }),
      friends,
      imageClicked: [],
      score: 0,
      highScore: topScore,
      printResult: "Sorry you guessed wrong!"
    });

    // console.log("score" + score);
    // console.log("highScore" + highScore);
    console.log("TS" + topScore);
    console.log(this.state.highScore);

    // ! means not clicked image
  } else if (!clickedImage) {

    // if the image that was clicked was not clicked before add the score +1
    const newScore = this.state.score + 1 

    if (newScore === 1) {
      this.setState({
        // friends info
        score: newScore,
        // highScore: topScore,
        printResult: `Woo!`,
      });
    }

    // if (this.state.score > 1) { console.log("HS" + + this.state.highScore);
    // update the state with the newScore data if imageClicked was only clicked 0-1 times
    if (newScore >= this.state.highScore) {
      this.setState({
        friends: this.state.friends.sort(function (a,b) {
          return 0.5 - Math.random();
        }),
        friends,
        imageClicked: this.state.imageClicked.concat(currentImage),
        highScore: newScore,
        score: newScore,
        printResult: `Woo!`
      })

      // there are 10 friends in the friends.json file so in order to win the game only one character image can be clicked at a time
      if (newScore === 10) {
        // alert("You win!")
        this.setState({
          friends: this.state.friends.sort(function (a,b) {
            return 0.5 - Math.random;
          }),
          score: 0,
          highScore: 0,
          printResult: "Woo!"
        });
        alert("this game is fun!");
      }

    }
    }


  };


  // same as inclass assignment 16 stu
  render() {
    return (
      <Wrapper>
        <Title>Only Click the Image Once to Win!</Title>
        {this.state.friends.map (friend => (
           <FriendCard removeFriend={this.removeFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          FriendCard userClick = {this.userClick}
          navbarScore= {this.state.score}
          highScore= {this.state.highScore}
          printResult={this.state.printResult}
          />
        ))}
      </Wrapper>
    )
  }
  // on nav bar need to render the score

  // on nav bar need to render the high score

  // on nav bar need to render the current score

  // render all of the score info into the jumbotron

  // set up a container that holds this.state.friends.map (friend => )

  // FriendCard userClick= {
    // this.userClick } 
    // id = {friend.id}
    // all react needs to have key
    // key = {friend.id}
    // name = {friend.name}
    // image = {friend.image}
  

    // close container
  }
  

  export default App;
