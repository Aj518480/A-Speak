import axios from "axios";

export default {
  // Gets all books
  getBoard: function() {
    return axios.get("/api/boards");
  },
  // Gets the book with the given id
  getBoard: function(id) {
    return axios.get("/api/boards/" + id);
  },
  getUserBoard: function(username) {
    return axios.get("/api/boards/user/" + username);
  },
  // Deletes the book with the given id
  deleteBoard: function(id) {
    return axios.delete("/api/board/" + id);
  },
  // Saves a book to the database
  saveBoard: function(id, boardData) {
    return axios.post("/api/boards/"+id, boardData);
  },
  saveCard: function(id, cardData) {
    // return axios.post("/api/cards", cardData);
    return axios.post("/api/cards/"+id, cardData);
  },
  getCards: function(id) {
    return axios.get("/api/cards/board/"+id);
  }
};
