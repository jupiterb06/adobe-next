var nodesHovered = 0;
const mapData = {
  nodes: [
{ id: 1, name: `Art Department`, x: 20, y: 28,
  desc: `<ul>
    <li>Parent college: The College of Architecture, Art, and Planning</li>
    <li>Interdisciplinary curriculum balancing arts with scholarship</li>
    <li>Students pursue elective coursework outside their department</li>
    <li>While there is an element of struture, the department's environment is a laid-back, supportive one</li>
    <li class='jupiterIn'>Jupiter is a fine arts major</li>
  </ul>`,
  image: `images/icons/computerFace.png`
},

{ id: 2, name: `Architecture Department`, x: 42, y: 40,
  desc: `<ul>
    <li>Parent college: The College of Architecture, Art, and Planning</li>
    <li>One of Cornell’s most acadmeically challenging departments</li>
    <li>Studio culture is intense, competitive, and tradition‑driven</li>
    <li>Professors are known for their harsh critiques</li>
    <li>Students are highly creative and often identify as artists first</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
},

{ id: 3, name: `Information Science Department`, x: 88, y: 20,
  desc: `<ul>
    <li>Parent college: The Ann S. Bowers College of Computing and Information Science</li>
    <li>Students choose from concentrations such as Data Science, UX Design, and Interactive Technologies</li>
    <li>Coursework ranges from web design to technology ethics to robotics</li>
    <li>Popular with students combining creativity with technical interests</li>
    <li class='jupiterIn'>Jupiter is pursuing a minor in Information Science</li>
  </ul>`,
  image: `images/icons/computerFace.png`
},

{ id: 4, name: `Performing and Media Arts Department`, x: 8, y: 72,
  desc: `<ul>
    <li>Parent college: The College of Arts and Sciences</li>
    <li>Covers film, theater, dance, and related disciplines</li>
    <li>Offers both practical and theoretical coursework</li>
    <li>Produces shows throughout the year in the Schwartz Center</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
},

{ id: 5, name: `Human Centered Design`, x: 82, y: 36,
  desc: `<ul>
    <li>Parent college: The College of Human Ecology</li>
    <li>Home to the Design and Environmental Analysis program, which explores interior and spatial design</li>
    <li>Also home to the Fashion Design and Management program</li>
    <li>Known for a design‑as‑problem‑solving philosophy and advanced studio spaces</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
},

{ id: 6, name: `Medium Design Collective`, x: 24, y: 50,
  desc: `<ul>
    <li>Interdisciplinary design collective with four specializedsubteams</li>
    <li>Members range from aspiring designers to casual creatives</li>
    <li class='jupiterIn'>Jupiter leads the editorial subteam, which produces a print publication</li>
  </ul>`,
  image: `images/icons/computerFace.png`
},

{ id: 7, name: `Design Consulting at Cornell`, x: 96, y: 46,
  desc: `<ul>
    <li>Student‑run design consultancy that works with real world clients</li>
    <li>Known for their intense recruitment cycles and heavy workload</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
},

{ id: 8, name: `Thread Magazine`, x: 60, y: 56,
  desc: `<ul>
    <li>Student‑run magazine focused on arts, culture, and fashion</li>
    <li>In addition to the publication, Thread hosts parties and runs the @cornellfits Instagram</li>
    <li class='jupiterIn'>Jupiter serves as editorial director, as well as a shoot director</li>
  </ul>`,
  image: `images/icons/computerFace.png`
},

{ id: 9, name: `Cornell Fashion Collective`, x: 66, y: 34,
  desc: `<ul>
    <li>Known for their professionally produced runway shows</li>
    <li>Supports students in apparel creation, as well as fashion and event management</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
},

{ id: 10, name: `Collective X`, x: 12, y: 18,
  desc: `<ul>
    <li>Student publication highlighting QBIPOC perspectives</li>
    <li>Focused primarily on diversity and cultural awarness within art and fashion</li>
    <li>Put together by club members, but often accepts submissions from external students</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
},

{ id: 11, name: `Guild of Visual Arts`, x: 6, y: 26,
  desc: `<ul>
    <li>Art club centered on accessibility and open creative spaces</li>
    <li>Hosts casual workshops and provides studio spaces</li>
    <li>Organizes exhibitions of member artwork</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
},

{ id: 12, name: `Fanclub Collective`, x: 20, y: 84,
  desc: `<ul>
    <li>Student organization promoting and hosting local DIY concerts</li>
    <li>Showcases student bands and hosts campus shows</li>
    <li>Organizes and promotes events in the broader Ithaca community</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
},

{ id: 13, name: `Risley Hall`, x: 22, y: 62,
  desc: `<ul>
    <li>Residential community for students interested in thevisual and performing arts</li>
    <li>Home to Cornell’s only fully student‑operated theater</li>
    <li>Hosts a wide variety of shows and events</li>
    <li>While many students pursuing creative fields live here, it is open to all, regardless of their major</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
},

{ id: 14, name: `Big Red Moon Club`, x: 4, y: 88,
  desc: `<ul>
    <li>"Secret" society, event organizer, and social media presence with a satirical edge</li>
    <li>Known for iconic events, such as their infamous Performative Male Contest, and commentary on student life</li>
    <li>Active in campus activism and social justice</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
},

{ id: 15, name: `Co-op Houses`, x: 82, y: 74,
  desc: `<ul>
    <li>Affordable group housing emphasizing community and activism</li>
    <li>Alternative to dorms and Greek life</li>
    <li>Host parties, concerts, workshops, and academic talks</li>
    <li>Multiple houses with their own unique culture, but all generally attract creative, progressive-minded students</li>
  </ul>`,
  image: `images/icons/computerBlack.png`
}



  ],
  connections: [
    { from: 1, to: 2, name: "", desc: "same parent college" },
    { from: 2, to: 3, name: "Supply Route B", desc: "Unsecured underground transit tunnel." },
    { from: 1, to: 13, name: "", desc: "many art students choose to live in Risley Hall" },
    { from: 1, to: 4, name: "", desc: "several courses are crosslisted between the two departments, particularly those focused on film and media production"},

    { from: 3, to: 7, name: "", desc: "many DCC members are majoring or minoring in Information Science"},

    { from: 4, to: 13, name: "", desc: "many PMA students choose to live in Risley Hall"},

    { from: 5, to: 9, name: "", desc: "many fashion students participate in CFC to gain experience and showcase their work"},
    { from: 5, to: 8, name: "", desc: "many fashion students participate in Thread to gain experience, or just to express their interest in the media side of fashion"},
    
    { from: 6, to: 7, name: "", desc: "MDC and DCC frequently collaborate to host recruitment events and exhibitions"},
    { from: 6, to: 8, name: "", desc: "MDC and Thread frequently collaborate to host recruitment events and exhibitions"},

    { from: 8, to: 9, name: "", desc: "Thread and CFC have many common members, due to their similar focus on fashion"},
    { from: 8, to: 10, name: "", desc: "Thread and Collective X often promote one another"},

    { from: 10, to: 14, name: "", desc: "Moon Club shares Collective X's focus on diversity and social justice, and often promotes their events and launches"},

    { from: 12, to: 14, name: "", desc: "Moon Club often promotes shows put on by Fanclub Collective"},
    { from: 12, to: 15, name: "", desc: "The Co-op Houses are a popular venue for the DIY concerts put on by Fanclub Collective"},

    { from: 14, to: 15, name: "", desc: "Moon Club's leadership is also involved in leading one of the Co-op Houses, and they promote events and recruitment for all of the houses."}



  ]
};

function initMap() {
  const container = document.getElementById("map-container");
  const svg = document.getElementById("svg-connections");
  const tooltip = document.getElementById("tooltip-outer");
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
        if(conn.name == ""){
          tooltipName.classList.add("hidden");
        }
        else{
          if(tooltipName.classList.contains("hidden")){
            tooltipName.classList.remove("hidden");
          }
          tooltipName.innerHTML = `${conn.name}`;
        } 
        tooltipDesc.innerHTML = `${conn.desc}`;
        // tooltip.innerHTML = `<strong>${conn.name}</strong><br/>${conn.desc}`;
        tooltip.classList.remove("hidden");
      });

      hoverLine.addEventListener("mousemove", (e) => {
        tooltip.style.left = `${e.clientX + 16}px`;
        tooltip.style.top = `${e.clientY + 16}px`;
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
      if(tooltipName.classList.contains("hidden")){
            tooltipName.classList.remove("hidden");
          }
      tooltipName.innerHTML = `${node.name}`;
      tooltipDesc.innerHTML = `${node.desc}`;
      tooltip.classList.remove("hidden");
      nodesHovered +=1;
      console.log(nodesHovered);

      if(nodesHovered>=2){
    console.log("success");

}

    });

    nodeEl.addEventListener("mousemove", (e) => {
      tooltip.style.left = `${e.clientX + 16}px`;
      tooltip.style.top = `${e.clientY + 16}px`;
    });

    nodeEl.addEventListener("mouseleave", () => {
      tooltip.classList.add("hidden");
    });

    container.appendChild(nodeEl);
  });
}

window.addEventListener("DOMContentLoaded", initMap);



