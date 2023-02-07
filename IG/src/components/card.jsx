import React from "react";
import "../index.css";

function Card(props) {
  return (
    <div className="card backdrop-blur-xl bg-white/30 w-auto m-4 shadow-xl h-full flex items-center justify-center mb-10">
      <figure className="px-10 pt-10">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          width={300}
          height={200}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body text-white items-center text-center">
        <h2 className="card-title">{props.title}</h2>{" "}
        <span className="badge bg-red-400 p-3 text-blue-900">
          Start from {props.harga}
        </span>
        <p>{props.description}</p>
        <div className="card-actions">
          <a href={props.wa}>
            <button className="btn btn-primary">Ambil Sekarang</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
