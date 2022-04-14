interface DirectorInterface {
    workFromHome(): string;

    getCoffeeBreak(): string;

    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;

    getCoffeeBreak(): string;

    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    constructor() {
    }

    getCoffeeBreak(): string {
        return 'Getting a coffrr break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }

    workFromHome(): string {
        return 'Working from home';
    }

}

class Teacher implements TeacherInterface{
    constructor() {
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workFromHome(): string {
        return 'Cannot work from home';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary : number | string) : Teacher | Director {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}