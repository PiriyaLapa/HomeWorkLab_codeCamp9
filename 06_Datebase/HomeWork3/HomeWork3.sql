/* 1 */
SELECT sname, age FROM Sailors;

/* 2 */
SELECT S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid WHERE R.bid = 103;

/* 3 */
SELECT DISTINCT R.sid FROM Reserves R LEFT JOIN Boats B on R.bid = B.bid WHERE B.color = 'Red';

/* 4 */
SELECT S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE B.color = 'Red';

/* 5 */
SELECT DISTINCT B.color FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid LEFT JOIN Boats B ON R.bid = B.bid WHERE S.sname = 'Lubber';

/* 6 */
SELECT DISTINCT S.sname FROM Sailors S RIGHT JOIN Reserves R ON S.sid = R.sid;

/* 7 */
SELECT DISTINCT S.sname FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid WHERE B.color = 'Red' OR B.color = 'Green'

/* 8 */
SELECT DISTINCT S.sname FROM Sailors S WHERE S.sid IN (SELECT DISTINCT S.sid FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid WHERE B.color = 'Red') AND (SELECT DISTINCT S.sid FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid WHERE B.color = 'Green')

/* 9 */
SELECT DISTINCT S.sid FROM Sailors S WHERE S.sid IN (SELECT DISTINCT S.sid FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid WHERE B.color = 'Red') AND S.sid NOT IN (SELECT DISTINCT S.sid FROM Sailors S LEFT JOIN Reserves R ON S.sid = R.sid WHERE B.color = 'Green')
