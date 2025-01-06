
const apiBaseUrl = "http://localhost:3000";
const standingsEndpoint = "/proxy";



async function fetchStandings() {
  try {
    console.log("Fetching standings...");

    const response = await fetch(`${apiBaseUrl}${standingsEndpoint}`);
    console.log("Response received:", response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data fetched:", data);

    // Adjust this mapping based on the actual structure of your API's response
    const standingsHtml = data
      .map(
        (team, index) =>
          `<li>${index + 1}. ${team.team} - Wins: ${team.wins}, Losses: ${team.losses}</li>`
      )
      .join("");

    console.log("Standings HTML:", standingsHtml);

    document.getElementById("rankings").innerHTML = `<ul>${standingsHtml}</ul>`;
  } catch (error) {
    console.error("Error fetching standings:", error);
    document.getElementById("rankings").innerHTML = "<p>Error fetching standings. Please try again later.</p>";
  }
}

// Fetch standings on page load
fetchStandings();
