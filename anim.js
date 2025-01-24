// initial setup of pages
// page 1 => visible
// page 2 => outside of viewport

// const page1 = document.querySelector("section:nth-of-type(1)");
// const page2 = document.querySelector("section:nth-of-type(2)")

// set style IMMEDIATELY without animation
gsap.set("section:nth-of-type(2)", {
  // shift element outside of viewport
  x: "-100vw"
});


// make image stargate clickable
// was soll passieren?
// timeline
// 1) growe stargate 100% des viewports
// 2) exchange page content
document.querySelector("img").onclick = () => {

  const tl = gsap.timeline()

  // timeline executed one animation after one another!
  
  // step 1: scale image up
  tl.to("img", {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    duration: 2,
  })
    // step 2: exchange page contents
    .to("section:nth-of-type(2)", {
      x: 0,
    })
    .to("section:nth-of-type(1)", {
      x: "-100vw",
    })
    // step 3: hide stargate => and booooooom!
    .to("img", {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      duration: 2,
    });
}