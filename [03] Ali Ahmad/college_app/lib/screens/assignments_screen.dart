import 'package:flutter/material.dart';

class AssignmentsScreen extends StatelessWidget {
  // Example assignments data
  final List<Map<String, String>> assignments = [
    {
      'title': 'Math Assignment 1',
      'dueDate': '2025-04-10',
      'description': 'Solve the algebra problems from chapter 5.'
    },
    {
      'title': 'Physics Assignment 2',
      'dueDate': '2025-04-12',
      'description': 'Complete the lab report on projectile motion.'
    },
    {
      'title': 'Computer Science Assignment 3',
      'dueDate': '2025-04-15',
      'description': 'Build a simple mobile app using Flutter.'
    },
    {
      'title': 'Chemistry Assignment 4',
      'dueDate': '2025-04-20',
      'description': 'Write an essay on chemical bonding.'
    },
  ];

  AssignmentsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.indigo,
        title: const Text(
          'Assignments',
          style: TextStyle(
              fontSize: 24.0, fontWeight: FontWeight.bold, color: Colors.white),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: ListView.builder(
          itemCount: assignments.length,
          itemBuilder: (context, index) {
            final assignment = assignments[index];
            return Card(
              elevation: 4.0,
              margin: const EdgeInsets.symmetric(vertical: 8.0),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12.0),
              ),
              child: ListTile(
                contentPadding: const EdgeInsets.all(16.0),
                title: Text(
                  assignment['title'] ?? 'No Title',
                  style: const TextStyle(
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
                subtitle: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 8.0),
                    Text(
                      'Due Date: ${assignment['dueDate'] ?? 'No Date'}',
                      style: TextStyle(
                        fontSize: 14.0,
                        color: Colors.grey[600],
                      ),
                    ),
                    const SizedBox(height: 4.0),
                    Text(
                      'Description: ${assignment['description'] ?? 'No Description'}',
                      style: TextStyle(
                        fontSize: 14.0,
                        color: Colors.grey[700],
                      ),
                    ),
                  ],
                ),
                trailing: const Icon(
                  Icons.assignment_turned_in,
                  color: Colors.black,
                ),
                onTap: () {
                  // You can add tap functionality, e.g., view detailed assignment
                },
              ),
            );
          },
        ),
      ),
    );
  }
}
