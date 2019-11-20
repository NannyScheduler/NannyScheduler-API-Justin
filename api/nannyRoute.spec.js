const request = require('supertest');
const Nannies = require('./nanny-models');
const db = require('../data/dbConfig');
const nannyRoute = require('./nannyRoute');


describe('register', () => {
    describe('register status', () => {
        it('successfully registered', () => {
                request(nannyRoute)
                .post('/register')
                .send({
                    username: 'Testing',
                    password: 'Testing'
                })
                .then(res => {
                    expect(res.status).toBe('201')
                })
        })
    });
    describe('new user', () => {
        it('id and password present', () => {
                request(nannyRoute)
                .post('/register')
                .send({
                    username: 'Testing',
                    password: 'Testing'
                })
                .then(res => {
                    expect(res.username).toBe('Testing')
                    expect(res.password).toBe('Testing');
                })
        })
    })
})


describe('login', () => {
    describe('login status', () => {
        it('name should match', () => {
                request(nannyRoute)
                .post('/login')
                .send({
                    username: 'Zuckerberg',
                    password: 'Facebook'
                })
                .then(res => {
                    expect(res.username).toBe('Zuckerberg')
                })
        })
    })
    describe('login status', () => {
        it('returns 200', () => {
                request(nannyRoute)
                .post('/login')
                .send({
                    username: 'Zuckerberg',
                    password: 'Facebook'
                })
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
}) 