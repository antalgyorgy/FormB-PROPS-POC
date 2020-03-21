export class Test {
    "@id": string = 'P24304';
    "@title": string = 'Szövegdoboz';
    "@null": any = null;
    "@undefined": undefined;
    "@required": boolean = true;
    "@expectedNumber": number = 30;
    "@unexpectedNumber": number = 100;
    "@select1": string = '0';
    "@color": string = 'RED';
    _config = {
        "@select1": {
            type: 'select',
            options: [
                {label: 'Option 1', value: 0},
                {label: 'Option 2', value: 1},
                {label: 'Option 3', value: 2},
            ]
        },
        "@color": {
            type: 'select',
            options: [
                {label: 'Zöld', value: 'GREEN'},
                {label: 'Piros', value: 'RED'},
                {label: 'Kék', value: 'BLUE'}
            ]
        },
        "@required": {
            type: 'checkbox',
            options: null
        },
        "@expectedNumber": {
            type: 'number',
            options: [
                10, // min
                140, // max
                5 // step
            ]
        }
    };

    constructor() {}
}
