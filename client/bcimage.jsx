import React from "react";

const MyComponent = () => {
  const backgroundImageStyle = {
    backgroundImage:
      "https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backgroundSize: "cover" /* or 'contain' */,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    /* You can also set more styles here like width, height, padding, etc. */
  };

  return (
    <div style={backgroundImageStyle}>{/* Your component's content */}</div>
  );
};

export default MyComponent;
