// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = ['imagenes/14138F41-1C70-4FD8-932F-3475A1722FA6.webp', 'imagenes/26823914-F301-4C46-B38A-34064648D637.webp', 'imagenes/309CBC6C-D3D8-4220-A172-3A7EFCA45C02.webp', 'imagenes/3E260D41-190F-4B23-9BBB-57712C60EBF9.webp', 'imagenes/4B31950E-B0C6-4419-8B90-899189BDC572.webp', 'imagenes/642B2884-4F25-4EC6-BA81-13A889904A6A.webp', 'imagenes/865E0F71-9D4C-423D-87E2-6D943E630300.webp', 'imagenes/DJI_20260530_132450_243.webp', 'imagenes/DJI_20260530_132452_725.webp', 'imagenes/DJI_20260530_132501_352.webp', 'imagenes/DJI_20260530_132505_387.webp', 'imagenes/DJI_20260530_132512_858.webp', 'imagenes/DJI_20260530_132514_134.webp', 'imagenes/DJI_20260530_132515_678.webp', 'imagenes/DJI_20260530_132528_743.webp', 'imagenes/DJI_20260530_132530_106.webp', 'imagenes/DJI_20260530_132537_007.webp', 'imagenes/DJI_20260530_132549_454.webp', 'imagenes/DJI_20260530_132620_131.webp', 'imagenes/DJI_20260530_132623_191.webp', 'imagenes/DJI_20260530_132624_628.webp', 'imagenes/DJI_20260530_132642_317.webp', 'imagenes/DJI_20260530_132724_464.webp', 'imagenes/DJI_20260530_132726_040.webp', 'imagenes/DJI_20260530_132732_024.webp', 'imagenes/DJI_20260530_132733_135.webp', 'imagenes/DJI_20260530_132747_158.webp', 'imagenes/DJI_20260530_132916_379.webp', 'imagenes/DJI_20260530_132918_207.webp', 'imagenes/DJI_20260530_132926_386.webp', 'imagenes/DJI_20260530_132932_055.webp', 'imagenes/DJI_20260530_132936_222.webp', 'imagenes/DJI_20260530_132953_920.webp', 'imagenes/DJI_20260530_133731_010.webp', 'imagenes/DJI_20260530_133732_324.webp', 'imagenes/DJI_20260530_133734_156.webp', 'imagenes/DJI_20260530_133736_479.webp', 'imagenes/DJI_20260530_133739_720.webp', 'imagenes/DJI_20260530_133741_969.webp', 'imagenes/DJI_20260530_133743_949.webp', 'imagenes/DJI_20260530_133745_569.webp', 'imagenes/DJI_20260530_133747_444.webp', 'imagenes/DJI_20260530_133749_049.webp', 'imagenes/DJI_20260530_133750_522.webp', 'imagenes/DJI_20260530_133752_316.webp', 'imagenes/DJI_20260530_133800_240.webp', 'imagenes/DJI_20260530_133802_114.webp', 'imagenes/DJI_20260530_133804_618.webp', 'imagenes/DJI_20260530_140328_931.webp', 'imagenes/DJI_20260530_140356_734.webp', 'imagenes/DJI_20260530_140359_449.webp', 'imagenes/DJI_20260530_142429_144.webp', 'imagenes/DJI_20260530_142434_844.webp', 'imagenes/DJI_20260530_142436_981.webp', 'imagenes/DJI_20260530_142437_973.webp', 'imagenes/DJI_20260530_142439_654.webp', 'imagenes/DJI_20260530_142441_153.webp', 'imagenes/DJI_20260530_142447_498.webp', 'imagenes/DJI_20260530_142500_640.webp', 'imagenes/DJI_20260530_142501_777.webp', 'imagenes/DJI_20260530_142504_211.webp', 'imagenes/DJI_20260530_142508_472.webp', 'imagenes/DJI_20260530_142509_458.webp', 'imagenes/DJI_20260530_142515_880.webp', 'imagenes/DJI_20260530_142518_311.webp', 'imagenes/DJI_20260530_142519_852.webp', 'imagenes/DJI_20260530_142526_723.webp', 'imagenes/DJI_20260530_142528_405.webp', 'imagenes/DJI_20260530_142529_242.webp', 'imagenes/DJI_20260530_142533_325.webp', 'imagenes/DJI_20260530_142535_482.webp', 'imagenes/DJI_20260530_142541_603.webp', 'imagenes/DJI_20260530_142542_742.webp', 'imagenes/DJI_20260530_142543_733.webp', 'imagenes/DJI_20260530_142546_222.webp', 'imagenes/DJI_20260530_142551_984.webp', 'imagenes/DJI_20260530_142553_738.webp', 'imagenes/DJI_20260530_142558_750.webp', 'imagenes/DJI_20260530_142614_449.webp', 'imagenes/DJI_20260530_142616_990.webp', 'imagenes/DJI_20260530_142618_608.webp', 'imagenes/DJI_20260530_142620_555.webp', 'imagenes/DJI_20260530_142621_730.webp', 'imagenes/DJI_20260530_142622_987.webp', 'imagenes/DJI_20260530_142628_040.webp', 'imagenes/DJI_20260530_142629_453.webp', 'imagenes/DJI_20260530_142726_211.webp', 'imagenes/DJI_20260530_142728_157.webp', 'imagenes/DJI_20260530_142729_633.webp', 'imagenes/DJI_20260530_142750_419.webp', 'imagenes/DJI_20260530_142756_013.webp', 'imagenes/DJI_20260530_142757_320.webp', 'imagenes/DJI_20260530_142812_410.webp', 'imagenes/DJI_20260530_142813_249.webp', 'imagenes/DJI_20260530_142814_121.webp', 'imagenes/DJI_20260530_142815_112.webp', 'imagenes/DJI_20260530_142816_265.webp', 'imagenes/DJI_20260530_142822_565.webp', 'imagenes/DJI_20260530_142824_648.webp', 'imagenes/DJI_20260530_142825_871.webp', 'imagenes/DJI_20260530_142827_289.webp', 'imagenes/DJI_20260530_142829_321.webp', 'imagenes/DJI_20260530_142850_254.webp', 'imagenes/DJI_20260530_142904_654.webp', 'imagenes/DJI_20260530_142906_410.webp', 'imagenes/DJI_20260530_142909_365.webp', 'imagenes/DJI_20260530_142940_251.webp', 'imagenes/DJI_20260530_142945_320.webp', 'imagenes/DJI_20260530_142953_732.webp', 'imagenes/DJI_20260530_143002_163.webp', 'imagenes/DJI_20260530_143003_722.webp', 'imagenes/DJI_20260530_143009_921.webp', 'imagenes/DJI_20260530_143011_299.webp', 'imagenes/DJI_20260530_143022_552.webp', 'imagenes/DJI_20260530_143023_880.webp', 'imagenes/DJI_20260530_143125_443.webp', 'imagenes/DJI_20260530_143128_168.webp', 'imagenes/DJI_20260530_143129_401.webp', 'imagenes/DJI_20260530_143131_706.webp', 'imagenes/DJI_20260530_143135_490.webp', 'imagenes/DJI_20260530_143144_770.webp', 'imagenes/DJI_20260530_143147_880.webp', 'imagenes/DJI_20260530_143148_991.webp', 'imagenes/DJI_20260530_143150_599.webp', 'imagenes/DJI_20260530_143153_838.webp', 'imagenes/DJI_20260530_143206_945.webp', 'imagenes/DJI_20260530_143208_087.webp', 'imagenes/DJI_20260530_143320_672.webp', 'imagenes/DJI_20260530_143321_797.webp', 'imagenes/DSC_1250.webp', 'imagenes/DSC_1251.webp', 'imagenes/DSC_1252.webp', 'imagenes/DSC_1253.webp', 'imagenes/DSC_1254.webp', 'imagenes/DSC_1255.webp', 'imagenes/DSC_1256.webp', 'imagenes/DSC_1257.webp', 'imagenes/DSC_1258.webp', 'imagenes/DSC_1259.webp', 'imagenes/DSC_1260.webp', 'imagenes/DSC_1261.webp', 'imagenes/DSC_1262.webp', 'imagenes/DSC_1263.webp', 'imagenes/DSC_1264.webp', 'imagenes/DSC_1265.webp', 'imagenes/DSC_1266.webp', 'imagenes/DSC_1267.webp', 'imagenes/DSC_1268.webp', 'imagenes/DSC_1269.webp', 'imagenes/DSC_1270.webp', 'imagenes/DSC_1271.webp', 'imagenes/DSC_1272.webp', 'imagenes/DSC_1273.webp', 'imagenes/DSC_1274.webp', 'imagenes/DSC_1275.webp', 'imagenes/DSC_1276.webp', 'imagenes/DSC_1277.webp', 'imagenes/DSC_1278.webp', 'imagenes/DSC_1279.webp', 'imagenes/DSC_1280.webp', 'imagenes/DSC_1281.webp', 'imagenes/DSC_1282.webp', 'imagenes/DSC_1283.webp', 'imagenes/DSC_1284.webp', 'imagenes/DSC_1285.webp', 'imagenes/DSC_1286.webp', 'imagenes/DSC_1287.webp', 'imagenes/DSC_1288.webp', 'imagenes/DSC_1289.webp', 'imagenes/DSC_1290.webp', 'imagenes/DSC_1291.webp', 'imagenes/DSC_1292.webp', 'imagenes/DSC_1293.webp', 'imagenes/DSC_1294.webp', 'imagenes/DSC_1295.webp', 'imagenes/DSC_1296.webp', 'imagenes/DSC_1297.webp', 'imagenes/DSC_1298.webp', 'imagenes/DSC_1299.webp', 'imagenes/DSC_1300.webp', 'imagenes/DSC_1301.webp', 'imagenes/DSC_1302.webp', 'imagenes/DSC_1303.webp', 'imagenes/DSC_1304.webp', 'imagenes/DSC_1305.webp', 'imagenes/DSC_1306.webp', 'imagenes/DSC_1307.webp', 'imagenes/DSC_1308.webp', 'imagenes/DSC_1309.webp', 'imagenes/DSC_1310.webp', 'imagenes/DSC_1311.webp', 'imagenes/DSC_1312.webp', 'imagenes/DSC_1313.webp', 'imagenes/DSC_1314.webp', 'imagenes/DSC_1315.webp', 'imagenes/DSC_1316.webp', 'imagenes/DSC_1317.webp', 'imagenes/DSC_1318.webp', 'imagenes/DSC_1319.webp', 'imagenes/DSC_1320.webp', 'imagenes/DSC_1321.webp', 'imagenes/DSC_1322.webp', 'imagenes/DSC_1323.webp', 'imagenes/DSC_1324.webp', 'imagenes/DSC_1325.webp', 'imagenes/DSC_1326.webp', 'imagenes/DSC_1327.webp', 'imagenes/DSC_1328.webp', 'imagenes/DSC_1329.webp', 'imagenes/DSC_1330.webp', 'imagenes/DSC_1331.webp', 'imagenes/DSC_1332.webp', 'imagenes/DSC_1333.webp', 'imagenes/DSC_1334.webp', 'imagenes/DSC_1335.webp', 'imagenes/DSC_1336.webp', 'imagenes/DSC_1337.webp', 'imagenes/DSC_1338.webp', 'imagenes/DSC_1339.webp', 'imagenes/DSC_1340.webp', 'imagenes/DSC_1341.webp', 'imagenes/DSC_1342.webp', 'imagenes/DSC_1343.webp', 'imagenes/DSC_1344.webp', 'imagenes/DSC_1345.webp', 'imagenes/DSC_1346.webp', 'imagenes/DSC_1347.webp', 'imagenes/DSC_1348.webp', 'imagenes/DSC_1349.webp', 'imagenes/DSC_1350.webp', 'imagenes/DSC_1351.webp', 'imagenes/DSC_1352.webp', 'imagenes/DSC_1353.webp', 'imagenes/DSC_1354.webp', 'imagenes/DSC_1355.webp', 'imagenes/DSC_1356.webp', 'imagenes/DSC_1357.webp', 'imagenes/DSC_1358.webp', 'imagenes/DSC_1359.webp', 'imagenes/DSC_1360.webp', 'imagenes/DSC_1361.webp', 'imagenes/DSC_1362.webp', 'imagenes/DSC_1363.webp', 'imagenes/DSC_1364.webp', 'imagenes/DSC_1365.webp', 'imagenes/DSC_1366.webp', 'imagenes/DSC_1367.webp', 'imagenes/DSC_1368.webp', 'imagenes/DSC_1369.webp', 'imagenes/DSC_1370.webp', 'imagenes/DSC_1371.webp', 'imagenes/DSC_1372.webp', 'imagenes/DSC_1373.webp', 'imagenes/DSC_1374.webp', 'imagenes/DSC_1375.webp', 'imagenes/DSC_1376.webp', 'imagenes/DSC_1377.webp', 'imagenes/DSC_1378.webp', 'imagenes/DSC_1379.webp', 'imagenes/DSC_1380.webp', 'imagenes/DSC_1381.webp', 'imagenes/DSC_1382.webp', 'imagenes/DSC_1383.webp', 'imagenes/DSC_1384.webp', 'imagenes/DSC_1385.webp', 'imagenes/DSC_1386.webp', 'imagenes/DSC_1387.webp', 'imagenes/DSC_1388.webp', 'imagenes/DSC_1389.webp', 'imagenes/DSC_1390.webp', 'imagenes/DSC_1391.webp', 'imagenes/DSC_1392.webp', 'imagenes/DSC_1393.webp', 'imagenes/DSC_1394.webp', 'imagenes/DSC_1395.webp', 'imagenes/DSC_1396.webp', 'imagenes/DSC_1397.webp', 'imagenes/DSC_1398.webp', 'imagenes/DSC_1399.webp', 'imagenes/DSC_1400.webp', 'imagenes/DSC_1401.webp', 'imagenes/DSC_1402.webp', 'imagenes/DSC_1403.webp', 'imagenes/DSC_1404.webp', 'imagenes/DSC_1405.webp', 'imagenes/DSC_1406.webp', 'imagenes/DSC_1407.webp', 'imagenes/DSC_1408.webp', 'imagenes/DSC_1409.webp', 'imagenes/DSC_1410.webp', 'imagenes/DSC_1411.webp', 'imagenes/DSC_1412.webp', 'imagenes/DSC_1413.webp', 'imagenes/DSC_1414.webp', 'imagenes/DSC_1415.webp', 'imagenes/DSC_1416.webp', 'imagenes/DSC_1417.webp', 'imagenes/DSC_1418.webp', 'imagenes/DSC_1419.webp', 'imagenes/DSC_1420.webp', 'imagenes/DSC_1421.webp', 'imagenes/DSC_1422.webp', 'imagenes/DSC_1423.webp', 'imagenes/DSC_1424.webp', 'imagenes/DSC_1425.webp', 'imagenes/DSC_1426.webp', 'imagenes/DSC_1427.webp', 'imagenes/DSC_1428.webp', 'imagenes/DSC_1429.webp', 'imagenes/DSC_1430.webp', 'imagenes/DSC_1431.webp', 'imagenes/DSC_1432.webp', 'imagenes/DSC_1433.webp', 'imagenes/DSC_1434.webp', 'imagenes/DSC_1435.webp', 'imagenes/DSC_1436.webp', 'imagenes/DSC_1437.webp', 'imagenes/DSC_1438.webp', 'imagenes/DSC_1439.webp', 'imagenes/DSC_1440.webp', 'imagenes/DSC_1441.webp', 'imagenes/DSC_1442.webp', 'imagenes/DSC_1443.webp', 'imagenes/DSC_1444.webp', 'imagenes/DSC_1445.webp', 'imagenes/DSC_1446.webp', 'imagenes/DSC_1447.webp', 'imagenes/DSC_1448.webp', 'imagenes/DSC_1449.webp', 'imagenes/DSC_1450.webp', 'imagenes/DSC_1451.webp', 'imagenes/DSC_1452.webp', 'imagenes/DSC_1453.webp', 'imagenes/DSC_1454.webp', 'imagenes/DSC_1455.webp', 'imagenes/DSC_1456.webp', 'imagenes/DSC_1457.webp', 'imagenes/DSC_1458.webp', 'imagenes/DSC_1459.webp', 'imagenes/DSC_1460.webp', 'imagenes/DSC_1461.webp', 'imagenes/DSC_1462.webp', 'imagenes/DSC_1463.webp', 'imagenes/DSC_1464.webp', 'imagenes/DSC_1465.webp', 'imagenes/DSC_1466.webp', 'imagenes/DSC_1467.webp', 'imagenes/DSC_1468.webp', 'imagenes/DSC_1469.webp', 'imagenes/DSC_1470.webp', 'imagenes/DSC_1471.webp', 'imagenes/DSC_1472.webp', 'imagenes/DSC_1473.webp', 'imagenes/DSC_1474.webp', 'imagenes/DSC_1475.webp', 'imagenes/DSC_1476.webp', 'imagenes/DSC_1477.webp', 'imagenes/DSC_1478.webp', 'imagenes/DSC_1479.webp', 'imagenes/DSC_1480.webp', 'imagenes/DSC_1481.webp', 'imagenes/DSC_1482.webp', 'imagenes/DSC_1483.webp', 'imagenes/DSC_1484.webp', 'imagenes/DSC_1485.webp', 'imagenes/DSC_1486.webp', 'imagenes/DSC_1487.webp', 'imagenes/DSC_1488.webp', 'imagenes/DSC_1489.webp', 'imagenes/DSC_1490.webp', 'imagenes/DSC_1491.webp', 'imagenes/DSC_1492.webp', 'imagenes/DSC_1493.webp', 'imagenes/DSC_1494.webp', 'imagenes/DSC_1495.webp', 'imagenes/DSC_1496.webp', 'imagenes/DSC_1497.webp', 'imagenes/DSC_1498.webp', 'imagenes/DSC_1499.webp', 'imagenes/DSC_1500.webp', 'imagenes/DSC_1501.webp', 'imagenes/DSC_1502.webp', 'imagenes/DSC_1503.webp', 'imagenes/DSC_1504.webp', 'imagenes/DSC_1505.webp', 'imagenes/DSC_1506.webp', 'imagenes/DSC_1507.webp', 'imagenes/DSC_1508.webp', 'imagenes/DSC_1509.webp', 'imagenes/DSC_1510.webp', 'imagenes/DSC_1511.webp', 'imagenes/DSC_1512.webp', 'imagenes/DSC_1513.webp', 'imagenes/DSC_1514.webp', 'imagenes/DSC_1515.webp', 'imagenes/DSC_1516.webp', 'imagenes/DSC_1517.webp', 'imagenes/DSC_1518.webp', 'imagenes/DSC_1519.webp', 'imagenes/DSC_1520.webp', 'imagenes/DSC_1521.webp', 'imagenes/DSC_1522.webp', 'imagenes/DSC_1523.webp', 'imagenes/DSC_1524.webp', 'imagenes/DSC_1525.webp', 'imagenes/DSC_1526.webp', 'imagenes/DSC_1527.webp', 'imagenes/DSC_1528.webp', 'imagenes/DSC_1529.webp', 'imagenes/DSC_1530.webp', 'imagenes/DSC_1531.webp', 'imagenes/DSC_1532.webp', 'imagenes/DSC_1533.webp', 'imagenes/DSC_1534.webp', 'imagenes/DSC_1535.webp', 'imagenes/DSC_1536.webp', 'imagenes/DSC_1537.webp', 'imagenes/DSC_1538.webp', 'imagenes/DSC_1539.webp', 'imagenes/DSC_1540.webp', 'imagenes/DSC_1541.webp', 'imagenes/DSC_1542.webp', 'imagenes/DSC_1543.webp', 'imagenes/DSC_1544.webp', 'imagenes/DSC_1545.webp', 'imagenes/DSC_1546.webp', 'imagenes/DSC_1547.webp', 'imagenes/DSC_1548.webp', 'imagenes/DSC_1549.webp', 'imagenes/DSC_1550.webp', 'imagenes/DSC_1551.webp', 'imagenes/DSC_1552.webp', 'imagenes/DSC_1553.webp', 'imagenes/DSC_1554.webp', 'imagenes/DSC_1555.webp', 'imagenes/DSC_1556.webp', 'imagenes/DSC_1557.webp', 'imagenes/DSC_1558.webp', 'imagenes/DSC_1559.webp', 'imagenes/DSC_1560.webp', 'imagenes/DSC_1561.webp', 'imagenes/DSC_1562.webp', 'imagenes/DSC_1563.webp', 'imagenes/DSC_1564.webp', 'imagenes/DSC_1565.webp', 'imagenes/DSC_1566.webp', 'imagenes/DSC_1567.webp', 'imagenes/DSC_1568.webp', 'imagenes/DSC_1569.webp', 'imagenes/DSC_1570.webp', 'imagenes/DSC_1571.webp', 'imagenes/DSC_1572.webp', 'imagenes/DSC_1573.webp', 'imagenes/DSC_1574.webp', 'imagenes/DSC_1575.webp', 'imagenes/DSC_1576.webp', 'imagenes/DSC_1577.webp', 'imagenes/DSC_1578.webp', 'imagenes/DSC_1579.webp', 'imagenes/DSC_1580.webp', 'imagenes/DSC_1581.webp', 'imagenes/DSC_1582.webp', 'imagenes/DSC_1583.webp', 'imagenes/DSC_1584.webp', 'imagenes/DSC_1585.webp', 'imagenes/DSC_1586.webp', 'imagenes/DSC_1587.webp', 'imagenes/DSC_1588.webp', 'imagenes/DSC_1589.webp', 'imagenes/DSC_1590.webp', 'imagenes/DSC_1591.webp', 'imagenes/DSC_1592.webp', 'imagenes/DSC_1593.webp', 'imagenes/DSC_1594.webp', 'imagenes/DSC_1595.webp', 'imagenes/DSC_1596.webp', 'imagenes/DSC_1597.webp', 'imagenes/DSC_1598.webp', 'imagenes/DSC_1599.webp', 'imagenes/DSC_1600.webp', 'imagenes/DSC_1601.webp', 'imagenes/DSC_1602.webp', 'imagenes/DSC_1603.webp', 'imagenes/DSC_1604.webp', 'imagenes/DSC_1605.webp', 'imagenes/DSC_1606.webp', 'imagenes/DSC_1607.webp', 'imagenes/DSC_1608.webp', 'imagenes/DSC_1609.webp', 'imagenes/DSC_1610.webp', 'imagenes/DSC_1611.webp', 'imagenes/DSC_1612.webp', 'imagenes/DSC_1613.webp', 'imagenes/DSC_1614.webp', 'imagenes/DSC_1615.webp', 'imagenes/DSC_1616.webp', 'imagenes/DSC_1617.webp', 'imagenes/DSC_1618.webp', 'imagenes/DSC_1619.webp', 'imagenes/DSC_1620.webp', 'imagenes/DSC_1621.webp', 'imagenes/DSC_1622.webp', 'imagenes/DSC_1623.webp', 'imagenes/DSC_1624.webp', 'imagenes/DSC_1625.webp', 'imagenes/DSC_1626.webp', 'imagenes/DSC_1627.webp', 'imagenes/DSC_1628.webp', 'imagenes/DSC_1629.webp', 'imagenes/DSC_1630.webp', 'imagenes/DSC_1631.webp', 'imagenes/DSC_1632.webp', 'imagenes/DSC_1633.webp', 'imagenes/DSC_1634.webp', 'imagenes/DSC_1635.webp', 'imagenes/DSC_1636.webp', 'imagenes/DSC_1637.webp', 'imagenes/DSC_1638.webp', 'imagenes/DSC_1639.webp', 'imagenes/DSC_1640.webp', 'imagenes/DSC_1641.webp', 'imagenes/DSC_1642.webp', 'imagenes/DSC_1643.webp', 'imagenes/DSC_1644.webp', 'imagenes/DSC_1645.webp', 'imagenes/DSC_1646.webp', 'imagenes/DSC_1647.webp', 'imagenes/DSC_1648.webp', 'imagenes/DSC_1650.webp', 'imagenes/DSC_1651.webp', 'imagenes/DSC_1652.webp', 'imagenes/DSC_1653.webp', 'imagenes/DSC_1654.webp', 'imagenes/DSC_1655.webp', 'imagenes/DSC_1656.webp', 'imagenes/DSC_1657.webp', 'imagenes/DSC_1658.webp', 'imagenes/DSC_1659.webp', 'imagenes/DSC_1660.webp', 'imagenes/DSC_1661.webp', 'imagenes/DSC_1662.webp', 'imagenes/DSC_1665.webp', 'imagenes/DSC_1666.webp', 'imagenes/DSC_1667.webp', 'imagenes/DSC_1668.webp', 'imagenes/DSC_1669.webp', 'imagenes/DSC_1670.webp', 'imagenes/DSC_1671.webp', 'imagenes/DSC_1672.webp', 'imagenes/DSC_1673.webp', 'imagenes/DSC_1674.webp', 'imagenes/DSC_1675.webp', 'imagenes/DSC_1676.webp', 'imagenes/DSC_1677.webp', 'imagenes/DSC_1678.webp', 'imagenes/DSC_1679.webp', 'imagenes/DSC_1680.webp', 'imagenes/DSC_1681.webp', 'imagenes/DSC_1682.webp', 'imagenes/DSC_1683.webp', 'imagenes/DSC_1684.webp', 'imagenes/DSC_1685.webp', 'imagenes/DSC_1686.webp', 'imagenes/DSC_1687.webp', 'imagenes/DSC_1688.webp', 'imagenes/DSC_1689.webp', 'imagenes/DSC_1690.webp', 'imagenes/DSC_1691.webp', 'imagenes/DSC_1692.webp', 'imagenes/DSC_1693.webp', 'imagenes/DSC_1694.webp', 'imagenes/DSC_1695.webp', 'imagenes/DSC_1696.webp', 'imagenes/DSC_1697.webp', 'imagenes/DSC_1698.webp', 'imagenes/DSC_1699.webp', 'imagenes/DSC_1700.webp', 'imagenes/DSC_1701.webp', 'imagenes/DSC_1702.webp', 'imagenes/DSC_1703.webp', 'imagenes/DSC_1704.webp', 'imagenes/DSC_1705.webp', 'imagenes/DSC_1706.webp', 'imagenes/DSC_1707.webp', 'imagenes/DSC_1708.webp', 'imagenes/DSC_1709.webp', 'imagenes/DSC_1710.webp', 'imagenes/DSC_1711.webp', 'imagenes/DSC_1712.webp', 'imagenes/DSC_1713.webp', 'imagenes/DSC_1714.webp', 'imagenes/DSC_1715.webp', 'imagenes/DSC_1716.webp', 'imagenes/DSC_1717.webp', 'imagenes/DSC_1718.webp', 'imagenes/DSC_1719.webp', 'imagenes/DSC_1720.webp', 'imagenes/DSC_1721.webp', 'imagenes/DSC_1722.webp', 'imagenes/DSC_1723.webp', 'imagenes/DSC_1724.webp', 'imagenes/DSC_1725.webp', 'imagenes/DSC_1726.webp', 'imagenes/DSC_1727.webp', 'imagenes/DSC_1728.webp', 'imagenes/DSC_1729.webp', 'imagenes/DSC_1730.webp', 'imagenes/DSC_1731.webp', 'imagenes/DSC_1732.webp', 'imagenes/DSC_1733.webp', 'imagenes/DSC_1734.webp', 'imagenes/DSC_1735.webp', 'imagenes/DSC_1736.webp', 'imagenes/DSC_1737.webp', 'imagenes/DSC_1738.webp', 'imagenes/DSC_1739.webp', 'imagenes/DSC_1740.webp', 'imagenes/DSC_1741.webp', 'imagenes/DSC_1742.webp', 'imagenes/DSC_1743.webp', 'imagenes/DSC_1744.webp', 'imagenes/DSC_1745.webp', 'imagenes/DSC_1746.webp', 'imagenes/DSC_1747.webp', 'imagenes/DSC_1748.webp', 'imagenes/DSC_1749.webp', 'imagenes/DSC_1750.webp', 'imagenes/DSC_1751.webp', 'imagenes/DSC_1752.webp', 'imagenes/DSC_1753.webp', 'imagenes/DSC_1754.webp', 'imagenes/DSC_1755.webp', 'imagenes/DSC_1756.webp', 'imagenes/DSC_1757.webp', 'imagenes/DSC_1758.webp', 'imagenes/DSC_1759.webp', 'imagenes/DSC_1760.webp', 'imagenes/DSC_1761.webp', 'imagenes/DSC_1762.webp', 'imagenes/DSC_1763.webp', 'imagenes/DSC_1764.webp', 'imagenes/DSC_1765.webp', 'imagenes/DSC_1766.webp', 'imagenes/DSC_1767.webp', 'imagenes/DSC_1768.webp', 'imagenes/DSC_1769.webp', 'imagenes/DSC_1770.webp', 'imagenes/DSC_1771.webp', 'imagenes/DSC_1772.webp', 'imagenes/DSC_1773.webp', 'imagenes/DSC_1774.webp', 'imagenes/DSC_1775.webp', 'imagenes/DSC_1776.webp', 'imagenes/DSC_1777.webp', 'imagenes/DSC_1778.webp', 'imagenes/DSC_1779.webp', 'imagenes/DSC_1780.webp', 'imagenes/DSC_1781.webp', 'imagenes/DSC_1782.webp', 'imagenes/DSC_1783.webp', 'imagenes/DSC_1784.webp', 'imagenes/DSC_1785.webp', 'imagenes/DSC_1786.webp', 'imagenes/DSC_1787.webp', 'imagenes/DSC_1788.webp', 'imagenes/DSC_1789.webp', 'imagenes/DSC_1790.webp', 'imagenes/DSC_1791.webp', 'imagenes/DSC_1792.webp', 'imagenes/DSC_1793.webp', 'imagenes/DSC_1794.webp', 'imagenes/DSC_1795.webp', 'imagenes/DSC_1796.webp', 'imagenes/DSC_1797.webp', 'imagenes/DSC_1798.webp', 'imagenes/DSC_1799.webp', 'imagenes/DSC_1800.webp', 'imagenes/DSC_1801.webp', 'imagenes/DSC_1802.webp', 'imagenes/DSC_1803.webp', 'imagenes/DSC_1804.webp', 'imagenes/DSC_1805.webp', 'imagenes/DSC_1806.webp', 'imagenes/DSC_1807.webp', 'imagenes/DSC_1808.webp', 'imagenes/DSC_1809.webp', 'imagenes/DSC_1810.webp', 'imagenes/DSC_1811.webp', 'imagenes/DSC_1812.webp', 'imagenes/DSC_1813.webp', 'imagenes/DSC_1814.webp', 'imagenes/DSC_1815.webp', 'imagenes/DSC_1816.webp', 'imagenes/DSC_1817.webp', 'imagenes/DSC_1818.webp', 'imagenes/DSC_1819.webp', 'imagenes/DSC_1820.webp', 'imagenes/DSC_1821.webp', 'imagenes/DSC_1822.webp', 'imagenes/DSC_1823.webp', 'imagenes/DSC_1824.webp', 'imagenes/DSC_1825.webp', 'imagenes/DSC_1826.webp', 'imagenes/DSC_1827.webp', 'imagenes/DSC_1828.webp', 'imagenes/DSC_1829.webp', 'imagenes/DSC_1830.webp', 'imagenes/DSC_1831.webp', 'imagenes/DSC_1834.webp', 'imagenes/DSC_1835.webp', 'imagenes/DSC_1836.webp', 'imagenes/DSC_1837.webp', 'imagenes/DSC_1838.webp', 'imagenes/DSC_1839.webp', 'imagenes/DSC_1840.webp', 'imagenes/DSC_1841.webp', 'imagenes/DSC_1842.webp', 'imagenes/DSC_1843.webp', 'imagenes/DSC_1844.webp', 'imagenes/DSC_1845.webp', 'imagenes/DSC_1846.webp', 'imagenes/DSC_1847.webp', 'imagenes/DSC_1848.webp', 'imagenes/DSC_1849.webp', 'imagenes/DSC_1850.webp', 'imagenes/DSC_1851.webp', 'imagenes/DSC_1852.webp', 'imagenes/DSC_1853.webp', 'imagenes/DSC_1854.webp', 'imagenes/DSC_1855.webp', 'imagenes/DSC_1856.webp', 'imagenes/DSC_1857.webp', 'imagenes/DSC_1858.webp', 'imagenes/DSC_1859.webp', 'imagenes/DSC_1860.webp', 'imagenes/DSC_1861.webp', 'imagenes/DSC_1862.webp', 'imagenes/DSC_1863.webp', 'imagenes/DSC_1864.webp', 'imagenes/DSC_1865.webp', 'imagenes/DSC_1866.webp', 'imagenes/DSC_1867.webp', 'imagenes/DSC_1868.webp', 'imagenes/DSC_1869.webp', 'imagenes/DSC_1870.webp', 'imagenes/DSC_1871.webp', 'imagenes/DSC_1872.webp', 'imagenes/DSC_1873.webp', 'imagenes/DSC_1874.webp', 'imagenes/DSC_1875.webp', 'imagenes/DSC_1876.webp', 'imagenes/DSC_1877.webp', 'imagenes/DSC_1878.webp', 'imagenes/DSC_1879.webp', 'imagenes/DSC_1880.webp', 'imagenes/DSC_1881.webp', 'imagenes/DSC_1882.webp', 'imagenes/DSC_1883.webp', 'imagenes/DSC_1884.webp', 'imagenes/DSC_1885.webp', 'imagenes/DSC_1886.webp', 'imagenes/DSC_1887.webp', 'imagenes/DSC_1888.webp', 'imagenes/DSC_1889.webp', 'imagenes/DSC_1890.webp', 'imagenes/DSC_1891.webp', 'imagenes/DSC_1892.webp', 'imagenes/DSC_1893.webp', 'imagenes/DSC_1894.webp', 'imagenes/DSC_1895.webp', 'imagenes/DSC_1896.webp', 'imagenes/DSC_1897.webp', 'imagenes/DSC_1898.webp', 'imagenes/DSC_1899.webp', 'imagenes/DSC_1900.webp', 'imagenes/DSC_1901.webp', 'imagenes/DSC_1902.webp', 'imagenes/DSC_1903.webp', 'imagenes/DSC_1904.webp', 'imagenes/DSC_1905.webp', 'imagenes/DSC_1906.webp', 'imagenes/DSC_1907.webp', 'imagenes/DSC_1908.webp', 'imagenes/DSC_1909.webp', 'imagenes/DSC_1910.webp', 'imagenes/DSC_1911.webp', 'imagenes/DSC_1912.webp', 'imagenes/DSC_1913.webp', 'imagenes/DSC_1914.webp', 'imagenes/DSC_1915.webp', 'imagenes/DSC_1916.webp', 'imagenes/DSC_1917.webp', 'imagenes/DSC_1918.webp', 'imagenes/DSC_1919.webp', 'imagenes/DSC_1920.webp', 'imagenes/DSC_1921.webp', 'imagenes/DSC_1922.webp', 'imagenes/DSC_1923.webp', 'imagenes/DSC_1924.webp', 'imagenes/DSC_1925.webp', 'imagenes/DSC_1926.webp', 'imagenes/DSC_1927.webp', 'imagenes/DSC_1928.webp', 'imagenes/DSC_1929.webp', 'imagenes/DSC_1930.webp', 'imagenes/DSC_1931.webp', 'imagenes/DSC_1932.webp', 'imagenes/DSC_1933.webp', 'imagenes/DSC_1934.webp', 'imagenes/DSC_1935.webp', 'imagenes/DSC_1936.webp', 'imagenes/DSC_1937.webp', 'imagenes/DSC_1938.webp', 'imagenes/DSC_1939.webp', 'imagenes/DSC_1940.webp', 'imagenes/DSC_1941.webp', 'imagenes/DSC_1942.webp', 'imagenes/DSC_1943.webp', 'imagenes/DSC_1944.webp', 'imagenes/DSC_1945.webp', 'imagenes/DSC_1946.webp', 'imagenes/DSC_1947.webp', 'imagenes/DSC_1948.webp', 'imagenes/DSC_1949.webp', 'imagenes/DSC_1950.webp', 'imagenes/DSC_1951.webp', 'imagenes/DSC_1952.webp', 'imagenes/DSC_1953.webp', 'imagenes/DSC_1954.webp', 'imagenes/DSC_1955.webp', 'imagenes/DSC_1956.webp', 'imagenes/DSC_1957.webp', 'imagenes/DSC_1958.webp', 'imagenes/DSC_1959.webp', 'imagenes/DSC_1960.webp', 'imagenes/DSC_1961.webp', 'imagenes/DSC_1962.webp', 'imagenes/DSC_1963.webp', 'imagenes/DSC_1964.webp', 'imagenes/DSC_1965.webp', 'imagenes/DSC_1966.webp', 'imagenes/DSC_1967.webp', 'imagenes/DSC_1968.webp', 'imagenes/DSC_1969.webp', 'imagenes/DSC_1970.webp', 'imagenes/DSC_1971.webp', 'imagenes/DSC_1972.webp', 'imagenes/DSC_1973.webp', 'imagenes/DSC_1974.webp', 'imagenes/DSC_1975.webp', 'imagenes/DSC_1976.webp', 'imagenes/DSC_1977.webp', 'imagenes/DSC_1978.webp', 'imagenes/DSC_1979.webp', 'imagenes/DSC_1980.webp', 'imagenes/DSC_1981.webp', 'imagenes/DSC_1982.webp', 'imagenes/DSC_1983.webp', 'imagenes/DSC_1984.webp', 'imagenes/DSC_1985.webp', 'imagenes/DSC_1986.webp', 'imagenes/DSC_1987.webp', 'imagenes/DSC_1988.webp', 'imagenes/DSC_1989.webp', 'imagenes/DSC_1990.webp', 'imagenes/DSC_1991.webp', 'imagenes/DSC_1992.webp', 'imagenes/DSC_1993.webp', 'imagenes/DSC_1994.webp', 'imagenes/DSC_1995.webp', 'imagenes/DSC_1996.webp', 'imagenes/DSC_1997.webp', 'imagenes/DSC_1998.webp', 'imagenes/DSC_1999.webp', 'imagenes/DSC_2000.webp', 'imagenes/DSC_2001.webp', 'imagenes/DSC_2002.webp', 'imagenes/DSC_2003.webp', 'imagenes/DSC_2004.webp', 'imagenes/DSC_2005.webp', 'imagenes/DSC_2006.webp', 'imagenes/DSC_2007.webp', 'imagenes/DSC_2008.webp', 'imagenes/DSC_2009.webp', 'imagenes/DSC_2010.webp', 'imagenes/DSC_2011.webp', 'imagenes/DSC_2012.webp', 'imagenes/DSC_2013.webp', 'imagenes/DSC_2014.webp', 'imagenes/DSC_2015.webp', 'imagenes/DSC_2016.webp', 'imagenes/DSC_2017.webp', 'imagenes/DSC_2018.webp', 'imagenes/DSC_2019.webp', 'imagenes/DSC_2020.webp', 'imagenes/DSC_2021.webp', 'imagenes/DSC_2022.webp', 'imagenes/DSC_2023.webp', 'imagenes/DSC_2024.webp', 'imagenes/DSC_2025.webp', 'imagenes/DSC_2026.webp', 'imagenes/DSC_2027.webp', 'imagenes/DSC_2028.webp', 'imagenes/DSC_2029.webp', 'imagenes/DSC_2030.webp', 'imagenes/DSC_2031.webp', 'imagenes/DSC_2032.webp', 'imagenes/DSC_2033.webp', 'imagenes/DSC_2034.webp', 'imagenes/DSC_2035.webp', 'imagenes/DSC_2036.webp', 'imagenes/DSC_2037.webp', 'imagenes/DSC_2038.webp', 'imagenes/DSC_2039.webp', 'imagenes/DSC_2040.webp', 'imagenes/DSC_2041.webp', 'imagenes/DSC_2042.webp', 'imagenes/DSC_2043.webp', 'imagenes/DSC_2044.webp', 'imagenes/DSC_2045.webp', 'imagenes/DSC_2046.webp', 'imagenes/DSC_2047.webp', 'imagenes/DSC_2048.webp', 'imagenes/DSC_2049.webp', 'imagenes/DSC_2050.webp', 'imagenes/DSC_2051.webp', 'imagenes/DSC_2052.webp', 'imagenes/DSC_2053.webp', 'imagenes/DSC_2054.webp', 'imagenes/E3C55733-1A53-4CE9-814E-36CEBE40CEDE.webp', 'imagenes/WhatsApp Image 2026-05-30 at 3.19.25 PM (1).webp', 'imagenes/WhatsApp Image 2026-05-30 at 3.19.25 PM (2).webp', 'imagenes/WhatsApp Image 2026-05-30 at 3.19.25 PM (3).webp', 'imagenes/WhatsApp Image 2026-05-30 at 3.19.25 PM (4).webp', 'imagenes/WhatsApp Image 2026-05-30 at 3.19.25 PM (5).webp', 'imagenes/WhatsApp Image 2026-05-30 at 3.19.25 PM.webp', 'imagenes/WhatsApp Image 2026-05-30 at 3.19.48 PM.webp', 'imagenes/WhatsApp Image 2026-06-01 at 6.37.10 PM (1).webp', 'imagenes/WhatsApp Image 2026-06-01 at 6.37.10 PM (2).webp', 'imagenes/WhatsApp Image 2026-06-01 at 6.37.10 PM (3).webp', 'imagenes/WhatsApp Image 2026-06-01 at 6.37.10 PM.webp'];
const STORAGE_KEY = 'invitacion_rigoberto_alondra_photo_selections';
const LIMITES = {
    ampliacion: null,
    impresion: null,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';
const PAGE_SIZE = 60;
let currentPage = 0;

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function normalizeSelection(selection) {
    return {
        ampliacion: !!(selection && selection.ampliacion),
        impresion: !!(selection && selection.impresion),
        invitacion: !!(selection && selection.invitacion),
        descartada: !!(selection && selection.descartada)
    };
}

function hasAnySelection(selection) {
    const normalized = normalizeSelection(selection);
    return normalized.ampliacion || normalized.impresion || normalized.invitacion || normalized.descartada;
}

function selectionsAreEqual(a, b) {
    const left = normalizeSelection(a);
    const right = normalizeSelection(b);
    return left.ampliacion === right.ampliacion
        && left.impresion === right.impresion
        && left.invitacion === right.invitacion
        && left.descartada === right.descartada;
}

function saveSelections(options) {
    const shouldSync = !options || options.sync !== false;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
    if (shouldSync && typeof sbUpsertSelections === 'function') {
        sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        try { localStorage.setItem(STORAGE_KEY, '{}'); } catch(e) {}
        if (typeof sbDeleteAll === 'function') {
            sbDeleteAll().catch(function(e) { console.warn('[Supabase] DeleteAll:', e.message); });
        }
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function getTotalPages() {
    return Math.ceil(photos.length / PAGE_SIZE);
}

function getPagePhotos() {
    const start = currentPage * PAGE_SIZE;
    return { start, end: Math.min(start + PAGE_SIZE, photos.length) };
}

function goToPage(page) {
    const total = getTotalPages();
    if (page < 0) page = 0;
    if (page >= total) page = total - 1;
    currentPage = page;
    renderGallery();
    updateStats();
    updateFilterButtons();
    window.scrollTo({ top: document.querySelector('.gallery-section').offsetTop - 10, behavior: 'smooth' });
}

function renderPagination(container) {
    const totalPages = getTotalPages();
    if (totalPages <= 1) return;

    const { start, end } = getPagePhotos();
    const nav = document.createElement('div');
    nav.className = 'pagination-nav';
    nav.style.cssText = 'grid-column:1/-1;display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;padding:16px 0;';

    const btnStyle = 'border:none;padding:10px 18px;border-radius:25px;font-size:.95rem;font-weight:600;cursor:pointer;font-family:Lato,sans-serif;transition:all .2s;';

    if (currentPage > 0) {
        const prev = document.createElement('button');
        prev.textContent = '← Anterior';
        prev.style.cssText = btnStyle + 'background:#8b6f47;color:#fff;';
        prev.addEventListener('click', () => goToPage(currentPage - 1));
        nav.appendChild(prev);
    }

    const maxBtns = 7;
    let pageStart = Math.max(0, currentPage - 3);
    let pageEnd = Math.min(totalPages, pageStart + maxBtns);
    if (pageEnd - pageStart < maxBtns) pageStart = Math.max(0, pageEnd - maxBtns);

    for (let i = pageStart; i < pageEnd; i++) {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        const isActive = i === currentPage;
        btn.style.cssText = btnStyle + (isActive
            ? 'background:#d4a373;color:#fff;transform:scale(1.1);'
            : 'background:#eee;color:#333;');
        if (!isActive) btn.addEventListener('click', () => goToPage(i));
        nav.appendChild(btn);
    }

    if (currentPage < totalPages - 1) {
        const next = document.createElement('button');
        next.textContent = 'Siguiente →';
        next.style.cssText = btnStyle + 'background:#8b6f47;color:#fff;';
        next.addEventListener('click', () => goToPage(currentPage + 1));
        nav.appendChild(next);
    }

    const info = document.createElement('div');
    info.style.cssText = 'grid-column:1/-1;text-align:center;color:#888;font-size:.85rem;padding:4px 0;';
    info.textContent = `Fotos ${start + 1}–${end} de ${photos.length}`;

    container.appendChild(info);
    container.appendChild(nav);
}

function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    const { start, end } = getPagePhotos();

    for (let index = start; index < end; index++) {
        const photo = photos[index];
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    }

    renderPagination(grid);
    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    saveCurrentSelections();
    renderGallery();
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains("selected");
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories);
    updateStats();
    updateFilterButtons();
}

function persistPhotoSelection(index, selection, options) {
    const previousSelection = photoSelections[index] || {};
    const normalized = normalizeSelection(selection);
    const changed = !selectionsAreEqual(previousSelection, normalized);
    const silent = options && options.silent;

    if (!changed) {
        saveSelections({ sync: false });
        return false;
    }

    if (hasAnySelection(normalized)) {
        photoSelections[index] = normalized;
        saveSelections({ sync: false });
        if (typeof sbSaveSelection === 'function') {
            sbSaveSelection(index, normalized).catch(function(e) { console.warn('[Supabase] Save:', e.message); });
        } else if (typeof sbUpsertSelections === 'function') {
            sbUpsertSelections().catch(function(e) { console.warn('[Supabase] Sync:', e.message); });
        }
    } else {
        delete photoSelections[index];
        saveSelections({ sync: false });
        if (typeof sbDeleteSelection === 'function') {
            sbDeleteSelection(index).catch(function(e) { console.warn('[Supabase] Delete:', e.message); });
        }
    }

    if (!silent) showToast('Selección actualizada', 'success');
    return true;
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        selectedCategories[category] = btn.classList.contains('selected');
    });

    persistPhotoSelection(currentPhotoIndex, selectedCategories, { silent: true });
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

function deleteCurrentSelection() {
    if (currentPhotoIndex === null) return;
    const displayNumber = currentPhotoIndex + 1;
    if (!confirm('¿Borrar la selección de la foto ' + displayNumber + '? Esta acción se sincronizará con todos los dispositivos.')) {
        return;
    }
    persistPhotoSelection(currentPhotoIndex, {}, { silent: true });
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección borrada', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'Boda — Rigoberto & Alondra',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-boda-rigoberto-alondra-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '💍 SELECCIÓN DE FOTOS - BODA RIGOBERTO & ALONDRA\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);
    document.getElementById('btnDeleteSelection').addEventListener('click', deleteCurrentSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections({ sync: false });
    } else if (typeof sbRefreshSelections === 'function') {
        sbRefreshSelections().catch(function(e) { console.warn('[Supabase] Refresh:', e.message); });
    }
});

window.addEventListener('beforeunload', (e) => {
    saveSelections({ sync: false });
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
