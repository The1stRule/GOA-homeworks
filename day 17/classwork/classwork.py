
# 1)

i = 0 
for i in range(1, 10 + 1, 2):
    i = i + 1
    print(i)

# 2)

list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lsit2 = list1[::2]
print(lsit2)

# 3)

even_numbers =[]
odd_numbers = []

for i in range(1, 10 + 1):
    if i % 2 == 0:
        even_numbers.append(i)
    else:
        odd_numbers.append(i)
print(even_numbers)
print(odd_numbers)

# 4)

even_numbers = []
odd_numbers = []

for i in range(5):
    i = int(input("Please enter a number: "))
    if i % 2 == 0:
        even_numbers.append(i)
    else:
        odd_numbers.append(i)
print(even_numbers)
print(odd_numbers)

# 5)

even_numbers =[]
odd_numbers = []

for i in range(10, 20 + 1):
    if i % 2 == 0:
        even_numbers.append(i)
    else:
        odd_numbers.append(i)
print(even_numbers)
print(odd_numbers)

new_even_numbers = sum(even_numbers)
print(new_even_numbers)
new_odd_numbers = sum(odd_numbers)
print(new_odd_numbers)

print(new_even_numbers - new_odd_numbers)