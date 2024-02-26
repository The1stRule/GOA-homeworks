from turtle import *


speed(30)
width(7)

penup()
goto(300, -200)
pendown()


# firs house
# we need a square

begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()

# we need a door

penup()
goto(380, -200)
pendown()

begin_fill()
color("brown")
forward(40)
left(90)
forward(120)
left(90)
forward(40)
left(90)
forward(120)
end_fill()

# door knob

color("black")
penup()
goto(410, -125)
pendown()
forward(10)

# we need a roof

penup()
goto(300, 0)
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

# we need the window

penup()
goto(330, -20)
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

color("brown")
left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

penup()
goto(350, -20)
pendown()
left(90)
forward(40)

penup()
goto(370, -40)
pendown()
right(90)
forward(40)

penup()
goto(430, -20)
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

color("brown")
left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

penup()
goto(450, -20)
pendown()
left(90)
forward(40)

penup()
goto(470, -40)
pendown()
right(90)
forward(40)

# second house

penup()
goto(-100, -200)
pendown()

# square

color("black")
begin_fill()
left(180)
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()

# door

penup()
goto(-20, -200)
pendown()

begin_fill()
color("brown")
forward(40)
left(90)
forward(120)
left(90)
forward(40)
left(90)
forward(120)
end_fill()

# door knob

penup()
goto(15, -125)
pendown()
color("black")
forward(10)

# roof

penup()
goto(-100, 0)
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

# window

penup()
goto(-70, -20)
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

color("brown")
left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

penup()
goto(-50, -20)
pendown()
left(90)
forward(40)

penup()
goto(-30, -40)
pendown()
right(90)
forward(40)

penup()
goto(30, -20)
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

color("brown")
left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

penup()
goto(50, -20)
pendown()
left(90)
forward(40)

penup()
goto(70, -40)
pendown()
right(90)
forward(40)

# third house
# square

penup()
goto(-400, -200)
pendown()

color("black")
begin_fill()
left(180)
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()

# door

penup()
goto(-320, -200)
pendown()

begin_fill()
color("brown")
forward(40)
left(90)
forward(120)
left(90)
forward(40)
left(90)
forward(120)
end_fill()

# door knob

penup()
goto(-285, -125)
pendown()
color("black")
forward(10)

# roof

penup()
goto(-400, 0)
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

# window

penup()
goto(-370, -20)
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

color("brown")
left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

penup()
goto(-350, -20)
pendown()
left(90)
forward(40)

penup()
goto(-330, -40)
pendown()
right(90)
forward(40)

penup()
goto(-270, -20)
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

color("brown")
left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

left(90)
forward(40)

penup()
goto(-250, -20)
pendown()
left(90)
forward(40)

penup()
goto(-230, -40)
pendown()
right(90)
forward(40)

# tree

penup()
goto(-580, 120)
pendown()

color("green")
begin_fill()
circle(80)
end_fill()


penup()
goto(-530, 80)
pendown()
begin_fill()
circle(60)
end_fill()

penup()
goto(-630, 80)
pendown()
begin_fill()
circle(60)
end_fill()

penup()
goto(-600, -40)
pendown()
color("brown")
begin_fill()
right(180)
forward(40)
right(90)
forward(140)
left(30)
forward(20)
right(120)

forward(60)
right(120)
forward(20)
left(30)
forward(140)
end_fill()

# graas

penup()
goto(-760, -200)
pendown()

color("green")
begin_fill()
right(90)
forward(1520)

right(90)
forward(200)

right(90)
forward(1520)

right(90)
forward(200)

end_fill()

# we need a sun

penup()
goto(-600, 390)
pendown()

color("yellow")
begin_fill()
circle(150)
end_fill()

exitonclick()