const express = require("express");
const faker = require("faker");

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newFake;
};
const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: faker.address.streetName(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        county: faker.address.county()
    };
    return newFake;
};

const createCompanyUser = () => {
    const newFake2 = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: faker.address.streetName(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        county: faker.address.county()
    };
    return newFake2;
};


const app= express()
app.get("/api/users/new", (req, res) => {
    res.send(createUser())
})

app.get("/api/companies/new", (req, res) => {
    res.send(createCompany())
})

app.get("/api/user/company", (req, res) => {
    res.send(createCompanyUser())
})

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);





