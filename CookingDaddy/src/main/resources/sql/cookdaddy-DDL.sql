/*
    Reset database, dropping tables
*/
DROP TABLE COOKBOOK CASCADE CONSTRAINTS;
DROP TABLE MEAL_INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE MEAL CASCADE CONSTRAINTS;
DROP TABLE RECIPE_COMPONENT CASCADE CONSTRAINTS;
DROP TABLE RECIPE CASCADE CONSTRAINTS;
DROP TABLE COMPONENT CASCADE CONSTRAINTS;
DROP TABLE INGREDIENT_SEASON CASCADE CONSTRAINTS;
DROP TABLE SEASON CASCADE CONSTRAINTS;
DROP TABLE POST_EQUIPMENT CASCADE CONSTRAINTS;
DROP TABLE POST_MEAL CASCADE CONSTRAINTS;
DROP TABLE POST_INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE OFFER_EQUIPMENT CASCADE CONSTRAINTS;
DROP TABLE OFFER_MEAL CASCADE CONSTRAINTS;
DROP TABLE OFFER_INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE OFFER CASCADE CONSTRAINTS;
DROP TABLE POST CASCADE CONSTRAINTS;
DROP TABLE STATUS CASCADE CONSTRAINTS;
DROP TABLE PERSON_INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE PERSON_EQUIPMENT CASCADE CONSTRAINTS;
DROP TABLE EQUIPMENT CASCADE CONSTRAINTS;
DROP TABLE INGREDIENT CASCADE CONSTRAINTS;
DROP TABLE CATEGORY CASCADE CONSTRAINTS;
DROP TABLE FLAVOR CASCADE CONSTRAINTS;
DROP TABLE QUALITY CASCADE CONSTRAINTS;
DROP TABLE PERSON CASCADE CONSTRAINTS;
DROP TABLE ROLE CASCADE CONSTRAINTS;

DROP SEQUENCE PERSON_INGREDIENT_SEQ;
DROP SEQUENCE ROLE_SEQ;
DROP SEQUENCE CATEGORY_SEQ;
DROP SEQUENCE EQUIPMENT_SEQ;
DROP SEQUENCE FLAVOR_SEQ;
DROP SEQUENCE INGREDIENT_SEQ;
DROP SEQUENCE OFFER_SEQ;
DROP SEQUENCE PERSON_EQUIPMENT_SEQ;
DROP SEQUENCE PERSON_SEQ;
DROP SEQUENCE POST_SEQ;
DROP SEQUENCE QUALITY_SEQ;
DROP SEQUENCE STATUS_SEQ;
DROP SEQUENCE SEASON_SEQ;
DROP SEQUENCE COMPONENT_SEQ;
DROP SEQUENCE RECIPE_SEQ;
DROP SEQUENCE MEAL_SEQ;
DROP SEQUENCE COOKBOOK_SEQ;
/*
    ROLE table
    ID (NUMBER) - Primary Key
    LABEL (VARCHAR2) - Not Null
*/
CREATE TABLE ROLE (
    ID NUMBER(20) PRIMARY KEY,
    LABEL VARCHAR2(128) NOT NULL
);
CREATE SEQUENCE ROLE_SEQ;

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
CREATE SEQUENCE PERSON_SEQ;

/*
    QUALITY table
    ID (NUMBER) - Primary Key
    NAME (VARACHAR2) - Not Null Unique
*/

CREATE TABLE QUALITY (
    ID NUMBER(20) PRIMARY KEY,
    NAME VARCHAR2(32) NOT NULL UNIQUE
);
CREATE SEQUENCE QUALITY_SEQ;

/*
    FLAVOR table
    ID (NUMBER) - Primary Key
    NAME (VARCHAR2) - Not Null Unique
*/

CREATE TABLE FLAVOR (
    ID NUMBER(20) PRIMARY KEY,
    NAME VARCHAR2(32) NOT NULL UNIQUE
);
CREATE SEQUENCE FLAVOR_SEQ;

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
CREATE SEQUENCE CATEGORY_SEQ;

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
CREATE SEQUENCE INGREDIENT_SEQ;

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
CREATE SEQUENCE EQUIPMENT_SEQ;

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
CREATE SEQUENCE PERSON_EQUIPMENT_SEQ;

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
CREATE SEQUENCE PERSON_INGREDIENT_SEQ;

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
CREATE SEQUENCE STATUS_SEQ;

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
alter table post add (person_id number(20) references person(id));
CREATE SEQUENCE POST_SEQ;

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
alter table offer add (offer_maker number(20) references person(id));
CREATE SEQUENCE OFFER_SEQ;

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
drop table offer_ingredient cascade constraints;

create table offer_ingredient (
    offer_id number(20) not null references offer(id),
    ingredient_id number(20) not null references ingredient(id),
    quantity number(20) not null,
    CONSTRAINT PK_OFFER_INGREDIENT PRIMARY KEY (OFFER_ID, INGREDIENT_ID)
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

drop table post_ingredient cascade constraints;

create table post_ingredient (
    post_id number(20) not null references post(id),
    ingredient_id number(20) not null references ingredient(id),
    quantity number(20) not null,
    CONSTRAINT PK_POST_INGREDIENT PRIMARY KEY (POST_ID, INGREDIENT_ID)
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

/*
    SEASON table
    ID (NUMBER) - Primary Key
    NAME (VARCHAR2) - Not Null
    START_TIME (NUMBER)
    END_TIME (NUMBER)
    RECURRING (NUMBER)
*/
CREATE TABLE SEASON (
    ID NUMBER(20) PRIMARY KEY,
    NAME VARCHAR2(256) NOT NULL,
    START_TIME NUMBER,
    END_TIME NUMBER,
    RECURRING NUMBER
);
alter table season add (start_time number, end_time number, recurring number);
CREATE SEQUENCE SEASON_SEQ;

/*
    INGREDIENT_SEASON table
    INGREDIENT_ID (NUMBER) - Forigen Key to INGREDIENT table
    SEASON_ID (NUMBER) - Foreign Key to SEASON table
    Primary Key constraint (INGREDIENT_ID & SEASON_ID)
*/
CREATE TABLE INGREDIENT_SEASON (
    INGREDIENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_INGRED_SEASON_INGRED FOREIGN KEY (INGREDIENT_ID) REFERENCES INGREDIENT(ID),
    SEASON_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_INGRED_SEASON_SEASON FOREIGN KEY (SEASON_ID) REFERENCES SEASON(ID),
    CONSTRAINT PK_INGREDIENT_SEASON PRIMARY KEY (INGREDIENT_ID, SEASON_ID)
);

/*
    COMPONENT table
    ID (NUMBER) - Primary Key
    INGREDIENT_ID (NUMBER) - Nullable Foreign Key to INGREDIENT table
    CATEGORY_ID (NUMBER) - Nullable Foreign Key to CATEGORY table
    FLAVOR_ID (NUMBER) - Nullable Foreign Key to FLAVOR table
*/
CREATE TABLE COMPONENT (
    ID NUMBER(20) PRIMARY KEY,
    INGREDIENT_ID NUMBER(20),
    CONSTRAINT FK_COMPONENT_INGREDIENT FOREIGN KEY (INGREDIENT_ID) REFERENCES INGREDIENT(ID),
    CATEGORY_ID NUMBER(20),
    CONSTRAINT FK_COMPONENT_CATEGORY FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORY(ID),
    FLAVOR_ID NUMBER(20),
    CONSTRAINT FK_COMPONENT_FLAVOR FOREIGN KEY (FLAVOR_ID) REFERENCES FLAVOR(ID)
);
CREATE SEQUENCE COMPONENT_SEQ;

/*
    RECIPE table
    ID (NUMBER) - Primary Key
    FLAVOR_ID (NUMBER) - Foreign key to FLAVOR table
    NAME (VARCHAR2)
*/
CREATE TABLE RECIPE (
    ID NUMBER(20) PRIMARY KEY,
    FLAVOR_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_RECIPE_FLAVOR FOREIGN KEY (FLAVOR_ID) REFERENCES FLAVOR(ID),
    NAME VARCHAR(128)
);
CREATE SEQUENCE RECIPE_SEQ;

/*
    RECIPE_COMPONENT
    ID (NUMBER) - Primary Key
    RECIPE_ID (NUMBER) - Foreign Key to RECIPE table
    COMPONENT_ID (NUMBER) - Foreign key to COMPONENT table
    QUANTITY (NUMBER) - Not Null : At least 0
*/
CREATE TABLE RECIPE_COMPONENT (
    ID NUMBER(20) PRIMARY KEY,
    RECIPE_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_RECIPE_COMPONENT_RECIPE FOREIGN KEY (RECIPE_ID) REFERENCES RECIPE(ID),
    COMPONENT_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_RECIPE_COMPONENT_COMPONENT FOREIGN KEY (COMPONENT_ID) REFERENCES COMPONENT(ID),
    QUANTITY NUMBER(20) NOT NULL
);
CREATE SEQUENCE RECIPE_COMPONENT_SEQ;
/*
    MEAL table
    ID (NUMBER) - Primary Key,
    RECIPE_ID (NUMBER) - Foreign Key to RECIPE table,
    PERSON_ID (NUMBER) - Foreign Key to PERSON table,
    QUALITY_ID (NUMBER) - Foreign Key to QUALITY table
    INVENTORY (NUMBER) - Not Null : always at least 0
*/
CREATE TABLE MEAL (
    ID NUMBER(20) PRIMARY KEY,
    RECIPE_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_MEAL_RECIPE FOREIGN KEY (RECIPE_ID) REFERENCES RECIPE(ID),
    PERSON_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_MEAL_PERSON FOREIGN KEY (PERSON_ID) REFERENCES PERSON(ID),
    QUALITY_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_MEAL_QUALITY FOREIGN KEY (QUALITY_ID) REFERENCES QUALITY(ID)
);
CREATE SEQUENCE MEAL_SEQ;

/*
    MEAL_INGREDIENT table
    MEAL_ID (NUMBER) - Foreign Key to MEAL table
    INGREDIENT_ID (NUMBER) - Foreign Key to INGREDIENT table
    Primary Key constraint (MEAL_ID & INGREDIENT_ID)
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
    PERSON_ID (NUMBER) - Foreign Key to PERSON table
    HIGHSCORE (NUMBER) - Not Null : At least 0
*/
CREATE TABLE COOKBOOK (
    ID NUMBER(20) PRIMARY KEY,
    PERSON_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_COOKBOOK_PERSON FOREIGN KEY (PERSON_ID) REFERENCES PERSON(ID),
    HIGHSCORE NUMBER(10) NOT NULL
);
CREATE SEQUENCE COOKBOOK_SEQ;

/*
    COOKBOOK_RECIPE table
    COOKBOOK_ID (NUMBER) - Foreign Key to COOKBOOK table
    RECIPE_ID (NUMBER) - Foreign Key to RECIPE table
    Primary Key Constraint (COOKBOOK_ID & RECIPE_ID)
*/
CREATE TABLE COOKBOOK_RECIPE (
    COOKBOOK_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_COOKBOOK_RECIPE_COOKBOOK FOREIGN KEY (COOKBOOK_ID) REFERENCES COOKBOOK(ID),
    RECIPE_ID NUMBER(20) NOT NULL,
    CONSTRAINT FK_COOKBOOK_RECIPE_RECIPE FOREIGN KEY (RECIPE_ID) REFERENCES RECIPE(ID),
    CONSTRAINT PK_COOKBOOK_RECIPE PRIMARY KEY (COOKBOOK_ID, RECIPE_ID)
);