import 'package:flutter/material.dart';

class ResultsScreen extends StatelessWidget {
  const ResultsScreen({super.key});

  final List<Map<String, dynamic>> results = const [
    {
      'subject': 'Mathematics',
      'code': 'MATH101',
      'degree': 85,
      'hours': 3,
    },
    {
      'subject': 'Physics',
      'code': 'PHYS201',
      'degree': 73,
      'hours': 2,
    },
    {
      'subject': 'Programming',
      'code': 'CS102',
      'degree': 95,
      'hours': 3,
    },
    {
      'subject': 'History',
      'code': 'HIST105',
      'degree': 60,
      'hours': 1,
    },
    {
      'subject': 'Statistics',
      'code': 'STAT110',
      'degree': 88,
      'hours': 2,
    },
  ];

  String getGrade(double degree) {
    if (degree >= 90) {
      return 'A';
    } else if (degree >= 80) {
      return 'B';
    } else if (degree >= 70) {
      return 'C';
    } else if (degree >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

  double calculateGPA(List<Map<String, dynamic>> results) {
    double totalPoints = 0;
    int totalHours = 0;

    for (var result in results) {
      double degree = result['degree'].toDouble();
      int hours = result['hours'];

      double gradePoint;
      if (degree >= 90) {
        gradePoint = 4.0;
      } else if (degree >= 80) {
        gradePoint = 3.5;
      } else if (degree >= 70) {
        gradePoint = 3.0;
      } else if (degree >= 60) {
        gradePoint = 2.0;
      } else {
        gradePoint = 0.0;
      }

      totalPoints += gradePoint * hours;
      totalHours += hours;
    }

    return totalHours == 0 ? 0 : totalPoints / totalHours;
  }

  @override
  Widget build(BuildContext context) {
    double gpa = calculateGPA(results);

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.indigo,
        title: const Text('Results',
            style: TextStyle(
              fontSize: 26.0,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            )),
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: [
            const Text(
              'Your Academic Results',
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.indigo,
              ),
            ),
            const SizedBox(height: 10),
            Expanded(
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: DataTable(
                  columns: const [
                    DataColumn(
                      label: Text(
                        'Subject',
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ),
                    DataColumn(
                      label: Text(
                        'Code',
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ),
                    DataColumn(
                      label: Text(
                        'Degree',
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ),
                    DataColumn(
                      label: Text(
                        'Hours',
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ),
                    DataColumn(
                      label: Text(
                        'Grade',
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ),
                  ],
                  rows: List.generate(
                    results.length,
                    (index) {
                      final result = results[index];
                      final grade = getGrade(result['degree'].toDouble());

                      return DataRow(
                        cells: [
                          DataCell(Text(result['subject'])),
                          DataCell(Text(result['code'])),
                          DataCell(Text(result['degree'].toString())),
                          DataCell(Text(result['hours'].toString())),
                          DataCell(
                            Text(
                              grade,
                              style: TextStyle(
                                color: grade == 'A'
                                    ? Colors.green
                                    : grade == 'B'
                                        ? Colors.blue
                                        : grade == 'C'
                                            ? Colors.orange
                                            : grade == 'D'
                                                ? Colors.yellow
                                                : Colors.red,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                      );
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.indigo.shade100,
                borderRadius: BorderRadius.circular(12),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    'Your GPA:',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Text(
                    gpa.toStringAsFixed(2),
                    style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.indigo,
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
