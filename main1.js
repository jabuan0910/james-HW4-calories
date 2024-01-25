document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calorieForm');
    const totalCaloriesDiv = document.getElementById('totalCalories');
    const foodArray = []; // Starts as an empty array

    // Constructor for Food
    function Food(name, pCalories) {
        this.name = name;
        this.calories = parseInt(pCalories);
    }

    // Function to update total calories display
    function updateTotalCalories() {
        const totalCalories = foodArray.reduce((acc, food) => acc + food.calories, 0);
        totalCaloriesDiv.textContent = `Total Calories: ${totalCalories}`;
    }

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const foodName = document.getElementById('foodName').value;
        const calories = document.getElementById('calories').value;
        
        const foodItem = new Food(foodName, calories);
        foodArray.push(foodItem);

        console.log(foodArray);
        updateTotalCalories();

        // Reset form
        form.reset();
    });

    // Initial update to total calories display
    updateTotalCalories(); // This will initially set the total to zero
});
