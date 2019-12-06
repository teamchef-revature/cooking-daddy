/*
    Reset database, dropping tables
*/

DROP TABLE PERSON_MEAL CASCADE CONSTRAINTS;
DROP TABLE PERSON_INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE PERSON_EQUIPMENT CASCADE CONSTRAINTS;
DROP TABLE EQUIPMENT CASCADE CONSTRAINTS;
DROP TABLE COOKBOOK CASCADE CONSTRAINTS;
DROP TABLE MEAL_INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE MEAL CASCADE CONSTRAINTS;
DROP TABLE INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE CATEGORY CASCADE CONSTRAINTS;
DROP TABLE FLAVOR CASCADE CONSTRAINTS;
DROP TABLE QUALITY CASCADE CONSTRAINTS;
DROP TABLE PERSON CASCADE CONSTRAINTS;

/*
    PERSON table
    ID (NUMBER) - Primary Key
    USERNAME (VARCHAR2) - Unique Not Null
    PASSWORD (VARCHAR2) - Not Null
    FIRST (VARCHAR2) - : First Name
    LAST (VARCHAR2) - : Last Name
*/
CREATE TABLE PERSON (
    ID NUMBER(20) PRIMARY KEY,
    USERNAME VARCHAR2(32) NOT NULL UNIQUE,
    PASSWORD VARCHAR2(32) NOT NULL,
    FIRST VARCHAR2(32),
    LAST VARCHAR2(21)
);

/*
    QUALITY table
    ID (NUMBER) - Primary Key
    NAME (VARACHAR2) - Not Null Unique
*/

CREATE TABLE QUALITY (
    ID NUMBER(20) PRIMARY KEY,
    NAME VARCHAR2(32) NOT NULL UNIQUE
);

/*
    FLAVOR table
    ID (NUMBER) - Primary Key
    NAME (VARCHAR2) - Not Null Unique
*/

CREATE TABLE FLAVOR (
    ID NUMBER(20) PRIMARY KEY,
    NAME VARCHAR2(32) NOT NULL UNIQUE
);

/*
    CATEGORY table
    ID (NUMBER) - Primary Key
    NAME (VARCHAR2) - Not Null Unique
*/

CREATE TABLE CATEGORY (
    ID NUMBER(20) PRIMARY KEY,
    NAME VARCHAR2(32) NOT NULL UNIQUE
);

/*
    INGREDIENT table
    ID (NUMBER) - Primary Key
    CATEGORY_ID (NUMBER) - Not Null Foreign Key to CATEGORY table
    QUALITY_ID (NUMBER) - Not Null Foreign Key to QUALITY table
    FLAVOR_ID (NUMBER) - Not Null Foreign Key to FLAVOR table
    NAME (VARCHAR2) - Unique Not Null
    INVENTORY (NUMBER) - Not Null
*/

CREATE TABLE INGREDIENT (
    ID NUMBER(20) PRIMARY KEY,
    CATEGORY_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_INGREDIENT_CATEGORY FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORY(ID),
    QUALITY_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_INGREDIENT_QUALITY FOREIGN KEY (QUALITY_ID) REFERENCES QUALITY(ID),
    FLAVOR_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_INGREDIENT_FLAVOR_ID FOREIGN KEY (FLAVOR_ID) REFERENCES FLAVOR(ID),
    NAME VARCHAR2(32) NOT NULL UNIQUE,
    INVENTORY NUMBER(20) NOT NULL
);

/*
    MEAL table
    ID (NUMBER) - Primary Key
    FLAVOR_ID (NUMBER) - Not Null Foreign Key to FLAVOR table
    CATEGORY_ID (NUMBER) - Not Null Foreign Key to CATEGORY table
    NAME (VARCHAR2) - Not Null Unique
*/
CREATE TABLE MEAL (
    ID NUMBER(20) PRIMARY KEY,
    FLAVOR_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_MEAL_FLAVOR FOREIGN KEY (FLAVOR_ID) REFERENCES FLAVOR(ID),
    CATEGORY_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_MEAL_CATEGORY FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORY(ID),
    NAME VARCHAR2(32) NOT NULL UNIQUE
);

/*
    MEAL_INGREDIENT table
    MEAL_ID(20) - Foreign Key to MEAL table
    INGREDIENT_ID(20) - Foreign Key to INGREDIENT table
    Primary Key Constraint MEAL_ID and INGREDIENT_ID
*/
CREATE TABLE MEAL_INGREDIENT (
    MEAL_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_MEAL_INGREDIENT_MEAL FOREIGN KEY (MEAL_ID) REFERENCES MEAL(ID),
    INGREDIENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_MEAL_INGREDIENT_INGREDIENT FOREIGN KEY (INGREDIENT_ID) REFERENCES INGREDIENT(ID),
    CONSTRAINT PK_MEAL_INGREDIENT PRIMARY KEY (MEAL_ID, INGREDIENT_ID)
);

/*
    COOKBOOK table
    ID (NUMBER) - Primary Key
    PERSON_ID (NUMBER) - Not Null Foreign Key to PERSON table
    MEAL_ID (NUMBER) - Not Null Foreign Key to MEAL table
    QUALIT_ID(NUMBER) - Not Null Foreign Key to QUALITY table
    HIGH_SCORE (NUMBER) - Not Null : Going to at least have a 0
*/
CREATE TABLE COOKBOOK (
    ID NUMBER(20) PRIMARY KEY,
    PERSON_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_COOKBOOK_PERSON FOREIGN KEY (PERSON_ID) REFERENCES PERSON(ID),
    MEAL_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_COOKBOOK_MEAL FOREIGN KEY (MEAL_ID) REFERENCES MEAL(ID),
    QUALITY_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_COOKBOOK_QUALITY FOREIGN KEY (QUALITY_ID) REFERENCES QUALITY(ID),
    HIGH_SCORE NUMBER(20) NOT NULL
);

/*
    EQUIPMENT table
    ID (NUMBER) - Primary Key
    QUALITY_ID (NUMBER) - Not Null Foreign Key to QUALITY table
    NAME (VARCHAR2) - Not Null Unique
    MIN_TEMP (NUMBER) - Not Null
    MAX_TEMP (NUMBER) - Not Null
    MIN_TIME (NUMBER) - Not Null
    MAX_TIME (NUMBER) - Not Null
*/
CREATE TABLE EQUIPMENT (
    ID NUMBER(20) PRIMARY KEY,
    QUALITY_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_EQUIPMENT_QUALITY FOREIGN KEY (QUALITY_ID) REFERENCES QUALITY(ID),
    NAME VARCHAR2(32) NOT NULL,
    MIN_TEMP NUMBER(5) NOT NULL,
    MAX_TEMP NUMBER(5) NOT NULL,
    MIN_TIME NUMBER(10) NOT NULL,
    MAX_TIME NUMBER(10) NOT NULL
);

/*
    PERSON_EQUIPMENT table
    PERSON_ID (NUMBER) - Not Null Foreign Key to PERSON table
    EQUIPMENT_ID (NUMBER) - Not Null Foreign Key to EQUIPMENT table
    Primary Key Constraint PERSON_ID and EQUIPMENT_ID
    INVENTORY (NUMBER) - Not Null : At least 0
*/
CREATE TABLE PERSON_EQUIPMENT (
    PERSON_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_EQUIPMENT_PERSON FOREIGN KEY (PERSON_ID) REFERENCES PERSON(ID),
    EQUIPMENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_EQUIPMENT_EQUIPMENT FOREIGN KEY (EQUIPMENT_ID) REFERENCES EQUIPMENT(ID),
    CONSTRAINT PK_PERSON_EQUIPMENT PRIMARY KEY (PERSON_ID, EQUIPMENT_ID),
    INVENTORY NUMBER(10) NOT NULL
);

/*
    PERSON_INGREDIENT table
    PERSON_ID (NUMBER) - Not Null Foreign Key to PERSON table
    INGREDIENT_ID (NUMBER) - Not Null Foreign Key to INGREDIENT table
    Primary Key Constraint PERSON_ID and INGREDIENT_ID
    INVENTORY (NUMBER) - Not Null : At least 0
*/
CREATE TABLE PERSON_INGREDIENT (
    PERSON_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_INGREDIENT_PERSON FOREIGN KEY (PERSON_ID) REFERENCES PERSON(ID),
    INGREDIENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_INGREDIENT_INGREDIENT FOREIGN KEY (INGREDIENT_ID) REFERENCES INGREDIENT(ID),
    CONSTRAINT PK_PERSON_INGREDIENT PRIMARY KEY (PERSON_ID, INGREDIENT_ID),
    INVENTORY NUMBER(10) NOT NULL
);

/*
    PERSON_MEAL table
    PERSON_ID (NUMBER) - Not Null Foreign Key to PERSON table
    MEAL_ID (NUMBER) - Not Null Foreign Key to MEAL table
    Primary Key Constraint PERSON_ID and MEAL_ID
    INVENTORY (NUMBER) - Not Null : At least 0
*/
CREATE TABLE PERSON_MEAL (
    PERSON_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_MEAL_PERSON FOREIGN KEY (PERSON_ID) REFERENCES PERSON(ID),
    MEAL_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_MEAL_MEAL FOREIGN KEY (MEAL_ID) REFERENCES MEAL(ID),
    CONSTRAINT PK_PERSON_MEAL PRIMARY KEY (PERSON_ID, MEAL_ID),
    INVENTORY NUMBER(10) NOT NULL
);