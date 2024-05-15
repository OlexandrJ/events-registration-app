const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к MongoDB (замените <username>, <password> и <dbname> на ваши данные)
mongoose.connect("mongodb://<username>:<password>@localhost:27017/<dbname>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Определение схемы и модели для участников мероприятия
const ParticipantSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  birthDate: Date,
  source: String,
});
const Participant = mongoose.model("Participant", ParticipantSchema);

// Массив для хранения событий (здесь можно использовать базу данных)
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

app.use(bodyParser.json());

// Роут для получения списка событий
app.get("/events", (req, res) => {
  res.json(events);
});

// Роут для регистрации мероприятия
app.post("/register", async (req, res) => {
  const { fullName, email, birthDate, source } = req.body;

  // Создание нового участника
  const newParticipant = new Participant({
    fullName,
    email,
    birthDate,
    source,
  });

  try {
    // Сохранение участника в базе данных
    await newParticipant.save();
    console.log("Новый участник сохранен в базе данных:", newParticipant);
    res.status(201).send("Данные успешно сохранены!");
  } catch (error) {
    console.error("Ошибка сохранения участника:", error);
    res.status(500).send("Произошла ошибка. Попробуйте еще раз позже.");
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
