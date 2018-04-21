CREATE DATABASE IF NOT EXISTS smssender;

use smssender;

CREATE TABLE IF NOT EXISTS numbers(sender varchar(255));

DROP TABLE IF EXISTS dlr;
  SET character_set_client = utf8;
  CREATE TABLE dlr (
    smsc VARCHAR(40) DEFAULT NULL,
    ts VARCHAR(65) DEFAULT NULL,
    destination VARCHAR(40) DEFAULT NULL,
    source VARCHAR(40) DEFAULT NULL,
    service VARCHAR(40) DEFAULT NULL,
    url VARCHAR(255) DEFAULT NULL,
    mask INT(10) DEFAULT NULL,
    status INT(10) DEFAULT NULL,
    boxc VARCHAR(40) DEFAULT NULL,
    KEY dlr_smsc_index (smsc),
    KEY dlr_ts_index (ts)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOAD DATA INFILE '/usr/local/bin/50M_msisdns992.csv' INTO TABLE numbers FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 LINES;
