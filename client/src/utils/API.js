import axios from "axios";

export default {
  // Gets all books
  getBoard: function() {
    return axios.get("/api/boards");
  },
  // Gets the book with the given id
  getBoard: function(id) {
    return axios.get("/api/board/" + id);
  },
  // Deletes the book with the given id
  deleteBoard: function(id) {
    return axios.delete("/api/board/" + id);
  },
  // Saves a book to the database
  saveBoard: function(boardData) {
    return axios.post("/api/boards", boardData);
  },
  saveCard: function(cardData) {
    return axios.post("/api/cards", cardData);
  },
  getCards: function(cardData) {
    return axios.get("/api/cards", cardData);
  }
};
