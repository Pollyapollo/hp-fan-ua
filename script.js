function sortHouse() {
    const houses = ["Грифіндор", "Гафелпаф", "Рейвенкло", "Слизерин"];
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    document.getElementById("result").innerText = `Вітаємо! Ви потрапили до гуртожитку ${randomHouse}!`;
}
