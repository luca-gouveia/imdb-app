export class Usuario {
    constructor(
        public id?: Number | null,
        public nome?: string,
        public email?: string,
        public role?: string,
    ) {}
}