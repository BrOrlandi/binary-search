# Binary Search

Just a small code to help me find how many credits I have available on some apps.
Currently, some finance apps I use don't tell me how many credits I have available before starting to pay taxes. So I often try to find out using a binary search on my mind.
Now with this code, I just type some interval where the number is and it will tell me numbers I can try to find the number with fewer steps using a Binary Search.

Just run the code with `node index.js`.

## Example

Let's suppose you need to find the number 1234 but you only now that is between 1000 and 1500.

So it starts typing like below:
```
This tells you the binary search values between an interval of numbers.
Type the Starting value of the interval:
1000
Type the Ending value of the interval:
1500
The middle is 1250, type '<' or '>' and the amount inserted if different:
<
The middle is 1125, type '<' or '>' and the amount inserted if different:
>
The middle is 1187.5, type '<' or '>' and the amount inserted if different:
>
The middle is 1218.75, type '<' or '>' and the amount inserted if different:
>1218
The middle is 1234, type '<' or '>' and the amount inserted if different:

```