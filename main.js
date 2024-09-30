const days = "September 28, 2024";

function daysSince(dateStr) {
    const startDate = new Date(dateStr);
    const today = new Date();
    const diffInMilliseconds = today - startDate;
    return Math.ceil(diffInMilliseconds / (1000 * 3600 * 24));
}

since = daysSince(days);
console.log(since);
document.getElementById("days").textContent = since;
document.getElementById("rawtime").textContent = `Last occured on ${days}.`;
