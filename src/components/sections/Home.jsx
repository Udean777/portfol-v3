import React from "react";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import projects from "../data/ProjectCard";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center items-center z-50">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 sm:gap-10 my-28">
        {projects.map((project) => (
          <div
            key={project.image}
            className="card lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl image-full p-2 cursor-pointer"
          >
            <figure>
              <img src={project.image} alt={project.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.desc}</p>
              <div className="card-actions justify-end">
                <Link
                  onClick={project.link}
                  // to={project.link}
                  target="__blank"
                  className="btn rounded-full"
                >
                  <FaLink />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
