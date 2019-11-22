/* eslint-disable no-undef */
const request = require('supertest');
const server = require('./server');

describe('GET /', () => {
    it('has process.env.DB_ENV as "testing"', () =>{
        expect(process.env.DB_ENV).toBe('testing');
    });
    it('returns 200 OK', () => {
        return request(server).get('/')
        .expect(201)
        .expect('Content-Type', /json/)
        .expect('Content-Length', '18')
        .then(res => {
            expect(res.body.api).toBe('I am up!')
        })
    })
});