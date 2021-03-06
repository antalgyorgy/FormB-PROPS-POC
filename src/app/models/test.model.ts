//dummy/mock objektum a panelek szimulálásához
export class Test {
    "@id": string = 'P24304';
    "@title": string = 'Szövegdoboz';
    "@undefined": undefined;
    "@required": boolean = true;
    "@fontSize": number = 20;
    "@unexpectedNumber": number = 100;
    "@select1": string = '0';
    "@color": string = 'RED';
    "@code": any = 'console.log(\'it works\')';
    _config = {
        "@select1": {
            type: 'select',
            options: [
                { label: 'Option 0', value: 0 },
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
            ]
        },
        "@color": {
            type: 'select',
            options: [
                { label: 'Zöld', value: 'GREEN' },
                { label: 'Piros', value: 'RED' },
                { label: 'Kék', value: 'BLUE' }
            ]
        },
        "@required": {
            type: 'checkbox',
            options: null
        },
        "@fontSize": {
            type: 'number',
            options: {
                min: 10,
                max: 100,
                step: 2
            }
        },
        "@code": {
            type: 'code',
            options: { theme: 'vs-dark', language: 'javascript', automaticLayout:'true' }
        }
    };

    func = (params) => {
        // some function not to list in params
        console.log(params);
    };

    constructor() { }
}
