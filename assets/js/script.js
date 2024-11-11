function copyToClipboard(hex) {
  navigator.clipboard.writeText(hex).then(() => {
    alert(`Copied hex to clipboard`);
  });
}

function setTextColorBasedOnBgColor(element, hex) {
  const rgb = hexToRgb(hex);
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  const textColor = brightness > 155 ? "#000000" : "#ffffff";
  element.style.color = textColor;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function changeTheme(theme) {
  let colors;
  switch (theme) {
    case 1:
      colors = ["#eff1f5", "#dce0e8", "#9ca0b0", "#7c7f93", "#4c4f69"];
      break;
    case 2:
      colors = ["#232634", "#303446", "#414559", "#737994", "#c6d0f5"];
      break;
    case 3:
      colors = ["#181926", "#1e2030", "#24273a", "#5b6078", "#cad3f5"];
      break;
    case 4:
      colors = ["#11111b", "#1e1e2e", "#313244", "#45475a", "#cdd6f4"];
      break;
    case 5:
      colors = ["#2e3440", "#3b4252", "#434c5e", "#4c566a", "#d8dee9"];
      break;
    default:
      colors = ["#303446", "#c6d0f5"];
  }

  document.body.style.transition = "background-color 0.5s, color 0.5s";
  document.body.style.backgroundColor = colors[0];
  document.body.style.color = colors[4];

  document.querySelectorAll(".heading").forEach((heading) => {
    heading.style.transition = "color 0.5s";
    heading.style.color = colors[4];
  });

  document
    .querySelectorAll(".color-palatte .color")
    .forEach((colorDiv, index) => {
      if (colors[index]) {
        colorDiv.style.transition = "background-color 0.5s, color 0.5s";
        colorDiv.style.backgroundColor = colors[index];
        setTextColorBasedOnBgColor(
          colorDiv.querySelector("span"),
          colors[index]
        );
      }
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".color").forEach((colorDiv) => {
    const hex = colorDiv.querySelector("span").textContent;
    setTextColorBasedOnBgColor(colorDiv.querySelector("span"), hex);
  });
});
