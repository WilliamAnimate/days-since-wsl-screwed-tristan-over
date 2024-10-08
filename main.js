function daysSince(dateStr) {
    const startDate = new Date(dateStr);
    const today = new Date();
    const diffInMilliseconds = today - startDate;
    return Math.ceil(diffInMilliseconds / (1000 * 3600 * 24));
}

function updateMainPage(data) {
    const daysElement = document.getElementById("days");
    const rawtimeElement = document.getElementById("rawtime");
    const daysSinceIncident = daysSince(data.lastIncident);
    days.textContent = daysSinceIncident;
    rawtimeElement.textContent = `Last occurred on ${data.lastIncident}.`;
    days.classList.add("fade-in");
    rawtimeElement.classList.add("fade-in");
}

function updateJSONData(data) {
    const daysSinceIncident = daysSince(data.lastIncident);
    const currentDate = new Date().toISOString().split('T')[0];

    const jsonData = {
        lastIncident: data.lastIncident,
        daysSince: daysSinceIncident,
        currentDate: currentDate
    };

    // For demonstration purposes, we'll update the page content
    document.getElementById('api-response').textContent = JSON.stringify(jsonData, null, 2);
}

function fetchDataAndUpdate() {
    fetch('incident-data.json')
        .then(response => response.json())
        .then(data => {
            if (document.getElementById("days")) {
                updateMainPage(data);
            } else if (document.getElementById("api-response")) {
                updateJSONData(data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('error-message').textContent = 'Error loading data';
        });
}

// make <body> visible
document.body.classList.add("fade-in");
// Call the function to fetch data and update the page
fetchDataAndUpdate();
