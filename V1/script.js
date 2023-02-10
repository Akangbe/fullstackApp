const CATEGORIES = [
  { name: "technology", color: " " },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
// Selecting DOM element
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".fact-list");
// Create DOM ELEMENT render facts in list
factsList.innerHTML = "";
// LOAD DATA FROM SUPABASE
loadFact();
async function loadFact() {
  const res = await fetch(
    "https://ihvjbvbfhogxihehulnv.supabase.co/rest/v1/today-i-learnt",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlodmpidmJmaG9neGloZWh1bG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1NzIwOTksImV4cCI6MTk5MDE0ODA5OX0.2L3sDmpYA47mZvLNthOGO9hgtwVnMSNEnDX0VN0dju4",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlodmpidmJmaG9neGloZWh1bG52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1NzIwOTksImV4cCI6MTk5MDE0ODA5OX0.2L3sDmpYA47mZvLNthOGO9hgtwVnMSNEnDX0VN0dju4",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
  const filterdata = data.filter((fact) => fact.category === "society");
}
// createFactsList(initialFacts);
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p> ${fact.text}
      <a class="source" href="${fact.source}" target="_blank">(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join(" ");
  factsList.insertAdjacentHTML("afterbegin", html);
  // console.log(htmlArr);
}
// Toggle form visibilityy
btn.addEventListener("click", function () {
  //   console.log("clickeeeee");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    // btn.textContent = "Close";
    btn.innerHTML = "Close";
  } else {
    form.classList.add("hidden");
    // btn.textContent = "Share a fact";
    btn.innerHTML = "Share a fact";
  }
});
