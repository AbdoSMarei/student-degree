const fs = require('fs') // require fileSystem
const chalk = require('chalk') // require chalk

////////////////////////////
//function addStudent() to app
const addStudent = (id, name, degree) => {
    const students = loadStudent();
    const dublicateId = students.filter((student) => {
        return student.id === id;
    });
    if (dublicateId.length === 0) {
        students.push({
            id,
            name,
            degree
        })
        saveStudent(students);
        console.log(chalk.blueBright.inverse('newStudentAdded!!!'));
    } else {
        console.log(chalk.redBright.inverse('idAlreadyExisted???'));
    };

};

////////////////////////////////
//function deleteStudent() to app
const deleteStudent = (id) => {
    const students = loadStudent();
    const data = students.filter((student) => {
        return student.id !== id;
    });
    if (students.length > data.length) {
        console.log(chalk.blueBright.inverse('studentDeleted!!!'))
        saveStudent(data);
    } else {
        console.log(chalk.redBright.inverse('studentAlreadyDeleted???'))
    }
};

////////////////////////////////
//function readStudent() to app
const readStudent = (id) => {
    const students = loadStudent();
    const data = students.find((student) => {
        return student.id === id;
    });
    if (data) {
        console.log(chalk.greenBright(data.name) + " : " + chalk.blueBright(data.degree));
        studentClass(students);
    } else {
        console.log(chalk.redBright.inverse('idIsInvaild???'))
    }
};

////////////////////////////////
//function listStudent() to app
const listStudent = () => {
    const students = loadStudent();
    console.log(chalk.redBright.inverse('listOfStudent'));
    // students.forEach((student) => {
    //     console.log("Id : " + chalk.greenBright(student.id) + " Name : " + chalk.blueBright(student.name) + " degree : " + chalk.blueBright(student.degree))
    // });
    studentClass(students)
};

//return array of object
const loadStudent = () => {
    try {
        const dataBuff = fs.readFileSync('students.json');
        const dataJSON = dataBuff.toString();
        return JSON.parse(dataJSON);
        console.log(dataJSON);
    } catch (e) {
        return []
    }
}

//write in students.json
const saveStudent = (student) => {
    const dataJSON = JSON.stringify(student);
    fs.writeFileSync('students.json', dataJSON);
}

// find student class by degree
const studentClass = (student) => {
    const students = loadStudent();
    students.forEach((student) => {
        console.log("Id : " + chalk.greenBright(student.id) + " Name : " + chalk.blueBright(student.name) + " degree : " + chalk.blueBright(student.degree));
        if (student.degree <= 100 && student.degree >= 90) {
            console.log('classA');
        } else if ((student.degree < 90 && student.degree >= 80)) {
            console.log('classB');
        } else if ((student.degree < 80 && student.degree >= 70)) {
            console.log('classC');
        } else if ((student.degree < 70 && student.degree >= 60)) {
            console.log('classD');
        } else if ((student.degree < 60 && student.degree >= 50)) {
            console.log('classE');
        } else {
            console.log('your degree is bad try hard!!!');
        }
    });
}

//export own modules
module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listStudent
};