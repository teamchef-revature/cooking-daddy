insert into quality (id, name)
    values (1, 'Inedible');
insert into quality (id, name)
    values (2, 'Terrible');
insert into quality (id, name)
    values (3, 'Not Good');
insert into quality (id, name)
    values (4, 'Okay');
insert into quality (id, name)
    values (5, 'Good');
insert into quality (id, name)
    values (6, 'Great');
insert into quality (id, name)
    values (7, 'Delicious');
insert into quality (id, name)
    values (8, 'Heavenly');
insert into category (id, name, parent_id)
    values (0, 'Any', 0);
insert into category (id, name, parent_id)
    values (1, 'Grain', 0);
insert into category (id, name, parent_id)
    values (2, 'Vegetables', 0);
insert into category (id, name, parent_id)
    values (3, 'Fruits', 0);
insert into category (id, name, parent_id)
    values (4, 'Proteins', 0);
insert into category (id, name, parent_id)
    values (5, 'Nuts', 0);
insert into category (id, name, parent_id)
    values (6, 'Liquids', 0);
insert into category (id, name, parent_id)
    values (7, 'Spices/Seasonings', 0);
insert into category (id, name, parent_id)
    values (8, 'Rice', 1);
insert into category (id, name, parent_id)
    values (9, 'Bread', 1);
insert into category (id, name, parent_id)
    values (10, 'Flour', 1);
insert into category (id, name, parent_id)
    values (11, 'Greens', 2);
-- insert into ingredient (id, category_id, quality_id, flavor_id
commit;