import 'package:flutter/material.dart';

// ignore: must_be_immutable
class CustomTextFormField extends StatelessWidget {
  CustomTextFormField(
      {super.key,
      required this.onChanged,
      required this.secured,
      this.textHint,
      required this.icon});
  String? textHint;
  Function(String)? onChanged;
  final Icon? icon;
  bool? secured;
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      obscureText: secured!,
      validator: (data) {
        if (data!.isEmpty) {
          return 'this field is required !';
        }
        return null;
      },
      style: const TextStyle(
        color: Colors.indigo,
      ),
      onChanged: onChanged,
      decoration: InputDecoration(
        prefixIcon: icon,
        hintText: textHint,
        focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(20),
            borderSide: const BorderSide(color: Colors.indigo)),
        hintStyle: const TextStyle(color: Colors.indigo),
        enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(20),
            borderSide: const BorderSide(color: Colors.indigo)),
        border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(20),
            borderSide: const BorderSide(color: Colors.indigo)),
      ),
    );
  }
}
