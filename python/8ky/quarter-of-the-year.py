'''
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
'''

def quarter_of(month):
    # your code here
    if month > 0 and month <4:
        return 1
    elif month < 7:
        return 2
    elif month < 10:
        return 3
    else:
        return 4