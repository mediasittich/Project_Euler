# If we list all the natural numbers below 10 that are multiples of 3 or 5,
# we get 3, 5, 6 and 9. The sum of these multiples is 23.

# create empty list:
list = []
# for a number n between 1 and 9 (given condition: n < 10):
for n in range(1,10,1):
	# check if n is divided by 3 without remainder:
    if n%3==0:
    	# if this applies to n, add n to list:
        list.append(n)
    # check if n is divided by 5 without remainder:
    elif n%5==0:
    	# if this applies to n, add n to list:
        list.append(n)
# print list that contains all numbers to which the conditions apply:
print list
# print sum of all number in list
print sum(list)

# ===================
# Solution Problem 1:
# ===================
# Find the sum of all the multiples of 3 or 5 below 1000.
list2 = []
for n in range(1,1000,1):
    if n%3==0:
        list2.append(n)
    elif n%5==0:
        list2.append(n)
print sum(list2)
