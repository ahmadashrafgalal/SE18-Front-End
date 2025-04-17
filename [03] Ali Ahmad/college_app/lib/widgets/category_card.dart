import 'package:flutter/material.dart';

class CategoryCard extends StatelessWidget {
  final String title;
  final String imagePath;
  final VoidCallback onTap;

  const CategoryCard(
      {super.key,
      required this.title,
      required this.imagePath,
      required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        elevation: 5.0, // Stronger shadow effect for a floating look
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(
              16.0), // Slightly more rounded for modern look
        ),
        color: Colors.black, // White background for the card
        child: ClipRRect(
          borderRadius:
              BorderRadius.circular(16.0), // Rounded corners for inner content
          child: Container(
            decoration: const BoxDecoration(color: Colors.indigo),
            padding:
                const EdgeInsets.symmetric(vertical: 20.0, horizontal: 15.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Image.asset(
                  imagePath,
                  height: 70,
                ),
                SizedBox(
                  height: 20,
                ),
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 14.0, // Larger font size for title
                    fontWeight: FontWeight.bold,
                    color: Colors.white, // White text for good contrast
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
