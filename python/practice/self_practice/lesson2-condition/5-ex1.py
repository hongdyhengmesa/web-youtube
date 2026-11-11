temperature = int(input("Please enter your temperature today:"))
if temperature >= 40:
    print("Very hot")
elif temperature >= 30:
    print("Hot")
elif temperature >= 20:
    print("Normal")
else:
    print("Cold")