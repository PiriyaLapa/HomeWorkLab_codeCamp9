/* 1 */
SELECT count(*) FROM Sailors;

/* 2 */
SELECT sum(age) FROM Sailors WHERE rating = 10;

/* 3 */
SELECT avg(age) FROM Sailors WHERE rating = 10;

/* 4 */
SELECT sname FROM Sailors WHERE age = (SELECT max(age) FROM Sailors);

/* 5 */
SELECT sname FROM Sailors WHERE age BETWEEN 25 AND 35;
