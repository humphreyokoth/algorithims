<?php

function showMenu() {
    // Menu options
    $menu = [
      'starters' => ['Soup', 'Salad', 'Bruschetta'],
      'mains' => ['Steak', 'Salmon', 'Pasta'],
      'desserts' => ['Cheesecake', 'Ice Cream', 'Fruit Salad']
    ];
  
    // Display the menu options
    echo "Menu:\n";
    echo "1. Starters: " . implode(', ', $menu['starters']) . "\n";
    echo "2. Mains: " . implode(', ', $menu['mains']) . "\n";
    echo "3. Desserts: " . implode(', ', $menu['desserts']) . "\n";
  
    // Ask for user input
    echo "Please enter the number of the menu you want to select (1, 2, or 3): ";
    $selectedMenu = readline();
  
    // Validate user input
    if ($selectedMenu === '1') {
      echo 'Selected Starters: ' . implode(', ', $menu['starters']) . "\n";
    } else if ($selectedMenu === '2') {
      echo 'Selected Mains: ' . implode(', ', $menu['mains']) . "\n";
    } else if ($selectedMenu === '3') {
      echo 'Selected Desserts: ' . implode(', ', $menu['desserts']) . "\n";
    } else {
      echo 'Invalid menu selection.' . "\n";
    }
}

// Call the function to display the menu
showMenu();

?>
