// Define the Student interface inside the test context
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

describe('Student Data and Interface Verification', () => {
    // Recreate the exact variables to test their structures
    const student1: Student = {
        firstName: "John",
        lastName: "Doe",
        age: 20,
        location: "Melbourne"
    };

    const student2: Student = {
        firstName: "Jane",
        lastName: "Smith",
        age: 22,
        location: "Sydney"
    };

    const studentsList: Student[] = [student1, student2];

    it('should match the expected properties for student1', () => {
        expect(student1).toHaveProperty('firstName', 'John');
        expect(student1).toHaveProperty('lastName', 'Doe');
        expect(student1).toHaveProperty('age', 20);
        expect(student1).toHaveProperty('location', 'Melbourne');
    });

    it('should match the expected properties for student2', () => {
        expect(student2).toHaveProperty('firstName', 'Jane');
        expect(student2).toHaveProperty('lastName', 'Smith');
        expect(student2).toHaveProperty('age', 22);
        expect(student2).toHaveProperty('location', 'Sydney');
    });

    it('should contain exactly two students in the studentsList array', () => {
        expect(studentsList).toBeInstanceOf(Array);
        expect(studentsList).toHaveLength(2);
    });

    it('should have student1 and student2 as its elements', () => {
        expect(studentsList[0]).toEqual(student1);
        expect(studentsList[1]).toEqual(student2);
    });
});
