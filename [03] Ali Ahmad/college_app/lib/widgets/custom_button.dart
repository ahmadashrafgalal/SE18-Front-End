import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  String? buttonContent;
  VoidCallback? onTap;
  Color? color, iconColor;
  IconData? icon;
  CustomButton(
      {super.key,
      this.buttonContent,
      this.onTap,
      this.color,
      this.icon,
      this.iconColor});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(15),
          color: color ?? Colors.cyan,
        ),
        height: 60,
        child: Center(
            child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              '$buttonContent',
              style: TextStyle(
                fontSize: 24,
                color: iconColor,
              ),
            ),
            const SizedBox(
              width: 20,
            ),
            Icon(
              icon,
              color: iconColor,
              size: 24,
            ),
          ],
        )),
      ),
    );
  }
}
