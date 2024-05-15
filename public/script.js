document.addEventListener("DOMContentLoaded", function () {
  fetchEvents();
});

function fetchEvents() {
  fetch("/events")
    .then((response) => response.json())
    .then((events) => {
      const eventsList = document.getElementById("events-list");
      events.forEach((event) => {
        const eventElement = document.createElement("div");
        eventElement.innerHTML = `
                    <h3>${event.title}</h3>
                    <p><strong>Описание:</strong> ${event.description}</p>
                    <p><strong>Дата:</strong> ${event.date}</p>
                    <p><strong>Организатор:</strong> ${event.organizer}</p>
                `;
        eventsList.appendChild(eventElement);
      });
    })
    .catch((error) => console.error("Ошибка загрузки событий:", error));
}
