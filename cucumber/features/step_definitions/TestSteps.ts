import {Then} from '@cucumber/cucumber';

Then(
    /^a step is invoked$/,
    () => console.log('Step 1 invoked')
);

Then(
    /^a case insensitive step is invoked$/i,
    () => console.log('Step 2 invoked')
);

Then(
    /^a step with ([A-Z]) and ([0-9]) as its letter and number of the day is invoked/,
    {timeout: -1},
    async (l: string, n: number) => await Promise.resolve(console.log('Step 3 invoked with ' + l + ' and ' + n))
);
