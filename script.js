
//THE TIPS
document.getElementById('AL').addEventListener('click', () => {
  window.location.href = 'tips/albania.html';  // Albania URL
});

document.getElementById('CH').addEventListener('click', () => {
  window.location.href = 'tips2/switzerland.html';  // Albania URL
});

// Tooltip for map
const svgPath = document.querySelectorAll('svg path');  // Get all paths (countries) in the SVG
const toggle = document.getElementById('toggle');  // Tooltip container

svgPath.forEach(item => {
  item.addEventListener('mouseover', (event) => {
    // Show the tooltip when the mouse hovers over a country
    toggle.style.display = 'block';

    // Get the name of the country (from the 'name' attribute)
    const title = item.getAttribute('name');

    // Set the tooltip text to the country name
    toggle.innerHTML = title;

    // Add mousemove event to make the tooltip follow the cursor exactly
    document.addEventListener('mousemove', (e) => {
      // Get the mouse position and account for scrolling
      const x = e.clientX + window.scrollX;  // Add scroll offset for horizontal position
      const y = e.clientY + window.scrollY;  // Add scroll offset for vertical position

      // Position the tooltip exactly at the cursor's tip (including scroll offsets)
      toggle.style.left = `${x}px`;
      toggle.style.top = `${y}px`;
    });
  });

  // Hide the tooltip when the mouse moves out of the country
  item.addEventListener('mouseout', () => {
    toggle.style.display = 'none';  // Hide the tooltip
    document.removeEventListener('mousemove', () => {});  // Remove mousemove event when mouse leaves
  });
});

// Select all the corner panels (GeoGuessr and GeoTips)
const panels = document.querySelectorAll('.corner');

// Add event listeners to each panel for expanding/collapsing
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // Toggle the 'expanded' class to show or hide the content
    const content = panel.querySelector('.content');
    
    // Toggle the visibility of the content inside the panel
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    
    // Optionally toggle the expanded class for animation/size changes
    panel.classList.toggle('expanded');
  });
});

// Get the SVG element and zoom buttons
const svg = document.getElementById('map');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');
const resetButton = document.getElementById('reset-btn');

// Initial zoom scale and pan values
let zoomScale = 1;
let panX = 0, panY = 0; // Initial pan offset values
let isDragging = false; // To track if the user is currently dragging
let dragX, startY; // Start mouse position for dragging

// Zoom In function
zoomInButton.addEventListener('click', () => {
    zoomScale -= 0.1; // Increase zoom by 10%
    setZoom(zoomScale); // Update the viewBox with new zoom level
});

// Zoom Out function
zoomOutButton.addEventListener('click', () => {
    zoomScale += 0.1; // Decrease zoom by 10%
    setZoom(zoomScale); // Update the viewBox with new zoom level
});

// Set the zoom level by adjusting the viewBox of the SVG
function setZoom(scale) {
    // Set min and max zoom scale limits
    if (scale < 0.5) scale = 0.5; // Prevent zooming out too much
    if (scale > 3) scale = 3; // Prevent zooming in too much

    const width = 1000 * scale;  // New width based on zoom scale
    const height = 684 * scale;  // New height based on zoom scale

    // Adjust the viewBox of the SVG to zoom in/out (panX and panY are kept intact)
    svg.setAttribute('viewBox', `${panX} ${panY} ${width} ${height}`);
}

// Mouse Down (start dragging)
svg.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX; // Store initial mouse position (X)
    startY = e.clientY; // Store initial mouse position (Y)
});

// Mouse Move (dragging)
svg.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const dx = e.clientX - startX; // Difference in X (horizontal movement)
        const dy = e.clientY - startY; // Difference in Y (vertical movement)
        panX += dx; // Update horizontal pan
        panY += dy; // Update vertical pan
        setZoom(zoomScale); // Update the viewBox with the new pan position
        startX = e.clientX; // Update startX for next calculation
        startY = e.clientY; // Update startY for next calculation
    }
});

// Mouse Up (end dragging)
svg.addEventListener('mouseup', () => {
    isDragging = false;
});

// Mouse Out (end dragging if mouse leaves the map)
svg.addEventListener('mouseout', () => {
    isDragging = false;
});

// Reset function to return the map to its default position
resetButton.addEventListener('click', () => {
    zoomScale = 1; // Reset zoom scale
    panX = 0; // Reset panX
    panY = 0; // Reset panY
    setZoom(zoomScale); // Update the viewBox to reset the map
});
