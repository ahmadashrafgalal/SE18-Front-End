import 'package:flutter/material.dart';

class EventDetailsScreen extends StatelessWidget {
  final String title;
  final String date;
  final String description;

  const EventDetailsScreen({super.key, required this.title, required this.date, required this.description});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
        backgroundColor: Colors.blueAccent,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(
              'Event Date: $date',
              style: const TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold, color: Colors.blueAccent),
            ),
            const SizedBox(height: 16.0),
            const Text(
              'Description:',
              style: TextStyle(fontSize: 16.0, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8.0),
            Text(
              description,
              style: TextStyle(fontSize: 16.0, color: Colors.grey[700]),
            ),
          ],
        ),
      ),
    );
  }
}
