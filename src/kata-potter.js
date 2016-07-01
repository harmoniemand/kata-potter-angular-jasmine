(function (angular) {
    'use strict';

    var myApp = angular.module('myApp', []);

    myApp.factory('pricingHelper', function () {
        return {
            calc: function (books) {
                if (books == null) {
                    books = [];
                }

                var stacks = [];

                _.each(books, function (book) {
                    var stack = _.find(stacks, function (stack) {
                        return stack.indexOf(book) < 0;
                    });

                    if (stack == null) {
                        stack = [];
                        stack.push(book);
                        stacks.push(stack);
                    } else {
                        stack.push(book);
                    }
                });

                if (stacks.length > 1 && _.last(stacks).length == 3 && stacks[stacks.length - 2].length == 5) {
                     var foo = _.last(stacks[stacks.length - 2]);
                     _.last(stacks).push(foo);

                    stacks[stacks.length - 2].pop();
                }

                return this.sumStacks(stacks);
            },

            sumStacks: function (stacks) {
                var sum = 0;

                _.each(stacks, function (stack) {
                    var discount = 0;

                    if (stack.length == 2) { discount = 0.05; }
                    else if (stack.length == 3) { discount = 0.1; }
                    else if (stack.length == 4) { discount = 0.2; }
                    else if (stack.length == 5) { discount = 0.25; }

                    var stackSum = stack.length * 8;
                    stackSum = stackSum - (stackSum * discount);
                    sum += stackSum;
                });

                return sum;
            }
        };
    });
})(angular);