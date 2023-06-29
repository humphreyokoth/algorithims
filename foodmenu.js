function showMenu() {
    // Menu options
    var menu = {
      'starters': ['Soup', 'Salad', 'Bruschetta'],
      'mains': ['Steak', 'Salmon', 'Pasta'],
      'desserts': ['Cheesecake', 'Ice Cream', 'Fruit Salad']
    };
  
    // Display the menu options
    console.log("Menu:");
    console.log("1. Starters: " + menu['starters'].join(', '));
    console.log("2. Mains: " + menu['mains'].join(', '));
    console.log("3. Desserts: " + menu['desserts'].join(', '));
  
    // Predefined selection
    var selectedMenu = '2'; // Change this value to the desired selection (1, 2, or 3)
  
    // Process user selection
    if (selectedMenu === '1') {
      console.log('Selected Starters: ' + menu['starters'].join(', '));
    } else if (selectedMenu === '2') {
      console.log('Selected Mains: ' + menu['mains'].join(', '));
    } else if (selectedMenu === '3') {
      console.log('Selected Desserts: ' + menu['desserts'].join(', '));
    } else {
      console.log('Invalid menu selection.');
    }
  }
  
  // Call the function to display the menu
  showMenu();
  