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
    values (11, 'Green', 2);
insert into category (id, name, parent_id)
    values (12, 'Root Vegetable', 2);
insert into category (id, name, parent_id)
    values (13, 'Citrus', 3);
insert into category (id, name, parent_id)
    values (14, 'Berry', 3);
insert into category (id, name, parent_id)
    values (15, 'Meat', 4);
insert into category (id, name, parent_id)
    values (16, 'Beans', 4);
insert into category (id, name, parent_id)
    values (17, 'Broth', 6);
insert into category (id, name, parent_id)
    values (18, 'Milk', 6);
insert into category (id, name, parent_id)
    values (19, 'Oil', 6);
insert into category (id, name, parent_id)
    values (20, 'Sugar', 7);
insert into category (id, name, parent_id)
    values (21, 'Herb', 7);
insert into recipe (id, flavor_id, name)
    values (1, 6, 'Baked Potato');
insert into recipe (id, flavor_id, name)
    values (2, 5, 'Casserole');
insert into recipe (id, flavor_id, name)
    values (3, 6, 'Mush');
insert into component (id) values (1);
insert into component (id, category_id) values (2, 12);
insert into component (id, category_id) values (3, 2);
insert into recipe_component (id, recipe_id, component_id, quantity)
    values (1, 2, 1, 2);
insert into recipe_component (id, recipe_id, component_id, quantity)
    values (2, 1, 2, 1);
insert into recipe_component (id, recipe_id, component_id, quantity)
    values (3, 2, 3, 1);
commit;