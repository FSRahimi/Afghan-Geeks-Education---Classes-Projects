// ============================================================
//  Smart Book Library — app.js
//  Covers: Objects & Arrays, JSON, Async/Await, LocalStorage,
//          CRUD Operations, DOM Manipulation, Events
// ============================================================

const STORAGE_KEY = "smartLibraryBooks";

// ── State ────────────────────────────────────────────────────
let books = []; // master array of book objects
let searchQuery = "";
let filterCategory = "";

// ── DOM references ───────────────────────────────────────────
const booksGrid = document.getElementById("booksGrid");
const totalBooksEl = document.getElementById("totalBooks");
const emptyMsg = document.getElementById("emptyMsg");
const formError = document.getElementById("formError");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const categoryInput = document.getElementById("category");
const yearInput = document.getElementById("year");
const addBookBtn = document.getElementById("addBookBtn");

const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterCategory");

// ── Initialise app ───────────────────────────────────────────
/**
 * Async entry point.
 * 1. Try to load books from localStorage (previous session).
 * 2. If none exist, fetch the default books from books.json.
 */
async function init() {
  const saved = loadFromStorage();

  if (saved && saved.length > 0) {
    books = saved;
  } else {
    books = await fetchDefaultBooks();
    saveToStorage();
  }

  render();
}

// ── Fetch books.json (Async / Await) ─────────────────────────
async function fetchDefaultBooks() {
  try {
    const response = await fetch("books.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json(); // parse JSON
    return data;
  } catch (error) {
    console.error("Could not load books.json:", error);
    return []; // graceful fallback — start with empty library
  }
}

// ── LocalStorage helpers ─────────────────────────────────────
function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function loadFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

// ── CRUD Operations ──────────────────────────────────────────

/** CREATE — build a book object and add it to the array */
function addBook() {
  // Clear previous error
  formError.textContent = "";

  // Read & trim form values
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const category = categoryInput.value;
  const year = parseInt(yearInput.value, 10);

  // Basic validation
  if (!title || !author || !category || !year) {
    formError.textContent = "Please fill in all fields before adding a book.";
    return;
  }

  if (year < 1000 || year > 2099) {
    formError.textContent =
      "Please enter a valid publication year (1000 – 2099).";
    return;
  }

  // Build a book object with a unique id
  const newBook = {
    id: Date.now().toString(), // simple unique id using timestamp
    title,
    author,
    category,
    year
  };

  books.push(newBook); // add to array
  saveToStorage(); // persist
  render(); // refresh UI
  clearForm(); // reset inputs
}

/** DELETE — remove a book by its id */
function deleteBook(id) {
  // Array filter returns a new array without the matching book
  books = books.filter((book) => book.id !== id);
  saveToStorage();
  render();
}

/** READ — filter books based on current search + category */
function getFilteredBooks() {
  return books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "" || book.category === filterCategory;
    return matchesSearch && matchesCategory;
  });
}

// ── Render ───────────────────────────────────────────────────

/** Renders book cards and updates the statistics counter */
function render() {
  const filtered = getFilteredBooks();

  // Update total count (always shows total in library, not filtered)
  totalBooksEl.textContent = books.length;

  // Clear grid
  booksGrid.innerHTML = "";

  if (filtered.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }

  emptyMsg.style.display = "none";

  // Create a card for each filtered book
  filtered.forEach((book) => {
    const card = createBookCard(book);
    booksGrid.appendChild(card);
  });
}

/** Builds a single book card DOM element */
function createBookCard(book) {
  const card = document.createElement("div");
  card.classList.add("book-card");

  // Build inner HTML using a template literal
  card.innerHTML = `
    <span class="book-category-badge">${escapeHtml(book.category)}</span>
    <h3 class="book-title">${escapeHtml(book.title)}</h3>
    <p class="book-author">by ${escapeHtml(book.author)}</p>
    <p class="book-year">&#128197; ${book.year}</p>
    <button class="btn-delete" data-id="${book.id}">Remove Book</button>
  `;

  // Attach delete event listener to the button inside this card
  card.querySelector(".btn-delete").addEventListener("click", () => {
    deleteBook(book.id);
  });

  return card;
}

// ── Utilities ────────────────────────────────────────────────

/** Prevent XSS by escaping HTML special characters */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/** Clear all form inputs after a successful add */
function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  categoryInput.value = "";
  yearInput.value = "";
}

// ── Event Listeners ──────────────────────────────────────────
addBookBtn.addEventListener("click", addBook);

// Allow pressing Enter in any input field to submit
[titleInput, authorInput, yearInput].forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addBook();
  });
});

// Search — update query and re-render on every keystroke
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  render();
});

// Category filter — update filter and re-render on change
filterSelect.addEventListener("change", (e) => {
  filterCategory = e.target.value;
  render();
});

// ── Start the app ────────────────────────────────────────────
init();
