
# 0)

for i in range(30):
    print(i)

for i in range(5, 10):
    print(i)

n = 5

for i in range(5):
    n = n + i
    print(n)

for i in range(5 + 1):
    print(i)

for i in range(5, 10+1):
    print(i)

n = int(input("Please enter a number: "))
for i in range(3):
    n = n * 1
    print(n)

for i in range(5):
    i = i + 1
    print(i)

for i in range(3, 7):
    i = i / 2
    print(i)

for i in range(-4, 4):
    i = i + 10
    print(i)

n = int(input("Please enter a number: "))
for i in range(5):
    i = i - 1

# 1)

for i in range(20 + 1):
    print(i)


# 2)
    
sum = 0

for i in range(50,100 + 1):
    sum = sum + i
    print(sum)

# 3)
    
for i in range(-10,10 + 1,3):
    print(i)

# 4)

a = int(input("Please enter the first number: "))
b = int(input("Please enter the second number: "))


i = 0

if a > b:
    for i in range(b,a, 2):
        print(i)
elif a < b:
    for i in range(a,b, 2):
        print(i)
else:
    a == b 
    print("Try again")

# 5)

num1= int(input("Enter number: "))
num2 = int(input("Enter number: "))

sum = 0
if num1 > num2:
    for i in range(num2, num1):
        sum += i
    print(sum)
elif num2 > num1:
    for i in range(num1, num2):
        sum += i
    print(sum)
else:
    print("Number1 is equal to number2")