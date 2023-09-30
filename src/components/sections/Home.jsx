import React from "react";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import projects from "../data/ProjectCard";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 sm:gap-10 my-28">
        {projects.map((project) => (
          <div
            key={project.image}
            className="card lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl image-full p-2 hover:scale-105 cursor-pointer transition duration-500"
          >
            <figure>
              <img src={project.image} alt={project.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.desc}</p>
              <div className="card-actions justify-end">
                <Link
                  to={project.link}
                  target="__blank"
                  className="btn rounded-full"
                >
                  <FaLink />
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="card lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl image-full p-2 hover:scale-105 cursor-pointer transition duration-500">
          <figure>
            <img src="/project.jpeg" alt="Project 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="" className="btn rounded-full">
                <FaLink />
              </Link>
            </div>
          </div>
        </div>

        <div className="card lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl image-full p-2 hover:scale-105 cursor-pointer transition duration-500">
          <figure>
            <img src="/project2.png" alt="Project 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="" className="btn rounded-full">
                <FaLink />
              </Link>
            </div>
          </div>
        </div>

        <div className="card lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl image-full p-2 hover:scale-105 cursor-pointer transition duration-500">
          <figure>
            <img src="/project3.png" alt="Project 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="" className="btn rounded-full">
                <FaLink />
              </Link>
            </div>
          </div>
        </div>

        <div className="card lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl image-full p-2 hover:scale-105 cursor-pointer transition duration-500">
          <figure>
            <img src="/project4.png" alt="Project 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="" className="btn rounded-full">
                <FaLink />
              </Link>
            </div>
          </div>
        </div>

        <div className="card lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl image-full p-2 hover:scale-105 cursor-pointer transition duration-500">
          <figure>
            <img src="/project5.png" alt="Project 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="" className="btn rounded-full">
                <FaLink />
              </Link>
            </div>
          </div>
        </div>

        <div className="card lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl image-full p-2 hover:scale-105 cursor-pointer transition duration-500">
          <figure>
            <img src="/unfinished.png" alt="Project 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to="" className="btn rounded-full">
                <FaLink />
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;