import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // Sample student data
    String studentName = "Ali Ahmad";
    String studentID = "12345";
    String email = "ali.ahmad@college.edu";
    String profileImage =
        "lib/images/aliprofile.jpg"; // Placeholder for profile image URL
    double gpa = 3.85; // Example GPA
    String department = "Computer Science"; // Example department
    String phoneNumber = "+20 123 456 789"; // Example phone number
    double percentage = 89.5; // Example percentage

    return Scaffold(
      appBar: AppBar(
        title: const Text('Student Profile'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          // Allows scrolling if the content exceeds the screen height
          child: Column(
            children: <Widget>[
              CircleAvatar(
                radius: 60.0,
                backgroundImage: NetworkImage(profileImage),
                backgroundColor: Colors.transparent,
              ),
              const SizedBox(height: 20),
              Text(
                studentName,
                style: const TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 10),
              Text(
                'ID: $studentID',
                style: TextStyle(fontSize: 18, color: Colors.grey[600]),
              ),
              const SizedBox(height: 5),
              Text(
                'Email: $email',
                style: TextStyle(fontSize: 18, color: Colors.grey[600]),
              ),
              const SizedBox(height: 10),
              Text(
                'GPA: $gpa',
                style: TextStyle(fontSize: 18, color: Colors.grey[600]),
              ),
              const SizedBox(height: 5),
              Text(
                'Department: $department',
                style: TextStyle(fontSize: 18, color: Colors.grey[600]),
              ),
              const SizedBox(height: 5),
              Text(
                'Phone: $phoneNumber',
                style: TextStyle(fontSize: 18, color: Colors.grey[600]),
              ),
              const SizedBox(height: 5),
              Text(
                'Percentage: $percentage%',
                style: TextStyle(fontSize: 18, color: Colors.grey[600]),
              ),
              const SizedBox(height: 20),
              // Edit Profile Button (optional)
              ElevatedButton(
                onPressed: () {
                  // Implement your edit profile functionality here
                },
                child: const Text('Edit Profile'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
