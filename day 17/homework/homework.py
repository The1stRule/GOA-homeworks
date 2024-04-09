


# 1)

numbers = []
result = 0
for i in range(5):
    i = int(input("Please enter a number: "))
    result = result + i
numbers.append(result)
print(numbers)

# 2)

numbers = [5,2,3,4,1,6,9,10,8,7]
max_num = numbers[0]

for i in numbers:
    if i > max_num:
        max_num = i

print(max_num)

# 3)

numbers = []
odd_numbers = []

for i in range(30,50+1,1):
    numbers.append(i)
    if i % 2 != 0:
        odd_numbers.append(i)

print(numbers)
print(odd_numbers)
print(len(odd_numbers))

# 4)

numbers = []
for i in range(10,50 + 1,1):
    if i % 4 == 0:
        numbers.append(i)

new_numbers = [numbers[len(numbers) - i]
            for i in range(1, len(numbers)+1)]
print(new_numbers)

# 5)

numbers = []

for i in range(50,100):
    numbers.append(i)

even_numbers = []

for index in range(0, len(numbers)):
    if numbers[index] % 2 == 0:
        even_numbers.append(str(numbers[index]) + "-" + str(index))

print(numbers)
print(even_numbers)
    




