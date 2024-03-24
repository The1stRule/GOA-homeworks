
# 1)

i = 10

while i - 1 >= 0:
    print(i)
    i = i - 1

print("Time is up")

# 2)

num = (int(input("Please enter a number: ")))
sum = 0

while num  != 0:
    sum = sum + num
    print("You lose")
    num = (int(input("Please enter a number: ")))

print("You won")
print(sum)

# 3)
print("Sign in")

password = (int(input("Please enter your password: ")))

while password != 12345678:
    print("Try again")
    password = (int(input("Please enter your password: ")))

print("You autorised")

# 4)

i = 0

while i != 20:
    print(i)
    i = i + 2

# 5)

num = (int(input("Please enter a positive number: ")))
sum = 0

while num > 0:
    sum = sum + num
    print("Again")
    num = (int(input("Please enter a positive number: ")))
    
else:
    print("You lose")
print(sum)

# 6)

num = int(input("Please enter a number: "))

if num % 2 == 0:
    print("Number is even")
else:
    print("Number is odd")

# 7)

temperature = int(input("Write down degrees Celsius: "))

if temperature > 30:
    print("Hot weather")
elif temperature > 20 < 30:
    print("warm weather")
else:
    print("Cold weather")

# 8)

exam_scores = int(input("Please enter your exam scores in range 0-100: "))

if exam_scores >= 90 <= 100:
    print("A")
elif exam_scores >= 80 <= 89:
    print("B")
elif exam_scores >= 70 <= 79:
    print("C")
elif exam_scores >= 60 <= 69:
    print("D")
elif exam_scores < 60 >= 0:
    print("F")

# 9) 

num = int(input("Please enter a number: "))

if num % 2 == 0:
    print("The number is divisible by two")
elif num % 3 == 0:
    print("The number is divisible by three")
elif num % 2 == 0 and num % 3 == 0:
    print("The number is divisible by both numbers")

# 10)
num1 = int(input("Please enter the first number: "))
num2 = int(input("Please enter the second number: "))

if num1 > num2:
    print(num1,">",num2)
elif num1 < num2:
    print(num1,"<",num2)
elif num1 == num2:
    print(num1,"=",num2)

# 11)

num = int(input("Please enter a number in range 1-10: "))

while num != 7:
    print("You lose")
    num = int(input("Try again: "))

print("You won")

# 12)

num = int(input("Please enter a even number: "))

while num % 2 != 0:
    print("Number is odd")
    num = int(input("Try again: "))

print("Number is even")

# 13) 

sum = 0

for i in range(50,100):
    i = i + 1
    if i % 2 == 1:
        print(i)
    if i > 75:
        sum = sum + i

print(sum)

# 14 
num = int(input("Please enter a number: "))

new_num = num + 20

while num < new_num:
    print(num)
    num = num + 1

# 15)

my_name = "Nika"

name = input("Guess my name: ")

while name != my_name:
    print("This is't my name: ")
    name = input("Try again: ")

print("You are right. This is my name")