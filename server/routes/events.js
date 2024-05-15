const express = require("express");
const router = express.Router();

// Вам нужно будет заменить этот массив на реальную базу данных или модуль для работы с ней
let events = [
  {
    id: 1,
    title: "Конференция",
    description: "Описание конференции",
    date: "2024-06-01",
    organizer: "Организатор конференции",
  },
  {
    id: 2,
    title: "Семинар",
    description: "Описание семинара",
    date: "2024-07-15",
    organizer: "Организатор семинара",
  },
];

// Роут для получения списка событий
router.get("/events", (req, res) => {
  res.json(events);
});

module.exports = router;
