
# 1)

def my_range(Calculator):
    print("Multiplying Whole List")
    
    # first part

    numbers = []

    num = 1
    
    start = int(input("Please enter what number does the count start from: "))
    end = int(input("Please enter what number does the report end on: "))

    # second part

    for number in range(start,end + 1):
        numbers.append(number)
        num *= number

    print(numbers)
    print(num)

print(my_range("Calculator"))

# 2)

def my_range(start, end):
    all_numbers= []
    negative_numbers = []

    for number in range(start, end + 1):
        all_numbers.append(number)
        if number >= 0:
            negative_numbers.append(number)

    print(all_numbers)
    print(negative_numbers)    

print(my_range(start = -10, end = 10))

# 3)

def my_range(start, end):

    # first part

    numbers = []
    
    for number in range(start, end + 1):
        numbers.append(number)

    # second part

    new_numbers = sum(numbers)
    new_numbers = new_numbers  / len(numbers)
    print(new_numbers)

print(my_range(start = 1, end = 100))

# 4)

def list(num_lists):

    # first part

    even_numbers = []
    odd_numbers = []

    for number in range(1, 30 + 1):
        if number % 2 == 0:
            even_numbers.append(number)
        else:
            odd_numbers.append(number)

    # second part

    all_numbers = even_numbers + odd_numbers
    print(all_numbers)

print(list("Numbers lists"))

# 5)

def lists_duplicate(numbers):
    
    # first part

    numbers = []

    for number in range(30, 50 + 1):
        numbers.append(number)

    # second part

    numbers_new_list = numbers
    print(numbers_new_list)    

print(lists_duplicate("Numbers duplicate"))