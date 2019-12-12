/*
    Reset database, dropping tables
*/
DROP TABLE POST_EQUIPMENT CASCADE CONSTRAINTS;
DROP TABLE POST_MEAL CASCADE CONSTRAINTS;
DROP TABLE POST_INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE OFFER_EQUIPMENT CASCADE CONSTRAINTS;
DROP TABLE OFFER_MEAL CASCADE CONSTRAINTS;
DROP TABLE OFFER_INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE OFFER CASCADE CONSTRAINTS;
DROP TABLE POST CASCADE CONSTRAINTS;
DROP TABLE STATUS CASCADE CONSTRAINTS;
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
DROP TABLE ROLE CASCADE CONSTRAINTS;

/*
    ROLE table
    ID (NUMBER) - Primary Key
    LABEL (VARCHAR2) - Not Null
*/
CREATE TABLE ROLE (
    ID NUMBER(20) PRIMARY KEY,
    LABEL VARCHAR2(128) NOT NULL
);

/*
    PERSON table
    ID (NUMBER) - Primary Key
    USERNAME (VARCHAR2) - Unique Not Null
    PASSWORD (VARCHAR2) - Not Null
    ROLE_ID (NUMBER) - Not Null Foreign Key to ROLE table
    FIRST (VARCHAR2) - : First Name
    LAST (VARCHAR2) - : Last Name
*/
CREATE TABLE PERSON (
    ID NUMBER(20) PRIMARY KEY,
    USERNAME VARCHAR2(32) NOT NULL UNIQUE,
    PASSWORD VARCHAR2(32) NOT NULL,
    ROLE_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_ROLE FOREIGN KEY (ROLE_ID) REFERENCES ROLE(ID),
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
    PARENT_ID (NUMBER) - Foreign Key to CATEGORY table : represents parent category
    NAME (VARCHAR2) - Not Null Unique
*/

CREATE TABLE CATEGORY (
    ID NUMBER(20) PRIMARY KEY,
    PARENT_ID NUMBER(20),
    CONSTRAINT FK_PARENT_CATEGORY FOREIGN KEY (PARENT_ID) REFERENCES CATEGORY(ID),
    NAME VARCHAR2(32) NOT NULL UNIQUE
);

/*
    INGREDIENT table
    ID (NUMBER) - Primary Key
    CATEGORY_ID (NUMBER) - Not Null Foreign Key to CATEGORY table
    QUALITY_ID (NUMBER) - Not Null Foreign Key to QUALITY table
    FLAVOR_ID (NUMBER) - Not Null Foreign Key to FLAVOR table
    NAME (VARCHAR2) - Unique Not Null
*/

CREATE TABLE INGREDIENT (
    ID NUMBER(20) PRIMARY KEY,
    CATEGORY_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_INGREDIENT_CATEGORY FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORY(ID),
    QUALITY_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_INGREDIENT_QUALITY FOREIGN KEY (QUALITY_ID) REFERENCES QUALITY(ID),
    FLAVOR_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_INGREDIENT_FLAVOR_ID FOREIGN KEY (FLAVOR_ID) REFERENCES FLAVOR(ID),
    NAME VARCHAR2(32) NOT NULL UNIQUE
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
    ID (NUMBER) - Primary Key
    PERSON_ID (NUMBER) - Not Null Foreign Key to PERSON table
    EQUIPMENT_ID (NUMBER) - Not Null Foreign Key to EQUIPMENT table
    INVENTORY (NUMBER) - Not Null : At least 0
*/
CREATE TABLE PERSON_EQUIPMENT (
    ID NUMBER(20) PRIMARY KEY,
    PERSON_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_EQUIPMENT_PERSON FOREIGN KEY (PERSON_ID) REFERENCES PERSON(ID),
    EQUIPMENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_EQUIPMENT_EQUIPMENT FOREIGN KEY (EQUIPMENT_ID) REFERENCES EQUIPMENT(ID),
    INVENTORY NUMBER(10) NOT NULL
);

/*
    PERSON_INGREDIENT table
    ID (NUMBER) - Primary Key
    PERSON_ID (NUMBER) - Not Null Foreign Key to PERSON table
    INGREDIENT_ID (NUMBER) - Not Null Foreign Key to INGREDIENT table
    INVENTORY (NUMBER) - Not Null : At least 0
*/
CREATE TABLE PERSON_INGREDIENT (
    ID NUMBER(20) PRIMARY KEY,
    PERSON_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_INGREDIENT_PERSON FOREIGN KEY (PERSON_ID) REFERENCES PERSON(ID),
    INGREDIENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_INGREDIENT_INGR FOREIGN KEY (INGREDIENT_ID) REFERENCES INGREDIENT(ID),
    INVENTORY NUMBER(10) NOT NULL
);

/*
    PERSON_MEAL table
    ID (NUMBER) - Primary Key
    PERSON_ID (NUMBER) - Not Null Foreign Key to PERSON table
    MEAL_ID (NUMBER) - Not Null Foreign Key to MEAL table
    INVENTORY (NUMBER) - Not Null : At least 0
*/
CREATE TABLE PERSON_MEAL (
    ID NUMBER(20) PRIMARY KEY,
    PERSON_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_MEAL_PERSON FOREIGN KEY (PERSON_ID) REFERENCES PERSON(ID),
    MEAL_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_PERSON_MEAL_MEAL FOREIGN KEY (MEAL_ID) REFERENCES MEAL(ID),
    INVENTORY NUMBER(10) NOT NULL
);

/*
    STATUS table
    ID (NUMBER) - Primaray Key
    NEXT_STATUS_ID (NUMBER) - Foreign Key to STATUS table
    NAME (VARCHAR2) - Not Null
*/
CREATE TABLE STATUS (
    ID NUMBER(20) PRIMARY KEY,
    NEXT_STATUS_ID NUMBER(20),
    CONSTRAINT FK_NEXT_STATUS FOREIGN KEY (NEXT_STATUS_ID) REFERENCES STATUS(ID),
    NAME VARCHAR2(32) NOT NULL
);

/*
    POST table
    ID (NUMBER) - Primary Key
    STATUS_ID (NUMBER) - Foreign Key references STATUS table
    DESCRIPTION (VARCHAR2)
*/
CREATE TABLE POST (
    ID NUMBER(20) PRIMARY KEY,
    STATUS_ID NUMBER(20),
    CONSTRAINT FK_POST_STATUS FOREIGN KEY (STATUS_ID) REFERENCES STATUS(ID),
    DESCRIPTION VARCHAR2(128)
);

/*
    OFFER table
    ID (NUMBER) - Primary Key
    POST_ID (NUMBER) - Not Null Foreign Key references POST table
    STATUS_ID (NUMBER) - Not Null Foreign Key reference STATUS table
    DESCRIPTION (VARCHAR2)
*/
CREATE TABLE OFFER (
    ID NUMBER(20) PRIMARY KEY,
    POST_ID NUMBER(20) NOT NULL,
    CONSTRAINT PK_OFFER_POST FOREIGN KEY (POST_ID) REFERENCES POST(ID),
    STATUS_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_OFFER_STATUS FOREIGN KEY (STATUS_ID) REFERENCES STATUS(ID),
    DESCRIPTION VARCHAR2(128)
);

/*
    OFFER_INGREDIENT table
    OFFER_ID (NUMBER) - Not Null Foreign Key to OFFER table
    PERSON_INGREDIENT_ID (NUMBER) - Not Null Foreign Key to PERSON_INGREDIENT table
    Primary Key constraint (OFFER_ID and PERSON_INGREDIENT_ID)
    QUANTITY (NUMBER) - Not Null : Always at least 0
*/
CREATE TABLE OFFER_INGREDIENT (
    OFFER_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_OFFER_INGREDIENT_OFFER FOREIGN KEY (OFFER_ID) REFERENCES OFFER(ID),
    PERSON_INGREDIENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_OFFER_ING_PERSON_ING FOREIGN KEY (PERSON_INGREDIENT_ID) REFERENCES PERSON_INGREDIENT(ID),
    CONSTRAINT PK_OFFER_INGREDIENT PRIMARY KEY (OFFER_ID, PERSON_INGREDIENT_ID),
    QUANTITY NUMBER(10) NOT NULL
);

/*
    OFFER_MEAL table
    OFFER_ID (NUMBER) - Not Null Foreign Key to OFFER table
    PERSON_MEAL_ID (NUMBER) - Not Null Foreign Key to PERSON_MEAL table
    Primary Key constraint (OFFER_ID and PERSON_MEAL_ID)
    QUANTITY (NUMBER) - Not Null : Always at least 0
*/
CREATE TABLE OFFER_MEAL (
    OFFER_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_OFFER_MEAL_OFFER FOREIGN KEY (OFFER_ID) REFERENCES OFFER(ID),
    PERSON_MEAL_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_OFFER_MEAL_PERSON_MEAL FOREIGN KEY (PERSON_MEAL_ID) REFERENCES PERSON_MEAL(ID),
    CONSTRAINT PK_OFFER_MEAL PRIMARY KEY (OFFER_ID, PERSON_MEAL_ID),
    QUANTITY NUMBER(10) NOT NULL
);

/*
    OFFER_EQUIPMENT table
    OFFER_ID (NUMBER) - Not Null Foreign Key to OFFER table
    PERSON_EQUIPMENT_ID (NUMBER) - Not Null Foreign Key to PERSON_EQUIPMENT table
    Primary Key constraint (OFFER_ID & PERSON_EQUIPMENT_ID)
    QUANTITY (NUMBER) - Not Null : Always at least 0
*/
CREATE TABLE OFFER_EQUIPMENT (
    OFFER_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_OFFER_EQUIPMENT_OFFER FOREIGN KEY (OFFER_ID) REFERENCES OFFER(ID),
    PERSON_EQUIPMENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_OFFER_EQU_PERSON_EQU FOREIGN KEY (PERSON_EQUIPMENT_ID) REFERENCES PERSON_EQUIPMENT(ID),
    CONSTRAINT PK_OFFER_EQUIPMENT PRIMARY KEY (OFFER_ID, PERSON_EQUIPMENT_ID),
    QUANTITY NUMBER(10) NOT NULL
);

/*
    POST_INGREDIENT table
    POST_ID (NUMBER) - Not Null Foreign Key to POST table
    PERSON_INGREDIENT_ID (NUMBER) - Not Null Foreign Key to PERSON_INGREDIENT table
    Primary Key constraint (POST_ID & PERSON_INGREDIENT_ID)
    QUANTITY (NUMBER) - Not Null : at least 0
*/
CREATE TABLE POST_INGREDIENT (
    POST_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_POST_INGREDIENT_POST FOREIGN KEY (POST_ID) REFERENCES POST(ID),
    PERSON_INGREDIENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_POST_ING_PERSON_ING FOREIGN KEY (PERSON_INGREDIENT_ID) REFERENCES PERSON_INGREDIENT(ID),
    CONSTRAINT PK_POST_INGREDIENT PRIMARY KEY (POST_ID, PERSON_INGREDIENT_ID),
    QUANTITY NUMBER(10) NOT NULL
);

/*
    POST_MEAL table
    POST_ID (NUMBER) - Not Null Foreign Key to POST table
    PERSON_MEAL_ID (NUMBER) - Not Null Foreign Key to PERSON_MEAL table
    Primary Key constraint (POST_ID & PERSON_MEAL_ID)
    QUANTITY (NUMBER) - Not Null : at least a 0
*/
CREATE TABLE POST_MEAL (
    POST_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_POST_MEAL_POST FOREIGN KEY (POST_ID) REFERENCES POST(ID),
    PERSON_MEAL_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_POST_MEAL_PERSON_MEAL FOREIGN KEY (PERSON_MEAL_ID) REFERENCES PERSON_MEAL(ID),
    CONSTRAINT PK_POST_MEAL PRIMARY KEY (POST_ID, PERSON_MEAL_ID),
    QUANTITY NUMBER(20) NOT NULL
);

/*
    POST_EQUIPMENT table
    POST_ID (NUMBER) - Not Null Foreign Key to POST table
    PERSON_EQUIPMENT_ID (NUMBER) - Not Null Foreign Key to PERSON_EQUIPMENT table
    Primary Key constraint (POST_ID & PERSON_EQUIPMENT_ID)
*/
CREATE TABLE POST_EQUIPMENT (
    POST_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_POST_EQUIPMENT_POST FOREIGN KEY (POST_ID) REFERENCES POST(ID),
    PERSON_EQUIPMENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_POST_EQUIP_PERSON_EQUIP FOREIGN KEY (PERSON_EQUIPMENT_ID) REFERENCES PERSON_EQUIPMENT(ID),
    CONSTRAINT PK_POST_EQUIPMENT PRIMARY KEY (POST_ID, PERSON_EQUIPMENT_ID),
    QUANTITY NUMBER(20) NOT NULL
);