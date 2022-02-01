RevTech_Feb22_Coding_Challenge

/**********************************************
*   Problem
**********************************************/
To try and encourage more sales of the 5 different products they sell, RevLocal has decided to offer discounts of multiple-product purchases.

One quantity of any of the five products A,B,C,D,E costs $299.

If, however, you buy two different products, you get a 5%
discount on those two products.

If you buy 3 different products, you get a 10% discount.

If you buy 4 different products, you get a 20% discount.

If you go the whole hog, and buy all 5, you get a huge 25%
discount.

Note that if you buy, say, four products, of which 3 are
different, you get a 10% discount on the 3 that
form part of a set, but the fourth product still costs $299.

Your mission is to write a piece of code to calculate the
price of any conceivable shopping cart (containing only
products), giving as big a discount as possible.

/**********************************************
*   Notes
**********************************************/
It needs to be written using JavaScript

Your code should accept an array as input, and should return a number, as follow:

function computeTotalPrice(productsArray) {
  // code to be executed
}

For example, given the following array input for parameter products:
['A','A','B','B','C','C','D','E']

This would represent a shopping cart containing:
2 quantity of product A
2 quantity of product B
2 quantity of product C
1 quantity of product D
1 quantity of product E

Answer: $1,928.55