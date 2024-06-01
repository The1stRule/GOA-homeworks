from turtle import*



#we want to paint a house

#step 1: draw a square
speed(10)
width(7)
color("green")

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#end 0f square

#drawing a door


forward(80)
left(90)
color("brown")
begin_fill()
forward(120)            #height of the dor
right(90)
forward(40)
right(90)
forward(120)
right(90)
forward(40)
left(90)
end_fill()

penup()
goto(110, 70)
pendown()

color("black")
forward(10)


penup()
goto(0, 200)
pendown()

color("red")
begin_fill()
left(130)
forward(130)
right(80)
forward(130)
right(140)
forward(200)
end_fill()

penup()
goto(30, 180)
pendown()


color("yellow")
begin_fill()
left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)
end_fill()

color("black")
left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

penup()
goto(70, 160)
pendown()

forward(40)

penup()
goto(50, 180)
pendown()

left(90)
forward(40)
right(90)

penup()
goto(140, 180)
pendown()

color("yellow")
begin_fill()
left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)
end_fill()

color("black")
left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

penup()
goto(180, 160)
pendown()

forward(40)

penup()
goto(160, 180)
pendown()

left(90)
forward(40)

exitonclick()