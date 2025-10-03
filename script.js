
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


// ✅ Reuse your existing svg instead of redeclaring
const svgMap = document.querySelector("#map-container svg");

// ✅ Use unique variable names so they don’t conflict
let isPanningMap = false;
let startPanX, startPanY;
let mapViewBox = svgMap.viewBox.baseVal;

// ✅ Set default viewBox if missing
if (!mapViewBox || mapViewBox.width === 0) {
  svgMap.setAttribute("viewBox", `0 0 ${svgMap.clientWidth} ${svgMap.clientHeight}`);
  mapViewBox = svgMap.viewBox.baseVal;
}

// ✅ Pan with mouse
svgMap.addEventListener("mousedown", (e) => {
  isPanningMap = true;
  startPanX = e.clientX;
  startPanY = e.clientY;
});
svgMap.addEventListener("mousemove", (e) => {
  if (!isPanningMap) return;
  let dx = startPanX - e.clientX;
  let dy = startPanY - e.clientY;
  mapViewBox.x += dx;
  mapViewBox.y += dy;
  startPanX = e.clientX;
  startPanY = e.clientY;
});
svgMap.addEventListener("mouseup", () => (isPanningMap = false));
svgMap.addEventListener("mouseleave", () => (isPanningMap = false));

// ✅ Pan with touch
svgMap.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    isPanningMap = true;
    startPanX = e.touches[0].clientX;
    startPanY = e.touches[0].clientY;
  }
});
svgMap.addEventListener("touchmove", (e) => {
  if (isPanningMap && e.touches.length === 1) {
    let dx = startPanX - e.touches[0].clientX;
    let dy = startPanY - e.touches[0].clientY;
    mapViewBox.x += dx;
    mapViewBox.y += dy;
    startPanX = e.touches[0].clientX;
    startPanY = e.touches[0].clientY;
  }
});

// ✅ Touch pinch zoom
let lastPinchDist = null;
svgMap.addEventListener("touchmove", (e) => {
  if (e.touches.length === 2) {
    let dx = e.touches[0].clientX - e.touches[1].clientX;
    let dy = e.touches[0].clientY - e.touches[1].clientY;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (lastPinchDist) {
      let scale = lastPinchDist / dist;
      mapViewBox.width *= scale;
      mapViewBox.height *= scale;
    }
    lastPinchDist = dist;
  }
});
svgMap.addEventListener("touchend", () => {
  isPanningMap = false;
  lastPinchDist = null;
});

// ✅ Mouse scroll zoom
svgMap.addEventListener("wheel", (e) => {
  e.preventDefault();
  let scale = e.deltaY > 0 ? 1.1 : 0.9;
  mapViewBox.width *= scale;
  mapViewBox.height *= scale;
});

// ✅ Zoom in/out buttons
document.getElementById("zoom-in")?.addEventListener("click", () => {
  mapViewBox.width *= 0.9;
  mapViewBox.height *= 0.9;
});
document.getElementById("zoom-out")?.addEventListener("click", () => {
  mapViewBox.width *= 1.1;
  mapViewBox.height *= 1.1;
});

// ✅ Save the original viewBox when page loads
const originalViewBox = {
  x: mapViewBox.x,
  y: mapViewBox.y,
  width: mapViewBox.width,
  height: mapViewBox.height
};

// ✅ Reset button
document.getElementById("reset-btn")?.addEventListener("click", () => {
  mapViewBox.x = originalViewBox.x;
  mapViewBox.y = originalViewBox.y;
  mapViewBox.width = originalViewBox.width;
  mapViewBox.height = originalViewBox.height;

  svgMap.setAttribute(
    "viewBox",
    `${mapViewBox.x} ${mapViewBox.y} ${mapViewBox.width} ${mapViewBox.height}`
  );
});

// ✅ Select tooltip
const tooltip = document.querySelector(".toggle");

// ✅ For each country/path on the map
document.querySelectorAll("svg path").forEach((region) => {
  // Show tooltip on mouse hold
  region.addEventListener("mousedown", (e) => {
    tooltip.style.display = "block";
    tooltip.innerText = region.getAttribute("name") || "Unknown"; // use region name if set
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";
  });

  // Hide tooltip on mouse release
  region.addEventListener("mouseup", () => {
    tooltip.style.display = "none";
  });

  // Show tooltip on touch hold
  region.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    tooltip.style.display = "block";
    tooltip.innerText = region.getAttribute("name") || "Unknown";
    tooltip.style.left = touch.pageX + 10 + "px";
    tooltip.style.top = touch.pageY + 10 + "px";
  });

  // Hide tooltip on touch release
  region.addEventListener("touchend", () => {
    tooltip.style.display = "none";
  });
});