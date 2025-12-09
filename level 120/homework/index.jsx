function Students() {
    const students = [
        { id: 1, name: "Mate", age: 15, grade: "A" },
        { id: 2, name: "Ana", age: 17, grade: "B" },
        { id: 3, name: "Luka", age: 15, grade: "A" },
        { id: 4, name: "Nino", age: 16, grade: "C" }
    ];

    return (
        <div>
        <h1>Student List</h1>

        {students.map(student => (
            <StudentItem
            key={student.id}
            name={student.name}
            age={student.age}
            grade={student.grade}
            />
        ))}
        </div>
    );
}

export default Students;
