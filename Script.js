
const products = [
    // REAL BOOKS
    {
        id: 1,
        name: "Atomic Habits",
        author: "James Clear",
        category: "Non-Fiction",
        subcategory: "Self-Help",
        price: 399,
        oldPrice: 599,
        rating: 4.8,
        language: "English",
        isbn: "9781847941831",
        publisher: "Random House Business",
        description: "A practical guide to building good habits, breaking bad ones, and making small changes that can improve your everyday life.",
        image: "https://covers.openlibrary.org/b/isbn/9781847941831-L.jpg",
        badge: "Bestseller"
    },
    {
        id: 2,
        name: "Wings of Fire",
        author: "A. P. J. Abdul Kalam with Arun Tiwari",
        category: "Non-Fiction",
        subcategory: "Biography",
        price: 299,
        oldPrice: 399,
        rating: 4.8,
        language: "English",
        isbn: "9788173711466",
        publisher: "Universities Press",
        description: "The autobiography of Dr. A. P. J. Abdul Kalam, describing his early life, education, scientific career, and experiences in India's space and missile programmes.",
        image: "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg",
        badge: "Reader Favorite"
    },
    {
        id: 3,
        name: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        subcategory: "Adventure",
        price: 249,
        oldPrice: 350,
        rating: 4.7,
        language: "English",
        isbn: "9780062315007",
        publisher: "HarperOne",
        description: "A philosophical adventure following Santiago, a young shepherd who travels in search of treasure and discovers lessons about his own journey.",
        image: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
        badge: "Popular"
    },
    {
        id: 4,
        name: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        category: "Non-Fiction",
        subcategory: "Business & Finance",
        price: 349,
        oldPrice: 499,
        rating: 4.6,
        language: "English",
        isbn: "9781612680194",
        publisher: "Plata Publishing",
        description: "A personal finance book exploring financial education, assets, liabilities, and different approaches to money.",
        image: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
        badge: "Popular"
    },
    {
        id: 5,
        name: "Ikigai",
        author: "Héctor García and Francesc Miralles",
        category: "Non-Fiction",
        subcategory: "Self-Help",
        price: 279,
        oldPrice: 399,
        rating: 4.6,
        language: "English",
        isbn: "9781786330895",
        publisher: "Hutchinson",
        description: "An introduction to the Japanese concept of ikigai and ideas about purpose, daily habits, community, and a meaningful life.",
        image: "https://covers.openlibrary.org/b/isbn/9781786330895-L.jpg",
        badge: "Bestseller"
    },
    {
        id: 6,
        name: "The Psychology of Money",
        author: "Morgan Housel",
        category: "Non-Fiction",
        subcategory: "Business & Finance",
        price: 329,
        oldPrice: 450,
        rating: 4.7,
        language: "English",
        isbn: "9780857197689",
        publisher: "Harriman House",
        description: "Short stories about how people think about money, make financial decisions, and understand wealth and risk.",
        image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
        badge: "Popular"
    },
    {
        id: 7,
        name: "The 5 AM Club",
        author: "Robin Sharma",
        category: "Non-Fiction",
        subcategory: "Self-Help",
        price: 349,
        oldPrice: 499,
        rating: 4.5,
        language: "English",
        isbn: "9781443456623",
        publisher: "HarperCollins",
        description: "A leadership and personal-development story about morning routines, focus, and personal growth.",
        image: "https://covers.openlibrary.org/b/isbn/9781443456623-L.jpg",
        badge: "Popular"
    },
    {
        id: 8,
        name: "Think Like a Monk",
        author: "Jay Shetty",
        category: "Non-Fiction",
        subcategory: "Self-Help",
        price: 329,
        oldPrice: 499,
        rating: 4.5,
        language: "English",
        isbn: "9781982134488",
        publisher: "Simon & Schuster",
        description: "Reflections and exercises about purpose, discipline, relationships, and finding greater clarity in everyday life.",
        image: "https://covers.openlibrary.org/b/isbn/9781982134488-L.jpg",
        badge: "Popular"
    },
    {
        id: 9,
        name: "Wings of Fire",
        author: "A. P. J. Abdul Kalam",
        category: "Non-Fiction",
        subcategory: "Biography",
        price: 249,
        oldPrice: 349,
        rating: 4.7,
        language: "Hindi",
        isbn: "9788173711466",
        publisher: "Universities Press",
        description: "A Hindi-language edition of the inspiring autobiography of India's former President and scientist Dr. A. P. J. Abdul Kalam.",
        image: "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg",
        badge: "Biography"
    },
    {
        id: 10,
        name: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        category: "Fiction",
        subcategory: "Fantasy",
        price: 399,
        oldPrice: 550,
        rating: 4.9,
        language: "English",
        isbn: "9781408855652",
        publisher: "Bloomsbury",
        description: "The first Harry Potter novel, introducing a young wizard, his friends, and the magical world of Hogwarts.",
        image: "https://covers.openlibrary.org/b/isbn/9781408855652-L.jpg",
        badge: "Classic"
    },
    {
        id: 11,
        name: "The Hobbit",
        author: "J. R. R. Tolkien",
        category: "Fiction",
        subcategory: "Fantasy",
        price: 349,
        oldPrice: 499,
        rating: 4.8,
        language: "English",
        isbn: "9780547928227",
        publisher: "Houghton Mifflin Harcourt",
        description: "A fantasy adventure about Bilbo Baggins, a hobbit who joins a company of dwarves on an unexpected journey.",
        image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
        badge: "Classic"
    },
    {
        id: 12,
        name: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        category: "Fiction",
        subcategory: "Literary Fiction",
        price: 199,
        oldPrice: 299,
        rating: 4.8,
        language: "English",
        isbn: "9780156012195",
        publisher: "Harcourt",
        description: "A thoughtful story about a young prince, his travels, friendship, and the things that matter in life.",
        image: "https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg",
        badge: "Classic"
    },
    {
        id: 13,
        name: "Pride and Prejudice",
        author: "Jane Austen",
        category: "Fiction",
        subcategory: "Romance",
        price: 199,
        oldPrice: 299,
        rating: 4.7,
        language: "English",
        isbn: "9780141439518",
        publisher: "Penguin Classics",
        description: "A classic novel about Elizabeth Bennet, Mr. Darcy, family, relationships, and social expectations.",
        image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
        badge: "Classic"
    },
    {
        id: 14,
        name: "The Silent Patient",
        author: "Alex Michaelides",
        category: "Fiction",
        subcategory: "Mystery & Thriller",
        price: 329,
        oldPrice: 499,
        rating: 4.5,
        language: "English",
        isbn: "9781250301697",
        publisher: "Celadon Books",
        description: "A psychological thriller about a painter who stops speaking after a violent incident and the therapist determined to understand her story.",
        image: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg",
        badge: "Thriller"
    },
    {
        id: 15,
        name: "Sapiens",
        author: "Yuval Noah Harari",
        category: "Non-Fiction",
        subcategory: "History",
        price: 499,
        oldPrice: 699,
        rating: 4.7,
        language: "English",
        isbn: "9780099590088",
        publisher: "Vintage",
        description: "A broad exploration of human history, from early humans to modern societies.",
        image: "https://covers.openlibrary.org/b/isbn/9780099590088-L.jpg",
        badge: "Popular"
    },
    {
        id: 16,
        name: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "Non-Fiction",
        subcategory: "Science",
        price: 399,
        oldPrice: 550,
        rating: 4.6,
        language: "English",
        isbn: "9780553380163",
        publisher: "Bantam",
        description: "An introduction to ideas about the universe, space, time, black holes, and modern cosmology.",
        image: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
        badge: "Science"
    },
    {
        id: 17,
        name: "Wings of Fire: Children's Edition",
        author: "A. P. J. Abdul Kalam",
        category: "Children",
        subcategory: "Educational Books",
        price: 199,
        oldPrice: 299,
        rating: 4.6,
        language: "English",
        isbn: "9788173711466",
        publisher: "Universities Press",
        description: "An inspiring reading choice for young readers interested in science, learning, and the life of Dr. Kalam.",
        image: "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg",
        badge: "Young Readers"
    },
    {
        id: 18,
        name: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        category: "Children",
        subcategory: "Picture Books",
        price: 299,
        oldPrice: 399,
        rating: 4.9,
        language: "English",
        isbn: "9780399226908",
        publisher: "Philomel Books",
        description: "A colorful picture book following a caterpillar as it eats its way through a variety of foods and grows into a butterfly.",
        image: "https://covers.openlibrary.org/b/isbn/9780399226908-L.jpg",
        badge: "Children's Favorite"
    },
    {
        id: 19,
        name: "The Jungle Book",
        author: "Rudyard Kipling",
        category: "Children",
        subcategory: "Story Books",
        price: 179,
        oldPrice: 249,
        rating: 4.6,
        language: "English",
        isbn: "9780141325293",
        publisher: "Puffin Classics",
        description: "Classic animal stories featuring Mowgli, Baloo, Bagheera, and the jungle.",
        image: "https://covers.openlibrary.org/b/isbn/9780141325293-L.jpg",
        badge: "Classic"
    },
    {
        id: 20,
        name: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        category: "Children",
        subcategory: "Fantasy",
        price: 199,
        oldPrice: 299,
        rating: 4.7,
        language: "English",
        isbn: "9780141321073",
        publisher: "Puffin Classics",
        description: "Alice follows a white rabbit into a curious world full of unusual characters and imaginative adventures.",
        image: "https://covers.openlibrary.org/b/isbn/9780141321073-L.jpg",
        badge: "Classic"
    },

    // REAL-WORLD STATIONERY
    {
        id: 21,
        name: "Classmate Single Rule Notebook",
        author: "Classmate",
        category: "Stationery",
        subcategory: "Single Rule",
        price: 65,
        oldPrice: 80,
        rating: 4.5,
        language: "N/A",
        description: "Single-rule notebook for everyday class notes, assignments, and written practice.",
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
        badge: "Study Essential"
    },
    {
        id: 22,
        name: "Double Rule Writing Notebook",
        author: "BookNook Essentials",
        category: "Stationery",
        subcategory: "Double Rule",
        price: 55,
        oldPrice: 70,
        rating: 4.4,
        language: "N/A",
        description: "A double-rule notebook for handwriting practice, writing exercises, and neat classwork.",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=700&q=80",
        badge: "Study Essential"
    },
    {
        id: 23,
        name: "Wide Rule Notebook",
        author: "BookNook Essentials",
        category: "Stationery",
        subcategory: "Wide Rule",
        price: 59,
        oldPrice: 75,
        rating: 4.4,
        language: "N/A",
        description: "A wide-rule notebook with generous writing space for school notes and daily practice.",
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
        badge: "School Essential"
    },
    {
        id: 24,
        name: "Practical Record Notebook",
        author: "BookNook Essentials",
        category: "Stationery",
        subcategory: "Record Notebook",
        price: 125,
        oldPrice: 160,
        rating: 4.5,
        language: "N/A",
        description: "A practical record notebook for laboratory observations, diagrams, and academic practical work.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80",
        badge: "College Essential"
    },
    {
        id: 25,
        name: "Cello Ball Pen Set",
        author: "Cello",
        category: "Stationery",
        subcategory: "Pen Sets",
        price: 99,
        oldPrice: 130,
        rating: 4.5,
        language: "N/A",
        description: "A useful ball pen set for school notes, college assignments, and everyday writing.",
        image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=700&q=80",
        badge: "Best Value"
    },
    {
        id: 26,
        name: "Reynolds Blue Ball Pens",
        author: "Reynolds",
        category: "Stationery",
        subcategory: "Pens",
        price: 50,
        oldPrice: 65,
        rating: 4.4,
        language: "N/A",
        description: "Blue ball pens for everyday writing, note-taking, and classroom use.",
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=700&q=80",
        badge: "Everyday Essential"
    },
    {
        id: 27,
        name: "Nataraj HB Pencil Set",
        author: "Nataraj",
        category: "Stationery",
        subcategory: "Pencil Sets",
        price: 45,
        oldPrice: 60,
        rating: 4.5,
        language: "N/A",
        description: "HB pencils for writing, drawing, sketching, and schoolwork.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80",
        badge: "School Essential"
    },
    {
        id: 28,
        name: "DOMS Colour Pencil Set",
        author: "DOMS",
        category: "Stationery",
        subcategory: "Pencil Sets",
        price: 120,
        oldPrice: 160,
        rating: 4.6,
        language: "N/A",
        description: "A colorful pencil set for drawing, coloring, and creative school projects.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80",
        badge: "Creative Pick"
    },
    {
        id: 29,
        name: "DOMS Geometry Box",
        author: "DOMS",
        category: "Stationery",
        subcategory: "Geometry Boxes",
        price: 150,
        oldPrice: 199,
        rating: 4.6,
        language: "N/A",
        description: "A geometry instrument set for mathematics, geometry, and technical drawing practice.",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=700&q=80",
        badge: "Math Essential"
    },
    {
        id: 30,
        name: "Faber-Castell Highlighter Set",
        author: "Faber-Castell",
        category: "Stationery",
        subcategory: "Highlighters",
        price: 180,
        oldPrice: 240,
        rating: 4.7,
        language: "N/A",
        description: "Bright highlighters for marking important points, organizing notes, and revision.",
        image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=700&q=80",
        badge: "Study Favorite"
    },
    {
        id: 31,
        name: "Camlin Sketch Pen Set",
        author: "Camlin",
        category: "Stationery",
        subcategory: "Sketch Pens",
        price: 99,
        oldPrice: 140,
        rating: 4.5,
        language: "N/A",
        description: "Colorful sketch pens for drawing, lettering, school projects, and creative artwork.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80",
        badge: "Creative Pick"
    },
    {
        id: 32,
        name: "Glitter Gel Pen Set",
        author: "BookNook Essentials",
        category: "Stationery",
        subcategory: "Glitter Pens",
        price: 120,
        oldPrice: 160,
        rating: 4.4,
        language: "N/A",
        description: "Glitter gel pens for decorating notes, greeting cards, journals, and craft projects.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80",
        badge: "Creative Pick"
    },
    {
        id: 33,
        name: "Colorful Sticky Notes Set",
        author: "BookNook Essentials",
        category: "Stationery",
        subcategory: "Sticky Notes",
        price: 75,
        oldPrice: 100,
        rating: 4.5,
        language: "N/A",
        description: "Colorful sticky notes for reminders, important topics, revision notes, and planning.",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=700&q=80",
        badge: "Study Essential"
    },
    {
        id: 34,
        name: "Soft Plastic Scale Set",
        author: "BookNook Essentials",
        category: "Stationery",
        subcategory: "Rulers",
        price: 35,
        oldPrice: 50,
        rating: 4.3,
        language: "N/A",
        description: "Flexible plastic rulers for everyday measurement, schoolwork, and geometry practice.",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=700&q=80",
        badge: "School Essential"
    },
    {
        id: 35,
        name: "Wooden Pencil Sharpener",
        author: "Apsara",
        category: "Stationery",
        subcategory: "Sharpeners",
        price: 20,
        oldPrice: 30,
        rating: 4.3,
        language: "N/A",
        description: "A compact pencil sharpener for keeping writing and drawing pencils ready to use.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80",
        badge: "Everyday Essential"
    },
    {
        id: 36,
        name: "Eraser Set - Soft & Dust-Free",
        author: "DOMS",
        category: "Stationery",
        subcategory: "Erasers",
        price: 35,
        oldPrice: 50,
        rating: 4.4,
        language: "N/A",
        description: "A set of erasers for pencil corrections, drawing, and classroom use.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80",
        badge: "School Essential"
    },
    {
        id: 37,
        name: "Study Planner Notebook",
        author: "BookNook Essentials",
        category: "Stationery",
        subcategory: "Study Planners",
        price: 149,
        oldPrice: 199,
        rating: 4.6,
        language: "N/A",
        description: "A study planner notebook for tracking subjects, assignments, revision sessions, and weekly goals.",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=700&q=80",
        badge: "Study Favorite"
    },
    {
        id: 38,
        name: "A4 Blank Drawing Sheets",
        author: "BookNook Essentials",
        category: "Stationery",
        subcategory: "Drawing Sheets",
        price: 60,
        oldPrice: 80,
        rating: 4.4,
        language: "N/A",
        description: "Blank A4 sheets for drawing, diagrams, school projects, and creative practice.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80",
        badge: "Creative Pick"
    }
];

// APP STATE
let cart = [];
let wishlist = [];
let orders = [];
let currentUser = null;
let selectedProduct = null;
let loginMode = "login";
let activeCategory = "All";
let searchTerm = "";
let toastTimer;

const $ = id => document.getElementById(id);

function money(amount) {
    return "₹" + amount.toLocaleString("en-IN");
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function showToast(message) {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function showPage(page) {
    document.querySelectorAll(".page").forEach(section => {
        section.classList.add("hidden");
    });

    const target = $(page + "Page");

    if (target) {
        target.classList.remove("hidden");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (page === "shop") renderShop();
    if (page === "cart") renderCart();
    if (page === "wishlist") renderWishlist();
    if (page === "account") renderAccount();
    if (page === "checkout") renderCheckout();
}

function filterCategory(category) {
    activeCategory = category;
    searchTerm = "";

    $("searchInput").value = "";
    $("categoryFilter").value = category;

    $("shopTitle").textContent =
        category === "All" ? "All Products" : category;

    showPage("shop");
}

function renderProductCard(product) {
    const isSaved = wishlist.includes(product.id);

    return `
        <article class="product-card">

            <div class="product-image"
                 onclick="openProduct(${product.id})">

                ${product.badge ? `
                    <span class="badge">${escapeHTML(product.badge)}</span>
                ` : ""}

                <img
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/400x500/F7F5ED/2D6A4F?text=BookNook';">
            </div>

            <button
                class="wishlist-btn ${isSaved ? "active" : ""}"
                onclick="toggleWishlist(${product.id})"
                title="Add to wishlist"
                aria-label="Toggle wishlist">
                ${isSaved ? "♥" : "♡"}
            </button>

            <div class="product-info">

                <div class="product-category">
                    ${escapeHTML(product.subcategory)}
                </div>

                <h3 class="product-name"
                    onclick="openProduct(${product.id})">
                    ${escapeHTML(product.name)}
                </h3>

                <p class="product-author">
                    ${escapeHTML(product.author)}
                </p>

                <div class="product-rating">
                    ★ ${product.rating}
                    <span>(${Math.round(product.rating * 20)} reviews)</span>
                </div>

                <div class="product-bottom">
                    <div>
                        <span class="product-price">${money(product.price)}</span>
                        ${product.oldPrice ? `
                            <span class="old-price">${money(product.oldPrice)}</span>
                        ` : ""}
                    </div>

                    <button class="add-button"
                            onclick="addToCart(${product.id})">
                        + Add
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderProductGrid(containerId, items) {
    $(containerId).innerHTML = items.map(renderProductCard).join("");
}

function renderHome() {
    const books = products.filter(p => p.category !== "Stationery");
    const stationery = products.filter(p => p.category === "Stationery");

    renderProductGrid("featuredBooks", books.slice(0, 8));
    renderProductGrid("featuredStationery", stationery.slice(0, 8));
}

function renderShop() {
    const category = $("categoryFilter").value;
    const author = $("authorFilter").value;
    const maxPrice = Number($("priceFilter").value);
    const minRating = Number($("ratingFilter").value);
    const language = $("languageFilter").value;
    const sort = $("sortFilter").value;

    let filtered = products.filter(product => {
        const matchesCategory =
            category === "All" || product.category === category;

        const matchesAuthor =
            author === "All" || product.author === author;

        const matchesPrice = product.price <= maxPrice;
        const matchesRating = product.rating >= minRating;

        const matchesLanguage =
            language === "All" || product.language === language;

        const term = searchTerm.toLowerCase();

        const matchesSearch =
            !term ||
            product.name.toLowerCase().includes(term) ||
            product.author.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term) ||
            product.subcategory.toLowerCase().includes(term);

        return matchesCategory &&
            matchesAuthor &&
            matchesPrice &&
            matchesRating &&
            matchesLanguage &&
            matchesSearch;
    });

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    $("resultCount").textContent =
        `Showing ${filtered.length} of ${products.length} products`;

    $("emptyMessage").classList.toggle("hidden", filtered.length > 0);

    renderProductGrid("productGrid", filtered);
}

function setupFilters() {
    const authors = [...new Set(products.map(p => p.author))].sort();

    authors.forEach(author => {
        const option = document.createElement("option");
        option.value = author;
        option.textContent = author;
        $("authorFilter").appendChild(option);
    });

    [
        "categoryFilter",
        "authorFilter",
        "priceFilter",
        "ratingFilter",
        "languageFilter",
        "sortFilter"
    ].forEach(id => {
        $(id).addEventListener("change", () => {
            $("priceValue").textContent = $("priceFilter").value;
            renderShop();
        });
    });
}

function resetFilters() {
    $("categoryFilter").value = "All";
    $("authorFilter").value = "All";
    $("priceFilter").value = 2000;
    $("ratingFilter").value = 0;
    $("languageFilter").value = "All";
    $("sortFilter").value = "default";

    $("priceValue").textContent = "2000";

    activeCategory = "All";
    searchTerm = "";

    $("searchInput").value = "";
    $("shopTitle").textContent = "All Products";

    renderShop();
}

function searchProducts() {
    searchTerm = $("searchInput").value.trim();
    activeCategory = "All";

    $("categoryFilter").value = "All";
    $("shopTitle").textContent = searchTerm
        ? `Search results for "${searchTerm}"`
        : "All Products";

    showPage("shop");
}

// PRODUCT DETAILS
function openProduct(id) {
    const product = products.find(p => p.id === id);

    if (!product) return;

    selectedProduct = product;

    $("detailBreadcrumb").textContent = product.name;

    $("productDetail").innerHTML = `
        <div class="detail-image">
            <img src="${product.image}"
                 alt="${escapeHTML(product.name)}"
                 onerror="this.onerror=null;this.src='https://placehold.co/500x600/F7F5ED/2D6A4F?text=BookNook';">
        </div>

        <div class="detail-info">
            <span class="eyebrow">
                ${escapeHTML(product.category)} / ${escapeHTML(product.subcategory)}
            </span>

            <h1>${escapeHTML(product.name)}</h1>

            <p class="detail-author">
                By ${escapeHTML(product.author)}
            </p>

            <div class="product-rating">
                ★ ${product.rating} <span>Customer rating</span>
            </div>

            <div class="detail-price">
                ${money(product.price)}
                ${product.oldPrice ? `
                    <span class="old-price">${money(product.oldPrice)}</span>
                ` : ""}
            </div>

            <p class="detail-description">
                ${escapeHTML(product.description)}
            </p>

            <div class="detail-meta">
                <p><strong>Category:</strong> ${escapeHTML(product.category)}</p>
                <p><strong>Type:</strong> ${escapeHTML(product.subcategory)}</p>
                <p><strong>Author / Brand:</strong> ${escapeHTML(product.author)}</p>
                ${product.publisher ? `
                    <p><strong>Publisher:</strong> ${escapeHTML(product.publisher)}</p>
                ` : ""}
                ${product.isbn ? `
                    <p><strong>ISBN:</strong> ${escapeHTML(product.isbn)}</p>
                ` : ""}
                <p><strong>Language:</strong> ${escapeHTML(product.language)}</p>
            </div>

            <div class="detail-actions">
                <button class="btn-primary"
                        onclick="addToCart(${product.id})">
                    Add to Cart — ${money(product.price)}
                </button>

                <button class="btn-outline"
                        onclick="toggleWishlist(${product.id})">
                    ♡ Wishlist
                </button>
            </div>

            <div class="review-box">
                <h3>BookNook Reviews</h3>
                <p class="small-note">
                    ★ ${product.rating} average demo rating
                </p>

                <form onsubmit="submitReview(event, ${product.id})">
                    <label for="reviewText">Write a review</label>
                    <textarea id="reviewText" required
                              placeholder="Share your thoughts..."></textarea>
                    <button class="btn-outline" type="submit">
                        Submit Review
                    </button>
                </form>

                <div id="reviews-${product.id}"></div>
            </div>
        </div>
    `;

    const related = products
        .filter(p => p.id !== id && p.category === product.category)
        .slice(0, 4);

    renderProductGrid("relatedProducts", related);

    showPage("detail");
}

// CART
function addToCart(id) {
    const product = products.find(p => p.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id, quantity: 1 });
    }

    updateCounts();
    showToast(product.name + " added to cart!");
}

function changeQuantity(id, amount) {
    const item = cart.find(p => p.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    updateCounts();
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(p => p.id !== id);

    updateCounts();
    renderCart();

    showToast("Item removed from cart.");
}

function getCartSubtotal() {
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + product.price * item.quantity;
    }, 0);
}

function renderCart() {
    const container = $("cartContent");

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <span>🛍️</span>
                <h2>Your cart is waiting for something lovely.</h2>
                <p class="small-note">Explore books and stationery to get started.</p>
                <br>
                <button class="btn-primary" onclick="showPage('shop')">
                    Start Shopping
                </button>
            </div>
        `;
        return;
    }

    const subtotal = getCartSubtotal();
    const shipping = subtotal >= 499 ? 0 : 40;

    container.innerHTML = `
        <div class="cart-items">
            <h2>Cart Items (${cart.length})</h2>

            ${cart.map(item => {
                const product = products.find(p => p.id === item.id);

                return `
                    <div class="cart-item">
                        <img src="${product.image}"
                             alt="${escapeHTML(product.name)}">

                        <div>
                            <h3>${escapeHTML(product.name)}</h3>
                            <p>${money(product.price)}</p>

                            <div class="quantity-control">
                                <button onclick="changeQuantity(${item.id}, -1)">−</button>
                                <span>${item.quantity}</span>
                                <button onclick="changeQuantity(${item.id}, 1)">+</button>
                            </div>

                            <button class="remove-button"
                                    onclick="removeFromCart(${item.id})">
                                Remove
                            </button>
                        </div>

                        <div class="cart-total">
                            ${money(product.price * item.quantity)}
                        </div>
                    </div>
                `;
            }).join("")}
        </div>

        <div class="order-summary">
            <h2>Order Summary</h2>

            <div class="summary-row">
                <span>Subtotal</span>
                <span>${money(subtotal)}</span>
            </div>

            <div class="summary-row">
                <span>Shipping</span>
                <span>${shipping === 0 ? "FREE" : money(shipping)}</span>
            </div>

            <label class="gift-option">
                <input type="checkbox" id="giftWrap" onchange="renderCart()"
                       ${window.giftWrap ? "checked" : ""}>
                Add gift wrapping (+₹49)
            </label>

            ${window.giftWrap ? `
                <div class="summary-row">
                    <span>Gift wrapping</span>
                    <span>₹49</span>
                </div>
            ` : ""}

            <div class="summary-row summary-total">
                <span>Total</span>
                <span>${money(subtotal + shipping + (window.giftWrap ? 49 : 0))}</span>
            </div>

            <p class="small-note">Free shipping on orders above ₹499.</p>

            <button class="btn-primary full-width"
                    style="margin-top:20px"
                    onclick="showPage('checkout')">
                Proceed to Checkout →
            </button>

            <button class="btn-outline full-width"
                    style="margin-top:12px"
                    onclick="showPage('shop')">
                Continue Shopping
            </button>
        </div>
    `;

    $("giftWrap").checked = Boolean(window.giftWrap);

    $("giftWrap").addEventListener("change", event => {
        window.giftWrap = event.target.checked;
        renderCart();
    });
}

window.giftWrap = false;

// WISHLIST
function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
        showToast("Removed from wishlist.");
    } else {
        wishlist.push(id);
        showToast("Added to wishlist ♡");
    }

    updateCounts();
    renderHome();
    renderShop();
    renderWishlist();

    if (selectedProduct && selectedProduct.id === id) {
        // Product detail remains open.
    }
}

function renderWishlist() {
    const items = products.filter(p => wishlist.includes(p.id));

    if (items.length === 0) {
        $("wishlistProducts").innerHTML = `
            <div class="cart-empty" style="grid-column:1/-1">
                <span>♡</span>
                <h2>Your wishlist is empty.</h2>
                <p class="small-note">Save products you love for later.</p>
                <br>
                <button class="btn-primary" onclick="showPage('shop')">
                    Explore Products
                </button>
            </div>
        `;
        return;
    }

    renderProductGrid("wishlistProducts", items);
}

// CHECKOUT
function renderCheckout() {
    if (cart.length === 0) {
        $("checkoutSummary").innerHTML = `
            <div class="order-summary">
                <h2>Your cart is empty</h2>
                <button class="btn-primary full-width"
                        onclick="showPage('shop')">
                    Shop Now
                </button>
            </div>
        `;
        return;
    }

    const subtotal = getCartSubtotal();
    const shipping = subtotal >= 499 ? 0 : 40;
    const gift = window.giftWrap ? 49 : 0;

    $("checkoutSummary").innerHTML = `
        <div class="order-summary">
            <h2>Your Order</h2>

            ${cart.map(item => {
                const product = products.find(p => p.id === item.id);

                return `
                    <div class="summary-row">
                        <span>${escapeHTML(product.name)} × ${item.quantity}</span>
                        <span>${money(product.price * item.quantity)}</span>
                    </div>
                `;
            }).join("")}

            <div class="summary-row">
                <span>Subtotal</span>
                <span>${money(subtotal)}</span>
            </div>

            <div class="summary-row">
                <span>Shipping</span>
                <span>${shipping === 0 ? "FREE" : money(shipping)}</span>
            </div>

            ${gift ? `
                <div class="summary-row">
                    <span>Gift wrapping</span>
                    <span>₹49</span>
                </div>
            ` : ""}

            <div class="summary-row summary-total">
                <span>Total</span>
                <span>${money(subtotal + shipping + gift)}</span>
            </div>
        </div>
    `;
}

$("checkoutForm").addEventListener("submit", event => {
    event.preventDefault();

    if (cart.length === 0) {
        showToast("Your cart is empty.");
        return;
    }

    const formData = new FormData(event.target);

    const subtotal = getCartSubtotal();
    const shipping = subtotal >= 499 ? 0 : 40;
    const gift = window.giftWrap ? 49 : 0;

    const order = {
        orderId: "BN" + Date.now().toString().slice(-8),
        date: new Date().toLocaleDateString("en-IN"),
        name: formData.get("name"),
        email: formData.get("email"),
        address: formData.get("address"),
        city: formData.get("city"),
        pincode: formData.get("pincode"),
        payment: formData.get("payment"),
        items: cart.map(item => ({ ...item })),
        total: subtotal + shipping + gift,
        status: "Order Placed"
    };

    orders.unshift(order);

    if (currentUser) {
        currentUser.name = order.name;
        currentUser.email = order.email;
    }

    cart = [];
    window.giftWrap = false;

    updateCounts();

    $("checkoutSummary").innerHTML = `
        <div class="checkout-success">
            <span>✓</span>
            <h2>Order placed successfully!</h2>
            <p>Your demo order number is:</p>
            <strong>${order.orderId}</strong>
            <p class="small-note">
                This is a simulated order. No payment was processed.
            </p>
            <br>
            <button class="btn-primary full-width"
                    onclick="showPage('account')">
                View My Orders
            </button>
        </div>
    `;

    $("checkoutForm").classList.add("hidden");

    showToast("Your demo order has been placed!");
});

// LOGIN / REGISTER
function openLogin() {
    $("loginModal").classList.remove("hidden");
    $("loginEmail").focus();
}

function closeLogin() {
    $("loginModal").classList.add("hidden");
}

function toggleLoginMode() {
    loginMode = loginMode === "login" ? "register" : "login";

    const registering = loginMode === "register";

    $("loginTitle").textContent = registering
        ? "Create your account"
        : "Welcome back!";

    $("loginSubtitle").textContent = registering
        ? "Join the BookNook community."
        : "Sign in to your BookNook account.";

    $("nameField").classList.toggle("hidden", !registering);
    $("loginName").required = registering;

    $("loginSubmit").textContent = registering ? "Register" : "Sign In";

    $("switchText").textContent = registering
        ? "Already have an account?"
        : "Don't have an account?";

    $("switchButton").textContent = registering ? "Sign In" : "Register";
}

$("loginForm").addEventListener("submit", event => {
    event.preventDefault();

    const email = $("loginEmail").value.trim();
    const password = $("loginPassword").value;

    if (loginMode === "register") {
        currentUser = {
            name: $("loginName").value.trim(),
            email
        };

        showToast("Welcome to BookNook, " + currentUser.name + "!");
    } else {
        currentUser = {
            name: email.split("@")[0],
            email
        };

        showToast("Welcome back!");
    }

    closeLogin();
    $("loginForm").reset();

    loginMode = "login";

    $("loginTitle").textContent = "Welcome back!";
    $("loginSubtitle").textContent = "Sign in to your BookNook account.";
    $("nameField").classList.add("hidden");
    $("loginName").required = false;
    $("loginSubmit").textContent = "Sign In";
    $("switchText").textContent = "Don't have an account?";
    $("switchButton").textContent = "Register";

    updateCounts();
});

function renderAccount() {
    if (!currentUser) {
        $("accountContent").innerHTML = `
            <div class="account-card">
                <h2>Welcome to your account</h2>
                <p>Sign in or register to view your profile and demo order history.</p>
                <br>
                <button class="btn-primary" onclick="openLogin()">
                    Sign In / Register
                </button>
            </div>
        `;
        return;
    }

    $("accountContent").innerHTML = `
        <div class="account-card">
            <h2>My Profile</h2>
            <p><strong>Name:</strong> ${escapeHTML(currentUser.name)}</p>
            <p><strong>Email:</strong> ${escapeHTML(currentUser.email)}</p>
            <br>
            <button class="btn-outline" onclick="logout()">
                Sign Out
            </button>
        </div>

        <div class="account-card">
            <h2>My Orders</h2>

            ${orders.length === 0
                ? "<p>No orders yet. Your orders will appear here.</p>"
                : orders.map(order => `
                    <div class="account-order">
                        <p><strong>Order #${order.orderId}</strong></p>
                        <p>Date: ${order.date}</p>
                        <p>Total: ${money(order.total)}</p>
                        <p>Status: ${order.status}</p>
                        <p>Payment: ${escapeHTML(order.payment)}</p>
                    </div>
                `).join("")
            }
        </div>

        <div class="account-card">
            <h2>Saved Addresses</h2>
            <p>Addresses are collected during demo checkout.</p>
            ${orders.length ? `
                <p>${escapeHTML(orders[0].address)}, ${escapeHTML(orders[0].city)}
                - ${escapeHTML(orders[0].pincode)}</p>
            ` : "<p>No saved address yet.</p>"}
        </div>

        <div class="account-card">
            <h2>Wishlist</h2>
            <p>You have ${wishlist.length} saved products.</p>
            <button class="btn-outline" onclick="showPage('wishlist')">
                View Wishlist
            </button>
        </div>
    `;
}

function logout() {
    currentUser = null;
    showToast("You have signed out.");
    renderAccount();
}

// REVIEWS
function submitReview(event, id) {
    event.preventDefault();

    const text = $("reviewText").value.trim();

    if (!text) return;

    const review = document.createElement("p");
    review.className = "small-note";
    review.textContent = "“" + text + "”";

    $("reviews-" + id).appendChild(review);

    $("reviewText").value = "";

    showToast("Thank you for your review!");
}

// CONTACT
$("contactForm").addEventListener("submit", event => {
    event.preventDefault();

    showToast("Thank you! Your demo message has been submitted.");

    event.target.reset();
});

// SEARCH
$("searchForm").addEventListener("submit", event => {
    event.preventDefault();
    searchProducts();
});

// COUNTS
function updateCounts() {
    $("cartCount").textContent =
        cart.reduce((total, item) => total + item.quantity, 0);

    $("wishlistCount").textContent = wishlist.length;
}

// INITIALIZATION
function initializeBookNook() {
    setupFilters();
    renderHome();
    renderShop();
    updateCounts();

    $("checkoutForm").classList.remove("hidden");
}

initializeBookNook();