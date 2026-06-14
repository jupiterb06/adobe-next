var nodesHovered = 0;
const mapData = {
  nodes: [
    { id: 1, name: "Alpha Station", x: 20, y: 30, desc: "Primary power generation hub.", image: "images/bunny.PNG" },
    { id: 2, name: "Beta Lab", x: 50, y: 20, desc: "Research and development center." },
    { id: 3, name: "Gamma Outpost", x: 40, y: 70, desc: "Mining facility warehouse." },
    { id: 4, name: "Delta Terminal", x: 80, y: 50, desc: "Main shipping and receiving dock.", image: "images/bunny.PNG" }
  ],
  connections: [
    { from: 1, to: 2, name: "Alpha-Beta Conduit", desc: "Main power transfer line. Operating at 85% capacity." },
    { from: 2, to: 3, name: "Supply Route B", desc: "Unsecured underground transit tunnel." },
    { from: 2, to: 4, name: "Data Uplink 4", desc: "Fiber optic connection to shipping dock." },
    { from: 3, to: 4, name: "Heavy Rail Link", desc: "Automated cargo train tracks." }
  ]
};

function initMap() {
  const container = document.getElementById("map-container");
  const svg = document.getElementById("svg-connections");
  const tooltip = document.getElementById("tooltip");
  const tooltipName = document.getElementById("tooltip-name");
  const tooltipDesc = document.getElementById("tooltip-desc");


  if (!container || !svg || !tooltip) {
    console.error("Map initialization failed: Missing required HTML DOM container elements.");
    return;
  }

  // FIXED: Moved internal helper inside initMap block to resolve structural reference scoping errors
  function setLineCoords(lineElement, source, target) {
    lineElement.setAttribute("x1", `${source.x}%`);
    lineElement.setAttribute("y1", `${source.y}%`);
    lineElement.setAttribute("x2", `${target.x}%`);
    lineElement.setAttribute("y2", `${target.y}%`);
  }

  // 1. Render Connections first (Background layer)
  mapData.connections.forEach(conn => {
    const parentNode = mapData.nodes.find(n => n.id === conn.from);
    const childNode = mapData.nodes.find(n => n.id === conn.to);
    
    if (parentNode && childNode) {
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

      const visibleLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
      visibleLine.setAttribute("class", "connection-line");
      setLineCoords(visibleLine, parentNode, childNode);
      group.appendChild(visibleLine);

      const hoverLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
      hoverLine.setAttribute("class", "connection-hover-target");
      setLineCoords(hoverLine, parentNode, childNode);
      group.appendChild(hoverLine);

      hoverLine.addEventListener("mouseenter", () => {
        visibleLine.classList.add("line-active");
        tooltipName.innerHTML = `${conn.name}`;
        tooltipDesc.innerHTML = `${conn.desc}`;
        // tooltip.innerHTML = `<strong>${conn.name}</strong><br/>${conn.desc}`;
        tooltip.classList.remove("hidden");
      });

      hoverLine.addEventListener("mousemove", (e) => {
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY}px`;
      });

      hoverLine.addEventListener("mouseleave", () => {
        visibleLine.classList.remove("line-active");
        tooltip.classList.add("hidden");
      });

      svg.appendChild(group);
    }
  });

  // 2. Render Nodes second (Foreground layer)
  mapData.nodes.forEach(node => {
    const nodeEl = document.createElement("div");
    nodeEl.className = "node";
    nodeEl.style.left = `${node.x}%`;
    nodeEl.style.top = `${node.y}%`;

    if (node.image) {
      nodeEl.classList.add("image-node");
      nodeEl.style.backgroundImage = `url('${node.image}')`;
    }

    nodeEl.addEventListener("mouseenter", () => {
      // tooltip.innerHTML = `<strong>${node.name}</strong><br/>${node.desc}`;
      tooltipName.innerHTML = `${node.name}`;
      tooltipDesc.innerHTML = `${node.desc}`;
      tooltip.classList.remove("hidden");
      nodesHovered +=1;
      console.log(nodesHovered);

      if(nodesHovered>=2){
    scrollToAbout.classList.remove("hidden");
    console.log("success");

}

    });

    nodeEl.addEventListener("mousemove", (e) => {
      tooltip.style.left = `${e.pageX}px`;
      tooltip.style.top = `${e.pageY}px`;
    });

    nodeEl.addEventListener("mouseleave", () => {
      tooltip.classList.add("hidden");
    });

    container.appendChild(nodeEl);
  });
}

window.addEventListener("DOMContentLoaded", initMap);


const scrollToAbout = document.getElementById("scrollToAbout");

