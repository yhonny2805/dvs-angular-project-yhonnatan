
export class Currentuser {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public role: string,
        public termsAndConditions: boolean
    ) { }
}
