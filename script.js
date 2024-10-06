// Store the original content divs for restoring later
const originalDivs = document.getElementById('content').innerHTML;

// Search button event listener
document.getElementById('search-btn').addEventListener('click', function() {
    // Get the search input value
    let keyword = document.getElementById('search-input').value.toLowerCase();
    
    // Get all content divs
    let contentDivs = document.querySelectorAll('.content-div');
    
    // Array to store matching results
    let results = [];

    // Loop through each div and check for the keyword
    contentDivs.forEach(div => {
        let keywords = div.getAttribute('data-keywords');
        if (keywords.toLowerCase().includes(keyword)) {
            results.push(div.innerHTML);
        }
    });

    // Clear the content div
    let content = document.getElementById('content');
    content.innerHTML = '';

    // If results are found, display them; otherwise show "No results"
    if (results.length > 0) {
        results.forEach(result => {
            let newDiv = document.createElement('div');
            newDiv.classList.add('content-div');
            newDiv.innerHTML = result;
            content.appendChild(newDiv);
        });
    } else {
        // If no results found, show a "no results" message
        let noResultsDiv = document.createElement('div');
        noResultsDiv.classList.add('content-div');
        noResultsDiv.innerHTML = '<p>No results found.</p>';
        content.appendChild(noResultsDiv);
    }

    // Show the "Show All Results" button after searching
    document.getElementById('show-all-container').style.display = 'block';
});

// "Show All Results" button event listener
document.getElementById('show-all-btn').addEventListener('click', function() {
    // Restore original divs to the content container
    document.getElementById('content').innerHTML = originalDivs;

    // Hide the "Show All Results" button again
    document.getElementById('show-all-container').style.display = 'none';
});
