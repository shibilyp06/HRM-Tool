/* eslint-disable react/prop-types */
import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

function SearchModal({ isOpen, onClose, items }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="search-modal"
      overlayClassName="search-modal-overlay"
    >
      <div className="search-modal-content">
        <h2>Search Results</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/admin/${item.type}/${item.id}`} onClick={onClose}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}

export default SearchModal;
