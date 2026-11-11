# for j in range(2,21):
#     if j % 2 == 0:
#         print(j)
n = int(input("Enter number here: "))
for n in range(10):
    if n % 2 ==  0 :
        print("Even number: ", n)
    elif n % 2 != 0:
        print("Odd number: ", n)
    else:
        print("The number isn't even or odd number")
