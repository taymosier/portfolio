
// onClick --> handleMenuItemClick --> passItemSelectionToMenu
// --> passActiveTitle --> passScreenChoiceToAActiveScreen --> setNewScreen

export function handleMenuItemClick(e) {
  const selectedScreen = this.getActiveScreenName();
  this.setState({
    title: selectedScreen,
  });
  this.props.passItemSelectionToMenu(selectedScreen);
}

export function passActiveTitle(selectedScreen) {
  this.props.passScreenChoiceToApp(selectedScreen);
}

export function setNewActiveScreenState(selectedScreen) {
  this.setState({
    screen: selectedScreen,
  });
}

export function getActiveScreenName() {
  let nameArray = [...this.props.title];
  nameArray = removeSpacesFrom(nameArray);
  const name = `${nameArray.join('')}Screen`;
  this.setState({
    title: name,
  });
  return name;
}

function removeSpacesFrom(array) {
  for (let x = 0; x < array.length; x++) {
    if (array[x] === ' ') {
      array.splice(x, 1);
    }
  }
  return array;
}

export function enableButton() {
  const menu = document.getElementById('menu');
  const menuList = document.getElementById('menuList');
  const menuItems = document.querySelectorAll('li.menuitem');
  console.log(menuList);
  toggleMenu(menu, menuList, menuItems);
}

function toggleMenu(menu, menuList, menuItems) {
  if (menu.className === '') {
    showMenu(menu, menuList, menuItems);
  } else if (menu.className === 'expand') {
    hideMenu(menu, menuList, menuItems);
  }
}

function showMenu(menu, menuList, menuItems) {
  expandMenuListAttributes(menuList);
  expandMenuAttributes(menu);
  expandMenuItemAttributes(menuItems);
}

function expandMenuAttributes(menu) {
  menu.className = 'expand';
  menu.style.margin = '0';
  menu.style.width = '100vw';
  menu.style.left = '0';
  menu.style.height = '100vh';
}
function expandMenuListAttributes(menuList) {
  menuList.style.height = '100vh';
  menuList.style.paddingTop = '17.5vh';
  menuList.style.visibility = 'visible';
}
function expandMenuItemAttributes(menuItems) {
  let i;
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].style.marginBottom = '10vh';
    menuItems[i].style.fontSize = '5vh';
  }
}

function hideMenu(menu, menuList, menuItems) {
  collapseMenuListAttributes(menuList);
  collapseMenuAttributes(menu);
  collapseMenuItemAttributes(menuItems);
}

function collapseMenuAttributes(menu) {
  menu.style.width = '15vw';
  menu.style.margin = '0 0 0 1vw';
  menu.style.height = '15vh';
  menu.style.left = '2vw';
  menu.className = '';
}

function collapseMenuListAttributes(menuList) {
  menuList.style.height = '0vh';
  menuList.style.paddingTop = '0';
  menuList.style.visibility = 'collapse';
}

function collapseMenuItemAttributes(menuItems) {
  let i;
  for (i = 0; i < menuItems.length; i++) {
    menuItems[i].style.marginBottom = '0';
  }
}
