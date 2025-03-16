// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.


function combat(health, damage) {
    // Write your code here
        if (health - damage < 0) {
            return 0
      } else {
        return health - damage
      }
  }

  combat (50, 30)
  combat (20, 25)
  combat (30, 30)
  combat (20, -10)