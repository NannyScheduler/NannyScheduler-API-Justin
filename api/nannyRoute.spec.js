/* eslint-disable no-undef */
const db = require('../data/dbConfig');
const Nannies = require('./nanny-models');

describe('nannies model', () => {
    beforeEach(async () => {
        await db('nannies').truncate();
    });

    describe('insert function', () => {
        it('inserts nannies into the db', async() => {
            let nanniesNumber;
            nanniesNumber = await db('nannies');
            expect(nanniesNumber).toHaveLength(0);
            const testNanny = {
                "email": "Test@gmail.com",
                "password": "Test",
                "fname": "Test",
                "can_drive": "Test",
                "hourly_rates": "Test",
                "city": "Test",
                "fromdate": "Test",
                "todate": "Test",
                "nanny_id": 1
                }
            await Nannies.createNanny(testNanny);
            nanniesNumber = await db('nannies');
            expect(nanniesNumber).toHaveLength(1);
        })
    });
    describe('update function', () => {
        it('Modifies already existing nanny in the db', async() => {
            const testNanny = {
                "email": "Test@gmail.com",
                "password": "Test",
                "fname": "Test",
                "can_drive": "Test",
                "hourly_rates": "Test",
                "city": "Test",
                "fromdate": "Test",
                "todate": "Test",
                "nanny_id": 1
                }
            await Nannies.createNanny(testNanny);
            let nannyName;
            nannyName = await db('nannies').fname;
            const updateNanny = {
                "id": 1,
                "fname": "NoTester",
            }
            await Nannies.updateNanny(1, updateNanny)
            nannyName = await db('nannies');
            nannyName = nannyName[0].fname;
            expect(nannyName).toBe('NoTester');
        })
    })
})