import 'package:college_app/widgets/custom_button.dart';
import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 60, 105, 167),
      appBar: AppBar(
        automaticallyImplyLeading: true,
        elevation: 0.0,
        backgroundColor: Colors.indigo,
        title: const Text('My Profile',
            style: TextStyle(
              fontSize: 26.0,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            )),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: ListView(children: [
          // Profile Picture & Basic Info
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20.0),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16.0),
            ),
            child: const Row(
              children: [
                Column(
                  children: [
                    CircleAvatar(
                      radius: 40.0,
                      backgroundImage: AssetImage('lib/images/aliprofile.jpg'),
                    ),
                  ],
                ),
                SizedBox(width: 12.0),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Ali Ahmad',
                      style: TextStyle(
                        fontSize: 22.0,
                        fontWeight: FontWeight.bold,
                        color: Color.fromARGB(255, 0, 41, 112),
                      ),
                    ),
                    SizedBox(height: 8.0),
                    Text(
                      '220243',
                      style: TextStyle(fontSize: 16.0, color: Colors.black),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),

          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(20.0),
            decoration: BoxDecoration(
              color: const Color.fromARGB(255, 255, 255, 255),
              borderRadius: BorderRadius.circular(16.0),
            ),
            child: Column(
              children: [
                profileRow('Department', 'Information Technology'),
                profileRow('Email', '3li.a7med.xr@gmail.com'),
                profileRow('GPA', '3.45'),
                profileRow('Semester', '6'),
                profileRow('Major', 'Information Technology'),
                profileRow('Phone', '+201015023441'),
              ],
            ),
          ),
          const SizedBox(
            height: 20,
          ),
          Image.asset('lib/images/Profile data-bro.png')
        ]),
      ),
    );
  }

  Widget profileRow(String title, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        children: [
          SizedBox(
            width: 120,
            child: Text(
              "$title :",
              style: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Colors.indigo),
            ),
          ),
          Text(
            value,
            style: const TextStyle(fontSize: 16, color: Colors.black),
          ),
        ],
      ),
    );
  }
}
