/* 1 */
SELECT A.account_number FROM Account A LEFT JOIN Branch B ON A.branch_name = B.branch_name WHERE B.branch_city = "Riverside";

/* 2 */
SELECT account_number FROM Account WHERE branch_name = "A" OR branch_name = "B";

/* 3 */
SELECT customer_name, sum(balance) FROM Depositor D LEFT JOIN Account A ON D.account_number = A.account_number GROUP BY D.customer_name

/* 4 */
SELECT customer_name, sum(balance) FROM Depositor D LEFT JOIN Account A ON D.account_number = A.account_number GROUP BY D.customer_name HAVING count(*) > 1;

/* 5 */
SELECT customer_name, sum(balance) FROM Depositor D LEFT JOIN Account A ON D.account_number = A.account_number GROUP BY D.customer_name HAVING count(*) > 1 ORDER BY sum(balance) DESC;
