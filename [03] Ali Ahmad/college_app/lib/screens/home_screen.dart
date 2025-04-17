import 'package:college_app/screens/courses.dart';
import 'package:college_app/screens/login_screen.dart';
import 'package:college_app/screens/results.dart';
import 'package:flutter/material.dart';
import 'timetable_screen.dart';
import 'assignments_screen.dart';
import 'events_screen.dart';
import 'profile_screen.dart';
import 'qr_code_screen.dart';
import '../widgets/category_card.dart';

class HomeScreen extends StatelessWidget {
  final VoidCallback toggleTheme;
  const HomeScreen({super.key, required this.toggleTheme});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.indigo,
              ),
              child: Column(
                children: [
                  CircleAvatar(
                    backgroundImage: AssetImage('lib/images/aliprofile.jpg'),
                    radius: 40,
                  ),
                  SizedBox(height: 10),
                  Text(
                    'Ali Ahmad',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),
            ListTile(
              leading: const Icon(Icons.dark_mode),
              title: const Text('Dark/Light Mode'),
              onTap: toggleTheme,
            ),
            ListTile(
              leading: const Icon(Icons.logout, color: Colors.red),
              title: const Text(
                'Logout',
                style:
                    TextStyle(color: Colors.red, fontWeight: FontWeight.bold),
              ),
              onTap: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(
                    builder: (context) => Login(toggleTheme: toggleTheme),
                  ),
                );
              },
            ),
          ],
        ),
      ),
      body: Builder(
        builder: (context) => Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 24),
          child: ListView(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => ProfileScreen()),
                      );
                    },
                    child: const CircleAvatar(
                      radius: 25,
                      backgroundImage: AssetImage('lib/images/aliprofile.jpg'),
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.menu, size: 40),
                    onPressed: () {
                      Scaffold.of(context).openDrawer();
                    },
                  ),
                ],
              ),
              const Padding(
                padding: EdgeInsets.only(top: 10),
                child: Text(
                  'Welcome back !,\n Ali Ahmad',
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,

                  ),
                ),
              ),
              const SizedBox(height: 20),
              SizedBox(
                height: 700,
                child: GridView.count(
                  crossAxisCount: 2,
                  crossAxisSpacing: 50.0,
                  mainAxisSpacing: 15.0,
                  children: [
                    CategoryCard(
                      title: 'Timetable',
                      imagePath: 'lib/images/schedule.png',
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => TimetableScreen()),
                        );
                      },
                    ),
                    CategoryCard(
                      title: 'Assignments',
                      imagePath: 'lib/images/assignment.png',
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => AssignmentsScreen()),
                        );
                      },
                    ),
                    CategoryCard(
                      title: 'Events',
                      imagePath: 'lib/images/calendar.png',
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => EventsScreen()),
                        );
                      },
                    ),
                    CategoryCard(
                      title: 'QR Code',
                      imagePath: 'lib/images/qr.png',
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const QRCodeScreen()),
                        );
                      },
                    ),
                    CategoryCard(
                      title: 'Results',
                      imagePath: 'lib/images/evaluation.png',
                      onTap: () {
                        // Replace with real screen later
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const ResultsScreen()),
                        );
                      },
                    ),
                    CategoryCard(
                      title: 'Courses',
                      imagePath: 'lib/images/online-learning.png',
                      onTap: () {
                        // Replace with real screen later
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => CoursesScreen()),
                        );
                      },
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
