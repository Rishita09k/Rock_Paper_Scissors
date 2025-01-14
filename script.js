function playGame(userChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * 3); // Randomly choose 0, 1, or 2

    
    document.getElementById('user-choice').textContent = "Your choice: " + choices[userChoice];
    document.getElementById('computer-choice').textContent = "Computer's choice: " + choices[computerChoice];


    if (userChoice === computerChoice) {
        document.getElementById('game-result').textContent = "Result: It's a tie!";} 
    
        else if (userChoice === 0 && computerChoice === 2) {
        document.getElementById('game-result').textContent = "Result: You win!";}
        
        else if (userChoice === 1 && computerChoice === 0) {
        document.getElementById('game-result').textContent = "Result: You win!";}
        
        else if (userChoice === 2 && computerChoice === 1) {
        document.getElementById('game-result').textContent = "Result: You win!";}
        
        else {
        document.getElementById('game-result').textContent = "Result: Computer wins!";}
}
