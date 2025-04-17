import 'package:flutter/material.dart';

class Course {
  final String name;
  final String code;
  final int creditHours;

  Course({
    required this.name,
    required this.code,
    required this.creditHours,
  });
}

class CoursesScreen extends StatelessWidget {
  CoursesScreen({super.key});

  final List<Course> courses = [
    Course(name: 'Mobile Development', code: 'CS-430', creditHours: 3),
    Course(name: 'Data Structures', code: 'CS-201', creditHours: 3),
    Course(name: 'Algorithms', code: 'CS-301', creditHours: 3),
    Course(name: 'Database Systems', code: 'CS-320', creditHours: 3),
    Course(name: 'Operating Systems', code: 'CS-350', creditHours: 3),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Courses'),
        backgroundColor: Colors.indigo[900],
        foregroundColor: Colors.white,
        elevation: 4,
      ),
      body: Container(
        child: ListView.builder(
          padding: const EdgeInsets.all(16),
          itemCount: courses.length,
          itemBuilder: (context, index) {
            final course = courses[index];
            return Card(
              elevation: 2,
              color: Colors.white38,
              margin: const EdgeInsets.symmetric(vertical: 8),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
              child: ListTile(
                contentPadding: const EdgeInsets.all(16),
                leading: Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.indigo[50],
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: Text(
                    course.code,
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: Colors.indigo[900],
                    ),
                  ),
                ),
                title: Text(
                  course.name,
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                trailing: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      '${course.creditHours} hrs',
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.grey[700],
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Icon(
                      Icons.school,
                      size: 20,
                      color: Colors.indigo[800],
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
