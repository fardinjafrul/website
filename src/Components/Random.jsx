/**
 * Random component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "The Earth Swallows All",
    description:
      "While fossil records provides glimpses of past extinctions, it doesn't tell us if any intelligent life forms existed during these events. The thought of advanced civilizations being completely erased from existence adds a layer of eeriness to the concept of mass extinctions.",
    url: "",
  },
  {
    title: "Web Development for Beginners",
    description:
      "A pretty decent start.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Gallopasamus",
    description:
      "Hippos can't swim. They run underwater and can hold their breath for upto 5 minutes.",
    url: "https://www.nationalgeographic.com/animals/mammals/facts/hippopotamus#:~:text=Hippos%20cannot%20swim%20or%20breathe,see%20and%20breathe%20while%20underwater.",
  },
  {
    title: "Useless Fact",
    description:
      "The first 7 days of the week are always the hardest.",
    url: "",
  },
];

const Random = () => {
  return (
    <section className="padding" id="Random">
      <h2 style={{ textAlign: "center" }}>Random Tidbits</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Random;
