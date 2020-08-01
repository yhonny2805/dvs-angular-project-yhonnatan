
export class Newcustomer {

    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public email: string,
        public role: any,
        public password: string,
        public confirmPassword: string,
        public tc: boolean

    ) { }
}
