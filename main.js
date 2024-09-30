const incidentDate = "September 28, 2024";

function daysSince(dateStr) {
    const startDate = new Date(dateStr);
    const today = new Date();
    const diffInMilliseconds = today - startDate;
    return Math.ceil(diffInMilliseconds / (1000 * 3600 * 24));
}

function updateMainPage() {
    const daysSinceIncident = daysSince(incidentDate);
    console.log(daysSinceIncident);
    document.getElementById("days").textContent = daysSinceIncident;
    document.getElementById("rawtime").textContent = `Last occurred on ${incidentDate}.`;
}

function getAPIResponse() {
    const daysSinceIncident = daysSince(incidentDate);
    return {
        lastIncident: incidentDate,
        daysSince: daysSinceIncident,
        currentDate: new Date().toISOString().split('T')[0]
    };
}

// Check if we're on the main page or the API page
if (document.getElementById("days")) {
    updateMainPage();
}
