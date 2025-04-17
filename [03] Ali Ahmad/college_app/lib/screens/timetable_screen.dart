import 'package:flutter/material.dart';

class TimetableScreen extends StatelessWidget {
  // Example timetable data
  final List<Map<String, String>> timetable = [
    {
      'day': 'Sunday',
      'time': '9:00 AM - 10:30 AM',
      'subject': 'Computer Networks'
    },
    {
      'day': 'Monday',
      'time': '9:00 AM - 11:00 AM',
      'subject': 'Software Development'
    },
    {
      'day': 'Monday',
      'time': '11:00 AM - 1:00 PM',
      'subject': 'Computer Networks'
    },
    {
      'day': 'Tuesday',
      'time': '9:00 AM - 11:00 AM',
      'subject': 'Intro to Multimedia'
    },
    {
      'day': 'Wednesday',
      'time': '10:00 AM - 12:00 PM',
      'subject': 'Virtual Reality'
    },
    {
      'day': 'Thursday',
      'time': '2:00 PM - 4:00 PM',
      'subject': 'Operating Systems'
    },
  ];

  TimetableScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: true,
        elevation: 0.0,
        backgroundColor: Colors.indigo,
        title: const Text(
          'Timetable',
          style: TextStyle(
            fontSize: 26.0,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
        flexibleSpace: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Colors.blueAccent, Colors.blue],
            ),
          ),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            // Group timetable entries by day
            for (var day in [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday'
            ])
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    day,
                    style: const TextStyle(
                      fontSize: 22.0,
                      fontWeight: FontWeight.bold,
                      color: Color.fromARGB(255, 11, 46, 107),
                    ),
                  ),
                  const SizedBox(height: 10.0),
                  // Filter timetable by the current day
                  ...timetable.where((item) => item['day'] == day).map((item) {
                    return Card(
                      elevation: 3.0,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12.0),
                      ),
                      margin: const EdgeInsets.symmetric(vertical: 8.0),
                      child: ListTile(
                        contentPadding: const EdgeInsets.symmetric(
                            vertical: 10.0, horizontal: 15.0),
                        leading: const Icon(
                          Icons.access_time,
                          color: Colors.blueAccent,
                        ),
                        title: Text(
                          item['subject'] ?? 'Unknown',
                          style: const TextStyle(
                            fontSize: 18.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        subtitle: Text(
                          '${item['time']}',
                          style: TextStyle(color: Colors.grey[600]),
                        ),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12.0),
                        ),
                        onTap: () {
                          // You can handle the tap here for more info about the class
                        },
                      ),
                    );
                  }),
                ],
              ),
          ],
        ),
      ),
    );
  }
}
