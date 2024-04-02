
# 1)

before = ["CS:GO",
         "Call of Duty",
         "Battlefild(3;4;1)",
         "Need for Speed",
         "Assasin's cread",
         "Far Cry(3;4;5;6)"]

print(before)

before[0] = "GOA"
before[1] = "Sololearn"
before[2] = "w3"
before[3] = "Codewars"
before[4] = "Gym"
before[5] = "Successful future"

after = before
print(after)

# 2)

even_numbers = []

for i in range(5):
    i = int(input("Please enter a numbera: "))
    if i % 2 == 0:
        even_numbers.append(i)

print(even_numbers)








