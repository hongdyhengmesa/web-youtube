secret_number = 7

guess = int(input("Guess the number (1-10): "))

while guess != secret_number:
    if guess < secret_number:
        print("Too low!")
    elif guess > secret_number:
        print("Too hight!")
    guess = int(input("Guess again: "))

print("Correct!, You win!")