
# 1)

# მოცემული ალგორითმი(ფუნქცია) ითვლის დიდი ასოების რაოდენობას ტექსტში

def find_uppercase(text):
    index = 0
    num = 0
    for i in text:
        if i.isupper():
            num += 1
    index += 0
    return num
# კითხვებზე პასუხები:

# N - ფაილის ალგორითმი აკეთებს იმდენ შედარებას, რამდენი ელემენტი(სიმბოლო) არის ტექსტში
# წამატების ყველაზე მცირე რაოდენობა არის ტექსტში არსებული სიმბოლოების რაოდენობას დამატებული ერთი,
# რადგან შესაძლებელია, რომ N ფაილის ტექსტში იყოს მხოლოდ ერთი დიდი ასო
# N ფაილის ალგორითმში ყველაზე დიდი, შესაძლო რიცხვს(num) მნიშვნელობას მივიღებთ, როდესაც ტექსტში ყველა ასო იქნება დიდი
# გამოდის მხოლოდ მაშინ თუ num = index(ტექსტში სიმბოლოების რაოდენობა)

# 2)

# პირობის მიხედვით არ უნდა გამოვიყენოთ მეთოდი, რომელიც მარტივად გამოიტანს პასუხს(მაგალითად: == ან a==b==c)
# ყველა ცვლადი უნდა შემოწმდეს ერთმანეთთან

def find_average(numbers):
    sum = 0
    index = 0
    for i in numbers:
        sum += i
        index += 1
    result = sum / index
    return result
# კითხვებზე პასუხები:

# ალგორითმი ასრულებს შემდეგ ოპერაციებს: მინიჭება, იტერაცია(გამეორება), მიმატება/გაყოფა და დაბრუნება
# მოცემული ალგორითმი ასრულებს შვიდ ოპერაციას

# 3)

def numbers_comparison(a,b,c):
    if a > b:
        return False
    elif b < c:
        return False
    elif a > c:
        return False
    else:
        return True

# კითხვაზე პასუხი:

# მოცემული ალგორითმი საშუალოდ აკეთებს ორ შედარებას

# 4)

# პირობის მიხედვით ალგორითმის წერისას არ უნდა გამოვიყენოთ დროებითი ცვლადები

def numbers_comparison(a,b,c):
    if a==b==c:
        return False
    if a > b and a > c:
        if b > c:
            return a , a - c
        else:
            return a, a - b
    elif b > a and b > c:
        if a > c:
            return b, b - c
        else:
            return b, b - a 
    elif c > a and c > b:
        if a > b:
            return c, c - b
        else:
            return c, c - a

# კითხვებზე პასუხი:

# ალგორითმში ყველაზე მეტი შედარება(worst case) იქნება იმ შემთხვევაში, თუ a < b < c
# ხოლო ყველაზე ნაკლები შედარება(best case) იქნება იმ შემთხვევაში, თუ a > b > c

# 5)

def find_second_max(numbers):
    first_max = 0
    second_max = 0
    for i in numbers:
        if i > first_max:
            second_max = first_max
            first_max = i
        else:
            if i > second_max:
                second_max = i
    return second_max

# კითხვაზე პასუხი:

# მოცემული ალგორითმი უარეს შემთხვევაში(worst case) გააკეთებს 9 შედარებას
# ეს მოხდება როდესაც მაქსიმალური N რიცხვი იქნება გადაცემული სიის თავში(0 ინდექსი), მაგალითად find_second_max([9,2,8,5,7])