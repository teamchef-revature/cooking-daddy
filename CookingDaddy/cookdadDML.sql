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
insert into flavor (id, name)
    values (1, 'Sour');
insert into flavor (id, name)
    values (2, 'Sweet');
insert into flavor (id, name)
    values (3, 'Spicy');
insert into flavor (id, name)
    values (4, 'Bitter');
insert into flavor (id, name)
    values (5, 'Savory');
insert into flavor (id, name)
    values (6, 'Neutral');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (1, 9, 4, 6, 'White Bread');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (2, 9, 5, 6, 'Rye Bread');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (3, 8, 4, 6, 'Minute Rice');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (4, 8, 5, 6, 'White Rice');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (5, 8, 6, 6, 'Brown Rice');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (6, 11, 6, 4, 'Kale');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (7, 11, 4, 6, 'Iceberg Lettuce');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (8, 11, 5, 6, 'Romaine Lettuce');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (9, 11, 6, 4, 'Spinach');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (10, 15, 4, 5, 'Chicken');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (11, 15, 4, 5, 'Beef');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (12, 15, 7, 5, 'Steak');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (13, 4, 5, 6, 'Tofu');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (14, 16, 5, 5, 'Black Beans');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (15, 16, 5, 2, 'Azuki Beans');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (16, 12, 4, 5, 'White Potato');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (17, 12, 5, 2, 'Sweet Potato');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (18, 12, 5, 5, 'Red Potato');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (19, 12, 6, 2, 'Purple Sweet Potato');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (20, 2, 4, 5, 'Broccoli');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (21, 2, 5, 5, 'Asparagus');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (22, 2, 5, 3, 'Jalapeno');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (23, 2, 5, 6, 'Bell Pepper');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (24, 2, 7, 3, 'Ghost Pepper');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (25, 7, 7, 5, 'Garlic');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (26, 7, 5, 5, 'Coriander');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (27, 7, 5, 5, 'Sage');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (28, 7, 5, 5, 'Thyme');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (29, 21, 5, 6, 'Cilantro');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (30, 21, 5, 5, 'Basil');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (31, 21, 5, 5, 'Dill');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (32, 20, 4, 2, 'White Sugar');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (33, 20, 5, 2, 'Brown Sugar');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (34, 20, 6, 2, 'Coconut Sugar');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (35, 20, 7, 2, 'Maple Syrup');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (36, 20, 8, 2, 'Magic Sugar');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (37, 6, 1, 6, 'Puddle Water');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (38, 6, 3, 6, 'Tap Water');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (39, 6, 4, 6, 'Generic Bottled Water');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (40, 6, 5, 6, 'Brand Name Bottled Water');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (41, 6, 6, 6, 'Spring Water');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (42, 19, 4, 6, 'Soybean Oil');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (43, 19, 5, 6, 'Peanut Oil');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (44, 19, 6, 5, 'Olive Oil');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (45, 19, 5, 2, 'Unrefined Coconut Oil');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (46, 19, 5, 6, 'Refined Coconut Oil');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (47, 17, 4, 5, 'Vegetable Broth');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (48, 17, 5, 5, 'Chicken Broth');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (49, 17, 6, 5, 'Bone Broth');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (50, 18, 4, 6, 'Dairy Milk');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (51, 18, 4, 6, 'Almond Milk');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (52, 18, 5, 2, 'Sweetened Condensed Milk');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (53, 18, 4, 2, 'Coconut Milk');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (54, 18, 5, 6, 'Soy Milk');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (55, 18, 6, 6, 'Oat Milk');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (56, 6, 6, 3, 'Hot Sauce');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (57, 6, 3, 4, 'Cheap Beer');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (58, 6, 5, 4, 'Good Beer');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (59, 6, 7, 4, 'Fancy Beer');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (60, 6, 5, 2, 'White Wine');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (61, 14, 4, 2, 'Strawberries');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (62, 14, 5, 2, 'Blueberries');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (63, 13, 4, 1, 'Lemon');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (64, 13, 5, 1, 'Lime');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (65, 3, 4, 2, 'Apple');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (66, 3, 5, 2, 'Pear');
insert into ingredient (id, category_id, quality_id, flavor_id, name)
    values (67, 3, 6, 2, 'Persimmon');
commit;