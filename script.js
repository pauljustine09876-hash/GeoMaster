
//THE TIPS
document.getElementById('AL').addEventListener('click', () => {
  window.location.href = 'tips/albania.html';  // Albania URL
});

document.getElementById('CH').addEventListener('click', () => {
  window.location.href = 'tips2/switzerland.html';  // Albania URL
});

document.getElementById('NO').addEventListener('click', () => {
  window.location.href = 'tips1/norway.html';  // Albania URL
});

document.getElementById('SE').addEventListener('click', () => {
  window.location.href = 'tips3/sweden.html';  // Albania URL
});

document.getElementById('FR').addEventListener('click', () => {
  window.location.href = 'tips4/france.html';  // Albania URL
});

document.getElementById('DE').addEventListener('click', () => {
  window.location.href = 'tips5/germany.html';  // Albania URL
});

document.getElementById('ES').addEventListener('click', () => {
  window.location.href = 'tips6/spain.html';  // Albania URL
});

document.getElementById('GB').addEventListener('click', () => {
  window.location.href = 'tips7/uk.html';  // Albania URL
});

document.getElementById('PL').addEventListener('click', () => {
  window.location.href = 'tips8/poland.html';  // Albania URL
});

document.getElementById('IT').addEventListener('click', () => {
  window.location.href = 'tips9/italy.html';  // Albania URL
});



//Flags
// Event listener for the Albania card
// Redirect when the Albania card is clicked
document.getElementById('al').addEventListener('click', () => {
  window.location.href = 'tips/albania.html';  // Replace with the actual link for Albania
});

document.getElementById('fr').addEventListener('click', () => {
  window.location.href = 'tips4/france.html';  // Replace with the actual link for Albania
});

document.getElementById('de').addEventListener('click', () => {
  window.location.href = 'tips5/germany.html';  // Replace with the actual link for Albania
});

document.getElementById('it').addEventListener('click', () => {
  window.location.href = 'tips9/italy.html';  // Replace with the actual link for Albania
});

document.getElementById('no').addEventListener('click', () => {
  window.location.href = 'tips1/norway.html';  // Replace with the actual link for Albania
});

document.getElementById('pl').addEventListener('click', () => {
  window.location.href = 'tips8/poland.html';  // Replace with the actual link for Albania
});

document.getElementById('es').addEventListener('click', () => {
  window.location.href = 'tips6/spain.html';  // Replace with the actual link for Albania
});

document.getElementById('se').addEventListener('click', () => {
  window.location.href = 'tips3/sweden.html';  // Replace with the actual link for Albania
});

document.getElementById('ch').addEventListener('click', () => {
  window.location.href = 'tips2/switzerland.html';  // Replace with the actual link for Albania
});

document.getElementById('gb').addEventListener('click', () => {
  window.location.href = 'tips7/uk.html';  // Replace with the actual link for Albania
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
let panX = 0, panY = 0; // Current pan offset values
let isDragging = false; // To track if the user is currently dragging
let startX = 0, startY = 0; // Mouse starting positions
let dragX = 0, dragY = 0;   // Amount dragged during movement

// Sensitivity factor for panning
const panSensitivity = 1;

// Zoom In
zoomInButton.addEventListener('click', () => {
    zoomScale -= 0.1;
    setZoom(zoomScale);
});

// Zoom Out
zoomOutButton.addEventListener('click', () => {
    zoomScale += 0.1;
    setZoom(zoomScale);
});

// Set the zoom level by adjusting the viewBox of the SVG
function setZoom(scale) {
    if (scale < 0.5) scale = 0.5;
    if (scale > 3) scale = 3;

    const width = 1000 * scale;  // SVG original width
    const height = 684 * scale;  // SVG original height

    svg.setAttribute('viewBox', `${panX} ${panY} ${width} ${height}`);
}

// Mouse down (start dragging)
svg.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    svg.style.cursor = 'grabbing';
});

// Mouse move (dragging)
svg.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Calculate drag distance
        dragX = (startX - e.clientX) * panSensitivity;
        dragY = (startY - e.clientY) * panSensitivity;

        // Apply drag to pan
        panX += dragX;
        panY += dragY;

        // Update viewBox
        setZoom(zoomScale);

        // Update start positions for next calculation
        startX = e.clientX;
        startY = e.clientY;
    }
});

// Mouse up (stop dragging)
svg.addEventListener('mouseup', () => {
    isDragging = false;
    svg.style.cursor = 'grab';
});

// Mouse leave (stop dragging if mouse leaves)
svg.addEventListener('mouseleave', () => {
    isDragging = false;
    svg.style.cursor = 'grab';
});

// Reset map
resetButton.addEventListener('click', () => {
    zoomScale = 1;
    panX = 0;
    panY = 0;
    dragX = 0;
    dragY = 0;
    setZoom(zoomScale);
});

// Scroll wheel zoom
svg.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
        zoomScale -= 0.1; // Zoom in
    } else {
        zoomScale += 0.1; // Zoom out
    }
    setZoom(zoomScale);
});

// Function to redirect to the index.html page (Homepage)
function goHome() {
  window.location.href = 'index.html'; // Change 'index.html' to the path of your homepage
}
