

// ---SPECS-------------------------

describe('kata-potter', function () {
    'use strict';

    beforeEach (function () {
        module('myApp');
    });

    describe ('basics', function () {
        var pHelper = null;
        beforeEach(inject(function (pricingHelper) {
            pHelper = pricingHelper;
        }));

        it('should be 0 if buyed none', function () {
            var books = [];
            expect(pHelper.calc(books)).toBe(0);
        });

        it('should be 8 if buyed one of a kind', function () {
            var books = [0];
            expect(pHelper.calc(books)).toBe(8);
        });

        it('should be 8 if buyed one of a kind', function () {
            var books = [1];
            expect(pHelper.calc(books)).toBe(8);
        });

        it('should be 8 if buyed one of a kind', function () {
            var books = [2];
            expect(pHelper.calc(books)).toBe(8);
        });

        it('should be 8 if buyed one of a kind', function () {
            var books = [3];
            expect(pHelper.calc(books)).toBe(8);
        });

        it('should be 8 if buyed one of a kind', function () {
            var books = [4];
            expect(pHelper.calc(books)).toBe(8);
        });

        it('should be 16 if buyed two of a kind', function () {
            var books = [0, 0];
            expect(pHelper.calc(books)).toBe(8 * 2);
        });
        it('should be 24 if buyed three of a kind', function () {
            var books = [1, 1, 1];
            expect(pHelper.calc(books)).toBe(8 * 3);
        });
    });

    describe("simple discounts", function () {
        var pHelper = null;
        beforeEach(inject(function (pricingHelper) {
            pHelper = pricingHelper;
        }));

        it('should get 5% discount', function () {
            var books = [0, 1];
            expect(pHelper.calc(books)).toBe(8 * 2 * 0.95);
        });

        it('should get 10% discount', function () {
            var books = [0, 2, 4];
            expect(pHelper.calc(books)).toBe(8 * 3 * 0.90);
        });

        it('should get 20% discount', function () {
            var books = [0, 1, 2, 4];
            expect(pHelper.calc(books)).toBe(8 * 4 * 0.8);
        });

        it('should get 25% discount', function () {
            var books = [0, 1, 2, 3, 4];
            expect(pHelper.calc(books)).toBe(8 * 5 * 0.75);
        });
    });

    describe("several discounts", function () {
        var pHelper = null;
        beforeEach(inject(function (pricingHelper) {
            pHelper = pricingHelper;
        }));

        it('should buy 0, 0, 1', function () {
            var books = [0, 0, 1];
            expect(pHelper.calc(books)).toBe(8 + (8 * 2 * 0.95));
        });

        it('should buy 0, 0, 1, 1', function () {
            var books = [0, 0, 1, 1];
            expect(pHelper.calc(books)).toBe(2 * (8 * 2 * 0.95));
        });

        it('should buy 0, 0, 1, 2, 2, 3', function () {
            var books = [0, 0, 1, 2, 2, 3];
            expect(pHelper.calc(books)).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));
        });

        it('should buy 0, 1, 1, 2, 3, 4', function () {
            var books = [0, 1, 1, 2, 3, 4];
            expect(pHelper.calc(books)).toBe(8 + (8 * 5 * 0.75));
        });
    });

    describe("edge discounts", function () {
        var pHelper = null;
        beforeEach(inject(function (pricingHelper) {
            pHelper = pricingHelper;
        }));

        it('should buy 0, 0, 1, 1, 2, 2, 3, 4', function () {
            var books = [0, 0, 1, 1, 2, 2, 3, 4];
            expect(pHelper.calc(books)).toBe(2 * (8 * 4 * 0.8));
        });

        it('should buy 0, 0, 1, 1, 2, 2, 3, 4', function () {
            var books = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4];
            expect(pHelper.calc(books)).toBe(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
        });
    });
});