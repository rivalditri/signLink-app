import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:hexcolor/hexcolor.dart';

var primaryColor = HexColor("#FFD95A");
var hoverColor = HexColor("#C07F00");
var pressedColor = HexColor("#4C3D3D");
var darkColor = HexColor("##4c702e");
var lightColor = HexColor('#BFDCA6');

ThemeData themeData = ThemeData(
    primaryColor: primaryColor,
    hoverColor: hoverColor,
    textTheme: TextTheme(
      bodyText1: TextStyle(
          fontFamily: 'SF Pro Display',
          fontStyle: FontStyle.normal,
          fontSize: 14,
          color: Colors.white),
      bodyText2: TextStyle(
          fontFamily: 'SF Pro Display',
          fontStyle: FontStyle.normal,
          fontSize: 16,
          color: Colors.white),
      headline1: TextStyle(
          fontFamily: 'SF Pro Display',
          fontStyle: FontStyle.normal,
          fontSize: 24,
          fontWeight: FontWeight.w600,
          color: HexColor("#000000")),
      headline2: TextStyle(
          fontFamily: 'SF Pro Display',
          fontStyle: FontStyle.normal,
          fontSize: 12,
          color: HexColor("#000000")),
    ));
