
// RequestAnimationFrame -  
// RequestAnimationFrame is a function that allows us to create smooth and fluid animations in JavaScript.

// The window.requestAnimationFrame(callback function) method tells the browser that you wish to perform 
// an animation and requests that the browser calls a specified function to update an animation before the 
// next repaint. The method takes a callback as an argument to be invoked before the next repaint.



function animate() {
  // Update the state of the animation

  // Render the updated state

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);
