import 'dart:ffi';

import 'package:college_app/constants.dart';
import 'package:college_app/widgets/custom_button.dart';
import 'package:college_app/widgets/custom_text_form.dart';
import 'package:college_app/screens/home_screen.dart';
import 'package:college_app/widgets/show_snackbar.dart';
import 'package:flutter/material.dart';
import 'package:modal_progress_hud_nsn/modal_progress_hud_nsn.dart';

class Signup extends StatefulWidget {
  static String id = 'Signup page';
  final VoidCallback toggleTheme;

  const Signup({super.key, required this.toggleTheme});

  @override
  State<Signup> createState() => _SignupState();
}

class _SignupState extends State<Signup> {
  String? email, password;
  bool isLoading = false;
  GlobalKey<FormState> formKey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    return ModalProgressHUD(
      inAsyncCall: isLoading,
      child: Scaffold(
        backgroundColor: kscreenColor,
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Form(
            key: formKey,
            child: ListView(
              children: [
                const SizedBox(height: 100),
                Stack(
                  alignment: Alignment.topCenter,
                  clipBehavior: Clip.none,
                  children: [
                    Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(20),
                        color: kPrimaryColor,
                      ),
                      padding: const EdgeInsets.fromLTRB(20, 50, 20, 30),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          const Center(
                            child: Text(
                              "Sign up",
                              style: TextStyle(
                                color: Color(0xff334155),
                                fontSize: 22,
                                fontFamily: 'Encode Sans Expanded',
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          const SizedBox(height: 30),
                          const Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Email',
                              style: TextStyle(
                                  color: Color(0xff64748D), fontSize: 14),
                            ),
                          ),
                          const SizedBox(height: 5),
                          CustomTextFormField(
                            secured: false,
                            onChanged: (value) {
                              email = value;
                            },
                            textHint: 'example@gmail.com',
                          ),
                          const SizedBox(height: 15),
                          const Align(
                            alignment: Alignment.bottomLeft,
                            child: Text(
                              'Password',
                              style: TextStyle(
                                  color: Color(0xff64748D), fontSize: 14),
                            ),
                          ),
                          const SizedBox(height: 5),
                          CustomTextFormField(
                            secured: true,
                            onChanged: (value) {
                              password = value;
                            },
                            icon: const Icon(
                              Icons.remove_red_eye_outlined,
                              color: Colors.black,
                            ),
                          ),
                          Container(
                            alignment: Alignment.bottomLeft,
                            height: 22,
                            child: const Text(
                              'At least 8 characters and one number.',
                              style: TextStyle(fontSize: 12),
                            ),
                          ),
                          const SizedBox(
                            height: 44,
                          ),
                          CustomButton(
                            buttonContent: 'Sign up',
                            color: kTextColor,
                            iconColor: const Color(0xffffffff),
                            onTap: () {
                              ShowSnackBar(context, 'Logged in successfully ✅');
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => HomeScreen(
                                      toggleTheme: widget.toggleTheme),
                                ),
                              );
                            },
                          ),
                          const SizedBox(
                            height: 22,
                          ),
                          const Row(
                            children: [
                              Expanded(
                                child: Divider(
                                  color: Colors.grey,
                                  thickness: 1,
                                ),
                              ),
                              Padding(
                                padding: EdgeInsets.symmetric(horizontal: 10),
                                child: Text(
                                  'OR',
                                  style: TextStyle(color: Color(0xff94A3B8)),
                                ),
                              ),
                              Expanded(
                                child: Divider(
                                  color: Colors.grey,
                                  thickness: 1,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(
                            height: 14,
                          ),
                          CustomButton(
                            imageUrl: 'images/search.png',
                            buttonContent: 'Sign up with Google',
                            color: const Color(0xffffffffff),
                            iconColor: const Color(0xff334155),
                            onTap: () {
                              ShowSnackBar(context, 'Logged in successfully ✅');
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => HomeScreen(
                                      toggleTheme: widget.toggleTheme),
                                ),
                              );
                            },
                          ),
                          const SizedBox(
                            height: 53,
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              const Text(
                                'Already have an account ? ',
                                style: TextStyle(
                                  fontSize: 14,
                                  color: kTextColor,
                                ),
                              ),
                              GestureDetector(
                                onTap: () {
                                  Navigator.pop(context);
                                },
                                child: const Text(
                                  'Log in',
                                  style: TextStyle(
                                    fontSize: 14,
                                    color: Color(0xff3B82F6),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                    Positioned(
                      top: -25,
                      child: CircleAvatar(
                        radius: 30,
                        backgroundColor: Colors.white,
                        child: ClipOval(
                          child: Image.asset(
                            'images/logo3.png',
                            width: 50,
                            height: 50,
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
