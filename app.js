const yargs = require('yargs'); //required npm module (yargs)
const students = require('./students') //required own module

// use command from yargs (add)
yargs.command({
    command: 'add',
    describe: 'addStudent',
    builder: {
        id: {
            describe: 'studentId',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'studentName',
            demandOption: true,
            type: 'string'
        },
        degree: {
            describe: 'studentDegree',
            demandOption: true,
            type: 'number'
        },
    },
    handler: (argv) => {
        students.addStudent(argv.id, argv.name, argv.degree);
    }
});

// use command from yargs (delete)
yargs.command({
    command: 'delete',
    describe: 'deleteStudent',
    builder: {
        id: {
            describe: 'studentId',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        students.deleteStudent(argv.id);
    }
});

// use command from yargs (read)
yargs.command({
    command: 'read',
    describe: 'readStudent',
    builder: {
        id: {
            describe: 'studentId',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        students.readStudent(argv.id);
    }
});

// use command from yargs (list)
yargs.command({
    command: 'list',
    describe: 'listStudent',
    handler: (argv) => {
        students.listStudent();
    }
});

yargs.parse();