security = 8

for attempt in range(3):
    guess = int(input("Guess the number: "))

    if guess == security:
        print("You win!!")
        break
    else:
        print("Wrong guess!")
else:
    print("Game over!! The number was", security)