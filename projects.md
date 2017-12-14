---
layout: index
title: "Projects"
permalink: /projects/
description: "You can find more of my projects on GitHub at <a href='http://github.com/Altece'>github.com/Altece</a>."
---

Here is a collection of personal projects of mine. Many of these
can be found on my [GitHub Page](http://github.com/Altece). Other
coding samples of mine can be found on [GitHub Gist](http://gist.github.com/altece),
where I post code isn't necessarily a full-fledged project.

## Graphing

<figure>
<img src='/images/projects/Graphing/GraphingIco.png' class='medium' />
<figcaption>
<a href="http://itunes.apple.com/app/graphing/id481789533?mt=8">Free on the App Store</a>
</figcaption>
</figure>

Graphing is an iOS app, written in Objective-C with CocoaTouch,
for both the iPhone and iPod Touch that allows the user to
manipulate simple graphs to find isomorphic graphs.

The user uses an adjacency matrix to input adjacencies between
six vertices, and then can see the resulting graph with the
vertices in a C6 position. Then, the user can move around the
vertices to find any isomorphic graph they desire.

A cool use of the program is to move the vertices around to try
to find a planar isomorphic graph, or to find a K5 or K(3,3) graph
to prove that it is non-planar.


## Reggie the Regex Parser

[Official Project Page][reggie]

Reggie the Regex Parser (RRP) is a regualr expression parser that 
will have the ability to identify strings that match the regular 
expression.


## Cobbler

[Official Project Page][cobbler]

Cobbler is an attempt to add objects to the C language in order to 
better understand the implementations of different kinds of object 
systems. It is a primitive static object system developed using just 
C Macros and functions. Eventuallu, it will support a dynamic object 
system library created using the primative object system.


## Gravity.app

<figure>
<img src="/images/projects/Gravity/GravityIco.png" class="medium" />
<figcaption>
<a href="https://docs.google.com/leaf?id=0B_GG5K1tAsKLNzE4ZDBlODAtZTY4ZS00YWI0LWEyZjItN2IxZjRmOTg3Mjg3&hl=en_US">Download Gravity.app</a>
</figcaption>
</figure>

Gravity.app is a program, written in Objective-C for the Mac, 
that simulates Newtonian Gravity between any number of circles 
on a 2D plane.

The Gravitational Constant has been changed from 6.11x10^-11 
to 6.11x10^-1 to allow for the effects of gravity to show 
more drastically to the user (otherwise, almost nothing seems 
to happen).

A cool way to use the program is to create two objects, one
with a mass of 1000, a position of (0, 0), and a velocity of
(0, 0), and another with a mass of 0, a position of (100, 0),
and a velocity of (0, 2.5). This results in a near-circular
orbit.


## Chunktional

[Official Project Page][chunktional]

This is a collection of C Macros to put together abstract data types 
and pattern matching similar to that found in functional programming 
languages like Haskell and SML.


## BetterBuses

[Official Project Page][betterbusses]

Bus schedules can be hard and convluted to read. When you want to get 
from pont A to point B, you are required to inherently know which bus 
route that applies to, and you're supposed to inherently know what all 
the little symols mean, and if you don't understand, you need to hunt 
down the key and are forced to figure it out.

Computers today can do all the hard work for you, leaving you with the 
right information needed to get from pont A to point B at any time you wish.

Better Busses is aimed to convert RIT's bus schedules first into a 
computer-friendly format, so that they may present the information to 
humans in a friendly maner.


[reggie]: http://brun.ws/Reggie-the-Regex-Parser/
[cobbler]: http://brun.ws/Cobbler/
[chunktional]: http://brun.ws/Chunktional
[betterbusses]: http://brun.ws/BetterBuses/
