const click_selector = document.getElementById("click-selector");
const hover_selector = document.getElementById("hover-selector");

const iFrame = document.getElementById("frame");

function calculateRect(element, selector) {
  let rect = element.getBoundingClientRect();
  selector.style.width = rect.width + "px";
  selector.style.height = rect.height + "px";
  selector.style.top = rect.top + "px";
  selector.style.left = rect.left + "px";
}

let clickedElement;
iFrame.src = "page.html";
iFrame.addEventListener("load", () => {
  let iFrameDoc = iFrame.contentDocument;
  pageHeight = iFrame.contentWindow.innerHeight;

  iFrameDoc.addEventListener("click", (e) => {
    clickedElement = e.target;
    calculateRect(clickedElement, click_selector, true);
    click_selector.style.display = "block";
  });

  iFrameDoc.addEventListener("mouseover", (e) => {
    hoveredElement = e.target;
    calculateRect(hoveredElement, hover_selector);
    hover_selector.style.display = "block";
  });

  // updating selector style on window resize
  window.addEventListener("resize", (e) => {
    if (clickedElement) {
      calculateRect(clickedElement, click_selector);
      hover_selector.style.display = "none";
    }
  });
});
