
// onClick --> handleMenuItemClick --> passItemSelectionToMenu
// --> passActiveTitle --> passScreenChoiceToAActiveScreen --> setNewScreen

export function handleMenuItemClick(e){
  const selectedScreen = this.getActiveScreenName();
  this.setState({
    title: selectedScreen
  });
  this.props.passItemSelectionToMenu(selectedScreen);
}

export function passActiveTitle(selectedScreen){
  this.props.passScreenChoiceToApp(selectedScreen);
}

export function setNewActiveScreenState(selectedScreen){
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
