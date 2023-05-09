import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  const handleBookTicket = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object to store the form data
    const formData = {
      movie: movie.name,
      name,
      age,
      address,
      email,
    };

    // Store the form data in the local storage
    localStorage.setItem("bookingData", JSON.stringify(formData));

    // Clear the form inputs
    setName("");
    setAge("");
    setAddress("");
    setEmail("");

    // Close the modal
    setShowModal(false);
  };
  const successofAll = () => {
    alert("Succesfully Booked Movie");
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-4">{movie.name}</h2>
      <img src={movie.image?.medium} alt={movie.name} className="my-4" />
      <p className="my-4 text-gray-700 font-semibold ">
        Summary: {movie.summary}
      </p>
      <p className="my-2">Type: {movie.type}</p>
      <p className="my-2">Status: {movie.status}</p>
      <p className="my-2">Language: {movie.language}</p>
      <p className="my-2">Rating: {movie.rating?.average}</p>
      <div className="text-center">
        <button
          className="border-solid border-2 border-green-600 p-2 hover:bg-green-300 rounded"
          onClick={handleBookTicket}
        >
          Book Ticket
        </button>
      </div>

      <div className="flex items-center justify-center ">
        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          contentLabel="Book Ticket Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h3 className="text-xl font-bold mb-4">Book Ticket - {movie.name}</h3>
          <form
            onSubmit={handleSubmit}
            className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75"
          >
            <div className="bg-white rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-bold mb-4">
                Book Ticket - {movie.name}
              </h3>

              {/* modal form */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="age"
                  className="text-sm font-medium text-gray-700"
                >
                  Age:
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className="p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-700"
                >
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="p-2 border rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={successofAll}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default MovieDetails;
