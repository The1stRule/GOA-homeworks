
# 1)

films = ["The Dark Knight",
        "Inglourious Basterds",
        "Alien isolation",
        "Harry potter",
        "Transformers",
        "Who Am I",
        "Avengers",
        "The Godfather",
        "Fight Club"]

print(films)
print(films[0])

# 2)

continents = ["Asia",
            "Africa",
            "North America",
            "South America",
            "Antarctica",
            "Europe",
            "Australia"]

oceans = ["Atlantic",
        "Pacific",
        "Indian",
        "Arctic"]

print(continents + oceans)

# 3)

name = "Nika"
print(name[0] + name[len(name) - 1][-1])

# 4)

oceans = ["Atlantic",
        "Pacific",
        "Indian",
        "Arctic"]

print(len(oceans))

# 5)

cars = ["Mersedes",
     "BMW",
     "Honda",
     "Lamborgini",
     "Nisan"]
print(cars)

cars[2] = "Bugatti"
print(cars[2])
print(cars)

# 6)

nums = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80, 90, 100]

sum = (nums[0] + nums[-1])
print(sum)