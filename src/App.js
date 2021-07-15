import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import {Switch,Route} from 'react-router-dom';
import Header from './components/header/header';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';




class App extends React.Component {

  constructor(){
    super();

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth =null;


  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=> {

      if(userAuth)
      {
        const userRef=createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          // console.log(snapShot.data()); snapShot.data() gives the user data frm DB with reference to the userRef

          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
        
      }
      else{
        this.setState({currentUser:userAuth});
      }
      
    });
  }

  componentWillUnmount(){
    console.log("Inside Component will Unmount");
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/sign-in' component={SignInSignUp}/>
        </Switch>
  
      </div>
    );
  }

  
}

export default App;
