SELECT * FROM QUALITY;
ALTER TABLE PERSON ADD ROLE_ID NUMBER(20) NOT NULL;
ALTER TABLE PERSON ADD CONSTRAINT FK_PERSON_ROLE FOREIGN KEY (ROLE_ID) REFERENCES ROLE(ID);