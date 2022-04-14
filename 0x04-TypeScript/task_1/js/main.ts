/* Task 1 */
export interface Teacher {
    firstName:string,
    lastName:string,
    fullTimeEmployee:boolean,
    yearsOfExperience?:number,
    location:string,
    [propName : string] : any;
}

/* Task 2 */
export interface Directors extends Teacher {
    numberOfReports : number
}

