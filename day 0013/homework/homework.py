
# 1)

age = int(input("Please enter your age: "))

if age <= 18 and age > 0:
    print("You are a minor.")
elif age > 18 and age <= 65:
    print("You are an adult.")
elif age > 65:
    print("You are a senior citizen.")
else:
    print("Wrong decision")

# 2)

for i in range(5):
    num = int(input("Please enter a number: "))
    if num % 2 == 0:
        print("Number is even")
    else:
        print("Number is odd")

# 3)

exam_scores = (input("Please enter your exam score: "))

if exam_scores == "A":
    print("Excellent!")
elif exam_scores == "B":
    print("Good job!")
elif exam_scores == "C":
    print("You passed.")
elif exam_scores == "D":
    print("You can do better.")
elif exam_scores == "F":
    print("You failed.")
else:
    print("Wrong decision")

# 4)

i = 0

while i + 1 <= 10 - 1:
    i = i + 1
    print(i)

# 5)

num = int(input("Please enter a number in range 1-10: "))

while num != 7:
    print("You lose")
    num = int(input("Try again: "))

print("You won")

# 6)

num = 5

for i in range(5,55,num):
    print(i)

# 7)

num = 10

for i in range(num):
    print(num)
    num = num - 1