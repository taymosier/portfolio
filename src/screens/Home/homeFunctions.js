// <HomeNavItem /> onClick --> (homeFunctions) handleItemClick
// --> [<HomeNavItem /> (rendered in <HomeScreen />)] passLinkedComponentToActiveScreen
// --> (homeFunctions) passActiveTitle --> [<HomeScreen /> (rendered in <ActiveScreen)] passScreenChoiceToActiveScreen
// --> [<ActiveScreen /> (rendered in <App />)] passScreenChoiceToApp --> <App /> this.setNewActiveScreenState


export function handleItemClick(e){
  const selectedScreen = this.getLinkedComponentName();
  this.setState({
    title: this.getLinkedComponentName()
  });
  this.props.passLinkedComponentToHomeScreen(selectedScreen);
}

export function passActiveTitle(selectedScreen){
  this.props.passScreenChoiceToActiveScreen(selectedScreen);
}

export function getLinkedComponentName(){

  let nameArray = [...this.props.title];
  nameArray = removeSpacesFrom(nameArray);
  let name= nameArray.join('')+'Screen';
  this.setState({
    title : name,
  });
  return name;
}

function setNewActiveScreenState(selectedScreen){
  this.setState({
    screen: selectedScreen
  });
}

export function getActiveScreenName(){

  let nameArray = [...this.props.title];
  nameArray = removeSpacesFrom(nameArray);
  let name= nameArray.join('')+'Screen';
  this.setState({
    title : name,
  });
  return name;
}

function removeSpacesFrom(array){
    for(var x =0; x < array.length; x++){
      if(array[x] === " "){
        array.splice(x,1);
      }
    };
  return array;
}
