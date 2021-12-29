create TABLE avia(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) DEFAULT null,
    shared INT DEFAULT 0
);