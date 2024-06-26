
# - ქომენტარები

# 1)
def litres(time):
    # შევქმენით ფუნქცია litres, def-ის მეშვეობით და ბრჩხილებში მას გადავეცით მნიშვნელობა time

    return int(time * 0.5)
    # return - ის მეშვეობით დავაბრუნეთ ჩვენი time გამრავლებული 0.5-ზე. ანუ მივიღეთ time-ს ნახევარი და პასუხს შევუცვალეთ ტიპი,
    # რომელიც გახდა int-ინტეჯერი

# 2)

def paperwork(n, m):
    # შევქმენით ფუნქცია paperwork და გადავეცით მას ორი მნიშვნელობა n და m.

    if n < 0 or m < 0:
        return 0
    # გამოვიყენეთ პრიორიტეტებად დაყოფის მეთოდი, if ფუნქცია, რომელსაც გადაეცა შემდეგი პირობა:
    # თუ n მნიშვნელობა ნაკლებია 0-ზე, ან m მნიშვნელობა  ნაკლებია 0-ზე, დააბრუნოს 0

    else:
        return n * m
    # სხვა შემთხვევაში(else), დააბრუნოს n გამრავლებული m მნიშვნელობაზე

# 3)

def grow(numbers_list):
    result = 1
    # შევქმენით ფუნქხია grow, რომელსახ გადაეცა numbers_list მნიშვნელობა,
    # ასევე შევქმენით ცვლადი სახელად result, რომელიც გავუტოლეთ 1-ს
    
    for number in numbers_list:
        result = result * number
    # for ციკლის(for loop) მეშვეობით, რომელსაც მივანიჭეთ მნიშვნელობა number, დავატრიალეთ number_list(რიცხვების სია)
    # ყოველი იტერაციის დროს number = თითოეულ ელემენტს თანმიმდევრობით, რომელიც არის number_list-ში
    # ამ for ციკლში ჩავაშენეთ ოპერაცია, რომელიც ამრავლებს result-ს number-ის მნიშვნელობაზე, რომელიც ყოველი იტერაციის დროს იცვლება
    # ხოლო result ინახავს მიღებულ მნიშვნელობას. საბოლოოდ მივიღებთ numbers_list სიაში არსებული ელემენტების ერთმანეთზე ნამრავლს
    
    return result
    # ვაბრუნებთ result-ის საბოლოო მნიშვნელობას

# 4)

def fake_bin(x):
    result = ""
    # შევქმენით ფუნქცია fake_bin, რომელსაც გადავეცით x მნიშვნელობა, ასევე შევქმენით ცვლადი result, რომელსაც გადავეცით ცარიელი სტრინგი

    for char in x:
        if int(char) < 5:
            result = result + "0"
        else:
            result = result + "1"
    # for ციკლის მეშვეობით, რომელსაც გადავეცით მნიშვნელობა char, დავატრიალეთ x-ფუნქციის მნიშვნელობა

    # for ციკლში ჩავაშენეთ if-else ფუნქცია. if-ს გადავეცით char-for ციკლის მნიშვნელობა, რომელიც ჯერ ინტეჯერად(მთელ რიცხვად) გადავაქციაეთ,
    # ხოლო შემდეგ შევადარეთ 5-ს და თუ char-ის მნიშვნელობა აკმაყოფილებს პირობას if ფუნქცია შეასრულებს მასში ჩაშენებულ მოქმედება,
    # ანუ result ცვლადს გადასცემს სტრინგად 0-ს და ჩვენი ცარიელი სტრინგი result, შეინახავს 0-ს.

    # სხვა შემთხვევაში ანუ თუ str(char) 5 ან 5-ზე მეტია result ცვლადს დაემატება სტინგად 1. ხოლო შემდეგ იტერაციებშიც,
    # რომელიმე პირობის დაკმაყოფილების შემდეგ ჩვენს result სტრინგს დაემატება ახალი ელემენტები და საბოლოოდ მივიღებთ ერთ სტრინგს. 
    
    return result
    # დავაბრუნეთ მიღებული სტრინგი, რომელიც შენახულია result ცვლადში


def count_by(x, n):
    multiples_x = []
    # შევქმენით ფუნქცია count_by, რომელსაც გადეაცა x და n მნიშვნელობები, ასევე შევქმენით multiples_x ცვლადი რომელსაც გადაეცა ცარიელი სია([])
    
    for i in range(x, x * n + 1):
        if i % x == 0:
            multiples_x.append(i)
    # გამოვიყენეთ for ციკლი, რომელსაც გადაეცა მნიშვნელობა i. ჩვენი for ციკლმა მოახდინა იტერაცია range-ში(ქართულად რომ ვთარგმნოთ-დიაპაზონი),
    # მითითებული პარამეტრების მეშვეობით. x-ის მნიშვნელობა არის start(საიდანაც იწყება იტერაცია),
    # მძიმის შემდეგ წერია x გამრავლებული n-ზე და მიღებულ პასუხს დამატებული 1. მივიღეთ end(რითიხ მთავრდება იტერაცია)
    # +1-ის მეშვეობით ჩვენ ვანიშნებთ ჩვენს თავს, რომ გვჭირდება კონკრეტული რიცხვის ჩათვლით იტერაცია

    # for ციკლში ჩავაშენეთ if ფუნქცია, რომელსაც გადავეცით პირობა i % x == 0
    # % - გაყოფის ოპერატორია, რომელიც ითვლის ნაშთს გაყოფისას
    # == შედარების ოპერატორი

    # თუ ჩვენი i მნიშვნელობა, რომელის მნიშვნელობაც ყოველი იტერაციის დროს იცვლება, x-ზე გაყოფისას ნაშთი იქნება 0
    # მოახდენს მასში ჩაშენებულ ოპერაციას, multiples_x.append(i)-ს

    # append ნიშნავს ჩამატებას, რომელსაც ბრჩხილებში ვუთითებთ მხოლოდ ერთ მნიშვნელობას(სხვა შემთხვევაში ამოგვიგდებს ერორს),
    # რომელშიც შეიძლება მოხდეს სხვადასხვა ოპერაცია(გამრავლება(*), გაყოფა(/) და ა.შ. )

    # თუ i მნიშვნელობა აკმაყოფილებს if ფუნქციის პირობას multiples_x ცვლადში ჩაემატება ჩვენი i,
    # ხოლო multiples_x შეინახავს თითოეულ ჩამატებულ ელემენტებს სიის სახით, სადაც თითოეულ ელემენტს ექნება თავისი უნდექსი(რიგითი ნომერი)

    return multiples_x
    # საბოლოოდ დავაბრუნეთ მიღებული სია multiples_x

def count_by(x, n):
    # შევქმენით ფუნქცია count_by, რომელსაც გადაეცა x და n მნიშვნელობები

    return list(range(x, x * n + 1, x))
    # დავაბრუნეთ რიცხვების ჩამონათვალი range-ს მეშვეობით, სადაც x არის start, x * n + 1 არის end და x  არის -
    # step(ნაბიჯი,ნახტომი,რამდენითაც უნდა მოხდეს იტერაცია) და ეს ყველაფერი გადაქცეულო სიად.