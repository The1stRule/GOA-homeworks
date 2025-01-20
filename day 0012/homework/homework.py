
# 1)

num = int(input("Please enter a number: "))

if num > 0:
    print("Your number is positive")
elif num < 0:
    print("Your number is negative")
else:
    print("Your number is zero")

# 2)

mile_or_kilometer = input("Select mile or kilometer: ")
mile = 1.60934
kilometer = 0.621371

if mile_or_kilometer == "mile":
    print("mile--->kilometer")    
    mil = float(input("Please enter how many miles: "))
    print(mil * mile)
elif mile_or_kilometer == "kilometer":
    print("kilometer--->mile")
    km = float(input("Please enter how many kilometers"))
    print(km * kilometer)
else:
    print("Wrong decision")

# 3)

print("Welcome in Facebook registration")

name = input("Please enter your name: ")
surname = input("Please enter your surname: ")
age = int(input("Please enter your age: "))
mail = input("Please enter your mail: ")

print("You are",name,surname,".",age,"years old.Your mail address is -",mail)

# 4)

i = 3

num = int(input("Please enter a number: "))
num2 = int(input("Please enter a number: "))
num3 = int(input("Please enter a number: "))

new_num = num + num2 + num3

print(new_num / i)

# 5)

num = int(input("Please enter a number in range 1-9: "))

for i in range(0, 50, num):
    i = i + num
    print(i)

# 6)

num1 = int(input("Please enter the first number: "))
num2 = int(input("Please enter the second number: "))

if num1 > num2:
    for i in range(num2, num1, 1*1*1):
        print(i)
elif num2 > num1:
    for i in range(num1, num2, 1*1*1):
        print(i)

# 7)

num = int(input("Please enter a number: "))

print(num * 1)
print(num * 2)
print(num * 3)
print(num * 4)
print(num * 5)
print(num * 6)
print(num * 7)
print(num * 8)
print(num * 9)
print(num * 10)

# 8)

print("My calculator")

num1 = int(input("Please enter the first number: "))
num2 = int(input("Please enter the second number: "))
action = input("Please select an action: ")

if action == "+":
    print(num1 + num2)
elif action == "-":
    print(num1 - num2)
elif action == "*":
    print(num1 * num2)
elif action == "/":
    print(num1 / num2)
else:
    print("Wrong decision")

# 9)

string = input("Please enter a word: ")
num = int(input("Please enter how many times to repeat the word: "))

for i in range(num):
    print(string)

# 10)

weight = int(input("Please enter your weight: "))
height = int(input("Please enter your height: "))

new_height = height * height

print("Your BMI is:")
print(weight / new_height)

# 11)

year = int(input("Please enter a year: "))

if year % 4 == 0:
    print("This is leap year")
else:
    print("This isn't leap year")

# 12)

num = int(input("Please enter a number in range 1-5: "))

if num < 1 or num > 5:
    print("Invalid input")
else:
    print("Valid input")