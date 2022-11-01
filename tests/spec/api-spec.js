var request = require('request');
const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

describe('test api', () => {
    describe('GET /', () => {
        it('responds with 200 status code', (done) => {
            request.get(baseUrl, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        it('responds with Hello World!', (done) => {
            request.get(baseUrl, (err, res, body) => {
                expect(body).toBe('Hello World!');
                done();
            });
        });
    });
    describe('GET /hobbies', () => {
        it('return all hobbies', function () {
            request(baseUrl + '/hobbies', function (error, response, body) {
                expect(response.statusCode).toEqual(200);
                done();
            });
            request(baseUrl + '/hobbies', function (error, response, body) {
                expect(body).toEqual('[{"hobby_id":1,"hobby":"swimming"},{"hobby_id":2,"hobby":"diving"},{"hobby_id":3,"hobby":"jogging"}, {"hobby_id":4,"hobby":"dancing"}, {"hobby_id":5,"hobby":"cooking"}, {"hobby_id":6,"hobby":"reading"}, {"hobby_id":7,"hobby":"writing"}, {"hobby_id":8,"hobby":"singing"}, {"hobby_id":9,"hobby":"acting"}, {"hobby_id":10,"hobby":"painting"}]');
                done();
            });
        });
    });
    describe('GET /hobbies/:id', () => {
        it('return hobby with id 1', function () {
            request(baseUrl + '/hobbies/1', function (error, response, body) {
                expect(response.statusCode).toEqual(200);
                done();
            });
            request(baseUrl + '/hobbies/1', function (error, response, body) {
                expect(body).toEqual('[{"hobby_id":1,"hobby":"swimming"}]');
                done();
            });
        });
    });
    describe('GET /hobbies/avg', () => {
        it('return average hobby id', function () {
            request(baseUrl + '/hobbies/avg', function (error, response, body) {
                expect(response.statusCode).toEqual(200);
                done();
            });
            request(baseUrl + '/hobbies/avg', function (error, response, body) {
                expect(body).toEqual('[{"avg":"5.5"}]');
                done();
            });
        });
    });
});
