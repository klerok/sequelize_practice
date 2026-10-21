const sequelize = require("./database");
const User = require("./models/User");

async function init() {
  try {
    await sequelize.sync({ force: true });
    console.log("Таблицы синхронизированы");

    const user1 = await User.create({
      firstName: "Петр",
      lastName: "Петров",
      email: "petrov@example.com",
      age: 20,
    });
    console.log("Пользователь создан:", user1.toJSON());

    const user2 = await User.create({
      firstName: "Иван",
      lastName: "Иванов",
      email: "ivanov@example.com",
      age: 30,
    });
    console.log("Пользователь создан:", user2.toJSON());

    const user3 = await User.create({
      firstName: "Сергей",
      lastName: "Сергеев",
      email: "sergeev@example.com",
      age: 25,
    });
    console.log("Пользователь создан:", user3.toJSON());

    const users = await User.findAll();
    console.log(
      "Все пользователи:",
      users.map((user) => user.toJSON())
    );
  } catch (error) {
    console.error("Ошибка:", error);
  } finally {
    await sequelize.close();
  }
}

init();
